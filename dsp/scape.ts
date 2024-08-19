import { el, createNode, ElemNode } from "@elemaudio/core";

import { ScapeConvolver } from "../src/types";

 

  // Define our VFS paths for the IR buffers always uppercase, even if the filename has lowercase
  // because it is a Map key, not a real fs path
  const responses = [
    { path: "GLASS", attenuationDb: -18 },
    { path: "SUNPLATE", attenuationDb: -15 },
    { path: "TANGLEWOOD", attenuationDb: -18 },
    { path: "EUROPA", attenuationDb: -36 },
  ];


export default function SCAPE(refs, props, dryInputs, ...outputFromSRVB: ElemNode[]) {

  ///////////////////////////////////////////
  // SCAPE DSP setup
  const {  vectorData: hermiteNumbers = [1,0,0,0] }: { sampleRate: number, vectorData?: number[] } = props; // numbers
  const { scapeLevel }: { scapeLevel: ElemNode } = props; // nodes
  const hermiteNodes: ElemNode[] = [props.v1, props.v2, props.v3, props.v4]; // Hermite mixer as nodes
  const convolverNodes: Map< string, ElemNode[] > = new Map();
    convolverNodes.set( 'GLASS', [ props.GLASS_0, props.GLASS_1 ] );
    convolverNodes.set( 'SUNPLATE', [ props.SUNPLATE_0, props.SUNPLATE_1 ] );
    convolverNodes.set( 'TANGLEWOOD', [ props.TANGLEWOOD_0, props.TANGLEWOOD_1 ] );
    convolverNodes.set( 'EUROPA', [ props.EUROPA_0, props.EUROPA_1 ] );

  ////////////////////////////////////////////
  // SCAPE DSP functions

  // HERMITE vector cross fader
  function HermiteVecInterp(
    channel: number ,
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
          scapeConvolver( { path, index, process: hermiteNumbers[index], key, channel, attenuationDb, _in } ) 
      ));
    });
   
    return el.add(...mixer);
  }

  let scapeConvolver = (
   { 
    key,
    path,
    channel = 0,
    attenuationDb = -24,
    _in } : ScapeConvolver
  ) => {
     const attenuatedInputSignal: ElemNode = el.mul( el.db2gain( attenuationDb ) ,   _in );
    let selectConvolverRef = convolverNodes.get( path )![channel];
    return selectConvolverRef
  };



  let tailSectionLR = (_inputs: ElemNode[]) => [
    HermiteVecInterp( 0, hermiteNumbers, hermiteNodes, _inputs[0] ),
    HermiteVecInterp( 1, hermiteNumbers, hermiteNodes, _inputs[1] ),
  ];

  let scapeProcessLR = (_inputs: ElemNode[]) => [
   el.dcblock( el.mul( el.db2gain(2.5), tailSectionLR( _inputs )[0] ) ) ,
   el.dcblock( el.mul( el.db2gain(2.5), tailSectionLR( _inputs )[1] ) )
  ];

  const yL = el.select( scapeLevel , scapeProcessLR( outputFromSRVB )[0]  , outputFromSRVB[0] ) ; // crossfaded blend
  const yR = el.select( scapeLevel , scapeProcessLR( outputFromSRVB )[1]  , outputFromSRVB[1] ) ; // crossfaded blend

  return [yL, yR];
}
