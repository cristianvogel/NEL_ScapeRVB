import { el, ElemNode } from "@elemaudio/core";
import { DefaultIRSlot, IRMetaData } from "../src/types";

export default function SCAPE(props, dryInputs, ...outputFromSRVB: ElemNode[]) {


  const srvbBypass: ElemNode = el.sm(props.srvbBypass); 

  ///////////////////////////////////////////
  // SCAPE DSP setup
  const responses: Map<DefaultIRSlot, IRMetaData> = props.IRs;
  const scapeLevel = el.sm(props.scapeLevel); // nodes
  const position = el.sm(props.scapePosition); // nodes
  const hermiteNodes: ElemNode[] = [props.v1, props.v2, props.v3, props.v4].map(
    (n) => el.sm(n)
  ); // Hermite mixer as nodes
  const convolverNodes: Map<DefaultIRSlot, ElemNode[]> = new Map();
  convolverNodes.set("SURFACE", [props.SURFACE_0, props.SURFACE_1]);
  convolverNodes.set("TEMPLE", [props.TEMPLE_0, props.TEMPLE_1]);
  convolverNodes.set("LIGHT", [props.LIGHT_0, props.LIGHT_1]);
  convolverNodes.set("DEEPNESS", [props.DEEPNESS_0, props.DEEPNESS_1]);

  ////////////////////////////////////////////
  // SCAPE DSP functions

  const zero = el.const( {value: 0, key: 'srvb::mute' } );
  // HERMITE vector cross fader
  function HermiteVecInterp(
    channel: number,
    hermiteNodes: ElemNode[],
    _in: ElemNode
  ) {
    let mixer: ElemNode[] = [];
    responses.forEach((response: IRMetaData, slotName: DefaultIRSlot) => {
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
  return [yL, yR];
}
