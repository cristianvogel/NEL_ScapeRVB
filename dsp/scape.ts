
import { el, createNode, ElemNode } from '@elemaudio/core';


export default function scape(props, currentVec: ElemNode[], ...inputs: ElemNode[]) {

  console.log( `Current interpolation vector: ${currentVec}` );
  const { shaped }: { shaped: boolean,  sampleRate: number } = props; // numbers
  const {  mix, scape } : { mix: ElemNode, scape: ElemNode}  = props; // nodes

   // Create our custom nodes
  let convolver = (_props, ...childs) => createNode("convolver", _props, childs);


  // Define our paths always uppercase, even if the filename has lowercase
  // because it is a Map key, not a real fs path
  const responses = [
    { name: "GLASS", att: -24 },
    { name: "AMBIENCE", att: -12 },
    { name: "TANGLEWOOD", att: -24 },
    { name: "EUROPA", att: -36 }
  ];


  let convolveTail = (_path, shaped, key = "attIr_", channel = 0, attenuationDb = -24, _in) => {
    let path = (shaped ? "SHAPED_" : "") + _path + "_" + channel; // use upper case for everything in path
    return convolver({ path, key }, 
                      el.mul( el.db2gain( el.const({ value: attenuationDb, key: 'att_' + key })), 
                      _in));
  };


  // HERMITE vector cross fader

  function HermiteVecInterp(channel = 0, shaped = false, _currentVec: ElemNode[],  _in: ElemNode) {
    let mixer: ElemNode[] = []
    responses.forEach((response, i) => {
      const { name, att } = response;
      const key = `ir${name + i}`;
// possibly optimise here by conditionally not building silent IRs
      mixer.push(
        el.mul(
          el.sm(
           // el.const({ value: vectorInterp.at(t)[i], key })
           _currentVec[i]
          ),
          convolveTail( name, shaped, key, channel, att, _in )
        )
      );
    });
    return el.add(...mixer)
  }


  let tailSectionLR = (_inputs: ElemNode[]) => [
    el.mul( scape , HermiteVecInterp( 0, shaped, currentVec,  _inputs[0] ) ),
    el.mul( scape,  HermiteVecInterp( 1, shaped, currentVec, _inputs[1] ) )
  ];

  const erDryMix = [ el.add( el.mul( inputs[0], 0.5 ), el.mul( el.in({channel: 0}) , 0.5 ) ),
                      el.add( el.mul( inputs[1], 0.5 ), el.mul( el.in({channel: 1}) , 0.5 ) ) ];

  const yL = el.select( mix, tailSectionLR( erDryMix )[0], inputs[0] );
  const yR = el.select( mix, tailSectionLR( erDryMix )[1], inputs[1] );

  return [ yL, yR ];
}