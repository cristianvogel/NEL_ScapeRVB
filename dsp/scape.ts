import { el, createNode, ElemNode } from "@elemaudio/core";
import { REVERSE_BUFFER_PREFIX } from "../src/stores/constants";
import { ScapeConvolver } from "../src/types";

  // Create our custom nodes
  let convolver = (_props, ...childs) => createNode("convolver", _props, childs);

  // Define our VFS paths for the IR buffers always uppercase, even if the filename has lowercase
  // because it is a Map key, not a real fs path
  const responses = [
    { path: "GLASS", attenuationDb: -18 },
    { path: "SUNPLATE", attenuationDb: -15 },
    { path: "TANGLEWOOD", attenuationDb: -18 },
    { path: "EUROPA", attenuationDb: -36 },
  ];

  let count = 0;

export default function SCAPE(props, dryInputs, ...outputFromSRVB: ElemNode[]) {
  const { reverse = 1, vectorData: hermiteNumbers = [1,0,0,0] }: { reverse?: number; sampleRate: number, vectorData?: number[] } = props; // numbers
  const { scapeLevel }: { scapeLevel: ElemNode } = props; // nodes
  const hermiteNodes: ElemNode[] = [props.v1, props.v2, props.v3, props.v4]; // Hermite mixer as nodes

  //DBG:
  console.log( 'SCAPE called.....', count++ );

  // HERMITE vector cross fader
  function HermiteVecInterp(
    channel: number ,
    reverse: number ,
    hermiteNumbers: number[],
    hermiteNodes: ElemNode[],
    _in: ElemNode
  ) {
    let mixer: ElemNode[] = [];
    responses.forEach((response, index) => {
      const { path, attenuationDb } = response;
      const key = `key::${path}::${channel}`;
      mixer.push( 
        el.mul(
          hermiteNodes[index], 
          scapeConvolver( { path, index, reverse, process: hermiteNumbers[index], key, channel, attenuationDb, _in } ) 
      ));
    });
   
    return el.add(...mixer);
  }

  let scapeConvolver = (
   { path,
    index,
    reverse,
    process, 
    key = "attIr_",
    channel = 0,
    attenuationDb = -24,
    _in } : ScapeConvolver
  ) => {
    const dynamicPath = ( reverse > 0.5 ? REVERSE_BUFFER_PREFIX: "" ) + path + "_" + channel; // use upper case for everything in path
    const attenuatedInputSignal = el.mul( el.db2gain( attenuationDb ) ,   _in );
    return convolver( { key, path: dynamicPath, process: 1 }, attenuatedInputSignal );
  };

  

  let tailSectionLR = (_inputs: ElemNode[]) => [
    HermiteVecInterp( 0, reverse, hermiteNumbers, hermiteNodes, _inputs[0] ),
    HermiteVecInterp( 1, reverse, hermiteNumbers, hermiteNodes, _inputs[1] ),
  ];

  let scapeProcessLR = (_inputs: ElemNode[]) => [
   el.dcblock( el.mul( el.db2gain(2.5), tailSectionLR( _inputs )[0] ) ) ,
   el.dcblock( el.mul( el.db2gain(2.5), tailSectionLR( _inputs )[1] ) )
  ];

  const yL = el.select( scapeLevel , scapeProcessLR( outputFromSRVB )[0]  , outputFromSRVB[0] ) ; // crossfaded blend
  const yR = el.select( scapeLevel , scapeProcessLR( outputFromSRVB )[1]  , outputFromSRVB[1] ) ; // crossfaded blend

  return [yL, yR];
}
