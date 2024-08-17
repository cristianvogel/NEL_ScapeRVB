import { el, createNode, ElemNode } from "@elemaudio/core";
import { REVERSE_BUFFER_PREFIX } from "../src/stores/constants";

export default function scape(props, dryInputs, ...earlyReflections: ElemNode[]) {
  const { shaped }: { shaped: boolean; sampleRate: number } = props; // numbers
  const vectorData: number[] = props.vectorData;
  const { mix, scapeLevel }: { mix: ElemNode; scapeLevel: ElemNode } = props; // nodes
  const currentVec: ElemNode[] = [props.v1, props.v2, props.v3, props.v4]; // Hermite mixer
  // Create our custom nodes
  let convolver = (_props, ...childs) => createNode("convolver", _props, childs);

  // Define our VFS paths for the IR buffers always uppercase, even if the filename has lowercase
  // because it is a Map key, not a real fs path
  const responses = [
    { name: "GLASS", att: -18 },
    { name: "SUNPLATE", att: -15 },
    { name: "TANGLEWOOD", att: -18 },
    { name: "EUROPA", att: -36 },
  ];

  let scapeConvolver = (
    _path,
    shaped,
    process = 0, 
    key = "attIr_",
    channel = 0,
    attenuationDb = -24,
    _in
  ) => {
    let path = (shaped ? REVERSE_BUFFER_PREFIX: "") + _path + "_" + channel; // use upper case for everything in path
    return convolver(
      { path, process, key },
      el.mul(
        el.db2gain(el.const({ value: attenuationDb, key: "att_" + key })),
        _in
      )
    );
  };

  // HERMITE vector cross fader

  function HermiteVecInterp(
    channel = 0,
    shaped = false,
    vectorData: number[],
    _currentVec: ElemNode[],
    _in: ElemNode
  ) {
    let mixer: ElemNode[] = [];
    responses.forEach((response, i) => {
      const { name, att } = response;
      const key = `ir${name + i}`;
      // possibly optimise here by conditionally not building silent IRs
      mixer.push( 
        el.mul(
          _currentVec[i],
          scapeConvolver(name, shaped, vectorData[i], key, channel, att, _in)
      ));
    });
    return el.add(...mixer);
  }

  

  let tailSectionLR = (_inputs: ElemNode[]) => [
    HermiteVecInterp(0, shaped, vectorData, currentVec, _inputs[0] ),
    HermiteVecInterp(1, shaped, vectorData, currentVec, _inputs[1] ),
  ];

  let scapeTail = (_inputs: ElemNode[]) => [
   el.dcblock( el.mul( el.db2gain(2.5), tailSectionLR( _inputs )[0] ) ) ,
   el.dcblock( el.mul( el.db2gain(2.5), tailSectionLR( _inputs )[1] ) )
  ];



  const yL = el.select( scapeLevel , scapeTail( earlyReflections )[0]  , earlyReflections[0] ) ; // B
  const yR = el.select( scapeLevel , scapeTail( earlyReflections )[1]  , earlyReflections[1] ) ; // B

  return [yL, yR];
}
