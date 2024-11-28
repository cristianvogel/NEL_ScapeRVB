import { createNode, ElemNode, Renderer } from "@elemaudio/core";
import { RefMap } from "./RefMap";
import { JSONString } from "../src/types";
import { handleStateChange } from "./handleGraphUpdate";

// First, we initialize a custom Renderer instance that marshals our instruction
// batches through the __postNativeMessage__ function to direct the underlying native
// engine.
 export const core = new Renderer((batch: any) => {
  // @ts-ignore
   globalThis.__postNativeMessage__(JSON.stringify(batch));
});
// Next, a RefMap for coordinating our refs and asset keys
const refs: RefMap = new RefMap(core);

// Register our custom Convolver node with Elementary runtime.
// TS will show it is not being used, but it is being used in the SCAPE
// so DO NOT DELETE THIS
let convolver = (_props: any, ...childs: ElemNode[]) => createNode("convolver", _props, childs);


// @ts-ignore
globalThis.__receiveStateChange__ = function (rawState: JSONString)  {
  handleStateChange(refs, rawState );
}


/////////////////////////////////////////////////////////////////
// NOTE: This is highly experimental and should not yet be relied on
// as a consistent feature.
// @ts-ignore
globalThis.__receiveHydrationData__ = (data: JSONString) => {
  const payload = JSON.parse(data);
  //@ts-ignore
  const nodeMap = core._delegate.nodeMap;

  for (let [k, v] of Object.entries(payload)) {
    nodeMap.set(parseInt(k, 16), {
      symbol: "__ELEM_NODE__",
      kind: "__HYDRATED__",
      hash: parseInt(k, 16),
      props: v,
      generation: {
        current: 0,
      },
    });
  }
};

