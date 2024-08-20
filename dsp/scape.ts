import { el, ElemNode } from "@elemaudio/core";

  // Define our VFS paths for the IR buffers always uppercase, even if the filename has lowercase
  // because it is a Map key, not a real fs path
  const responses = [
    { path: "GLASS", attenuationDb: -18 },
    { path: "SURFACE", attenuationDb: -15 },
    { path: "TANGLEWOOD", attenuationDb: -18 },
    { path: "EUROPA", attenuationDb: -36 },
  ];


export default function SCAPE( props, dryInputs, ...outputFromSRVB: ElemNode[]) {

  ///////////////////////////////////////////
  // SCAPE DSP setup
  const scapeLevel = el.sm( props.scapeLevel ); // nodes
  const position = el.sm(  props.scapePosition ); // nodes
  const hermiteNodes: ElemNode[] = [ props.v1, props.v2, props.v3, props.v4 ].map( (n) =>  el.sm(n) ); // Hermite mixer as nodes
  const convolverNodes: Map< string, ElemNode[] > = new Map();
    convolverNodes.set( 'GLASS', [ props.GLASS_0, props.GLASS_1 ] );
    convolverNodes.set( 'SURFACE', [ props.SURFACE_0, props.SURFACE_1 ] );
    convolverNodes.set( 'TANGLEWOOD', [ props.TANGLEWOOD_0, props.TANGLEWOOD_1 ] );
    convolverNodes.set( 'EUROPA', [ props.EUROPA_0, props.EUROPA_1 ] );

  ////////////////////////////////////////////
  // SCAPE DSP functions

  // HERMITE vector cross fader
  function HermiteVecInterp(
    channel: number ,
    hermiteNodes: ElemNode[],
    _in: ElemNode
  ) {
    let mixer: ElemNode[] = [];
    responses.forEach((response, index) => {
      mixer.push( 
        el.mul(
          hermiteNodes[index], 
          scapeConvolver( response.path, channel ) 
      ));
    });
   
    return el.add(...mixer);
  }

  let scapeConvolver = ( path, channel ) => {
    let selectConvolverRef = convolverNodes.get( path )![channel];
    return selectConvolverRef
  };



  let tailSectionLR = (_inputs: ElemNode[]) => [
    HermiteVecInterp( 0, hermiteNodes, _inputs[0] ),
    HermiteVecInterp( 1, hermiteNodes, _inputs[1] ),
  ];

  let scapeProcessLR = (_inputs: ElemNode[]) => [
   el.dcblock( el.mul( el.db2gain(2.5), tailSectionLR( _inputs )[0] ) ) ,
   el.dcblock( el.mul( el.db2gain(2.5), tailSectionLR( _inputs )[1] ) )
  ];

  const asLeftPan =  ( x: ElemNode): ElemNode => { return   el.select( position, x, el.mul(x, el.db2gain( 3 ) ) )  };
  const asRightPan =   ( x: ElemNode): ElemNode => { return el.select( position, el.mul( x, el.db2gain( 4.5 ) ) , x )  };

  const yL = asLeftPan(   el.select( scapeLevel , scapeProcessLR( outputFromSRVB )[0]  , outputFromSRVB[0] ) ) ; // crossfaded blend
  const yR = asRightPan(  el.select( scapeLevel , scapeProcessLR( outputFromSRVB )[1]  , outputFromSRVB[1] ) ) ; // crossfaded blend

  return [yL, yR];
}
