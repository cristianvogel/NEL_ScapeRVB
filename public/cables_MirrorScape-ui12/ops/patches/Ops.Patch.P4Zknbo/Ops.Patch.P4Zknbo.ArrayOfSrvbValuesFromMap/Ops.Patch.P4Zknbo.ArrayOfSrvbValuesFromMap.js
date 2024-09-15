// SRVB params handler

let uiVars = {
    "size": 0.2,
    "diffuse": 0,
    "mix": 0.15,
    "tone": 0.15,
};

const
    srcObj = op.inObject("Object"),
    result = op.outArray("Result");

srcObj.onChange = () =>
{
    if (!srcObj.get()) return;
    const src = srcObj.get();

    result.set([
        src.mix,
        src.diffuse,
        src.tone,
        src.size
    ]);
};
