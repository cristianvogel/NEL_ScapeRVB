import { el, ElemNode } from "@elemaudio/core";



export default function SCAPE(props, dryInputs, ...outputFromSRVB: ElemNode[]) {
  if (props.scapeBypass)  return outputFromSRVB;
  ///////////////////////////////////////////
  // SCAPE DSP setup
  const responses = props.IRs;
  const scapeLevel = el.sm(props.scapeLevel); // nodes
  const position = el.sm(props.scapePosition); // nodes
  const hermiteNodes: ElemNode[] = [props.v1, props.v2, props.v3, props.v4].map(
    (n) => el.sm(n)
  ); // Hermite mixer as nodes
  const convolverNodes: Map<string, ElemNode[]> = new Map();
  convolverNodes.set("GLASS", [props.GLASS_0, props.GLASS_1]);
  convolverNodes.set("SURFACE", [props.SURFACE_0, props.SURFACE_1]);
  convolverNodes.set("AMBIENZ", [props.AMBIENZ_0, props.AMBIENZ_1]);
  convolverNodes.set("EUROPA", [props.EUROPA_0, props.EUROPA_1]);

  ////////////////////////////////////////////
  // SCAPE DSP functions

  // HERMITE vector cross fader
  function HermiteVecInterp(
    channel: number,
    hermiteNodes: ElemNode[],
    _in: ElemNode
  ) {
    let mixer: ElemNode[] = [];
    responses.forEach((response, index) => {
      mixer.push(
        el.mul( hermiteNodes[index], scapeConvolver(response.name, channel) )
      );
    });

    return el.add(...mixer);
  }

  let scapeConvolver = (path, channel) => {
    let selectConvolverRef = convolverNodes.get(path)![channel];
    return selectConvolverRef;
  };

  let crossFadeN_LR = (_inputs: ElemNode[]) => [
    HermiteVecInterp(0, hermiteNodes, _inputs[0]),
    HermiteVecInterp(1, hermiteNodes, _inputs[1]),
  ];

  const asLeftPan = (x: ElemNode): ElemNode => {
    return el.select(position, x, el.mul(x, el.db2gain(3)));
  };
  const asRightPan = (x: ElemNode): ElemNode => {
    return el.select(position, el.mul(x, el.db2gain(3)), x);
  };

  let yL = el.add(
    el.mul(scapeLevel, asLeftPan(crossFadeN_LR(outputFromSRVB)[1])),    // crossed over
    outputFromSRVB[0]
  ); // crossfaded blend
  let yR = el.add(
    el.mul(scapeLevel, asRightPan(crossFadeN_LR(outputFromSRVB)[0])), // crossed over
    outputFromSRVB[1]
  ); // crossfaded blend

  return [yL, yR];
}
