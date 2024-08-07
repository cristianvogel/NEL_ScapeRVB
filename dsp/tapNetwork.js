//@ts-check

import invariant from 'invariant';
import { el } from '@elemaudio/core';


function customTapNetwork(props, _inputs) {

    let controls_size =  props.size,
        controls_preDelay = props.preDelay, // 0 - 1
        controls_excursion = props.excursion,
        controls_preScape = props.preScape, // overall wet level
        controls_dimension = props.dimension,
        controls_drive = props.drive,
        controls_fb_amount = props.build,
        controls_fb_cutoff = props.tone; // hz


    const sr = props.sampleRate;

    const NUMBER_DIFFUSION_STAGES = 4;

    ///////////////////////////////////
    const ap_cascade_settings = {
        left: [
            { ms: 4.771, fb: 0.243 },
            { ms: 3.595, fb: 0.433 },
            { ms: 12.73, fb: 0.53 },
            { ms: 15.307, fb: 0.433 }
        ],
        right: [
            { ms: 4.771, fb: 0.253 },
            { ms: 3.595, fb: 0.48 },
            { ms: 12.73, fb: 0.33 },
            { ms: 15.30, fb: 0.433 }
        ]
    };

    let integrator = (t60, _in) => el.pole(el.tau2pole(t60), _in);
    const fbMod = {
        left: integrator(el.mul(el.sub(1.1, controls_excursion), 5), el.mul(controls_excursion, el.latch(el.train(50), el.abs(el.cycle((1 / 3)))))),
        right: integrator(el.mul(el.sub(1.1, controls_excursion), 5), el.mul(controls_excursion, el.latch(el.train(50), el.abs(el.cycle((1 / 5))))))
    };

    const samps2ms = (samples) => el.mul(el.div(samples, el.sr()), 1000);
    const ms2sampsAsNumber = (ms) => sr * (ms / 1000);   // substitue size with lastKnownSampeRate in native code

    function allpassTimeInMS({ key, size = sr, ms, delayScale, fb, scale }, _in, _id) {  // substitue size with lastKnownSampeRate in native code
        let msNode = _id === 'left' ? el.ms2samps(ms) : el.mul(controls_dimension, el.ms2samps(ms));

        let maxDelayInSamp = Math.min(size, ms2sampsAsNumber(ms));
        let len;
        if (typeof delayScale === "number") {
            len = el.mul(msNode, el.const({ key: `${key}_len_${_id}`, value: delayScale }));
        } else {
            len = el.mul(msNode, el.div(1, delayScale));
        }
        len = el.add(len, fbMod[_id])
        let attenuatedInput = el.mul(_in, scale, el.sub(1, fb))
        let ff = el.mul(-1, attenuatedInput)
        const node = el.add(
            ff,
            el.delay({ size: maxDelayInSamp }, len, fb, attenuatedInput)
        );
        return node;
    }

    function allpassTimeInSamp({ key, size = 48000, samp, delayScale, fb, scale }, _in, _id) {  // substitue size with lastKnownSampeRate in native code
        let msNode = samps2ms(samp);
        let len;
        if (typeof delayScale === "number") {
            len = el.mul(msNode, el.const({ key: `${key}_lensamp_${_id}`, value: delayScale }));
        } else {
            len = el.mul(msNode, el.div(1, delayScale));
        }
        let attenuatedInput = el.mul(scale, _in);
        len = el.add(len, fbMod[_id])
        let ff = el.mul(-1, attenuatedInput)
        const node = el.add(
            ff,
            el.delay({ size }, len, fb, attenuatedInput)
        );
        return node;
    }

    const diffusion = (_in, _id) => {

        let chain = el.dcblock(_in);
        for (let i = 0; i < NUMBER_DIFFUSION_STAGES; i++) {
            let diffusionMod = el.mul((NUMBER_DIFFUSION_STAGES + 1) - i, fbMod[_id]);
            chain = allpassTimeInMS(
                {
                    key: `ap_${_id}_${i}`,
                    size: 48000,
                    scale: 0.5,
                    delayScale: el.add(1, diffusionMod),
                    ...ap_cascade_settings[_id][i],
                },
                chain,
                _id
            );
        }
        return chain;
    };

    const predelay = (_in) => el.delay({ size: sr }, el.mul(el.ms2samps(250), controls_preDelay), 0.1, _in); // norm param into 250 ms
    const input_LPF = (_in) => el.mm1p(el.prewarp(16000), _in);
    const input_HPF = (_in) => el.mm1p({ mode: 'highpass' }, el.prewarp(80), _in);
    // const sidechain = (_in) => el.env(el.tau2pole(0.01), el.tau2pole(0.1), _in)
    // const limiter = (_in, bypass) => bypass ? _in : el.skcompress(0.1, 400, -12, 12, 12, el.add(...inputs), _in);
    const fbOut = (name) => el.dcblock(el.tapIn({ name }));
    const fbIn = (name, _in) => el.tapOut({ name }, _in);

    function tanDrive(input, bypass = false, gain = 1.618) {
        return !bypass ? el.tanh(el.mul(1.618, el.sm(el.add(1, controls_drive)), input)) : input;
    }


    const tapNames = (_id) => {
        return { small: "small-" + _id, large: "large-" + _id };
    };


    const mixWithTap = ({ tapId, tapScale, crossed = false }, _in, _id) => {

        const __id = crossed
            ? _id === "left"
                ? "right"
                : "left"
            : _id;
        let tapScale_fbAtt = el.mul(tapScale, el.sub(1, controls_fb_amount));
        const _mixed = el.add(
            _in,
            el.mul(tapScale_fbAtt, fbOut(tapNames(__id)[tapId]))
        );

        return _mixed;
    };
    /////// MIX WITH TAP?  EXCURSSSION
    const excursionAP = (_in, _id) => {

        return allpassTimeInSamp(
            {
                key: `mod-ap-ex-${_id}`,
                scale: 1,
                delayScale: el.add(1, el.mul(fbMod[_id], controls_excursion)),
                samp: 1800,
                fb: 0,
            },
            mixWithTap({ tapId: "large", tapScale: controls_fb_amount }, el.mul(el.db2gain(-3), tanDrive(el.lowpass(controls_fb_cutoff, 0.01, _in))), _id),  // this is ok as Number from ui_controls
            _id
        )
    };

    const inputStage = [
        diffusion( input_HPF( input_LPF( predelay(_inputs[0]) ) ), 'left'),
        diffusion( input_HPF( input_LPF( predelay(_inputs[1]) ) ), 'right')
    ];




    const fbLowPass = (_in, _id) => { return el.lowpass(controls_fb_cutoff, 0, _in) };


    const tankExcursion = [
        fbLowPass(excursionAP(inputStage[0], 'left'), 'left'),
        fbLowPass(excursionAP(inputStage[1], 'right'), 'right')
    ];

    const tankStage1 = [
        mixWithTap({ tapId: "small", tapScale: 0.5, crossed: false }, tankExcursion[0], 'left'),
        mixWithTap({ tapId: "small", tapScale: 0.5, crossed: false }, tankExcursion[1], 'right')
    ];


    const tankStage2 = [
        el.mul(controls_fb_amount,
            el.add(el.mul(tankStage1[0], -0.5),
                mixWithTap({ tapId: "small", tapScale: controls_fb_amount, crossed: false }, tankStage1[0], 'left'))),
        el.mul(controls_fb_amount,
            el.add(el.mul(tankStage1[1], -0.5),
                mixWithTap({ tapId: "small", tapScale: controls_fb_amount, crossed: false }, tankStage1[1], 'right')))
    ]

    const orderedInputs = {
        left: [ // [0] 
            { connection: tankStage1[1], swell: { ms: 6.3, scale: -1 } },
            { connection: tankExcursion[1], swell: { ms: 8.9, scale: 1 } },
            { connection: tankStage2[1], swell: { ms: 35.8, scale: -1 } },
            { connection: tankStage1[0], swell: { ms: 64.2, scale: -1, preTap: ["small", 89.24] } },
            { connection: tankExcursion[0], swell: { ms: 66.8, scale: -1 } },
            { connection: tankStage2[0], swell: { ms: 67, scale: 1, preTap: ["large", 106.28] } },
            { connection: tankExcursion[1], swell: { ms: 99.8, scale: 1 } },
        ],
        right: [ // [1]
            { connection: tankStage2[0], swell: { ms: 4.1, scale: -1 } },
            { connection: tankStage1[1], swell: { ms: 6.3, scale: -1, preTap: ["small", 60.48] } },
            { connection: tankStage1[0], swell: { ms: 11.2, scale: -1 } },
            { connection: tankExcursion[0], swell: { ms: 11.8, scale: 1 } },
            { connection: tankExcursion[1], swell: { ms: 70.8, scale: -1 } },
            { connection: tankStage2[1], swell: { ms: 89.7, scale: 1, preTap: ["large", 125] } },
            { connection: tankExcursion[0], swell: { ms: 121.7, scale: 1 } },
        ],
    };

    function buildDelayBankFor(
        _id,
        _orderedInputs = orderedInputs
    ) {
        const swellSettings = _orderedInputs[_id].map((input) => {
            return input.swell;
        });

        const connections = _orderedInputs[_id].map((input) => {
            return input.connection;
        });

        let bank = new Array();

        for (let i = 0; i < connections.length; i++) {
            const { ms, scale: sign, preTap } = swellSettings[i];

            const _in = el.mul(el.div(1, NUMBER_DIFFUSION_STAGES), connections[i]);

            if (preTap) {
                const [tapName, tapDelayMs] = preTap;
                bank.push(
                    el.mul(
                        fbIn(
                            tapNames(_id)[tapName],
                            el.mul(controls_fb_amount,
                                input_HPF(el.delay({ size: sr }, el.ms2samps(tapDelayMs), controls_fb_amount,
                                    el.mul(el.sub(1, controls_fb_amount), _in))))
                        )
                    )
                );
            }
            const stage = el.mul(
                1 / connections.length,
                sign,
                el.delay({ size: sr },
                    el.ms2samps(ms),
                    controls_size, _in)
            );
            bank.push(stage);
        }
        return bank;
    }

    const delayBanks = [buildDelayBankFor('left'), buildDelayBankFor('right')];

    const sum = [el.add(...delayBanks[0]), el.add(...delayBanks[1])]

    return [ el.mul(controls_preScape, sum[0]), el.mul(controls_preScape, sum[1])];

}


export default function tapNetwork(props, xl, xr) {
    invariant(typeof props === 'object', 'Unexpected props object');
    invariant(typeof xl === 'object', 'Null input into tapNetwork');
    return customTapNetwork(props, [xl, xr]); 
}

