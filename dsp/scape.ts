import { el, ElemNode } from "@elemaudio/core";
import { DefaultIRSlotName, IRMetaData } from "../src/types";

export default function SCAPE(props, dryInputs, ...outputFromSRVB: ElemNode[]) {


  const zero = el.const( {value: 0, key: 'srvb::mute' } );
  const one = el.const( {value: 1, key: 'srvb::unity' } );

  const srvbBypass: ElemNode = el.sm(props.srvbBypass); 
  const scapeMode: ElemNode = el.round( props.scapeMode );
  const unity: ElemNode = el.select( one, one, scapeMode ); // this is a hack to force a render when the scapeMode changes

  ///////////////////////////////////////////
  // SCAPE DSP setup
  const responses: Map<DefaultIRSlotName, IRMetaData> = props.IRs;
  const scapeLevel = el.sm( el.mul( el.db2gain(1.5), unity, props.scapeLevel)); // Level of convolved output boosted here
  const position = el.sm( props.scapePosition ); // nodes
  const hermiteNodes: ElemNode[] = [props.v1, props.v2, props.v3, props.v4].map(
    (x) => el.smooth(el.tau2pole(0.05), x)
  ); // cast Hermite mixer as nodes
  const convolverNodes: Map<DefaultIRSlotName, ElemNode[]> = new Map();
  convolverNodes.set("SURFACE", [props.SURFACE_0, props.SURFACE_1]);
  convolverNodes.set("TEMPLE", [props.TEMPLE_0, props.TEMPLE_1]);
  convolverNodes.set("LIGHT", [props.LIGHT_0, props.LIGHT_1]);
  convolverNodes.set("DEEPNESS", [props.DEEPNESS_0, props.DEEPNESS_1]);

  ////////////////////////////////////////////
  // SCAPE DSP functions




  // HERMITE vector cross fader
  function HermiteVecInterp(
    channel: number,
    hermiteNodes: ElemNode[],
    _in: ElemNode
  ) {
    let mixer: ElemNode[] = [];
    responses.forEach((response: IRMetaData, slotName: DefaultIRSlotName) => {
      mixer.push(
        el.mul( hermiteNodes[response.index], scapeConvolver(slotName, channel) )
      );
    });

    return el.add(...mixer);
  }

  let scapeConvolver = (path, channel) => {
    if (!convolverNodes.has(path)) {
      console.log(`No convolver for path: ${path}`);
      return zero;
    }
    let selectConvolverRef = convolverNodes.get(path)![channel];
    return selectConvolverRef;
  };

  let vectorProcessorPair = (_inputs: ElemNode[]) => [
    HermiteVecInterp(0, hermiteNodes, _inputs[0]),
    HermiteVecInterp(1, hermiteNodes, _inputs[1]),
  ];

  const asLeftPan = (x: ElemNode): ElemNode => {
    return el.select(position, x, el.mul(x, el.db2gain(3)));
  };
  const asRightPan = (x: ElemNode): ElemNode => {
    return el.select(position, el.mul(x, el.db2gain(3)), x);
  };

  const getDrySource = ( channel: number ): ElemNode=> el.select( srvbBypass, zero, outputFromSRVB[channel] ) ;
  
  let yL = el.add(
    el.mul(scapeLevel, asLeftPan( vectorProcessorPair( outputFromSRVB )[1])),    // crossed over
    getDrySource(0)
  ); // crossfaded blend
  let yR = el.add(
    el.mul(scapeLevel, asRightPan( vectorProcessorPair( outputFromSRVB )[0])), // crossed over
    getDrySource(1) 
  ); // crossfaded blend
  
 if ( props.scapeBypass ) 
  return [ getDrySource(0), getDrySource(1) ]; // bypass  
else
  return [  yL, yR ];
}
