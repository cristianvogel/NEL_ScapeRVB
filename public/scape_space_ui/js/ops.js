"use strict";

var CABLES=CABLES||{};
CABLES.OPS=CABLES.OPS||{};

var Ops=Ops || {};
Ops.Gl=Ops.Gl || {};
Ops.Ui=Ops.Ui || {};
Ops.Net=Ops.Net || {};
Ops.Anim=Ops.Anim || {};
Ops.Html=Ops.Html || {};
Ops.Json=Ops.Json || {};
Ops.Math=Ops.Math || {};
Ops.Vars=Ops.Vars || {};
Ops.Array=Ops.Array || {};
Ops.Patch=Ops.Patch || {};
Ops.Number=Ops.Number || {};
Ops.String=Ops.String || {};
Ops.Boolean=Ops.Boolean || {};
Ops.Devices=Ops.Devices || {};
Ops.Gl.GLTF=Ops.Gl.GLTF || {};
Ops.Sidebar=Ops.Sidebar || {};
Ops.Trigger=Ops.Trigger || {};
Ops.Gl.Phong=Ops.Gl.Phong || {};
Ops.Graphics=Ops.Graphics || {};
Ops.Gl.Matrix=Ops.Gl.Matrix || {};
Ops.Gl.Meshes=Ops.Gl.Meshes || {};
Ops.Gl.Shader=Ops.Gl.Shader || {};
Ops.Standalone=Ops.Standalone || {};
Ops.Ui.Routing=Ops.Ui.Routing || {};
Ops.Gl.Textures=Ops.Gl.Textures || {};
Ops.Math.Compare=Ops.Math.Compare || {};
Ops.Devices.Mouse=Ops.Devices.Mouse || {};
Ops.Net.WebSocket=Ops.Net.WebSocket || {};
Ops.Patch.P4Zknbo=Ops.Patch.P4Zknbo || {};
Ops.Patch.PBktIwq=Ops.Patch.PBktIwq || {};
Ops.Patch.PxdLHGq=Ops.Patch.PxdLHGq || {};
Ops.Gl.ImageCompose=Ops.Gl.ImageCompose || {};
Ops.Array.PointArray=Ops.Array.PointArray || {};
Ops.Devices.Keyboard=Ops.Devices.Keyboard || {};
Ops.Gl.ShaderEffects=Ops.Gl.ShaderEffects || {};
Ops.Graphics.Geometry=Ops.Graphics.Geometry || {};



// **************************************************************
// 
// Ops.Patch.P4Zknbo.SubPatch1
// 
// **************************************************************

Ops.Patch.P4Zknbo.SubPatch1 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_9fkoygcno=op.inTrigger(\"9fkoygcno\");\nport_9fkoygcno.setUiAttribs({title:\"Render\",});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_9fkoygcno = addedOps[i].outTrigger(\"innerOut_9fkoygcno\");\ninnerOut_9fkoygcno.setUiAttribs({title:\"Render\"});\nport_9fkoygcno.onTriggered = () => { innerOut_9fkoygcno.trigger(); };\n\n    }\nif(addedOps[i].innerOutput)\n{\n}\n}\n};\n","subpatch_json":"{\"ops\":[{\"id\":\"85rseo930\",\"uiAttribs\":{\"subPatch\":\"ydntu5lbo\"},\"storage\":{},\"portsIn\":[{\"name\":\"data\",\"value\":\"\"},{\"name\":\"glb File\",\"value\":\"/assets/66c8bba9b731425e29f47a4a/NEL-Logo.draco.glb\",\"display\":\"file\"},{\"name\":\"Draw\",\"value\":1},{\"name\":\"Camera index\",\"value\":0},{\"name\":\"Camera\",\"value\":\"None\"},{\"name\":\"Animation\",\"value\":\"\"},{\"name\":\"Center index\",\"value\":2},{\"name\":\"Center\",\"value\":\"XZ\"},{\"name\":\"Rescale\",\"value\":1},{\"name\":\"Rescale Size\",\"value\":2},{\"name\":\"Time\",\"value\":0},{\"name\":\"Sync to timeline\",\"value\":0},{\"name\":\"Loop\",\"value\":1},{\"name\":\"Normals Format index\",\"value\":0},{\"name\":\"Normals Format\",\"value\":\"XYZ\"},{\"name\":\"Vertices Format index\",\"value\":0},{\"name\":\"Vertices Format\",\"value\":\"XYZ\"},{\"name\":\"Calc Normals index\",\"value\":0},{\"name\":\"Calc Normals\",\"value\":\"Auto\"},{\"name\":\"Hide Nodes\",\"value\":0},{\"name\":\"Use Material Properties\",\"value\":0},{\"name\":\"Active\",\"value\":1}],\"portsOut\":[{\"name\":\"Generator\",\"value\":\"Khronos glTF Blender I/O v4.2.60\"},{\"name\":\"GLTF Version\",\"value\":2},{\"name\":\"Anim Length\",\"value\":0},{\"name\":\"Anim Time\",\"value\":0},{\"name\":\"Loading\",\"value\":false}],\"objName\":\"Ops.Gl.GLTF.GltfScene_v4\"},{\"id\":\"nbmadl6p6\",\"uiAttribs\":{\"subPatch\":\"ydntu5lbo\"},\"storage\":{},\"portsIn\":[{\"name\":\"Material Name\",\"value\":\"mat0\"}],\"portsOut\":[{\"name\":\"Material\",\"links\":[{\"portIn\":\"Materials\",\"portOut\":\"Material\",\"objIn\":\"85rseo930\",\"objOut\":\"nbmadl6p6\"}]}],\"objName\":\"Ops.Gl.GLTF.GltfSetMaterial\"},{\"id\":\"ymzn2u1wr\",\"uiAttribs\":{\"subPatch\":\"ydntu5lbo\"},\"storage\":{},\"portsIn\":[{\"name\":\"Material Name\",\"value\":\"Material.001\"}],\"portsOut\":[{\"name\":\"Material\",\"links\":[{\"portIn\":\"Materials\",\"portOut\":\"Material\",\"objIn\":\"85rseo930\",\"objOut\":\"ymzn2u1wr\"}]}],\"objName\":\"Ops.Gl.GLTF.GltfSetMaterial\"},{\"id\":\"6wtj1mxj5\",\"uiAttribs\":{\"subPatch\":\"ydntu5lbo\"},\"storage\":{},\"portsOut\":[{\"name\":\"innerOut_9fkoygcno\",\"title\":\"Render\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"innerOut_9fkoygcno\",\"objIn\":\"alz1qp4y2\",\"objOut\":\"6wtj1mxj5\"},{\"portIn\":\"Render\",\"portOut\":\"innerOut_9fkoygcno\",\"objIn\":\"ce52znu67\",\"objOut\":\"6wtj1mxj5\"},{\"portIn\":\"render\",\"portOut\":\"innerOut_9fkoygcno\",\"objIn\":\"mgntydb26\",\"objOut\":\"6wtj1mxj5\"}]}],\"objName\":\"Ops.Ui.SubPatchInput\"},{\"id\":\"lt3kjnr3e\",\"uiAttribs\":{\"subPatch\":\"ydntu5lbo\"},\"storage\":{},\"objName\":\"Ops.Ui.SubPatchOutput\"},{\"id\":\"alz1qp4y2\",\"uiAttribs\":{\"subPatch\":\"ydntu5lbo\"},\"storage\":{},\"portsIn\":[{\"name\":\"r\",\"value\":1},{\"name\":\"g\",\"value\":0.514},{\"name\":\"b\",\"value\":0.262},{\"name\":\"Opacity\",\"value\":1},{\"name\":\"AO Intensity\",\"value\":1},{\"name\":\"Normal Map Intensity\",\"value\":0.812},{\"name\":\"Repeat X\",\"value\":1},{\"name\":\"Repeat Y\",\"value\":1},{\"name\":\"Offset X\",\"value\":0},{\"name\":\"Offset Y\",\"value\":0.02},{\"name\":\"Screen Space Normals\",\"value\":0},{\"name\":\"Calc normal tangents\",\"value\":1},{\"name\":\"Opacity TexCoords Transform\",\"value\":0},{\"name\":\"Discard Transparent Pixels\",\"value\":0},{\"name\":\"Alpha Mask Source index\",\"value\":0},{\"name\":\"Alpha Mask Source\",\"value\":\"Luminance\"}],\"portsOut\":[{\"name\":\"Shader\",\"links\":[{\"portIn\":\"Shader\",\"portOut\":\"Shader\",\"objIn\":\"ymzn2u1wr\",\"objOut\":\"alz1qp4y2\"}]}],\"objName\":\"Ops.Gl.Shader.MatCapMaterial_v3\"},{\"id\":\"ce52znu67\",\"uiAttribs\":{\"subPatch\":\"ydntu5lbo\"},\"storage\":{},\"portsIn\":[{\"name\":\"r\",\"value\":0.22},{\"name\":\"g\",\"value\":1},{\"name\":\"b\",\"value\":0.262},{\"name\":\"Opacity\",\"value\":1},{\"name\":\"AO Intensity\",\"value\":1},{\"name\":\"Normal Map Intensity\",\"value\":0.118},{\"name\":\"Repeat X\",\"value\":1},{\"name\":\"Repeat Y\",\"value\":1},{\"name\":\"Offset X\",\"value\":0},{\"name\":\"Offset Y\",\"value\":0},{\"name\":\"Screen Space Normals\",\"value\":0},{\"name\":\"Calc normal tangents\",\"value\":1},{\"name\":\"Opacity TexCoords Transform\",\"value\":0},{\"name\":\"Discard Transparent Pixels\",\"value\":0},{\"name\":\"Alpha Mask Source index\",\"value\":0},{\"name\":\"Alpha Mask Source\",\"value\":\"Luminance\"}],\"portsOut\":[{\"name\":\"Shader\",\"links\":[{\"portIn\":\"Shader\",\"portOut\":\"Shader\",\"objIn\":\"nbmadl6p6\",\"objOut\":\"ce52znu67\"}]}],\"objName\":\"Ops.Gl.Shader.MatCapMaterial_v3\"},{\"id\":\"96qgwcwln\",\"uiAttribs\":{\"subPatch\":\"ydntu5lbo\"},\"storage\":{},\"portsIn\":[{\"name\":\"File\",\"value\":\"/assets/6697c3b245eb5d333bae2007/NEL_SRVB.webp\",\"display\":\"file\"},{\"name\":\"Filter index\",\"value\":2},{\"name\":\"Filter\",\"value\":\"mipmap\"},{\"name\":\"Wrap index\",\"value\":0},{\"name\":\"Wrap\",\"value\":\"repeat\"},{\"name\":\"Anisotropic index\",\"value\":0},{\"name\":\"Anisotropic\",\"value\":\"0\"},{\"name\":\"Data Format index\",\"value\":3},{\"name\":\"Data Format\",\"value\":\"RGBA\"},{\"name\":\"Flip\",\"value\":0},{\"name\":\"Pre Multiplied Alpha\",\"value\":0},{\"name\":\"Active\",\"value\":1},{\"name\":\"Save Memory\",\"value\":1},{\"name\":\"Add Cachebuster\",\"value\":0}],\"portsOut\":[{\"name\":\"Texture\",\"links\":[{\"portIn\":\"Normal\",\"portOut\":\"Texture\",\"objIn\":\"alz1qp4y2\",\"objOut\":\"96qgwcwln\"},{\"portIn\":\"Normal\",\"portOut\":\"Texture\",\"objIn\":\"ce52znu67\",\"objOut\":\"96qgwcwln\"}]},{\"name\":\"Width\",\"value\":256},{\"name\":\"Height\",\"value\":256},{\"name\":\"Aspect Ratio\",\"value\":1},{\"name\":\"Loaded\",\"value\":1},{\"name\":\"Loading\",\"value\":0}],\"objName\":\"Ops.Gl.Texture_v2\"},{\"id\":\"mgntydb26\",\"uiAttribs\":{\"subPatch\":\"ydntu5lbo\"},\"storage\":{},\"portsIn\":[{\"name\":\"posX\",\"value\":0},{\"name\":\"posY\",\"value\":-0.56},{\"name\":\"posZ\",\"value\":0.16},{\"name\":\"scale\",\"value\":1},{\"name\":\"rotX\",\"value\":0},{\"name\":\"rotY\",\"value\":0},{\"name\":\"rotZ\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"trigger\",\"objIn\":\"85rseo930\",\"objOut\":\"mgntydb26\"}]}],\"objName\":\"Ops.Gl.Matrix.Transform\"}]}",};
const port_9fkoygcno=op.inTrigger("9fkoygcno");
port_9fkoygcno.setUiAttribs({title:"Render",});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_9fkoygcno = addedOps[i].outTrigger("innerOut_9fkoygcno");
innerOut_9fkoygcno.setUiAttribs({title:"Render"});
port_9fkoygcno.onTriggered = () => { innerOut_9fkoygcno.trigger(); };

    }
if(addedOps[i].innerOutput)
{
}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}


};

Ops.Patch.P4Zknbo.SubPatch1.prototype = new CABLES.Op();
CABLES.OPS["f5436c37-3e2b-43e6-a951-208e02171dc3"]={f:Ops.Patch.P4Zknbo.SubPatch1,objName:"Ops.Patch.P4Zknbo.SubPatch1"};




// **************************************************************
// 
// Ops.Patch.P4Zknbo.SubPatch3
// 
// **************************************************************

Ops.Patch.P4Zknbo.SubPatch3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_alrh6hig4=op.inTrigger(\"alrh6hig4\");\nport_alrh6hig4.setUiAttribs({title:\"render\",});\n\nconst port_8dittifdh=op.inTrigger(\"8dittifdh\");\nport_8dittifdh.setUiAttribs({title:\"Render\",});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_alrh6hig4 = addedOps[i].outTrigger(\"innerOut_alrh6hig4\");\ninnerOut_alrh6hig4.setUiAttribs({title:\"render\"});\nport_alrh6hig4.onTriggered = () => { innerOut_alrh6hig4.trigger(); };\n\nconst innerOut_8dittifdh = addedOps[i].outTrigger(\"innerOut_8dittifdh\");\ninnerOut_8dittifdh.setUiAttribs({title:\"Render\"});\nport_8dittifdh.onTriggered = () => { innerOut_8dittifdh.trigger(); };\n\n    }\nif(addedOps[i].innerOutput)\n{\n}\n}\n};\n","subpatch_json":"{\"ops\":[{\"id\":\"5samfghd8\",\"uiAttribs\":{\"subPatch\":\"on1ynf3wi\"},\"storage\":{},\"portsIn\":[{\"name\":\"data\",\"value\":\"\"},{\"name\":\"glb File\",\"value\":\"/assets/66c8bba9b731425e29f47a4a/tetragram_fixed_material.draco.glb\",\"display\":\"file\"},{\"name\":\"Draw\",\"value\":1},{\"name\":\"Camera index\",\"value\":0},{\"name\":\"Camera\",\"value\":\"None\"},{\"name\":\"Animation\",\"value\":\"\"},{\"name\":\"Center index\",\"value\":1},{\"name\":\"Center\",\"value\":\"XYZ\"},{\"name\":\"Rescale\",\"value\":1},{\"name\":\"Rescale Size\",\"value\":0.15},{\"name\":\"Time\",\"value\":0},{\"name\":\"Sync to timeline\",\"value\":0},{\"name\":\"Loop\",\"value\":1},{\"name\":\"Normals Format index\",\"value\":0},{\"name\":\"Normals Format\",\"value\":\"XYZ\"},{\"name\":\"Vertices Format index\",\"value\":0},{\"name\":\"Vertices Format\",\"value\":\"XYZ\"},{\"name\":\"Calc Normals index\",\"value\":2},{\"name\":\"Calc Normals\",\"value\":\"Never\"},{\"name\":\"Hide Nodes\",\"value\":0},{\"name\":\"Use Material Properties\",\"value\":0},{\"name\":\"Active\",\"value\":1}],\"portsOut\":[{\"name\":\"Generator\",\"value\":\"Khronos glTF Blender I/O v4.2.60\"},{\"name\":\"GLTF Version\",\"value\":2},{\"name\":\"Anim Length\",\"value\":0},{\"name\":\"Anim Time\",\"value\":0},{\"name\":\"Loading\",\"value\":false}],\"objName\":\"Ops.Gl.GLTF.GltfScene_v4\"},{\"id\":\"rmprhecho\",\"uiAttribs\":{\"subPatch\":\"on1ynf3wi\"},\"storage\":{},\"portsIn\":[{\"name\":\"posX\",\"value\":-1.74},{\"name\":\"posY\",\"value\":0.97},{\"name\":\"posZ\",\"value\":0.05},{\"name\":\"scale\",\"value\":0.98},{\"name\":\"rotX\",\"value\":13},{\"name\":\"rotY\",\"value\":60.5},{\"name\":\"rotZ\",\"value\":-15}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"69e8cxa7e\",\"objOut\":\"rmprhecho\"}]}],\"objName\":\"Ops.Gl.Matrix.Transform\"},{\"id\":\"z1zbpc5ex\",\"uiAttribs\":{\"subPatch\":\"on1ynf3wi\"},\"storage\":{},\"portsIn\":[{\"name\":\"Material Name\",\"value\":\"Material_0.001\"}],\"portsOut\":[{\"name\":\"Material\",\"links\":[{\"portIn\":\"Materials\",\"portOut\":\"Material\",\"objIn\":\"5samfghd8\",\"objOut\":\"z1zbpc5ex\"}]}],\"objName\":\"Ops.Gl.GLTF.GltfSetMaterial\"},{\"id\":\"znj0gtwab\",\"uiAttribs\":{\"subPatch\":\"on1ynf3wi\"},\"storage\":{},\"portsIn\":[{\"name\":\"r\",\"value\":1},{\"name\":\"g\",\"value\":1},{\"name\":\"b\",\"value\":1},{\"name\":\"Opacity\",\"value\":1},{\"name\":\"AO Intensity\",\"value\":1},{\"name\":\"Normal Map Intensity\",\"value\":0.361},{\"name\":\"Repeat X\",\"value\":0},{\"name\":\"Repeat Y\",\"value\":0},{\"name\":\"Offset X\",\"value\":0},{\"name\":\"Offset Y\",\"value\":0},{\"name\":\"Screen Space Normals\",\"value\":0},{\"name\":\"Calc normal tangents\",\"value\":1},{\"name\":\"Opacity TexCoords Transform\",\"value\":0},{\"name\":\"Discard Transparent Pixels\",\"value\":0},{\"name\":\"Alpha Mask Source index\",\"value\":0},{\"name\":\"Alpha Mask Source\",\"value\":\"Luminance\"}],\"portsOut\":[{\"name\":\"Shader\",\"links\":[{\"portIn\":\"Shader\",\"portOut\":\"Shader\",\"objIn\":\"z1zbpc5ex\",\"objOut\":\"znj0gtwab\"}]}],\"objName\":\"Ops.Gl.Shader.MatCapMaterial_v3\"},{\"id\":\"13dxix11f\",\"uiAttribs\":{\"subPatch\":\"on1ynf3wi\"},\"storage\":{},\"portsIn\":[{\"name\":\"Gradient\",\"value\":\"{\\\"keys\\\":[{\\\"pos\\\":0,\\\"posy\\\":0.5,\\\"r\\\":0.19606043020884192,\\\"g\\\":0.9551041666666666,\\\"b\\\":0.30280095564822357},{\\\"pos\\\":0,\\\"posy\\\":0.5,\\\"r\\\":0.19606043020884192,\\\"g\\\":0.9551041666666666,\\\"b\\\":0.30280095564822357},{\\\"pos\\\":0.25,\\\"posy\\\":0.7,\\\"r\\\":0.24755528330802917,\\\"g\\\":0.5961175041362186,\\\"b\\\":0.6089322916666666},{\\\"pos\\\":1,\\\"posy\\\":0.5,\\\"r\\\":0.9515885416666666,\\\"g\\\":0.01916651725769043,\\\"b\\\":0.643597891729076},{\\\"pos\\\":1,\\\"posy\\\":0.5,\\\"r\\\":0.9515885416666666,\\\"g\\\":0.01916651725769043,\\\"b\\\":0.643597891729076}]}\"},{\"name\":\"Direction index\",\"value\":0},{\"name\":\"Direction\",\"value\":\"X\"},{\"name\":\"Smoothstep\",\"value\":0},{\"name\":\"Step\",\"value\":1},{\"name\":\"Flip\",\"value\":1},{\"name\":\"sRGB\",\"value\":0},{\"name\":\"Oklab\",\"value\":0},{\"name\":\"Size\",\"value\":8},{\"name\":\"filter index\",\"value\":0},{\"name\":\"filter\",\"value\":\"nearest\"},{\"name\":\"wrap index\",\"value\":0},{\"name\":\"wrap\",\"value\":\"clamp to edge\"},{\"name\":\"Gradient Array\",\"value\":0}],\"portsOut\":[{\"name\":\"Texture\",\"links\":[{\"portIn\":\"Normal\",\"portOut\":\"Texture\",\"objIn\":\"znj0gtwab\",\"objOut\":\"13dxix11f\"}]}],\"objName\":\"Ops.Gl.GradientTexture\"},{\"id\":\"69e8cxa7e\",\"uiAttribs\":{\"subPatch\":\"on1ynf3wi\"},\"storage\":{},\"portsIn\":[{\"name\":\"scale\",\"value\":0.76},{\"name\":\"x\",\"value\":0.99},{\"name\":\"y\",\"value\":1.79},{\"name\":\"z\",\"value\":0.47}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"trigger\",\"objIn\":\"5samfghd8\",\"objOut\":\"69e8cxa7e\"}]}],\"objName\":\"Ops.Gl.Matrix.Scale\"},{\"id\":\"r9gyvdkvh\",\"uiAttribs\":{\"subPatch\":\"on1ynf3wi\"},\"storage\":{},\"portsIn\":[{\"name\":\"Frequency\",\"value\":1},{\"name\":\"Type index\",\"value\":0},{\"name\":\"Type\",\"value\":\"sine\"},{\"name\":\"Phase\",\"value\":0},{\"name\":\"Range Min\",\"value\":0},{\"name\":\"Range Max\",\"value\":1}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Pos\",\"portOut\":\"Result\",\"objIn\":\"qe82kxn0g\",\"objOut\":\"r9gyvdkvh\"}]}],\"objName\":\"Ops.Anim.LFO_v2\"},{\"id\":\"bmv9fqxjh\",\"uiAttribs\":{\"subPatch\":\"on1ynf3wi\"},\"storage\":{},\"portsIn\":[{\"name\":\"Speed\",\"value\":0.05},{\"name\":\"Play\",\"value\":1},{\"name\":\"Sync to timeline\",\"value\":0}],\"portsOut\":[{\"name\":\"Time\",\"links\":[{\"portIn\":\"Time\",\"portOut\":\"Time\",\"objIn\":\"r9gyvdkvh\",\"objOut\":\"bmv9fqxjh\"}]}],\"objName\":\"Ops.Anim.Timer_v2\"},{\"id\":\"we5n3qi4s\",\"uiAttribs\":{\"subPatch\":\"on1ynf3wi\"},\"storage\":{},\"portsOut\":[{\"name\":\"innerOut_alrh6hig4\",\"title\":\"render\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"innerOut_alrh6hig4\",\"objIn\":\"rmprhecho\",\"objOut\":\"we5n3qi4s\"}]},{\"name\":\"innerOut_8dittifdh\",\"title\":\"Render\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"innerOut_8dittifdh\",\"objIn\":\"znj0gtwab\",\"objOut\":\"we5n3qi4s\"},{\"portIn\":\"Render\",\"portOut\":\"innerOut_8dittifdh\",\"objIn\":\"kan5jvxj9\",\"objOut\":\"we5n3qi4s\"}]}],\"objName\":\"Ops.Ui.SubPatchInput\"},{\"id\":\"aqkj0fxy7\",\"uiAttribs\":{\"subPatch\":\"on1ynf3wi\"},\"storage\":{},\"objName\":\"Ops.Ui.SubPatchOutput\"},{\"id\":\"qe82kxn0g\",\"uiAttribs\":{\"subPatch\":\"on1ynf3wi\"},\"storage\":{},\"portsIn\":[{\"name\":\"Blend Mode index\",\"value\":18},{\"name\":\"Blend Mode\",\"value\":\"Math Add\"},{\"name\":\"Alpha Mask index\",\"value\":0},{\"name\":\"Alpha Mask\",\"value\":\"Off\"},{\"name\":\"Amount\",\"value\":1},{\"name\":\"Width\",\"value\":1},{\"name\":\"Type index\",\"value\":3},{\"name\":\"Type\",\"value\":\"Radial\"},{\"name\":\"Smoothstep\",\"value\":0},{\"name\":\"sRGB\",\"value\":0},{\"name\":\"color space index\",\"value\":0},{\"name\":\"color space\",\"value\":\"RGB\"},{\"name\":\"r\",\"value\":0.19606043020884192},{\"name\":\"g\",\"value\":0.9551},{\"name\":\"b\",\"value\":0.3028},{\"name\":\"r2\",\"value\":0.247},{\"name\":\"g2\",\"value\":0.596},{\"name\":\"b2\",\"value\":0.608},{\"name\":\"r3\",\"value\":0.951},{\"name\":\"g3\",\"value\":0.0191},{\"name\":\"b3\",\"value\":0.6436}],\"objName\":\"Ops.Gl.ImageCompose.Gradient_v2\"},{\"id\":\"kan5jvxj9\",\"uiAttribs\":{\"subPatch\":\"on1ynf3wi\"},\"storage\":{},\"portsIn\":[{\"name\":\"Size index\",\"value\":0},{\"name\":\"Size\",\"value\":\"Auto\"},{\"name\":\"Width\",\"value\":640},{\"name\":\"Height\",\"value\":480},{\"name\":\"Filter index\",\"value\":1},{\"name\":\"Filter\",\"value\":\"linear\"},{\"name\":\"Wrap index\",\"value\":1},{\"name\":\"Wrap\",\"value\":\"repeat\"},{\"name\":\"Anisotropic index\",\"value\":0},{\"name\":\"Anisotropic\",\"value\":\"0\"},{\"name\":\"Pixel Format index\",\"value\":9},{\"name\":\"Pixel Format\",\"value\":\"RGBA 16bit float\"},{\"name\":\"R\",\"value\":0},{\"name\":\"G\",\"value\":0},{\"name\":\"B\",\"value\":0},{\"name\":\"A\",\"value\":0}],\"portsOut\":[{\"name\":\"Next\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"Next\",\"objIn\":\"qe82kxn0g\",\"objOut\":\"kan5jvxj9\"}]},{\"name\":\"texture_out\",\"links\":[{\"portIn\":\"MatCap\",\"portOut\":\"texture_out\",\"objIn\":\"znj0gtwab\",\"objOut\":\"kan5jvxj9\"}]},{\"name\":\"Aspect Ratio\",\"value\":1.917312661498708},{\"name\":\"Texture Width\",\"value\":1484},{\"name\":\"Texture Height\",\"value\":774}],\"objName\":\"Ops.Gl.ImageCompose.ImageCompose_v4\"}]}",};
const port_alrh6hig4=op.inTrigger("alrh6hig4");
port_alrh6hig4.setUiAttribs({title:"render",});

const port_8dittifdh=op.inTrigger("8dittifdh");
port_8dittifdh.setUiAttribs({title:"Render",});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_alrh6hig4 = addedOps[i].outTrigger("innerOut_alrh6hig4");
innerOut_alrh6hig4.setUiAttribs({title:"render"});
port_alrh6hig4.onTriggered = () => { innerOut_alrh6hig4.trigger(); };

const innerOut_8dittifdh = addedOps[i].outTrigger("innerOut_8dittifdh");
innerOut_8dittifdh.setUiAttribs({title:"Render"});
port_8dittifdh.onTriggered = () => { innerOut_8dittifdh.trigger(); };

    }
if(addedOps[i].innerOutput)
{
}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}


};

Ops.Patch.P4Zknbo.SubPatch3.prototype = new CABLES.Op();
CABLES.OPS["4da89f73-5632-419e-9ff2-aca4b0372d4d"]={f:Ops.Patch.P4Zknbo.SubPatch3,objName:"Ops.Patch.P4Zknbo.SubPatch3"};




// **************************************************************
// 
// Ops.Patch.P4Zknbo.UI_Structure
// 
// **************************************************************

Ops.Patch.P4Zknbo.UI_Structure = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"op.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\n    }\nif(addedOps[i].innerOutput)\n{\n}\n}\n};\n","subpatch_json":"{\"ops\":[{\"id\":\"7pv6px8kl\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Named Trigger\",\"value\":\"exeNoCamera\"}],\"portsOut\":[{\"name\":\"Triggered\",\"links\":[{\"portIn\":\"Execute\",\"portOut\":\"Triggered\",\"objIn\":\"vtx3kdots\",\"objOut\":\"7pv6px8kl\"},{\"portIn\":\"render\",\"portOut\":\"Triggered\",\"objIn\":\"r4pg00ot6\",\"objOut\":\"7pv6px8kl\"}]}],\"objName\":\"Ops.Trigger.TriggerReceive\"},{\"id\":\"qwzkex2mf\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"posX\",\"value\":0.79},{\"name\":\"posY\",\"value\":0.9},{\"name\":\"posZ\",\"value\":0},{\"name\":\"scale\",\"value\":1},{\"name\":\"rotX\",\"value\":0},{\"name\":\"rotY\",\"value\":0},{\"name\":\"rotZ\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"trigger\",\"objIn\":\"9iz4vsufy\",\"objOut\":\"qwzkex2mf\"}]}],\"objName\":\"Ops.Gl.Matrix.Transform\"},{\"id\":\"9iz4vsufy\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Text\",\"value\":\"* structure\"},{\"name\":\"Font\",\"value\":\"eb066298-c95b-4900-a9c8-abb0e9ea0930\"},{\"name\":\"Scale\",\"value\":0.06},{\"name\":\"Letter Spacing\",\"value\":-0.04},{\"name\":\"Line Height\",\"value\":1},{\"name\":\"Align index\",\"value\":0},{\"name\":\"Align\",\"value\":\"Left\"},{\"name\":\"Vertical Align index\",\"value\":1},{\"name\":\"Vertical Align\",\"value\":\"Top\"},{\"name\":\"r\",\"value\":0.9},{\"name\":\"g\",\"value\":0.9},{\"name\":\"b\",\"value\":0.9},{\"name\":\"SDF\",\"value\":1},{\"name\":\"Smoothing\",\"value\":0.17},{\"name\":\"Border\",\"value\":0},{\"name\":\"Border Width\",\"value\":0.5},{\"name\":\"Smoothness\",\"value\":0.25},{\"name\":\"Border r\",\"value\":1},{\"name\":\"Border g\",\"value\":1},{\"name\":\"Border b\",\"value\":1},{\"name\":\"Shadow\",\"value\":1},{\"name\":\"Positions\",\"value\":0},{\"name\":\"Scalings\",\"value\":0},{\"name\":\"Rotations\",\"value\":0},{\"name\":\"Colors\",\"value\":0}],\"portsOut\":[{\"name\":\"Next\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"Next\",\"objIn\":\"yozybluvg\",\"objOut\":\"9iz4vsufy\"}]},{\"name\":\"Num Lines\",\"value\":1},{\"name\":\"Width\",\"value\":0.29631796875000005},{\"name\":\"Height\",\"value\":0.09154265873015872},{\"name\":\"Start Y\",\"value\":0.0390077380952381},{\"name\":\"Num Chars\",\"value\":11}],\"objName\":\"Ops.Gl.TextMeshMSDF_v2\"},{\"id\":\"xmzih69c3\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Font\",\"value\":\"eb066298-c95b-4900-a9c8-abb0e9ea0930\"},{\"name\":\"Letter Spacing\",\"value\":-0.05},{\"name\":\"Line Height\",\"value\":1},{\"name\":\"Align index\",\"value\":0},{\"name\":\"Align\",\"value\":\"Left\"},{\"name\":\"Vertical Align index\",\"value\":1},{\"name\":\"Vertical Align\",\"value\":\"Top\"},{\"name\":\"SDF\",\"value\":1},{\"name\":\"Smoothing\",\"value\":0.25},{\"name\":\"Border\",\"value\":0},{\"name\":\"Border Width\",\"value\":0.5},{\"name\":\"Smoothness\",\"value\":0.25},{\"name\":\"Border r\",\"value\":1},{\"name\":\"Border g\",\"value\":1},{\"name\":\"Border b\",\"value\":1},{\"name\":\"Shadow\",\"value\":1},{\"name\":\"Positions\",\"value\":0},{\"name\":\"Scalings\",\"value\":0},{\"name\":\"Colors\",\"value\":0}],\"portsOut\":[{\"name\":\"Num Lines\",\"value\":1},{\"name\":\"Width\",\"value\":0.25098750000000003},{\"name\":\"Height\",\"value\":0.07645148809523811},{\"name\":\"Start Y\",\"value\":0.044420982142857154},{\"name\":\"Num Chars\",\"value\":6}],\"objName\":\"Ops.Gl.TextMeshMSDF_v2\"},{\"id\":\"yozybluvg\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"x\",\"value\":0.36},{\"name\":\"y\",\"value\":0},{\"name\":\"z\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"trigger\",\"objIn\":\"xmzih69c3\",\"objOut\":\"yozybluvg\"}]}],\"objName\":\"Ops.Gl.Matrix.Translate\"},{\"id\":\"tar3btg8u\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"x\",\"value\":1.25},{\"name\":\"y\",\"value\":0.89},{\"name\":\"z\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Trigger in\",\"portOut\":\"trigger\",\"objIn\":\"ddbwtw92m\",\"objOut\":\"tar3btg8u\"}]}],\"objName\":\"Ops.Gl.Matrix.Translate\"},{\"id\":\"9kmdl5kt6\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Duration\",\"value\":0.5},{\"name\":\"Invert\",\"value\":0}],\"portsOut\":[{\"name\":\"Value\",\"links\":[{\"portIn\":\"Random Seed \",\"portOut\":\"Value\",\"objIn\":\"9yj1qxwv2\",\"objOut\":\"9kmdl5kt6\"},{\"portIn\":\"number1\",\"portOut\":\"Value\",\"objIn\":\"5j4rgs1dl\",\"objOut\":\"9kmdl5kt6\"}]}],\"objName\":\"Ops.Anim.Bang\"},{\"id\":\"lsg3s6g7p\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Text\",\"portOut\":\"result\",\"objIn\":\"xmzih69c3\",\"objOut\":\"lsg3s6g7p\"}]}],\"objName\":\"Ops.Array.ArrayGetString\"},{\"id\":\"rkgwiogce\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"text\",\"value\":\"A035506\\nA007604\\nA227413\\nA000040\\nA052330\\nA000607\\nA01401\\nA064356\\nA096441\\nA000009\\nA199535\\nA000010\\nA316667\\nA111133\\nA000124\\nA005132\"},{\"name\":\"separator\",\"value\":\" \"},{\"name\":\"Numbers\",\"value\":0},{\"name\":\"Trim\",\"value\":1},{\"name\":\"Split Lines\",\"value\":1}],\"portsOut\":[{\"name\":\"array\",\"links\":[{\"portIn\":\"array\",\"portOut\":\"array\",\"objIn\":\"lsg3s6g7p\",\"objOut\":\"rkgwiogce\"}]},{\"name\":\"length\",\"value\":16}],\"objName\":\"Ops.Array.StringToArray_v2\"},{\"id\":\"r4pg00ot6\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"x\",\"value\":0.79},{\"name\":\"y\",\"value\":0.83},{\"name\":\"z\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"h91q6l7xz\",\"objOut\":\"r4pg00ot6\"}]}],\"objName\":\"Ops.Gl.Matrix.Translate\"},{\"id\":\"5jfi2ldid\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"easing index\",\"value\":0},{\"name\":\"easing\",\"value\":\"linear\"},{\"name\":\"duration\",\"value\":0.125},{\"name\":\"Direction index\",\"value\":0},{\"name\":\"Direction\",\"value\":\"Both\"},{\"name\":\"value false\",\"value\":0},{\"name\":\"value true\",\"value\":1}],\"portsOut\":[{\"name\":\"value\",\"links\":[{\"portIn\":\"value\",\"portOut\":\"value\",\"objIn\":\"i7bypy19z\",\"objOut\":\"5jfi2ldid\"},{\"portIn\":\"Percentage\",\"portOut\":\"value\",\"objIn\":\"774o0ka8f\",\"objOut\":\"5jfi2ldid\"}]},{\"name\":\"finished\",\"value\":1}],\"objName\":\"Ops.Anim.BoolAnim\"},{\"id\":\"h91q6l7xz\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"render\",\"title\":\"Trigger\"},{\"name\":\"Render Mesh\",\"value\":1,\"title\":\"Render\"},{\"name\":\"width\",\"value\":4.91},{\"name\":\"pivot x index\",\"value\":1},{\"name\":\"pivot x\",\"value\":\"center\"},{\"name\":\"pivot y index\",\"value\":1},{\"name\":\"pivot y\",\"value\":\"center\"},{\"name\":\"axis index\",\"value\":0},{\"name\":\"axis\",\"value\":\"xy\"},{\"name\":\"Flip TexCoord X\",\"value\":0},{\"name\":\"Flip TexCoord Y\",\"value\":1},{\"name\":\"num columns\",\"value\":1},{\"name\":\"num rows\",\"value\":1}],\"objName\":\"Ops.Gl.Meshes.Rectangle_v4\"},{\"id\":\"9yj1qxwv2\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Num Values\",\"value\":24},{\"name\":\"Mode index\",\"value\":0},{\"name\":\"Mode\",\"value\":\"A\"},{\"name\":\"Integer\",\"value\":0},{\"name\":\"Last == First\",\"value\":0},{\"name\":\"Min A\",\"value\":0},{\"name\":\"Min B\",\"value\":-1},{\"name\":\"Max B\",\"value\":1},{\"name\":\"Min C\",\"value\":-1},{\"name\":\"Max C\",\"value\":1},{\"name\":\"Min D\",\"value\":-1},{\"name\":\"Max D\",\"value\":1}],\"portsOut\":[{\"name\":\"Array Out\",\"links\":[{\"portIn\":\"Rotations\",\"portOut\":\"Array Out\",\"objIn\":\"xmzih69c3\",\"objOut\":\"9yj1qxwv2\"}]},{\"name\":\"Chunks Amount\",\"value\":24},{\"name\":\"Array length\",\"value\":24}],\"objName\":\"Ops.Array.RandomNumbersArray_v4\"},{\"id\":\"5j4rgs1dl\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"number2\",\"value\":0.0001}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"number1\",\"portOut\":\"result\",\"objIn\":\"20lmpxljk\",\"objOut\":\"5j4rgs1dl\"}]}],\"objName\":\"Ops.Math.Compare.GreaterThan\"},{\"id\":\"20lmpxljk\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"number2\",\"value\":360}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Max A\",\"portOut\":\"result\",\"objIn\":\"9yj1qxwv2\",\"objOut\":\"20lmpxljk\"}]}],\"objName\":\"Ops.Math.Multiply\"},{\"id\":\"kg4hq93gw\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Title\",\"value\":\"structure\"}],\"objName\":\"Ops.Ui.Area\"},{\"id\":\"wwd3jj5yw\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Value 1\",\"value\":0.003},{\"name\":\"Value 2\",\"value\":0.01}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"height\",\"portOut\":\"Result\",\"objIn\":\"h91q6l7xz\",\"objOut\":\"wwd3jj5yw\"}]}],\"objName\":\"Ops.Math.Interpolate\"},{\"id\":\"w5q635vjo\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Value 1\",\"value\":0.9},{\"name\":\"Value 2\",\"value\":1}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"a\",\"portOut\":\"Result\",\"objIn\":\"xmzih69c3\",\"objOut\":\"w5q635vjo\"},{\"portIn\":\"g\",\"portOut\":\"Result\",\"objIn\":\"xmzih69c3\",\"objOut\":\"w5q635vjo\"},{\"portIn\":\"b\",\"portOut\":\"Result\",\"objIn\":\"xmzih69c3\",\"objOut\":\"w5q635vjo\"},{\"portIn\":\"r\",\"portOut\":\"Result\",\"objIn\":\"xmzih69c3\",\"objOut\":\"w5q635vjo\"}]}],\"objName\":\"Ops.Math.Interpolate\"},{\"id\":\"gm34fgofc\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Value 1\",\"value\":0.09},{\"name\":\"Value 2\",\"value\":0.11}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Scale\",\"portOut\":\"Result\",\"objIn\":\"xmzih69c3\",\"objOut\":\"gm34fgofc\"}]}],\"objName\":\"Ops.Math.Interpolate\"},{\"id\":\"i7bypy19z\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Percentage\",\"portOut\":\"result\",\"objIn\":\"w5q635vjo\",\"objOut\":\"i7bypy19z\"},{\"portIn\":\"Percentage\",\"portOut\":\"result\",\"objIn\":\"gm34fgofc\",\"objOut\":\"i7bypy19z\"},{\"portIn\":\"Percentage\",\"portOut\":\"result\",\"objIn\":\"wwd3jj5yw\",\"objOut\":\"i7bypy19z\"}]}],\"objName\":\"Ops.Ui.Routing.RouteNumber\"},{\"id\":\"qhn9qwlq3\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_srvbBypass\"}],\"portsOut\":[{\"name\":\"Value\",\"links\":[{\"portIn\":\"Boolean\",\"portOut\":\"Value\",\"objIn\":\"ghjb3kmav\",\"objOut\":\"qhn9qwlq3\"}]}],\"objName\":\"Ops.Vars.VarGetNumber_v2\"},{\"id\":\"ghjb3kmav\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Pass Through\",\"portOut\":\"Result\",\"objIn\":\"vtx3kdots\",\"objOut\":\"ghjb3kmav\"}]}],\"objName\":\"Ops.Boolean.Not\"},{\"id\":\"1dn1txzpk\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Title\",\"value\":\"bypass\"}],\"objName\":\"Ops.Ui.Area\"},{\"id\":\"vtx3kdots\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"Trigger out\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"Trigger out\",\"objIn\":\"qwzkex2mf\",\"objOut\":\"vtx3kdots\"},{\"portIn\":\"render\",\"portOut\":\"Trigger out\",\"objIn\":\"tar3btg8u\",\"objOut\":\"vtx3kdots\"}]}],\"objName\":\"Ops.Trigger.GateTrigger\"},{\"id\":\"774o0ka8f\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Value 1\",\"value\":0.6},{\"name\":\"Value 2\",\"value\":1}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"a\",\"portOut\":\"Result\",\"objIn\":\"9iz4vsufy\",\"objOut\":\"774o0ka8f\"}]}],\"objName\":\"Ops.Math.Interpolate\"},{\"id\":\"9r1zgvvos\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"value\",\"value\":\"structure\"}],\"portsOut\":[{\"name\":\"String\",\"links\":[{\"portIn\":\"String In\",\"portOut\":\"String\",\"objIn\":\"69gs9z12s\",\"objOut\":\"9r1zgvvos\"},{\"portIn\":\"ID\",\"portOut\":\"String\",\"objIn\":\"ddbwtw92m\",\"objOut\":\"9r1zgvvos\"}]}],\"objName\":\"Ops.String.String_v2\"},{\"id\":\"42q45utdp\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Index\",\"portOut\":\"result\",\"objIn\":\"jpyad2gwo\",\"objOut\":\"42q45utdp\"},{\"portIn\":\"Value\",\"portOut\":\"result\",\"objIn\":\"jsk659b4b\",\"objOut\":\"42q45utdp\"}]}],\"objName\":\"Ops.Ui.Routing.RouteNumber\"},{\"id\":\"df01he2vg\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_structure\"}],\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"r2jb4fhd1\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Title\",\"value\":\"ext/int structure\"}],\"objName\":\"Ops.Ui.Area\"},{\"id\":\"69gs9z12s\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"When False index\",\"value\":1},{\"name\":\"When False\",\"value\":\"custom\"},{\"name\":\"Custom Value\",\"value\":\"structure\"}],\"portsOut\":[{\"name\":\"String Out\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"String Out\",\"objIn\":\"vwb9u8uqi\",\"objOut\":\"69gs9z12s\"},{\"portIn\":\"Key\",\"portOut\":\"String Out\",\"objIn\":\"xtu118zv4\",\"objOut\":\"69gs9z12s\"}]}],\"objName\":\"Ops.String.GateString\"},{\"id\":\"vwb9u8uqi\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_mouseIsChangingParamID\"}],\"objName\":\"Ops.Vars.VarSetString_v2\"},{\"id\":\"d2jhvop05\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_normValue\"}],\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"1mcqhoi4f\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ext_injectedState\"}],\"portsOut\":[{\"name\":\"Value\",\"links\":[{\"portIn\":\"Object In\",\"portOut\":\"Value\",\"objIn\":\"4w5ob6pse\",\"objOut\":\"1mcqhoi4f\"}]}],\"objName\":\"Ops.Vars.VarGetObject_v2\"},{\"id\":\"xtu118zv4\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"A\",\"portOut\":\"Result\",\"objIn\":\"skg9dd1m0\",\"objOut\":\"xtu118zv4\"}]},{\"name\":\"Found\",\"value\":1}],\"objName\":\"Ops.Json.ObjectGetNumber_v2\"},{\"id\":\"jpyad2gwo\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Numbers\",\"multiPortNum\":2},{\"name\":\"Numbers_2\",\"value\":0,\"title\":\"add port\"}],\"portsOut\":[{\"name\":\"Number\",\"value\":7},{\"name\":\"Num Values\",\"value\":2}],\"objName\":\"Ops.Number.SwitchNumberMultiPort\"},{\"id\":\"4w5ob6pse\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"When False index\",\"value\":0},{\"name\":\"When False\",\"value\":\"keep last object\"},{\"name\":\"Only Valid Objects\",\"value\":1}],\"portsOut\":[{\"name\":\"Object Out\",\"links\":[{\"portIn\":\"Data\",\"portOut\":\"Object Out\",\"objIn\":\"xtu118zv4\",\"objOut\":\"4w5ob6pse\"}]}],\"objName\":\"Ops.Json.GateObject\"},{\"id\":\"jsk659b4b\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_leftButtonSlider\"}],\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"5je3z73yo\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"objName\":\"Ops.Ui.SubPatchInput\"},{\"id\":\"wqn6vopce\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"objName\":\"Ops.Ui.SubPatchOutput\"},{\"id\":\"ddbwtw92m\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Width\",\"value\":0.56},{\"name\":\"Height\",\"value\":0.12},{\"name\":\"Class\",\"value\":\"\"},{\"name\":\"Pivot x index\",\"value\":0},{\"name\":\"Pivot x\",\"value\":\"center\"},{\"name\":\"Pivot y index\",\"value\":0},{\"name\":\"Pivot y\",\"value\":\"center\"},{\"name\":\"Axis index\",\"value\":0},{\"name\":\"Axis\",\"value\":\"xy\"},{\"name\":\"Is Interactive\",\"value\":1},{\"name\":\"Render Rectangle\",\"value\":0},{\"name\":\"Show Boundings\",\"value\":0},{\"name\":\"Cursor index\",\"value\":2},{\"name\":\"Cursor\",\"value\":\"pointer\"},{\"name\":\"Render\",\"value\":1,\"title\":\"Active\"}],\"portsOut\":[{\"name\":\"Trigger out\",\"links\":[{\"portIn\":\"update\",\"portOut\":\"Trigger out\",\"objIn\":\"9kmdl5kt6\",\"objOut\":\"ddbwtw92m\"},{\"portIn\":\"exe\",\"portOut\":\"Trigger out\",\"objIn\":\"5jfi2ldid\",\"objOut\":\"ddbwtw92m\"},{\"portIn\":\"Exe\",\"portOut\":\"Trigger out\",\"objIn\":\"j8nugz0wm\",\"objOut\":\"ddbwtw92m\"}]},{\"name\":\"Pointer Hover\",\"links\":[{\"portIn\":\"bool\",\"portOut\":\"Pointer Hover\",\"objIn\":\"5jfi2ldid\",\"objOut\":\"ddbwtw92m\"},{\"portIn\":\"Boolean\",\"portOut\":\"Pointer Hover\",\"objIn\":\"3yzcrcevr\",\"objOut\":\"ddbwtw92m\"},{\"portIn\":\"Boolean\",\"portOut\":\"Pointer Hover\",\"objIn\":\"o0j8hf328\",\"objOut\":\"ddbwtw92m\"}]},{\"name\":\"Pointer Down\",\"links\":[{\"portIn\":\"value\",\"portOut\":\"Pointer Down\",\"objIn\":\"42q45utdp\",\"objOut\":\"ddbwtw92m\"},{\"portIn\":\"Pass Through\",\"portOut\":\"Pointer Down\",\"objIn\":\"69gs9z12s\",\"objOut\":\"ddbwtw92m\"}]},{\"name\":\"Pointer X\",\"value\":0.6598792209143872},{\"name\":\"Pointer Y\",\"value\":0.05248155729882975},{\"name\":\"Top\",\"value\":46.6350531578064},{\"name\":\"Left\",\"value\":816.9936943054199},{\"name\":\"Right\",\"value\":974.5982933044434},{\"name\":\"Bottom\",\"value\":80.40748286247253},{\"name\":\"Left Click\",\"links\":[{\"portIn\":\"Bang\",\"portOut\":\"Left Click\",\"objIn\":\"9kmdl5kt6\",\"objOut\":\"ddbwtw92m\"},{\"portIn\":\"Increment\",\"portOut\":\"Left Click\",\"objIn\":\"6jujy6h6l\",\"objOut\":\"ddbwtw92m\"}]}],\"objName\":\"Ops.Patch.P4Zknbo.InteractiveRectangle_v2\"},{\"id\":\"1grps8bf8\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"__sliderLeave\"}],\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"3yzcrcevr\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"Result\",\"objIn\":\"1grps8bf8\",\"objOut\":\"3yzcrcevr\"}]}],\"objName\":\"Ops.Boolean.Not\"},{\"id\":\"6jujy6h6l\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{},\"portsIn\":[{\"name\":\"Limit\",\"value\":0},{\"name\":\"Length\",\"value\":16},{\"name\":\"Mode index\",\"value\":0},{\"name\":\"Mode\",\"value\":\"Rewind\"}],\"portsOut\":[{\"name\":\"Value\",\"links\":[{\"portIn\":\"number1\",\"portOut\":\"Value\",\"objIn\":\"uea6m2qxe\",\"objOut\":\"6jujy6h6l\"}]}],\"objName\":\"Ops.Math.Incrementor\"},{\"id\":\"skg9dd1m0\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"B\",\"value\":1},{\"name\":\"C\",\"value\":2},{\"name\":\"D\",\"value\":3},{\"name\":\"Expression\",\"value\":\"Math.floor((Math.round(a * 10000) / 10000) * 16)\"}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Boolean\",\"portOut\":\"Result\",\"objIn\":\"j8nugz0wm\",\"objOut\":\"skg9dd1m0\"},{\"portIn\":\"number1\",\"portOut\":\"Result\",\"objIn\":\"vxom0rbvo\",\"objOut\":\"skg9dd1m0\"},{\"portIn\":\"Default\",\"portOut\":\"Result\",\"objIn\":\"6jujy6h6l\",\"objOut\":\"skg9dd1m0\"}]},{\"name\":\"Expression Valid\",\"value\":true}],\"objName\":\"Ops.Math.MathExpression\"},{\"id\":\"uea6m2qxe\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{},\"portsIn\":[{\"name\":\"number2\",\"value\":16},{\"name\":\"pingpong\",\"value\":0}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Numbers_1\",\"portOut\":\"result\",\"objIn\":\"jpyad2gwo\",\"objOut\":\"uea6m2qxe\"},{\"portIn\":\"index\",\"portOut\":\"result\",\"objIn\":\"lsg3s6g7p\",\"objOut\":\"uea6m2qxe\"},{\"portIn\":\"Number\",\"portOut\":\"result\",\"objIn\":\"txbhxl3wi\",\"objOut\":\"uea6m2qxe\"},{\"portIn\":\"Value\",\"portOut\":\"result\",\"objIn\":\"df01he2vg\",\"objOut\":\"uea6m2qxe\"},{\"portIn\":\"A\",\"portOut\":\"result\",\"objIn\":\"lk9lwm27k\",\"objOut\":\"uea6m2qxe\"}]}],\"objName\":\"Ops.Math.Modulo\"},{\"id\":\"o0j8hf328\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{},\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Pass Through\",\"portOut\":\"Result\",\"objIn\":\"4w5ob6pse\",\"objOut\":\"o0j8hf328\"}]}],\"objName\":\"Ops.Boolean.Not\"},{\"id\":\"txbhxl3wi\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{},\"objName\":\"Ops.Ui.VizNumberBar\"},{\"id\":\"j8nugz0wm\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{},\"portsOut\":[{\"name\":\"then\",\"links\":[{\"portIn\":\"Trigger\",\"portOut\":\"then\",\"objIn\":\"g4qyrizaq\",\"objOut\":\"j8nugz0wm\"}]}],\"objName\":\"Ops.Boolean.IfFalseThen\"},{\"id\":\"g4qyrizaq\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{},\"portsIn\":[{\"name\":\"Duration\",\"value\":0.05},{\"name\":\"Value True\",\"value\":1},{\"name\":\"Value False\",\"value\":0}],\"portsOut\":[{\"name\":\"Activated\",\"links\":[{\"portIn\":\"Reset\",\"portOut\":\"Activated\",\"objIn\":\"6jujy6h6l\",\"objOut\":\"g4qyrizaq\"}]},{\"name\":\"Result\",\"value\":0}],\"objName\":\"Ops.Boolean.MonoFlop\"},{\"id\":\"vxom0rbvo\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{},\"portsIn\":[{\"name\":\"number2\",\"value\":1}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Numbers_0\",\"portOut\":\"result\",\"objIn\":\"jpyad2gwo\",\"objOut\":\"vxom0rbvo\"}]}],\"objName\":\"Ops.Math.Sum\"},{\"id\":\"lk9lwm27k\",\"uiAttribs\":{\"subPatch\":\"owne979rx\"},\"storage\":{},\"portsIn\":[{\"name\":\"B\",\"value\":1},{\"name\":\"C\",\"value\":2},{\"name\":\"D\",\"value\":3},{\"name\":\"Expression\",\"value\":\"( a  / 15 )\"}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"Result\",\"objIn\":\"d2jhvop05\",\"objOut\":\"lk9lwm27k\"}]},{\"name\":\"Expression Valid\",\"value\":true}],\"objName\":\"Ops.Math.MathExpression\"}]}",};
op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
    }
if(addedOps[i].innerOutput)
{
}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}


};

Ops.Patch.P4Zknbo.UI_Structure.prototype = new CABLES.Op();
CABLES.OPS["334f382a-e0ce-42a7-806a-a2a6ca8fa997"]={f:Ops.Patch.P4Zknbo.UI_Structure,objName:"Ops.Patch.P4Zknbo.UI_Structure"};




// **************************************************************
// 
// Ops.Patch.P4Zknbo.UI_Position
// 
// **************************************************************

Ops.Patch.P4Zknbo.UI_Position = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"op.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\n    }\nif(addedOps[i].innerOutput)\n{\n}\n}\n};\n","subpatch_json":"{\"ops\":[{\"id\":\"jbik4wp5s\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Named Trigger\",\"value\":\"exeNoCamera\"}],\"portsOut\":[{\"name\":\"Triggered\",\"links\":[{\"portIn\":\"Execute\",\"portOut\":\"Triggered\",\"objIn\":\"fgvzdrim4\",\"objOut\":\"jbik4wp5s\"},{\"portIn\":\"Execute\",\"portOut\":\"Triggered\",\"objIn\":\"7gw7i08xf\",\"objOut\":\"jbik4wp5s\"}]}],\"objName\":\"Ops.Trigger.TriggerReceive\"},{\"id\":\"f7xudijnv\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"value\",\"value\":\"position\"}],\"portsOut\":[{\"name\":\"String\",\"links\":[{\"portIn\":\"btagbs7z2\",\"portOut\":\"String\",\"objIn\":\"e2twu2yjj\",\"objOut\":\"f7xudijnv\"}]}],\"objName\":\"Ops.String.String_v2\"},{\"id\":\"x5lahy950\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Text\",\"value\":\"* position\"},{\"name\":\"Font\",\"value\":\"eb066298-c95b-4900-a9c8-abb0e9ea0930\"},{\"name\":\"Scale\",\"value\":0.06},{\"name\":\"Letter Spacing\",\"value\":-0.04},{\"name\":\"Line Height\",\"value\":1},{\"name\":\"Align index\",\"value\":1},{\"name\":\"Align\",\"value\":\"Center\"},{\"name\":\"Vertical Align index\",\"value\":2},{\"name\":\"Vertical Align\",\"value\":\"Middle\"},{\"name\":\"r\",\"value\":0.75},{\"name\":\"g\",\"value\":0.75},{\"name\":\"b\",\"value\":0.75},{\"name\":\"SDF\",\"value\":1},{\"name\":\"Smoothing\",\"value\":0.17},{\"name\":\"Border\",\"value\":0},{\"name\":\"Border Width\",\"value\":0.222},{\"name\":\"Smoothness\",\"value\":0.25},{\"name\":\"Border r\",\"value\":0},{\"name\":\"Border g\",\"value\":0},{\"name\":\"Border b\",\"value\":1},{\"name\":\"Shadow\",\"value\":0},{\"name\":\"Positions\",\"value\":0},{\"name\":\"Scalings\",\"value\":0},{\"name\":\"Rotations\",\"value\":0},{\"name\":\"Colors\",\"value\":0}],\"portsOut\":[{\"name\":\"Num Lines\",\"value\":1},{\"name\":\"Width\",\"value\":0.26200078125},{\"name\":\"Height\",\"value\":0.09154265873015872},{\"name\":\"Start Y\",\"value\":0.04224890873015873},{\"name\":\"Num Chars\",\"value\":10}],\"objName\":\"Ops.Gl.TextMeshMSDF_v2\"},{\"id\":\"taxdsh3o1\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"x\",\"value\":-1.34},{\"name\":\"y\",\"value\":1.05},{\"name\":\"z\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"trigger\",\"objIn\":\"x5lahy950\",\"objOut\":\"taxdsh3o1\"}]}],\"objName\":\"Ops.Gl.Matrix.Translate\"},{\"id\":\"fch2ndufn\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Title\",\"value\":\"position\"}],\"objName\":\"Ops.Ui.Area\"},{\"id\":\"h9qj105dd\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"number2\",\"value\":0.33}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"a\",\"portOut\":\"result\",\"objIn\":\"x5lahy950\",\"objOut\":\"h9qj105dd\"}]}],\"objName\":\"Ops.Math.Sum\"},{\"id\":\"xi60ma3be\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"PointSize\",\"value\":8},{\"name\":\"Size in Pixels\",\"value\":1},{\"name\":\"Random Size\",\"value\":0},{\"name\":\"Round\",\"value\":1},{\"name\":\"Round Antialias\",\"value\":1},{\"name\":\"Scale by Distance\",\"value\":1},{\"name\":\"r\",\"value\":0.833},{\"name\":\"g\",\"value\":0.762},{\"name\":\"b\",\"value\":0.71},{\"name\":\"Vertex Colors\",\"value\":0},{\"name\":\"Colorize Texture\",\"value\":0},{\"name\":\"Mask Channel index\",\"value\":2},{\"name\":\"Mask Channel\",\"value\":\"Luminance\"},{\"name\":\"Colorize Randomize\",\"value\":0},{\"name\":\"Point Size Channel index\",\"value\":0},{\"name\":\"Point Size Channel\",\"value\":\"R\"},{\"name\":\"Texture Point Size Mul\",\"value\":1},{\"name\":\"Map Size 0 index\",\"value\":0},{\"name\":\"Map Size 0\",\"value\":\"Black\"},{\"name\":\"Flip Texture\",\"value\":0},{\"name\":\"Atlas Cross Fade\",\"value\":0},{\"name\":\"Atlas Repeat X \",\"value\":1},{\"name\":\"Min Point Size\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"yq4omky6n\",\"objOut\":\"xi60ma3be\"}]}],\"objName\":\"Ops.Gl.Shader.PointMaterial_v5\"},{\"id\":\"1dg91q366\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_srvbBypass\"}],\"portsOut\":[{\"name\":\"Value\",\"links\":[{\"portIn\":\"Boolean\",\"portOut\":\"Value\",\"objIn\":\"jq99pb4tq\",\"objOut\":\"1dg91q366\"}]}],\"objName\":\"Ops.Vars.VarGetNumber_v2\"},{\"id\":\"jq99pb4tq\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Pass Through\",\"portOut\":\"Result\",\"objIn\":\"fgvzdrim4\",\"objOut\":\"jq99pb4tq\"}]}],\"objName\":\"Ops.Boolean.Not\"},{\"id\":\"br8cj6s0d\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Title\",\"value\":\"bypass\"}],\"objName\":\"Ops.Ui.Area\"},{\"id\":\"fgvzdrim4\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"Trigger out\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"Trigger out\",\"objIn\":\"taxdsh3o1\",\"objOut\":\"fgvzdrim4\"},{\"portIn\":\"Execute\",\"portOut\":\"Trigger out\",\"objIn\":\"tthnus5kf\",\"objOut\":\"fgvzdrim4\"},{\"portIn\":\"blls2amps\",\"portOut\":\"Trigger out\",\"objIn\":\"e2twu2yjj\",\"objOut\":\"fgvzdrim4\"}]}],\"objName\":\"Ops.Trigger.GateTrigger\"},{\"id\":\"amnzh9zod\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{\"blueprintVer\":2},\"objName\":\"Ops.Ui.SubPatchInput\"},{\"id\":\"3y5hk0uss\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{\"blueprintVer\":2},\"objName\":\"Ops.Ui.SubPatchOutput\"},{\"id\":\"6kesvd73l\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"posX\",\"value\":-0.545},{\"name\":\"posY\",\"value\":0.91},{\"name\":\"posZ\",\"value\":0},{\"name\":\"scale\",\"value\":0.2},{\"name\":\"rotX\",\"value\":-90},{\"name\":\"rotY\",\"value\":0},{\"name\":\"rotZ\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"6pt6ghlh5\",\"objOut\":\"6kesvd73l\"}]}],\"objName\":\"Ops.Gl.Matrix.Transform\"},{\"id\":\"fqp72cg1u\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"sides\",\"value\":32},{\"name\":\"outerRadius\",\"value\":0.61},{\"name\":\"Draw\",\"value\":1,\"title\":\"Render mesh\"}],\"objName\":\"Ops.Gl.Meshes.Torus_v3\"},{\"id\":\"6pt6ghlh5\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"scale\",\"value\":1},{\"name\":\"x\",\"value\":3.88},{\"name\":\"y\",\"value\":1.56},{\"name\":\"z\",\"value\":-0.38}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"xi60ma3be\",\"objOut\":\"6pt6ghlh5\"}]}],\"objName\":\"Ops.Gl.Matrix.Scale\"},{\"id\":\"vbejauafm\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"Gradient\",\"value\":\"{\\\"keys\\\":[{\\\"pos\\\":0,\\\"posy\\\":0.53,\\\"r\\\":1,\\\"g\\\":1,\\\"b\\\":1},{\\\"pos\\\":0.0068359375,\\\"posy\\\":0.53,\\\"r\\\":1,\\\"g\\\":1,\\\"b\\\":1},{\\\"pos\\\":0.177734375,\\\"posy\\\":0.58,\\\"r\\\":0.05153645833333331,\\\"g\\\":0.05153645833333331,\\\"b\\\":0.05153645833333331},{\\\"pos\\\":0.7578125,\\\"posy\\\":0.61,\\\"r\\\":0,\\\"g\\\":0,\\\"b\\\":0},{\\\"pos\\\":1,\\\"posy\\\":0.6,\\\"r\\\":1,\\\"g\\\":1,\\\"b\\\":1},{\\\"pos\\\":1,\\\"posy\\\":0.6,\\\"r\\\":1,\\\"g\\\":1,\\\"b\\\":1}]}\"},{\"name\":\"Direction index\",\"value\":3},{\"name\":\"Direction\",\"value\":\"YY\"},{\"name\":\"Smoothstep\",\"value\":1},{\"name\":\"Step\",\"value\":0},{\"name\":\"Flip\",\"value\":0},{\"name\":\"sRGB\",\"value\":1},{\"name\":\"Oklab\",\"value\":0},{\"name\":\"Size\",\"value\":32},{\"name\":\"filter index\",\"value\":1},{\"name\":\"filter\",\"value\":\"linear\"},{\"name\":\"wrap index\",\"value\":0},{\"name\":\"wrap\",\"value\":\"clamp to edge\"},{\"name\":\"Dither\",\"value\":0},{\"name\":\"Gradient Array\",\"value\":0}],\"portsOut\":[{\"name\":\"Texture\",\"links\":[{\"portIn\":\"Texture Opacity\",\"portOut\":\"Texture\",\"objIn\":\"xi60ma3be\",\"objOut\":\"vbejauafm\"}]}],\"objName\":\"Ops.Gl.GradientTexture\"},{\"id\":\"v9suy4c4f\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"old min\",\"value\":0.6},{\"name\":\"old max\",\"value\":1},{\"name\":\"new min\",\"value\":0},{\"name\":\"new max\",\"value\":1},{\"name\":\"Easing index\",\"value\":0},{\"name\":\"Easing\",\"value\":\"Linear\"},{\"name\":\"Clamp\",\"value\":1}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"result\",\"objIn\":\"gxhq3pwx7\",\"objOut\":\"v9suy4c4f\"}]}],\"objName\":\"Ops.Math.MapRange\"},{\"id\":\"cybcf0sv2\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"Frequency\",\"value\":0.5},{\"name\":\"Type index\",\"value\":0},{\"name\":\"Type\",\"value\":\"sine\"},{\"name\":\"Phase\",\"value\":0},{\"name\":\"Range Min\",\"value\":-45},{\"name\":\"Range Max\",\"value\":45}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"number1\",\"portOut\":\"Result\",\"objIn\":\"kcosi4ebg\",\"objOut\":\"cybcf0sv2\"}]}],\"objName\":\"Ops.Anim.LFO_v3\"},{\"id\":\"q0fv1nz6l\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"Speed\",\"value\":0.005},{\"name\":\"Play\",\"value\":1},{\"name\":\"Sync to timeline\",\"value\":0}],\"portsOut\":[{\"name\":\"Time\",\"links\":[{\"portIn\":\"Time\",\"portOut\":\"Time\",\"objIn\":\"cybcf0sv2\",\"objOut\":\"q0fv1nz6l\"}]}],\"objName\":\"Ops.Anim.Timer_v2\"},{\"id\":\"kcosi4ebg\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"number2\",\"value\":360}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Strength\",\"portOut\":\"result\",\"objIn\":\"yq4omky6n\",\"objOut\":\"kcosi4ebg\"}]}],\"objName\":\"Ops.Math.Sum\"},{\"id\":\"yq4omky6n\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"Size\",\"value\":1.4},{\"name\":\"Smooth\",\"value\":1},{\"name\":\"x\",\"value\":-0.5},{\"name\":\"y\",\"value\":0.15},{\"name\":\"z\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"fqp72cg1u\",\"objOut\":\"yq4omky6n\"}]}],\"objName\":\"Ops.Gl.ShaderEffects.AreaRotate_v2\"},{\"id\":\"gxhq3pwx7\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"Min\",\"value\":0},{\"name\":\"Max\",\"value\":1},{\"name\":\"Easing index\",\"value\":17},{\"name\":\"Easing\",\"value\":\"Quint Out\"}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"a\",\"portOut\":\"Result\",\"objIn\":\"xi60ma3be\",\"objOut\":\"gxhq3pwx7\"}]}],\"objName\":\"Ops.Math.Ease\"},{\"id\":\"m7j2x3brg\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"old min\",\"value\":0.6},{\"name\":\"old max\",\"value\":1},{\"name\":\"new min\",\"value\":0.5},{\"name\":\"new max\",\"value\":2},{\"name\":\"Easing index\",\"value\":0},{\"name\":\"Easing\",\"value\":\"Linear\"},{\"name\":\"Clamp\",\"value\":1}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"a\",\"portOut\":\"result\",\"objIn\":\"2g0mjc3ba\",\"objOut\":\"m7j2x3brg\"}]}],\"objName\":\"Ops.Math.MapRange\"},{\"id\":\"ckxpr6aan\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"posX\",\"value\":-0.55},{\"name\":\"posY\",\"value\":0.94},{\"name\":\"posZ\",\"value\":-0.04},{\"name\":\"scale\",\"value\":1},{\"name\":\"rotX\",\"value\":0},{\"name\":\"rotY\",\"value\":0},{\"name\":\"rotZ\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"lmn69jznm\",\"objOut\":\"ckxpr6aan\"},{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"9m6v4vl97\",\"objOut\":\"ckxpr6aan\"},{\"portIn\":\"Render\",\"portOut\":\"trigger\",\"objIn\":\"cfz08ghpj\",\"objOut\":\"ckxpr6aan\"}]}],\"objName\":\"Ops.Gl.Matrix.Transform\"},{\"id\":\"tomh1nu5h\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"X 1\",\"value\":0},{\"name\":\"Y 1\",\"value\":-0.08},{\"name\":\"Z 1\",\"value\":0},{\"name\":\"X 2\",\"value\":0},{\"name\":\"Y 2\",\"value\":0},{\"name\":\"Z 2\",\"value\":0}],\"objName\":\"Ops.Gl.Meshes.Line\"},{\"id\":\"n3btni6ih\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"Repeats\",\"value\":11},{\"name\":\"Direction index\",\"value\":0},{\"name\":\"Direction\",\"value\":\"Forward\"}],\"portsOut\":[{\"name\":\"Next\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"Next\",\"objIn\":\"cb4ehf83s\",\"objOut\":\"n3btni6ih\"}]},{\"name\":\"index\",\"links\":[{\"portIn\":\"value\",\"portOut\":\"index\",\"objIn\":\"ixn0r0yzl\",\"objOut\":\"n3btni6ih\"}]}],\"objName\":\"Ops.Trigger.Repeat_v2\"},{\"id\":\"cb4ehf83s\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"y\",\"value\":0.04},{\"name\":\"z\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"trigger\",\"objIn\":\"tomh1nu5h\",\"objOut\":\"cb4ehf83s\"}]}],\"objName\":\"Ops.Gl.Matrix.Translate\"},{\"id\":\"ixn0r0yzl\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"old min\",\"value\":0},{\"name\":\"old max\",\"value\":14},{\"name\":\"new min\",\"value\":0.5},{\"name\":\"new max\",\"value\":1},{\"name\":\"Easing index\",\"value\":0},{\"name\":\"Easing\",\"value\":\"Linear\"},{\"name\":\"Clamp\",\"value\":1}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"result\",\"objIn\":\"88ug8x3np\",\"objOut\":\"ixn0r0yzl\"}]}],\"objName\":\"Ops.Math.MapRange\"},{\"id\":\"wo90cqydk\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"posX\",\"value\":-1.02},{\"name\":\"posY\",\"value\":0},{\"name\":\"posZ\",\"value\":0},{\"name\":\"scale\",\"value\":1},{\"name\":\"rotX\",\"value\":0},{\"name\":\"rotY\",\"value\":0},{\"name\":\"rotZ\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Execute\",\"portOut\":\"trigger\",\"objIn\":\"n3btni6ih\",\"objOut\":\"wo90cqydk\"}]}],\"objName\":\"Ops.Gl.Matrix.Transform\"},{\"id\":\"lmn69jznm\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"scale\",\"value\":1},{\"name\":\"x\",\"value\":1.6},{\"name\":\"y\",\"value\":1},{\"name\":\"z\",\"value\":1}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"wo90cqydk\",\"objOut\":\"lmn69jznm\"}]}],\"objName\":\"Ops.Gl.Matrix.Scale\"},{\"id\":\"88ug8x3np\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"Min\",\"value\":0},{\"name\":\"Max\",\"value\":1},{\"name\":\"Easing index\",\"value\":6},{\"name\":\"Easing\",\"value\":\"Cubic In Out\"}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"x\",\"portOut\":\"Result\",\"objIn\":\"cb4ehf83s\",\"objOut\":\"88ug8x3np\"}]}],\"objName\":\"Ops.Math.Ease\"},{\"id\":\"5hz8aki6v\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"X 1\",\"value\":0},{\"name\":\"Y 1\",\"value\":-0.08},{\"name\":\"Z 1\",\"value\":0},{\"name\":\"X 2\",\"value\":0},{\"name\":\"Y 2\",\"value\":0},{\"name\":\"Z 2\",\"value\":0}],\"objName\":\"Ops.Gl.Meshes.Line\"},{\"id\":\"so6k9psr3\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"Repeats\",\"value\":11},{\"name\":\"Direction index\",\"value\":0},{\"name\":\"Direction\",\"value\":\"Forward\"}],\"portsOut\":[{\"name\":\"Next\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"Next\",\"objIn\":\"z727w9xkx\",\"objOut\":\"so6k9psr3\"}]},{\"name\":\"index\",\"links\":[{\"portIn\":\"value\",\"portOut\":\"index\",\"objIn\":\"rxfxsnt2w\",\"objOut\":\"so6k9psr3\"}]}],\"objName\":\"Ops.Trigger.Repeat_v2\"},{\"id\":\"z727w9xkx\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"y\",\"value\":0.04},{\"name\":\"z\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"trigger\",\"objIn\":\"5hz8aki6v\",\"objOut\":\"z727w9xkx\"}]}],\"objName\":\"Ops.Gl.Matrix.Translate\"},{\"id\":\"rxfxsnt2w\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"old min\",\"value\":0},{\"name\":\"old max\",\"value\":14},{\"name\":\"new min\",\"value\":0.5},{\"name\":\"new max\",\"value\":1},{\"name\":\"Easing index\",\"value\":0},{\"name\":\"Easing\",\"value\":\"Linear\"},{\"name\":\"Clamp\",\"value\":1}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"result\",\"objIn\":\"su3pkday4\",\"objOut\":\"rxfxsnt2w\"}]}],\"objName\":\"Ops.Math.MapRange\"},{\"id\":\"u7hwor4gv\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"posX\",\"value\":1.02},{\"name\":\"posY\",\"value\":0},{\"name\":\"posZ\",\"value\":0},{\"name\":\"scale\",\"value\":1},{\"name\":\"rotX\",\"value\":0},{\"name\":\"rotY\",\"value\":180},{\"name\":\"rotZ\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Execute\",\"portOut\":\"trigger\",\"objIn\":\"so6k9psr3\",\"objOut\":\"u7hwor4gv\"}]}],\"objName\":\"Ops.Gl.Matrix.Transform\"},{\"id\":\"9m6v4vl97\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"scale\",\"value\":1},{\"name\":\"x\",\"value\":1.6},{\"name\":\"y\",\"value\":1},{\"name\":\"z\",\"value\":1}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"u7hwor4gv\",\"objOut\":\"9m6v4vl97\"}]}],\"objName\":\"Ops.Gl.Matrix.Scale\"},{\"id\":\"su3pkday4\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"Min\",\"value\":0},{\"name\":\"Max\",\"value\":1},{\"name\":\"Easing index\",\"value\":6},{\"name\":\"Easing\",\"value\":\"Cubic In Out\"}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"x\",\"portOut\":\"Result\",\"objIn\":\"z727w9xkx\",\"objOut\":\"su3pkday4\"}]}],\"objName\":\"Ops.Math.Ease\"},{\"id\":\"cfz08ghpj\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"X 1\",\"value\":0},{\"name\":\"Y 1\",\"value\":-0.08},{\"name\":\"Z 1\",\"value\":0},{\"name\":\"X 2\",\"value\":0},{\"name\":\"Y 2\",\"value\":0.08},{\"name\":\"Z 2\",\"value\":0}],\"objName\":\"Ops.Gl.Meshes.Line\"},{\"id\":\"2g0mjc3ba\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"r\",\"value\":0.959},{\"name\":\"g\",\"value\":0.9422887035464338},{\"name\":\"b\",\"value\":0.852},{\"name\":\"colorizeTexture\",\"value\":0},{\"name\":\"Vertex Colors\",\"value\":0},{\"name\":\"Alpha Mask Source index\",\"value\":0},{\"name\":\"Alpha Mask Source\",\"value\":\"Luminance\"},{\"name\":\"Opacity TexCoords Transform\",\"value\":0},{\"name\":\"Discard Transparent Pixels\",\"value\":0},{\"name\":\"diffuseRepeatX\",\"value\":1},{\"name\":\"diffuseRepeatY\",\"value\":1},{\"name\":\"Tex Offset X\",\"value\":0},{\"name\":\"Tex Offset Y\",\"value\":0},{\"name\":\"Crop TexCoords\",\"value\":0},{\"name\":\"billboard\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"ckxpr6aan\",\"objOut\":\"2g0mjc3ba\"}]}],\"objName\":\"Ops.Gl.Shader.BasicMaterial_v3\"},{\"id\":\"tthnus5kf\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsOut\":[{\"name\":\"Trigger out\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"Trigger out\",\"objIn\":\"6kesvd73l\",\"objOut\":\"tthnus5kf\"}]}],\"objName\":\"Ops.Trigger.GateTrigger\"},{\"id\":\"e2twu2yjj\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{\"blueprintVer\":2,\"subPatchVer\":2},\"portsIn\":[{\"name\":\"blls2amps\",\"title\":\"Trigger in\"},{\"name\":\"btagbs7z2\",\"title\":\"Class\"},{\"name\":\"lj06d561p\",\"value\":0,\"title\":\"Show Boundings\"},{\"name\":\"patchId\",\"value\":\"v99isckv2\"}],\"portsOut\":[{\"name\":\"nti406vwi\",\"value\":0.1866593360900879,\"title\":\"Result\"},{\"name\":\"gjvx0zyv5\",\"title\":\"value\",\"links\":[{\"portIn\":\"number1\",\"portOut\":\"gjvx0zyv5\",\"objIn\":\"h9qj105dd\",\"objOut\":\"e2twu2yjj\"},{\"portIn\":\"value\",\"portOut\":\"gjvx0zyv5\",\"objIn\":\"v9suy4c4f\",\"objOut\":\"e2twu2yjj\"},{\"portIn\":\"value\",\"portOut\":\"gjvx0zyv5\",\"objIn\":\"m7j2x3brg\",\"objOut\":\"e2twu2yjj\"}]},{\"name\":\"h2l1ydpiy\",\"title\":\"Hover\",\"links\":[{\"portIn\":\"Pass Through\",\"portOut\":\"h2l1ydpiy\",\"objIn\":\"tthnus5kf\",\"objOut\":\"e2twu2yjj\"},{\"portIn\":\"Boolean\",\"portOut\":\"h2l1ydpiy\",\"objIn\":\"65s996ny5\",\"objOut\":\"e2twu2yjj\"}]}],\"objName\":\"Ops.Patch.P4Zknbo.BasicSlider_v3\"},{\"id\":\"7gw7i08xf\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsOut\":[{\"name\":\"Trigger out\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"Trigger out\",\"objIn\":\"2g0mjc3ba\",\"objOut\":\"7gw7i08xf\"}]}],\"objName\":\"Ops.Trigger.GateTrigger\"},{\"id\":\"65s996ny5\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Pass Through\",\"portOut\":\"Result\",\"objIn\":\"7gw7i08xf\",\"objOut\":\"65s996ny5\"}]}],\"objName\":\"Ops.Boolean.Not\"},{\"id\":\"irmmcclbz\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_smoothedParam_mix\"}],\"portsOut\":[{\"name\":\"Value\",\"links\":[{\"portIn\":\"Percentage\",\"portOut\":\"Value\",\"objIn\":\"xbujzat90\",\"objOut\":\"irmmcclbz\"}]}],\"objName\":\"Ops.Vars.VarGetNumber_v2\"},{\"id\":\"xbujzat90\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"Value 1\",\"value\":2},{\"name\":\"Value 2\",\"value\":32}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"number\",\"portOut\":\"Result\",\"objIn\":\"vcf0tlct8\",\"objOut\":\"xbujzat90\"}]}],\"objName\":\"Ops.Math.Interpolate\"},{\"id\":\"vcf0tlct8\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"Decimal Places\",\"value\":0}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"rings\",\"portOut\":\"result\",\"objIn\":\"fqp72cg1u\",\"objOut\":\"vcf0tlct8\"}]}],\"objName\":\"Ops.Math.Round\"},{\"id\":\"urekbae5m\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_smoothedParam_size\"}],\"portsOut\":[{\"name\":\"Value\",\"links\":[{\"portIn\":\"Percentage\",\"portOut\":\"Value\",\"objIn\":\"4iiujwgso\",\"objOut\":\"urekbae5m\"}]}],\"objName\":\"Ops.Vars.VarGetNumber_v2\"},{\"id\":\"4iiujwgso\",\"uiAttribs\":{\"subPatch\":\"r4a7vbpos\"},\"storage\":{},\"portsIn\":[{\"name\":\"Value 1\",\"value\":0.3},{\"name\":\"Value 2\",\"value\":1.09}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"innerRadius\",\"portOut\":\"Result\",\"objIn\":\"fqp72cg1u\",\"objOut\":\"4iiujwgso\"}]}],\"objName\":\"Ops.Math.Interpolate\"}]}",};
op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
    }
if(addedOps[i].innerOutput)
{
}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}


};

Ops.Patch.P4Zknbo.UI_Position.prototype = new CABLES.Op();
CABLES.OPS["d6f57134-d5ce-4192-a435-25e9ee14a19d"]={f:Ops.Patch.P4Zknbo.UI_Position,objName:"Ops.Patch.P4Zknbo.UI_Position"};




// **************************************************************
// 
// Ops.Patch.P4Zknbo.UI_Reverse
// 
// **************************************************************

Ops.Patch.P4Zknbo.UI_Reverse = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"op.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\n    }\nif(addedOps[i].innerOutput)\n{\n}\n}\n};\n","subpatch_json":"{\"ops\":[{\"id\":\"qghiiy95s\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Named Trigger\",\"value\":\"exeNoCamera\"}],\"portsOut\":[{\"name\":\"Triggered\",\"links\":[{\"portIn\":\"Execute\",\"portOut\":\"Triggered\",\"objIn\":\"tid23z5y9\",\"objOut\":\"qghiiy95s\"}]}],\"objName\":\"Ops.Trigger.TriggerReceive\"},{\"id\":\"7utel4c7y\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"x\",\"value\":1.56},{\"name\":\"y\",\"value\":-0.91},{\"name\":\"z\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Trigger in\",\"portOut\":\"trigger\",\"objIn\":\"wjdkfrc11\",\"objOut\":\"7utel4c7y\"}]}],\"objName\":\"Ops.Gl.Matrix.Translate\"},{\"id\":\"16otblnj7\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"x\",\"value\":2.35},{\"name\":\"y\",\"value\":-1.41},{\"name\":\"z\",\"value\":-1}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"y8y68olnn\",\"objOut\":\"16otblnj7\"}]}],\"objName\":\"Ops.Gl.Matrix.Translate\"},{\"id\":\"y8y68olnn\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"r\",\"value\":0.18},{\"name\":\"g\",\"value\":0.87},{\"name\":\"b\",\"value\":0.7},{\"name\":\"a\",\"value\":0.639},{\"name\":\"colorizeTexture\",\"value\":0},{\"name\":\"Vertex Colors\",\"value\":0},{\"name\":\"Alpha Mask Source index\",\"value\":0},{\"name\":\"Alpha Mask Source\",\"value\":\"Luminance\"},{\"name\":\"Opacity TexCoords Transform\",\"value\":0},{\"name\":\"Discard Transparent Pixels\",\"value\":1},{\"name\":\"diffuseRepeatX\",\"value\":1},{\"name\":\"diffuseRepeatY\",\"value\":1},{\"name\":\"Tex Offset X\",\"value\":1},{\"name\":\"Tex Offset Y\",\"value\":1},{\"name\":\"Crop TexCoords\",\"value\":0},{\"name\":\"billboard\",\"value\":1}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"update\",\"portOut\":\"trigger\",\"objIn\":\"4rj53xcrb\",\"objOut\":\"y8y68olnn\"}]}],\"objName\":\"Ops.Gl.Shader.BasicMaterial_v3\"},{\"id\":\"emr97oqar\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"easing index\",\"value\":9},{\"name\":\"easing\",\"value\":\"Expo In Out\"},{\"name\":\"duration\",\"value\":0.25},{\"name\":\"Direction index\",\"value\":0},{\"name\":\"Direction\",\"value\":\"Both\"},{\"name\":\"value false\",\"value\":0},{\"name\":\"value true\",\"value\":1}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Execute\",\"portOut\":\"trigger\",\"objIn\":\"sagw7b55r\",\"objOut\":\"emr97oqar\"},{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"kvlx2oltj\",\"objOut\":\"emr97oqar\"}]},{\"name\":\"value\",\"links\":[{\"portIn\":\"Percentage\",\"portOut\":\"value\",\"objIn\":\"zw7w6mo0c\",\"objOut\":\"emr97oqar\"}]},{\"name\":\"finished\",\"links\":[{\"portIn\":\"Boolean\",\"portOut\":\"finished\",\"objIn\":\"eyg6ioae6\",\"objOut\":\"emr97oqar\"}]}],\"objName\":\"Ops.Anim.BoolAnim\"},{\"id\":\"texsus5w1\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"radius\",\"value\":0.5},{\"name\":\"segments\",\"value\":3},{\"name\":\"percent\",\"value\":1},{\"name\":\"steps\",\"value\":0},{\"name\":\"invertSteps\",\"value\":1},{\"name\":\"mapping index\",\"value\":1},{\"name\":\"mapping\",\"value\":\"round\"},{\"name\":\"Spline\",\"value\":0},{\"name\":\"Draw\",\"value\":0,\"title\":\"Render mesh\"}],\"portsOut\":[{\"name\":\"geometry\",\"links\":[{\"portIn\":\"Geometry\",\"portOut\":\"geometry\",\"objIn\":\"u5vhr44jp\",\"objOut\":\"texsus5w1\"}]}],\"objName\":\"Ops.Gl.Meshes.Circle_v3\"},{\"id\":\"mhkszyupz\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Title\",\"value\":\"direction\"}],\"objName\":\"Ops.Ui.Area\"},{\"id\":\"u5vhr44jp\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Translate X\",\"value\":0},{\"name\":\"Translate Y\",\"value\":0.03},{\"name\":\"Translate Z\",\"value\":0},{\"name\":\"Rotation X\",\"value\":0},{\"name\":\"Rotation Z\",\"value\":0}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Geometry\",\"portOut\":\"Result\",\"objIn\":\"a7obygjuu\",\"objOut\":\"u5vhr44jp\"}]}],\"objName\":\"Ops.Graphics.Geometry.TransformGeometry\"},{\"id\":\"a7obygjuu\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Render Mesh\",\"value\":1},{\"name\":\"Add Vertex Numbers\",\"value\":1}],\"objName\":\"Ops.Gl.RenderGeometry_v2\"},{\"id\":\"sagw7b55r\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"Trigger out\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"Trigger out\",\"objIn\":\"texsus5w1\",\"objOut\":\"sagw7b55r\"}]}],\"objName\":\"Ops.Trigger.GateTrigger\"},{\"id\":\"eyg6ioae6\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"bool 1\",\"portOut\":\"Result\",\"objIn\":\"c3tlwlzty\",\"objOut\":\"eyg6ioae6\"}]}],\"objName\":\"Ops.Boolean.Not\"},{\"id\":\"wjfsknozl\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"easing index\",\"value\":8},{\"name\":\"easing\",\"value\":\"Expo Out\"},{\"name\":\"duration\",\"value\":2},{\"name\":\"Direction index\",\"value\":0},{\"name\":\"Direction\",\"value\":\"Both\"},{\"name\":\"value false\",\"value\":0},{\"name\":\"value true\",\"value\":180}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"a7obygjuu\",\"objOut\":\"wjfsknozl\"}]},{\"name\":\"value\",\"links\":[{\"portIn\":\"Rotation Y\",\"portOut\":\"value\",\"objIn\":\"u5vhr44jp\",\"objOut\":\"wjfsknozl\"}]},{\"name\":\"finished\",\"value\":1}],\"objName\":\"Ops.Anim.BoolAnim\"},{\"id\":\"4ic99bue4\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"value\",\"value\":0.3}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Scale X\",\"portOut\":\"result\",\"objIn\":\"u5vhr44jp\",\"objOut\":\"4ic99bue4\"},{\"portIn\":\"Scale Y\",\"portOut\":\"result\",\"objIn\":\"u5vhr44jp\",\"objOut\":\"4ic99bue4\"},{\"portIn\":\"Scale Z\",\"portOut\":\"result\",\"objIn\":\"u5vhr44jp\",\"objOut\":\"4ic99bue4\"}]}],\"objName\":\"Ops.Number.Number\"},{\"id\":\"vnufzl0gr\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"__directionHover\"}],\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"4rj53xcrb\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Duration\",\"value\":0.1},{\"name\":\"Invert\",\"value\":0}],\"portsOut\":[{\"name\":\"Trigger Out\",\"links\":[{\"portIn\":\"exe\",\"portOut\":\"Trigger Out\",\"objIn\":\"wjfsknozl\",\"objOut\":\"4rj53xcrb\"}]},{\"name\":\"Value\",\"links\":[{\"portIn\":\"bool 2\",\"portOut\":\"Value\",\"objIn\":\"c3tlwlzty\",\"objOut\":\"4rj53xcrb\"}]}],\"objName\":\"Ops.Anim.Bang\"},{\"id\":\"c3tlwlzty\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"bool 3\",\"value\":0},{\"name\":\"bool 4\",\"value\":0},{\"name\":\"bool 5\",\"value\":0},{\"name\":\"bool 6\",\"value\":0},{\"name\":\"bool 7\",\"value\":0},{\"name\":\"bool 8\",\"value\":0},{\"name\":\"bool 9\",\"value\":0},{\"name\":\"bool 10\",\"value\":0}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Pass Through\",\"portOut\":\"result\",\"objIn\":\"sagw7b55r\",\"objOut\":\"c3tlwlzty\"}]}],\"objName\":\"Ops.Boolean.Or\"},{\"id\":\"645zi03vl\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Named Trigger\",\"value\":\"mainExe\"}],\"portsOut\":[{\"name\":\"Triggered\",\"links\":[{\"portIn\":\"Exec\",\"portOut\":\"Triggered\",\"objIn\":\"3j312q09a\",\"objOut\":\"645zi03vl\"}]}],\"objName\":\"Ops.Trigger.TriggerReceive\"},{\"id\":\"3j312q09a\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"Next\",\"links\":[{\"portIn\":\"Bang\",\"portOut\":\"Next\",\"objIn\":\"4rj53xcrb\",\"objOut\":\"3j312q09a\"}]},{\"name\":\"Was Triggered\",\"value\":1}],\"objName\":\"Ops.Trigger.TriggerOnce\"},{\"id\":\"hh1bw1t8x\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Text\",\"value\":\"mirror\"},{\"name\":\"Font\",\"value\":\"eb066298-c95b-4900-a9c8-abb0e9ea0930\"},{\"name\":\"Scale\",\"value\":0.06},{\"name\":\"Letter Spacing\",\"value\":0},{\"name\":\"Line Height\",\"value\":1},{\"name\":\"Align index\",\"value\":1},{\"name\":\"Align\",\"value\":\"Center\"},{\"name\":\"Vertical Align index\",\"value\":2},{\"name\":\"Vertical Align\",\"value\":\"Middle\"},{\"name\":\"r\",\"value\":1},{\"name\":\"g\",\"value\":1},{\"name\":\"b\",\"value\":1},{\"name\":\"a\",\"value\":1},{\"name\":\"SDF\",\"value\":1},{\"name\":\"Smoothing\",\"value\":0.147},{\"name\":\"Border\",\"value\":0},{\"name\":\"Border Width\",\"value\":0.085},{\"name\":\"Smoothness\",\"value\":0.25},{\"name\":\"Border r\",\"value\":0},{\"name\":\"Border g\",\"value\":0.107},{\"name\":\"Border b\",\"value\":0.196},{\"name\":\"Shadow\",\"value\":0},{\"name\":\"Positions\",\"value\":0},{\"name\":\"Scalings\",\"value\":0},{\"name\":\"Rotations\",\"value\":0},{\"name\":\"Colors\",\"value\":0}],\"portsOut\":[{\"name\":\"Num Lines\",\"value\":1},{\"name\":\"Width\",\"value\":0.1596796875},{\"name\":\"Height\",\"value\":0.056864533730158734},{\"name\":\"Start Y\",\"value\":0.017550471230158737},{\"name\":\"Num Chars\",\"value\":6}],\"objName\":\"Ops.Gl.TextMeshMSDF_v2\"},{\"id\":\"kvlx2oltj\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"posX\",\"value\":-0.06},{\"name\":\"posY\",\"value\":0},{\"name\":\"posZ\",\"value\":0},{\"name\":\"scale\",\"value\":1.12},{\"name\":\"rotX\",\"value\":0},{\"name\":\"rotZ\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"trigger\",\"objIn\":\"hh1bw1t8x\",\"objOut\":\"kvlx2oltj\"}]}],\"objName\":\"Ops.Gl.Matrix.Transform\"},{\"id\":\"zw7w6mo0c\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Value 1\",\"value\":0.8},{\"name\":\"Value 2\",\"value\":-1}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"innerRadius\",\"portOut\":\"Result\",\"objIn\":\"texsus5w1\",\"objOut\":\"zw7w6mo0c\"}]}],\"objName\":\"Ops.Math.Interpolate\"},{\"id\":\"ujqk5fpaf\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Value 1\",\"value\":0},{\"name\":\"Value 2\",\"value\":180},{\"name\":\"Percentage\",\"value\":0}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"rotY\",\"portOut\":\"Result\",\"objIn\":\"kvlx2oltj\",\"objOut\":\"ujqk5fpaf\"}]}],\"objName\":\"Ops.Math.Interpolate\"},{\"id\":\"1pqb89bjc\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_scapeBypass\"}],\"portsOut\":[{\"name\":\"Value\",\"links\":[{\"portIn\":\"Boolean\",\"portOut\":\"Value\",\"objIn\":\"tz85ej408\",\"objOut\":\"1pqb89bjc\"}]}],\"objName\":\"Ops.Vars.VarGetNumber_v2\"},{\"id\":\"tid23z5y9\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"Trigger out\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"Trigger out\",\"objIn\":\"16otblnj7\",\"objOut\":\"tid23z5y9\"},{\"portIn\":\"render\",\"portOut\":\"Trigger out\",\"objIn\":\"7utel4c7y\",\"objOut\":\"tid23z5y9\"}]}],\"objName\":\"Ops.Trigger.GateTrigger\"},{\"id\":\"tz85ej408\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Pass Through\",\"portOut\":\"Result\",\"objIn\":\"tid23z5y9\",\"objOut\":\"tz85ej408\"}]}],\"objName\":\"Ops.Boolean.Not\"},{\"id\":\"cygi82km5\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_mouseIsChangingParamID\"}],\"objName\":\"Ops.Vars.VarSetString_v2\"},{\"id\":\"zbffut3f0\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"result\",\"objIn\":\"8ozh9kadw\",\"objOut\":\"zbffut3f0\"},{\"portIn\":\"Index\",\"portOut\":\"result\",\"objIn\":\"0vu10mt62\",\"objOut\":\"zbffut3f0\"}]}],\"objName\":\"Ops.Ui.Routing.RouteNumber\"},{\"id\":\"nfsa96rhl\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"value\",\"value\":\"scapeReverse\"}],\"portsOut\":[{\"name\":\"String\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"String\",\"objIn\":\"cygi82km5\",\"objOut\":\"nfsa96rhl\"},{\"portIn\":\"String In\",\"portOut\":\"String\",\"objIn\":\"t14aqlug4\",\"objOut\":\"nfsa96rhl\"},{\"portIn\":\"ID\",\"portOut\":\"String\",\"objIn\":\"wjdkfrc11\",\"objOut\":\"nfsa96rhl\"}]}],\"objName\":\"Ops.String.String_v2\"},{\"id\":\"vu19d3bul\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"Bool\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"Bool\",\"objIn\":\"td9wlsg43\",\"objOut\":\"vu19d3bul\"}]}],\"objName\":\"Ops.Ui.VizBool\"},{\"id\":\"8ozh9kadw\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_leftButtonToggle\"}],\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"90vhc52nh\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_scapeReverse\"}],\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"9r76qflhv\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Title\",\"value\":\"ext/int rev\"}],\"objName\":\"Ops.Ui.Area\"},{\"id\":\"t14aqlug4\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"When False index\",\"value\":1},{\"name\":\"When False\",\"value\":\"custom\"},{\"name\":\"Custom Value\",\"value\":\"scapeReverse\"}],\"portsOut\":[{\"name\":\"String Out\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"String Out\",\"objIn\":\"qvj2rc5yc\",\"objOut\":\"t14aqlug4\"}]}],\"objName\":\"Ops.String.GateString\"},{\"id\":\"qvj2rc5yc\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_scapeReverse_mouseEnter_string\"}],\"objName\":\"Ops.Vars.VarSetString_v2\"},{\"id\":\"td9wlsg43\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_scapeReverse\"}],\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"0vu10mt62\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Numbers\",\"multiPortNum\":2},{\"name\":\"Numbers_0\",\"value\":0},{\"name\":\"Numbers_1\",\"value\":0,\"title\":\"add port\"}],\"portsOut\":[{\"name\":\"Number\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"Number\",\"objIn\":\"90vhc52nh\",\"objOut\":\"0vu10mt62\"}]},{\"name\":\"Num Values\",\"value\":1}],\"objName\":\"Ops.Number.SwitchNumberMultiPort\"},{\"id\":\"o11gp8oqj\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"objName\":\"Ops.Ui.SubPatchInput\"},{\"id\":\"l212r4h3a\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"objName\":\"Ops.Ui.SubPatchOutput\"},{\"id\":\"wjdkfrc11\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Width\",\"value\":0.18},{\"name\":\"Height\",\"value\":0.3},{\"name\":\"Class\",\"value\":\"\"},{\"name\":\"Pivot x index\",\"value\":0},{\"name\":\"Pivot x\",\"value\":\"center\"},{\"name\":\"Pivot y index\",\"value\":0},{\"name\":\"Pivot y\",\"value\":\"center\"},{\"name\":\"Axis index\",\"value\":0},{\"name\":\"Axis\",\"value\":\"xy\"},{\"name\":\"Is Interactive\",\"value\":1},{\"name\":\"Render Rectangle\",\"value\":0},{\"name\":\"Show Boundings\",\"value\":0},{\"name\":\"Cursor index\",\"value\":2},{\"name\":\"Cursor\",\"value\":\"pointer\"},{\"name\":\"Render\",\"value\":1,\"title\":\"Active\"}],\"portsOut\":[{\"name\":\"Trigger out\",\"links\":[{\"portIn\":\"exe\",\"portOut\":\"Trigger out\",\"objIn\":\"emr97oqar\",\"objOut\":\"wjdkfrc11\"}]},{\"name\":\"Pointer Hover\",\"links\":[{\"portIn\":\"bool\",\"portOut\":\"Pointer Hover\",\"objIn\":\"emr97oqar\",\"objOut\":\"wjdkfrc11\"},{\"portIn\":\"Value\",\"portOut\":\"Pointer Hover\",\"objIn\":\"vnufzl0gr\",\"objOut\":\"wjdkfrc11\"},{\"portIn\":\"Boolean\",\"portOut\":\"Pointer Hover\",\"objIn\":\"bapp6utku\",\"objOut\":\"wjdkfrc11\"},{\"portIn\":\"Pass Through\",\"portOut\":\"Pointer Hover\",\"objIn\":\"t14aqlug4\",\"objOut\":\"wjdkfrc11\"},{\"portIn\":\"Pass Through\",\"portOut\":\"Pointer Hover\",\"objIn\":\"om0mg2x2d\",\"objOut\":\"wjdkfrc11\"}]},{\"name\":\"Pointer Down\",\"links\":[{\"portIn\":\"value\",\"portOut\":\"Pointer Down\",\"objIn\":\"zbffut3f0\",\"objOut\":\"wjdkfrc11\"}]},{\"name\":\"Pointer X\",\"value\":0.43427912988118217},{\"name\":\"Pointer Y\",\"value\":0.028793380943673674},{\"name\":\"Top\",\"value\":527.8919612169266},{\"name\":\"Left\",\"value\":957.7120399475098},{\"name\":\"Right\",\"value\":1008.3707027435303},{\"name\":\"Bottom\",\"value\":612.3230167627335},{\"name\":\"Left Click\",\"links\":[{\"portIn\":\"trigger in\",\"portOut\":\"Left Click\",\"objIn\":\"lykqgog3v\",\"objOut\":\"wjdkfrc11\"}]}],\"objName\":\"Ops.Patch.P4Zknbo.InteractiveRectangle_v23\"},{\"id\":\"11sr8l1sw\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"__sliderLeave\"}],\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"bapp6utku\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"Result\",\"objIn\":\"11sr8l1sw\",\"objOut\":\"bapp6utku\"}]}],\"objName\":\"Ops.Boolean.Not\"},{\"id\":\"fzdh5f3dx\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{},\"portsOut\":[{\"name\":\"Bool\",\"value\":0}],\"objName\":\"Ops.Ui.VizBool\"},{\"id\":\"om0mg2x2d\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{},\"portsIn\":[{\"name\":\"String In\",\"value\":\"enter\"},{\"name\":\"When False index\",\"value\":1},{\"name\":\"When False\",\"value\":\"custom\"},{\"name\":\"Custom Value\",\"value\":\"leave\"}],\"portsOut\":[{\"name\":\"String Out\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"String Out\",\"objIn\":\"2taefvu7i\",\"objOut\":\"om0mg2x2d\"}]}],\"objName\":\"Ops.String.GateString\"},{\"id\":\"2taefvu7i\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_scapeReverse_mouseEnter_string\"}],\"objName\":\"Ops.Vars.VarSetString_v2\"},{\"id\":\"pf3tzra6p\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"host_scapeReverse\"}],\"portsOut\":[{\"name\":\"Value\",\"links\":[{\"portIn\":\"Boolean\",\"portOut\":\"Value\",\"objIn\":\"fzdh5f3dx\",\"objOut\":\"pf3tzra6p\"}]}],\"objName\":\"Ops.Vars.VarGetNumber_v2\"},{\"id\":\"0dafyebwa\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{},\"portsIn\":[{\"name\":\"Value\",\"value\":0},{\"name\":\"Variable\",\"value\":\"host_scapeReverse\"}],\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"6871qjb4g\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"storage\":{\"blueprintVer\":2,\"ref\":\"6871qjb4g\"},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"host_scapeReverse\"}],\"portsOut\":[{\"name\":\"Value\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"Value\",\"objIn\":\"10k0ten5d\",\"objOut\":\"6871qjb4g\"}]}],\"objName\":\"Ops.Vars.VarGetNumber_v2\"},{\"id\":\"crxc9gthe\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"host_scapeReverse\"}],\"storage\":{\"ref\":\"crxc9gthe\"},\"objName\":\"Ops.Vars.VarTriggerNumber\"},{\"id\":\"c8109m2kz\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"portsIn\":[{\"name\":\"Loop min\",\"value\":0},{\"name\":\"Loop max\",\"value\":1}],\"portsOut\":[{\"name\":\"current count\",\"links\":[{\"portIn\":\"Boolean\",\"portOut\":\"current count\",\"objIn\":\"vu19d3bul\",\"objOut\":\"c8109m2kz\"},{\"portIn\":\"bool\",\"portOut\":\"current count\",\"objIn\":\"wjfsknozl\",\"objOut\":\"c8109m2kz\"}]}],\"storage\":{\"ref\":\"c8109m2kz\"},\"objName\":\"Ops.Trigger.TriggerCounterLoop\"},{\"id\":\"10k0ten5d\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"portsOut\":[{\"name\":\"True\",\"links\":[{\"portIn\":\"trigger in\",\"portOut\":\"True\",\"objIn\":\"c8109m2kz\",\"objOut\":\"10k0ten5d\"}]},{\"name\":\"False\",\"links\":[{\"portIn\":\"reset\",\"portOut\":\"False\",\"objIn\":\"c8109m2kz\",\"objOut\":\"10k0ten5d\"}]}],\"storage\":{\"ref\":\"10k0ten5d\"},\"objName\":\"Ops.Boolean.TriggerOnChangeBoolean\"},{\"id\":\"lykqgog3v\",\"uiAttribs\":{\"subPatch\":\"r008xv2ya\"},\"portsIn\":[{\"name\":\"Loop min\",\"value\":0},{\"name\":\"Loop max\",\"value\":1}],\"portsOut\":[{\"name\":\"trigger out\",\"links\":[{\"portIn\":\"Trigger\",\"portOut\":\"trigger out\",\"objIn\":\"crxc9gthe\",\"objOut\":\"lykqgog3v\"}]},{\"name\":\"current count\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"current count\",\"objIn\":\"crxc9gthe\",\"objOut\":\"lykqgog3v\"}]}],\"storage\":{\"ref\":\"lykqgog3v\"},\"objName\":\"Ops.Trigger.TriggerCounterLoop\"}]}",};
op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
    }
if(addedOps[i].innerOutput)
{
}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}


};

Ops.Patch.P4Zknbo.UI_Reverse.prototype = new CABLES.Op();
CABLES.OPS["542fcabf-cbcc-4a8f-897c-b6b622a90b92"]={f:Ops.Patch.P4Zknbo.UI_Reverse,objName:"Ops.Patch.P4Zknbo.UI_Reverse"};




// **************************************************************
// 
// Ops.Patch.P4Zknbo.BasicSlider_v5
// 
// **************************************************************

Ops.Patch.P4Zknbo.BasicSlider_v5 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_blls2amps=op.inTrigger(\"blls2amps\");\nport_blls2amps.setUiAttribs({title:\"Trigger in\",});\n\nconst port_btagbs7z2=op.inString(\"btagbs7z2\",\"\");\nport_btagbs7z2.setUiAttribs({title:\"Class\",});\n\nconst port_lj06d561p=op.inFloat(\"lj06d561p\",0);\nport_lj06d561p.setUiAttribs({title:\"Show Boundings\",display:\"bool\",});\n\nconst port_nti406vwi=op.outNumber(\"nti406vwi\");\nport_nti406vwi.setUiAttribs({title:\"Result\",});\n\nconst port_gjvx0zyv5=op.outNumber(\"gjvx0zyv5\");\nport_gjvx0zyv5.setUiAttribs({title:\"value\",});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_blls2amps = addedOps[i].outTrigger(\"innerOut_blls2amps\");\ninnerOut_blls2amps.setUiAttribs({title:\"Trigger in\"});\nport_blls2amps.onTriggered = () => { innerOut_blls2amps.trigger(); };\n\nconst innerOut_btagbs7z2 = addedOps[i].outString(\"innerOut_btagbs7z2\");\ninnerOut_btagbs7z2.set(port_btagbs7z2.get() );\ninnerOut_btagbs7z2.setUiAttribs({title:\"Class\"});\nport_btagbs7z2.on(\"change\", (a,v) => { innerOut_btagbs7z2.set(a); });\n\nconst innerOut_lj06d561p = addedOps[i].outNumber(\"innerOut_lj06d561p\");\ninnerOut_lj06d561p.set(port_lj06d561p.get() );\ninnerOut_lj06d561p.setUiAttribs({title:\"Show Boundings\"});\nport_lj06d561p.on(\"change\", (a,v) => { innerOut_lj06d561p.set(a); });\n\n    }\nif(addedOps[i].innerOutput)\n{\nconst innerIn_nti406vwi = addedOps[i].inFloat(\"innerIn_nti406vwi\");\ninnerIn_nti406vwi.setUiAttribs({title:\"Result\"});\ninnerIn_nti406vwi.on(\"change\", (a,v) => { port_nti406vwi.set(a); });\n\nconst innerIn_gjvx0zyv5 = addedOps[i].inFloat(\"innerIn_gjvx0zyv5\");\ninnerIn_gjvx0zyv5.setUiAttribs({title:\"value\"});\ninnerIn_gjvx0zyv5.on(\"change\", (a,v) => { port_gjvx0zyv5.set(a); });\n\n}\n}\n};\n","subpatch_json":"{\"ops\":[{\"id\":\"b5jmw6pne\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Width\",\"value\":0.24},{\"name\":\"Height\",\"value\":1},{\"name\":\"Class\",\"value\":\"slider_track\"},{\"name\":\"Pivot x index\",\"value\":0},{\"name\":\"Pivot x\",\"value\":\"center\"},{\"name\":\"Pivot y index\",\"value\":0},{\"name\":\"Pivot y\",\"value\":\"center\"},{\"name\":\"Axis index\",\"value\":0},{\"name\":\"Axis\",\"value\":\"xy\"},{\"name\":\"Is Interactive\",\"value\":1},{\"name\":\"Render Rectangle\",\"value\":0},{\"name\":\"Show Boundings\",\"value\":0},{\"name\":\"Cursor index\",\"value\":5},{\"name\":\"Cursor\",\"value\":\"n-resize\"},{\"name\":\"Render\",\"value\":1,\"title\":\"Active\"}],\"portsOut\":[{\"name\":\"Trigger out\",\"links\":[{\"portIn\":\"Update\",\"portOut\":\"Trigger out\",\"objIn\":\"7picyzk8b\",\"objOut\":\"b5jmw6pne\"}]},{\"name\":\"geometry\",\"links\":[{\"portIn\":\"Geometry\",\"portOut\":\"geometry\",\"objIn\":\"mngezvib8\",\"objOut\":\"b5jmw6pne\"}]},{\"name\":\"Pointer Hover\",\"links\":[{\"portIn\":\"value\",\"portOut\":\"Pointer Hover\",\"objIn\":\"s1gixysdm\",\"objOut\":\"b5jmw6pne\"},{\"portIn\":\"Boolean\",\"portOut\":\"Pointer Hover\",\"objIn\":\"at2p512yk\",\"objOut\":\"b5jmw6pne\"}]},{\"name\":\"Pointer Down\",\"links\":[{\"portIn\":\"value\",\"portOut\":\"Pointer Down\",\"objIn\":\"okfe0jjro\",\"objOut\":\"b5jmw6pne\"},{\"portIn\":\"Pass Through\",\"portOut\":\"Pointer Down\",\"objIn\":\"dr5mvrobr\",\"objOut\":\"b5jmw6pne\"}]},{\"name\":\"Pointer X\",\"value\":0.22676901543163624},{\"name\":\"Pointer Y\",\"links\":[{\"portIn\":\"Value In\",\"portOut\":\"Pointer Y\",\"objIn\":\"dr5mvrobr\",\"objOut\":\"b5jmw6pne\"},{\"portIn\":\"Value\",\"portOut\":\"Pointer Y\",\"objIn\":\"3rgu57nny\",\"objOut\":\"b5jmw6pne\"}]},{\"name\":\"Top\",\"value\":123.45288813114166},{\"name\":\"Left\",\"value\":1503.669083893299},{\"name\":\"Right\",\"value\":1591.8645543456078},{\"name\":\"Bottom\",\"value\":682.0242273807526}],\"objName\":\"Ops.Gl.InteractiveRectangle_v2\"},{\"id\":\"uryzrh2kd\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"r\",\"value\":0.179},{\"name\":\"g\",\"value\":1},{\"name\":\"b\",\"value\":0.692},{\"name\":\"colorizeTexture\",\"value\":0},{\"name\":\"Vertex Colors\",\"value\":0},{\"name\":\"Alpha Mask Source index\",\"value\":0},{\"name\":\"Alpha Mask Source\",\"value\":\"Luminance\"},{\"name\":\"Opacity TexCoords Transform\",\"value\":0},{\"name\":\"Discard Transparent Pixels\",\"value\":0},{\"name\":\"diffuseRepeatX\",\"value\":1},{\"name\":\"diffuseRepeatY\",\"value\":1},{\"name\":\"Tex Offset X\",\"value\":0},{\"name\":\"Tex Offset Y\",\"value\":0},{\"name\":\"Crop TexCoords\",\"value\":0},{\"name\":\"billboard\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"7gzmyju3f\",\"objOut\":\"uryzrh2kd\"}]}],\"objName\":\"Ops.Gl.Shader.BasicMaterial_v3\"},{\"id\":\"7picyzk8b\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Separate inc/dec\",\"value\":0},{\"name\":\"Inc factor\",\"value\":2,\"title\":\"Inc/Dec factor\"},{\"name\":\"Dec factor\",\"value\":4}],\"portsOut\":[{\"name\":\"Next\",\"links\":[{\"portIn\":\"exe\",\"portOut\":\"Next\",\"objIn\":\"f0zxrdgdl\",\"objOut\":\"7picyzk8b\"},{\"portIn\":\"render\",\"portOut\":\"Next\",\"objIn\":\"1hn64zsny\",\"objOut\":\"7picyzk8b\"}]},{\"name\":\"Result\",\"links\":[{\"portIn\":\"innerIn_nti406vwi\",\"portOut\":\"Result\",\"objIn\":\"r1trdmnoo\",\"objOut\":\"7picyzk8b\"},{\"portIn\":\"number1\",\"portOut\":\"Result\",\"objIn\":\"cgqxkp1dw\",\"objOut\":\"7picyzk8b\"}]}],\"objName\":\"Ops.Anim.Smooth\"},{\"id\":\"hhgw84tqq\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"innerOut_blls2amps\",\"title\":\"Trigger in\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"innerOut_blls2amps\",\"objIn\":\"izi14m4jj\",\"objOut\":\"hhgw84tqq\"}]},{\"name\":\"innerOut_btagbs7z2\",\"title\":\"Class\",\"links\":[{\"portIn\":\"ID\",\"portOut\":\"innerOut_btagbs7z2\",\"objIn\":\"b5jmw6pne\",\"objOut\":\"hhgw84tqq\"},{\"portIn\":\"String In\",\"portOut\":\"innerOut_btagbs7z2\",\"objIn\":\"uej7igfhs\",\"objOut\":\"hhgw84tqq\"}]},{\"name\":\"innerOut_lj06d561p\",\"value\":0,\"title\":\"Show Boundings\"}],\"objName\":\"Ops.Ui.SubPatchInput\"},{\"id\":\"r1trdmnoo\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"innerIn_nti406vwi\",\"title\":\"Result\"},{\"name\":\"innerIn_gjvx0zyv5\",\"title\":\"value\"}],\"objName\":\"Ops.Ui.SubPatchOutput\"},{\"id\":\"f0zxrdgdl\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"easing index\",\"value\":6},{\"name\":\"easing\",\"value\":\"Cubic In Out\"},{\"name\":\"duration\",\"value\":0.25},{\"name\":\"Direction index\",\"value\":0},{\"name\":\"Direction\",\"value\":\"Both\"},{\"name\":\"value false\",\"value\":0.7},{\"name\":\"value true\",\"value\":1}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"oi1e3c961\",\"objOut\":\"f0zxrdgdl\"}]},{\"name\":\"value\",\"links\":[{\"portIn\":\"a\",\"portOut\":\"value\",\"objIn\":\"uryzrh2kd\",\"objOut\":\"f0zxrdgdl\"},{\"portIn\":\"innerIn_gjvx0zyv5\",\"portOut\":\"value\",\"objIn\":\"r1trdmnoo\",\"objOut\":\"f0zxrdgdl\"},{\"portIn\":\"Percentage\",\"portOut\":\"value\",\"objIn\":\"s3bh58foh\",\"objOut\":\"f0zxrdgdl\"},{\"portIn\":\"a\",\"portOut\":\"value\",\"objIn\":\"tsxnsqish\",\"objOut\":\"f0zxrdgdl\"}]},{\"name\":\"finished\",\"value\":1}],\"objName\":\"Ops.Anim.BoolAnim\"},{\"id\":\"izi14m4jj\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"x\",\"value\":1.76},{\"name\":\"y\",\"value\":0.013},{\"name\":\"z\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"jtfgofit6\",\"objOut\":\"izi14m4jj\"}]}],\"objName\":\"Ops.Gl.Matrix.Translate\"},{\"id\":\"7gzmyju3f\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"render\",\"title\":\"Trigger\"},{\"name\":\"Render Mesh\",\"value\":1,\"title\":\"Render\"},{\"name\":\"width\",\"value\":0.07},{\"name\":\"height\",\"value\":0.01},{\"name\":\"pivot x index\",\"value\":1},{\"name\":\"pivot x\",\"value\":\"center\"},{\"name\":\"pivot y index\",\"value\":1},{\"name\":\"pivot y\",\"value\":\"center\"},{\"name\":\"axis index\",\"value\":0},{\"name\":\"axis\",\"value\":\"xy\"},{\"name\":\"Flip TexCoord X\",\"value\":0},{\"name\":\"Flip TexCoord Y\",\"value\":1},{\"name\":\"num columns\",\"value\":1},{\"name\":\"num rows\",\"value\":1}],\"objName\":\"Ops.Gl.Meshes.Rectangle_v4\"},{\"id\":\"okfe0jjro\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"result\",\"objIn\":\"5vxvxqmq8\",\"objOut\":\"okfe0jjro\"},{\"portIn\":\"Boolean\",\"portOut\":\"result\",\"objIn\":\"cqxu3tj4o\",\"objOut\":\"okfe0jjro\"}]}],\"objName\":\"Ops.Ui.Routing.RouteNumber\"},{\"id\":\"q95osg3jr\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_dryMix\"}],\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"dmhn9643j\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Title\",\"value\":\"ext/int dry mix\"}],\"objName\":\"Ops.Ui.Area\"},{\"id\":\"uej7igfhs\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"When False index\",\"value\":1},{\"name\":\"When False\",\"value\":\"custom\"},{\"name\":\"Custom Value\",\"value\":\"dryMix\"}],\"portsOut\":[{\"name\":\"String Out\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"String Out\",\"objIn\":\"4ken8jo2h\",\"objOut\":\"uej7igfhs\"},{\"portIn\":\"Key\",\"portOut\":\"String Out\",\"objIn\":\"2kcwcw99k\",\"objOut\":\"uej7igfhs\"}]}],\"objName\":\"Ops.String.GateString\"},{\"id\":\"4ken8jo2h\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_mouseIsChangingParamID\"}],\"objName\":\"Ops.Vars.VarSetString_v2\"},{\"id\":\"905qrz86p\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_normValue\"}],\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"kzejscdk9\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ext_injectedState\"}],\"portsOut\":[{\"name\":\"Value\",\"links\":[{\"portIn\":\"Object In\",\"portOut\":\"Value\",\"objIn\":\"xp3womx4e\",\"objOut\":\"kzejscdk9\"}]}],\"objName\":\"Ops.Vars.VarGetObject_v2\"},{\"id\":\"2kcwcw99k\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Numbers_1\",\"portOut\":\"Result\",\"objIn\":\"yyj0dn3hl\",\"objOut\":\"2kcwcw99k\"},{\"portIn\":\"Number\",\"portOut\":\"Result\",\"objIn\":\"vrog0zpzu\",\"objOut\":\"2kcwcw99k\"}]},{\"name\":\"Found\",\"value\":1}],\"objName\":\"Ops.Json.ObjectGetNumber_v2\"},{\"id\":\"5vxvxqmq8\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_leftButtonSlider\"}],\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"yyj0dn3hl\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Numbers\",\"multiPortNum\":2},{\"name\":\"Numbers_2\",\"value\":0,\"title\":\"add port\"}],\"portsOut\":[{\"name\":\"Number\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"Number\",\"objIn\":\"q95osg3jr\",\"objOut\":\"yyj0dn3hl\"},{\"portIn\":\"number1\",\"portOut\":\"Number\",\"objIn\":\"toobytwr4\",\"objOut\":\"yyj0dn3hl\"},{\"portIn\":\"Number\",\"portOut\":\"Number\",\"objIn\":\"xc4wr3qpm\",\"objOut\":\"yyj0dn3hl\"},{\"portIn\":\"Value\",\"portOut\":\"Number\",\"objIn\":\"7picyzk8b\",\"objOut\":\"yyj0dn3hl\"}]},{\"name\":\"Num Values\",\"value\":2}],\"objName\":\"Ops.Number.SwitchNumberMultiPort\"},{\"id\":\"xp3womx4e\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"When False index\",\"value\":0},{\"name\":\"When False\",\"value\":\"keep last object\"},{\"name\":\"Only Valid Objects\",\"value\":1}],\"portsOut\":[{\"name\":\"Object Out\",\"links\":[{\"portIn\":\"Data\",\"portOut\":\"Object Out\",\"objIn\":\"2kcwcw99k\",\"objOut\":\"xp3womx4e\"}]}],\"objName\":\"Ops.Json.GateObject\"},{\"id\":\"cqxu3tj4o\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Index\",\"portOut\":\"Result\",\"objIn\":\"yyj0dn3hl\",\"objOut\":\"cqxu3tj4o\"},{\"portIn\":\"Pass Through\",\"portOut\":\"Result\",\"objIn\":\"xp3womx4e\",\"objOut\":\"cqxu3tj4o\"}]}],\"objName\":\"Ops.Boolean.Not\"},{\"id\":\"jf5tu10qy\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"result\",\"objIn\":\"905qrz86p\",\"objOut\":\"jf5tu10qy\"},{\"portIn\":\"Numbers_0\",\"portOut\":\"result\",\"objIn\":\"yyj0dn3hl\",\"objOut\":\"jf5tu10qy\"}]}],\"objName\":\"Ops.Ui.Routing.RouteNumber\"},{\"id\":\"75ly7ofzk\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Decimal Places\",\"value\":0}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"string1\",\"portOut\":\"Result\",\"objIn\":\"2jmmqaj8y\",\"objOut\":\"75ly7ofzk\"}]}],\"objName\":\"Ops.String.NumberToString_v2\"},{\"id\":\"oi1e3c961\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"x\",\"value\":0.01},{\"name\":\"y\",\"value\":0.64},{\"name\":\"z\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"trigger\",\"objIn\":\"tsxnsqish\",\"objOut\":\"oi1e3c961\"}]}],\"objName\":\"Ops.Gl.Matrix.Translate\"},{\"id\":\"834yak1b2\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Title\",\"value\":\"digits\"}],\"objName\":\"Ops.Ui.Area\"},{\"id\":\"toobytwr4\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"number2\",\"value\":100}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Number\",\"portOut\":\"result\",\"objIn\":\"75ly7ofzk\",\"objOut\":\"toobytwr4\"}]}],\"objName\":\"Ops.Math.Multiply\"},{\"id\":\"2jmmqaj8y\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"string2\",\"value\":\"%\"},{\"name\":\"New Line\",\"value\":0},{\"name\":\"Active\",\"value\":1}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Text\",\"portOut\":\"result\",\"objIn\":\"tsxnsqish\",\"objOut\":\"2jmmqaj8y\"}]}],\"objName\":\"Ops.String.Concat_v2\"},{\"id\":\"xc4wr3qpm\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"objName\":\"Ops.Ui.VizNumberBar\"},{\"id\":\"utf80cj50\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_mouseIsChangingParamID\"}],\"portsOut\":[{\"name\":\"Value\",\"value\":\"disengage\"}],\"objName\":\"Ops.Vars.VarGetString\"},{\"id\":\"s1gixysdm\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"bool\",\"portOut\":\"result\",\"objIn\":\"f0zxrdgdl\",\"objOut\":\"s1gixysdm\"},{\"portIn\":\"Pass Through\",\"portOut\":\"result\",\"objIn\":\"uej7igfhs\",\"objOut\":\"s1gixysdm\"}]}],\"objName\":\"Ops.Ui.Routing.RouteNumber\"},{\"id\":\"dr5mvrobr\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"When False index\",\"value\":0},{\"name\":\"When False\",\"value\":\"keep last number\"},{\"name\":\"Custom Value\",\"value\":0}],\"portsOut\":[{\"name\":\"Value Out\",\"links\":[{\"portIn\":\"value\",\"portOut\":\"Value Out\",\"objIn\":\"jf5tu10qy\",\"objOut\":\"dr5mvrobr\"}]}],\"objName\":\"Ops.Number.GateNumber\"},{\"id\":\"1hn64zsny\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"posX\",\"value\":0},{\"name\":\"posZ\",\"value\":0},{\"name\":\"scale\",\"value\":1},{\"name\":\"rotX\",\"value\":0},{\"name\":\"rotY\",\"value\":0},{\"name\":\"rotZ\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"uryzrh2kd\",\"objOut\":\"1hn64zsny\"}]}],\"objName\":\"Ops.Gl.Matrix.Transform\"},{\"id\":\"jtfgofit6\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"r\",\"value\":0.651},{\"name\":\"g\",\"value\":1},{\"name\":\"b\",\"value\":0.912},{\"name\":\"colorizeTexture\",\"value\":0},{\"name\":\"Vertex Colors\",\"value\":0},{\"name\":\"Alpha Mask Source index\",\"value\":0},{\"name\":\"Alpha Mask Source\",\"value\":\"Luminance\"},{\"name\":\"Opacity TexCoords Transform\",\"value\":0},{\"name\":\"Discard Transparent Pixels\",\"value\":0},{\"name\":\"diffuseRepeatX\",\"value\":1},{\"name\":\"diffuseRepeatY\",\"value\":0.05},{\"name\":\"Tex Offset X\",\"value\":0},{\"name\":\"Tex Offset Y\",\"value\":-0.04},{\"name\":\"Crop TexCoords\",\"value\":0},{\"name\":\"billboard\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"0d2yvn3ee\",\"objOut\":\"jtfgofit6\"}]}],\"objName\":\"Ops.Gl.Shader.BasicMaterial_v3\"},{\"id\":\"cgqxkp1dw\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"number2\",\"value\":0.5}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"posY\",\"portOut\":\"result\",\"objIn\":\"1hn64zsny\",\"objOut\":\"cgqxkp1dw\"}]}],\"objName\":\"Ops.Math.Subtract\"},{\"id\":\"mngezvib8\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Translate X\",\"value\":0.44},{\"name\":\"Translate Y\",\"value\":0.06},{\"name\":\"Translate Z\",\"value\":-0.5},{\"name\":\"Scale X\",\"value\":0.35},{\"name\":\"Scale Y\",\"value\":1.85},{\"name\":\"Scale Z\",\"value\":1},{\"name\":\"Rotation X\",\"value\":0},{\"name\":\"Rotation Y\",\"value\":0},{\"name\":\"Rotation Z\",\"value\":0}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Geometry\",\"portOut\":\"Result\",\"objIn\":\"0d2yvn3ee\",\"objOut\":\"mngezvib8\"}]}],\"objName\":\"Ops.Graphics.Geometry.TransformGeometry\"},{\"id\":\"0d2yvn3ee\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Render Mesh\",\"value\":1},{\"name\":\"Add Vertex Numbers\",\"value\":1}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"qntdf46e3\",\"objOut\":\"0d2yvn3ee\"}]}],\"objName\":\"Ops.Gl.RenderGeometry_v2\"},{\"id\":\"oedh2oj3o\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"__lensFlareTexts\"}],\"portsOut\":[{\"name\":\"Value\",\"links\":[{\"portIn\":\"texture\",\"portOut\":\"Value\",\"objIn\":\"jtfgofit6\",\"objOut\":\"oedh2oj3o\"}]}],\"objName\":\"Ops.Vars.VarGetTexture_v2\"},{\"id\":\"qntdf46e3\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"x\",\"value\":1},{\"name\":\"y\",\"value\":1.52},{\"name\":\"z\",\"value\":1}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Trigger in\",\"portOut\":\"trigger\",\"objIn\":\"b5jmw6pne\",\"objOut\":\"qntdf46e3\"}]}],\"objName\":\"Ops.Gl.Matrix.ScaleXYZViewMatrix\"},{\"id\":\"s3bh58foh\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Value 1\",\"value\":-2},{\"name\":\"Value 2\",\"value\":2}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"value\",\"portOut\":\"Result\",\"objIn\":\"7knaraxdk\",\"objOut\":\"s3bh58foh\"}]}],\"objName\":\"Ops.Math.Interpolate\"},{\"id\":\"ac4vtthkl\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"__sliderLeave\"}],\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"at2p512yk\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"Result\",\"objIn\":\"ac4vtthkl\",\"objOut\":\"at2p512yk\"}]}],\"objName\":\"Ops.Boolean.Not\"},{\"id\":\"3rgu57nny\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_normValueOnHover\"}],\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"tsxnsqish\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{},\"portsIn\":[{\"name\":\"Font\",\"value\":\"eb066298-c95b-4900-a9c8-abb0e9ea0930\"},{\"name\":\"Scale\",\"value\":0.06},{\"name\":\"Letter Spacing\",\"value\":0},{\"name\":\"Line Height\",\"value\":1},{\"name\":\"Align index\",\"value\":1},{\"name\":\"Align\",\"value\":\"Center\"},{\"name\":\"Vertical Align index\",\"value\":2},{\"name\":\"Vertical Align\",\"value\":\"Middle\"},{\"name\":\"r\",\"value\":1},{\"name\":\"g\",\"value\":1},{\"name\":\"b\",\"value\":1},{\"name\":\"SDF\",\"value\":1},{\"name\":\"Smoothing\",\"value\":0.3},{\"name\":\"Border\",\"value\":0},{\"name\":\"Border Width\",\"value\":0.5},{\"name\":\"Smoothness\",\"value\":0.25},{\"name\":\"Border r\",\"value\":1},{\"name\":\"Border g\",\"value\":1},{\"name\":\"Border b\",\"value\":1},{\"name\":\"Shadow\",\"value\":0},{\"name\":\"Positions\",\"value\":0},{\"name\":\"Scalings\",\"value\":0},{\"name\":\"Rotations\",\"value\":0},{\"name\":\"Colors\",\"value\":0}],\"portsOut\":[{\"name\":\"Num Lines\",\"value\":1},{\"name\":\"Width\",\"value\":0.1137515625},{\"name\":\"Height\",\"value\":0.05096765873015873},{\"name\":\"Start Y\",\"value\":0.012567658730158734},{\"name\":\"Num Chars\",\"value\":3}],\"objName\":\"Ops.Gl.TextMeshMSDF_v2\"},{\"id\":\"7knaraxdk\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{},\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"a\",\"portOut\":\"result\",\"objIn\":\"jtfgofit6\",\"objOut\":\"7knaraxdk\"}]}],\"objName\":\"Ops.Ui.Routing.RouteNumber\"},{\"id\":\"vrog0zpzu\",\"uiAttribs\":{\"subPatch\":\"x6kzkw15l\"},\"storage\":{},\"objName\":\"Ops.Ui.VizNumberBar\"}]}",};
const port_blls2amps=op.inTrigger("blls2amps");
port_blls2amps.setUiAttribs({title:"Trigger in",});

const port_btagbs7z2=op.inString("btagbs7z2","");
port_btagbs7z2.setUiAttribs({title:"Class",});

const port_lj06d561p=op.inFloat("lj06d561p",0);
port_lj06d561p.setUiAttribs({title:"Show Boundings",display:"bool",});

const port_nti406vwi=op.outNumber("nti406vwi");
port_nti406vwi.setUiAttribs({title:"Result",});

const port_gjvx0zyv5=op.outNumber("gjvx0zyv5");
port_gjvx0zyv5.setUiAttribs({title:"value",});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_blls2amps = addedOps[i].outTrigger("innerOut_blls2amps");
innerOut_blls2amps.setUiAttribs({title:"Trigger in"});
port_blls2amps.onTriggered = () => { innerOut_blls2amps.trigger(); };

const innerOut_btagbs7z2 = addedOps[i].outString("innerOut_btagbs7z2");
innerOut_btagbs7z2.set(port_btagbs7z2.get() );
innerOut_btagbs7z2.setUiAttribs({title:"Class"});
port_btagbs7z2.on("change", (a,v) => { innerOut_btagbs7z2.set(a); });

const innerOut_lj06d561p = addedOps[i].outNumber("innerOut_lj06d561p");
innerOut_lj06d561p.set(port_lj06d561p.get() );
innerOut_lj06d561p.setUiAttribs({title:"Show Boundings"});
port_lj06d561p.on("change", (a,v) => { innerOut_lj06d561p.set(a); });

    }
if(addedOps[i].innerOutput)
{
const innerIn_nti406vwi = addedOps[i].inFloat("innerIn_nti406vwi");
innerIn_nti406vwi.setUiAttribs({title:"Result"});
innerIn_nti406vwi.on("change", (a,v) => { port_nti406vwi.set(a); });

const innerIn_gjvx0zyv5 = addedOps[i].inFloat("innerIn_gjvx0zyv5");
innerIn_gjvx0zyv5.setUiAttribs({title:"value"});
innerIn_gjvx0zyv5.on("change", (a,v) => { port_gjvx0zyv5.set(a); });

}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}


};

Ops.Patch.P4Zknbo.BasicSlider_v5.prototype = new CABLES.Op();
CABLES.OPS["a69c9b2a-f8c4-4806-aacb-2033c1fd98d0"]={f:Ops.Patch.P4Zknbo.BasicSlider_v5,objName:"Ops.Patch.P4Zknbo.BasicSlider_v5"};




// **************************************************************
// 
// Ops.Gl.LayerSequence
// 
// **************************************************************

Ops.Gl.LayerSequence = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger("exe"),
    cleanup = op.inTriggerButton("Clean up connections");

const
    cgl = op.patch.cgl,
    triggers = [],
    num = 16;

let updateTimeout = null;

exe.onTriggered = triggerAll;
cleanup.onTriggered = clean;
cleanup.setUiAttribs({ "hidePort": true });
cleanup.setUiAttribs({ "hideParam": true });

for (let i = 0; i < num; i++)
{
    const p = op.outTrigger("trigger " + i);
    triggers.push(p);
    p.onLinkChanged = updateButton;
}

function updateButton()
{
    clearTimeout(updateTimeout);
    updateTimeout = setTimeout(() =>
    {
        let show = false;
        for (let i = 0; i < triggers.length; i++)
            if (triggers[i].links.length > 1) show = true;

        cleanup.setUiAttribs({ "hideParam": !show });

        if (op.isCurrentUiOp()) op.refreshParams();
    }, 60);
}

function triggerAll()
{
    for (let i = 0; i < triggers.length; i++)
    {
        if (triggers[i].isLinked())
        {
            cgl.gl.clear(cgl.gl.DEPTH_BUFFER_BIT);

            triggers[i].trigger();
        }
    }
}

function clean()
{
    let count = 0;
    for (let i = 0; i < triggers.length; i++)
    {
        let removeLinks = [];

        if (triggers[i].links.length > 1)
            for (let j = 1; j < triggers[i].links.length; j++)
            {
                while (triggers[count].links.length > 0) count++;

                removeLinks.push(triggers[i].links[j]);
                const otherPort = triggers[i].links[j].getOtherPort(triggers[i]);
                op.patch.link(op, "trigger " + count, otherPort.op, otherPort.name);
                count++;
            }

        for (let j = 0; j < removeLinks.length; j++) removeLinks[j].remove();
    }
    updateButton();
}


};

Ops.Gl.LayerSequence.prototype = new CABLES.Op();
CABLES.OPS["09c33c7e-e282-468d-93e1-b8a7a0a4c4d2"]={f:Ops.Gl.LayerSequence,objName:"Ops.Gl.LayerSequence"};




// **************************************************************
// 
// Ops.Gl.Meshes.RectangleFrame_v2
// 
// **************************************************************

Ops.Gl.Meshes.RectangleFrame_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("Render"),
    width = op.inValueFloat("Width", 1),
    height = op.inValueFloat("Height", 1),
    thickness = op.inValueFloat("Thickness", -0.1),
    pivotX = op.inSwitch("pivot x", ["center", "left", "right"], "center"),
    pivotY = op.inSwitch("pivot y", ["center", "top", "bottom"], "center"),

    trigger = op.outTrigger("trigger"),
    geomOut = op.outObject("Geometry"),

    drawTop = op.inValueBool("Draw Top", true),
    drawBottom = op.inValueBool("Draw Bottom", true),
    drawLeft = op.inValueBool("Draw Left", true),
    drawRight = op.inValueBool("Draw Right", true),
    active = op.inValueBool("Active", true);

op.toWorkPortsNeedToBeLinked(render);
op.setPortGroup("Geometry", [width, height, thickness]);
op.setPortGroup("Transform", [pivotX, pivotY]);
op.setPortGroup("Sections", [drawTop, drawBottom, drawLeft, drawRight]);

const cgl = op.patch.cgl;
let mesh = null;
const geom = new CGL.Geometry(op.name);
geom.tangents = [];
geom.biTangents = [];

geomOut.ignoreValueSerialize = true;

width.onChange =
    pivotX.onChange =
    pivotY.onChange =
    height.onChange =
    thickness.onChange =
    drawTop.onChange =
    drawBottom.onChange =
    drawLeft.onChange =
    drawRight.onChange = () => { mesh = null; };

render.onTriggered = function ()
{
    if (!mesh) create();
    if (active.get() && mesh) mesh.render(cgl.getShader());

    trigger.trigger();
};

function create()
{
    const w = width.get();
    const h = height.get();
    let x = -w / 2;
    let y = -h / 2;
    const th = thickness.get();//* Math.min(height.get(),width.get())*-0.5;

    if (pivotX.get() == "right") x = -w;
    else if (pivotX.get() == "left") x = 0;

    if (pivotY.get() == "top") y = -h;
    else if (pivotY.get() == "bottom") y = 0;

    geom.vertices.length = 0;
    geom.vertices.push(
        x, y, 0,
        x + w, y, 0,
        x + w, y + h, 0,
        x, y + h, 0,
        x - th, y - th, 0,
        x + w + th, y - th, 0,
        x + w + th, y + h + th, 0,
        x - th, y + h + th, 0
    );

    if (geom.vertexNormals.length === 0) geom.vertexNormals = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1];
    if (geom.tangents.length === 0) geom.tangents = [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0];
    if (geom.biTangents.length === 0) geom.biTangents = [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0];

    if (geom.verticesIndices)geom.verticesIndices.length = 0;
    else geom.verticesIndices = [];

    const vertInd = [];
    if (drawBottom.get()) vertInd.push(0, 1, 4, 1, 5, 4);
    if (drawRight.get()) vertInd.push(1, 2, 5, 5, 2, 6);
    if (drawTop.get()) vertInd.push(7, 6, 3, 6, 2, 3);
    if (drawLeft.get()) vertInd.push(0, 4, 3, 4, 7, 3);
    geom.verticesIndices = vertInd;

    if (geom.texCoords.length === 0)
    {
        const tc = [];
        for (let i = 0, j = 0; i < geom.vertices.length; i += 3, j += 2)
        {
            tc[j] = geom.vertices[i + 0] / w - 0.5;
            tc[j + 1] = geom.vertices[i + 1] / h - 0.5;
        }
        geom.texCoords = tc;
    }

    if (!mesh) mesh = new CGL.Mesh(cgl, geom);
    else mesh.setGeom(geom);

    geomOut.set(null);
    geomOut.set(geom);
}


};

Ops.Gl.Meshes.RectangleFrame_v2.prototype = new CABLES.Op();
CABLES.OPS["34e4535e-a784-4474-9b6f-a7e54e26f09e"]={f:Ops.Gl.Meshes.RectangleFrame_v2,objName:"Ops.Gl.Meshes.RectangleFrame_v2"};




// **************************************************************
// 
// Ops.Trigger.TriggerReceive
// 
// **************************************************************

Ops.Trigger.TriggerReceive = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const next = op.outTrigger("Triggered");
op.varName = op.inValueSelect("Named Trigger", [], "", true);

updateVarNamesDropdown();
op.patch.addEventListener("namedTriggersChanged", updateVarNamesDropdown);

let oldName = null;

function doTrigger()
{
    next.trigger();
}

function updateVarNamesDropdown()
{
    if (CABLES.UI)
    {
        let varnames = [];
        let vars = op.patch.namedTriggers;

        for (let i in vars) varnames.push(i);
        varnames = varnames.sort();
        op.varName.uiAttribs.values = varnames;
    }
}

op.varName.onChange = function ()
{
    if (oldName)
    {
        let oldCbs = op.patch.namedTriggers[oldName];
        let a = oldCbs.indexOf(doTrigger);
        if (a != -1) oldCbs.splice(a, 1);
    }

    op.setTitle(">" + op.varName.get());
    op.patch.namedTriggers[op.varName.get()] = op.patch.namedTriggers[op.varName.get()] || [];
    let cbs = op.patch.namedTriggers[op.varName.get()];

    cbs.push(doTrigger);
    oldName = op.varName.get();
    updateError();
    op.patch.emitEvent("opTriggerNameChanged", op, op.varName.get());
};

op.on("uiParamPanel", updateError);

function updateError()
{
    if (!op.varName.get())
    {
        op.setUiError("unknowntrigger", "unknown trigger");
    }
    else op.setUiError("unknowntrigger", null);
}


};

Ops.Trigger.TriggerReceive.prototype = new CABLES.Op();
CABLES.OPS["0816c999-f2db-466b-9777-2814573574c5"]={f:Ops.Trigger.TriggerReceive,objName:"Ops.Trigger.TriggerReceive"};




// **************************************************************
// 
// Ops.Gl.Matrix.Transform
// 
// **************************************************************

Ops.Gl.Matrix.Transform = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    posX = op.inValue("posX", 0),
    posY = op.inValue("posY", 0),
    posZ = op.inValue("posZ", 0),
    scale = op.inValue("scale", 1),
    rotX = op.inValue("rotX", 0),
    rotY = op.inValue("rotY", 0),
    rotZ = op.inValue("rotZ", 0),
    trigger = op.outTrigger("trigger");

op.setPortGroup("Rotation", [rotX, rotY, rotZ]);
op.setPortGroup("Position", [posX, posY, posZ]);
op.setPortGroup("Scale", [scale]);
op.setUiAxisPorts(posX, posY, posZ);

op.toWorkPortsNeedToBeLinked(render, trigger);

const vPos = vec3.create();
const vScale = vec3.create();
const transMatrix = mat4.create();
mat4.identity(transMatrix);

let
    doScale = false,
    doTranslate = false,
    translationChanged = true,
    scaleChanged = true,
    rotChanged = true;

rotX.onChange = rotY.onChange = rotZ.onChange = setRotChanged;
posX.onChange = posY.onChange = posZ.onChange = setTranslateChanged;
scale.onChange = setScaleChanged;

render.onTriggered = function ()
{
    // if(!CGL.TextureEffect.checkOpNotInTextureEffect(op)) return;

    let updateMatrix = false;
    if (translationChanged)
    {
        updateTranslation();
        updateMatrix = true;
    }
    if (scaleChanged)
    {
        updateScale();
        updateMatrix = true;
    }
    if (rotChanged) updateMatrix = true;

    if (updateMatrix) doUpdateMatrix();

    const cg = op.patch.cg || op.patch.cgl;
    cg.pushModelMatrix();
    mat4.multiply(cg.mMatrix, cg.mMatrix, transMatrix);

    trigger.trigger();
    cg.popModelMatrix();

    if (CABLES.UI)
    {
        if (!posX.isLinked() && !posY.isLinked() && !posZ.isLinked())
        {
            gui.setTransform(op.id, posX.get(), posY.get(), posZ.get());

            if (op.isCurrentUiOp())
                gui.setTransformGizmo(
                    {
                        "posX": posX,
                        "posY": posY,
                        "posZ": posZ,
                    });
        }
    }
};

// op.transform3d = function ()
// {
//     return { "pos": [posX, posY, posZ] };
// };

function doUpdateMatrix()
{
    mat4.identity(transMatrix);
    if (doTranslate)mat4.translate(transMatrix, transMatrix, vPos);

    if (rotX.get() !== 0)mat4.rotateX(transMatrix, transMatrix, rotX.get() * CGL.DEG2RAD);
    if (rotY.get() !== 0)mat4.rotateY(transMatrix, transMatrix, rotY.get() * CGL.DEG2RAD);
    if (rotZ.get() !== 0)mat4.rotateZ(transMatrix, transMatrix, rotZ.get() * CGL.DEG2RAD);

    if (doScale)mat4.scale(transMatrix, transMatrix, vScale);
    rotChanged = false;
}

function updateTranslation()
{
    doTranslate = false;
    if (posX.get() !== 0.0 || posY.get() !== 0.0 || posZ.get() !== 0.0) doTranslate = true;
    vec3.set(vPos, posX.get(), posY.get(), posZ.get());
    translationChanged = false;
}

function updateScale()
{
    // doScale=false;
    // if(scale.get()!==0.0)
    doScale = true;
    vec3.set(vScale, scale.get(), scale.get(), scale.get());
    scaleChanged = false;
}

function setTranslateChanged()
{
    translationChanged = true;
}

function setScaleChanged()
{
    scaleChanged = true;
}

function setRotChanged()
{
    rotChanged = true;
}

doUpdateMatrix();


};

Ops.Gl.Matrix.Transform.prototype = new CABLES.Op();
CABLES.OPS["650baeb1-db2d-4781-9af6-ab4e9d4277be"]={f:Ops.Gl.Matrix.Transform,objName:"Ops.Gl.Matrix.Transform"};




// **************************************************************
// 
// Ops.Gl.Meshes.Rectangle_v4
// 
// **************************************************************

Ops.Gl.Meshes.Rectangle_v4 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    doRender = op.inValueBool("Render Mesh", true),
    width = op.inValue("width", 1),
    height = op.inValue("height", 1),
    pivotX = op.inSwitch("pivot x", ["left", "center", "right"], "center"),
    pivotY = op.inSwitch("pivot y", ["top", "center", "bottom"], "center"),
    axis = op.inSwitch("axis", ["xy", "xz"], "xy"),
    flipTcX = op.inBool("Flip TexCoord X", false),
    flipTcY = op.inBool("Flip TexCoord Y", true),
    nColumns = op.inValueInt("num columns", 1),
    nRows = op.inValueInt("num rows", 1),
    trigger = op.outTrigger("trigger"),
    geomOut = op.outObject("geometry", null, "geometry");

geomOut.ignoreValueSerialize = true;

// const cgl = op.patch.cg || op.patch.cgl;
const geom = new CGL.Geometry("rectangle");

doRender.setUiAttribs({ "title": "Render" });
render.setUiAttribs({ "title": "Trigger" });
trigger.setUiAttribs({ "title": "Next" });
op.setPortGroup("Pivot", [pivotX, pivotY, axis]);
op.setPortGroup("Size", [width, height]);
op.setPortGroup("Structure", [nColumns, nRows]);
op.toWorkPortsNeedToBeLinked(render);
op.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose", CABLES.OP_PORT_TYPE_TRIGGER);

const AXIS_XY = 0;
const AXIS_XZ = 1;

let curAxis = AXIS_XY;
let mesh = null;
let needsRebuild = true;
let doScale = true;

const vScale = vec3.create();
vec3.set(vScale, 1, 1, 1);

axis.onChange =
    pivotX.onChange =
    pivotY.onChange =
    flipTcX.onChange =
    flipTcY.onChange =
    nRows.onChange =
    nColumns.onChange = rebuildLater;
updateScale();

width.onChange =
    height.onChange =
    () =>
    {
        if (doScale) updateScale();
        else needsRebuild = true;
    };

function updateScale()
{
    if (curAxis === AXIS_XY) vec3.set(vScale, width.get(), height.get(), 1);
    if (curAxis === AXIS_XZ) vec3.set(vScale, width.get(), 1, height.get());
}

geomOut.onLinkChanged = () =>
{
    doScale = !geomOut.isLinked();
    updateScale();
    needsRebuild = true;
};

function rebuildLater()
{
    needsRebuild = true;
}

render.onTriggered = () =>
{
    if (needsRebuild) rebuild();
    const cg = op.patch.cg;
    if (cg && mesh && doRender.get())
    {
        if (doScale)
        {
            cg.pushModelMatrix();
            mat4.scale(cg.mMatrix, cg.mMatrix, vScale);
        }

        mesh.render(cg.getShader());

        if (doScale) cg.popModelMatrix();
    }

    trigger.trigger();
};

op.onDelete = () =>
{
    if (mesh) mesh.dispose();
    rebuildLater();
};

function rebuild()
{
    if (axis.get() == "xy") curAxis = AXIS_XY;
    if (axis.get() == "xz") curAxis = AXIS_XZ;

    updateScale();
    let w = width.get();
    let h = height.get();

    if (doScale) w = h = 1;

    let x = 0;
    let y = 0;

    if (pivotX.get() == "center") x = 0;
    else if (pivotX.get() == "right") x = -w / 2;
    else if (pivotX.get() == "left") x = +w / 2;

    if (pivotY.get() == "center") y = 0;
    else if (pivotY.get() == "top") y = -h / 2;
    else if (pivotY.get() == "bottom") y = +h / 2;

    const numRows = Math.max(1, Math.round(nRows.get()));
    const numColumns = Math.max(1, Math.round(nColumns.get()));

    const stepColumn = w / numColumns;
    const stepRow = h / numRows;

    const indices = [];
    const tc = new Float32Array((numColumns + 1) * (numRows + 1) * 2);
    const verts = new Float32Array((numColumns + 1) * (numRows + 1) * 3);
    const norms = new Float32Array((numColumns + 1) * (numRows + 1) * 3);
    const tangents = new Float32Array((numColumns + 1) * (numRows + 1) * 3);
    const biTangents = new Float32Array((numColumns + 1) * (numRows + 1) * 3);

    let idxTc = 0;
    let idxVert = 0;
    let idxNorms = 0;
    let idxTangent = 0;
    let idxBiTangent = 0;

    for (let r = 0; r <= numRows; r++)
    {
        for (let c = 0; c <= numColumns; c++)
        {
            verts[idxVert++] = c * stepColumn - w / 2 + x;
            if (curAxis == AXIS_XZ) verts[idxVert++] = 0;
            verts[idxVert++] = r * stepRow - h / 2 + y;

            if (curAxis == AXIS_XY)verts[idxVert++] = 0;

            tc[idxTc++] = c / numColumns;
            tc[idxTc++] = r / numRows;

            if (curAxis == AXIS_XY) // default
            {
                norms[idxNorms++] = 0;
                norms[idxNorms++] = 0;
                norms[idxNorms++] = 1;

                tangents[idxTangent++] = 1;
                tangents[idxTangent++] = 0;
                tangents[idxTangent++] = 0;

                biTangents[idxBiTangent++] = 0;
                biTangents[idxBiTangent++] = 1;
                biTangents[idxBiTangent++] = 0;
            }
            else if (curAxis == AXIS_XZ)
            {
                norms[idxNorms++] = 0;
                norms[idxNorms++] = 1;
                norms[idxNorms++] = 0;

                biTangents[idxBiTangent++] = 0;
                biTangents[idxBiTangent++] = 0;
                biTangents[idxBiTangent++] = 1;
            }
        }
    }

    indices.length = numColumns * numRows * 6;
    let idx = 0;

    for (let c = 0; c < numColumns; c++)
    {
        for (let r = 0; r < numRows; r++)
        {
            const ind = c + (numColumns + 1) * r;
            const v1 = ind;
            const v2 = ind + 1;
            const v3 = ind + numColumns + 1;
            const v4 = ind + 1 + numColumns + 1;

            if (curAxis == AXIS_XY) // default
            {
                indices[idx++] = v1;
                indices[idx++] = v2;
                indices[idx++] = v3;

                indices[idx++] = v3;
                indices[idx++] = v2;
                indices[idx++] = v4;
            }
            else
            if (curAxis == AXIS_XZ)
            {
                indices[idx++] = v1;
                indices[idx++] = v3;
                indices[idx++] = v2;

                indices[idx++] = v2;
                indices[idx++] = v3;
                indices[idx++] = v4;
            }
        }
    }

    if (flipTcY.get()) for (let i = 0; i < tc.length; i += 2)tc[i + 1] = 1.0 - tc[i + 1];
    if (flipTcX.get()) for (let i = 0; i < tc.length; i += 2)tc[i] = 1.0 - tc[i];

    geom.clear();
    geom.vertices = verts;
    geom.texCoords = tc;
    geom.verticesIndices = indices;
    geom.vertexNormals = norms;
    geom.tangents = tangents;
    geom.biTangents = biTangents;

    if (op.patch.cg)
        if (!mesh) mesh = op.patch.cg.createMesh(geom, { "opId": op.id });
        else mesh.setGeom(geom);

    geomOut.setRef(geom);
    needsRebuild = false;
}


};

Ops.Gl.Meshes.Rectangle_v4.prototype = new CABLES.Op();
CABLES.OPS["cc8c3ede-7103-410b-849f-a645793cab39"]={f:Ops.Gl.Meshes.Rectangle_v4,objName:"Ops.Gl.Meshes.Rectangle_v4"};




// **************************************************************
// 
// Ops.Ui.Area
// 
// **************************************************************

Ops.Ui.Area = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const inTitle = op.inString("Title", "");

inTitle.setUiAttribs({ "hidePort": true });

op.setUiAttrib({ "hasArea": true });

op.init =
    inTitle.onChange =
    op.onLoaded = update;

update();

function update()
{
    if (CABLES.UI)
    {
        gui.savedState.setUnSaved("areaOp", op.getSubPatch());
        op.uiAttr(
            {
                "comment_title": inTitle.get() || " "
            });

        op.name = inTitle.get();
    }
}


};

Ops.Ui.Area.prototype = new CABLES.Op();
CABLES.OPS["38f79614-b0de-4960-8da5-2827e7f43415"]={f:Ops.Ui.Area,objName:"Ops.Ui.Area"};




// **************************************************************
// 
// Ops.Anim.BoolAnim
// 
// **************************************************************

Ops.Anim.BoolAnim = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const anim = new CABLES.Anim();

const
    exe = op.inTrigger("exe"),
    bool = op.inValueBool("bool"),
    pease = anim.createPort(op, "easing"),
    duration = op.inValue("duration", 0.25),
    dir = op.inValueSelect("Direction", ["Both", "Only True", "Only False"], "Both"),
    valueFalse = op.inValue("value false", 0),
    valueTrue = op.inValue("value true", 1),
    next = op.outTrigger("trigger"),
    value = op.outNumber("value"),
    finished = op.outBoolNum("finished"),
    finishedTrigger = op.outTrigger("Finished Trigger");

const startTime = CABLES.now();
op.toWorkPortsNeedToBeLinked(exe);
op.setPortGroup("Animation", [duration, pease]);
op.setPortGroup("Values", [valueFalse, valueTrue]);

dir.onChange = bool.onChange = valueFalse.onChange = valueTrue.onChange = duration.onChange = setAnim;
setAnim();

function setAnim()
{
    if (dir.get() == "Animate Both")dir.set("Both");
    finished.set(false);
    const now = (CABLES.now() - startTime) / 1000;
    const oldValue = anim.getValue(now);
    anim.clear();

    anim.setValue(now, oldValue);

    if (!bool.get())
    {
        if (dir.get() != "Only True") anim.setValue(now + duration.get(), valueFalse.get());
        else anim.setValue(now, valueFalse.get());
    }
    else
    {
        if (dir.get() != "Only False") anim.setValue(now + duration.get(), valueTrue.get());
        else anim.setValue(now, valueTrue.get());
    }
}

exe.onTriggered = function ()
{
    const t = (CABLES.now() - startTime) / 1000;
    value.set(anim.getValue(t));

    if (anim.hasEnded(t))
    {
        if (!finished.get()) finishedTrigger.trigger();
        finished.set(true);
    }

    next.trigger();
};


};

Ops.Anim.BoolAnim.prototype = new CABLES.Op();
CABLES.OPS["06ad9d35-ccf5-4d31-889c-e23fa062588a"]={f:Ops.Anim.BoolAnim,objName:"Ops.Anim.BoolAnim"};




// **************************************************************
// 
// Ops.Gl.TextMeshMSDF_v2
// 
// **************************************************************

Ops.Gl.TextMeshMSDF_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"textmeshsdf_frag":"\nUNI sampler2D tex0;\nUNI sampler2D tex1;\nUNI sampler2D tex2;\nUNI sampler2D tex3;\n\nIN vec2 texCoord;\nIN vec4 fragAttrColors;\n\nUNI vec4 color;\nUNI vec2 texSize;\n\n#ifdef BORDER\n    UNI float borderWidth;\n    UNI float borderSmooth;\n    UNI vec3 colorBorder;\n#endif\n\n#ifdef TEXTURE_COLOR\nUNI sampler2D texMulColor;\n#endif\n#ifdef TEXTURE_MASK\nUNI sampler2D texMulMask;\n#endif\n\nUNI float smoothing;\nIN float texIndex;\n\n#ifdef SHADOW\n    UNI float shadowWidth;\n#endif\n\n\nfloat median(float r, float g, float b)\n{\n    return max(min(r, g), min(max(r, g), b));\n}\n\nvoid main()\n{\n    vec4 bgColor=vec4(0.0,0.0,0.0,0.0);\n    vec4 fgColor=color;\n    float opacity=1.0;\n\n    #ifndef SDF\n        if(int(texIndex)==0) outColor = texture(tex0, texCoord);\n        if(int(texIndex)==1) outColor = texture(tex1, texCoord);\n        if(int(texIndex)==2) outColor = texture(tex2, texCoord);\n        if(int(texIndex)==3) outColor = texture(tex3, texCoord);\n\n        return;\n    #endif\n\n\n    #ifdef TEXTURE_COLOR\n        fgColor.rgb *= texture(texMulColor, vec2(0.0,0.0)).rgb; //todo texcoords from char positioning\n    #endif\n    #ifdef TEXTURE_MASK\n        opacity *= texture(texMulMask, vec2(0.0,0.0)).r; //todo texcoords from char positioning\n    #endif\n\n\n    #ifdef SHADOW\n        vec2 msdfUnit1 = texSize;\n        vec2 tcv=vec2(texCoord.x-0.002,texCoord.y-0.002);\n        vec3 smpl1;\n        if(int(texIndex)==0) smpl1 = texture(tex0, tcv).rgb;\n        if(int(texIndex)==1) smpl1 = texture(tex1, tcv).rgb;\n        if(int(texIndex)==2) smpl1 = texture(tex2, tcv).rgb;\n        if(int(texIndex)==3) smpl1 = texture(tex3, tcv).rgb;\n\n        float sigDist1 = median(smpl1.r, smpl1.g, smpl1.b) - 0.001;\n        float opacity1 = smoothstep(0.0,0.9,sigDist1*sigDist1);\n        outColor = mix(bgColor, vec4(0.0,0.0,0.0,1.0), opacity1);\n    #endif\n\n    vec2 msdfUnit = 8.0/texSize;\n    vec3 smpl;\n\n    if(int(texIndex)==0) smpl = texture(tex0, texCoord).rgb;\n    if(int(texIndex)==1) smpl = texture(tex1, texCoord).rgb;\n    if(int(texIndex)==2) smpl = texture(tex2, texCoord).rgb;\n    if(int(texIndex)==3) smpl = texture(tex3, texCoord).rgb;\n\n\n    float sigDist = median(smpl.r, smpl.g, smpl.b) - 0.5;\n    sigDist *= dot(msdfUnit, (0.5+(smoothing-0.5))/fwidth(texCoord));\n    opacity *= clamp(sigDist + 0.5, 0.0, 1.0);\n\n    #ifdef BORDER\n        float sigDist2 = median(smpl.r, smpl.g, smpl.b) - 0.01;\n        float bw=borderWidth*0.6+0.24;\n        float opacity2 = smoothstep(bw-borderSmooth,bw+borderSmooth,sigDist2*sigDist2);\n        fgColor=mix(fgColor,vec4(colorBorder,1.0),1.0-opacity2);\n    #endif\n\n    float opa=opacity*color.a;\n\n    if(opa==0.0)discard;\n\n    outColor = mix(outColor, fgColor, opa);\n\n#ifdef HAS_ATTR_COLORS\n    outColor*=fragAttrColors;\n#endif\n}\n\n","textmeshsdf_vert":"UNI sampler2D tex1;\nUNI sampler2D tex2;\nUNI sampler2D tex3;\nUNI sampler2D tex4;\n\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\n\nIN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN mat4 instMat;\nIN vec2 attrTexOffsets;\nIN vec2 attrSize;\nIN vec2 attrTcSize;\nIN float attrPage;\nIN vec4 attrColors;\n\nOUT vec2 texCoord;\nOUT float texIndex;\nOUT vec4 fragAttrColors;\n\n\n\n\nconst float mulSize=0.01;\n\nvoid main()\n{\n    texCoord=(attrTexOffsets+attrTexCoord*attrTcSize);\n    texCoord.y=1.0-texCoord.y;\n\n    mat4 instMVMat=instMat;\n    vec4 vert=vec4( vPosition, 1. );\n    vert.x*=attrSize.x*mulSize;\n    vert.y*=attrSize.y*mulSize;\n\n    fragAttrColors=attrColors;\n\n    texIndex=attrPage+0.4; // strange ios rounding errors?!\n\n    mat4 mvMatrix=viewMatrix * modelMatrix * instMVMat;\n\n    gl_Position = projMatrix * mvMatrix * vert;\n}\n",};
// https://soimy.github.io/msdf-bmfont-xml/

// antialiasing:
// https://github.com/Chlumsky/msdfgen/issues/22

const
    render = op.inTrigger("Render"),
    str = op.inString("Text", "cables"),
    inFont = op.inDropDown("Font", [], "", true),
    scale = op.inFloat("Scale", 0.25),

    letterSpace = op.inFloat("Letter Spacing", 0),
    lineHeight = op.inFloat("Line Height", 1),

    align = op.inSwitch("Align", ["Left", "Center", "Right"], "Center"),
    valign = op.inSwitch("Vertical Align", ["Zero", "Top", "Middle", "Bottom"], "Middle"),

    r = op.inValueSlider("r", 1),
    g = op.inValueSlider("g", 1),
    b = op.inValueSlider("b", 1),
    a = op.inValueSlider("a", 1),
    doSDF = op.inBool("SDF", true),

    smoothing = op.inValueSlider("Smoothing", 0.3),

    inBorder = op.inBool("Border", false),
    inBorderWidth = op.inFloatSlider("Border Width", 0.5),
    inBorderSmooth = op.inFloatSlider("Smoothness", 0.25),
    br = op.inValueSlider("Border r", 1),
    bg = op.inValueSlider("Border g", 1),
    bb = op.inValueSlider("Border b", 1),

    inShadow = op.inBool("Shadow", false),

    inTexColor = op.inTexture("Texture Color"),
    inTexMask = op.inTexture("Texture Mask"),

    inPosArr = op.inArray("Positions"),
    inScaleArr = op.inArray("Scalings"),
    inRotArr = op.inArray("Rotations"),
    inColors = op.inArray("Colors"),

    next = op.outTrigger("Next"),
    outArr = op.outArray("Positions Original", null, 3),

    outScales = op.outArray("Scales", null, 2),
    outLines = op.outNumber("Num Lines"),

    outWidth = op.outNumber("Width"),
    outHeight = op.outNumber("Height"),
    outStartY = op.outNumber("Start Y"),
    outNumChars = op.outNumber("Num Chars");

op.setPortGroup("Size", [letterSpace, lineHeight, scale]);
op.setPortGroup("Character Transformations", [inScaleArr, inRotArr, inPosArr]);
op.setPortGroup("Alignment", [align, valign]);
op.setPortGroup("Color", [r, g, b, a, doSDF]);
op.setPortGroup("Border", [br, bg, bb, inBorderSmooth, inBorderWidth, inBorder]);

r.setUiAttribs({ "colorPick": true });
br.setUiAttribs({ "colorPick": true });

const cgl = op.patch.cgl;
const fontDataVarPrefix = "font_data_";
const substrLength = fontDataVarPrefix.length;
const alignVec = vec3.create();
const vScale = vec3.create();
const shader = new CGL.Shader(cgl, "TextMeshSDF");
shader.define("INSTANCING");

let fontTexs = null;
let fontData = null;
let fontChars = null;
let needUpdate = true;
let geom = null;
let mesh = null;
let disabled = false;
let valignMode = 1;
let heightAll = 0, widthAll = 0;
let avgHeight = 0;
let minY, maxY, minX, maxX;
let needsUpdateTransmats = true;
let transMats = null;
let offY = 0;

if (cgl.glVersion == 1)
{
    cgl.gl.getExtension("OES_standard_derivatives");
    shader.enableExtension("GL_OES_standard_derivatives");
}

shader.setSource(attachments.textmeshsdf_vert, attachments.textmeshsdf_frag);

const
    uniTex = new CGL.Uniform(shader, "t", "tex0", 0),
    uniTex1 = new CGL.Uniform(shader, "t", "tex1", 1),
    uniTex2 = new CGL.Uniform(shader, "t", "tex2", 2),
    uniTex3 = new CGL.Uniform(shader, "t", "tex3", 3),
    uniTexMul = new CGL.Uniform(shader, "t", "texMulColor", 4),
    uniTexMulMask = new CGL.Uniform(shader, "t", "texMulMask", 5),
    uniColor = new CGL.Uniform(shader, "4f", "color", r, g, b, a),
    uniColorBorder = new CGL.Uniform(shader, "3f", "colorBorder", br, bg, bb),

    uniTexSize = new CGL.Uniform(shader, "2f", "texSize", 0, 0),

    uniSmoothing = new CGL.Uniform(shader, "f", "smoothing", smoothing),
    uniborderSmooth = new CGL.Uniform(shader, "f", "borderSmooth", inBorderSmooth),
    uniborderWidth = new CGL.Uniform(shader, "f", "borderWidth", inBorderWidth);

scale.onChange = updateScale;

inRotArr.onChange =
    inPosArr.onChange =
    inScaleArr.onChange = function () { needsUpdateTransmats = true; };

inTexColor.onChange =
inTexMask.onChange =
inShadow.onChange =
inBorder.onChange =
doSDF.onChange =
    updateDefines;

inColors.onLinkChanged = () =>
{
    updateDefines();
    needsUpdateTransmats = true;
    needUpdate = true;
};

inColors.onChange = () =>
{
    needUpdate = true;
    if (mesh && inColors.get() && inColors.isLinked())
        mesh.setAttribute("attrColors", new Float32Array(inColors.get()), 4, { "instanced": true });
};

align.onChange =
    str.onChange =
    letterSpace.onChange =
    lineHeight.onChange =
    function ()
    {
        needUpdate = true;
    };

valign.onChange = updateAlign;

op.patch.addEventListener("variablesChanged", updateFontList);
op.patch.addEventListener("FontLoadedMSDF", updateFontList);

inFont.onChange = updateFontData;

updateDefines();
updateScale();
updateFontList();

function updateDefines()
{
    shader.toggleDefine("SDF", doSDF.get());
    shader.toggleDefine("SHADOW", inShadow.get());
    shader.toggleDefine("BORDER", inBorder.get());
    shader.toggleDefine("TEXTURE_COLOR", inTexColor.isLinked());
    shader.toggleDefine("TEXTURE_MASK", inTexMask.isLinked());
    shader.toggleDefine("HAS_ATTR_COLORS", inColors.isLinked());

    br.setUiAttribs({ "greyout": !inBorder.get() });
    bg.setUiAttribs({ "greyout": !inBorder.get() });
    bb.setUiAttribs({ "greyout": !inBorder.get() });
    inBorderSmooth.setUiAttribs({ "greyout": !inBorder.get() });
    inBorderWidth.setUiAttribs({ "greyout": !inBorder.get() });
}

function updateFontData()
{
    updateFontList();
    const varname = fontDataVarPrefix + inFont.get();

    fontData = null;
    fontTexs = null;
    fontChars = {};

    const dataVar = op.patch.getVar(varname);

    if (!dataVar || !dataVar.getValue())
    {
        fontData = null;

        // op.warn("no varname", varname);
        return;
    }

    fontData = dataVar.getValue().data;

    if (!fontData)
    {
        return;
    }

    const basename = dataVar.getValue().basename;

    const textVar = op.patch.getVar("font_tex_" + basename);
    if (!textVar)
    {
        fontTexs = null;
        fontData = null;
        return;
    }

    fontTexs = textVar.getValue();

    for (let i = 0; i < fontData.chars.length; i++) fontChars[fontData.chars[i].char] = fontData.chars[i];
    needUpdate = true;
}

function updateFontList()
{
    const vars = op.patch.getVars();
    const names = ["..."];

    for (const i in vars)
        if (vars[i].type == "fontData")
            names.push(i.substr(substrLength));

    inFont.uiAttribs.values = names;
}

function updateScale()
{
    const s = scale.get();
    vec3.set(vScale, s, s, s);
    vec3.set(alignVec, 0, offY * s, 0);

    outWidth.set(widthAll * s);
    outHeight.set(heightAll * s);

    outStartY.set((maxY + offY) * s);
}

function updateAlign()
{
    if (minX == undefined) return;
    if (valign.get() == "Top") valignMode = 0;
    else if (valign.get() == "Middle") valignMode = 1;
    else if (valign.get() == "Bottom") valignMode = 2;
    else if (valign.get() == "Zero") valignMode = 3;

    offY = 0;
    widthAll = (Math.abs(minX - maxX));
    heightAll = (Math.abs(minY - maxY));

    if (valignMode === 1) offY = heightAll / 2;
    else if (valignMode === 2) offY = heightAll;

    if (valignMode != 0)offY -= avgHeight;

    updateScale();
}

function buildTransMats()
{
    needsUpdateTransmats = false;

    // if(!( inPosArr.get() || inScaleArr.get() || inRotArr.get()))
    // {
    //     transMats=null;
    //     return;
    // }

    const transformations = [];
    const translates = inPosArr.get() || outArr.get();
    const scales = inScaleArr.get();
    const rots = inRotArr.get();

    for (let i = 0; i < mesh.numInstances; i++)
    {
        const m = mat4.create();
        mat4.translate(m, m, [translates[i * 3 + 0], translates[i * 3 + 1], translates[i * 3 + 2]]);

        if (scales) mat4.scale(m, m, [scales[i * 3 + 0], scales[i * 3 + 1], scales[i * 3 + 2]]);

        if (rots)
        {
            mat4.rotateX(m, m, rots[i * 3 + 0] * CGL.DEG2RAD);
            mat4.rotateY(m, m, rots[i * 3 + 1] * CGL.DEG2RAD);
            mat4.rotateZ(m, m, rots[i * 3 + 2] * CGL.DEG2RAD);
        }

        transformations.push(Array.prototype.slice.call(m));
    }

    transMats = [].concat.apply([], transformations);
}

render.onTriggered = function ()
{
    if (!fontData || !fontTexs)
    {
        updateFontData();
    }

    if (!fontData)
    {
        op.setUiError("nodata", "No font data!");
        op.setUiError("msdfhint", "Use the FontMSDF op to create font and texture.", 0);
    }
    if (!fontTexs)
    {
        op.setUiError("nodata", "No font texture");
        op.setUiError("msdfhint", "Use the FontMSDF op to create font and texture.", 0);
    }
    if (fontTexs && fontData)
    {
        op.setUiError("nodata", null);
        op.setUiError("msdfhint", null);
    }

    if (needUpdate)
    {
        generateMesh();
        needUpdate = false;
    }

    if (mesh && mesh.numInstances > 0 && fontTexs)
    {
        cgl.pushShader(shader);

        cgl.setTexture(0, CGL.Texture.getEmptyTexture(cgl).tex);

        if (fontTexs[0]) uniTexSize.setValue([fontTexs[0].width, fontTexs[0].height]);

        if (fontTexs[0]) cgl.setTexture(0, fontTexs[0].tex);
        else cgl.setTexture(0, CGL.Texture.getEmptyTexture(cgl).tex);

        if (fontTexs[1])cgl.setTexture(1, fontTexs[1].tex);
        else cgl.setTexture(1, CGL.Texture.getEmptyTexture(cgl).tex);

        if (fontTexs[2])cgl.setTexture(2, fontTexs[2].tex);
        else cgl.setTexture(2, CGL.Texture.getEmptyTexture(cgl).tex);

        if (fontTexs[3])cgl.setTexture(3, fontTexs[3].tex);
        else cgl.setTexture(3, CGL.Texture.getEmptyTexture(cgl).tex);

        if (inTexColor.get()) cgl.setTexture(4, inTexColor.get().tex);
        if (inTexMask.get()) cgl.setTexture(5, inTexMask.get().tex);

        cgl.pushModelMatrix();
        mat4.translate(cgl.mMatrix, cgl.mMatrix, alignVec);

        if (needsUpdateTransmats) buildTransMats();
        if (transMats) mesh.setAttribute("instMat", new Float32Array(transMats), 16, { "instanced": true });

        if (!disabled)
        {
            mat4.scale(cgl.mMatrix, cgl.mMatrix, vScale);

            mesh.render(cgl.getShader());
        }

        cgl.popModelMatrix();

        // cgl.setTexture(0, null);
        cgl.popShader();
        // cgl.popBlendMode();
    }

    next.trigger();
};

function getChar(chStr)
{
    return fontChars[String(chStr)] || fontChars["?"] || fontChars._ || fontChars.X;
}

function generateMesh()
{
    if (!fontData || !fontChars)
    {
        outNumChars.set(0);
        return;
    }

    const theString = String(str.get() + "");

    if (!geom)
    {
        geom = new CGL.Geometry("textmesh");

        geom.vertices = [
            0.5, 0.5, 0.0,
            -0.5, 0.5, 0.0,
            0.5, -0.5, 0.0,
            -0.5, -0.5, 0.0
        ];

        geom.normals = [
            0.0, 0.0, 0.0,
            0.0, 0.0, 0.0,
            0.0, 0.0, 0.0,
            0.0, 0.0, 0.0
        ];

        geom.texCoords = new Float32Array([
            1.0, 0.0,
            0.0, 0.0,
            1.0, 1.0,
            0.0, 1.0
        ]);

        geom.verticesIndices = [
            0, 1, 2,
            2, 1, 3
        ];
    }

    if (mesh)mesh.dispose();
    mesh = new CGL.Mesh(cgl, geom);

    const strings = (theString).split("\n");
    const transformations = [];
    const tcOffsets = [];
    const sizes = [];
    const texPos = [];
    const tcSizes = [];
    const pages = [];
    let charCounter = 0;
    const arrPositions = [];

    const mulSize = 0.01;

    outLines.set(strings.length);
    minY = 99999;
    maxY = -99999;
    minX = 99999;
    maxX = -99999;

    avgHeight = 0;

    for (let i = 0; i < fontData.chars.length; i++)
    {
        if (fontData.chars[i].height) avgHeight += fontData.chars[i].height;
    }
    avgHeight /= fontData.chars.length;
    avgHeight *= mulSize;

    for (let s = 0; s < strings.length; s++)
    {
        const txt = strings[s];
        const numChars = txt.length;
        let lineWidth = 0;

        for (let i = 0; i < numChars; i++)
        {
            const chStr = txt.substring(i, i + 1);
            const char = getChar(chStr);
            if (char) lineWidth += char.xadvance * mulSize + letterSpace.get();
        }

        let pos = 0;
        if (align.get() == "Right") pos -= lineWidth;
        else if (align.get() == "Center") pos -= lineWidth / 2;

        for (let i = 0; i < numChars; i++)
        {
            const m = mat4.create();

            const chStr = txt.substring(i, i + 1);
            const char = getChar(chStr);

            if (!char) continue;

            pages.push(char.page || 0);
            sizes.push(char.width, char.height);

            tcOffsets.push(char.x / fontData.common.scaleW, (char.y / fontData.common.scaleH));

            const charWidth = char.width / fontData.common.scaleW;
            const charHeight = char.height / fontData.common.scaleH;
            const charOffsetY = (char.yoffset / fontData.common.scaleH);
            const charOffsetX = char.xoffset / fontData.common.scaleW;

            if (chStr == " ") tcSizes.push(0, 0);
            else tcSizes.push(charWidth, charHeight);

            mat4.identity(m);

            let adv = (char.xadvance / 2) * mulSize;
            pos += adv;

            const x = pos + (char.xoffset / 2) * mulSize;
            const y = (s * -lineHeight.get()) + (avgHeight) - (mulSize * (char.yoffset + char.height / 2));

            minX = Math.min(x - charWidth, minX);
            maxX = Math.max(x + charWidth, maxX);
            minY = Math.min(y - charHeight - avgHeight / 2, minY);
            maxY = Math.max(y + charHeight + avgHeight / 2, maxY);

            mat4.translate(m, m, [x, y, 0]);
            arrPositions.push(x, y, 0);

            adv = (char.xadvance / 2) * mulSize + letterSpace.get();

            pos += adv;

            minX = Math.min(pos - charWidth, minX);
            maxX = Math.max(pos + charWidth, maxX);

            transformations.push(Array.prototype.slice.call(m));

            charCounter++;
        }
    }

    transMats = [].concat.apply([], transformations);

    disabled = false;
    if (transMats.length == 0) disabled = true;

    mesh.numInstances = transMats.length / 16;
    outNumChars.set(mesh.numInstances);

    if (mesh.numInstances == 0)
    {
        disabled = true;
        return;
    }

    mesh.setAttribute("instMat", new Float32Array(transMats), 16, { "instanced": true });
    mesh.setAttribute("attrTexOffsets", new Float32Array(tcOffsets), 2, { "instanced": true });
    mesh.setAttribute("attrTcSize", new Float32Array(tcSizes), 2, { "instanced": true });
    mesh.setAttribute("attrSize", new Float32Array(sizes), 2, { "instanced": true });
    mesh.setAttribute("attrPage", new Float32Array(pages), 1, { "instanced": true });

    if (inColors.isLinked())
        mesh.setAttribute("attrColors", new Float32Array(inColors.get()), 4, { "instanced": true });

    outScales.set(sizes);
    updateAlign();
    needsUpdateTransmats = true;
    outArr.setRef(arrPositions);
}


};

Ops.Gl.TextMeshMSDF_v2.prototype = new CABLES.Op();
CABLES.OPS["b5c99363-a749-4040-884b-66f91294bcad"]={f:Ops.Gl.TextMeshMSDF_v2,objName:"Ops.Gl.TextMeshMSDF_v2"};




// **************************************************************
// 
// Ops.Gl.Matrix.Translate
// 
// **************************************************************

Ops.Gl.Matrix.Translate = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    trigger = op.outTrigger("trigger"),
    x = op.inValue("x"),
    y = op.inValue("y"),
    z = op.inValue("z");

const vec = vec3.create();

render.onTriggered = function ()
{
    const cgl = op.patch.cg;

    vec3.set(vec, x.get(), y.get(), z.get());
    cgl.pushModelMatrix();
    mat4.translate(cgl.mMatrix, cgl.mMatrix, vec);
    trigger.trigger();
    cgl.popModelMatrix();
};


};

Ops.Gl.Matrix.Translate.prototype = new CABLES.Op();
CABLES.OPS["1f89ba0e-e7eb-46d7-8c66-7814b7c528b9"]={f:Ops.Gl.Matrix.Translate,objName:"Ops.Gl.Matrix.Translate"};




// **************************************************************
// 
// Ops.Trigger.GateTrigger
// 
// **************************************************************

Ops.Trigger.GateTrigger = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger('Execute'),
    passThrough = op.inValueBool('Pass Through',true),
    triggerOut = op.outTrigger('Trigger out');

exe.onTriggered = function()
{
    if(passThrough.get())
        triggerOut.trigger();
}


};

Ops.Trigger.GateTrigger.prototype = new CABLES.Op();
CABLES.OPS["65e8b8a2-ba13-485f-883a-2bcf377989da"]={f:Ops.Trigger.GateTrigger,objName:"Ops.Trigger.GateTrigger"};




// **************************************************************
// 
// Ops.Math.Interpolate
// 
// **************************************************************

Ops.Math.Interpolate = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    val1 = op.inFloat("Value 1"),
    val2 = op.inFloat("Value 2"),
    perc = op.inFloatSlider("Percentage"),
    result = op.outNumber("Result");

val1.onChange =
val2.onChange =
perc.onChange = update;

function update()
{
    result.set((val2.get() - val1.get()) * perc.get() + val1.get());
}


};

Ops.Math.Interpolate.prototype = new CABLES.Op();
CABLES.OPS["d126e2c8-221e-428f-8ff4-8b8c5f6b8905"]={f:Ops.Math.Interpolate,objName:"Ops.Math.Interpolate"};




// **************************************************************
// 
// Ops.Math.Abs
// 
// **************************************************************

Ops.Math.Abs = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    number = op.inValue("number"),
    result = op.outNumber("result");

number.onChange = function ()
{
    result.set(Math.abs(number.get()));
};


};

Ops.Math.Abs.prototype = new CABLES.Op();
CABLES.OPS["6b5af21d-065f-44d2-9442-8b7a254753f6"]={f:Ops.Math.Abs,objName:"Ops.Math.Abs"};




// **************************************************************
// 
// Ops.String.String_v2
// 
// **************************************************************

Ops.String.String_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    v = op.inString("value", ""),
    result = op.outString("String");

v.onChange = function ()
{
    if (!v.isLinked())
        op.setUiAttrib({ "extendTitle": v.get() });

    result.set(v.get());
};


};

Ops.String.String_v2.prototype = new CABLES.Op();
CABLES.OPS["d697ff82-74fd-4f31-8f54-295bc64e713d"]={f:Ops.String.String_v2,objName:"Ops.String.String_v2"};




// **************************************************************
// 
// Ops.Vars.VarSetNumber_v2
// 
// **************************************************************

Ops.Vars.VarSetNumber_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const val = op.inValueFloat("Value", 0);
op.varName = op.inDropDown("Variable", [], "", true);

new CABLES.VarSetOpWrapper(op, "number", val, op.varName);


};

Ops.Vars.VarSetNumber_v2.prototype = new CABLES.Op();
CABLES.OPS["b5249226-6095-4828-8a1c-080654e192fa"]={f:Ops.Vars.VarSetNumber_v2,objName:"Ops.Vars.VarSetNumber_v2"};




// **************************************************************
// 
// Ops.Ui.VizBool
// 
// **************************************************************

Ops.Ui.VizBool = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inNum = op.inBool("Boolean", 0),
    outBool = op.outBoolNum("Bool");

op.setUiAttrib({ "height": 100, "width": 100, "resizable": true });

inNum.onChange = () =>
{
    outBool.set(inNum.get());
};

op.renderVizLayer = (ctx, layer) =>
{
    if (layer.width <= 0 || layer.height <= 0) return;

    ctx.fillStyle = "#222";
    ctx.fillRect(layer.x, layer.y, layer.width, layer.height);

    let isTrue = !!inNum.get();

    let circle = new Path2D();
    let radius = Math.min(layer.height, layer.width) / 2.4 * 0.8;
    if (radius < 0)radius = 0;
    circle.arc(layer.x + layer.width / 2, layer.y + layer.height / 2, radius, 0, 2 * Math.PI, false);

    ctx.strokeStyle = "#555";
    ctx.lineWidth = 7 * layer.scale;
    ctx.stroke(circle);

    if (isTrue)
    {
        if (op.uiAttribs.color)ctx.fillStyle = op.uiAttribs.color;
        else ctx.fillStyle = "#ccc";

        let circle = new Path2D();
        circle.arc(layer.x + layer.width / 2, layer.y + layer.height / 2, radius - (ctx.lineWidth / 2), 0, 2 * Math.PI, false);
        ctx.fill(circle);
    }
};


};

Ops.Ui.VizBool.prototype = new CABLES.Op();
CABLES.OPS["cf194306-175b-416a-b90e-31ff2192a190"]={f:Ops.Ui.VizBool,objName:"Ops.Ui.VizBool"};




// **************************************************************
// 
// Ops.Patch.P4Zknbo.InteractiveRectangle_v25
// 
// **************************************************************

Ops.Patch.P4Zknbo.InteractiveRectangle_v25 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("Trigger in"),
    trigger = op.outTrigger("Trigger out"),
    width = op.inValue("Width", 1),
    height = op.inValue("Height", 1),
    inId = op.inString("ID"),
    classPort = op.inString("Class"),
    pivotX = op.inValueSelect("Pivot x", ["center", "left", "right"]),
    pivotY = op.inValueSelect("Pivot y", ["center", "top", "bottom"]),
    axis = op.inValueSelect("Axis", ["xy", "xz"]),
    isInteractive = op.inValueBool("Is Interactive", true),
    renderRect = op.inValueBool("Render Rectangle", true),
    divVisible = op.inValueBool("Show Boundings", true),
    cursorPort = op.inValueSelect("Cursor", ["auto", "crosshair", "pointer", "Hand", "move", "n-resize", "ne-resize", "e-resize", "se-resize", "s-resize", "sw-resize", "w-resize", "nw-resize", "text", "wait", "help", "none"], "pointer"),
    active = op.inValueBool("Render", true);

const geomOut = op.outObject("geometry");
geomOut.ignoreValueSerialize = true;

const
    mouseOver = op.outBoolNum("Pointer Hover", false),
    mouseDown = op.outBoolNum("Pointer Down", false),
    outX = op.outNumber("Pointer X"),
    outY = op.outNumber("Pointer Y"),
    outTop = op.outNumber("Top"),
    outLeft = op.outNumber("Left"),
    outRight = op.outNumber("Right"),
    outBottom = op.outNumber("Bottom"),
    mouseClick = op.outTrigger("Left Click");

const elementPort = op.outObject("Dom Element");

active.setUiAttribs({ "title": "Active" });

const cgl = op.patch.cgl;
axis.set("xy");
pivotX.set("center");
pivotY.set("center");

const geom = new CGL.Geometry(op.name);
let mesh = null;
let div = null;
const m = mat4.create();
const trans = mat4.create();
const pos = vec3.create();
const divAlign = vec3.create();
const divAlignSize = vec3.create();

axis.onChange = rebuild;
pivotX.onChange = rebuild;
pivotY.onChange = rebuild;
width.onChange = rebuild;
height.onChange = rebuild;
cursorPort.onChange = updateCursor;
rebuild();

const modelMatrix = mat4.create();
const identViewMatrix = mat4.create();
const zeroVec3 = vec3.create();

render.onTriggered = function ()
{
    if (!div)
    {
        setUpDiv();
        addListeners();
        updateDivVisibility();
        updateIsInteractive();
    }
    updateDivSize();

    if (active.get() && renderRect.get() && mesh) mesh.render(cgl.getShader());

    trigger.trigger();
};

function rebuild()
{
    let w = width.get();
    let h = height.get();
    let x = 0;
    let y = 0;

    if (typeof w == "string")w = parseFloat(w);
    if (typeof h == "string")h = parseFloat(h);

    if (pivotX.get() == "center")
    {
        x = 0;
        divAlign[0] = -w / 2;
    }
    if (pivotX.get() == "right")
    {
        x = -w / 2;
    }
    if (pivotX.get() == "left")
    {
        x = w / 2;
    }

    if (pivotY.get() == "center")
    {
        y = 0;
        divAlign[1] = -h / 2;
    }
    if (pivotY.get() == "top") y = -h / 2;
    if (pivotY.get() == "bottom") y = +h / 2;

    const verts = [];
    const tc = [];
    const norms = [];
    const indices = [];

    const numRows = 1;
    const numColumns = 1;

    const stepColumn = w / numColumns;
    const stepRow = h / numRows;

    let c, r;

    for (r = 0; r <= numRows; r++)
    {
        for (c = 0; c <= numColumns; c++)
        {
            verts.push(c * stepColumn - width.get() / 2 + x);
            if (axis.get() == "xz") verts.push(0.0);
            verts.push(r * stepRow - height.get() / 2 + y);
            if (axis.get() == "xy") verts.push(0.0);

            tc.push(c / numColumns);
            tc.push(1.0 - r / numRows);

            if (axis.get() == "xz")
            {
                norms.push(0);
                norms.push(1);
                norms.push(0);
            }

            if (axis.get() == "xy")
            {
                norms.push(0);
                norms.push(0);
                norms.push(-1);
            }
        }
    }

    for (c = 0; c < numColumns; c++)
    {
        for (r = 0; r < numRows; r++)
        {
            const ind = c + (numColumns + 1) * r;
            const v1 = ind;
            const v2 = ind + 1;
            const v3 = ind + numColumns + 1;
            const v4 = ind + 1 + numColumns + 1;

            indices.push(v1);
            indices.push(v3);
            indices.push(v2);

            indices.push(v2);
            indices.push(v3);
            indices.push(v4);
        }
    }

    geom.clear();
    geom.vertices = verts;
    geom.texCoords = tc;
    geom.verticesIndices = indices;
    geom.vertexNormals = norms;

    if (!mesh) mesh = new CGL.Mesh(cgl, geom);
    else mesh.setGeom(geom);

    geomOut.set(null);
    geomOut.set(geom);
}

let divX = 0;
let divY = 0;
let divWidth = 0;
let divHeight = 0;

const mMatrix = mat4.create();
divVisible.onChange = updateDivVisibility;
inId.onChange = updateId;
classPort.onChange = updateClassNames;

function updateDivVisibility()
{
    if (div)
    {
        if (divVisible.get()) div.style.border = "1px solid red";
        else div.style.border = "none";
    }
}

function updateCursor()
{
    if (div)
    {
        div.style.cursor = cursorPort.get();
    }
}

function updateId()
{
    if (div)
    {
        div.setAttribute("id", inId.get());
    }
}

function updateDivSize()
{
    // var vp=cgl.getViewPort();

    mat4.multiply(mMatrix, cgl.vMatrix, cgl.mMatrix);
    vec3.transformMat4(pos, divAlign, mMatrix);
    vec3.transformMat4(trans, pos, cgl.pMatrix);

    const top = cgl.canvas.styleMarginTop || 0;
    const left = cgl.canvas.styleMarginLeft || 0;

    const x1 = (trans[0] * cgl.canvasWidth / 2) + cgl.canvasWidth / 2 + left;
    const y1 = (trans[1] * cgl.canvasHeight / 2) + cgl.canvasHeight / 2 + top;

    divAlignSize[0] = divAlign[0] + width.get();
    divAlignSize[1] = divAlign[1];

    vec3.transformMat4(pos, divAlignSize, mMatrix);
    vec3.transformMat4(trans, pos, cgl.pMatrix);

    const x2 = ((trans[0] * cgl.canvasWidth / 2) + cgl.canvasWidth / 2) + left;
    const y2 = ((trans[1] * cgl.canvasHeight / 2) + cgl.canvasHeight / 2 + top);

    divAlignSize[0] = divAlign[0];
    divAlignSize[1] = divAlign[1] + height.get();

    vec3.transformMat4(pos, divAlignSize, mMatrix);
    vec3.transformMat4(trans, pos, cgl.pMatrix);

    const x3 = ((trans[0] * cgl.canvasWidth / 2) + cgl.canvasWidth / 2) + left;
    const y3 = ((trans[1] * cgl.canvasHeight / 2) + cgl.canvasHeight / 2 + top);

    divAlignSize[0] = divAlign[0] + width.get();
    divAlignSize[1] = divAlign[1] + height.get();

    vec3.transformMat4(pos, divAlignSize, mMatrix);
    vec3.transformMat4(trans, pos, cgl.pMatrix);

    const x4 = ((trans[0] * cgl.canvasWidth / 2) + cgl.canvasWidth / 2) + left;
    const y4 = ((trans[1] * cgl.canvasHeight / 2) + cgl.canvasHeight / 2 + top);

    divX = Math.min(x1, x2, x3, x4);
    divY = Math.min(cgl.canvasHeight - y1, cgl.canvasHeight - y2, cgl.canvasHeight - y3, cgl.canvasHeight - y4);

    const xb = Math.max(x1, x2, x3, x4);
    const yb = Math.max(cgl.canvasHeight - y1, cgl.canvasHeight - y2, cgl.canvasHeight - y3, cgl.canvasHeight - y4);

    outTop.set(divY);
    outLeft.set(divX);
    outRight.set(xb);
    outBottom.set(yb);

    divWidth = Math.abs(xb - divX);
    divHeight = Math.abs(yb - divY);

    divX /= op.patch.cgl.pixelDensity;
    divY /= op.patch.cgl.pixelDensity;
    divWidth /= op.patch.cgl.pixelDensity;
    divHeight /= op.patch.cgl.pixelDensity;

    // div.style.left=divX+'px';
    // div.style.top=divY+'px';
    // div.style.width=divWidth+'px';
    // div.style.height=divHeight+'px';

    const divXpx = divX + "px";
    const divYpx = divY + "px";
    const divWidthPx = divWidth + "px";
    const divHeightPx = divHeight + "px";
    if (divXpx != div.style.left) div.style.left = divXpx;
    if (divYpx != div.style.top) div.style.top = divYpx;
    if (div.style.width != divWidthPx) div.style.width = divWidthPx;
    if (div.style.height != divHeightPx) div.style.height = divHeightPx;
}

function updateClassNames()
{
    if (div)
    {
        div.className = classPort.get();
    }
}

op.onDelete = function ()
{
    if (div)div.remove();
};

function setUpDiv()
{
    if (!div)
    {
        div = document.createElement("div");
        div.dataset.op = op.id;
        div.oncontextmenu = function (e)
        {
            e.preventDefault();
        };

        div.style.padding = "0px";
        div.style.position = "absolute";
        div.style["box-sizing"] = "border-box";
        div.style.border = "1px solid red";
        // div.style['border-left']="1px solid blue";
        // div.style['border-top']="1px solid green";
        div.style["z-index"] = "500";

        div.style["-webkit-user-select"] = "none";
        div.style["user-select"] = "none";
        div.style["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)";
        div.style["-webkit-touch-callout"] = "none";

        const canvas = op.patch.cgl.canvas.parentElement;
        canvas.appendChild(div);
        updateCursor();
        updateIsInteractive();
        updateId();
        updateClassNames();
    }
    updateDivSize();
    elementPort.set(div);
}

let listenerElement = null;

function onMouseMove(e)
{
    const offsetX = -width.get() / 2;
    const offsetY = -height.get() / 2;

    outX.set(Math.max(0.0, Math.min(1.0, e.offsetX / divWidth)));
    outY.set(Math.max(0.0, Math.min(1.0, 1.0 - e.offsetY / divHeight)));
}

function onMouseLeave(e)
{
    mouseDown.set(false);
    mouseOver.set(false);
}

function onMouseEnter(e)
{
    mouseOver.set(true);
}

function onMouseDown(e)
{
    mouseDown.set(true);
}

function onMouseUp(e)
{
    mouseDown.set(false);
}

function onmouseclick(e)
{
    mouseClick.trigger();
}

function onTouchMove(e)
{
    const targetEle = document.elementFromPoint(e.targetTouches[0].pageX, e.targetTouches[0].pageY);

    if (targetEle == div)
    {
        mouseOver.set(true);
        if (e.touches && e.touches.length > 0)
        {
            const rect = div.getBoundingClientRect(); // e.target
            const x = e.targetTouches[0].pageX - rect.left;
            const y = e.targetTouches[0].pageY - rect.top;

            const touch = e.touches[0];

            outX.set(Math.max(0.0, Math.min(1.0, x / divWidth)));
            outY.set(Math.max(0.0, Math.min(1.0, 1.0 - y / divHeight)));

            onMouseMove(touch);
        }
    }
    else
    {
        mouseOver.set(false);
    }
}

active.onChange = updateActiveRender;
function updateActiveRender()
{
    if (active.get())
    {
        addListeners();
        if (div) div.style.display = "block";
    }
    else
    {
        removeListeners();
        if (div) div.style.display = "none";
    }
}

isInteractive.onChange = updateIsInteractive;
function updateIsInteractive()
{
    if (isInteractive.get())
    {
        addListeners();
        if (div)div.style["pointer-events"] = "initial";
    }
    else
    {
        removeListeners();
        mouseDown.set(false);
        mouseOver.set(false);
        if (div)div.style["pointer-events"] = "none";
    }
}

function removeListeners()
{
    if (listenerElement)
    {
        document.removeEventListener("touchmove", onTouchMove);
        listenerElement.removeEventListener("touchend", onMouseUp);
        listenerElement.removeEventListener("touchstart", onMouseDown);

        listenerElement.removeEventListener("click", onmouseclick);
        listenerElement.removeEventListener("mousemove", onMouseMove);
        listenerElement.removeEventListener("mouseleave", onMouseLeave);
        listenerElement.removeEventListener("mousedown", onMouseDown);
        listenerElement.removeEventListener("mouseup", onMouseUp);
        listenerElement.removeEventListener("mouseenter", onMouseEnter);
        // listenerElement.removeEventListener('contextmenu', onClickRight);
        listenerElement = null;
    }
}

function addListeners()
{
    if (listenerElement)removeListeners();

    listenerElement = div;

    if (listenerElement)
    {
        document.addEventListener("touchmove", onTouchMove);
        listenerElement.addEventListener("touchend", onMouseUp);
        listenerElement.addEventListener("touchstart", onMouseDown);

        listenerElement.addEventListener("click", onmouseclick);
        listenerElement.addEventListener("mousemove", onMouseMove);
        listenerElement.addEventListener("mouseleave", onMouseLeave);
        listenerElement.addEventListener("mousedown", onMouseDown);
        listenerElement.addEventListener("mouseup", onMouseUp);
        listenerElement.addEventListener("mouseenter", onMouseEnter);
        // listenerElement.addEventListener('contextmenu', onClickRight);
    }
}


};

Ops.Patch.P4Zknbo.InteractiveRectangle_v25.prototype = new CABLES.Op();
CABLES.OPS["db1e057a-78bc-43bf-9b66-0fefc9eddfc6"]={f:Ops.Patch.P4Zknbo.InteractiveRectangle_v25,objName:"Ops.Patch.P4Zknbo.InteractiveRectangle_v25"};




// **************************************************************
// 
// Ops.Vars.VarGetNumber_v2
// 
// **************************************************************

Ops.Vars.VarGetNumber_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const val = op.outNumber("Value");
op.varName = op.inValueSelect("Variable", [], "", true);

new CABLES.VarGetOpWrapper(op, "number", op.varName, val);


};

Ops.Vars.VarGetNumber_v2.prototype = new CABLES.Op();
CABLES.OPS["421f5b52-c0fa-47c4-8b7a-012b9e1c864a"]={f:Ops.Vars.VarGetNumber_v2,objName:"Ops.Vars.VarGetNumber_v2"};




// **************************************************************
// 
// Ops.Patch.P4Zknbo.DisengageFlag2
// 
// **************************************************************

Ops.Patch.P4Zknbo.DisengageFlag2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_jqg7l6f5m=op.inFloat(\"jqg7l6f5m\",0);\nport_jqg7l6f5m.setUiAttribs({title:\"Boolean\",display:\"bool\",});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_jqg7l6f5m = addedOps[i].outNumber(\"innerOut_jqg7l6f5m\");\ninnerOut_jqg7l6f5m.set(port_jqg7l6f5m.get() );\ninnerOut_jqg7l6f5m.setUiAttribs({title:\"Boolean\"});\nport_jqg7l6f5m.on(\"change\", (a,v) => { innerOut_jqg7l6f5m.set(a); });\n\n    }\nif(addedOps[i].innerOutput)\n{\n}\n}\n};\n","subpatch_json":"{\"ops\":[{\"id\":\"tjwrh5u95\",\"uiAttribs\":{\"subPatch\":\"qs9sxp2nl\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"__sliderLeave\"}],\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"dlvka8p7u\",\"uiAttribs\":{\"subPatch\":\"qs9sxp2nl\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"Result\",\"objIn\":\"tjwrh5u95\",\"objOut\":\"dlvka8p7u\"}]}],\"objName\":\"Ops.Boolean.Not\"},{\"id\":\"eck8hvwot\",\"uiAttribs\":{\"subPatch\":\"qs9sxp2nl\"},\"storage\":{},\"portsOut\":[{\"name\":\"innerOut_jqg7l6f5m\",\"title\":\"Boolean\",\"links\":[{\"portIn\":\"Boolean\",\"portOut\":\"innerOut_jqg7l6f5m\",\"objIn\":\"dlvka8p7u\",\"objOut\":\"eck8hvwot\"}]}],\"objName\":\"Ops.Ui.SubPatchInput\"},{\"id\":\"7mxc7zyyb\",\"uiAttribs\":{\"subPatch\":\"qs9sxp2nl\"},\"storage\":{},\"objName\":\"Ops.Ui.SubPatchOutput\"}]}",};
const port_jqg7l6f5m=op.inFloat("jqg7l6f5m",0);
port_jqg7l6f5m.setUiAttribs({title:"Boolean",display:"bool",});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_jqg7l6f5m = addedOps[i].outNumber("innerOut_jqg7l6f5m");
innerOut_jqg7l6f5m.set(port_jqg7l6f5m.get() );
innerOut_jqg7l6f5m.setUiAttribs({title:"Boolean"});
port_jqg7l6f5m.on("change", (a,v) => { innerOut_jqg7l6f5m.set(a); });

    }
if(addedOps[i].innerOutput)
{
}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}


};

Ops.Patch.P4Zknbo.DisengageFlag2.prototype = new CABLES.Op();
CABLES.OPS["62217044-a409-4bb6-bbac-6b45623ed8ad"]={f:Ops.Patch.P4Zknbo.DisengageFlag2,objName:"Ops.Patch.P4Zknbo.DisengageFlag2"};




// **************************************************************
// 
// Ops.Trigger.Repeat_v2
// 
// **************************************************************

Ops.Trigger.Repeat_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exe=op.inTrigger("Execute"),
    num=op.inValueInt("Repeats",5),
    dir=op.inSwitch("Direction",['Forward','Backward'],'Forward'),
    next=op.outTrigger("Next"),
    idx=op.addOutPort(new CABLES.Port(op,"index"));

dir.onChange=updateDir;
updateDir();

function updateDir()
{
    if(dir.get()=="Forward") exe.onTriggered=forward;
    else exe.onTriggered=backward;
}

function forward()
{
    const max=Math.floor(num.get());

    for(var i=0;i<max;i++)
    {
        idx.set(i);
        next.trigger();
    }
}

function backward()
{
    const numi=Math.floor(num.get());
    for(var i=numi-1;i>-1;i--)
    {
        idx.set(i);
        next.trigger();
    }
}


};

Ops.Trigger.Repeat_v2.prototype = new CABLES.Op();
CABLES.OPS["a4deea80-db97-478f-ad1a-5ee30f2f47cc"]={f:Ops.Trigger.Repeat_v2,objName:"Ops.Trigger.Repeat_v2"};




// **************************************************************
// 
// Ops.Math.Multiply
// 
// **************************************************************

Ops.Math.Multiply = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    number1 = op.inValueFloat("number1", 1),
    number2 = op.inValueFloat("number2", 1),
    result = op.outNumber("result");

op.setUiAttribs({ "mathTitle": true });

number1.onChange = number2.onChange = update;
update();

function update()
{
    const n1 = number1.get();
    const n2 = number2.get();

    result.set(n1 * n2);
}


};

Ops.Math.Multiply.prototype = new CABLES.Op();
CABLES.OPS["1bbdae06-fbb2-489b-9bcc-36c9d65bd441"]={f:Ops.Math.Multiply,objName:"Ops.Math.Multiply"};




// **************************************************************
// 
// Ops.String.SwitchString
// 
// **************************************************************

Ops.String.SwitchString = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    idx=op.inValueInt("Index"),
    result=op.outString("Result");

const valuePorts=[];

idx.onChange=update;

for(var i=0;i<10;i++)
{
    var p=op.inString("String "+i);
    valuePorts.push( p );
    p.onChange=update;
}

function update()
{
    if(idx.get()>=0 && valuePorts[idx.get()])
    {
        result.set( valuePorts[idx.get()].get() );
    }
}

};

Ops.String.SwitchString.prototype = new CABLES.Op();
CABLES.OPS["2a7a0c68-f7c9-4249-b19a-d2de5cb4862c"]={f:Ops.String.SwitchString,objName:"Ops.String.SwitchString"};




// **************************************************************
// 
// Ops.Math.Sum
// 
// **************************************************************

Ops.Math.Sum = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    number1 = op.inValueFloat("number1", 0),
    number2 = op.inValueFloat("number2", 0),
    result = op.outNumber("result");

op.setUiAttribs({ "mathTitle": true });

number1.onChange =
number2.onChange = exec;
exec();

function exec()
{
    const v = number1.get() + number2.get();
    if (!isNaN(v))
        result.set(v);
}


};

Ops.Math.Sum.prototype = new CABLES.Op();
CABLES.OPS["c8fb181e-0b03-4b41-9e55-06b6267bc634"]={f:Ops.Math.Sum,objName:"Ops.Math.Sum"};




// **************************************************************
// 
// Ops.Patch.P4Zknbo.BasicSlider_v1
// 
// **************************************************************

Ops.Patch.P4Zknbo.BasicSlider_v1 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_blls2amps=op.inTrigger(\"blls2amps\");\nport_blls2amps.setUiAttribs({title:\"Trigger in\",});\n\nconst port_btagbs7z2=op.inString(\"btagbs7z2\",\"\");\nport_btagbs7z2.setUiAttribs({title:\"Class\",});\n\nconst port_lj06d561p=op.inFloat(\"lj06d561p\",0);\nport_lj06d561p.setUiAttribs({title:\"Show Boundings\",display:\"bool\",});\n\nconst port_nti406vwi=op.outNumber(\"nti406vwi\");\nport_nti406vwi.setUiAttribs({title:\"Result\",});\n\nconst port_gjvx0zyv5=op.outNumber(\"gjvx0zyv5\");\nport_gjvx0zyv5.setUiAttribs({title:\"value\",});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_blls2amps = addedOps[i].outTrigger(\"innerOut_blls2amps\");\ninnerOut_blls2amps.setUiAttribs({title:\"Trigger in\"});\nport_blls2amps.onTriggered = () => { innerOut_blls2amps.trigger(); };\n\nconst innerOut_btagbs7z2 = addedOps[i].outString(\"innerOut_btagbs7z2\");\ninnerOut_btagbs7z2.set(port_btagbs7z2.get() );\ninnerOut_btagbs7z2.setUiAttribs({title:\"Class\"});\nport_btagbs7z2.on(\"change\", (a,v) => { innerOut_btagbs7z2.set(a); });\n\nconst innerOut_lj06d561p = addedOps[i].outNumber(\"innerOut_lj06d561p\");\ninnerOut_lj06d561p.set(port_lj06d561p.get() );\ninnerOut_lj06d561p.setUiAttribs({title:\"Show Boundings\"});\nport_lj06d561p.on(\"change\", (a,v) => { innerOut_lj06d561p.set(a); });\n\n    }\nif(addedOps[i].innerOutput)\n{\nconst innerIn_nti406vwi = addedOps[i].inFloat(\"innerIn_nti406vwi\");\ninnerIn_nti406vwi.setUiAttribs({title:\"Result\"});\ninnerIn_nti406vwi.on(\"change\", (a,v) => { port_nti406vwi.set(a); });\n\nconst innerIn_gjvx0zyv5 = addedOps[i].inFloat(\"innerIn_gjvx0zyv5\");\ninnerIn_gjvx0zyv5.setUiAttribs({title:\"value\"});\ninnerIn_gjvx0zyv5.on(\"change\", (a,v) => { port_gjvx0zyv5.set(a); });\n\n}\n}\n};\n","subpatch_json":"{\"ops\":[{\"id\":\"mibecaqps\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"r\",\"value\":0.179},{\"name\":\"g\",\"value\":1},{\"name\":\"b\",\"value\":0.692},{\"name\":\"colorizeTexture\",\"value\":0},{\"name\":\"Vertex Colors\",\"value\":0},{\"name\":\"Alpha Mask Source index\",\"value\":0},{\"name\":\"Alpha Mask Source\",\"value\":\"Luminance\"},{\"name\":\"Opacity TexCoords Transform\",\"value\":0},{\"name\":\"Discard Transparent Pixels\",\"value\":0},{\"name\":\"diffuseRepeatX\",\"value\":1},{\"name\":\"diffuseRepeatY\",\"value\":1},{\"name\":\"Tex Offset X\",\"value\":0},{\"name\":\"Tex Offset Y\",\"value\":0},{\"name\":\"Crop TexCoords\",\"value\":0},{\"name\":\"billboard\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"zzuotyuj8\",\"objOut\":\"mibecaqps\"}]}],\"objName\":\"Ops.Gl.Shader.BasicMaterial_v3\"},{\"id\":\"0lkifp8gr\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"posY\",\"value\":0},{\"name\":\"posZ\",\"value\":0},{\"name\":\"scale\",\"value\":0.7},{\"name\":\"rotX\",\"value\":-180},{\"name\":\"rotY\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"mibecaqps\",\"objOut\":\"0lkifp8gr\"}]}],\"objName\":\"Ops.Gl.Matrix.Transform\"},{\"id\":\"rviscpw5r\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Separate inc/dec\",\"value\":0},{\"name\":\"Inc factor\",\"value\":2,\"title\":\"Inc/Dec factor\"},{\"name\":\"Dec factor\",\"value\":4}],\"portsOut\":[{\"name\":\"Next\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"Next\",\"objIn\":\"0lkifp8gr\",\"objOut\":\"rviscpw5r\"},{\"portIn\":\"exe\",\"portOut\":\"Next\",\"objIn\":\"ujv4mg17e\",\"objOut\":\"rviscpw5r\"}]},{\"name\":\"Result\",\"links\":[{\"portIn\":\"posX\",\"portOut\":\"Result\",\"objIn\":\"0lkifp8gr\",\"objOut\":\"rviscpw5r\"},{\"portIn\":\"innerIn_nti406vwi\",\"portOut\":\"Result\",\"objIn\":\"nor1x0y61\",\"objOut\":\"rviscpw5r\"},{\"portIn\":\"number1\",\"portOut\":\"Result\",\"objIn\":\"iea5ao2y2\",\"objOut\":\"rviscpw5r\"}]}],\"objName\":\"Ops.Anim.Smooth\"},{\"id\":\"zzuotyuj8\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"width\",\"value\":0.017},{\"name\":\"height\",\"value\":0.05},{\"name\":\"Draw\",\"value\":1}],\"objName\":\"Ops.Gl.Meshes.Triangle_v2\"},{\"id\":\"gmc3o0yzj\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"innerOut_blls2amps\",\"title\":\"Trigger in\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"innerOut_blls2amps\",\"objIn\":\"zyly9dj8g\",\"objOut\":\"gmc3o0yzj\"}]},{\"name\":\"innerOut_btagbs7z2\",\"title\":\"Class\",\"links\":[{\"portIn\":\"String In\",\"portOut\":\"innerOut_btagbs7z2\",\"objIn\":\"g0k1dqgdc\",\"objOut\":\"gmc3o0yzj\"},{\"portIn\":\"ID\",\"portOut\":\"innerOut_btagbs7z2\",\"objIn\":\"mzzhxzxfq\",\"objOut\":\"gmc3o0yzj\"}]},{\"name\":\"innerOut_lj06d561p\",\"title\":\"Show Boundings\",\"links\":[{\"portIn\":\"Render Rectangle\",\"portOut\":\"innerOut_lj06d561p\",\"objIn\":\"mzzhxzxfq\",\"objOut\":\"gmc3o0yzj\"}]}],\"objName\":\"Ops.Ui.SubPatchInput\"},{\"id\":\"nor1x0y61\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"innerIn_nti406vwi\",\"title\":\"Result\"},{\"name\":\"innerIn_gjvx0zyv5\",\"title\":\"value\"}],\"objName\":\"Ops.Ui.SubPatchOutput\"},{\"id\":\"9bvbbyk9y\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"number2\",\"value\":0.5}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"result\",\"objIn\":\"rviscpw5r\",\"objOut\":\"9bvbbyk9y\"}]}],\"objName\":\"Ops.Math.Subtract\"},{\"id\":\"ujv4mg17e\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"easing index\",\"value\":0},{\"name\":\"easing\",\"value\":\"linear\"},{\"name\":\"duration\",\"value\":0.25},{\"name\":\"Direction index\",\"value\":0},{\"name\":\"Direction\",\"value\":\"Both\"},{\"name\":\"value false\",\"value\":0.49},{\"name\":\"value true\",\"value\":1}],\"portsOut\":[{\"name\":\"value\",\"links\":[{\"portIn\":\"a\",\"portOut\":\"value\",\"objIn\":\"mibecaqps\",\"objOut\":\"ujv4mg17e\"},{\"portIn\":\"innerIn_gjvx0zyv5\",\"portOut\":\"value\",\"objIn\":\"nor1x0y61\",\"objOut\":\"ujv4mg17e\"}]},{\"name\":\"finished\",\"value\":1}],\"objName\":\"Ops.Anim.BoolAnim\"},{\"id\":\"iea5ao2y2\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"number2\",\"value\":5}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"rotZ\",\"portOut\":\"result\",\"objIn\":\"0lkifp8gr\",\"objOut\":\"iea5ao2y2\"}]}],\"objName\":\"Ops.Math.Multiply\"},{\"id\":\"zyly9dj8g\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"x\",\"value\":0},{\"name\":\"y\",\"value\":-1.45},{\"name\":\"z\",\"value\":0.02}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"bnqxchxdy\",\"objOut\":\"zyly9dj8g\"}]}],\"objName\":\"Ops.Gl.Matrix.Translate\"},{\"id\":\"i35qt5h52\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Boolean\",\"portOut\":\"result\",\"objIn\":\"leht2psro\",\"objOut\":\"i35qt5h52\"},{\"portIn\":\"Index\",\"portOut\":\"result\",\"objIn\":\"8vb7jo147\",\"objOut\":\"i35qt5h52\"},{\"portIn\":\"Value\",\"portOut\":\"result\",\"objIn\":\"mjgge74tk\",\"objOut\":\"i35qt5h52\"}]}],\"objName\":\"Ops.Ui.Routing.RouteNumber\"},{\"id\":\"7zp4rrptl\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_scapeLevel\"}],\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"w1t4yqcfv\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Title\",\"value\":\"ext/int ir level\"}],\"objName\":\"Ops.Ui.Area\"},{\"id\":\"g0k1dqgdc\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"When False index\",\"value\":1},{\"name\":\"When False\",\"value\":\"custom\"},{\"name\":\"Custom Value\",\"value\":\"scapeLevel\"}],\"portsOut\":[{\"name\":\"String Out\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"String Out\",\"objIn\":\"ejj3oddhv\",\"objOut\":\"g0k1dqgdc\"},{\"portIn\":\"Key\",\"portOut\":\"String Out\",\"objIn\":\"zwg2yqvrf\",\"objOut\":\"g0k1dqgdc\"}]}],\"objName\":\"Ops.String.GateString\"},{\"id\":\"ejj3oddhv\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_mouseIsChangingParamID\"}],\"objName\":\"Ops.Vars.VarSetString_v2\"},{\"id\":\"8kcvz9igq\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_normValue\"}],\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"qmk2dl6c4\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ext_injectedState\"}],\"portsOut\":[{\"name\":\"Value\",\"links\":[{\"portIn\":\"Object In\",\"portOut\":\"Value\",\"objIn\":\"gknkj3y4x\",\"objOut\":\"qmk2dl6c4\"}]}],\"objName\":\"Ops.Vars.VarGetObject_v2\"},{\"id\":\"zwg2yqvrf\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Numbers_0\",\"portOut\":\"Result\",\"objIn\":\"8vb7jo147\",\"objOut\":\"zwg2yqvrf\"}]},{\"name\":\"Found\",\"value\":1}],\"objName\":\"Ops.Json.ObjectGetNumber_v2\"},{\"id\":\"8vb7jo147\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Numbers\",\"multiPortNum\":2},{\"name\":\"Numbers_2\",\"value\":0,\"title\":\"add port\"}],\"portsOut\":[{\"name\":\"Number\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"Number\",\"objIn\":\"7zp4rrptl\",\"objOut\":\"8vb7jo147\"},{\"portIn\":\"number1\",\"portOut\":\"Number\",\"objIn\":\"9bvbbyk9y\",\"objOut\":\"8vb7jo147\"}]},{\"name\":\"Num Values\",\"value\":2}],\"objName\":\"Ops.Number.SwitchNumberMultiPort\"},{\"id\":\"gknkj3y4x\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"When False index\",\"value\":0},{\"name\":\"When False\",\"value\":\"keep last object\"},{\"name\":\"Only Valid Objects\",\"value\":1}],\"portsOut\":[{\"name\":\"Object Out\",\"links\":[{\"portIn\":\"Data\",\"portOut\":\"Object Out\",\"objIn\":\"zwg2yqvrf\",\"objOut\":\"gknkj3y4x\"}]}],\"objName\":\"Ops.Json.GateObject\"},{\"id\":\"leht2psro\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Pass Through\",\"portOut\":\"Result\",\"objIn\":\"gknkj3y4x\",\"objOut\":\"leht2psro\"}]}],\"objName\":\"Ops.Boolean.Not\"},{\"id\":\"mjgge74tk\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_leftButtonSlider\"}],\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"ma5xd9zja\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"When False index\",\"value\":0},{\"name\":\"When False\",\"value\":\"keep last number\"},{\"name\":\"Custom Value\",\"value\":0}],\"portsOut\":[{\"name\":\"Value Out\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"Value Out\",\"objIn\":\"8kcvz9igq\",\"objOut\":\"ma5xd9zja\"},{\"portIn\":\"Numbers_1\",\"portOut\":\"Value Out\",\"objIn\":\"8vb7jo147\",\"objOut\":\"ma5xd9zja\"},{\"portIn\":\"Number\",\"portOut\":\"Value Out\",\"objIn\":\"o1wvr3kg9\",\"objOut\":\"ma5xd9zja\"}]}],\"objName\":\"Ops.Number.GateNumber\"},{\"id\":\"o1wvr3kg9\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"objName\":\"Ops.Ui.VizNumberBar\"},{\"id\":\"3hftipxyj\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"__sliderLeave\"}],\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"pk2351zm7\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"Result\",\"objIn\":\"3hftipxyj\",\"objOut\":\"pk2351zm7\"}]}],\"objName\":\"Ops.Boolean.Not\"},{\"id\":\"mzzhxzxfq\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Width\",\"value\":1},{\"name\":\"Height\",\"value\":0.34},{\"name\":\"Class\",\"value\":\"slider_track\"},{\"name\":\"Pivot x index\",\"value\":0},{\"name\":\"Pivot x\",\"value\":\"center\"},{\"name\":\"Pivot y index\",\"value\":2},{\"name\":\"Pivot y\",\"value\":\"bottom\"},{\"name\":\"Axis index\",\"value\":0},{\"name\":\"Axis\",\"value\":\"xy\"},{\"name\":\"Is Interactive\",\"value\":1},{\"name\":\"Show Boundings\",\"value\":0},{\"name\":\"Cursor index\",\"value\":9},{\"name\":\"Cursor\",\"value\":\"s-resize\"},{\"name\":\"Render\",\"value\":1,\"title\":\"Active\"}],\"portsOut\":[{\"name\":\"Trigger out\",\"links\":[{\"portIn\":\"Update\",\"portOut\":\"Trigger out\",\"objIn\":\"rviscpw5r\",\"objOut\":\"mzzhxzxfq\"}]},{\"name\":\"Pointer Hover\",\"links\":[{\"portIn\":\"bool\",\"portOut\":\"Pointer Hover\",\"objIn\":\"ujv4mg17e\",\"objOut\":\"mzzhxzxfq\"},{\"portIn\":\"Pass Through\",\"portOut\":\"Pointer Hover\",\"objIn\":\"g0k1dqgdc\",\"objOut\":\"mzzhxzxfq\"},{\"portIn\":\"Boolean\",\"portOut\":\"Pointer Hover\",\"objIn\":\"pk2351zm7\",\"objOut\":\"mzzhxzxfq\"}]},{\"name\":\"Pointer Down\",\"links\":[{\"portIn\":\"value\",\"portOut\":\"Pointer Down\",\"objIn\":\"i35qt5h52\",\"objOut\":\"mzzhxzxfq\"},{\"portIn\":\"Pass Through\",\"portOut\":\"Pointer Down\",\"objIn\":\"ma5xd9zja\",\"objOut\":\"mzzhxzxfq\"}]},{\"name\":\"Pointer X\",\"links\":[{\"portIn\":\"Value In\",\"portOut\":\"Pointer X\",\"objIn\":\"ma5xd9zja\",\"objOut\":\"mzzhxzxfq\"},{\"portIn\":\"Value\",\"portOut\":\"Pointer X\",\"objIn\":\"tc6onu8jl\",\"objOut\":\"mzzhxzxfq\"}]},{\"name\":\"Pointer Y\",\"value\":0.875708644499907},{\"name\":\"Top\",\"value\":652.3148226737976},{\"name\":\"Left\",\"value\":396.1774400472641},{\"name\":\"Right\",\"value\":1405.822559952736},{\"name\":\"Bottom\",\"value\":716.6797173023224}],\"objName\":\"Ops.Patch.P4Zknbo.InteractiveRectangle_v24\"},{\"id\":\"tc6onu8jl\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_normValueOnHover\"}],\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"bnqxchxdy\",\"uiAttribs\":{\"subPatch\":\"r6bn9droo\"},\"storage\":{},\"portsIn\":[{\"name\":\"x\",\"value\":2.72},{\"name\":\"y\",\"value\":0.51},{\"name\":\"z\",\"value\":1}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Trigger in\",\"portOut\":\"trigger\",\"objIn\":\"mzzhxzxfq\",\"objOut\":\"bnqxchxdy\"}]}],\"objName\":\"Ops.Gl.Matrix.ScaleXYZViewMatrix\"}]}",};
const port_blls2amps=op.inTrigger("blls2amps");
port_blls2amps.setUiAttribs({title:"Trigger in",});

const port_btagbs7z2=op.inString("btagbs7z2","");
port_btagbs7z2.setUiAttribs({title:"Class",});

const port_lj06d561p=op.inFloat("lj06d561p",0);
port_lj06d561p.setUiAttribs({title:"Show Boundings",display:"bool",});

const port_nti406vwi=op.outNumber("nti406vwi");
port_nti406vwi.setUiAttribs({title:"Result",});

const port_gjvx0zyv5=op.outNumber("gjvx0zyv5");
port_gjvx0zyv5.setUiAttribs({title:"value",});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_blls2amps = addedOps[i].outTrigger("innerOut_blls2amps");
innerOut_blls2amps.setUiAttribs({title:"Trigger in"});
port_blls2amps.onTriggered = () => { innerOut_blls2amps.trigger(); };

const innerOut_btagbs7z2 = addedOps[i].outString("innerOut_btagbs7z2");
innerOut_btagbs7z2.set(port_btagbs7z2.get() );
innerOut_btagbs7z2.setUiAttribs({title:"Class"});
port_btagbs7z2.on("change", (a,v) => { innerOut_btagbs7z2.set(a); });

const innerOut_lj06d561p = addedOps[i].outNumber("innerOut_lj06d561p");
innerOut_lj06d561p.set(port_lj06d561p.get() );
innerOut_lj06d561p.setUiAttribs({title:"Show Boundings"});
port_lj06d561p.on("change", (a,v) => { innerOut_lj06d561p.set(a); });

    }
if(addedOps[i].innerOutput)
{
const innerIn_nti406vwi = addedOps[i].inFloat("innerIn_nti406vwi");
innerIn_nti406vwi.setUiAttribs({title:"Result"});
innerIn_nti406vwi.on("change", (a,v) => { port_nti406vwi.set(a); });

const innerIn_gjvx0zyv5 = addedOps[i].inFloat("innerIn_gjvx0zyv5");
innerIn_gjvx0zyv5.setUiAttribs({title:"value"});
innerIn_gjvx0zyv5.on("change", (a,v) => { port_gjvx0zyv5.set(a); });

}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}


};

Ops.Patch.P4Zknbo.BasicSlider_v1.prototype = new CABLES.Op();
CABLES.OPS["55bbeb5d-4c6b-4326-83c2-e979dda40f9b"]={f:Ops.Patch.P4Zknbo.BasicSlider_v1,objName:"Ops.Patch.P4Zknbo.BasicSlider_v1"};




// **************************************************************
// 
// Ops.Ui.Routing.RouteNumber
// 
// **************************************************************

Ops.Ui.Routing.RouteNumber = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    v = op.inValueFloat("value"),
    result = op.outNumber("result");

v.onChange = exec;

let wasLinked = false;

op.setUiAttribs({ "display": "reroute" });

function exec()
{
    result.set(v.get());
}


};

Ops.Ui.Routing.RouteNumber.prototype = new CABLES.Op();
CABLES.OPS["afff634a-b581-4449-b6f7-9ec7863c5d4d"]={f:Ops.Ui.Routing.RouteNumber,objName:"Ops.Ui.Routing.RouteNumber"};




// **************************************************************
// 
// Ops.Math.Divide
// 
// **************************************************************

Ops.Math.Divide = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    number1 = op.inValueFloat("number1", 1),
    number2 = op.inValueFloat("number2", 2),
    result = op.outNumber("result");

op.setUiAttribs({ "mathTitle": true });

number1.onChange = number2.onChange = exec;
exec();

function exec()
{
    result.set(number1.get() / number2.get());
}


};

Ops.Math.Divide.prototype = new CABLES.Op();
CABLES.OPS["86fcfd8c-038d-4b91-9820-a08114f6b7eb"]={f:Ops.Math.Divide,objName:"Ops.Math.Divide"};




// **************************************************************
// 
// Ops.Gl.Shader.PointMaterial_v5
// 
// **************************************************************

Ops.Gl.Shader.PointMaterial_v5 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"pointmat_frag":"\n{{MODULES_HEAD}}\n\nUNI vec4 color;\nUNI float atlasNumX;\n\n// IN vec2 pointCoord;\nIN float ps;\nIN vec2 texCoord;\n\n#ifdef HAS_TEXTURE_DIFFUSE\n    UNI sampler2D diffTex;\n#endif\n#ifdef HAS_TEXTURE_MASK\n    UNI sampler2D texMask;\n#endif\n#ifdef HAS_TEXTURE_COLORIZE\n    IN vec4 colorize;\n#endif\n#ifdef HAS_TEXTURE_OPACITY\n    IN float opacity;\n#endif\n\n#ifdef HAS_TEXTURE_ROT\n    UNI sampler2D texRot;\n#endif\n\n\n#ifdef USE_ATLAS\n    IN float randAtlas;\n    #ifdef HAS_TEXTURE_ATLASLOOKUP\n        UNI sampler2D texAtlasLookup;\n    #endif\n#endif\n\n\n#ifdef VERTEX_COLORS\n    IN vec4 vertexColor;\n#endif\n\nvec3 lumcoeff = vec3(0.299,0.587,0.114);\n\n#define PI 3.14159265\n#define TAU (2.0*PI)\n\nvoid pR(inout vec2 p, float a)\n{\n\tp = cos(a)*p + sin(a)*vec2(p.y, -p.x);\n}\n\n\nvoid main()\n{\n    #ifdef FLIP_TEX\n        vec2 pointCoord=vec2(gl_PointCoord.x,(1.0-gl_PointCoord.y));\n    #endif\n    #ifndef FLIP_TEX\n        vec2 pointCoord=gl_PointCoord;\n    #endif\n\n    #ifdef HAS_TEXTURE_ROT\n        float r=texture(texRot,texCoord).r;\n        pointCoord-=vec2(0.5);\n        pR(pointCoord,r*TAU);\n        pointCoord+=vec2(0.5);\n    #endif\n\n    vec2 origPointCoord=pointCoord;\n\n\n    #ifdef USE_ATLAS\n\n        float atlasIdx=randAtlas;\n\n        #ifdef HAS_TEXTURE_ATLASLOOKUP\n            atlasIdx=texture(texAtlasLookup,texCoord).r;\n        #endif\n\n        #ifdef ATLAS_XFADE\n            vec2 pointCoord2=vec2(origPointCoord);\n            pointCoord2.x=origPointCoord.x/atlasNumX+ceil(atlasIdx)*(1.0/atlasNumX);\n        #endif\n\n        pointCoord.x=origPointCoord.x/atlasNumX+floor(atlasIdx)*(1.0/atlasNumX);\n\n\n    #endif\n\n    {{MODULE_BEGIN_FRAG}}\n\n    if(ps<1.0)discard;\n\n    vec4 col=color;\n\n    #ifdef HAS_TEXTURE_MASK\n        float mask;\n        #ifdef TEXTURE_MASK_R\n            mask=texture(texMask,pointCoord).r;\n        #endif\n        #ifdef TEXTURE_MASK_A\n            mask=texture(texMask,pointCoord).a;\n        #endif\n        #ifdef TEXTURE_MASK_LUMI\n        \tmask = dot(texture(texMask,pointCoord).rgb, lumcoeff);\n        #endif\n\n        #ifdef ATLAS_XFADE\n            float mask2=texture(texMask,pointCoord2).r;\n\n            #ifdef TEXTURE_MASK_A\n                mask2=texture(texMask,pointCoord2).a;\n            #endif\n            #ifdef TEXTURE_MASK_LUMI\n            \tmask2 = dot(texture(texMask,pointCoord2).rgb, lumcoeff);\n            #endif\n\n            mask=mix(mask,mask2,fract(atlasIdx));\n        #endif\n    #endif\n\n    #ifdef HAS_TEXTURE_DIFFUSE\n\n        col=texture(diffTex,pointCoord);\n\n        #ifdef ATLAS_XFADE\n            vec4 col2=texture(diffTex,pointCoord2);\n            col=mix(col,col2,fract(atlasIdx));\n        #endif\n\n        #ifdef COLORIZE_TEXTURE\n            col.rgb*=color.rgb;\n        #endif\n    #endif\n\n    col.a*=color.a;\n\n\n    #ifdef MAKE_ROUND\n\n        #ifndef MAKE_ROUNDAA\n            if ((gl_PointCoord.x-0.5)*(gl_PointCoord.x-0.5) + (gl_PointCoord.y-0.5)*(gl_PointCoord.y-0.5) > 0.25) discard; //col.a=0.0;\n        #endif\n\n        #ifdef MAKE_ROUNDAA\n            float circ=(gl_PointCoord.x-0.5)*(gl_PointCoord.x-0.5) + (gl_PointCoord.y-0.5)*(gl_PointCoord.y-0.5);\n\n            float a=smoothstep(0.25,0.25-fwidth(gl_PointCoord.x),circ);\n            if(a==0.0)discard;\n            col.a=a*color.a;\n        #endif\n    #endif\n\n    #ifdef HAS_TEXTURE_COLORIZE\n        col*=colorize;\n    #endif\n\n    #ifdef TEXTURE_COLORIZE_MUL\n        col*=color;\n    #endif\n\n    #ifdef HAS_TEXTURE_MASK\n        col.a*=mask;\n    #endif\n\n    #ifdef HAS_TEXTURE_OPACITY\n        col.a*=opacity;\n    #endif\n\n    #ifdef VERTEX_COLORS\n        col.rgb = vertexColor.rgb;\n        col.a *= vertexColor.a;\n    #endif\n\n    if (col.a <= 0.0) discard;\n\n    #ifdef HAS_TEXTURE_COLORIZE\n        col*=colorize;\n    #endif\n\n    {{MODULE_COLOR}}\n\n\n    outColor = col;\n}\n","pointmat_vert":"{{MODULES_HEAD}}\n\n\n\nIN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\nIN vec3 attrTangent;\nIN vec3 attrBiTangent;\nIN float attrPointSize;\n\n#ifdef VERTEX_COLORS\n    IN vec4 attrVertColor;\n    OUT vec4 vertexColor;\n#endif\n\nOUT vec3 norm;\nOUT float ps;\n\nOUT vec2 texCoord;\n\n\n#ifdef HAS_TEXTURES\n#endif\n\n#ifdef HAS_TEXTURE_COLORIZE\n   UNI sampler2D texColorize;\n   OUT vec4 colorize;\n#endif\n#ifdef HAS_TEXTURE_OPACITY\n    UNI sampler2D texOpacity;\n    OUT float opacity;\n#endif\n\n#ifdef HAS_TEXTURE_POINTSIZE\n   UNI sampler2D texPointSize;\n   UNI float texPointSizeMul;\n#endif\n\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\n\nUNI float pointSize;\nUNI vec3 camPos;\n\nUNI float canvasWidth;\nUNI float canvasHeight;\nUNI float camDistMul;\nUNI float randomSize;\nUNI float minPointSize;\n\nIN float attrVertIndex;\n\nUNI float atlasNumX;\n\n#ifdef USE_ATLAS\n    OUT float randAtlas;\n#endif\n\nfloat rand(float n){return fract(sin(n) * 5711.5711123);}\n\n#define POINTMATERIAL\n\nvoid main()\n{\n    norm=attrVertNormal;\n    #ifdef PIXELSIZE\n        float psMul=1.0;\n    #endif\n\n    #ifndef PIXELSIZE\n        float psMul=sqrt(canvasWidth/canvasHeight)+0.00000000001;\n    #endif\n\n    #ifdef USE_ATLAS\n        randAtlas=atlasNumX*rand(attrVertIndex+vPosition.x);\n    #endif\n\n    vec3 tangent=attrTangent;\n    vec3 bitangent=attrBiTangent;\n\n\n    #ifdef VERTEX_COLORS\n        vertexColor=attrVertColor;\n    #endif\n\n    // #ifdef HAS_TEXTURES\n        texCoord=attrTexCoord;\n    // #endif\n\n    #ifdef HAS_TEXTURE_OPACITY\n        // opacity=texture(texOpacity,vec2(rand(attrVertIndex+texCoord.x*texCoord.y+texCoord.y+texCoord.x),rand(texCoord.y*texCoord.x-texCoord.x-texCoord.y-attrVertIndex))).r;\n        opacity=texture(texOpacity,texCoord).r;\n    #endif\n\n\n    #ifdef HAS_TEXTURE_COLORIZE\n        #ifdef RANDOM_COLORIZE\n            colorize=texture(texColorize,vec2(rand(attrVertIndex+texCoord.x*texCoord.y+texCoord.y+texCoord.x),rand(texCoord.y*texCoord.x-texCoord.x-texCoord.y-attrVertIndex)));\n        #endif\n        #ifndef RANDOM_COLORIZE\n            colorize=texture(texColorize,texCoord);\n        #endif\n    #endif\n\n\n\n\n\n    mat4 mMatrix=modelMatrix;\n    vec4 pos = vec4( vPosition, 1. );\n\n    gl_PointSize=0.0;\n\n    {{MODULE_VERTEX_POSITION}}\n\n    vec4 model=mMatrix * pos;\n\n    psMul+=rand(texCoord.x*texCoord.y+texCoord.y*3.0+texCoord.x*2.0+attrVertIndex)*randomSize;\n\n    float addPointSize=0.0;\n    #ifdef HAS_TEXTURE_POINTSIZE\n\n        #ifdef POINTSIZE_CHAN_R\n            addPointSize=texture(texPointSize,texCoord).r;\n        #endif\n        #ifdef POINTSIZE_CHAN_G\n            addPointSize=texture(texPointSize,texCoord).g;\n        #endif\n        #ifdef POINTSIZE_CHAN_B\n            addPointSize=texture(texPointSize,texCoord).b;\n        #endif\n\n        #ifdef DOTSIZEREMAPABS\n            addPointSize=1.0-(distance(addPointSize,0.5)*2.0);\n            addPointSize=addPointSize*addPointSize*addPointSize*2.0;\n        #endif\n\n        addPointSize*=texPointSizeMul;\n\n    #endif\n\n    ps=0.0;\n    #ifndef SCALE_BY_DISTANCE\n        ps = (pointSize+addPointSize+attrPointSize) * psMul;\n    #endif\n    #ifdef SCALE_BY_DISTANCE\n        float cameraDist = distance(model.xyz, camPos);\n        ps = ( (pointSize+addPointSize+attrPointSize) / cameraDist) * psMul;\n    #endif\n    ps=max(minPointSize,ps);\n    gl_PointSize += ps;\n\n\n    gl_Position = projMatrix * viewMatrix * model;\n}\n",};
const cgl = op.patch.cgl;

const
    render = op.inTrigger("render"),
    pointSize = op.inValueFloat("PointSize", 3),
    inPixelSize = op.inBool("Size in Pixels", false),
    randomSize = op.inValue("Random Size", 0),
    makeRound = op.inValueBool("Round", true),
    makeRoundAA = op.inValueBool("Round Antialias", false),
    doScale = op.inValueBool("Scale by Distance", false),
    r = op.inValueSlider("r", Math.random()),
    g = op.inValueSlider("g", Math.random()),
    b = op.inValueSlider("b", Math.random()),
    a = op.inValueSlider("a", 1),
    vertCols = op.inBool("Vertex Colors", false),
    texture = op.inTexture("texture"),
    textureMulColor = op.inBool("Colorize Texture"),
    textureMask = op.inTexture("Texture Mask"),
    texMaskChan = op.inSwitch("Mask Channel", ["R", "A", "Luminance"], "R"),
    textureColorize = op.inTexture("Texture Colorize"),
    colorizeRandom = op.inValueBool("Colorize Randomize", false),
    textureOpacity = op.inTexture("Texture Opacity"),
    texturePointSize = op.inTexture("Texture Point Size"),
    texturePointSizeChannel = op.inSwitch("Point Size Channel", ["R", "G", "B"], "R"),
    texturePointSizeMul = op.inFloat("Texture Point Size Mul", 1),
    texturePointSizeMap = op.inSwitch("Map Size 0", ["Black", "Grey"], "Black"),
    flipTex = op.inValueBool("Flip Texture", false),

    inAtlasXFade = op.inBool("Atlas Cross Fade", false),
    inAtlasRepeatX = op.inFloat("Atlas Repeat X ", 1),
    inAtlasLookupTex = op.inTexture("Atlas Lookup"),
    inRotTex = op.inTexture("Rotate Texture"),
    minPointSize = op.inValueFloat("Min Point Size", 0),

    trigger = op.outTrigger("trigger"),
    shaderOut = op.outObject("shader", null, "shader");

op.setPortGroup("Texture", [texture, textureMulColor, textureMask, texMaskChan, textureColorize, textureOpacity, colorizeRandom]);
op.setPortGroup("Color", [r, g, b, a, vertCols]);
op.setPortGroup("Size", [pointSize, randomSize, makeRound, makeRoundAA, doScale, inPixelSize, texturePointSize, texturePointSizeMul, texturePointSizeChannel, texturePointSizeMap]);

op.setPortGroup("Atlas", [inAtlasRepeatX, inAtlasLookupTex, inAtlasXFade]);

r.setUiAttribs({ "colorPick": true });

const shader = new CGL.Shader(cgl, "PointMaterial", this);
shader.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG"]);
shader.define("MAKE_ROUND");

op.toWorkPortsNeedToBeLinked(render);

const
    uniPointSize = new CGL.Uniform(shader, "f", "pointSize", pointSize),
    texturePointSizeMulUniform = new CGL.Uniform(shader, "f", "texPointSizeMul", texturePointSizeMul),
    uniRandomSize = new CGL.Uniform(shader, "f", "randomSize", randomSize),
    uniMinPointSize = new CGL.Uniform(shader, "f", "minPointSize", minPointSize),
    uniColor = new CGL.Uniform(shader, "4f", "color", r, g, b, a),
    uniRandAtlasX = new CGL.Uniform(shader, "f", "atlasNumX", inAtlasRepeatX),

    uniWidth = new CGL.Uniform(shader, "f", "canvasWidth", cgl.canvasWidth),
    uniHeight = new CGL.Uniform(shader, "f", "canvasHeight", cgl.canvasHeight),
    textureUniform = new CGL.Uniform(shader, "t", "diffTex"),
    textureColorizeUniform = new CGL.Uniform(shader, "t", "texColorize"),
    textureOpacityUniform = new CGL.Uniform(shader, "t", "texOpacity"),
    textureColoPointSize = new CGL.Uniform(shader, "t", "texPointSize"),
    texturePointSizeUniform = new CGL.Uniform(shader, "t", "texPointSize"),
    textureMaskUniform = new CGL.Uniform(shader, "t", "texMask"),
    textureAtlasLookupUniform = new CGL.Uniform(shader, "t", "texAtlasLookup"),
    texRotUni = new CGL.Uniform(shader, "t", "texRot");

shader.setSource(attachments.pointmat_vert, attachments.pointmat_frag);
shader.glPrimitive = cgl.gl.POINTS;
shaderOut.set(shader);
shaderOut.ignoreValueSerialize = true;

doScale.onChange =
    inAtlasRepeatX.onChange =
    makeRound.onChange =
    makeRoundAA.onChange =
    texture.onChange =
    textureColorize.onChange =
    textureMask.onChange =
    colorizeRandom.onChange =
    flipTex.onChange =
    texMaskChan.onChange =
    inPixelSize.onChange =
    textureOpacity.onChange =
    texturePointSize.onChange =
    texturePointSizeMap.onChange =
    texturePointSizeChannel.onChange =
    textureMulColor.onChange =
    inAtlasLookupTex.onLinkChanged =
    inRotTex.onLinkChanged =
    vertCols.onChange = updateDefines;

render.onTriggered = doRender;
updateUi();

op.preRender = function ()
{
    if (shader)shader.bind();
    doRender();
};

function doRender()
{
    uniWidth.setValue(cgl.canvasWidth);
    uniHeight.setValue(cgl.canvasHeight);

    cgl.pushShader(shader);
    shader.popTextures();
    if (texture.get() && !texture.get().deleted) shader.pushTexture(textureUniform, texture.get());
    if (textureMask.get()) shader.pushTexture(textureMaskUniform, textureMask.get());
    if (textureColorize.get()) shader.pushTexture(textureColorizeUniform, textureColorize.get());
    if (textureOpacity.get()) shader.pushTexture(textureOpacityUniform, textureOpacity.get());
    if (texturePointSize.get()) shader.pushTexture(texturePointSizeUniform, texturePointSize.get());
    if (inAtlasLookupTex.get()) shader.pushTexture(textureAtlasLookupUniform, inAtlasLookupTex.get());
    if (inRotTex.get()) shader.pushTexture(texRotUni, inRotTex.get());

    trigger.trigger();

    cgl.popShader();
}

function useAtlas()
{
    return inAtlasRepeatX.get() > 0 || inAtlasLookupTex.isLinked();
}

function updateUi()
{
    inAtlasRepeatX.setUiAttribs({ "greyout": !useAtlas() });
    texMaskChan.setUiAttribs({ "greyout": !textureMask.isLinked() });

    texturePointSizeChannel.setUiAttribs({ "greyout": !texturePointSize.isLinked() });
    texturePointSizeMul.setUiAttribs({ "greyout": !texturePointSize.isLinked() });
    texturePointSizeMap.setUiAttribs({ "greyout": !texturePointSize.isLinked() });
}

function updateDefines()
{
    shader.toggleDefine("USE_ATLAS", useAtlas());

    shader.toggleDefine("SCALE_BY_DISTANCE", doScale.get());
    shader.toggleDefine("MAKE_ROUND", makeRound.get());
    shader.toggleDefine("MAKE_ROUNDAA", makeRoundAA.get());

    shader.toggleDefine("ATLAS_XFADE", inAtlasXFade.get());

    shader.toggleDefine("VERTEX_COLORS", vertCols.get());
    shader.toggleDefine("RANDOM_COLORIZE", colorizeRandom.get());
    shader.toggleDefine("HAS_TEXTURE_DIFFUSE", texture.get());
    shader.toggleDefine("HAS_TEXTURE_MASK", textureMask.isLinked());
    shader.toggleDefine("HAS_TEXTURE_COLORIZE", textureColorize.isLinked());
    shader.toggleDefine("HAS_TEXTURE_OPACITY", textureOpacity.isLinked());
    shader.toggleDefine("HAS_TEXTURE_POINTSIZE", texturePointSize.isLinked());
    shader.toggleDefine("HAS_TEXTURE_ATLASLOOKUP", inAtlasLookupTex.isLinked());
    shader.toggleDefine("HAS_TEXTURE_ROT", inRotTex.isLinked());

    shader.toggleDefine("TEXTURE_COLORIZE_MUL", textureMulColor.get());

    shader.toggleDefine("FLIP_TEX", flipTex.get());
    shader.toggleDefine("TEXTURE_MASK_R", texMaskChan.get() == "R");
    shader.toggleDefine("TEXTURE_MASK_A", texMaskChan.get() == "A");
    shader.toggleDefine("TEXTURE_MASK_LUMI", texMaskChan.get() == "Luminance");
    shader.toggleDefine("PIXELSIZE", inPixelSize.get());

    shader.toggleDefine("POINTSIZE_CHAN_R", texturePointSizeChannel.get() == "R");
    shader.toggleDefine("POINTSIZE_CHAN_G", texturePointSizeChannel.get() == "G");
    shader.toggleDefine("POINTSIZE_CHAN_B", texturePointSizeChannel.get() == "B");

    shader.toggleDefine("DOTSIZEREMAPABS", texturePointSizeMap.get() == "Grey");
    updateUi();
}


};

Ops.Gl.Shader.PointMaterial_v5.prototype = new CABLES.Op();
CABLES.OPS["72a2449e-db5c-44e7-ad9f-49f3c78b8c71"]={f:Ops.Gl.Shader.PointMaterial_v5,objName:"Ops.Gl.Shader.PointMaterial_v5"};




// **************************************************************
// 
// Ops.Boolean.Not
// 
// **************************************************************

Ops.Boolean.Not = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    bool = op.inValueBool("Boolean"),
    outbool = op.outBoolNum("Result");

bool.changeAlways = true;

bool.onChange = function ()
{
    outbool.set((!bool.get()));
};


};

Ops.Boolean.Not.prototype = new CABLES.Op();
CABLES.OPS["6d123c9f-7485-4fd9-a5c2-76e59dcbeb34"]={f:Ops.Boolean.Not,objName:"Ops.Boolean.Not"};




// **************************************************************
// 
// Ops.Ui.Routing.RouteTrigger
// 
// **************************************************************

Ops.Ui.Routing.RouteTrigger = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exec = op.inTrigger("Trigger"),
    next = op.outTrigger("Next");

op.setUiAttribs({ "display": "reroute" });

exec.onTriggered = () =>
{
    next.trigger();
};


};

Ops.Ui.Routing.RouteTrigger.prototype = new CABLES.Op();
CABLES.OPS["0a2dc648-3a02-4559-b9af-cf3d47701e66"]={f:Ops.Ui.Routing.RouteTrigger,objName:"Ops.Ui.Routing.RouteTrigger"};




// **************************************************************
// 
// Ops.Gl.Shader.BasicMaterial_v3
// 
// **************************************************************

Ops.Gl.Shader.BasicMaterial_v3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"basicmaterial_frag":"{{MODULES_HEAD}}\n\nIN vec2 texCoord;\n\n#ifdef VERTEX_COLORS\nIN vec4 vertCol;\n#endif\n\n#ifdef HAS_TEXTURES\n    IN vec2 texCoordOrig;\n    #ifdef HAS_TEXTURE_DIFFUSE\n        UNI sampler2D tex;\n    #endif\n    #ifdef HAS_TEXTURE_OPACITY\n        UNI sampler2D texOpacity;\n   #endif\n#endif\n\n\n\nvoid main()\n{\n    {{MODULE_BEGIN_FRAG}}\n    vec4 col=color;\n\n\n    #ifdef HAS_TEXTURES\n        vec2 uv=texCoord;\n\n        #ifdef CROP_TEXCOORDS\n            if(uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) discard;\n        #endif\n\n        #ifdef HAS_TEXTURE_DIFFUSE\n            col=texture(tex,uv);\n\n            #ifdef COLORIZE_TEXTURE\n                col.r*=color.r;\n                col.g*=color.g;\n                col.b*=color.b;\n            #endif\n        #endif\n        col.a*=color.a;\n        #ifdef HAS_TEXTURE_OPACITY\n            #ifdef TRANSFORMALPHATEXCOORDS\n                uv=texCoordOrig;\n            #endif\n            #ifdef ALPHA_MASK_IR\n                col.a*=1.0-texture(texOpacity,uv).r;\n            #endif\n            #ifdef ALPHA_MASK_IALPHA\n                col.a*=1.0-texture(texOpacity,uv).a;\n            #endif\n            #ifdef ALPHA_MASK_ALPHA\n                col.a*=texture(texOpacity,uv).a;\n            #endif\n            #ifdef ALPHA_MASK_LUMI\n                col.a*=dot(vec3(0.2126,0.7152,0.0722), texture(texOpacity,uv).rgb);\n            #endif\n            #ifdef ALPHA_MASK_R\n                col.a*=texture(texOpacity,uv).r;\n            #endif\n            #ifdef ALPHA_MASK_G\n                col.a*=texture(texOpacity,uv).g;\n            #endif\n            #ifdef ALPHA_MASK_B\n                col.a*=texture(texOpacity,uv).b;\n            #endif\n            // #endif\n        #endif\n    #endif\n\n    {{MODULE_COLOR}}\n\n    #ifdef DISCARDTRANS\n        if(col.a<0.2) discard;\n    #endif\n\n    #ifdef VERTEX_COLORS\n        col*=vertCol;\n    #endif\n\n    outColor = col;\n}\n","basicmaterial_vert":"\n{{MODULES_HEAD}}\n\nOUT vec2 texCoord;\nOUT vec2 texCoordOrig;\n\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\n\n#ifdef HAS_TEXTURES\n    UNI float diffuseRepeatX;\n    UNI float diffuseRepeatY;\n    UNI float texOffsetX;\n    UNI float texOffsetY;\n#endif\n\n#ifdef VERTEX_COLORS\n    in vec4 attrVertColor;\n    out vec4 vertCol;\n\n#endif\n\n\nvoid main()\n{\n    mat4 mMatrix=modelMatrix;\n    mat4 modelViewMatrix;\n\n    norm=attrVertNormal;\n    texCoordOrig=attrTexCoord;\n    texCoord=attrTexCoord;\n    #ifdef HAS_TEXTURES\n        texCoord.x=texCoord.x*diffuseRepeatX+texOffsetX;\n        texCoord.y=(1.0-texCoord.y)*diffuseRepeatY+texOffsetY;\n    #endif\n\n    #ifdef VERTEX_COLORS\n        vertCol=attrVertColor;\n    #endif\n\n    vec4 pos = vec4(vPosition, 1.0);\n\n    #ifdef BILLBOARD\n       vec3 position=vPosition;\n       modelViewMatrix=viewMatrix*modelMatrix;\n\n       gl_Position = projMatrix * modelViewMatrix * vec4((\n           position.x * vec3(\n               modelViewMatrix[0][0],\n               modelViewMatrix[1][0],\n               modelViewMatrix[2][0] ) +\n           position.y * vec3(\n               modelViewMatrix[0][1],\n               modelViewMatrix[1][1],\n               modelViewMatrix[2][1]) ), 1.0);\n    #endif\n\n    {{MODULE_VERTEX_POSITION}}\n\n    #ifndef BILLBOARD\n        modelViewMatrix=viewMatrix * mMatrix;\n\n        {{MODULE_VERTEX_MODELVIEW}}\n\n    #endif\n\n    // mat4 modelViewMatrix=viewMatrix*mMatrix;\n\n    #ifndef BILLBOARD\n        // gl_Position = projMatrix * viewMatrix * modelMatrix * pos;\n        gl_Position = projMatrix * modelViewMatrix * pos;\n    #endif\n}\n",};
const render = op.inTrigger("render");
const trigger = op.outTrigger("trigger");
const shaderOut = op.outObject("shader", null, "shader");

shaderOut.ignoreValueSerialize = true;

op.toWorkPortsNeedToBeLinked(render);
op.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose", CABLES.OP_PORT_TYPE_FUNCTION);

const cgl = op.patch.cgl;
const shader = new CGL.Shader(cgl, "basicmaterialnew", this);
shader.addAttribute({ "type": "vec3", "name": "vPosition" });
shader.addAttribute({ "type": "vec2", "name": "attrTexCoord" });
shader.addAttribute({ "type": "vec3", "name": "attrVertNormal", "nameFrag": "norm" });
shader.addAttribute({ "type": "float", "name": "attrVertIndex" });

shader.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG", "MODULE_VERTEX_MODELVIEW"]);

shader.setSource(attachments.basicmaterial_vert, attachments.basicmaterial_frag);

shaderOut.setRef(shader);

render.onTriggered = doRender;

// rgba colors
const r = op.inValueSlider("r", Math.random());
const g = op.inValueSlider("g", Math.random());
const b = op.inValueSlider("b", Math.random());
const a = op.inValueSlider("a", 1);
r.setUiAttribs({ "colorPick": true });

// const uniColor=new CGL.Uniform(shader,'4f','color',r,g,b,a);
const colUni = shader.addUniformFrag("4f", "color", r, g, b, a);

shader.uniformColorDiffuse = colUni;

// diffuse outTexture

const diffuseTexture = op.inTexture("texture");
let diffuseTextureUniform = null;
diffuseTexture.onChange = updateDiffuseTexture;

const colorizeTexture = op.inValueBool("colorizeTexture", false);
const vertexColors = op.inValueBool("Vertex Colors", false);

// opacity texture
const textureOpacity = op.inTexture("textureOpacity");
let textureOpacityUniform = null;

const alphaMaskSource = op.inSwitch("Alpha Mask Source", ["Luminance", "R", "G", "B", "A", "1-A", "1-R"], "Luminance");
alphaMaskSource.setUiAttribs({ "greyout": true });
textureOpacity.onChange = updateOpacity;

const texCoordAlpha = op.inValueBool("Opacity TexCoords Transform", false);
const discardTransPxl = op.inValueBool("Discard Transparent Pixels");

// texture coords
const
    diffuseRepeatX = op.inValue("diffuseRepeatX", 1),
    diffuseRepeatY = op.inValue("diffuseRepeatY", 1),
    diffuseOffsetX = op.inValue("Tex Offset X", 0),
    diffuseOffsetY = op.inValue("Tex Offset Y", 0),
    cropRepeat = op.inBool("Crop TexCoords", false);

shader.addUniformFrag("f", "diffuseRepeatX", diffuseRepeatX);
shader.addUniformFrag("f", "diffuseRepeatY", diffuseRepeatY);
shader.addUniformFrag("f", "texOffsetX", diffuseOffsetX);
shader.addUniformFrag("f", "texOffsetY", diffuseOffsetY);

const doBillboard = op.inValueBool("billboard", false);

alphaMaskSource.onChange =
    doBillboard.onChange =
    discardTransPxl.onChange =
    texCoordAlpha.onChange =
    cropRepeat.onChange =
    vertexColors.onChange =
    colorizeTexture.onChange = updateDefines;

op.setPortGroup("Color", [r, g, b, a]);
op.setPortGroup("Color Texture", [diffuseTexture, vertexColors, colorizeTexture]);
op.setPortGroup("Opacity", [textureOpacity, alphaMaskSource, discardTransPxl, texCoordAlpha]);
op.setPortGroup("Texture Transform", [diffuseRepeatX, diffuseRepeatY, diffuseOffsetX, diffuseOffsetY, cropRepeat]);

updateOpacity();
updateDiffuseTexture();

op.preRender = function ()
{
    shader.bind();
    doRender();
};

function doRender()
{
    if (!shader) return;

    cgl.pushShader(shader);
    shader.popTextures();

    if (diffuseTextureUniform && diffuseTexture.get()) shader.pushTexture(diffuseTextureUniform, diffuseTexture.get());
    if (textureOpacityUniform && textureOpacity.get()) shader.pushTexture(textureOpacityUniform, textureOpacity.get());

    trigger.trigger();

    cgl.popShader();
}

function updateOpacity()
{
    if (textureOpacity.get())
    {
        if (textureOpacityUniform !== null) return;
        shader.removeUniform("texOpacity");
        shader.define("HAS_TEXTURE_OPACITY");
        if (!textureOpacityUniform)textureOpacityUniform = new CGL.Uniform(shader, "t", "texOpacity");
    }
    else
    {
        shader.removeUniform("texOpacity");
        shader.removeDefine("HAS_TEXTURE_OPACITY");
        textureOpacityUniform = null;
    }

    updateDefines();
}

function updateDiffuseTexture()
{
    if (diffuseTexture.get())
    {
        if (!shader.hasDefine("HAS_TEXTURE_DIFFUSE"))shader.define("HAS_TEXTURE_DIFFUSE");
        if (!diffuseTextureUniform)diffuseTextureUniform = new CGL.Uniform(shader, "t", "texDiffuse");
    }
    else
    {
        shader.removeUniform("texDiffuse");
        shader.removeDefine("HAS_TEXTURE_DIFFUSE");
        diffuseTextureUniform = null;
    }
    updateUi();
}

function updateUi()
{
    const hasTexture = diffuseTexture.isLinked() || textureOpacity.isLinked();
    diffuseRepeatX.setUiAttribs({ "greyout": !hasTexture });
    diffuseRepeatY.setUiAttribs({ "greyout": !hasTexture });
    diffuseOffsetX.setUiAttribs({ "greyout": !hasTexture });
    diffuseOffsetY.setUiAttribs({ "greyout": !hasTexture });
    colorizeTexture.setUiAttribs({ "greyout": !hasTexture });

    alphaMaskSource.setUiAttribs({ "greyout": !textureOpacity.get() });
    texCoordAlpha.setUiAttribs({ "greyout": !textureOpacity.get() });

    let notUsingColor = true;
    notUsingColor = diffuseTexture.get() && !colorizeTexture.get();
    r.setUiAttribs({ "greyout": notUsingColor });
    g.setUiAttribs({ "greyout": notUsingColor });
    b.setUiAttribs({ "greyout": notUsingColor });
}

function updateDefines()
{
    shader.toggleDefine("VERTEX_COLORS", vertexColors.get());
    shader.toggleDefine("CROP_TEXCOORDS", cropRepeat.get());
    shader.toggleDefine("COLORIZE_TEXTURE", colorizeTexture.get());
    shader.toggleDefine("TRANSFORMALPHATEXCOORDS", texCoordAlpha.get());
    shader.toggleDefine("DISCARDTRANS", discardTransPxl.get());
    shader.toggleDefine("BILLBOARD", doBillboard.get());

    shader.toggleDefine("ALPHA_MASK_ALPHA", alphaMaskSource.get() == "A");
    shader.toggleDefine("ALPHA_MASK_IALPHA", alphaMaskSource.get() == "1-A");
    shader.toggleDefine("ALPHA_MASK_IR", alphaMaskSource.get() == "1-R");
    shader.toggleDefine("ALPHA_MASK_LUMI", alphaMaskSource.get() == "Luminance");
    shader.toggleDefine("ALPHA_MASK_R", alphaMaskSource.get() == "R");
    shader.toggleDefine("ALPHA_MASK_G", alphaMaskSource.get() == "G");
    shader.toggleDefine("ALPHA_MASK_B", alphaMaskSource.get() == "B");
    updateUi();
}


};

Ops.Gl.Shader.BasicMaterial_v3.prototype = new CABLES.Op();
CABLES.OPS["ec55d252-3843-41b1-b731-0482dbd9e72b"]={f:Ops.Gl.Shader.BasicMaterial_v3,objName:"Ops.Gl.Shader.BasicMaterial_v3"};




// **************************************************************
// 
// Ops.Math.Subtract
// 
// **************************************************************

Ops.Math.Subtract = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    number1 = op.inValue("number1", 1),
    number2 = op.inValue("number2", 1),
    result = op.outNumber("result");

op.setUiAttribs({ "mathTitle": true });

number1.onChange =
    number2.onChange = exec;
exec();

function exec()
{
    let v = number1.get() - number2.get();
    if (!isNaN(v)) result.set(v);
}


};

Ops.Math.Subtract.prototype = new CABLES.Op();
CABLES.OPS["a4ffe852-d200-4b96-9347-68feb01122ca"]={f:Ops.Math.Subtract,objName:"Ops.Math.Subtract"};




// **************************************************************
// 
// Ops.Gl.Matrix.ScaleXYZViewMatrix
// 
// **************************************************************

Ops.Gl.Matrix.ScaleXYZViewMatrix = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    scaleX = op.inValueFloat("x", 1),
    scaleY = op.inValueFloat("y", 1),
    scaleZ = op.inValueFloat("z", 1),
    trigger = op.outTrigger("trigger");

const cgl = op.patch.cgl;
let vScale = vec3.create();
let transMatrix = mat4.create();
mat4.identity(transMatrix);

scaleX.onChange = scaleY.onChange = scaleZ.onChange = scaleChanged;
scaleChanged();

render.onTriggered = exec;

function exec()
{
    cgl.pushViewMatrix();
    mat4.multiply(cgl.vMatrix, cgl.vMatrix, transMatrix);
    trigger.trigger();
    cgl.popViewMatrix();
}

function scaleChanged()
{
    vec3.set(vScale, scaleX.get(), scaleY.get(), scaleZ.get());
    mat4.identity(transMatrix);
    mat4.scale(transMatrix, transMatrix, vScale);
}


};

Ops.Gl.Matrix.ScaleXYZViewMatrix.prototype = new CABLES.Op();
CABLES.OPS["8b1fa9c9-0c4d-41b6-9c4f-8f4b633a9d7f"]={f:Ops.Gl.Matrix.ScaleXYZViewMatrix,objName:"Ops.Gl.Matrix.ScaleXYZViewMatrix"};




// **************************************************************
// 
// Ops.Number.SwitchNumberMultiPort
// 
// **************************************************************

Ops.Number.SwitchNumberMultiPort = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inIndex = op.inInt("Index", 0),
    inStrs = op.inMultiPort("Numbers", CABLES.OP_PORT_TYPE_NUMBER),
    outResult = op.outNumber("Number"),
    outNum = op.outNumber("Num Values");

inIndex.onChange =
inStrs.onChange = () =>
{
    const valuePorts = inStrs.get();
    const idx = Math.ceil(Math.min(valuePorts.length - 1, Math.max(0, inIndex.get())));

    outResult.set(valuePorts[idx].get());
    outNum.set(valuePorts.length);
};


};

Ops.Number.SwitchNumberMultiPort.prototype = new CABLES.Op();
CABLES.OPS["6061c7ae-ac4b-45e7-ba7c-06b14ada2f19"]={f:Ops.Number.SwitchNumberMultiPort,objName:"Ops.Number.SwitchNumberMultiPort"};




// **************************************************************
// 
// Ops.Number.GateNumber
// 
// **************************************************************

Ops.Number.GateNumber = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    valueInPort = op.inValue("Value In", 0),
    passThroughPort = op.inValueBool("Pass Through"),
    inIfNot = op.inSwitch("When False", ["keep last number", "custom"], "keep last number"),
    inCustomNot = op.inFloat("Custom Value", 0),
    valueOutPort = op.outNumber("Value Out");

valueInPort.onChange = update;
passThroughPort.onChange = update;

valueInPort.changeAlways =
    valueOutPort.changeAlways = true;

inIfNot.onChange = updateUi;

function updateUi()
{
    inCustomNot.setUiAttribs({ "greyout": inIfNot.get() != "custom" });
    update();
}

function update()
{
    if (passThroughPort.get())
    {
        valueOutPort.set(valueInPort.get());
    }
    else
    {
        if (inIfNot.get() == "custom") valueOutPort.set(inCustomNot.get());
    }
}


};

Ops.Number.GateNumber.prototype = new CABLES.Op();
CABLES.OPS["594105c8-1fdb-4f3c-bbd5-29b9ad6b33e0"]={f:Ops.Number.GateNumber,objName:"Ops.Number.GateNumber"};




// **************************************************************
// 
// Ops.Ui.VizNumberBar
// 
// **************************************************************

Ops.Ui.VizNumberBar = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inNum = op.inFloat("Number", 0);
    // inDrawBar=op.inBool("Draw Bar",true),
    // inDrawNUm=op.inBool("Draw Number",true);

op.setUiAttrib({ "height": 100, "width": 200, "resizable": true });

let max = -Number.MAX_VALUE;
let min = Number.MAX_VALUE;

inNum.onLinkChanged = () =>
{
    max = -Number.MAX_VALUE;
    min = Number.MAX_VALUE;
};

op.renderVizLayer = (ctx, layer) =>
{
    ctx.fillStyle = "#222";
    ctx.fillRect(
        layer.x, layer.y,
        layer.width, layer.height);

    // if(inDrawBar.get())
    {
        max = Math.max(max, inNum.get());
        min = Math.min(min, inNum.get());

        if (op.uiAttribs.color)ctx.fillStyle = op.uiAttribs.color;
        else ctx.fillStyle = "#555";

        let a = CABLES.map(0, min, max, 0, layer.width);
        let b = CABLES.map(inNum.get(), min, max, 0, layer.width);

        let xMin = Math.min(a, b);
        let xMax = Math.max(a, b);

        ctx.fillRect(
            xMin + layer.x, layer.y,
            xMax - xMin, layer.height);
    }

    // if(inDrawNUm.get())
    {
        const padding = 10;
        if (op.uiAttribs.color)ctx.fillStyle = "#fff";
        else ctx.fillStyle = "#ccc";

        const fontSize = layer.height * 0.7;
        ctx.font = "normal " + fontSize + "px sourceCodePro";
        ctx.fillText(Math.round(inNum.get() * 10000) / 10000, layer.x + padding, layer.y + fontSize);
    }
};


};

Ops.Ui.VizNumberBar.prototype = new CABLES.Op();
CABLES.OPS["37575d2e-4ba6-4d2b-b00c-c503666867c5"]={f:Ops.Ui.VizNumberBar,objName:"Ops.Ui.VizNumberBar"};




// **************************************************************
// 
// Ops.Patch.P4Zknbo.InteractiveRectangle_v24
// 
// **************************************************************

Ops.Patch.P4Zknbo.InteractiveRectangle_v24 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("Trigger in"),
    trigger = op.outTrigger("Trigger out"),
    width = op.inValue("Width", 1),
    height = op.inValue("Height", 1),
    inId = op.inString("ID"),
    classPort = op.inString("Class"),
    pivotX = op.inValueSelect("Pivot x", ["center", "left", "right"]),
    pivotY = op.inValueSelect("Pivot y", ["center", "top", "bottom"]),
    axis = op.inValueSelect("Axis", ["xy", "xz"]),
    isInteractive = op.inValueBool("Is Interactive", true),
    renderRect = op.inValueBool("Render Rectangle", true),
    divVisible = op.inValueBool("Show Boundings", true),
    cursorPort = op.inValueSelect("Cursor", ["auto", "crosshair", "pointer", "Hand", "move", "n-resize", "ne-resize", "e-resize", "se-resize", "s-resize", "sw-resize", "w-resize", "nw-resize", "text", "wait", "help", "none"], "pointer"),
    active = op.inValueBool("Render", true);

const geomOut = op.outObject("geometry");
geomOut.ignoreValueSerialize = true;

const
    mouseOver = op.outBoolNum("Pointer Hover", false),
    mouseDown = op.outBoolNum("Pointer Down", false),
    outX = op.outNumber("Pointer X"),
    outY = op.outNumber("Pointer Y"),
    outTop = op.outNumber("Top"),
    outLeft = op.outNumber("Left"),
    outRight = op.outNumber("Right"),
    outBottom = op.outNumber("Bottom"),
    mouseClick = op.outTrigger("Left Click");

const elementPort = op.outObject("Dom Element");

active.setUiAttribs({ "title": "Active" });

const cgl = op.patch.cgl;
axis.set("xy");
pivotX.set("center");
pivotY.set("center");

const geom = new CGL.Geometry(op.name);
let mesh = null;
let div = null;
const m = mat4.create();
const trans = mat4.create();
const pos = vec3.create();
const divAlign = vec3.create();
const divAlignSize = vec3.create();

axis.onChange = rebuild;
pivotX.onChange = rebuild;
pivotY.onChange = rebuild;
width.onChange = rebuild;
height.onChange = rebuild;
cursorPort.onChange = updateCursor;
rebuild();

const modelMatrix = mat4.create();
const identViewMatrix = mat4.create();
const zeroVec3 = vec3.create();

render.onTriggered = function ()
{
    if (!div)
    {
        setUpDiv();
        addListeners();
        updateDivVisibility();
        updateIsInteractive();
    }
    updateDivSize();

    if (active.get() && renderRect.get() && mesh) mesh.render(cgl.getShader());

    trigger.trigger();
};

function rebuild()
{
    let w = width.get();
    let h = height.get();
    let x = 0;
    let y = 0;

    if (typeof w == "string")w = parseFloat(w);
    if (typeof h == "string")h = parseFloat(h);

    if (pivotX.get() == "center")
    {
        x = 0;
        divAlign[0] = -w / 2;
    }
    if (pivotX.get() == "right")
    {
        x = -w / 2;
    }
    if (pivotX.get() == "left")
    {
        x = w / 2;
    }

    if (pivotY.get() == "center")
    {
        y = 0;
        divAlign[1] = -h / 2;
    }
    if (pivotY.get() == "top") y = -h / 2;
    if (pivotY.get() == "bottom") y = +h / 2;

    const verts = [];
    const tc = [];
    const norms = [];
    const indices = [];

    const numRows = 1;
    const numColumns = 1;

    const stepColumn = w / numColumns;
    const stepRow = h / numRows;

    let c, r;

    for (r = 0; r <= numRows; r++)
    {
        for (c = 0; c <= numColumns; c++)
        {
            verts.push(c * stepColumn - width.get() / 2 + x);
            if (axis.get() == "xz") verts.push(0.0);
            verts.push(r * stepRow - height.get() / 2 + y);
            if (axis.get() == "xy") verts.push(0.0);

            tc.push(c / numColumns);
            tc.push(1.0 - r / numRows);

            if (axis.get() == "xz")
            {
                norms.push(0);
                norms.push(1);
                norms.push(0);
            }

            if (axis.get() == "xy")
            {
                norms.push(0);
                norms.push(0);
                norms.push(-1);
            }
        }
    }

    for (c = 0; c < numColumns; c++)
    {
        for (r = 0; r < numRows; r++)
        {
            const ind = c + (numColumns + 1) * r;
            const v1 = ind;
            const v2 = ind + 1;
            const v3 = ind + numColumns + 1;
            const v4 = ind + 1 + numColumns + 1;

            indices.push(v1);
            indices.push(v3);
            indices.push(v2);

            indices.push(v2);
            indices.push(v3);
            indices.push(v4);
        }
    }

    geom.clear();
    geom.vertices = verts;
    geom.texCoords = tc;
    geom.verticesIndices = indices;
    geom.vertexNormals = norms;

    if (!mesh) mesh = new CGL.Mesh(cgl, geom);
    else mesh.setGeom(geom);

    geomOut.set(null);
    geomOut.set(geom);
}

let divX = 0;
let divY = 0;
let divWidth = 0;
let divHeight = 0;

const mMatrix = mat4.create();
divVisible.onChange = updateDivVisibility;
inId.onChange = updateId;
classPort.onChange = updateClassNames;

function updateDivVisibility()
{
    if (div)
    {
        if (divVisible.get()) div.style.border = "1px solid red";
        else div.style.border = "none";
    }
}

function updateCursor()
{
    if (div)
    {
        div.style.cursor = cursorPort.get();
    }
}

function updateId()
{
    if (div)
    {
        div.setAttribute("id", inId.get());
    }
}

function updateDivSize()
{
    // var vp=cgl.getViewPort();

    mat4.multiply(mMatrix, cgl.vMatrix, cgl.mMatrix);
    vec3.transformMat4(pos, divAlign, mMatrix);
    vec3.transformMat4(trans, pos, cgl.pMatrix);

    const top = cgl.canvas.styleMarginTop || 0;
    const left = cgl.canvas.styleMarginLeft || 0;

    const x1 = (trans[0] * cgl.canvasWidth / 2) + cgl.canvasWidth / 2 + left;
    const y1 = (trans[1] * cgl.canvasHeight / 2) + cgl.canvasHeight / 2 + top;

    divAlignSize[0] = divAlign[0] + width.get();
    divAlignSize[1] = divAlign[1];

    vec3.transformMat4(pos, divAlignSize, mMatrix);
    vec3.transformMat4(trans, pos, cgl.pMatrix);

    const x2 = ((trans[0] * cgl.canvasWidth / 2) + cgl.canvasWidth / 2) + left;
    const y2 = ((trans[1] * cgl.canvasHeight / 2) + cgl.canvasHeight / 2 + top);

    divAlignSize[0] = divAlign[0];
    divAlignSize[1] = divAlign[1] + height.get();

    vec3.transformMat4(pos, divAlignSize, mMatrix);
    vec3.transformMat4(trans, pos, cgl.pMatrix);

    const x3 = ((trans[0] * cgl.canvasWidth / 2) + cgl.canvasWidth / 2) + left;
    const y3 = ((trans[1] * cgl.canvasHeight / 2) + cgl.canvasHeight / 2 + top);

    divAlignSize[0] = divAlign[0] + width.get();
    divAlignSize[1] = divAlign[1] + height.get();

    vec3.transformMat4(pos, divAlignSize, mMatrix);
    vec3.transformMat4(trans, pos, cgl.pMatrix);

    const x4 = ((trans[0] * cgl.canvasWidth / 2) + cgl.canvasWidth / 2) + left;
    const y4 = ((trans[1] * cgl.canvasHeight / 2) + cgl.canvasHeight / 2 + top);

    divX = Math.min(x1, x2, x3, x4);
    divY = Math.min(cgl.canvasHeight - y1, cgl.canvasHeight - y2, cgl.canvasHeight - y3, cgl.canvasHeight - y4);

    const xb = Math.max(x1, x2, x3, x4);
    const yb = Math.max(cgl.canvasHeight - y1, cgl.canvasHeight - y2, cgl.canvasHeight - y3, cgl.canvasHeight - y4);

    outTop.set(divY);
    outLeft.set(divX);
    outRight.set(xb);
    outBottom.set(yb);

    divWidth = Math.abs(xb - divX);
    divHeight = Math.abs(yb - divY);

    divX /= op.patch.cgl.pixelDensity;
    divY /= op.patch.cgl.pixelDensity;
    divWidth /= op.patch.cgl.pixelDensity;
    divHeight /= op.patch.cgl.pixelDensity;

    // div.style.left=divX+'px';
    // div.style.top=divY+'px';
    // div.style.width=divWidth+'px';
    // div.style.height=divHeight+'px';

    const divXpx = divX + "px";
    const divYpx = divY + "px";
    const divWidthPx = divWidth + "px";
    const divHeightPx = divHeight + "px";
    if (divXpx != div.style.left) div.style.left = divXpx;
    if (divYpx != div.style.top) div.style.top = divYpx;
    if (div.style.width != divWidthPx) div.style.width = divWidthPx;
    if (div.style.height != divHeightPx) div.style.height = divHeightPx;
}

function updateClassNames()
{
    if (div)
    {
        div.className = classPort.get();
    }
}

op.onDelete = function ()
{
    if (div)div.remove();
};

function setUpDiv()
{
    if (!div)
    {
        div = document.createElement("div");
        div.dataset.op = op.id;
        div.oncontextmenu = function (e)
        {
            e.preventDefault();
        };

        div.style.padding = "0px";
        div.style.position = "absolute";
        div.style["box-sizing"] = "border-box";
        div.style.border = "1px solid red";
        // div.style['border-left']="1px solid blue";
        // div.style['border-top']="1px solid green";
        div.style["z-index"] = "500";

        div.style["-webkit-user-select"] = "none";
        div.style["user-select"] = "none";
        div.style["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)";
        div.style["-webkit-touch-callout"] = "none";

        const canvas = op.patch.cgl.canvas.parentElement;
        canvas.appendChild(div);
        updateCursor();
        updateIsInteractive();
        updateId();
        updateClassNames();
    }
    updateDivSize();
    elementPort.set(div);
}

let listenerElement = null;

function onMouseMove(e)
{
    const offsetX = -width.get() / 2;
    const offsetY = -height.get() / 2;

    outX.set(Math.max(0.0, Math.min(1.0, e.offsetX / divWidth)));
    outY.set(Math.max(0.0, Math.min(1.0, 1.0 - e.offsetY / divHeight)));
}

function onMouseLeave(e)
{
    mouseDown.set(false);
    mouseOver.set(false);
}

function onMouseEnter(e)
{
    mouseOver.set(true);
}

function onMouseDown(e)
{
    mouseDown.set(true);
}

function onMouseUp(e)
{
    mouseDown.set(false);
}

function onmouseclick(e)
{
    mouseClick.trigger();
}

function onTouchMove(e)
{
    const targetEle = document.elementFromPoint(e.targetTouches[0].pageX, e.targetTouches[0].pageY);

    if (targetEle == div)
    {
        mouseOver.set(true);
        if (e.touches && e.touches.length > 0)
        {
            const rect = div.getBoundingClientRect(); // e.target
            const x = e.targetTouches[0].pageX - rect.left;
            const y = e.targetTouches[0].pageY - rect.top;

            const touch = e.touches[0];

            outX.set(Math.max(0.0, Math.min(1.0, x / divWidth)));
            outY.set(Math.max(0.0, Math.min(1.0, 1.0 - y / divHeight)));

            onMouseMove(touch);
        }
    }
    else
    {
        mouseOver.set(false);
    }
}

active.onChange = updateActiveRender;
function updateActiveRender()
{
    if (active.get())
    {
        addListeners();
        if (div) div.style.display = "block";
    }
    else
    {
        removeListeners();
        if (div) div.style.display = "none";
    }
}

isInteractive.onChange = updateIsInteractive;
function updateIsInteractive()
{
    if (isInteractive.get())
    {
        addListeners();
        if (div)div.style["pointer-events"] = "initial";
    }
    else
    {
        removeListeners();
        mouseDown.set(false);
        mouseOver.set(false);
        if (div)div.style["pointer-events"] = "none";
    }
}

function removeListeners()
{
    if (listenerElement)
    {
        document.removeEventListener("touchmove", onTouchMove);
        listenerElement.removeEventListener("touchend", onMouseUp);
        listenerElement.removeEventListener("touchstart", onMouseDown);

        listenerElement.removeEventListener("click", onmouseclick);
        listenerElement.removeEventListener("mousemove", onMouseMove);
        listenerElement.removeEventListener("mouseleave", onMouseLeave);
        listenerElement.removeEventListener("mousedown", onMouseDown);
        listenerElement.removeEventListener("mouseup", onMouseUp);
        listenerElement.removeEventListener("mouseenter", onMouseEnter);
        // listenerElement.removeEventListener('contextmenu', onClickRight);
        listenerElement = null;
    }
}

function addListeners()
{
    if (listenerElement)removeListeners();

    listenerElement = div;

    if (listenerElement)
    {
        document.addEventListener("touchmove", onTouchMove);
        listenerElement.addEventListener("touchend", onMouseUp);
        listenerElement.addEventListener("touchstart", onMouseDown);

        listenerElement.addEventListener("click", onmouseclick);
        listenerElement.addEventListener("mousemove", onMouseMove);
        listenerElement.addEventListener("mouseleave", onMouseLeave);
        listenerElement.addEventListener("mousedown", onMouseDown);
        listenerElement.addEventListener("mouseup", onMouseUp);
        listenerElement.addEventListener("mouseenter", onMouseEnter);
        // listenerElement.addEventListener('contextmenu', onClickRight);
    }
}


};

Ops.Patch.P4Zknbo.InteractiveRectangle_v24.prototype = new CABLES.Op();
CABLES.OPS["90cdf708-4629-4ee1-be2e-a623d1c8ee27"]={f:Ops.Patch.P4Zknbo.InteractiveRectangle_v24,objName:"Ops.Patch.P4Zknbo.InteractiveRectangle_v24"};




// **************************************************************
// 
// Ops.Graphics.Geometry.TransformGeometry
// 
// **************************************************************

Ops.Graphics.Geometry.TransformGeometry = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    geometry = op.inObject("Geometry"),
    transX = op.inValue("Translate X"),
    transY = op.inValue("Translate Y"),
    transZ = op.inValue("Translate Z"),
    scaleX = op.inValueSlider("Scale X", 1),
    scaleY = op.inValueSlider("Scale Y", 1),
    scaleZ = op.inValueSlider("Scale Z", 1),
    rotX = op.inValue("Rotation X"),
    rotY = op.inValue("Rotation Y"),
    rotZ = op.inValue("Rotation Z"),
    outGeom = op.outObject("Result", null, "geometry");

transX.onChange =
    transY.onChange =
    transZ.onChange =
    scaleX.onChange =
    scaleY.onChange =
    scaleZ.onChange =
    rotX.onChange =
    rotY.onChange =
    rotZ.onChange =
    geometry.onChange = update;

const rotVec = vec3.create();
const emptyVec = vec3.create();
const transVec = vec3.create();
const centerVec = vec3.create();

function update()
{
    const oldGeom = geometry.get();
    const i = 0;

    if (oldGeom && oldGeom.copy)
    {
        const geom = oldGeom.copy();

        for (let i = 0; i < geom.vertices.length; i += 3)
        {
            geom.vertices[i + 0] *= scaleX.get();
            geom.vertices[i + 1] *= scaleY.get();
            geom.vertices[i + 2] *= scaleZ.get();

            geom.vertices[i + 0] += transX.get();
            geom.vertices[i + 1] += transY.get();
            geom.vertices[i + 2] += transZ.get();
        }

        for (let i = 0; i < geom.vertices.length; i += 3)
        {
            vec3.set(rotVec,
                geom.vertices[i + 0],
                geom.vertices[i + 1],
                geom.vertices[i + 2]);

            vec3.rotateX(rotVec, rotVec, transVec, rotX.get() * CGL.DEG2RAD);
            vec3.rotateY(rotVec, rotVec, transVec, rotY.get() * CGL.DEG2RAD);
            vec3.rotateZ(rotVec, rotVec, transVec, rotZ.get() * CGL.DEG2RAD);

            geom.vertices[i + 0] = rotVec[0];
            geom.vertices[i + 1] = rotVec[1];
            geom.vertices[i + 2] = rotVec[2];
        }

        outGeom.setRef(geom);
    }
    else
    {
        outGeom.setRef(null);
    }
}


};

Ops.Graphics.Geometry.TransformGeometry.prototype = new CABLES.Op();
CABLES.OPS["9678fee2-5436-499c-b94d-2603cdbeb380"]={f:Ops.Graphics.Geometry.TransformGeometry,objName:"Ops.Graphics.Geometry.TransformGeometry"};




// **************************************************************
// 
// Ops.Gl.RenderGeometry_v2
// 
// **************************************************************

Ops.Gl.RenderGeometry_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    geometry = op.inObject("Geometry", null, "geometry"),
    inActive = op.inBool("Render Mesh", true),

    inVertNums = op.inBool("Add Vertex Numbers", true),
    trigger = op.outTrigger("trigger");

op.toWorkPortsNeedToBeLinked(geometry, render);

geometry.ignoreValueSerialize = true;

let mesh = null;
let needsUpdate = true;

geometry.onLinkChanged =
inVertNums.onChange =
    geometry.onChange = () => { needsUpdate = true; };

render.onTriggered = function ()
{
    if (needsUpdate) update();
    if (mesh && inActive.get()) mesh.render(op.patch.cgl.getShader());
    trigger.trigger();
};

function update()
{
    needsUpdate = false;
    const geom = geometry.get();
    if (geom && geom.isGeometry)
    {
        if (mesh)
        {
            mesh.dispose();
            mesh = null;
        }
        if (!mesh)
        {
            mesh = new CGL.Mesh(op.patch.cgl, geom);
            mesh.addVertexNumbers = inVertNums.get();
            mesh.setGeom(geom);
        }
    }
    else
    {
        mesh = null;
    }
}


};

Ops.Gl.RenderGeometry_v2.prototype = new CABLES.Op();
CABLES.OPS["0a9bdb39-8250-460e-8d99-50fe6825d956"]={f:Ops.Gl.RenderGeometry_v2,objName:"Ops.Gl.RenderGeometry_v2"};




// **************************************************************
// 
// Ops.Graphics.Geometry.GeometryExtrude
// 
// **************************************************************

Ops.Graphics.Geometry.GeometryExtrude = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inGeom = op.inObject("Geometry", null, "geometry"),
    inHeight = op.inFloat("Height", 0.5),
    inSmooth = op.inBool("Smooth", true),
    inExtrudeWalls = op.inBool("Walls", true),
    inCapTop = op.inBool("Top", true),
    inCapBottom = op.inBool("Bottom", true),
    outGeom = op.outObject("Result Geometry", null, "geometry");

function isClockwise(verts)
{
    let sum = 0.0;
    for (let i = 0; i < verts.length - 3; i += 3)
    {
        // Vector v1 = verts[i];
        // Vector v2 = verts[(i + 1) % verts.length];
        sum += (verts[i + 3] - verts[i]) * (verts[i + 3 + 1] + verts[i]);
    }
    return sum > 0.0;
}

inSmooth.onChange =
inExtrudeWalls.onChange =
inCapTop.onChange =
inCapBottom.onChange =
inHeight.onChange =
inGeom.onChange = () =>
{
    const geom = inGeom.get();

    if (!geom)
    {
        outGeom.set(null);
        return;
    }

    function edgesUsedMulti(idx1, idx2)
    {
        let count = 0;
        for (let i = 0; i < geom.verticesIndices.length; i += 3)
        {
            if (
                (
                    geom.verticesIndices[i] == idx1 ||
                    geom.verticesIndices[i + 1] == idx1 ||
                    geom.verticesIndices[i + 2] == idx1
                ) &&
                (
                    geom.verticesIndices[i] == idx2 ||
                    geom.verticesIndices[i + 1] == idx2 ||
                    geom.verticesIndices[i + 2] == idx2
                ))
            {
                count++;
                if (count == 2) return true;
            }
        }

        return false;
    }

    let verts = [];
    const indices = [];
    const h = inHeight.get();

    if (inExtrudeWalls.get())
        for (let i = 0; i < geom.verticesIndices.length; i += 3)
        {
            const vert1 = geom.verticesIndices[i];
            const vert2 = geom.verticesIndices[i + 1];
            const vert3 = geom.verticesIndices[i + 2];

            // 1
            if (!edgesUsedMulti(vert1, vert2))
            {
                const a = [];
                a.push([geom.vertices[vert1 * 3 + 0], geom.vertices[vert1 * 3 + 1], geom.vertices[vert1 * 3 + 2]]);
                a.push([geom.vertices[vert1 * 3 + 0], geom.vertices[vert1 * 3 + 1], geom.vertices[vert1 * 3 + 2] + h]);
                a.push([geom.vertices[vert2 * 3 + 0], geom.vertices[vert2 * 3 + 1], geom.vertices[vert2 * 3 + 2]]);

                if (!isClockwise(a)) verts = verts.concat(a);
                else verts = verts.concat(a.reverse());

                a.length = 0;
                a.push([geom.vertices[vert2 * 3 + 0], geom.vertices[vert2 * 3 + 1], geom.vertices[vert2 * 3 + 2] + h]);
                a.push([geom.vertices[vert2 * 3 + 0], geom.vertices[vert2 * 3 + 1], geom.vertices[vert2 * 3 + 2]]);
                a.push([geom.vertices[vert1 * 3 + 0], geom.vertices[vert1 * 3 + 1], geom.vertices[vert1 * 3 + 2] + h]);

                if (!isClockwise(a)) verts = verts.concat(a);
                else verts = verts.concat(a.reverse());
            }

            // 2
            if (!edgesUsedMulti(vert3, vert2))
            {
                const a = [];
                a.push([geom.vertices[vert3 * 3 + 0], geom.vertices[vert3 * 3 + 1], geom.vertices[vert3 * 3 + 2]]);
                a.push([geom.vertices[vert3 * 3 + 0], geom.vertices[vert3 * 3 + 1], geom.vertices[vert3 * 3 + 2] + h]);
                a.push([geom.vertices[vert2 * 3 + 0], geom.vertices[vert2 * 3 + 1], geom.vertices[vert2 * 3 + 2]]);

                if (isClockwise(a)) verts = verts.concat(a);
                else verts = verts.concat(a.reverse());

                a.length = 0;

                a.push([geom.vertices[vert2 * 3 + 0], geom.vertices[vert2 * 3 + 1], geom.vertices[vert2 * 3 + 2] + h]);
                a.push([geom.vertices[vert2 * 3 + 0], geom.vertices[vert2 * 3 + 1], geom.vertices[vert2 * 3 + 2]]);
                a.push([geom.vertices[vert3 * 3 + 0], geom.vertices[vert3 * 3 + 1], geom.vertices[vert3 * 3 + 2] + h]);

                if (isClockwise(a)) verts = verts.concat(a);
                else verts = verts.concat(a.reverse());
            }
            // 3

            if (!edgesUsedMulti(vert3, vert1))
            {
                const a = [];
                a.push([geom.vertices[vert3 * 3 + 0], geom.vertices[vert3 * 3 + 1], geom.vertices[vert3 * 3 + 2]]);
                a.push([geom.vertices[vert3 * 3 + 0], geom.vertices[vert3 * 3 + 1], geom.vertices[vert3 * 3 + 2] + h]);
                a.push([geom.vertices[vert1 * 3 + 0], geom.vertices[vert1 * 3 + 1], geom.vertices[vert1 * 3 + 2]]);

                if (!isClockwise(a)) verts = verts.concat(a);
                else verts = verts.concat(a.reverse());

                a.length = 0;

                a.push([geom.vertices[vert1 * 3 + 0], geom.vertices[vert1 * 3 + 1], geom.vertices[vert1 * 3 + 2] + h]);
                a.push([geom.vertices[vert1 * 3 + 0], geom.vertices[vert1 * 3 + 1], geom.vertices[vert1 * 3 + 2]]);
                a.push([geom.vertices[vert3 * 3 + 0], geom.vertices[vert3 * 3 + 1], geom.vertices[vert3 * 3 + 2] + h]);

                if (!isClockwise(a)) verts = verts.concat(a);
                else verts = verts.concat(a.reverse());
            }
        }

    const newGeom = CGL.Geometry.buildFromFaces(verts, "extrude", true);

    newGeom.calculateNormals();
    newGeom.calcTangentsBitangents();

    if (inCapBottom.get())
    {
        newGeom.merge(geom);
    }

    if (inCapTop.get())
    {
        const flippedgeo = geom.copy();

        for (let i = 0; i < flippedgeo.vertices.length; i += 3)
            flippedgeo.vertices[i + 2] += h;

        flippedgeo.flipVertDir();
        flippedgeo.flipNormals();
        newGeom.merge(flippedgeo);
    }

    newGeom.flipVertDir();

    if (!inSmooth.get())
    {
        newGeom.unIndex();
        newGeom.calculateNormals({ "forceZUp": true });
        newGeom.flipNormals();
    }

    outGeom.set(null);
    outGeom.set(newGeom);
};


};

Ops.Graphics.Geometry.GeometryExtrude.prototype = new CABLES.Op();
CABLES.OPS["64a34a29-000d-4350-875f-5b72b97a314f"]={f:Ops.Graphics.Geometry.GeometryExtrude,objName:"Ops.Graphics.Geometry.GeometryExtrude"};




// **************************************************************
// 
// Ops.Gl.Shader.MatCapMaterial_v3
// 
// **************************************************************

Ops.Gl.Shader.MatCapMaterial_v3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"matcap_frag":"{{MODULES_HEAD}}\n\n#ifdef HAS_TEXTURES\n    IN vec2 texCoord;\n#endif\n\nIN vec3 transformedNormal;\nIN vec3 viewSpacePosition;\n\nUNI vec4 inColor;\n\nUNI sampler2D texMatcap;\n\n#ifdef HAS_DIFFUSE_TEXTURE\n   UNI sampler2D texDiffuse;\n#endif\n\n#ifdef USE_SPECULAR_TEXTURE\n   UNI sampler2D texSpec;\n   UNI sampler2D texSpecMatCap;\n#endif\n\n#ifdef HAS_AO_TEXTURE\n    UNI sampler2D texAo;\n    UNI float aoIntensity;\n#endif\n\n#ifdef HAS_NORMAL_TEXTURE\n    IN vec3 vBiTangent;\n    IN vec3 vTangent;\n    IN mat3 normalMatrix;\n\n    UNI sampler2D texNormal;\n    UNI float normalMapIntensity;\n#endif\n\n#ifdef HAS_TEXTURE_OPACITY\n    UNI sampler2D texOpacity;\n#endif\n\n#ifdef CALC_SSNORMALS\n    IN vec3 eye_relative_pos;\n\n    // from https://www.enkisoftware.com/devlogpost-20150131-1-Normal_generation_in_the_pixel_shader\n    vec3 CalculateScreenSpaceNormals() {\n    \tvec3 dFdxPos = dFdx(eye_relative_pos);\n    \tvec3 dFdyPos = dFdy(eye_relative_pos);\n    \tvec3 screenSpaceNormal = normalize( cross(dFdxPos, dFdyPos));\n        return normalize(screenSpaceNormal);\n    }\n#endif\n\n// * taken & modified from https://github.com/mrdoob/three.js/blob/dev/src/renderers/shaders/ShaderLib/meshmatcap_frag.glsl.js\nvec2 getMatCapUV(vec3 viewSpacePosition, vec3 normal) {\n    vec3 viewDir = normalize(-viewSpacePosition);\n\tvec3 x = normalize(vec3(viewDir.z, 0.0, - viewDir.x));\n\tvec3 y = normalize(cross(viewDir, x));\n\tvec2 uv = vec2(dot(x, normal), dot(y, normal)) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks\n\treturn uv;\n}\n\nvoid main()\n{\n    vec3 viewSpaceNormal = normalize(transformedNormal);\n\n\n\n    #ifdef HAS_TEXTURES\n        vec2 texCoords = texCoord;\n        {{MODULE_BEGIN_FRAG}}\n    #endif\n\n\n\n    #ifdef DOUBLE_SIDED\n        if(!gl_FrontFacing) viewSpaceNormal *= -1.0;\n    #endif\n\n    #ifdef CALC_SSNORMALS\n        viewSpaceNormal = CalculateScreenSpaceNormals();\n    #endif\n\n\n\n   #ifdef HAS_NORMAL_TEXTURE\n        vec3 normalFromMap = texture( texNormal, texCoord ).xyz * 2.0 - 1.0;\n        normalFromMap = normalize(normalFromMap);\n\n        vec3 tangent;\n        vec3 binormal;\n\n        #ifdef CALC_TANGENT\n            vec3 c1 = cross(normalFromMap, vec3(0.0, 0.0, 1.0));\n            vec3 c2 = cross(normalFromMap, vec3(0.0, 1.0, 0.0));\n\n            tangent = c1;\n            tangent = normalize(tangent);\n            binormal = cross(viewSpaceNormal, tangent);\n            binormal = normalize(binormal);\n        #endif\n\n        #ifndef CALC_TANGENT\n            tangent = normalize(normalMatrix * vTangent);\n            vec3 bitangent = normalize(normalMatrix * vBiTangent);\n            binormal = normalize(cross(viewSpaceNormal, bitangent));\n        #endif\n\n        normalFromMap = normalize(\n            tangent * normalFromMap.x\n            + binormal * normalFromMap.y\n            + viewSpaceNormal * normalFromMap.z\n        );\n\n        vec3 mixedNormal = normalize(viewSpaceNormal + normalFromMap * normalMapIntensity);\n\n        viewSpaceNormal = mixedNormal;\n    #endif\n\n    vec4 col = texture(texMatcap, getMatCapUV(viewSpacePosition, viewSpaceNormal));\n\n    #ifdef HAS_DIFFUSE_TEXTURE\n        col = col*texture(texDiffuse, texCoords);\n    #endif\n\n    col.rgb *= inColor.rgb;\n\n\n    #ifdef HAS_AO_TEXTURE\n        col = col\n            * mix(\n                vec4(1.0,1.0,1.0,1.0),\n                texture(texAo, texCoords),\n                aoIntensity\n            );\n    #endif\n\n    #ifdef USE_SPECULAR_TEXTURE\n        vec4 spec = texture(texSpecMatCap, getMatCapUV(viewSpacePosition, viewSpaceNormal));\n        spec *= texture(texSpec, texCoords);\n        col += spec;\n    #endif\n\n    col.a *= inColor.a;\n\n    #ifdef HAS_TEXTURE_OPACITY\n        #ifdef TRANSFORMALPHATEXCOORDS\n            texCoords=vec2(texCoord.s,1.0-texCoord.t);\n            texCoords.y = 1. - texCoords.y;\n        #endif\n        #ifdef ALPHA_MASK_ALPHA\n            col.a*=texture(texOpacity,texCoords).a;\n        #endif\n        #ifdef ALPHA_MASK_LUMI\n            col.a*=dot(vec3(0.2126,0.7152,0.0722), texture(texOpacity,texCoords).rgb);\n        #endif\n        #ifdef ALPHA_MASK_R\n            col.a*=texture(texOpacity,texCoords).r;\n        #endif\n        #ifdef ALPHA_MASK_G\n            col.a*=texture(texOpacity,texCoords).g;\n        #endif\n        #ifdef ALPHA_MASK_B\n            col.a*=texture(texOpacity,texCoords).b;\n        #endif\n\n        #ifdef DISCARDTRANS\n            if(col.a < 0.2) discard;\n        #endif\n    #endif\n\n    {{MODULE_COLOR}}\n\n    outColor = col;\n}","matcap_vert":"IN vec3 vPosition;\n\n#ifdef HAS_TEXTURES\n    IN vec2 attrTexCoord;\n#endif\n\nIN vec3 attrVertNormal;\nIN float attrVertIndex;\n\n#ifdef HAS_NORMAL_TEXTURE\n    IN vec3 attrTangent;\n    IN vec3 attrBiTangent;\n    OUT vec3 vBiTangent;\n    OUT vec3 vTangent;\n#endif\n\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\nUNI vec3 camPos;\n\n#ifdef HAS_TEXTURES\n    UNI vec2 texOffset;\n    UNI vec2 texRepeat;\n    OUT vec2 texCoord;\n#endif\n\nOUT mat3 normalMatrix;\nOUT vec3 viewSpacePosition;\nOUT vec3 transformedNormal;\n\n{{MODULES_HEAD}}\n\n#ifdef CALC_SSNORMALS\n    // from https://www.enkisoftware.com/devlogpost-20150131-1-Normal_generation_in_the_pixel_shader\n    OUT vec3 eye_relative_pos;\n#endif\n\nmat3 transposeMat3(mat3 m) {\n    return mat3(m[0][0], m[1][0], m[2][0],\n        m[0][1], m[1][1], m[2][1],\n        m[0][2], m[1][2], m[2][2]);\n}\n\n mat3 inverseMat3(mat3 m) {\n    float a00 = m[0][0], a01 = m[0][1], a02 = m[0][2];\n    float a10 = m[1][0], a11 = m[1][1], a12 = m[1][2];\n    float a20 = m[2][0], a21 = m[2][1], a22 = m[2][2];\n\n    float b01 = a22 * a11 - a12 * a21;\n    float b11 = -a22 * a10 + a12 * a20;\n    float b21 = a21 * a10 - a11 * a20;\n\n    float det = a00 * b01 + a01 * b11 + a02 * b21;\n\n    return mat3(b01, (-a22 * a01 + a02 * a21), (a12 * a01 - a02 * a11),\n        b11, (a22 * a00 - a02 * a20), (-a12 * a00 + a02 * a10),\n        b21, (-a21 * a00 + a01 * a20), (a11 * a00 - a01 * a10)) / det;\n}\n\nvoid main()\n{\n    #ifdef HAS_TEXTURES\n        texCoord = texRepeat * vec2(attrTexCoord.x, attrTexCoord.y) + texOffset;\n        texCoord.y = 1. - texCoord.y;\n    #endif\n\n    mat4 mMatrix = modelMatrix;\n    mat4 mvMatrix;\n\n    #ifdef HAS_NORMAL_TEXTURE\n        vec3 tangent = attrTangent;\n        vec3 bitangent = attrBiTangent;\n        vTangent = attrTangent;\n        vBiTangent = attrBiTangent;\n    #endif\n\n    vec4 pos = vec4(vPosition, 1.);\n    vec3 norm = attrVertNormal;\n\n    {{MODULE_VERTEX_POSITION}}\n\n    mvMatrix = viewMatrix * mMatrix;\n    vec3 normal = norm;\n\n    normalMatrix = transposeMat3(inverseMat3(mat3(mvMatrix)));\n\n    vec3 fragPos = vec3((mvMatrix) * pos);\n    viewSpacePosition = normalize(fragPos);\n\n    #ifdef CALC_SSNORMALS\n        eye_relative_pos = -(vec3(viewMatrix * vec4(camPos, 1.)) - fragPos);\n    #endif\n\n    transformedNormal = normalize(mat3(normalMatrix) * normal);\n\n    mat4 modelViewMatrix=mvMatrix;\n    {{MODULE_VERTEX_MODELVIEW}}\n\n    gl_Position = projMatrix * modelViewMatrix * pos;\n\n}\n",};
const cgl = op.patch.cgl;

const
    render = op.inTrigger("Render"),
    textureMatcap = op.inTexture("MatCap"),
    textureDiffuse = op.inTexture("Diffuse"),
    textureNormal = op.inTexture("Normal"),
    textureSpec = op.inTexture("Specular Mask"),
    textureSpecMatCap = op.inTexture("Specular MatCap"),
    textureAo = op.inTexture("AO Texture"),
    textureOpacity = op.inTexture("Opacity Texture"),
    r = op.inValueSlider("r", 1),
    g = op.inValueSlider("g", 1),
    b = op.inValueSlider("b", 1),
    pOpacity = op.inValueSlider("Opacity", 1),
    aoIntensity = op.inValueSlider("AO Intensity", 1.0),
    normalMapIntensity = op.inFloatSlider("Normal Map Intensity", 1),
    repeatX = op.inValue("Repeat X", 1),
    repeatY = op.inValue("Repeat Y", 1),
    offsetX = op.inValue("Offset X", 0),
    offsetY = op.inValue("Offset Y", 0),
    inDoubleSided = op.inValueBool("Double Sided"),
    ssNormals = op.inValueBool("Screen Space Normals"),
    calcTangents = op.inValueBool("Calc normal tangents", true),
    texCoordAlpha = op.inValueBool("Opacity TexCoords Transform", false),
    discardTransPxl = op.inValueBool("Discard Transparent Pixels"),

    next = op.outTrigger("Next"),
    shaderOut = op.outObject("Shader");

r.setUiAttribs({ "colorPick": true });

const alphaMaskSource = op.inSwitch("Alpha Mask Source", ["Luminance", "R", "G", "B", "A"], "Luminance");
alphaMaskSource.setUiAttribs({ "greyout": true });

op.setPortGroup("Normals", [calcTangents, ssNormals, inDoubleSided]);
op.setPortGroup("Texture Opacity", [alphaMaskSource, texCoordAlpha, discardTransPxl]);
op.setPortGroup("Texture Transforms", [aoIntensity, normalMapIntensity, repeatX, repeatY, offsetX, offsetY]);
op.setPortGroup("Texture Maps", [textureDiffuse, textureNormal, textureSpec, textureSpecMatCap, textureAo, textureOpacity]);
op.setPortGroup("Color", [r, g, b, pOpacity]);

const shader = new CGL.Shader(cgl, "MatCapMaterialNew3");
const uniOpacity = new CGL.Uniform(shader, "f", "opacity", pOpacity);

shader.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG", "MODULE_VERTEX_MODELVIEW"]);
shader.setSource(attachments.matcap_vert, attachments.matcap_frag);
shaderOut.set(shader);

const textureMatcapUniform = new CGL.Uniform(shader, "t", "texMatcap");
let textureDiffuseUniform = null;
let textureNormalUniform = null;
let normalMapIntensityUniform = null;
let textureSpecUniform = null;
let textureSpecMatCapUniform = null;
let textureAoUniform = null;
const offsetUniform = new CGL.Uniform(shader, "2f", "texOffset", offsetX, offsetY);
const repeatUniform = new CGL.Uniform(shader, "2f", "texRepeat", repeatX, repeatY);

const aoIntensityUniform = new CGL.Uniform(shader, "f", "aoIntensity", aoIntensity);
const colorUniform = new CGL.Uniform(shader, "4f", "inColor", r, g, b, pOpacity);

inDoubleSided.onChange =
calcTangents.onChange = updateDefines;
updateDefines();

function updateDefines()
{
    shader.toggleDefine("DOUBLE_SIDED", inDoubleSided.get());

    if (calcTangents.get()) shader.define("CALC_TANGENT");
    else shader.removeDefine("CALC_TANGENT");
}

ssNormals.onChange = function ()
{
    if (ssNormals.get())
    {
        if (cgl.glVersion < 2)
        {
            cgl.gl.getExtension("OES_standard_derivatives");
            shader.enableExtension("GL_OES_standard_derivatives");
        }

        shader.define("CALC_SSNORMALS");
    }
    else shader.removeDefine("CALC_SSNORMALS");
};

textureMatcap.onChange = updateMatcap;

function updateMatcap()
{
    if (!cgl.defaultMatcapTex3)
    {
        const pixels = new Uint8Array(256 * 4);
        for (let x = 0; x < 16; x++)
        {
            for (let y = 0; y < 16; y++)
            {
                let c = y * 16;
                c *= Math.min(1, (x + y / 3) / 8);
                pixels[(x + y * 16) * 4 + 0] = pixels[(x + y * 16) * 4 + 1] = pixels[(x + y * 16) * 4 + 2] = c;
                pixels[(x + y * 16) * 4 + 3] = 255;
            }
        }

        cgl.defaultMatcapTex3 = new CGL.Texture(cgl);
        cgl.defaultMatcapTex3.initFromData(pixels, 16, 16, CGL.Texture.FILTER_LINEAR, CGL.Texture.WRAP_REPEAT);
    }
}

textureDiffuse.onChange = function ()
{
    if (textureDiffuse.get())
    {
        if (textureDiffuseUniform !== null) return;
        shader.define("HAS_DIFFUSE_TEXTURE");
        shader.removeUniform("texDiffuse");
        textureDiffuseUniform = new CGL.Uniform(shader, "t", "texDiffuse");
    }
    else
    {
        shader.removeDefine("HAS_DIFFUSE_TEXTURE");
        shader.removeUniform("texDiffuse");
        textureDiffuseUniform = null;
    }
};

textureNormal.onChange = function ()
{
    if (textureNormal.get())
    {
        if (textureNormalUniform !== null) return;
        shader.define("HAS_NORMAL_TEXTURE");
        shader.removeUniform("texNormal");
        textureNormalUniform = new CGL.Uniform(shader, "t", "texNormal");
        if (!normalMapIntensityUniform) normalMapIntensityUniform = new CGL.Uniform(shader, "f", "normalMapIntensity", normalMapIntensity);
    }
    else
    {
        shader.removeDefine("HAS_NORMAL_TEXTURE");
        shader.removeUniform("texNormal");
        textureNormalUniform = null;
    }
};

textureAo.onChange = function ()
{
    if (textureAo.get())
    {
        if (textureAoUniform !== null) return;
        shader.define("HAS_AO_TEXTURE");
        shader.removeUniform("texAo");
        textureAoUniform = new CGL.Uniform(shader, "t", "texAo");
    }
    else
    {
        shader.removeDefine("HAS_AO_TEXTURE");
        shader.removeUniform("texAo");
        textureAoUniform = null;
    }
};

textureSpec.onChange = textureSpecMatCap.onChange = function ()
{
    if (textureSpec.get() && textureSpecMatCap.get())
    {
        if (textureSpecUniform !== null) return;
        shader.define("USE_SPECULAR_TEXTURE");
        shader.removeUniform("texSpec");
        shader.removeUniform("texSpecMatCap");
        textureSpecUniform = new CGL.Uniform(shader, "t", "texSpec");
        textureSpecMatCapUniform = new CGL.Uniform(shader, "t", "texSpecMatCap");
    }
    else
    {
        shader.removeDefine("USE_SPECULAR_TEXTURE");
        shader.removeUniform("texSpec");
        shader.removeUniform("texSpecMatCap");
        textureSpecUniform = null;
        textureSpecMatCapUniform = null;
    }
};

// TEX OPACITY

function updateAlphaMaskMethod()
{
    if (alphaMaskSource.get() == "Alpha Channel") shader.define("ALPHA_MASK_ALPHA");
    else shader.removeDefine("ALPHA_MASK_ALPHA");

    if (alphaMaskSource.get() == "Luminance") shader.define("ALPHA_MASK_LUMI");
    else shader.removeDefine("ALPHA_MASK_LUMI");

    if (alphaMaskSource.get() == "R") shader.define("ALPHA_MASK_R");
    else shader.removeDefine("ALPHA_MASK_R");

    if (alphaMaskSource.get() == "G") shader.define("ALPHA_MASK_G");
    else shader.removeDefine("ALPHA_MASK_G");

    if (alphaMaskSource.get() == "B") shader.define("ALPHA_MASK_B");
    else shader.removeDefine("ALPHA_MASK_B");
}

alphaMaskSource.onChange = updateAlphaMaskMethod;
textureOpacity.onChange = updateOpacity;

let textureOpacityUniform = null;

function updateOpacity()
{
    if (textureOpacity.get())
    {
        if (textureOpacityUniform !== null) return;
        shader.removeUniform("texOpacity");
        shader.define("HAS_TEXTURE_OPACITY");
        if (!textureOpacityUniform) textureOpacityUniform = new CGL.Uniform(shader, "t", "texOpacity");

        alphaMaskSource.setUiAttribs({ "greyout": false });
        discardTransPxl.setUiAttribs({ "greyout": false });
        texCoordAlpha.setUiAttribs({ "greyout": false });
    }
    else
    {
        shader.removeUniform("texOpacity");
        shader.removeDefine("HAS_TEXTURE_OPACITY");
        textureOpacityUniform = null;

        alphaMaskSource.setUiAttribs({ "greyout": true });
        discardTransPxl.setUiAttribs({ "greyout": true });
        texCoordAlpha.setUiAttribs({ "greyout": true });
    }
    updateAlphaMaskMethod();
}

discardTransPxl.onChange = function ()
{
    if (discardTransPxl.get()) shader.define("DISCARDTRANS");
    else shader.removeDefine("DISCARDTRANS");
};

texCoordAlpha.onChange = function ()
{
    if (texCoordAlpha.get()) shader.define("TRANSFORMALPHATEXCOORDS");
    else shader.removeDefine("TRANSFORMALPHATEXCOORDS");
};

function checkUiErrors()
{
    if (textureSpec.get() && !textureSpecMatCap.get())
    {
        op.setUiError("specNoMatCapSpec", "You connected a specular texture but have not connected a specular matcap texture. You need to connect both texture inputs for the specular input to work.", 1);
        op.setUiError("noSpecMatCapSpec", null);
    }
    else if (!textureSpec.get() && textureSpecMatCap.get())
    {
        op.setUiError("noSpecMatCapSpec", "You connected a specular matcap texture but have not connected a specular texture. You need to connect both texture inputs for the specular input to work.", 1);
        op.setUiError("specNoMatCapSpec", null);
    }
    else if (textureSpec.get() && textureSpecMatCap.get())
    {
        op.setUiError("specNoMatCapSpec", null);
        op.setUiError("noSpecMatCapSpec", null);
    }
    else
    {
        op.setUiError("specNoMatCapSpec", null);
        op.setUiError("noSpecMatCapSpec", null);
    }
}

render.onTriggered = function ()
{
    checkUiErrors();

    if (!cgl.defaultMatcapTex3) updateMatcap();
    shader.popTextures();

    const tex = textureMatcap.get() || cgl.defaultMatcapTex3;
    shader.pushTexture(textureMatcapUniform, tex.tex);

    if (textureDiffuse.get() && textureDiffuseUniform) shader.pushTexture(textureDiffuseUniform, textureDiffuse.get().tex);
    if (textureNormal.get() && textureNormalUniform) shader.pushTexture(textureNormalUniform, textureNormal.get().tex);
    if (textureSpec.get() && textureSpecUniform) shader.pushTexture(textureSpecUniform, textureSpec.get().tex);
    if (textureSpecMatCap.get() && textureSpecMatCapUniform) shader.pushTexture(textureSpecMatCapUniform, textureSpecMatCap.get().tex);
    if (textureAo.get() && textureAoUniform) shader.pushTexture(textureAoUniform, textureAo.get().tex);
    if (textureOpacity.get() && textureOpacityUniform) shader.pushTexture(textureOpacityUniform, textureOpacity.get().tex);

    cgl.pushShader(shader);
    next.trigger();
    cgl.popShader();
};


};

Ops.Gl.Shader.MatCapMaterial_v3.prototype = new CABLES.Op();
CABLES.OPS["c1dd6e76-61b4-471a-b8d1-f550a5a9a4f4"]={f:Ops.Gl.Shader.MatCapMaterial_v3,objName:"Ops.Gl.Shader.MatCapMaterial_v3"};




// **************************************************************
// 
// Ops.Gl.Textures.NoiseTexture
// 
// **************************************************************

Ops.Gl.Textures.NoiseTexture = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const

    inWidth = op.inValueInt("Width", 256),
    inHeight = op.inValueInt("Height", 256),
    tfilter = op.inSwitch("Filter", ["nearest", "linear"], "nearest"),
    wrap = op.inValueSelect("Wrap", ["repeat", "mirrored repeat", "clamp to edge"], "repeat"),
    inColor = op.inValueBool("Color", false),
    inPixel = op.inDropDown("Pixel Format", CGL.Texture.PIXELFORMATS, CGL.Texture.PFORMATSTR_RGBA8UB),
    inInteger = op.inBool("Integer", false),
    inSeed = op.inFloat("Seed", 1),
    inOutR = op.inBool("Channel R", true),
    inMinR = op.inFloat("Min R", 0),
    inMaxR = op.inFloat("Max R", 1),
    inOutG = op.inBool("Channel G", true),
    inMinG = op.inFloat("Min G", 0),
    inMaxG = op.inFloat("Max G", 1),
    inOutB = op.inBool("Channel B", true),
    inMinB = op.inFloat("Min B", 0),
    inMaxB = op.inFloat("Max B", 1),
    inOutA = op.inBool("Channel A", true),
    inMinA = op.inFloat("Min A", 1),
    inMaxA = op.inFloat("Max A", 1),
    outTex = op.outTexture("Texture"),
    outNumPixel = op.outNumber("Total Pixel");

const cgl = op.patch.cgl;
let to = null;
let loadingId = null;

inSeed.onChange =
    inWidth.onChange =
    inHeight.onChange =
    inPixel.onChange =
    inMinR.onChange =
    inMaxR.onChange =
    inMinG.onChange =
    inMinA.onChange =
    inMaxG.onChange =
    inMaxA.onChange =
    inMinB.onChange =
    inMaxB.onChange =
    inOutR.onChange =
    inOutB.onChange =
    inOutG.onChange =
    inOutA.onChange =
    tfilter.onChange =
    wrap.onChange =
    inInteger.onChange =
    inColor.onChange = createSoon;

createSoon();

function createSoon()
{
    if (loadingId)cgl.patch.loading.finished(loadingId);
    loadingId = cgl.patch.loading.start("noisetexture", "noisetexture");
    cgl.addNextFrameOnceCallback(update);
}

function update()
{
    const isFp = inPixel.get().indexOf("float") > -1;
    if (!isFp)
    {
        if (
            inMinR.get() < 0.0 || inMinR.get() > 1.0 ||
            inMinG.get() < 0.0 || inMinG.get() > 1.0 ||
            inMinB.get() < 0.0 || inMinB.get() > 1.0 ||
            inMaxR.get() < 0.0 || inMaxR.get() > 1.0 ||
            inMaxA.get() < 0.0 || inMaxA.get() > 1.0 ||
            inMaxG.get() < 0.0 || inMaxG.get() > 1.0 ||
            inMaxB.get() < 0.0 || inMaxB.get() > 1.0) op.setUiError("nonfprange", "Non floating point textures have to be between 0 and 1");
        else op.setUiError("nonfprange", null);
    }
    else op.setUiError("nonfprange", null);

    inMinG.setUiAttribs({ "greyout": !inColor.get() });
    inMaxG.setUiAttribs({ "greyout": !inColor.get() });
    inMinB.setUiAttribs({ "greyout": !inColor.get() });
    inMaxB.setUiAttribs({ "greyout": !inColor.get() });
    inMaxA.setUiAttribs({ "greyout": !inColor.get() });

    let width = Math.ceil(inWidth.get());
    let height = Math.ceil(inHeight.get());

    if (width < 1)width = 1;
    if (height < 1)height = 1;

    let pixels;
    const num = width * 4 * height;

    const minR = inMinR.get();
    const diffR = inMaxR.get() - minR;

    const minG = inMinG.get();
    const diffG = inMaxG.get() - minG;

    const minB = inMinB.get();
    const diffB = inMaxB.get() - minB;

    const minA = inMinA.get();
    const diffA = inMaxA.get() - minA;

    Math.randomSeed = inSeed.get();

    if (isFp)
    {
        pixels = new Float32Array(num);

        if (inColor.get())
        {
            for (let i = 0; i < num; i += 4)
            {
                pixels[i + 0] = minR + Math.seededRandom() * diffR;
                pixels[i + 1] = minG + Math.seededRandom() * diffG;
                pixels[i + 2] = minB + Math.seededRandom() * diffB;
                pixels[i + 3] = minA + Math.seededRandom() * diffA;
            }
        }
        else
        {
            for (let i = 0; i < num; i += 4)
            {
                let c = minR + Math.seededRandom() * diffR;
                pixels[i + 0] = pixels[i + 1] = pixels[i + 2] = c;
                pixels[i + 3] = 1;
            }
        }
    }
    else
    {
        pixels = new Uint8Array(num);

        if (inColor.get())
        {
            for (let i = 0; i < num; i += 4)
            {
                pixels[i + 0] = (minR + Math.seededRandom() * diffR) * 255;
                pixels[i + 1] = (minG + Math.seededRandom() * diffG) * 255;
                pixels[i + 2] = (minB + Math.seededRandom() * diffB) * 255;
                pixels[i + 3] = (minA + Math.seededRandom() * diffA) * 255;
            }
        }
        else
        {
            for (let i = 0; i < num; i += 4)
            {
                pixels[i + 0] =
                pixels[i + 1] =
                pixels[i + 2] = (minR + Math.seededRandom() * diffR) * 255;
                pixels[i + 3] = 255;
            }
        }
    }

    if (inInteger.get())
    {
        for (let i = 0; i < pixels.length; i++)pixels[i] = Math.round(pixels[i] - 0.5);
    }

    if (!inOutR.get()) for (let i = 0; i < num; i += 4)pixels[i + 0] = 0.0;
    if (!inOutG.get()) for (let i = 0; i < num; i += 4)pixels[i + 1] = 0.0;
    if (!inOutB.get()) for (let i = 0; i < num; i += 4)pixels[i + 2] = 0.0;
    if (!inOutA.get()) for (let i = 0; i < num; i += 4)pixels[i + 3] = 0.0;

    let cgl_filter = CGL.Texture.FILTER_NEAREST;
    if (tfilter.get() == "linear") cgl_filter = CGL.Texture.FILTER_LINEAR;
    // else if (tfilter.get() == "mipmap") cgl_filter = CGL.Texture.FILTER_MIPMAP;
    // else if (tfilter.get() == "Anisotropic") cgl_filter = CGL.Texture.FILTER_ANISOTROPIC;

    let cgl_wrap = CGL.Texture.WRAP_REPEAT;
    if (wrap.get() == "mirrored repeat") cgl_wrap = CGL.Texture.WRAP_MIRRORED_REPEAT;
    if (wrap.get() == "clamp to edge") cgl_wrap = CGL.Texture.WRAP_CLAMP_TO_EDGE;

    let tex = new CGL.Texture(cgl, { "isFloatingPointTexture": isFp, "name": "noisetexture" });

    tex.initFromData(pixels, width, height, cgl_filter, cgl_wrap);

    outNumPixel.set(width * height);
    outTex.setRef(tex);
    loadingId = cgl.patch.loading.finished(loadingId);
}


};

Ops.Gl.Textures.NoiseTexture.prototype = new CABLES.Op();
CABLES.OPS["b781bc6b-b2cf-44fe-80eb-a840e430d27d"]={f:Ops.Gl.Textures.NoiseTexture,objName:"Ops.Gl.Textures.NoiseTexture"};




// **************************************************************
// 
// Ops.Gl.ShaderEffects.FresnelGlow
// 
// **************************************************************

Ops.Gl.ShaderEffects.FresnelGlow = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"fresnel_body_frag":"#ifdef ENABLE_FRESNEL_MOD\n    vec3 MOD_fragNormal = normalize(MOD_norm);\n    col.rgb += MOD_inFresnel.rgb *\n        MOD_CalculateFresnel(vec3(MOD_cameraSpace_pos), MOD_fragNormal)\n        * MOD_inFresnel.w;\n#endif\n","fresnel_body_vert":"#ifdef ENABLE_FRESNEL_MOD\n    MOD_cameraSpace_pos = viewMatrix*mMatrix * pos;\n    MOD_norm = norm;\n    MOD_viewMatrix = mat3(viewMatrix);\n#endif","fresnel_head_frag":"IN vec4 MOD_cameraSpace_pos;\nIN mat3 MOD_viewMatrix;\nIN vec3 MOD_norm;\n\n#ifdef ENABLE_FRESNEL_MOD\n    float MOD_CalculateFresnel(vec3 cameraSpace_pos, vec3 normal)\n    {\n\n        vec3 nDirection = normalize(cameraSpace_pos);\n        vec3 nNormal = normalize(MOD_viewMatrix * normal);\n        vec3 halfDirection = normalize(nNormal + nDirection);\n\n        float cosine = dot(halfDirection, nDirection);\n        float product = max(cosine, 0.0);\n        float factor = pow(product, MOD_inFresnelExponent);\n\n        return 5. * factor;\n\n\n    }\n#endif\n","fresnel_head_vert":"#ifdef ENABLE_FRESNEL_MOD\n    OUT vec4 MOD_cameraSpace_pos;\n    OUT mat3 MOD_viewMatrix;\n    OUT vec3 MOD_norm;\n#endif",};
const cgl = op.patch.cgl;

const inTrigger = op.inTrigger("Trigger In");
const inActive = op.inBool("Active", true);
const inR = op.inFloatSlider("R", Math.random());
const inG = op.inFloatSlider("G", Math.random());
const inB = op.inFloatSlider("B", Math.random());
inR.setUiAttribs({ "colorPick": true });
op.setPortGroup("Color", [inR, inG, inB]);
const inIntensity = op.inFloat("Fresnel Intensity", 1);
const inExponent = op.inFloat("Fresnel Exponent", 2.5);
op.setPortGroup("Fresnel Settings", [inIntensity, inExponent]);

inActive.onChange = () =>
{
    mod.toggleDefine("ENABLE_FRESNEL_MOD", inActive);
    inR.setUiAttribs({ "greyout": !inActive.get() });
    inG.setUiAttribs({ "greyout": !inActive.get() });
    inB.setUiAttribs({ "greyout": !inActive.get() });
    inIntensity.setUiAttribs({ "greyout": !inActive.get() });
    inExponent.setUiAttribs({ "greyout": !inActive.get() });
};

const outTrigger = op.outTrigger("Trigger Out");


const mod = new CGL.ShaderModifier(cgl, "fresnelGlow");
mod.toggleDefine("ENABLE_FRESNEL_MOD", inActive);

mod.addModule({
    "priority": 2,
    "title": "fresnelGlow",
    "name": "MODULE_VERTEX_POSITION",
    "srcHeadVert": attachments.fresnel_head_vert,
    "srcBodyVert": attachments.fresnel_body_vert
});

mod.addModule({
    "title": "fresnelGlow",
    "name": "MODULE_COLOR",
    "srcHeadFrag": attachments.fresnel_head_frag,
    "srcBodyFrag": attachments.fresnel_body_frag
});

mod.addUniform("4f", "MOD_inFresnel", inR, inG, inB, inIntensity);
mod.addUniform("f", "MOD_inFresnelExponent", inExponent);

inTrigger.onTriggered = () =>
{
    mod.bind();
    outTrigger.trigger();
    mod.unbind();
};


};

Ops.Gl.ShaderEffects.FresnelGlow.prototype = new CABLES.Op();
CABLES.OPS["89979937-68a6-4736-8241-3c6b748103d4"]={f:Ops.Gl.ShaderEffects.FresnelGlow,objName:"Ops.Gl.ShaderEffects.FresnelGlow"};




// **************************************************************
// 
// Ops.Gl.GradientTexture
// 
// **************************************************************

Ops.Gl.GradientTexture = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const inGrad = op.inGradient("Gradient"),
    inDir = op.inValueSelect("Direction", ["X", "XX", "Y", "YY", "XY", "YX", "Radial"], "X"),
    inSmoothstep = op.inValueBool("Smoothstep", false),
    inStep = op.inBool("Step", false),
    inFlip = op.inBool("Flip", false),
    inSRGB = op.inBool("sRGB", false),
    inOklab = op.inBool("Oklab", false),
    inSize = op.inValueInt("Size", 256),
    tfilter = op.inSwitch("filter", ["nearest", "linear", "mipmap"], "linear"),
    twrap = op.inValueSelect("wrap", ["clamp to edge", "repeat", "mirrored repeat"], "clamp to edge"),
    inNoise = op.inFloatSlider("Dither", 0),
    inGradArray = op.inArray("Gradient Array"),
    inRandom = op.inTriggerButton("Randomize Colors"),
    outTex = op.outTexture("Texture"),
    outColors = op.outArray("Colors", null, 3),
    outColorPos = op.outArray("Colors Pos", null, 1);

const cgl = op.patch.cgl;
let timeout = null;
inGrad.setUiAttribs({ "editShortcut": true });

const bluenoise = [221, 125, 40, 94, 163, 50, 214, 174, 69, 229, 135, 79, 25, 92, 217, 129, 103, 155, 16, 237, 168, 75, 212, 126, 203, 157, 104, 223, 50, 96, 115, 189, 0, 104, 199, 16, 185, 242, 83, 26, 123, 95, 191, 175, 247, 159, 32, 170, 0, 88, 203, 133, 106, 46, 227, 14, 35, 246, 66, 20, 240, 205, 36, 159, 74, 252, 148, 231, 132, 117, 6, 145, 254, 39, 222, 5, 111, 46, 67, 197, 228, 116, 181, 66, 25, 245, 98, 139, 172, 89, 190, 149, 127, 177, 64, 138, 210, 169, 58, 28, 70, 100, 206, 188, 164, 107, 60, 150, 203, 126, 235, 142, 56, 249, 38, 222, 148, 178, 195, 56, 115, 230, 45, 108, 7, 84, 234, 21, 44, 90, 110, 216, 178, 37, 226, 53, 14, 77, 212, 31, 86, 180, 100, 23, 82, 14, 162, 93, 122, 6, 81, 156, 24, 209, 75, 255, 163, 218, 196, 121, 237, 187, 9, 152, 247, 136, 158, 91, 128, 232, 169, 137, 251, 10, 216, 154, 188, 131, 211, 71, 200, 34, 236, 216, 129, 13, 179, 136, 32, 54, 99, 146, 33, 131, 202, 49, 84, 18, 64, 197, 245, 114, 21, 193, 52, 74, 118, 44, 243, 105, 173, 50, 252, 110, 63, 166, 41, 102, 199, 62, 117, 184, 15, 77, 250, 162, 69, 120, 231, 107, 213, 2, 177, 43, 67, 102, 159, 238, 171, 206, 64, 29, 233, 10, 151, 135, 185, 87, 247, 147, 223, 91, 241, 152, 225, 175, 3, 102, 220, 25, 191, 170, 36, 143, 81, 152, 209, 224, 133, 35, 93, 2, 145, 87, 124, 193, 97, 22, 228, 1, 120, 51, 171, 8, 26, 210, 108, 48, 205, 59, 179, 92, 147, 253, 124, 99, 237, 186, 11, 120, 19, 181, 229, 112, 198, 160, 220, 76, 42, 210, 160, 71, 202, 31, 78, 190, 130, 67, 86, 138, 115, 156, 243, 14, 46, 74, 57, 219, 28, 51, 90, 250, 59, 81, 140, 47, 255, 17, 58, 181, 243, 114, 56, 178, 239, 139, 228, 156, 251, 40, 167, 232, 28, 38, 82, 136, 206, 161, 9, 196, 106, 139, 167, 204, 150, 195, 218, 70, 172, 35, 132, 103, 146, 27, 89, 128, 16, 107, 96, 57, 119, 201, 15, 187, 239, 126, 194, 225, 112, 182, 234, 131, 174, 240, 72, 39, 109, 29, 8, 100, 122, 207, 231, 4, 166, 224, 198, 153, 217, 44, 183, 212, 4, 93, 143, 72, 99, 172, 64, 0, 97, 34, 85, 66, 20, 208, 3, 125, 243, 164, 186, 235, 156, 82, 191, 67, 248, 49, 80, 10, 253, 68, 23, 162, 244, 179, 49, 215, 24, 151, 246, 51, 214, 153, 251, 118, 45, 157, 98, 224, 53, 88, 134, 62, 42, 23, 116, 94, 140, 33, 121, 188, 169, 141, 113, 76, 33, 131, 227, 110, 11, 202, 78, 122, 168, 18, 141, 194, 221, 80, 187, 142, 177, 210, 18, 249, 144, 221, 180, 12, 201, 215, 106, 60, 91, 226, 200, 236, 150, 85, 61, 164, 185, 133, 42, 229, 187, 73, 55, 101, 27, 235, 59, 12, 35, 75, 113, 199, 101, 163, 237, 57, 152, 174, 234, 134, 1, 37, 53, 123, 193, 6, 208, 253, 34, 91, 145, 104, 8, 240, 211, 175, 129, 164, 109, 253, 123, 230, 171, 6, 50, 79, 27, 127, 73, 43, 19, 246, 161, 211, 103, 17, 172, 96, 46, 117, 70, 241, 219, 27, 162, 115, 88, 38, 4, 148, 204, 92, 189, 154, 63, 130, 217, 188, 111, 254, 208, 101, 86, 191, 144, 75, 180, 249, 65, 137, 233, 157, 18, 171, 192, 49, 66, 201, 137, 246, 218, 51, 71, 15, 43, 214, 29, 95, 239, 38, 139, 165, 7, 225, 124, 30, 59, 112, 221, 154, 28, 197, 217, 106, 58, 85, 209, 128, 232, 151, 15, 79, 182, 120, 238, 168, 134, 81, 248, 146, 173, 16, 88, 195, 65, 150, 183, 205, 242, 11, 41, 89, 126, 80, 8, 183, 121, 141, 3, 98, 180, 31, 108, 58, 196, 97, 24, 222, 107, 198, 2, 116, 70, 207, 52, 230, 22, 109, 47, 80, 165, 132, 199, 235, 170, 52, 148, 247, 165, 23, 242, 74, 45, 254, 170, 226, 155, 36, 142, 179, 60, 158, 48, 182, 223, 154, 124, 98, 178, 250, 140, 5, 231, 96, 68, 19, 116, 204, 32, 227, 43, 200, 113, 161, 213, 122, 87, 0, 130, 248, 77, 13, 241, 92, 229, 30, 102, 13, 244, 77, 160, 33, 209, 119, 55, 176, 143, 190, 255, 103, 71, 93, 186, 62, 223, 145, 12, 189, 68, 202, 47, 211, 114, 192, 41, 127, 203, 141, 65, 189, 40, 135, 198, 61, 89, 222, 158, 24, 216, 45, 1, 157, 213, 130, 239, 83, 104, 26, 55, 134, 238, 29, 159, 95, 63, 167, 149, 7, 78, 255, 119, 166, 212, 1, 233, 19, 105, 186, 37, 244, 110, 86, 135, 56, 173, 11, 151, 36, 176, 196, 230, 94, 149, 109, 184, 226, 20, 236, 215, 105, 175, 22, 219, 52, 87, 111, 174, 128, 248, 149, 78, 125, 63, 184, 227, 242, 118, 22, 220, 138, 252, 119, 76, 168, 39, 250, 10, 136, 84, 123, 54, 69, 194, 37, 95, 147, 241, 73, 153, 48, 68, 7, 194, 17, 207, 161, 31, 76, 201, 90, 166, 69, 4, 48, 215, 21, 204, 57, 73, 176, 200, 30, 249, 155, 133, 233, 163, 9, 197, 32, 183, 220, 205, 137, 232, 167, 94, 144, 9, 105, 181, 44, 111, 207, 99, 132, 155, 182, 85, 127, 219, 147, 42, 97, 184, 5, 83, 208, 108, 61, 125, 228, 21, 100, 39, 90, 114, 53, 218, 41, 252, 129, 61, 234, 143, 30, 192, 245, 12, 112, 236, 101, 2, 244, 113, 165, 225, 118, 47, 20, 176, 251, 142, 84, 117, 160, 254, 177, 26, 238, 121, 72, 193, 213, 153, 13, 55, 173, 79, 224, 65, 140, 34, 195, 158, 54, 17, 206, 62, 144, 240, 190, 72, 40, 214, 54, 192, 5, 146, 60, 82, 185, 3, 138, 169, 25, 83, 245];
const bluenoiseSize = 32;

inNoise.onChange =
twrap.onChange =
    tfilter.onChange =
    inStep.onChange =
    inFlip.onChange =
    inSRGB.onChange =
    inOklab.onChange =
    inSize.onChange =
    inGrad.onChange =
    inSmoothstep.onChange =
    inDir.onChange =
    inGradArray.onChange = update;

inGrad.set("{\"keys\" : [{\"pos\":0,\"r\":0,\"g\":0,\"b\":0},{\"pos\":1,\"r\":1,\"g\":1,\"b\":1}]}");

op.onLoaded = update;

inRandom.onTriggered = () =>
{
    const keys = parseKeys();
    if (keys)
    {
        keys.forEach((key) =>
        {
            key.r = Math.random();
            key.g = Math.random();
            key.b = Math.random();
        });
        const newKeys = JSON.stringify({ "keys": keys });
        inGrad.set(newKeys);
    }
};

function rgbToOklab(r, g, b)
{
    let l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
    let m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
    let s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;
    l = Math.cbrt(l); m = Math.cbrt(m); s = Math.cbrt(s);
    return [
        l * +0.2104542553 + m * +0.7936177850 + s * -0.0040720468,
        l * +1.9779984951 + m * -2.4285922050 + s * +0.4505937099,
        l * +0.0259040371 + m * +0.7827717662 + s * -0.8086757660
    ];
}

function oklabToRGB(L, a, b)
{
    let l = L + a * +0.3963377774 + b * +0.2158037573;
    let m = L + a * -0.1055613458 + b * -0.0638541728;
    let s = L + a * -0.0894841775 + b * -1.2914855480;
    l **= 3; m **= 3; s **= 3;
    let rgb_r = l * +4.0767416621 + m * -3.3077115913 + s * +0.2309699292;
    let rgb_g = l * -1.2684380046 + m * +2.6097574011 + s * -0.3413193965;
    let rgb_b = l * -0.0041960863 + m * -0.7034186147 + s * +1.7076147010;
    rgb_r = CABLES.clamp(rgb_r, 0, 1); rgb_g = CABLES.clamp(rgb_g, 0, 1); rgb_b = CABLES.clamp(rgb_b, 0, 1);
    return [rgb_r, rgb_g, rgb_b];
}

function lin2srgb(r, g, b)
{
    r /= 255;
    const thr = 0.0031308;
    let c_loR = 12.92 * r;
    let c_hiR = 1.055 * Math.pow(r, 0.41666) - 0.055;
    return ((r < thr) ? c_loR : c_hiR) * 255;
}

function update()
{
    cgl.addNextFrameOnceCallback(doUpdate);
}

function doUpdate()
{
    const keys = parseKeys();
    if (keys) updateGradient(keys);
}

function parseKeys()
{
    let keys = null;
    op.setUiError("nodata", null);
    op.setUiError("parse", null);

    if (Array.isArray(inGradArray.get()))
    {
        keys = inGradArray.get();
    }
    else
    {
        let grad = null;
        if (!inGrad.get() || inGrad.get() === "")
        {
            // op.setUiError("nodata", "gradient no data");
            return null;
        }

        try
        {
            grad = JSON.parse(inGrad.get());
        }
        catch (e)
        {
            op.setUiError("parse", "could not parse gradient data");
        }

        if (!grad || !grad.keys)
        {
            op.setUiError("nodata", "gradient no data");
            return null;
        }
        keys = grad.keys;
    }
    return keys;
}

function noise(x, y)
{
    x %= bluenoiseSize;
    y %= bluenoiseSize;

    return bluenoise[x + y * bluenoiseSize] / 255 - 0.5;
}

function addNoise(pixels, width, height)
{
    if (inNoise.get() == 0.0) return pixels;

    for (let x = 0; x < width; x++)
        for (let y = 0; y < height; y++)
        {
            const r1 = pixels[(x + (y * width)) * 4 + 0];
            const g1 = pixels[(x + (y * width)) * 4 + 1];
            const b1 = pixels[(x + (y * width)) * 4 + 2];

            let offX = (width / 8) * inNoise.get() * noise(x, y);
            let offY = (height / 8) * inNoise.get() * noise(x + bluenoiseSize / 2, y + bluenoiseSize / 2);

            if (height == 1) offY = 0;
            if (width == 1) offX = 0;

            offX = Math.round(offX);
            offY = Math.round(offY);

            const yOffY = CABLES.clamp(y + offY, 0, height - 1);
            const xOffX = CABLES.clamp(x + offX, 0, width - 1);

            const r2 = pixels[(xOffX + ((yOffY) * width)) * 4 + 0];
            const g2 = pixels[(xOffX + ((yOffY) * width)) * 4 + 1];
            const b2 = pixels[(xOffX + ((yOffY) * width)) * 4 + 2];

            pixels[(x + y * width) * 4 + 0] = r2;
            pixels[(x + y * width) * 4 + 1] = g2;
            pixels[(x + y * width) * 4 + 2] = b2;

            pixels[(xOffX + ((yOffY) * width)) * 4 + 0] = r1;
            pixels[(xOffX + ((yOffY) * width)) * 4 + 1] = g1;
            pixels[(xOffX + ((yOffY) * width)) * 4 + 2] = b1;
        }
    return pixels;
}

function updateGradient(keys)
{
    let width = Math.round(inSize.get());
    if (width < 4) width = 4;

    inGrad.setUiAttribs(
        {
            "editShortcut": true,
            "gradEditSmoothstep": inSmoothstep.get(),
            "gradEditStep": inStep.get(),
            "gradOklab": inOklab.get(),
        });

    let selectedWrap = 0;
    let selectedFilter = 0;
    if (twrap.get() == "repeat") selectedWrap = CGL.Texture.WRAP_REPEAT;
    else if (twrap.get() == "mirrored repeat") selectedWrap = CGL.Texture.WRAP_MIRRORED_REPEAT;
    else if (twrap.get() == "clamp to edge") selectedWrap = CGL.Texture.WRAP_CLAMP_TO_EDGE;

    if (tfilter.get() == "nearest") selectedFilter = CGL.Texture.FILTER_NEAREST;
    else if (tfilter.get() == "linear") selectedFilter = CGL.Texture.FILTER_LINEAR;
    else if (tfilter.get() == "mipmap") selectedFilter = CGL.Texture.FILTER_MIPMAP;

    const tex = new CGL.Texture(cgl);

    let pixels = new Uint8Array(width * 4);

    for (let i = 0; i < keys.length - 1; i++)
    {
        const keyA = keys[i];
        const keyB = keys[i + 1];

        for (let x = keyA.pos * width; x < keyB.pos * width; x++)
        {
            let p = CABLES.map(x, keyA.pos * width, keyB.pos * width, 0, 1);
            if (inStep.get())p = Math.round(p);
            if (inSmoothstep.get()) p = CABLES.smoothStep(p);
            x = Math.round(x);

            let xx = x;
            if (inFlip.get())xx = width - x - 1;

            if (inOklab.get())
            {
                const klabA = rgbToOklab(keyA.r, keyA.g, keyA.b);
                const labA_r = klabA[0];
                const labA_g = klabA[1];
                const labA_b = klabA[2];

                const klabB = rgbToOklab(keyB.r, keyB.g, keyB.b);
                const labB_r = klabB[0];
                const labB_g = klabB[1];
                const labB_b = klabB[2];

                const l = ((p * labB_r + (1.0 - p) * labA_r));
                const a = ((p * labB_g + (1.0 - p) * labA_g));
                const b = ((p * labB_b + (1.0 - p) * labA_b));

                const pixCol = oklabToRGB(l, a, b);
                pixels[xx * 4 + 0] = Math.round(pixCol[0] * 255);
                pixels[xx * 4 + 1] = Math.round(pixCol[1] * 255);
                pixels[xx * 4 + 2] = Math.round(pixCol[2] * 255);
            }
            else
            {
                pixels[xx * 4 + 0] = Math.round((p * keyB.r + (1.0 - p) * keyA.r) * 255);
                pixels[xx * 4 + 1] = Math.round((p * keyB.g + (1.0 - p) * keyA.g) * 255);
                pixels[xx * 4 + 2] = Math.round((p * keyB.b + (1.0 - p) * keyA.b) * 255);
            }

            if (typeof keyA.a !== "undefined" && typeof keyB.a !== "undefined")
            {
                const alpha = Math.round((p * keyB.a + (1.0 - p) * keyA.a) * 255);
                pixels[xx * 4 + 3] = alpha;
            }
            else
            {
                pixels[xx * 4 + 3] = Math.round(255);
            }
        }
    }
    if (inSRGB.get())
        for (let i = 0; i < pixels.length; i += 4)
        {
            pixels[i + 0] = lin2srgb(pixels[i + 0]);
            pixels[i + 1] = lin2srgb(pixels[i + 1]);
            pixels[i + 2] = lin2srgb(pixels[i + 2]);
        }

    if (inDir.get() == "X") tex.initFromData(addNoise(pixels, width, 1), width, 1, selectedFilter, selectedWrap);
    if (inDir.get() == "Y") tex.initFromData(addNoise(pixels, 1, width), 1, width, selectedFilter, selectedWrap);

    if (inDir.get() == "Radial")
    {
        const rpixels = new Uint8Array(width * width * 4);

        for (let x = 0; x < width; x++)
        {
            for (let y = 0; y < width; y++)
            {
                const dx = x - (width - 1) / 2;
                const dy = y - (width - 1) / 2;
                let pos = Math.sqrt(dx * dx + dy * dy) / (width) * 2;

                if (inSmoothstep.get()) pos = CABLES.smoothStep(pos);

                let aa = Math.round(pos * width) * 4;
                if (aa >= width * 4)aa = width * 4 - 4;

                rpixels[(x * 4) + (y * 4 * width) + 0] = pixels[aa + 0];
                rpixels[(x * 4) + (y * 4 * width) + 1] = pixels[aa + 1];
                rpixels[(x * 4) + (y * 4 * width) + 2] = pixels[aa + 2];
                rpixels[(x * 4) + (y * 4 * width) + 3] = Math.round(255);
            }
        }

        pixels = rpixels;

        tex.initFromData(addNoise(pixels, width, width), width, width, selectedFilter, selectedWrap);
    }

    if (inDir.get() == "XX")
    {
        const rpixels = new Uint8Array(width * width * 4);
        for (let x = 0; x < width; x++)
            for (let y = 0; y < width; y++)
            {
                const aa = x * 4;
                rpixels[(x * 4) + (y * 4 * width) + 0] = pixels[aa + 0];
                rpixels[(x * 4) + (y * 4 * width) + 1] = pixels[aa + 1];
                rpixels[(x * 4) + (y * 4 * width) + 2] = pixels[aa + 2];
                rpixels[(x * 4) + (y * 4 * width) + 3] = Math.round(255);
            }
        pixels = rpixels;
        tex.initFromData(addNoise(pixels, width, width), width, width, selectedFilter, selectedWrap);
    }

    if (inDir.get() == "YY")
    {
        const rpixels = new Uint8Array(width * width * 4);
        for (let x = 0; x < width; x++)
            for (let y = 0; y < width; y++)
            {
                const aa = x * 4;
                rpixels[(y * 4) + (x * 4 * width) + 0] = pixels[aa + 0];
                rpixels[(y * 4) + (x * 4 * width) + 1] = pixels[aa + 1];
                rpixels[(y * 4) + (x * 4 * width) + 2] = pixels[aa + 2];
                rpixels[(y * 4) + (x * 4 * width) + 3] = Math.round(255);
            }
        pixels = rpixels;
        tex.initFromData(addNoise(pixels, width, width), width, width, selectedFilter, selectedWrap);
    }

    if (inDir.get() == "XY" || inDir.get() == "YX")
    {
        const rpixels = new Uint8Array(width * width * 4);

        for (let x = 0; x < width; x++)
        {
            let xx = x;
            if (inDir.get() == "YX")xx = width - x - 1;

            for (let y = 0; y < width; y++)
            {
                let aa = Math.round(((xx) + y) / 2) * 4;

                rpixels[(x * 4) + (y * 4 * width) + 0] = pixels[aa + 0];
                rpixels[(x * 4) + (y * 4 * width) + 1] = pixels[aa + 1];
                rpixels[(x * 4) + (y * 4 * width) + 2] = pixels[aa + 2];
                rpixels[(x * 4) + (y * 4 * width) + 3] = Math.round(255);
            }
        }

        pixels = rpixels;

        tex.initFromData(addNoise(pixels, width, width), width, width, selectedFilter, selectedWrap);
    }

    const colorArr = [];
    for (let i = 0; i < keys.length - 1; i++)
    {
        colorArr.push(keys[i].r, keys[i].g, keys[i].b);
    }

    const colorPosArr = [];
    for (let i = 0; i < keys.length - 1; i++)
    {
        colorPosArr.push(keys[i].pos);
    }

    outColors.set(colorArr);
    outColorPos.set(colorPosArr);

    // outTex.set(null);
    outTex.setRef(tex);
}


};

Ops.Gl.GradientTexture.prototype = new CABLES.Op();
CABLES.OPS["01380a50-2dbb-4465-ae80-86349b0b717a"]={f:Ops.Gl.GradientTexture,objName:"Ops.Gl.GradientTexture"};




// **************************************************************
// 
// Ops.Anim.Smooth
// 
// **************************************************************

Ops.Anim.Smooth = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exec = op.inTrigger("Update"),
    inMode = op.inBool("Separate inc/dec", false),
    inVal = op.inValue("Value"),
    next = op.outTrigger("Next"),
    inDivisorUp = op.inValue("Inc factor", 4),
    inDivisorDown = op.inValue("Dec factor", 4),
    result = op.outNumber("Result", 0);

let val = 0;
let goal = 0;
let oldVal = 0;
let lastTrigger = 0;

op.toWorkPortsNeedToBeLinked(exec);

let divisorUp;
let divisorDown;
let divisor = 4;
let finished = true;

let selectIndex = 0;
const MODE_SINGLE = 0;
const MODE_UP_DOWN = 1;

onFilterChange();
getDivisors();

inMode.setUiAttribs({ "hidePort": true });

inDivisorUp.onChange = inDivisorDown.onChange = getDivisors;
inMode.onChange = onFilterChange;
update();

function onFilterChange()
{
    const selectedMode = inMode.get();
    if (!selectedMode) selectIndex = MODE_SINGLE;
    else selectIndex = MODE_UP_DOWN;

    if (selectIndex == MODE_SINGLE)
    {
        inDivisorDown.setUiAttribs({ "greyout": true });
        inDivisorUp.setUiAttribs({ "title": "Inc/Dec factor" });
    }
    else if (selectIndex == MODE_UP_DOWN)
    {
        inDivisorDown.setUiAttribs({ "greyout": false });
        inDivisorUp.setUiAttribs({ "title": "Inc factor" });
    }

    getDivisors();
    update();
}

function getDivisors()
{
    if (selectIndex == MODE_SINGLE)
    {
        divisorUp = inDivisorUp.get();
        divisorDown = inDivisorUp.get();
    }
    else if (selectIndex == MODE_UP_DOWN)
    {
        divisorUp = inDivisorUp.get();
        divisorDown = inDivisorDown.get();
    }

    if (divisorUp <= 0.2 || divisorUp != divisorUp)divisorUp = 0.2;
    if (divisorDown <= 0.2 || divisorDown != divisorDown)divisorDown = 0.2;
}

inVal.onChange = function ()
{
    finished = false;
    let oldGoal = goal;
    goal = inVal.get();
};

inDivisorUp.onChange = function ()
{
    getDivisors();
};

function update()
{
    let tm = 1;
    if (performance.now() - lastTrigger > 500 || lastTrigger === 0) val = inVal.get() || 0;
    else tm = (performance.now() - lastTrigger) / (performance.now() - lastTrigger);
    lastTrigger = performance.now();

    if (val != val)val = 0;

    if (divisor <= 0)divisor = 0.0001;

    const diff = goal - val;

    if (diff >= 0) val += (diff) / (divisorDown * tm);
    else val += (diff) / (divisorUp * tm);

    if (Math.abs(diff) < 0.00001)val = goal;

    if (divisor != divisor)val = 0;
    if (val != val || val == -Infinity || val == Infinity)val = inVal.get();

    if (oldVal != val)
    {
        result.set(val);
        oldVal = val;
    }

    if (val == goal && !finished)
    {
        finished = true;
        result.set(val);
    }

    next.trigger();
}

exec.onTriggered = function ()
{
    update();
};


};

Ops.Anim.Smooth.prototype = new CABLES.Op();
CABLES.OPS["5677b5b5-753a-4fbf-9e91-64c81ec68a2f"]={f:Ops.Anim.Smooth,objName:"Ops.Anim.Smooth"};




// **************************************************************
// 
// Ops.String.GateString
// 
// **************************************************************

Ops.String.GateString = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    valueInPort = op.inString("String In", "hello"),
    passThroughPort = op.inValueBool("Pass Through", false),
    inIfNot = op.inSwitch("When False", ["keep last string", "custom"], "keep last string"),
    inCustomNot = op.inString("Custom Value"),
    valueOutPort = op.outString("String Out", "");

valueInPort.onChange =
    passThroughPort.onChange = update;

inIfNot.onChange = updateUi;

function updateUi()
{
    inCustomNot.setUiAttribs({ "greyout": inIfNot.get() != "custom" });
    update();
}

function update()
{
    if (passThroughPort.get())
    {
        valueOutPort.set("");
        valueOutPort.set(valueInPort.get());
    }
    else
    {
        if (inIfNot.get() == "custom") valueOutPort.set(inCustomNot.get());
    }
}


};

Ops.String.GateString.prototype = new CABLES.Op();
CABLES.OPS["0ce14933-2d91-4381-9d82-2304aae22c0e"]={f:Ops.String.GateString,objName:"Ops.String.GateString"};




// **************************************************************
// 
// Ops.Vars.VarSetString_v2
// 
// **************************************************************

Ops.Vars.VarSetString_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const val=op.inString("Value","New String");
op.varName=op.inDropDown("Variable",[],"",true);

new CABLES.VarSetOpWrapper(op,"string",val,op.varName);




};

Ops.Vars.VarSetString_v2.prototype = new CABLES.Op();
CABLES.OPS["0b4d9229-8024-4a30-9cc0-f6653942c2e4"]={f:Ops.Vars.VarSetString_v2,objName:"Ops.Vars.VarSetString_v2"};




// **************************************************************
// 
// Ops.Vars.VarGetObject_v2
// 
// **************************************************************

Ops.Vars.VarGetObject_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const val = op.outObject("Value");
op.varName = op.inValueSelect("Variable", [], "", true);

new CABLES.VarGetOpWrapper(op, "object", op.varName, val);


};

Ops.Vars.VarGetObject_v2.prototype = new CABLES.Op();
CABLES.OPS["321419d9-69c7-4310-a327-93d310bc2b8e"]={f:Ops.Vars.VarGetObject_v2,objName:"Ops.Vars.VarGetObject_v2"};




// **************************************************************
// 
// Ops.Json.ObjectGetNumber_v2
// 
// **************************************************************

Ops.Json.ObjectGetNumber_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    data = op.inObject("Data"),
    key = op.inString("Key"),
    result = op.outNumber("Result"),
    outFound = op.outBoolNum("Found");

result.ignoreValueSerialize = true;
data.ignoreValueSerialize = true;
op.setUiAttrib({ "extendTitlePort": key.name });
key.setUiAttribs({ "stringTrim": true });

key.onChange =
    data.onChange = exec;

key.on("change", updateUi);
updateUi();
function updateUi()
{
    if (!key.get())op.setUiError("nokey", "Missing Key Value");
    else op.setUiError("nokey", null);
}

function exec()
{
    const d = data.get();
    if (d)
    {
        const val = d[key.get()];
        result.set(parseFloat(val));
        if (val === undefined) outFound.set(0);
        else outFound.set(1);
    }
    else
    {
        result.set(0);
        outFound.set(0);
    }
}


};

Ops.Json.ObjectGetNumber_v2.prototype = new CABLES.Op();
CABLES.OPS["a7335e79-046e-40da-9e9c-db779b0a5e53"]={f:Ops.Json.ObjectGetNumber_v2,objName:"Ops.Json.ObjectGetNumber_v2"};




// **************************************************************
// 
// Ops.Json.GateObject
// 
// **************************************************************

Ops.Json.GateObject = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    valueInPort = op.inObject("Object In"),
    passThroughPort = op.inValueBool("Pass Through", true),
    inIfNull = op.inSwitch("When False", ["keep last object", "null"], "keep last object"),
    onlyValid = op.inValueBool("Only Valid Objects", false),

    valueOutPort = op.outObject("Object Out");

valueInPort.onChange =
    inIfNull.onChange =
    passThroughPort.onChange = update;
valueInPort.changeAlways = true;

function update()
{
    if (!valueInPort.get() && onlyValid.get()) return;
    if (passThroughPort.get()) valueOutPort.setRef(valueInPort.get());
    else
    {
        if (inIfNull.get() == "null") valueOutPort.setRef(null);
    }
}


};

Ops.Json.GateObject.prototype = new CABLES.Op();
CABLES.OPS["95e04331-49d6-42da-81d8-5a75261ab22f"]={f:Ops.Json.GateObject,objName:"Ops.Json.GateObject"};




// **************************************************************
// 
// Ops.Gl.GLTF.GltfScene_v4
// 
// **************************************************************

Ops.Gl.GLTF.GltfScene_v4 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_camera_js":"const gltfCamera = class\n{\n    constructor(gltf, node)\n    {\n        this.node = node;\n        this.name = node.name;\n        // console.log(gltf);\n        this.config = gltf.json.cameras[node.camera];\n\n        this.pos = vec3.create();\n        this.quat = quat.create();\n        this.vCenter = vec3.create();\n        this.vUp = vec3.create();\n        this.vMat = mat4.create();\n    }\n\n    updateAnim(time)\n    {\n        if (this.node && this.node._animTrans)\n        {\n            vec3.set(this.pos,\n                this.node._animTrans[0].getValue(time),\n                this.node._animTrans[1].getValue(time),\n                this.node._animTrans[2].getValue(time));\n\n            quat.set(this.quat,\n                this.node._animRot[0].getValue(time),\n                this.node._animRot[1].getValue(time),\n                this.node._animRot[2].getValue(time),\n                this.node._animRot[3].getValue(time));\n        }\n    }\n\n    start(time)\n    {\n        if (cgl.frameStore.shadowPass) return;\n\n        this.updateAnim(time);\n        const asp = cgl.getViewPort()[2] / cgl.getViewPort()[3];\n\n        cgl.pushPMatrix();\n        // mat4.perspective(\n        //     cgl.pMatrix,\n        //     this.config.perspective.yfov*0.5,\n        //     asp,\n        //     this.config.perspective.znear,\n        //     this.config.perspective.zfar);\n\n        cgl.pushViewMatrix();\n        // mat4.identity(cgl.vMatrix);\n\n        // if(this.node && this.node.parent)\n        // {\n        //     console.log(this.node.parent)\n        // vec3.add(this.pos,this.pos,this.node.parent._node.translation);\n        // vec3.sub(this.vCenter,this.vCenter,this.node.parent._node.translation);\n        // mat4.translate(cgl.vMatrix,cgl.vMatrix,\n        // [\n        //     -this.node.parent._node.translation[0],\n        //     -this.node.parent._node.translation[1],\n        //     -this.node.parent._node.translation[2]\n        // ])\n        // }\n\n        // vec3.set(this.vUp, 0, 1, 0);\n        // vec3.set(this.vCenter, 0, -1, 0);\n        // // vec3.set(this.vCenter, 0, 1, 0);\n        // vec3.transformQuat(this.vCenter, this.vCenter, this.quat);\n        // vec3.normalize(this.vCenter, this.vCenter);\n        // vec3.add(this.vCenter, this.vCenter, this.pos);\n\n        // mat4.lookAt(cgl.vMatrix, this.pos, this.vCenter, this.vUp);\n\n        let mv = mat4.create();\n        mat4.invert(mv, this.node.modelMatAbs());\n\n        // console.log(this.node.modelMatAbs());\n\n        this.vMat = mv;\n\n        mat4.identity(cgl.vMatrix);\n        // console.log(mv);\n        mat4.mul(cgl.vMatrix, cgl.vMatrix, mv);\n    }\n\n    end()\n    {\n        if (cgl.frameStore.shadowPass) return;\n        cgl.popPMatrix();\n        cgl.popViewMatrix();\n    }\n};\n","inc_gltf_js":"const le = true; // little endian\n\nconst Gltf = class\n{\n    constructor()\n    {\n        this.json = {};\n        this.accBuffers = [];\n        this.meshes = [];\n        this.nodes = [];\n        this.shaders = [];\n        this.timing = [];\n        this.cams = [];\n        this.startTime = performance.now();\n        this.bounds = new CABLES.CG.BoundingBox();\n        this.loaded = Date.now();\n        this.accBuffersDelete = [];\n    }\n\n    getNode(n)\n    {\n        for (let i = 0; i < this.nodes.length; i++)\n        {\n            if (this.nodes[i].name == n) return this.nodes[i];\n        }\n    }\n\n    unHideAll()\n    {\n        for (let i = 0; i < this.nodes.length; i++)\n        {\n            this.nodes[i].unHide();\n        }\n    }\n};\n\nfunction Utf8ArrayToStr(array)\n{\n    if (window.TextDecoder) return new TextDecoder(\"utf-8\").decode(array);\n\n    let out, i, len, c;\n    let char2, char3;\n\n    out = \"\";\n    len = array.length;\n    i = 0;\n    while (i < len)\n    {\n        c = array[i++];\n        switch (c >> 4)\n        {\n        case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:\n            // 0xxxxxxx\n            out += String.fromCharCode(c);\n            break;\n        case 12: case 13:\n            // 110x xxxx   10xx xxxx\n            char2 = array[i++];\n            out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));\n            break;\n        case 14:\n            // 1110 xxxx  10xx xxxx  10xx xxxx\n            char2 = array[i++];\n            char3 = array[i++];\n            out += String.fromCharCode(((c & 0x0F) << 12) |\n                    ((char2 & 0x3F) << 6) |\n                    ((char3 & 0x3F) << 0));\n            break;\n        }\n    }\n\n    return out;\n}\n\nfunction readChunk(dv, bArr, arrayBuffer, offset)\n{\n    const chunk = {};\n\n    if (offset >= dv.byteLength)\n    {\n        // op.log(\"could not read chunk...\");\n        return;\n    }\n    chunk.size = dv.getUint32(offset + 0, le);\n\n    // chunk.type = new TextDecoder(\"utf-8\").decode(bArr.subarray(offset+4, offset+4+4));\n    chunk.type = Utf8ArrayToStr(bArr.subarray(offset + 4, offset + 4 + 4));\n\n    if (chunk.type == \"BIN\\0\")\n    {\n        // console.log(chunk.size,arrayBuffer.length,offset);\n        // try\n        // {\n        chunk.dataView = new DataView(arrayBuffer, offset + 8, chunk.size);\n        // }\n        // catch(e)\n        // {\n        //     chunk.dataView = null;\n        //     console.log(e);\n        // }\n    }\n    else\n    if (chunk.type == \"JSON\")\n    {\n        const json = Utf8ArrayToStr(bArr.subarray(offset + 8, offset + 8 + chunk.size));\n\n        try\n        {\n            const obj = JSON.parse(json);\n            chunk.data = obj;\n            outGenerator.set(obj.asset.generator);\n        }\n        catch (e)\n        {\n        }\n    }\n    else\n    {\n        op.warn(\"unknown type\", chunk.type);\n    }\n\n    return chunk;\n}\n\nfunction loadAnims(gltf)\n{\n    const uniqueAnimNames = {};\n\n    for (let i = 0; i < gltf.json.animations.length; i++)\n    {\n        const an = gltf.json.animations[i];\n\n        an.name = an.name || \"unknown\";\n\n        for (let ia = 0; ia < an.channels.length; ia++)\n        {\n            const chan = an.channels[ia];\n\n            const node = gltf.nodes[chan.target.node];\n            const sampler = an.samplers[chan.sampler];\n\n            const acc = gltf.json.accessors[sampler.input];\n            const bufferIn = gltf.accBuffers[sampler.input];\n\n            const accOut = gltf.json.accessors[sampler.output];\n            const bufferOut = gltf.accBuffers[sampler.output];\n\n            gltf.accBuffersDelete.push(sampler.output, sampler.input);\n\n            if (bufferIn && bufferOut)\n            {\n                let numComps = 1;\n                if (accOut.type === \"VEC2\")numComps = 2;\n                else if (accOut.type === \"VEC3\")numComps = 3;\n                else if (accOut.type === \"VEC4\")numComps = 4;\n                else if (accOut.type === \"SCALAR\")\n                {\n                    numComps = bufferOut.length / bufferIn.length; // is this really the way to find out ? cant find any other way,except number of morph targets, but not really connected...\n                }\n                else op.log(\"[] UNKNOWN accOut.type\", accOut.type);\n\n                const anims = [];\n\n                uniqueAnimNames[an.name] = true;\n\n                for (let k = 0; k < numComps; k++)\n                {\n                    const newAnim = new CABLES.Anim();\n                    // newAnim.name=an.name;\n                    anims.push(newAnim);\n                }\n\n                if (sampler.interpolation === \"LINEAR\") {}\n                else if (sampler.interpolation === \"STEP\") for (let k = 0; k < numComps; k++) anims[k].defaultEasing = CABLES.EASING_ABSOLUTE;\n                else if (sampler.interpolation === \"CUBICSPLINE\") for (let k = 0; k < numComps; k++) anims[k].defaultEasing = CABLES.EASING_CUBICSPLINE;\n                else op.warn(\"unknown interpolation\", sampler.interpolation);\n\n                // console.log(bufferOut)\n\n                // if there is no keyframe for time 0 copy value of first keyframe at time 0\n                if (bufferIn[0] !== 0.0)\n                    for (let k = 0; k < numComps; k++)\n                        anims[k].setValue(0, bufferOut[0 * numComps + k]);\n\n                for (let j = 0; j < bufferIn.length; j++)\n                {\n                    maxTime = Math.max(bufferIn[j], maxTime);\n\n                    for (let k = 0; k < numComps; k++)\n                    {\n                        if (anims[k].defaultEasing === CABLES.EASING_CUBICSPLINE)\n                        {\n                            const idx = ((j * numComps) * 3 + k);\n\n                            const key = anims[k].setValue(bufferIn[j], bufferOut[idx + numComps]);\n                            key.bezTangIn = bufferOut[idx];\n                            key.bezTangOut = bufferOut[idx + (numComps * 2)];\n\n                            // console.log(an.name,k,bufferOut[idx+1]);\n                        }\n                        else\n                        {\n                            // console.log(an.name,k,bufferOut[j * numComps + k]);\n                            anims[k].setValue(bufferIn[j], bufferOut[j * numComps + k]);\n                        }\n                    }\n                }\n\n                node.setAnim(chan.target.path, an.name, anims);\n            }\n            else\n            {\n                op.warn(\"loadAmins bufferIn undefined \", bufferIn === undefined);\n                op.warn(\"loadAmins bufferOut undefined \", bufferOut === undefined);\n                op.warn(\"loadAmins \", sampler, accOut);\n                op.warn(\"loadAmins num accBuffers\", gltf.accBuffers.length);\n                op.warn(\"loadAmins num accessors\", gltf.json.accessors.length);\n            }\n        }\n    }\n\n    gltf.uniqueAnimNames = uniqueAnimNames;\n\n    outAnims.setRef(Object.keys(uniqueAnimNames));\n}\n\nfunction loadCams(gltf)\n{\n    if (!gltf || !gltf.json.cameras) return;\n\n    gltf.cameras = gltf.cameras || [];\n\n    for (let i = 0; i < gltf.nodes.length; i++)\n    {\n        if (gltf.nodes[i].hasOwnProperty(\"camera\"))\n        {\n            const cam = new gltfCamera(gltf, gltf.nodes[i]);\n            gltf.cameras.push(cam);\n        }\n    }\n}\n\nfunction loadAfterDraco()\n{\n    if (!window.DracoDecoder)\n    {\n        setTimeout(() =>\n        {\n            loadAfterDraco();\n        }, 100);\n    }\n\n    reloadSoon();\n}\n\nfunction parseGltf(arrayBuffer)\n{\n    const CHUNK_HEADER_SIZE = 8;\n\n    let j = 0, i = 0;\n\n    const gltf = new Gltf();\n    gltf.timing.push([\"Start parsing\", Math.round((performance.now() - gltf.startTime))]);\n\n    if (!arrayBuffer) return;\n    const byteArray = new Uint8Array(arrayBuffer);\n    let pos = 0;\n\n    // var string = new TextDecoder(\"utf-8\").decode(byteArray.subarray(pos, 4));\n    const string = Utf8ArrayToStr(byteArray.subarray(pos, 4));\n    pos += 4;\n    if (string != \"glTF\") return;\n\n    gltf.timing.push([\"dataview\", Math.round((performance.now() - gltf.startTime))]);\n\n    const dv = new DataView(arrayBuffer);\n    const version = dv.getUint32(pos, le);\n    pos += 4;\n    const size = dv.getUint32(pos, le);\n    pos += 4;\n\n    outVersion.set(version);\n\n    const chunks = [];\n    gltf.chunks = chunks;\n\n    chunks.push(readChunk(dv, byteArray, arrayBuffer, pos));\n    pos += chunks[0].size + CHUNK_HEADER_SIZE;\n    gltf.json = chunks[0].data;\n\n    gltf.cables = {\n        \"fileUrl\": inFile.get(),\n        \"shortFileName\": CABLES.basename(inFile.get())\n    };\n\n    outJson.setRef(gltf.json);\n    outExtensions.setRef(gltf.json.extensionsUsed || []);\n\n    let ch = readChunk(dv, byteArray, arrayBuffer, pos);\n    while (ch)\n    {\n        chunks.push(ch);\n        pos += ch.size + CHUNK_HEADER_SIZE;\n        ch = readChunk(dv, byteArray, arrayBuffer, pos);\n    }\n\n    gltf.chunks = chunks;\n\n    const views = chunks[0].data.bufferViews;\n    const accessors = chunks[0].data.accessors;\n\n    gltf.timing.push([\"Parse buffers\", Math.round((performance.now() - gltf.startTime))]);\n\n    if (gltf.json.extensionsUsed && gltf.json.extensionsUsed.indexOf(\"KHR_draco_mesh_compression\") > -1)\n    {\n        if (!window.DracoDecoder)\n        {\n            op.setUiError(\"gltfdraco\", \"GLTF draco compression lib not found / add draco op to your patch!\");\n\n            loadAfterDraco();\n            return gltf;\n        }\n        else\n        {\n            gltf.useDraco = true;\n        }\n    }\n\n    op.setUiError(\"gltfdraco\", null);\n    // let accPos = (view.byteOffset || 0) + (acc.byteOffset || 0);\n\n    if (views)\n    {\n        for (i = 0; i < accessors.length; i++)\n        {\n            const acc = accessors[i];\n            const view = views[acc.bufferView];\n\n            let numComps = 0;\n            if (acc.type == \"SCALAR\")numComps = 1;\n            else if (acc.type == \"VEC2\")numComps = 2;\n            else if (acc.type == \"VEC3\")numComps = 3;\n            else if (acc.type == \"VEC4\")numComps = 4;\n            else if (acc.type == \"MAT4\")numComps = 16;\n            else console.error(\"unknown accessor type\", acc.type);\n\n            //   const decoder = new decoderModule.Decoder();\n            //   const decodedGeometry = decodeDracoData(data, decoder);\n            //   // Encode mesh\n            //   encodeMeshToFile(decodedGeometry, decoder);\n\n            //   decoderModule.destroy(decoder);\n            //   decoderModule.destroy(decodedGeometry);\n\n            // 5120 (BYTE)\t1\n            // 5121 (UNSIGNED_BYTE)\t1\n            // 5122 (SHORT)\t2\n\n            if (chunks[1].dataView)\n            {\n                if (view)\n                {\n                    const num = acc.count * numComps;\n                    let accPos = (view.byteOffset || 0) + (acc.byteOffset || 0);\n                    let stride = view.byteStride || 0;\n                    let dataBuff = null;\n\n                    if (acc.componentType == 5126 || acc.componentType == 5125) // 4byte FLOAT or INT\n                    {\n                        stride = stride || 4;\n\n                        const isInt = acc.componentType == 5125;\n                        if (isInt)dataBuff = new Uint32Array(num);\n                        else dataBuff = new Float32Array(num);\n\n                        for (j = 0; j < num; j++)\n                        {\n                            if (isInt) dataBuff[j] = chunks[1].dataView.getUint32(accPos, le);\n                            else dataBuff[j] = chunks[1].dataView.getFloat32(accPos, le);\n\n                            if (stride != 4 && (j + 1) % numComps === 0)accPos += stride - (numComps * 4);\n                            accPos += 4;\n                        }\n                    }\n                    else if (acc.componentType == 5123) // UNSIGNED_SHORT\n                    {\n                        stride = stride || 2;\n\n                        dataBuff = new Uint16Array(num);\n\n                        for (j = 0; j < num; j++)\n                        {\n                            dataBuff[j] = chunks[1].dataView.getUint16(accPos, le);\n\n                            if (stride != 2 && (j + 1) % numComps === 0) accPos += stride - (numComps * 2);\n\n                            accPos += 2;\n                        }\n                    }\n                    else if (acc.componentType == 5121) // UNSIGNED_BYTE\n                    {\n                        stride = stride || 1;\n\n                        dataBuff = new Uint8Array(num);\n\n                        for (j = 0; j < num; j++)\n                        {\n                            dataBuff[j] = chunks[1].dataView.getUint8(accPos, le);\n\n                            if (stride != 1 && (j + 1) % numComps === 0) accPos += stride - (numComps * 1);\n\n                            accPos += 1;\n                        }\n                    }\n\n                    else\n                    {\n                        console.error(\"unknown component type\", acc.componentType);\n                    }\n\n                    gltf.accBuffers.push(dataBuff);\n                }\n                else\n                {\n                    // console.log(\"has no dataview\");\n                }\n            }\n        }\n    }\n\n    gltf.timing.push([\"Parse mesh groups\", Math.round((performance.now() - gltf.startTime))]);\n\n    gltf.json.meshes = gltf.json.meshes || [];\n\n    if (gltf.json.meshes)\n    {\n        for (i = 0; i < gltf.json.meshes.length; i++)\n        {\n            const mesh = new gltfMeshGroup(gltf, gltf.json.meshes[i]);\n            gltf.meshes.push(mesh);\n        }\n    }\n\n    gltf.timing.push([\"Parse nodes\", Math.round((performance.now() - gltf.startTime))]);\n\n    for (i = 0; i < gltf.json.nodes.length; i++)\n    {\n        if (gltf.json.nodes[i].children)\n            for (j = 0; j < gltf.json.nodes[i].children.length; j++)\n            {\n                gltf.json.nodes[gltf.json.nodes[i].children[j]].isChild = true;\n            }\n    }\n\n    for (i = 0; i < gltf.json.nodes.length; i++)\n    {\n        const node = new gltfNode(gltf.json.nodes[i], gltf);\n        gltf.nodes.push(node);\n    }\n\n    for (i = 0; i < gltf.nodes.length; i++)\n    {\n        const node = gltf.nodes[i];\n\n        if (!node.children) continue;\n        for (let j = 0; j < node.children.length; j++)\n        {\n            gltf.nodes[node.children[j]].parent = node;\n        }\n    }\n\n    for (i = 0; i < gltf.nodes.length; i++)\n    {\n        gltf.nodes[i].initSkin();\n    }\n\n    needsMatUpdate = true;\n\n    gltf.timing.push([\"load anims\", Math.round((performance.now() - gltf.startTime))]);\n\n    if (gltf.json.animations) loadAnims(gltf);\n\n    gltf.timing.push([\"load cameras\", Math.round((performance.now() - gltf.startTime))]);\n\n    if (gltf.json.cameras) loadCams(gltf);\n\n    gltf.timing.push([\"finished\", Math.round((performance.now() - gltf.startTime))]);\n    return gltf;\n}\n","inc_mesh_js":"let gltfMesh = class\n{\n    constructor(name, prim, gltf, finished)\n    {\n        this.POINTS = 0;\n        this.LINES = 1;\n        this.LINE_LOOP = 2;\n        this.LINE_STRIP = 3;\n        this.TRIANGLES = 4;\n        this.TRIANGLE_STRIP = 5;\n        this.TRIANGLE_FAN = 6;\n\n        this.test = 0;\n        this.name = name;\n        this.submeshIndex = 0;\n        this.material = prim.material;\n        // console.log(prim);\n        this.mesh = null;\n        this.geom = new CGL.Geometry(\"gltf_\" + this.name);\n        this.geom.verticesIndices = [];\n        this.bounds = null;\n        this.primitive = 4;\n        this.morphTargetsRenderMod = null;\n        this.weights = prim.weights;\n\n        if (prim.hasOwnProperty(\"mode\")) this.primitive = prim.mode;\n\n        if (prim.hasOwnProperty(\"indices\")) this.geom.verticesIndices = gltf.accBuffers[prim.indices];\n\n        gltf.loadingMeshes = gltf.loadingMeshes || 0;\n        gltf.loadingMeshes++;\n\n        this.materialJson =\n            this._matPbrMetalness =\n            this._matPbrRoughness =\n            this._matDiffuseColor = null;\n\n        if (gltf.json.materials)\n        {\n            if (this.material != -1) this.materialJson = gltf.json.materials[this.material];\n\n            if (this.materialJson && this.materialJson.pbrMetallicRoughness)\n            {\n                if (!this.materialJson.pbrMetallicRoughness.hasOwnProperty(\"baseColorFactor\"))\n                {\n                    this._matDiffuseColor = [1, 1, 1, 1];\n                }\n                else\n                {\n                    this._matDiffuseColor = this.materialJson.pbrMetallicRoughness.baseColorFactor;\n                }\n\n                this._matDiffuseColor = this.materialJson.pbrMetallicRoughness.baseColorFactor;\n\n                if (!this.materialJson.pbrMetallicRoughness.hasOwnProperty(\"metallicFactor\"))\n                {\n                    this._matPbrMetalness = 1.0;\n                }\n                else\n                {\n                    this._matPbrMetalness = this.materialJson.pbrMetallicRoughness.metallicFactor || null;\n                }\n\n                if (!this.materialJson.pbrMetallicRoughness.hasOwnProperty(\"roughnessFactor\"))\n                {\n                    this._matPbrRoughness = 1.0;\n                }\n                else\n                {\n                    this._matPbrRoughness = this.materialJson.pbrMetallicRoughness.roughnessFactor || null;\n                }\n            }\n        }\n\n        if (gltf.useDraco && prim.extensions.KHR_draco_mesh_compression)\n        {\n            const view = gltf.chunks[0].data.bufferViews[prim.extensions.KHR_draco_mesh_compression.bufferView];\n            const num = view.byteLength;\n            const dataBuff = new Int8Array(num);\n            let accPos = (view.byteOffset || 0);// + (acc.byteOffset || 0);\n            for (let j = 0; j < num; j++)\n            {\n                dataBuff[j] = gltf.chunks[1].dataView.getInt8(accPos, le);\n                accPos++;\n            }\n\n            const dracoDecoder = window.DracoDecoder;\n            dracoDecoder.decodeGeometry(dataBuff.buffer, (geometry) =>\n            {\n                const geom = new CGL.Geometry(\"draco mesh \" + name);\n\n                for (let i = 0; i < geometry.attributes.length; i++)\n                {\n                    const attr = geometry.attributes[i];\n\n                    if (attr.name === \"position\") geom.vertices = attr.array;\n                    else if (attr.name === \"normal\") geom.vertexNormals = attr.array;\n                    else if (attr.name === \"uv\") geom.texCoords = attr.array;\n                    else if (attr.name === \"color\") geom.vertexColors = this.calcVertexColors(attr.array);\n                    else if (attr.name === \"joints\") geom.setAttribute(\"attrJoints\", Array.from(attr.array), 4);\n                    else if (attr.name === \"weights\")\n                    {\n                        const arr4 = new Float32Array(attr.array.length / attr.itemSize * 4);\n\n                        for (let k = 0; k < attr.array.length / attr.itemSize; k++)\n                        {\n                            arr4[k * 4] = arr4[k * 4 + 1] = arr4[k * 4 + 2] = arr4[k * 4 + 3] = 0;\n                            for (let j = 0; j < attr.itemSize; j++)\n                                arr4[k * 4 + j] = attr.array[k * attr.itemSize + j];\n                        }\n                        geom.setAttribute(\"attrWeights\", arr4, 4);\n                    }\n                    else op.logWarn(\"unknown draco attrib\", attr);\n                }\n\n                geometry.attributes = null;\n                geom.verticesIndices = geometry.index.array;\n\n                this.setGeom(geom);\n\n                this.mesh = null;\n                gltf.loadingMeshes--;\n                gltf.timing.push([\"draco decode\", Math.round((performance.now() - gltf.startTime))]);\n\n                if (finished)finished(this);\n            }, (error) => { op.logError(error); });\n        }\n        else\n        {\n            gltf.loadingMeshes--;\n            this.fillGeomAttribs(gltf, this.geom, prim.attributes);\n\n            if (prim.targets)\n            {\n                for (let j = 0; j < prim.targets.length; j++)\n                {\n                    const tgeom = new CGL.Geometry(\"gltf_target_\" + j);\n\n                    // if (prim.hasOwnProperty(\"indices\")) tgeom.verticesIndices = gltf.accBuffers[prim.indices];\n\n                    this.fillGeomAttribs(gltf, tgeom, prim.targets[j], false);\n\n                    // { // calculate normals for final position of morphtarget for later...\n                    //     for (let i = 0; i < tgeom.vertices.length; i++) tgeom.vertices[i] += this.geom.vertices[i];\n                    //     tgeom.calculateNormals();\n                    //     for (let i = 0; i < tgeom.vertices.length; i++) tgeom.vertices[i] -= this.geom.vertices[i];\n                    // }\n\n                    this.geom.morphTargets.push(tgeom);\n                }\n            }\n            if (finished)finished(this);\n        }\n    }\n\n    _linearToSrgb(x)\n    {\n        if (x <= 0)\n            return 0;\n        else if (x >= 1)\n            return 1;\n        else if (x < 0.0031308)\n            return x * 12.92;\n        else\n            return x ** (1 / 2.2) * 1.055 - 0.055;\n    }\n\n    calcVertexColors(arr)\n    {\n        let vertexColors = null;\n        if (arr instanceof Float32Array)\n        {\n            let div = false;\n            for (let i = 0; i < arr.length; i++)\n            {\n                if (arr[i] > 1)\n                {\n                    div = true;\n                    continue;\n                }\n            }\n\n            if (div)\n                for (let i = 0; i < arr.length; i++) arr[i] /= 65535;\n\n            vertexColors = arr;\n        }\n\n        else if (arr instanceof Uint16Array)\n        {\n            const fb = new Float32Array(arr.length);\n            for (let i = 0; i < arr.length; i++) fb[i] = arr[i] / 65535;\n\n            vertexColors = fb;\n        }\n        else vertexColors = arr;\n\n        for (let i = 0; i < vertexColors.length; i++)\n        {\n            vertexColors[i] = this._linearToSrgb(vertexColors[i]);\n        }\n\n        return vertexColors;\n    }\n\n    fillGeomAttribs(gltf, tgeom, attribs, setGeom)\n    {\n        if (attribs.hasOwnProperty(\"POSITION\")) tgeom.vertices = gltf.accBuffers[attribs.POSITION];\n        if (attribs.hasOwnProperty(\"NORMAL\")) tgeom.vertexNormals = gltf.accBuffers[attribs.NORMAL];\n        if (attribs.hasOwnProperty(\"TANGENT\")) tgeom.tangents = gltf.accBuffers[attribs.TANGENT];\n\n        if (attribs.hasOwnProperty(\"COLOR_0\")) tgeom.vertexColors = this.calcVertexColors(gltf.accBuffers[attribs.COLOR_0]);\n        if (attribs.hasOwnProperty(\"COLOR_1\")) tgeom.setAttribute(\"attrVertColor1\", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_1]), 4);\n        if (attribs.hasOwnProperty(\"COLOR_2\")) tgeom.setAttribute(\"attrVertColor2\", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_2]), 4);\n        if (attribs.hasOwnProperty(\"COLOR_3\")) tgeom.setAttribute(\"attrVertColor3\", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_3]), 4);\n        if (attribs.hasOwnProperty(\"COLOR_4\")) tgeom.setAttribute(\"attrVertColor4\", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_4]), 4);\n\n        if (attribs.hasOwnProperty(\"TEXCOORD_0\")) tgeom.texCoords = gltf.accBuffers[attribs.TEXCOORD_0];\n        if (attribs.hasOwnProperty(\"TEXCOORD_1\")) tgeom.setAttribute(\"attrTexCoord1\", gltf.accBuffers[attribs.TEXCOORD_1], 2);\n        if (attribs.hasOwnProperty(\"TEXCOORD_2\")) tgeom.setAttribute(\"attrTexCoord2\", gltf.accBuffers[attribs.TEXCOORD_2], 2);\n        if (attribs.hasOwnProperty(\"TEXCOORD_3\")) tgeom.setAttribute(\"attrTexCoord3\", gltf.accBuffers[attribs.TEXCOORD_3], 2);\n        if (attribs.hasOwnProperty(\"TEXCOORD_4\")) tgeom.setAttribute(\"attrTexCoord4\", gltf.accBuffers[attribs.TEXCOORD_4], 2);\n\n        if (attribs.hasOwnProperty(\"WEIGHTS_0\"))\n        {\n            tgeom.setAttribute(\"attrWeights\", gltf.accBuffers[attribs.WEIGHTS_0], 4);\n        }\n        if (attribs.hasOwnProperty(\"JOINTS_0\"))\n        {\n            if (!gltf.accBuffers[attribs.JOINTS_0])console.log(\"no !gltf.accBuffers[attribs.JOINTS_0]\");\n            tgeom.setAttribute(\"attrJoints\", gltf.accBuffers[attribs.JOINTS_0], 4);\n        }\n\n        if (attribs.hasOwnProperty(\"POSITION\")) gltf.accBuffersDelete.push(attribs.POSITION);\n        if (attribs.hasOwnProperty(\"NORMAL\")) gltf.accBuffersDelete.push(attribs.NORMAL);\n        if (attribs.hasOwnProperty(\"TEXCOORD_0\")) gltf.accBuffersDelete.push(attribs.TEXCOORD_0);\n        if (attribs.hasOwnProperty(\"TANGENT\")) gltf.accBuffersDelete.push(attribs.TANGENT);\n        if (attribs.hasOwnProperty(\"COLOR_0\"))gltf.accBuffersDelete.push(attribs.COLOR_0);\n        if (attribs.hasOwnProperty(\"COLOR_0\"))gltf.accBuffersDelete.push(attribs.COLOR_0);\n        if (attribs.hasOwnProperty(\"COLOR_1\"))gltf.accBuffersDelete.push(attribs.COLOR_1);\n        if (attribs.hasOwnProperty(\"COLOR_2\"))gltf.accBuffersDelete.push(attribs.COLOR_2);\n        if (attribs.hasOwnProperty(\"COLOR_3\"))gltf.accBuffersDelete.push(attribs.COLOR_3);\n\n        if (attribs.hasOwnProperty(\"TEXCOORD_1\")) gltf.accBuffersDelete.push(attribs.TEXCOORD_1);\n        if (attribs.hasOwnProperty(\"TEXCOORD_2\")) gltf.accBuffersDelete.push(attribs.TEXCOORD_2);\n        if (attribs.hasOwnProperty(\"TEXCOORD_3\")) gltf.accBuffersDelete.push(attribs.TEXCOORD_3);\n        if (attribs.hasOwnProperty(\"TEXCOORD_4\")) gltf.accBuffersDelete.push(attribs.TEXCOORD_4);\n\n        if (setGeom !== false) if (tgeom && tgeom.verticesIndices) this.setGeom(tgeom);\n    }\n\n    setGeom(geom)\n    {\n        if (inNormFormat.get() == \"X-ZY\")\n        {\n            for (let i = 0; i < geom.vertexNormals.length; i += 3)\n            {\n                let t = geom.vertexNormals[i + 2];\n                geom.vertexNormals[i + 2] = geom.vertexNormals[i + 1];\n                geom.vertexNormals[i + 1] = -t;\n            }\n        }\n\n        if (inVertFormat.get() == \"XZ-Y\")\n        {\n            for (let i = 0; i < geom.vertices.length; i += 3)\n            {\n                let t = geom.vertices[i + 2];\n                geom.vertices[i + 2] = -geom.vertices[i + 1];\n                geom.vertices[i + 1] = t;\n            }\n        }\n\n        if (this.primitive == this.TRIANGLES)\n        {\n            if (inCalcNormals.get() == \"Force Smooth\" || inCalcNormals.get() == false) geom.calculateNormals();\n            else if (!geom.vertexNormals.length && inCalcNormals.get() == \"Auto\") geom.calculateNormals({ \"smooth\": false });\n\n            if ((!geom.biTangents || geom.biTangents.length == 0) && geom.tangents)\n            {\n                const bitan = vec3.create();\n                const tan = vec3.create();\n\n                const tangents = geom.tangents;\n                geom.tangents = new Float32Array(tangents.length / 4 * 3);\n                geom.biTangents = new Float32Array(tangents.length / 4 * 3);\n\n                for (let i = 0; i < tangents.length; i += 4)\n                {\n                    const idx = i / 4 * 3;\n\n                    vec3.cross(\n                        bitan,\n                        [geom.vertexNormals[idx], geom.vertexNormals[idx + 1], geom.vertexNormals[idx + 2]],\n                        [tangents[i], tangents[i + 1], tangents[i + 2]]\n                    );\n\n                    vec3.div(bitan, bitan, [tangents[i + 3], tangents[i + 3], tangents[i + 3]]);\n                    vec3.normalize(bitan, bitan);\n\n                    geom.biTangents[idx + 0] = bitan[0];\n                    geom.biTangents[idx + 1] = bitan[1];\n                    geom.biTangents[idx + 2] = bitan[2];\n\n                    geom.tangents[idx + 0] = tangents[i + 0];\n                    geom.tangents[idx + 1] = tangents[i + 1];\n                    geom.tangents[idx + 2] = tangents[i + 2];\n                }\n            }\n\n            if (geom.tangents.length === 0 || inCalcNormals.get() != \"Never\")\n            {\n                // console.log(\"[gltf ]no tangents... calculating tangents...\");\n                geom.calcTangentsBitangents();\n            }\n        }\n\n        this.geom = geom;\n\n        this.bounds = geom.getBounds();\n    }\n\n    render(cgl, ignoreMaterial, skinRenderer)\n    {\n        if (!this.mesh && this.geom && this.geom.verticesIndices)\n        {\n            let g = this.geom;\n            if (this.geom.vertices.length / 3 > 64000)\n            {\n                g = this.geom.copy();\n                g.unIndex(false, true);\n            }\n\n            let glprim;\n\n            if (cgl.gl)\n            {\n                if (this.primitive == this.TRIANGLES)glprim = cgl.gl.TRIANGLES;\n                else if (this.primitive == this.LINES)glprim = cgl.gl.LINES;\n                else if (this.primitive == this.LINE_STRIP)glprim = cgl.gl.LINE_STRIP;\n                else if (this.primitive == this.POINTS)glprim = cgl.gl.POINTS;\n                else\n                {\n                    op.logWarn(\"unknown primitive type\", this);\n                }\n            }\n\n            this.mesh = op.patch.cg.createMesh(g, { \"glPrimitive\": glprim });\n        }\n\n        if (this.mesh)\n        {\n            // update morphTargets\n            if (this.geom && this.geom.morphTargets.length && !this.morphTargetsRenderMod)\n            {\n                this.mesh.addVertexNumbers = true;\n                this.morphTargetsRenderMod = new GltfTargetsRenderer(this);\n            }\n\n            let useMat = !ignoreMaterial && this.material != -1 && gltf.shaders[this.material];\n            if (skinRenderer)useMat = false;\n\n            if (useMat) cgl.pushShader(gltf.shaders[this.material]);\n\n            const currentShader = cgl.getShader() || {};\n            const uniDiff = currentShader.uniformColorDiffuse;\n\n            const uniPbrMetalness = currentShader.uniformPbrMetalness;\n            const uniPbrRoughness = currentShader.uniformPbrRoughness;\n\n            // if (gltf.shaders[this.material] && !inUseMatProps.get())\n            // {\n            //     gltf.shaders[this.material]=null;\n            // }\n\n            if (!gltf.shaders[this.material] && inUseMatProps.get())\n            {\n                if (uniDiff && this._matDiffuseColor)\n                {\n                    this._matDiffuseColorOrig = [uniDiff.getValue()[0], uniDiff.getValue()[1], uniDiff.getValue()[2], uniDiff.getValue()[3]];\n                    uniDiff.setValue(this._matDiffuseColor);\n                }\n\n                if (uniPbrMetalness)\n                    if (this._matPbrMetalness != null)\n                    {\n                        this._matPbrMetalnessOrig = uniPbrMetalness.getValue();\n                        uniPbrMetalness.setValue(this._matPbrMetalness);\n                    }\n                    else\n                        uniPbrMetalness.setValue(0);\n\n                if (uniPbrRoughness)\n                    if (this._matPbrRoughness != null)\n                    {\n                        this._matPbrRoughnessOrig = uniPbrRoughness.getValue();\n                        uniPbrRoughness.setValue(this._matPbrRoughness);\n                    }\n                    else\n                    {\n                        uniPbrRoughness.setValue(0);\n                    }\n            }\n\n            if (this.morphTargetsRenderMod) this.morphTargetsRenderMod.renderStart(cgl, 0);\n            if (this.mesh)\n            {\n                // console.log(this.mesh)\n                // this.mesh.lastMaterial=0;\n                this.mesh.render(cgl.getShader(), ignoreMaterial);\n            }\n            if (this.morphTargetsRenderMod) this.morphTargetsRenderMod.renderFinish(cgl);\n\n            if (inUseMatProps.get())\n            {\n                if (uniDiff && this._matDiffuseColor) uniDiff.setValue(this._matDiffuseColorOrig);\n                if (uniPbrMetalness && this._matPbrMetalnessOrig != undefined) uniPbrMetalness.setValue(this._matPbrMetalnessOrig);\n                if (uniPbrRoughness && this._matPbrRoughnessOrig != undefined) uniPbrRoughness.setValue(this._matPbrRoughnessOrig);\n            }\n\n            if (useMat) cgl.popShader();\n        }\n    }\n};\n","inc_meshGroup_js":"const gltfMeshGroup = class\n{\n    constructor(gltf, m)\n    {\n        this.bounds = new CABLES.CG.BoundingBox();\n        this.meshes = [];\n        this.name = m.name;\n        const prims = m.primitives;\n\n        for (let i = 0; i < prims.length; i++)\n        {\n            const mesh = new gltfMesh(this.name, prims[i], gltf,\n                (mesh) =>\n                {\n                    mesh.extras = m.extras;\n                    this.bounds.apply(mesh.bounds);\n                });\n\n            mesh.submeshIndex = i;\n            this.meshes.push(mesh);\n        }\n    }\n\n    render(cgl, ignoreMat, skinRenderer, _time, weights)\n    {\n        for (let i = 0; i < this.meshes.length; i++)\n        {\n            const useMat = gltf.shaders[this.meshes[i].material];\n\n            if (!ignoreMat && useMat) cgl.pushShader(gltf.shaders[this.meshes[i].material]);\n            // console.log(gltf.shaders[this.meshes[i].material],this.meshes[i].material)\n            if (skinRenderer)skinRenderer.renderStart(cgl, _time);\n            if (weights) this.meshes[i].weights = weights;\n            this.meshes[i].render(cgl, ignoreMat, skinRenderer, _time);\n            if (skinRenderer)skinRenderer.renderFinish(cgl);\n            if (!ignoreMat && useMat) cgl.popShader();\n        }\n    }\n};\n","inc_node_js":"const gltfNode = class\n{\n    constructor(node, gltf)\n    {\n        this.isChild = node.isChild || false;\n        this.name = node.name;\n        if (node.hasOwnProperty(\"camera\")) this.camera = node.camera;\n        this.hidden = false;\n        this.mat = mat4.create();\n        this._animActions = {};\n        this.animWeights = [];\n        this._animMat = mat4.create();\n        this._tempMat = mat4.create();\n        this._tempQuat = quat.create();\n        this._tempRotmat = mat4.create();\n        this.mesh = null;\n        this.children = [];\n        this._node = node;\n        this._gltf = gltf;\n        this.absMat = mat4.create();\n        this.addTranslate = null;\n        this._tempAnimScale = null;\n        this.addMulMat = null;\n        this.updateMatrix();\n        this.skinRenderer = null;\n        this.copies = [];\n    }\n\n    get skin()\n    {\n        if (this._node.hasOwnProperty(\"skin\")) return this._node.skin;\n        else return -1;\n    }\n\n    copy()\n    {\n        this.isCopy = true;\n        const n = new gltfNode(this._node, this._gltf);\n        n.copyOf = this;\n\n        n._animActions = this._animActions;\n        n.children = this.children;\n        if (this.skin) n.skinRenderer = new GltfSkin(this);\n\n        this.updateMatrix();\n        return n;\n    }\n\n    hasSkin()\n    {\n        if (this._node.hasOwnProperty(\"skin\")) return this._gltf.json.skins[this._node.skin].name || \"unknown\";\n        return false;\n    }\n\n    initSkin()\n    {\n        if (this.skin > -1)\n        {\n            this.skinRenderer = new GltfSkin(this);\n        }\n    }\n\n    updateMatrix()\n    {\n        mat4.identity(this.mat);\n        if (this._node.translation) mat4.translate(this.mat, this.mat, this._node.translation);\n\n        if (this._node.rotation)\n        {\n            const rotmat = mat4.create();\n            this._rot = this._node.rotation;\n\n            mat4.fromQuat(rotmat, this._node.rotation);\n            mat4.mul(this.mat, this.mat, rotmat);\n        }\n\n        if (this._node.scale)\n        {\n            this._scale = this._node.scale;\n            mat4.scale(this.mat, this.mat, this._scale);\n        }\n\n        if (this._node.hasOwnProperty(\"mesh\"))\n        {\n            this.mesh = this._gltf.meshes[this._node.mesh];\n            if (this.isCopy)\n            {\n                // console.log(this.mesh);\n            }\n        }\n\n        if (this._node.children)\n        {\n            for (let i = 0; i < this._node.children.length; i++)\n            {\n                this._gltf.json.nodes[i].isChild = true;\n                if (this._gltf.nodes[this._node.children[i]]) this._gltf.nodes[this._node.children[i]].isChild = true;\n                this.children.push(this._node.children[i]);\n            }\n        }\n    }\n\n    unHide()\n    {\n        this.hidden = false;\n        for (let i = 0; i < this.children.length; i++)\n            if (this.children[i].unHide) this.children[i].unHide();\n    }\n\n    calcBounds(gltf, mat, bounds)\n    {\n        const localMat = mat4.create();\n\n        if (mat) mat4.copy(localMat, mat);\n        if (this.mat) mat4.mul(localMat, localMat, this.mat);\n\n        if (this.mesh)\n        {\n            const bb = this.mesh.bounds.copy();\n            bb.mulMat4(localMat);\n            bounds.apply(bb);\n\n            if (bounds.changed)\n            {\n                boundingPoints.push(\n                    bb._min[0] || 0, bb._min[1] || 0, bb._min[2] || 0,\n                    bb._max[0] || 0, bb._max[1] || 0, bb._max[2] || 0);\n            }\n        }\n\n        for (let i = 0; i < this.children.length; i++)\n        {\n            if (gltf.nodes[this.children[i]] && gltf.nodes[this.children[i]].calcBounds)\n            {\n                const b = gltf.nodes[this.children[i]].calcBounds(gltf, localMat, bounds);\n\n                bounds.apply(b);\n            }\n        }\n\n        if (bounds.changed) return bounds;\n        else return null;\n    }\n\n    setAnimAction(name)\n    {\n        // console.log(\"setAnimAction:\", name);\n        if (!name) return;\n\n        this._currentAnimaction = name;\n\n        if (name && !this._animActions[name])\n        {\n            // console.log(\"no action found:\", name,this._animActions);\n            return null;\n        }\n\n        // else console.log(\"YES action found:\", name);\n        // console.log(this._animActions);\n\n        for (let path in this._animActions[name])\n        {\n            if (path == \"translation\") this._animTrans = this._animActions[name][path];\n            else if (path == \"rotation\") this._animRot = this._animActions[name][path];\n            else if (path == \"scale\") this._animScale = this._animActions[name][path];\n            else if (path == \"weights\") this.animWeights = this._animActions[name][path];\n            else console.log(\"[gltfNode] unknown anim path\", path, this._animActions[name][path]);\n        }\n    }\n\n    setAnim(path, name, anims)\n    {\n        if (!path || !name || !anims) return;\n\n        // console.log(\"setanim\", this._node.name, path, name, anims);\n\n        this._animActions[name] = this._animActions[name] || {};\n\n        // console.log(this._animActions);\n        // debugger;\n\n        // for (let i = 0; i < this.copies.length; i++) this.copies[i]._animActions = this._animActions;\n\n        if (this._animActions[name][path]) op.log(\"[gltfNode] animation action path already exists\", name, path, this._animActions[name][path]);\n\n        this._animActions[name][path] = anims;\n\n        if (path == \"translation\") this._animTrans = anims;\n        else if (path == \"rotation\") this._animRot = anims;\n        else if (path == \"scale\") this._animScale = anims;\n        else if (path == \"weights\")\n        {\n            // console.log(\"weights\",name,path,anims)\n            this.animWeights = this._animActions[name][path];\n            // console.log(this.animWeights);\n        }\n        else console.warn(\"unknown anim path\", path, anims);\n    }\n\n    modelMatLocal()\n    {\n        return this._animMat || this.mat;\n    }\n\n    modelMatAbs()\n    {\n        return this.absMat;\n    }\n\n    transform(cgl, _time)\n    {\n        if (!_time && _time != 0)_time = time;\n\n        this._lastTimeTrans = _time;\n\n        // console.log(this._rot)\n\n        gltfTransforms++;\n\n        if (!this._animTrans && !this._animRot && !this._animScale)\n        {\n            mat4.mul(cgl.mMatrix, cgl.mMatrix, this.mat);\n            this._animMat = null;\n        }\n        else\n        {\n            this._animMat = this._animMat || mat4.create();\n            mat4.identity(this._animMat);\n\n            const playAnims = true;\n\n            if (playAnims && this._animTrans)\n            {\n                mat4.translate(this._animMat, this._animMat, [\n                    this._animTrans[0].getValue(_time),\n                    this._animTrans[1].getValue(_time),\n                    this._animTrans[2].getValue(_time)]);\n            }\n            else\n            if (this._node.translation) mat4.translate(this._animMat, this._animMat, this._node.translation);\n\n            if (playAnims && this._animRot)\n            {\n                if (this._animRot[0].defaultEasing == CABLES.EASING_LINEAR) CABLES.Anim.slerpQuaternion(_time, this._tempQuat, this._animRot[0], this._animRot[1], this._animRot[2], this._animRot[3]);\n                else if (this._animRot[0].defaultEasing == CABLES.EASING_ABSOLUTE)\n                {\n                    this._tempQuat[0] = this._animRot[0].getValue(_time);\n                    this._tempQuat[1] = this._animRot[1].getValue(_time);\n                    this._tempQuat[2] = this._animRot[2].getValue(_time);\n                    this._tempQuat[3] = this._animRot[3].getValue(_time);\n                }\n                else if (this._animRot[0].defaultEasing == CABLES.EASING_CUBICSPLINE)\n                {\n                    CABLES.Anim.slerpQuaternion(_time, this._tempQuat, this._animRot[0], this._animRot[1], this._animRot[2], this._animRot[3]);\n                }\n\n                mat4.fromQuat(this._tempMat, this._tempQuat);\n                mat4.mul(this._animMat, this._animMat, this._tempMat);\n            }\n            else if (this._rot)\n            {\n                mat4.fromQuat(this._tempRotmat, this._rot);\n                mat4.mul(this._animMat, this._animMat, this._tempRotmat);\n            }\n\n            if (playAnims && this._animScale)\n            {\n                if (!this._tempAnimScale) this._tempAnimScale = [1, 1, 1];\n                this._tempAnimScale[0] = this._animScale[0].getValue(_time);\n                this._tempAnimScale[1] = this._animScale[1].getValue(_time);\n                this._tempAnimScale[2] = this._animScale[2].getValue(_time);\n                mat4.scale(this._animMat, this._animMat, this._tempAnimScale);\n            }\n            else if (this._scale) mat4.scale(this._animMat, this._animMat, this._scale);\n\n            mat4.mul(cgl.mMatrix, cgl.mMatrix, this._animMat);\n        }\n\n        if (this.animWeights)\n        {\n            this.weights = this.weights || [];\n\n            let str = \"\";\n            for (let i = 0; i < this.animWeights.length; i++)\n            {\n                this.weights[i] = this.animWeights[i].getValue(_time);\n                str += this.weights[i] + \"/\";\n            }\n\n            // console.log(str);\n            // this.mesh.weights=this.animWeights.get(_time);\n            // console.log(this.animWeights);\n        }\n\n        if (this.addTranslate) mat4.translate(cgl.mMatrix, cgl.mMatrix, this.addTranslate);\n\n        if (this.addMulMat) mat4.mul(cgl.mMatrix, cgl.mMatrix, this.addMulMat);\n\n        mat4.copy(this.absMat, cgl.mMatrix);\n    }\n\n    render(cgl, dontTransform, dontDrawMesh, ignoreMaterial, ignoreChilds, drawHidden, _time)\n    {\n        if (!dontTransform) cgl.pushModelMatrix();\n\n        if (_time === undefined) _time = gltf.time;\n\n        if (!dontTransform || this.skinRenderer) this.transform(cgl, _time);\n\n        if (this.hidden && !drawHidden)\n        {\n        }\n        else\n        {\n            if (this.skinRenderer)\n            {\n                this.skinRenderer.time = _time;\n                if (!dontDrawMesh)\n                    this.mesh.render(cgl, ignoreMaterial, this.skinRenderer, _time, this.weights);\n            }\n            else\n            {\n                if (this.mesh && !dontDrawMesh)\n                    this.mesh.render(cgl, ignoreMaterial, null, _time, this.weights);\n            }\n        }\n\n        if (!ignoreChilds && !this.hidden)\n            for (let i = 0; i < this.children.length; i++)\n                if (gltf.nodes[this.children[i]])\n                    gltf.nodes[this.children[i]].render(cgl, dontTransform, dontDrawMesh, ignoreMaterial, ignoreChilds, drawHidden, _time);\n\n        if (!dontTransform)cgl.popModelMatrix();\n    }\n};\n","inc_print_js":"let tab = null;\n\nfunction closeTab()\n{\n    if (tab)gui.mainTabs.closeTab(tab.id);\n    tab = null;\n}\n\nfunction formatVec(arr)\n{\n    const nums = [];\n    for (let i = 0; i < arr.length; i++)\n    {\n        nums.push(Math.round(arr[i] * 1000) / 1000);\n    }\n\n    return nums.join(\",\");\n}\n\nfunction printNode(html, node, level)\n{\n    if (!gltf) return;\n\n    html += \"<tr class=\\\"row\\\">\";\n\n    let ident = \"\";\n    let identSpace = \"\";\n\n    for (let i = 1; i < level; i++)\n    {\n        identSpace += \"&nbsp;&nbsp;&nbsp;\";\n        let identClass = \"identBg\";\n        if (i == 1)identClass = \"identBgLevel0\";\n        ident += \"<td class=\\\"ident \" + identClass + \"\\\" ><div style=\\\"\\\"></div></td>\";\n    }\n    let id = CABLES.uuid();\n    html += ident;\n    html += \"<td colspan=\\\"\" + (21 - level) + \"\\\">\";\n\n    if (node.mesh && node.mesh.meshes.length)html += \"<span class=\\\"icon icon-cube\\\"></span>&nbsp;\";\n    else html += \"<span class=\\\"icon icon-box-select\\\"></span> &nbsp;\";\n\n    html += node.name + \"</td><td></td>\";\n\n    if (node.mesh)\n    {\n        html += \"<td>\";\n        for (let i = 0; i < node.mesh.meshes.length; i++)\n        {\n            if (i > 0)html += \", \";\n            html += node.mesh.meshes[i].name;\n        }\n\n        html += \"</td>\";\n\n        html += \"<td>\";\n        html += node.hasSkin() || \"-\";\n        html += \"</td>\";\n\n        html += \"<td>\";\n        let countMats = 0;\n        for (let i = 0; i < node.mesh.meshes.length; i++)\n        {\n            if (countMats > 0)html += \", \";\n            if (gltf.json.materials && node.mesh.meshes[i].hasOwnProperty(\"material\"))\n            {\n                if (gltf.json.materials[node.mesh.meshes[i].material])\n                {\n                    html += gltf.json.materials[node.mesh.meshes[i].material].name;\n                    countMats++;\n                }\n            }\n        }\n        if (countMats == 0)html += \"none\";\n        html += \"</td>\";\n    }\n    else\n    {\n        html += \"<td>-</td><td>-</td><td>-</td>\";\n    }\n\n    html += \"<td>\";\n\n    if (node._node.translation || node._node.rotation || node._node.scale)\n    {\n        let info = \"\";\n\n        if (node._node.translation)info += \"Translate: `\" + formatVec(node._node.translation) + \"` || \";\n        if (node._node.rotation)info += \"Rotation: `\" + formatVec(node._node.rotation) + \"` || \";\n        if (node._node.scale)info += \"Scale: `\" + formatVec(node._node.scale) + \"` || \";\n\n        html += \"<span class=\\\"icon icon-gizmo info\\\" data-info=\\\"\" + info + \"\\\"></span> &nbsp;\";\n    }\n\n    if (node._animRot || node._animScale || node._animTrans)\n    {\n        let info = \"Animated: \";\n        if (node._animRot) info += \"Rot \";\n        if (node._animScale) info += \"Scale \";\n        if (node._animTrans) info += \"Trans \";\n\n        html += \"<span class=\\\"icon icon-clock info\\\" data-info=\\\"\" + info + \"\\\"></span>&nbsp;\";\n    }\n\n    if (!node._node.translation && !node._node.rotation && !node._node.scale && !node._animRot && !node._animScale && !node._animTrans) html += \"-\";\n\n    html += \"</td>\";\n\n    html += \"<td>\";\n    let hideclass = \"\";\n    if (node.hidden)hideclass = \"node-hidden\";\n\n    // html+='';\n    html += \"<a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').exposeNode('\" + node.name + \"','transform')\\\" class=\\\"treebutton\\\">Transform</a>\";\n    html += \" <a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').exposeNode('\" + node.name + \"','hierarchy')\\\" class=\\\"treebutton\\\">Hierarchy</a>\";\n    html += \" <a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').exposeNode('\" + node.name + \"')\\\" class=\\\"treebutton\\\">Node</a>\";\n\n    if (node.hasSkin())\n        html += \" <a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').exposeNode('\" + node.name + \"',false,{skin:true});\\\" class=\\\"treebutton\\\">Skin</a>\";\n\n    html += \"</td><td>\";\n    html += \"&nbsp;<span class=\\\"icon iconhover icon-eye \" + hideclass + \"\\\" onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').toggleNodeVisibility('\" + node.name + \"');this.classList.toggle('node-hidden');\\\"></span>\";\n    html += \"</td>\";\n\n    html += \"</tr>\";\n\n    if (node.children)\n    {\n        for (let i = 0; i < node.children.length; i++)\n            html = printNode(html, gltf.nodes[node.children[i]], level + 1);\n    }\n\n    return html;\n}\n\nfunction printMaterial(mat, idx)\n{\n    let html = \"<tr>\";\n    html += \" <td>\" + idx + \"</td>\";\n    html += \" <td>\" + mat.name + \"</td>\";\n\n    html += \" <td>\";\n\n    const info = JSON.stringify(mat, null, 4).replaceAll(\"\\\"\", \"\").replaceAll(\"\\n\", \"<br/>\");\n\n    html += \"<span class=\\\"icon icon-info\\\" onclick=\\\"new CABLES.UI.ModalDialog({ 'html': '<pre>\" + info + \"</pre>', 'title': '\" + mat.name + \"' });\\\"></span>&nbsp;\";\n\n    if (mat.pbrMetallicRoughness && mat.pbrMetallicRoughness.baseColorFactor)\n    {\n        let rgb = \"\";\n        rgb += \"\" + Math.round(mat.pbrMetallicRoughness.baseColorFactor[0] * 255);\n        rgb += \",\" + Math.round(mat.pbrMetallicRoughness.baseColorFactor[1] * 255);\n        rgb += \",\" + Math.round(mat.pbrMetallicRoughness.baseColorFactor[2] * 255);\n\n        html += \"<div style=\\\"width:15px;height:15px;background-color:rgb(\" + rgb + \");display:inline-block\\\">&nbsp;</a>\";\n    }\n    html += \" <td style=\\\"\\\">\" + (gltf.shaders[idx] ? \"-\" : \"<a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').assignMaterial('\" + mat.name + \"')\\\" class=\\\"treebutton\\\">Assign</a>\") + \"<td>\";\n    html += \"<td>\";\n\n    html += \"</tr>\";\n    return html;\n}\n\nfunction printInfo()\n{\n    if (!gltf) return;\n\n    const startTime = performance.now();\n    const sizes = {};\n    let html = \"<div style=\\\"overflow:scroll;width:100%;height:100%\\\">\";\n\n    html += \"File: <a href=\\\"\" + CABLES.platform.getCablesUrl() + \"/asset/patches/?filename=\" + inFile.get() + \"\\\" target=\\\"_blank\\\">\" + CABLES.basename(inFile.get()) + \"</a><br/>\";\n\n    html += \"Generator:\" + gltf.json.asset.generator;\n\n    let numNodes = 0;\n    if (gltf.json.nodes)numNodes = gltf.json.nodes.length;\n    html += \"<div id=\\\"groupNodes\\\">Nodes (\" + numNodes + \")</div>\";\n\n    html += \"<table id=\\\"sectionNodes\\\" class=\\\"table treetable\\\">\";\n\n    html += \"<tr>\";\n    html += \" <th colspan=\\\"21\\\">Name</th>\";\n    html += \" <th>Mesh</th>\";\n    html += \" <th>Skin</th>\";\n    html += \" <th>Material</th>\";\n    html += \" <th>Transform</th>\";\n    html += \" <th>Expose</th>\";\n    html += \" <th></th>\";\n    html += \"</tr>\";\n\n    for (let i = 0; i < gltf.nodes.length; i++)\n    {\n        if (!gltf.nodes[i].isChild)\n            html = printNode(html, gltf.nodes[i], 1);\n    }\n    html += \"</table>\";\n\n    // / //////////////////\n\n    let numMaterials = 0;\n    if (gltf.json.materials)numMaterials = gltf.json.materials.length;\n    html += \"<div id=\\\"groupMaterials\\\">Materials (\" + numMaterials + \")</div>\";\n\n    if (!gltf.json.materials || gltf.json.materials.length == 0)\n    {\n    }\n    else\n    {\n        html += \"<table id=\\\"materialtable\\\"  class=\\\"table treetable\\\">\";\n        html += \"<tr>\";\n        html += \" <th>Index</th>\";\n        html += \" <th>Name</th>\";\n        html += \" <th>Color</th>\";\n        html += \" <th>Function</th>\";\n        html += \" <th></th>\";\n        html += \"</tr>\";\n        for (let i = 0; i < gltf.json.materials.length; i++)\n        {\n            html += printMaterial(gltf.json.materials[i], i);\n        }\n        html += \"</table>\";\n    }\n\n    // / ///////////////////////\n\n    html += \"<div id=\\\"groupMeshes\\\">Meshes (\" + gltf.json.meshes.length + \")</div>\";\n\n    html += \"<table id=\\\"meshestable\\\"  class=\\\"table treetable\\\">\";\n    html += \"<tr>\";\n    html += \" <th>Name</th>\";\n    html += \" <th>Node</th>\";\n    html += \" <th>Material</th>\";\n    html += \" <th>Vertices</th>\";\n    html += \" <th>Attributes</th>\";\n    html += \"</tr>\";\n\n    let sizeBufferViews = [];\n    sizes.meshes = 0;\n    sizes.meshTargets = 0;\n\n    for (let i = 0; i < gltf.json.meshes.length; i++)\n    {\n        html += \"<tr>\";\n        html += \"<td>\" + gltf.json.meshes[i].name + \"</td>\";\n\n        html += \"<td>\";\n        let count = 0;\n        let nodename = \"\";\n        for (let j = 0; j < gltf.json.nodes.length; j++)\n        {\n            if (gltf.json.nodes[j].mesh == i)\n            {\n                count++;\n                if (count == 1)\n                {\n                    nodename = gltf.json.nodes[j].name;\n                }\n            }\n        }\n        if (count > 1) html += (count) + \" nodes (\" + nodename + \" ...)\";\n        else html += nodename;\n        html += \"</td>\";\n\n        // -------\n\n        html += \"<td>\";\n        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)\n        {\n            if (gltf.json.meshes[i].primitives[j].hasOwnProperty(\"material\"))\n            {\n                if (gltf.json.materials[gltf.json.meshes[i]])\n                {\n                    html += gltf.json.materials[gltf.json.meshes[i].primitives[j].material].name + \" \";\n                }\n            }\n            else html += \"None\";\n        }\n        html += \"</td>\";\n\n        html += \"<td>\";\n        let numVerts = 0;\n        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)\n        {\n            if (gltf.json.meshes[i].primitives[j].attributes.POSITION != undefined)\n            {\n                let v = parseInt(gltf.json.accessors[gltf.json.meshes[i].primitives[j].attributes.POSITION].count);\n                numVerts += v;\n                html += \"\" + v + \"<br/>\";\n            }\n            else html += \"-<br/>\";\n        }\n\n        if (gltf.json.meshes[i].primitives.length > 1)\n            html += \"=\" + numVerts;\n        html += \"</td>\";\n\n        html += \"<td>\";\n        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)\n        {\n            html += Object.keys(gltf.json.meshes[i].primitives[j].attributes);\n            html += \" <a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').exposeGeom('\" + gltf.json.meshes[i].name + \"',\" + j + \")\\\" class=\\\"treebutton\\\">Geometry</a>\";\n            html += \"<br/>\";\n\n            if (gltf.json.meshes[i].primitives[j].targets)\n            {\n                html += gltf.json.meshes[i].primitives[j].targets.length + \" targets<br/>\";\n\n                if (gltf.json.meshes[i].extras && gltf.json.meshes[i].extras.targetNames)\n                    html += \"Targetnames:<br/>\" + gltf.json.meshes[i].extras.targetNames.join(\"<br/>\");\n\n                html += \"<br/>\";\n            }\n        }\n\n        html += \"</td>\";\n        html += \"</tr>\";\n\n        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)\n        {\n            const accessor = gltf.json.accessors[gltf.json.meshes[i].primitives[j].indices];\n            if (accessor)\n            {\n                let bufView = accessor.bufferView;\n\n                if (sizeBufferViews.indexOf(bufView) == -1)\n                {\n                    sizeBufferViews.push(bufView);\n                    if (gltf.json.bufferViews[bufView])sizes.meshes += gltf.json.bufferViews[bufView].byteLength;\n                }\n            }\n\n            for (let k in gltf.json.meshes[i].primitives[j].attributes)\n            {\n                const attr = gltf.json.meshes[i].primitives[j].attributes[k];\n                const bufView2 = gltf.json.accessors[attr].bufferView;\n\n                if (sizeBufferViews.indexOf(bufView2) == -1)\n                {\n                    sizeBufferViews.push(bufView2);\n                    if (gltf.json.bufferViews[bufView2])sizes.meshes += gltf.json.bufferViews[bufView2].byteLength;\n                }\n            }\n\n            if (gltf.json.meshes[i].primitives[j].targets)\n                for (let k = 0; k < gltf.json.meshes[i].primitives[j].targets.length; k++)\n                {\n                    for (let l in gltf.json.meshes[i].primitives[j].targets[k])\n                    {\n                        const accessorIdx = gltf.json.meshes[i].primitives[j].targets[k][l];\n                        const accessor = gltf.json.accessors[accessorIdx];\n                        const bufView2 = accessor.bufferView;\n                        console.log(\"accessor\", accessor);\n                        if (sizeBufferViews.indexOf(bufView2) == -1)\n                            if (gltf.json.bufferViews[bufView2])\n                            {\n                                sizeBufferViews.push(bufView2);\n                                sizes.meshTargets += gltf.json.bufferViews[bufView2].byteLength;\n                            }\n                    }\n                }\n        }\n    }\n    html += \"</table>\";\n\n    // / //////////////////////////////////\n\n    let numSamplers = 0;\n    let numAnims = 0;\n    let numKeyframes = 0;\n\n    if (gltf.json.animations)\n    {\n        numAnims = gltf.json.animations.length;\n        for (let i = 0; i < gltf.json.animations.length; i++)\n        {\n            numSamplers += gltf.json.animations[i].samplers.length;\n        }\n    }\n\n    html += \"<div id=\\\"groupAnims\\\">Animations (\" + numAnims + \"/\" + numSamplers + \")</div>\";\n\n    if (gltf.json.animations)\n    {\n        html += \"<table id=\\\"sectionAnim\\\" class=\\\"table treetable\\\">\";\n        html += \"<tr>\";\n        html += \"  <th>Name</th>\";\n        html += \"  <th>Target node</th>\";\n        html += \"  <th>Path</th>\";\n        html += \"  <th>Interpolation</th>\";\n        html += \"  <th>Keys</th>\";\n        html += \"</tr>\";\n\n\n        sizes.animations = 0;\n\n        for (let i = 0; i < gltf.json.animations.length; i++)\n        {\n            for (let j = 0; j < gltf.json.animations[i].samplers.length; j++)\n            {\n                let bufView = gltf.json.accessors[gltf.json.animations[i].samplers[j].input].bufferView;\n                if (sizeBufferViews.indexOf(bufView) == -1)\n                {\n                    sizeBufferViews.push(bufView);\n                    sizes.animations += gltf.json.bufferViews[bufView].byteLength;\n                }\n\n                bufView = gltf.json.accessors[gltf.json.animations[i].samplers[j].output].bufferView;\n                if (sizeBufferViews.indexOf(bufView) == -1)\n                {\n                    sizeBufferViews.push(bufView);\n                    sizes.animations += gltf.json.bufferViews[bufView].byteLength;\n                }\n            }\n\n            for (let j = 0; j < gltf.json.animations[i].channels.length; j++)\n            {\n                html += \"<tr>\";\n                html += \"  <td> Anim \" + i + \": \" + gltf.json.animations[i].name + \"</td>\";\n\n                html += \"  <td>\" + gltf.nodes[gltf.json.animations[i].channels[j].target.node].name + \"</td>\";\n                html += \"  <td>\";\n                html += gltf.json.animations[i].channels[j].target.path + \" \";\n                html += \"  </td>\";\n\n                const smplidx = gltf.json.animations[i].channels[j].sampler;\n                const smplr = gltf.json.animations[i].samplers[smplidx];\n\n                html += \"  <td>\" + smplr.interpolation + \"</td>\";\n\n                html += \"  <td>\" + gltf.json.accessors[smplr.output].count;\n                numKeyframes += gltf.json.accessors[smplr.output].count;\n\n                // html += \"&nbsp;&nbsp;<a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').showAnim('\" + i + \"','\" + j + \"')\\\" class=\\\"icon icon-search\\\"></a>\";\n\n                html += \"</td>\";\n\n                html += \"</tr>\";\n            }\n        }\n\n        html += \"<tr>\";\n        html += \"  <td></td>\";\n        html += \"  <td></td>\";\n        html += \"  <td></td>\";\n        html += \"  <td></td>\";\n        html += \"  <td>\" + numKeyframes + \" total</td>\";\n        html += \"</tr>\";\n        html += \"</table>\";\n    }\n    else\n    {\n\n    }\n\n    // / ///////////////////\n\n    let numImages = 0;\n    if (gltf.json.images)numImages = gltf.json.images.length;\n    html += \"<div id=\\\"groupImages\\\">Images (\" + numImages + \")</div>\";\n\n    if (gltf.json.images)\n    {\n        html += \"<table id=\\\"sectionImages\\\" class=\\\"table treetable\\\">\";\n\n        html += \"<tr>\";\n        html += \"  <th>name</th>\";\n        html += \"  <th>type</th>\";\n        html += \"  <th>func</th>\";\n        html += \"</tr>\";\n\n        sizes.images = 0;\n\n        for (let i = 0; i < gltf.json.images.length; i++)\n        {\n            if (gltf.json.images[i].hasOwnProperty(\"bufferView\"))\n            {\n                // if (sizeBufferViews.indexOf(gltf.json.images[i].hasOwnProperty(\"bufferView\")) == -1)console.log(\"image bufferview already there?!\");\n                // else\n                sizes.images += gltf.json.bufferViews[gltf.json.images[i].bufferView].byteLength;\n            }\n            else console.log(\"image has no bufferview?!\");\n\n            html += \"<tr>\";\n            html += \"<td>\" + gltf.json.images[i].name + \"</td>\";\n            html += \"<td>\" + gltf.json.images[i].mimeType + \"</td>\";\n            html += \"<td>\";\n\n            let name = gltf.json.images[i].name;\n            if (name === undefined)name = gltf.json.images[i].bufferView;\n\n            html += \"<a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').exposeTexture('\" + name + \"')\\\" class=\\\"treebutton\\\">Expose</a>\";\n            html += \"</td>\";\n\n            html += \"<tr>\";\n        }\n        html += \"</table>\";\n    }\n\n    // / ///////////////////////\n\n    let numCameras = 0;\n    if (gltf.json.cameras)numCameras = gltf.json.cameras.length;\n    html += \"<div id=\\\"groupCameras\\\">Cameras (\" + numCameras + \")</div>\";\n\n    if (gltf.json.cameras)\n    {\n        html += \"<table id=\\\"sectionCameras\\\" class=\\\"table treetable\\\">\";\n\n        html += \"<tr>\";\n        html += \"  <th>name</th>\";\n        html += \"  <th>type</th>\";\n        html += \"  <th>info</th>\";\n        html += \"</tr>\";\n\n        for (let i = 0; i < gltf.json.cameras.length; i++)\n        {\n            html += \"<tr>\";\n            html += \"<td>\" + gltf.json.cameras[i].name + \"</td>\";\n            html += \"<td>\" + gltf.json.cameras[i].type + \"</td>\";\n            html += \"<td>\";\n\n            if (gltf.json.cameras[i].perspective)\n            {\n                html += \"yfov: \" + Math.round(gltf.json.cameras[i].perspective.yfov * 100) / 100;\n                html += \", \";\n                html += \"zfar: \" + Math.round(gltf.json.cameras[i].perspective.zfar * 100) / 100;\n                html += \", \";\n                html += \"znear: \" + Math.round(gltf.json.cameras[i].perspective.znear * 100) / 100;\n            }\n            html += \"</td>\";\n\n            html += \"<tr>\";\n        }\n        html += \"</table>\";\n    }\n\n    // / ////////////////////////////////////\n\n    let numSkins = 0;\n    if (gltf.json.skins)numSkins = gltf.json.skins.length;\n    html += \"<div id=\\\"groupSkins\\\">Skins (\" + numSkins + \")</div>\";\n\n    if (gltf.json.skins)\n    {\n        // html += \"<h3>Skins (\" + gltf.json.skins.length + \")</h3>\";\n        html += \"<table id=\\\"sectionSkins\\\" class=\\\"table treetable\\\">\";\n\n        html += \"<tr>\";\n        html += \"  <th>name</th>\";\n        html += \"  <th></th>\";\n        html += \"  <th>total joints</th>\";\n        html += \"</tr>\";\n\n        for (let i = 0; i < gltf.json.skins.length; i++)\n        {\n            html += \"<tr>\";\n            html += \"<td>\" + gltf.json.skins[i].name + \"</td>\";\n            html += \"<td>\" + \"</td>\";\n            html += \"<td>\" + gltf.json.skins[i].joints.length + \"</td>\";\n            html += \"<td>\";\n            html += \"</td>\";\n            html += \"<tr>\";\n        }\n        html += \"</table>\";\n    }\n\n    // / ////////////////////////////////////\n\n    if (gltf.timing)\n    {\n        html += \"<div id=\\\"groupTiming\\\">Debug Loading Timing </div>\";\n\n        html += \"<table id=\\\"sectionTiming\\\" class=\\\"table treetable\\\">\";\n\n        html += \"<tr>\";\n        html += \"  <th>task</th>\";\n        html += \"  <th>time used</th>\";\n        html += \"</tr>\";\n\n        let lt = 0;\n        for (let i = 0; i < gltf.timing.length - 1; i++)\n        {\n            html += \"<tr>\";\n            html += \"  <td>\" + gltf.timing[i][0] + \"</td>\";\n            html += \"  <td>\" + (gltf.timing[i + 1][1] - gltf.timing[i][1]) + \" ms</td>\";\n            html += \"</tr>\";\n            // lt = gltf.timing[i][1];\n        }\n        html += \"</table>\";\n    }\n\n    // / //////////////////////////\n\n    let sizeBin = 0;\n    if (gltf.json.buffers)\n        sizeBin = gltf.json.buffers[0].byteLength;\n\n    html += \"<div id=\\\"groupBinary\\\">File Size Allocation (\" + Math.round(sizeBin / 1024) + \"k )</div>\";\n\n    html += \"<table id=\\\"sectionBinary\\\" class=\\\"table treetable\\\">\";\n    html += \"<tr>\";\n    html += \"  <th>name</th>\";\n    html += \"  <th>size</th>\";\n    html += \"  <th>%</th>\";\n    html += \"</tr>\";\n    let sizeUnknown = sizeBin;\n    for (let i in sizes)\n    {\n        // html+=i+':'+Math.round(sizes[i]/1024);\n        html += \"<tr>\";\n        html += \"<td>\" + i + \"</td>\";\n        html += \"<td>\" + readableSize(sizes[i]) + \" </td>\";\n        html += \"<td>\" + Math.round(sizes[i] / sizeBin * 100) + \"% </td>\";\n        html += \"<tr>\";\n        sizeUnknown -= sizes[i];\n    }\n\n    if (sizeUnknown != 0)\n    {\n        html += \"<tr>\";\n        html += \"<td>unknown</td>\";\n        html += \"<td>\" + readableSize(sizeUnknown) + \" </td>\";\n        html += \"<td>\" + Math.round(sizeUnknown / sizeBin * 100) + \"% </td>\";\n        html += \"<tr>\";\n    }\n\n    html += \"</table>\";\n    html += \"</div>\";\n\n    tab = new CABLES.UI.Tab(\"GLTF \" + CABLES.basename(inFile.get()), { \"icon\": \"cube\", \"infotext\": \"tab_gltf\", \"padding\": true, \"singleton\": true });\n    gui.mainTabs.addTab(tab, true);\n\n    tab.addEventListener(\"close\", closeTab);\n    tab.html(html);\n\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupNodes\"), ele.byId(\"sectionNodes\"), false);\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupMaterials\"), ele.byId(\"materialtable\"), true);\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupAnims\"), ele.byId(\"sectionAnim\"), true);\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupMeshes\"), ele.byId(\"meshestable\"), true);\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupCameras\"), ele.byId(\"sectionCameras\"), true);\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupImages\"), ele.byId(\"sectionImages\"), true);\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupSkins\"), ele.byId(\"sectionSkins\"), true);\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupBinary\"), ele.byId(\"sectionBinary\"), true);\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupTiming\"), ele.byId(\"sectionTiming\"), true);\n\n    gui.maintabPanel.show(true);\n}\n\nfunction readableSize(n)\n{\n    if (n > 1024) return Math.round(n / 1024) + \" kb\";\n    if (n > 1024 * 500) return Math.round(n / 1024) + \" mb\";\n    else return n + \" bytes\";\n}\n","inc_skin_js":"const GltfSkin = class\n{\n    constructor(node)\n    {\n        this._mod = null;\n        this._node = node;\n        this._lastTime = 0;\n        this._matArr = [];\n        this._m = mat4.create();\n        this._invBindMatrix = mat4.create();\n        this.identity = true;\n    }\n\n    renderFinish(cgl)\n    {\n        cgl.popModelMatrix();\n        this._mod.unbind();\n    }\n\n    renderStart(cgl, time)\n    {\n        if (!this._mod)\n        {\n            this._mod = new CGL.ShaderModifier(cgl, op.name + this._node.name);\n\n            this._mod.addModule({\n                \"priority\": -2,\n                \"name\": \"MODULE_VERTEX_POSITION\",\n                \"srcHeadVert\": attachments.skin_head_vert || \"\",\n                \"srcBodyVert\": attachments.skin_vert || \"\"\n            });\n\n            this._mod.addUniformVert(\"m4[]\", \"MOD_boneMats\", []);// bohnenmatze\n            const tr = vec3.create();\n        }\n\n        const skinIdx = this._node.skin;\n        const arrLength = gltf.json.skins[skinIdx].joints.length * 16;\n\n        // if (this._lastTime != time || !time)\n        {\n            // this._lastTime=inTime.get();\n            if (this._matArr.length != arrLength) this._matArr.length = arrLength;\n\n            for (let i = 0; i < gltf.json.skins[skinIdx].joints.length; i++)\n            {\n                const i16 = i * 16;\n                const jointIdx = gltf.json.skins[skinIdx].joints[i];\n                const nodeJoint = gltf.nodes[jointIdx];\n\n                for (let j = 0; j < 16; j++)\n                    this._invBindMatrix[j] = gltf.accBuffers[gltf.json.skins[skinIdx].inverseBindMatrices][i16 + j];\n\n                mat4.mul(this._m, nodeJoint.modelMatAbs(), this._invBindMatrix);\n\n                for (let j = 0; j < this._m.length; j++) this._matArr[i16 + j] = this._m[j];\n            }\n\n            this._mod.setUniformValue(\"MOD_boneMats\", this._matArr);\n            this._lastTime = time;\n        }\n\n        this._mod.define(\"SKIN_NUM_BONES\", gltf.json.skins[skinIdx].joints.length);\n        this._mod.bind();\n\n        // draw mesh...\n        cgl.pushModelMatrix();\n        if (this.identity)mat4.identity(cgl.mMatrix);\n    }\n};\n","inc_targets_js":"const GltfTargetsRenderer = class\n{\n    constructor(mesh)\n    {\n        this.mesh = mesh;\n        this.tex = null;\n        this.numRowsPerTarget = 0;\n\n        this.makeTex(mesh.geom);\n    }\n\n    renderFinish(cgl)\n    {\n        cgl.popModelMatrix();\n        this._mod.unbind();\n    }\n\n    renderStart(cgl, time)\n    {\n        if (!this._mod)\n        {\n            this._mod = new CGL.ShaderModifier(cgl, \"gltftarget\");\n\n            this._mod.addModule({\n                \"priority\": -2,\n                \"name\": \"MODULE_VERTEX_POSITION\",\n                \"srcHeadVert\": attachments.targets_head_vert || \"\",\n                \"srcBodyVert\": attachments.targets_vert || \"\"\n            });\n\n            this._mod.addUniformVert(\"4f\", \"MOD_targetTexInfo\", [0, 0, 0, 0]);\n            this._mod.addUniformVert(\"t\", \"MOD_targetTex\", 1);\n            this._mod.addUniformVert(\"f[]\", \"MOD_weights\", []);\n\n            const tr = vec3.create();\n        }\n\n        this._mod.pushTexture(\"MOD_targetTex\", this.tex);\n        if (this.tex && this.mesh.weights)\n        {\n            this._mod.setUniformValue(\"MOD_weights\", this.mesh.weights);\n            this._mod.setUniformValue(\"MOD_targetTexInfo\", [this.tex.width, this.tex.height, this.numRowsPerTarget, this.mesh.weights.length]);\n\n            this._mod.define(\"MOD_NUM_WEIGHTS\", Math.max(1, this.mesh.weights.length));\n        }\n        else\n        {\n            this._mod.define(\"MOD_NUM_WEIGHTS\", 1);\n        }\n        this._mod.bind();\n\n        // draw mesh...\n        cgl.pushModelMatrix();\n        if (this.identity)mat4.identity(cgl.mMatrix);\n    }\n\n    makeTex(geom)\n    {\n        if (!geom.morphTargets || !geom.morphTargets.length) return;\n\n        let w = geom.morphTargets[0].vertices.length / 3;\n        let h = 0;\n        this.numRowsPerTarget = 0;\n\n        if (geom.morphTargets[0].vertices && geom.morphTargets[0].vertices.length) this.numRowsPerTarget++;\n        if (geom.morphTargets[0].vertexNormals && geom.morphTargets[0].vertexNormals.length) this.numRowsPerTarget++;\n        if (geom.morphTargets[0].tangents && geom.morphTargets[0].tangents.length) this.numRowsPerTarget++;\n        if (geom.morphTargets[0].bitangents && geom.morphTargets[0].bitangents.length) this.numRowsPerTarget++;\n\n        h = geom.morphTargets.length * this.numRowsPerTarget;\n\n        // console.log(\"this.numRowsPerTarget\", this.numRowsPerTarget);\n\n        const pixels = new Float32Array(w * h * 4);\n        let row = 0;\n\n        for (let i = 0; i < geom.morphTargets.length; i++)\n        {\n            if (geom.morphTargets[i].vertices && geom.morphTargets[i].vertices.length)\n            {\n                for (let j = 0; j < geom.morphTargets[i].vertices.length; j += 3)\n                {\n                    pixels[((row * w) + (j / 3)) * 4 + 0] = geom.morphTargets[i].vertices[j + 0];\n                    pixels[((row * w) + (j / 3)) * 4 + 1] = geom.morphTargets[i].vertices[j + 1];\n                    pixels[((row * w) + (j / 3)) * 4 + 2] = geom.morphTargets[i].vertices[j + 2];\n                    pixels[((row * w) + (j / 3)) * 4 + 3] = 1;\n                }\n                row++;\n            }\n\n            if (geom.morphTargets[i].vertexNormals && geom.morphTargets[i].vertexNormals.length)\n            {\n                for (let j = 0; j < geom.morphTargets[i].vertexNormals.length; j += 3)\n                {\n                    pixels[(row * w + j / 3) * 4 + 0] = geom.morphTargets[i].vertexNormals[j + 0];\n                    pixels[(row * w + j / 3) * 4 + 1] = geom.morphTargets[i].vertexNormals[j + 1];\n                    pixels[(row * w + j / 3) * 4 + 2] = geom.morphTargets[i].vertexNormals[j + 2];\n                    pixels[(row * w + j / 3) * 4 + 3] = 1;\n                }\n\n                row++;\n            }\n\n            if (geom.morphTargets[i].tangents && geom.morphTargets[i].tangents.length)\n            {\n                for (let j = 0; j < geom.morphTargets[i].tangents.length; j += 3)\n                {\n                    pixels[(row * w + j / 3) * 4 + 0] = geom.morphTargets[i].tangents[j + 0];\n                    pixels[(row * w + j / 3) * 4 + 1] = geom.morphTargets[i].tangents[j + 1];\n                    pixels[(row * w + j / 3) * 4 + 2] = geom.morphTargets[i].tangents[j + 2];\n                    pixels[(row * w + j / 3) * 4 + 3] = 1;\n                }\n                row++;\n            }\n\n            if (geom.morphTargets[i].bitangents && geom.morphTargets[i].bitangents.length)\n            {\n                for (let j = 0; j < geom.morphTargets[i].bitangents.length; j += 3)\n                {\n                    pixels[(row * w + j / 3) * 4 + 0] = geom.morphTargets[i].bitangents[j + 0];\n                    pixels[(row * w + j / 3) * 4 + 1] = geom.morphTargets[i].bitangents[j + 1];\n                    pixels[(row * w + j / 3) * 4 + 2] = geom.morphTargets[i].bitangents[j + 2];\n                    pixels[(row * w + j / 3) * 4 + 3] = 1;\n                }\n                row++;\n            }\n        }\n\n        this.tex = new CGL.Texture(cgl, { \"isFloatingPointTexture\": true, \"name\": \"targetsTexture\" });\n\n        this.tex.initFromData(pixels, w, h, CGL.Texture.FILTER_LINEAR, CGL.Texture.WRAP_REPEAT);\n\n        // console.log(\"morphTargets generated texture\", w, h);\n    }\n};\n","skin_vert":"int index=int(attrJoints.x);\nvec4 newPos = (MOD_boneMats[index] * pos) * attrWeights.x;\nvec3 newNorm = (vec4((MOD_boneMats[index] * vec4(norm.xyz, 0.0)) * attrWeights.x).xyz);\n\nindex=int(attrJoints.y);\nnewPos += (MOD_boneMats[index] * pos) * attrWeights.y;\nnewNorm = (vec4((MOD_boneMats[index] * vec4(norm.xyz, 0.0)) * attrWeights.y).xyz)+newNorm;\n\nindex=int(attrJoints.z);\nnewPos += (MOD_boneMats[index] * pos) * attrWeights.z;\nnewNorm = (vec4((MOD_boneMats[index] * vec4(norm.xyz, 0.0)) * attrWeights.z).xyz)+newNorm;\n\nindex=int(attrJoints.w);\nnewPos += (MOD_boneMats[index] * pos) * attrWeights.w ;\nnewNorm = (vec4((MOD_boneMats[index] * vec4(norm.xyz, 0.0)) * attrWeights.w).xyz)+newNorm;\n\npos=newPos;\n\nnorm=normalize(newNorm.xyz);\n\n\n","skin_head_vert":"\nIN vec4 attrWeights;\nIN vec4 attrJoints;\nUNI mat4 MOD_boneMats[SKIN_NUM_BONES];\n","targets_vert":"\n\nfloat MOD_width=MOD_targetTexInfo.x;\nfloat MOD_height=MOD_targetTexInfo.y;\nfloat MOD_numTargets=MOD_targetTexInfo.w;\nfloat MOD_numLinesPerTarget=MOD_height/MOD_numTargets;\n\nfloat halfpix=(1.0/MOD_width)*0.5;\nfloat halfpixy=(1.0/MOD_height)*0.5;\n\nfloat x=(attrVertIndex)/MOD_width+halfpix;\n\nvec3 off=vec3(0.0);\n\nfor(float i=0.0;i<MOD_numTargets;i+=1.0)\n{\n    float y=1.0-((MOD_numLinesPerTarget*i)/MOD_height+halfpixy);\n    vec2 coord=vec2(x,y);\n    vec3 targetXYZ = texture(MOD_targetTex,coord).xyz;\n\n    off+=(targetXYZ*MOD_weights[int(i)]);\n\n\n\n    coord.y+=1.0/MOD_height; // normals are in next row\n    vec3 targetNormal = texture(MOD_targetTex,coord).xyz;\n    norm+=targetNormal*MOD_weights[int(i)];\n\n\n}\n\n// norm=normalize(norm);\npos.xyz+=off;\n","targets_head_vert":"\nUNI float MOD_weights[MOD_NUM_WEIGHTS];\n",};
const gltfCamera = class
{
    constructor(gltf, node)
    {
        this.node = node;
        this.name = node.name;
        // console.log(gltf);
        this.config = gltf.json.cameras[node.camera];

        this.pos = vec3.create();
        this.quat = quat.create();
        this.vCenter = vec3.create();
        this.vUp = vec3.create();
        this.vMat = mat4.create();
    }

    updateAnim(time)
    {
        if (this.node && this.node._animTrans)
        {
            vec3.set(this.pos,
                this.node._animTrans[0].getValue(time),
                this.node._animTrans[1].getValue(time),
                this.node._animTrans[2].getValue(time));

            quat.set(this.quat,
                this.node._animRot[0].getValue(time),
                this.node._animRot[1].getValue(time),
                this.node._animRot[2].getValue(time),
                this.node._animRot[3].getValue(time));
        }
    }

    start(time)
    {
        if (cgl.frameStore.shadowPass) return;

        this.updateAnim(time);
        const asp = cgl.getViewPort()[2] / cgl.getViewPort()[3];

        cgl.pushPMatrix();
        // mat4.perspective(
        //     cgl.pMatrix,
        //     this.config.perspective.yfov*0.5,
        //     asp,
        //     this.config.perspective.znear,
        //     this.config.perspective.zfar);

        cgl.pushViewMatrix();
        // mat4.identity(cgl.vMatrix);

        // if(this.node && this.node.parent)
        // {
        //     console.log(this.node.parent)
        // vec3.add(this.pos,this.pos,this.node.parent._node.translation);
        // vec3.sub(this.vCenter,this.vCenter,this.node.parent._node.translation);
        // mat4.translate(cgl.vMatrix,cgl.vMatrix,
        // [
        //     -this.node.parent._node.translation[0],
        //     -this.node.parent._node.translation[1],
        //     -this.node.parent._node.translation[2]
        // ])
        // }

        // vec3.set(this.vUp, 0, 1, 0);
        // vec3.set(this.vCenter, 0, -1, 0);
        // // vec3.set(this.vCenter, 0, 1, 0);
        // vec3.transformQuat(this.vCenter, this.vCenter, this.quat);
        // vec3.normalize(this.vCenter, this.vCenter);
        // vec3.add(this.vCenter, this.vCenter, this.pos);

        // mat4.lookAt(cgl.vMatrix, this.pos, this.vCenter, this.vUp);

        let mv = mat4.create();
        mat4.invert(mv, this.node.modelMatAbs());

        // console.log(this.node.modelMatAbs());

        this.vMat = mv;

        mat4.identity(cgl.vMatrix);
        // console.log(mv);
        mat4.mul(cgl.vMatrix, cgl.vMatrix, mv);
    }

    end()
    {
        if (cgl.frameStore.shadowPass) return;
        cgl.popPMatrix();
        cgl.popViewMatrix();
    }
};
const le = true; // little endian

const Gltf = class
{
    constructor()
    {
        this.json = {};
        this.accBuffers = [];
        this.meshes = [];
        this.nodes = [];
        this.shaders = [];
        this.timing = [];
        this.cams = [];
        this.startTime = performance.now();
        this.bounds = new CABLES.CG.BoundingBox();
        this.loaded = Date.now();
        this.accBuffersDelete = [];
    }

    getNode(n)
    {
        for (let i = 0; i < this.nodes.length; i++)
        {
            if (this.nodes[i].name == n) return this.nodes[i];
        }
    }

    unHideAll()
    {
        for (let i = 0; i < this.nodes.length; i++)
        {
            this.nodes[i].unHide();
        }
    }
};

function Utf8ArrayToStr(array)
{
    if (window.TextDecoder) return new TextDecoder("utf-8").decode(array);

    let out, i, len, c;
    let char2, char3;

    out = "";
    len = array.length;
    i = 0;
    while (i < len)
    {
        c = array[i++];
        switch (c >> 4)
        {
        case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
            // 0xxxxxxx
            out += String.fromCharCode(c);
            break;
        case 12: case 13:
            // 110x xxxx   10xx xxxx
            char2 = array[i++];
            out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
            break;
        case 14:
            // 1110 xxxx  10xx xxxx  10xx xxxx
            char2 = array[i++];
            char3 = array[i++];
            out += String.fromCharCode(((c & 0x0F) << 12) |
                    ((char2 & 0x3F) << 6) |
                    ((char3 & 0x3F) << 0));
            break;
        }
    }

    return out;
}

function readChunk(dv, bArr, arrayBuffer, offset)
{
    const chunk = {};

    if (offset >= dv.byteLength)
    {
        // op.log("could not read chunk...");
        return;
    }
    chunk.size = dv.getUint32(offset + 0, le);

    // chunk.type = new TextDecoder("utf-8").decode(bArr.subarray(offset+4, offset+4+4));
    chunk.type = Utf8ArrayToStr(bArr.subarray(offset + 4, offset + 4 + 4));

    if (chunk.type == "BIN\0")
    {
        // console.log(chunk.size,arrayBuffer.length,offset);
        // try
        // {
        chunk.dataView = new DataView(arrayBuffer, offset + 8, chunk.size);
        // }
        // catch(e)
        // {
        //     chunk.dataView = null;
        //     console.log(e);
        // }
    }
    else
    if (chunk.type == "JSON")
    {
        const json = Utf8ArrayToStr(bArr.subarray(offset + 8, offset + 8 + chunk.size));

        try
        {
            const obj = JSON.parse(json);
            chunk.data = obj;
            outGenerator.set(obj.asset.generator);
        }
        catch (e)
        {
        }
    }
    else
    {
        op.warn("unknown type", chunk.type);
    }

    return chunk;
}

function loadAnims(gltf)
{
    const uniqueAnimNames = {};

    for (let i = 0; i < gltf.json.animations.length; i++)
    {
        const an = gltf.json.animations[i];

        an.name = an.name || "unknown";

        for (let ia = 0; ia < an.channels.length; ia++)
        {
            const chan = an.channels[ia];

            const node = gltf.nodes[chan.target.node];
            const sampler = an.samplers[chan.sampler];

            const acc = gltf.json.accessors[sampler.input];
            const bufferIn = gltf.accBuffers[sampler.input];

            const accOut = gltf.json.accessors[sampler.output];
            const bufferOut = gltf.accBuffers[sampler.output];

            gltf.accBuffersDelete.push(sampler.output, sampler.input);

            if (bufferIn && bufferOut)
            {
                let numComps = 1;
                if (accOut.type === "VEC2")numComps = 2;
                else if (accOut.type === "VEC3")numComps = 3;
                else if (accOut.type === "VEC4")numComps = 4;
                else if (accOut.type === "SCALAR")
                {
                    numComps = bufferOut.length / bufferIn.length; // is this really the way to find out ? cant find any other way,except number of morph targets, but not really connected...
                }
                else op.log("[] UNKNOWN accOut.type", accOut.type);

                const anims = [];

                uniqueAnimNames[an.name] = true;

                for (let k = 0; k < numComps; k++)
                {
                    const newAnim = new CABLES.Anim();
                    // newAnim.name=an.name;
                    anims.push(newAnim);
                }

                if (sampler.interpolation === "LINEAR") {}
                else if (sampler.interpolation === "STEP") for (let k = 0; k < numComps; k++) anims[k].defaultEasing = CABLES.EASING_ABSOLUTE;
                else if (sampler.interpolation === "CUBICSPLINE") for (let k = 0; k < numComps; k++) anims[k].defaultEasing = CABLES.EASING_CUBICSPLINE;
                else op.warn("unknown interpolation", sampler.interpolation);

                // console.log(bufferOut)

                // if there is no keyframe for time 0 copy value of first keyframe at time 0
                if (bufferIn[0] !== 0.0)
                    for (let k = 0; k < numComps; k++)
                        anims[k].setValue(0, bufferOut[0 * numComps + k]);

                for (let j = 0; j < bufferIn.length; j++)
                {
                    maxTime = Math.max(bufferIn[j], maxTime);

                    for (let k = 0; k < numComps; k++)
                    {
                        if (anims[k].defaultEasing === CABLES.EASING_CUBICSPLINE)
                        {
                            const idx = ((j * numComps) * 3 + k);

                            const key = anims[k].setValue(bufferIn[j], bufferOut[idx + numComps]);
                            key.bezTangIn = bufferOut[idx];
                            key.bezTangOut = bufferOut[idx + (numComps * 2)];

                            // console.log(an.name,k,bufferOut[idx+1]);
                        }
                        else
                        {
                            // console.log(an.name,k,bufferOut[j * numComps + k]);
                            anims[k].setValue(bufferIn[j], bufferOut[j * numComps + k]);
                        }
                    }
                }

                node.setAnim(chan.target.path, an.name, anims);
            }
            else
            {
                op.warn("loadAmins bufferIn undefined ", bufferIn === undefined);
                op.warn("loadAmins bufferOut undefined ", bufferOut === undefined);
                op.warn("loadAmins ", sampler, accOut);
                op.warn("loadAmins num accBuffers", gltf.accBuffers.length);
                op.warn("loadAmins num accessors", gltf.json.accessors.length);
            }
        }
    }

    gltf.uniqueAnimNames = uniqueAnimNames;

    outAnims.setRef(Object.keys(uniqueAnimNames));
}

function loadCams(gltf)
{
    if (!gltf || !gltf.json.cameras) return;

    gltf.cameras = gltf.cameras || [];

    for (let i = 0; i < gltf.nodes.length; i++)
    {
        if (gltf.nodes[i].hasOwnProperty("camera"))
        {
            const cam = new gltfCamera(gltf, gltf.nodes[i]);
            gltf.cameras.push(cam);
        }
    }
}

function loadAfterDraco()
{
    if (!window.DracoDecoder)
    {
        setTimeout(() =>
        {
            loadAfterDraco();
        }, 100);
    }

    reloadSoon();
}

function parseGltf(arrayBuffer)
{
    const CHUNK_HEADER_SIZE = 8;

    let j = 0, i = 0;

    const gltf = new Gltf();
    gltf.timing.push(["Start parsing", Math.round((performance.now() - gltf.startTime))]);

    if (!arrayBuffer) return;
    const byteArray = new Uint8Array(arrayBuffer);
    let pos = 0;

    // var string = new TextDecoder("utf-8").decode(byteArray.subarray(pos, 4));
    const string = Utf8ArrayToStr(byteArray.subarray(pos, 4));
    pos += 4;
    if (string != "glTF") return;

    gltf.timing.push(["dataview", Math.round((performance.now() - gltf.startTime))]);

    const dv = new DataView(arrayBuffer);
    const version = dv.getUint32(pos, le);
    pos += 4;
    const size = dv.getUint32(pos, le);
    pos += 4;

    outVersion.set(version);

    const chunks = [];
    gltf.chunks = chunks;

    chunks.push(readChunk(dv, byteArray, arrayBuffer, pos));
    pos += chunks[0].size + CHUNK_HEADER_SIZE;
    gltf.json = chunks[0].data;

    gltf.cables = {
        "fileUrl": inFile.get(),
        "shortFileName": CABLES.basename(inFile.get())
    };

    outJson.setRef(gltf.json);
    outExtensions.setRef(gltf.json.extensionsUsed || []);

    let ch = readChunk(dv, byteArray, arrayBuffer, pos);
    while (ch)
    {
        chunks.push(ch);
        pos += ch.size + CHUNK_HEADER_SIZE;
        ch = readChunk(dv, byteArray, arrayBuffer, pos);
    }

    gltf.chunks = chunks;

    const views = chunks[0].data.bufferViews;
    const accessors = chunks[0].data.accessors;

    gltf.timing.push(["Parse buffers", Math.round((performance.now() - gltf.startTime))]);

    if (gltf.json.extensionsUsed && gltf.json.extensionsUsed.indexOf("KHR_draco_mesh_compression") > -1)
    {
        if (!window.DracoDecoder)
        {
            op.setUiError("gltfdraco", "GLTF draco compression lib not found / add draco op to your patch!");

            loadAfterDraco();
            return gltf;
        }
        else
        {
            gltf.useDraco = true;
        }
    }

    op.setUiError("gltfdraco", null);
    // let accPos = (view.byteOffset || 0) + (acc.byteOffset || 0);

    if (views)
    {
        for (i = 0; i < accessors.length; i++)
        {
            const acc = accessors[i];
            const view = views[acc.bufferView];

            let numComps = 0;
            if (acc.type == "SCALAR")numComps = 1;
            else if (acc.type == "VEC2")numComps = 2;
            else if (acc.type == "VEC3")numComps = 3;
            else if (acc.type == "VEC4")numComps = 4;
            else if (acc.type == "MAT4")numComps = 16;
            else console.error("unknown accessor type", acc.type);

            //   const decoder = new decoderModule.Decoder();
            //   const decodedGeometry = decodeDracoData(data, decoder);
            //   // Encode mesh
            //   encodeMeshToFile(decodedGeometry, decoder);

            //   decoderModule.destroy(decoder);
            //   decoderModule.destroy(decodedGeometry);

            // 5120 (BYTE)	1
            // 5121 (UNSIGNED_BYTE)	1
            // 5122 (SHORT)	2

            if (chunks[1].dataView)
            {
                if (view)
                {
                    const num = acc.count * numComps;
                    let accPos = (view.byteOffset || 0) + (acc.byteOffset || 0);
                    let stride = view.byteStride || 0;
                    let dataBuff = null;

                    if (acc.componentType == 5126 || acc.componentType == 5125) // 4byte FLOAT or INT
                    {
                        stride = stride || 4;

                        const isInt = acc.componentType == 5125;
                        if (isInt)dataBuff = new Uint32Array(num);
                        else dataBuff = new Float32Array(num);

                        for (j = 0; j < num; j++)
                        {
                            if (isInt) dataBuff[j] = chunks[1].dataView.getUint32(accPos, le);
                            else dataBuff[j] = chunks[1].dataView.getFloat32(accPos, le);

                            if (stride != 4 && (j + 1) % numComps === 0)accPos += stride - (numComps * 4);
                            accPos += 4;
                        }
                    }
                    else if (acc.componentType == 5123) // UNSIGNED_SHORT
                    {
                        stride = stride || 2;

                        dataBuff = new Uint16Array(num);

                        for (j = 0; j < num; j++)
                        {
                            dataBuff[j] = chunks[1].dataView.getUint16(accPos, le);

                            if (stride != 2 && (j + 1) % numComps === 0) accPos += stride - (numComps * 2);

                            accPos += 2;
                        }
                    }
                    else if (acc.componentType == 5121) // UNSIGNED_BYTE
                    {
                        stride = stride || 1;

                        dataBuff = new Uint8Array(num);

                        for (j = 0; j < num; j++)
                        {
                            dataBuff[j] = chunks[1].dataView.getUint8(accPos, le);

                            if (stride != 1 && (j + 1) % numComps === 0) accPos += stride - (numComps * 1);

                            accPos += 1;
                        }
                    }

                    else
                    {
                        console.error("unknown component type", acc.componentType);
                    }

                    gltf.accBuffers.push(dataBuff);
                }
                else
                {
                    // console.log("has no dataview");
                }
            }
        }
    }

    gltf.timing.push(["Parse mesh groups", Math.round((performance.now() - gltf.startTime))]);

    gltf.json.meshes = gltf.json.meshes || [];

    if (gltf.json.meshes)
    {
        for (i = 0; i < gltf.json.meshes.length; i++)
        {
            const mesh = new gltfMeshGroup(gltf, gltf.json.meshes[i]);
            gltf.meshes.push(mesh);
        }
    }

    gltf.timing.push(["Parse nodes", Math.round((performance.now() - gltf.startTime))]);

    for (i = 0; i < gltf.json.nodes.length; i++)
    {
        if (gltf.json.nodes[i].children)
            for (j = 0; j < gltf.json.nodes[i].children.length; j++)
            {
                gltf.json.nodes[gltf.json.nodes[i].children[j]].isChild = true;
            }
    }

    for (i = 0; i < gltf.json.nodes.length; i++)
    {
        const node = new gltfNode(gltf.json.nodes[i], gltf);
        gltf.nodes.push(node);
    }

    for (i = 0; i < gltf.nodes.length; i++)
    {
        const node = gltf.nodes[i];

        if (!node.children) continue;
        for (let j = 0; j < node.children.length; j++)
        {
            gltf.nodes[node.children[j]].parent = node;
        }
    }

    for (i = 0; i < gltf.nodes.length; i++)
    {
        gltf.nodes[i].initSkin();
    }

    needsMatUpdate = true;

    gltf.timing.push(["load anims", Math.round((performance.now() - gltf.startTime))]);

    if (gltf.json.animations) loadAnims(gltf);

    gltf.timing.push(["load cameras", Math.round((performance.now() - gltf.startTime))]);

    if (gltf.json.cameras) loadCams(gltf);

    gltf.timing.push(["finished", Math.round((performance.now() - gltf.startTime))]);
    return gltf;
}
let gltfMesh = class
{
    constructor(name, prim, gltf, finished)
    {
        this.POINTS = 0;
        this.LINES = 1;
        this.LINE_LOOP = 2;
        this.LINE_STRIP = 3;
        this.TRIANGLES = 4;
        this.TRIANGLE_STRIP = 5;
        this.TRIANGLE_FAN = 6;

        this.test = 0;
        this.name = name;
        this.submeshIndex = 0;
        this.material = prim.material;
        // console.log(prim);
        this.mesh = null;
        this.geom = new CGL.Geometry("gltf_" + this.name);
        this.geom.verticesIndices = [];
        this.bounds = null;
        this.primitive = 4;
        this.morphTargetsRenderMod = null;
        this.weights = prim.weights;

        if (prim.hasOwnProperty("mode")) this.primitive = prim.mode;

        if (prim.hasOwnProperty("indices")) this.geom.verticesIndices = gltf.accBuffers[prim.indices];

        gltf.loadingMeshes = gltf.loadingMeshes || 0;
        gltf.loadingMeshes++;

        this.materialJson =
            this._matPbrMetalness =
            this._matPbrRoughness =
            this._matDiffuseColor = null;

        if (gltf.json.materials)
        {
            if (this.material != -1) this.materialJson = gltf.json.materials[this.material];

            if (this.materialJson && this.materialJson.pbrMetallicRoughness)
            {
                if (!this.materialJson.pbrMetallicRoughness.hasOwnProperty("baseColorFactor"))
                {
                    this._matDiffuseColor = [1, 1, 1, 1];
                }
                else
                {
                    this._matDiffuseColor = this.materialJson.pbrMetallicRoughness.baseColorFactor;
                }

                this._matDiffuseColor = this.materialJson.pbrMetallicRoughness.baseColorFactor;

                if (!this.materialJson.pbrMetallicRoughness.hasOwnProperty("metallicFactor"))
                {
                    this._matPbrMetalness = 1.0;
                }
                else
                {
                    this._matPbrMetalness = this.materialJson.pbrMetallicRoughness.metallicFactor || null;
                }

                if (!this.materialJson.pbrMetallicRoughness.hasOwnProperty("roughnessFactor"))
                {
                    this._matPbrRoughness = 1.0;
                }
                else
                {
                    this._matPbrRoughness = this.materialJson.pbrMetallicRoughness.roughnessFactor || null;
                }
            }
        }

        if (gltf.useDraco && prim.extensions.KHR_draco_mesh_compression)
        {
            const view = gltf.chunks[0].data.bufferViews[prim.extensions.KHR_draco_mesh_compression.bufferView];
            const num = view.byteLength;
            const dataBuff = new Int8Array(num);
            let accPos = (view.byteOffset || 0);// + (acc.byteOffset || 0);
            for (let j = 0; j < num; j++)
            {
                dataBuff[j] = gltf.chunks[1].dataView.getInt8(accPos, le);
                accPos++;
            }

            const dracoDecoder = window.DracoDecoder;
            dracoDecoder.decodeGeometry(dataBuff.buffer, (geometry) =>
            {
                const geom = new CGL.Geometry("draco mesh " + name);

                for (let i = 0; i < geometry.attributes.length; i++)
                {
                    const attr = geometry.attributes[i];

                    if (attr.name === "position") geom.vertices = attr.array;
                    else if (attr.name === "normal") geom.vertexNormals = attr.array;
                    else if (attr.name === "uv") geom.texCoords = attr.array;
                    else if (attr.name === "color") geom.vertexColors = this.calcVertexColors(attr.array);
                    else if (attr.name === "joints") geom.setAttribute("attrJoints", Array.from(attr.array), 4);
                    else if (attr.name === "weights")
                    {
                        const arr4 = new Float32Array(attr.array.length / attr.itemSize * 4);

                        for (let k = 0; k < attr.array.length / attr.itemSize; k++)
                        {
                            arr4[k * 4] = arr4[k * 4 + 1] = arr4[k * 4 + 2] = arr4[k * 4 + 3] = 0;
                            for (let j = 0; j < attr.itemSize; j++)
                                arr4[k * 4 + j] = attr.array[k * attr.itemSize + j];
                        }
                        geom.setAttribute("attrWeights", arr4, 4);
                    }
                    else op.logWarn("unknown draco attrib", attr);
                }

                geometry.attributes = null;
                geom.verticesIndices = geometry.index.array;

                this.setGeom(geom);

                this.mesh = null;
                gltf.loadingMeshes--;
                gltf.timing.push(["draco decode", Math.round((performance.now() - gltf.startTime))]);

                if (finished)finished(this);
            }, (error) => { op.logError(error); });
        }
        else
        {
            gltf.loadingMeshes--;
            this.fillGeomAttribs(gltf, this.geom, prim.attributes);

            if (prim.targets)
            {
                for (let j = 0; j < prim.targets.length; j++)
                {
                    const tgeom = new CGL.Geometry("gltf_target_" + j);

                    // if (prim.hasOwnProperty("indices")) tgeom.verticesIndices = gltf.accBuffers[prim.indices];

                    this.fillGeomAttribs(gltf, tgeom, prim.targets[j], false);

                    // { // calculate normals for final position of morphtarget for later...
                    //     for (let i = 0; i < tgeom.vertices.length; i++) tgeom.vertices[i] += this.geom.vertices[i];
                    //     tgeom.calculateNormals();
                    //     for (let i = 0; i < tgeom.vertices.length; i++) tgeom.vertices[i] -= this.geom.vertices[i];
                    // }

                    this.geom.morphTargets.push(tgeom);
                }
            }
            if (finished)finished(this);
        }
    }

    _linearToSrgb(x)
    {
        if (x <= 0)
            return 0;
        else if (x >= 1)
            return 1;
        else if (x < 0.0031308)
            return x * 12.92;
        else
            return x ** (1 / 2.2) * 1.055 - 0.055;
    }

    calcVertexColors(arr)
    {
        let vertexColors = null;
        if (arr instanceof Float32Array)
        {
            let div = false;
            for (let i = 0; i < arr.length; i++)
            {
                if (arr[i] > 1)
                {
                    div = true;
                    continue;
                }
            }

            if (div)
                for (let i = 0; i < arr.length; i++) arr[i] /= 65535;

            vertexColors = arr;
        }

        else if (arr instanceof Uint16Array)
        {
            const fb = new Float32Array(arr.length);
            for (let i = 0; i < arr.length; i++) fb[i] = arr[i] / 65535;

            vertexColors = fb;
        }
        else vertexColors = arr;

        for (let i = 0; i < vertexColors.length; i++)
        {
            vertexColors[i] = this._linearToSrgb(vertexColors[i]);
        }

        return vertexColors;
    }

    fillGeomAttribs(gltf, tgeom, attribs, setGeom)
    {
        if (attribs.hasOwnProperty("POSITION")) tgeom.vertices = gltf.accBuffers[attribs.POSITION];
        if (attribs.hasOwnProperty("NORMAL")) tgeom.vertexNormals = gltf.accBuffers[attribs.NORMAL];
        if (attribs.hasOwnProperty("TANGENT")) tgeom.tangents = gltf.accBuffers[attribs.TANGENT];

        if (attribs.hasOwnProperty("COLOR_0")) tgeom.vertexColors = this.calcVertexColors(gltf.accBuffers[attribs.COLOR_0]);
        if (attribs.hasOwnProperty("COLOR_1")) tgeom.setAttribute("attrVertColor1", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_1]), 4);
        if (attribs.hasOwnProperty("COLOR_2")) tgeom.setAttribute("attrVertColor2", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_2]), 4);
        if (attribs.hasOwnProperty("COLOR_3")) tgeom.setAttribute("attrVertColor3", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_3]), 4);
        if (attribs.hasOwnProperty("COLOR_4")) tgeom.setAttribute("attrVertColor4", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_4]), 4);

        if (attribs.hasOwnProperty("TEXCOORD_0")) tgeom.texCoords = gltf.accBuffers[attribs.TEXCOORD_0];
        if (attribs.hasOwnProperty("TEXCOORD_1")) tgeom.setAttribute("attrTexCoord1", gltf.accBuffers[attribs.TEXCOORD_1], 2);
        if (attribs.hasOwnProperty("TEXCOORD_2")) tgeom.setAttribute("attrTexCoord2", gltf.accBuffers[attribs.TEXCOORD_2], 2);
        if (attribs.hasOwnProperty("TEXCOORD_3")) tgeom.setAttribute("attrTexCoord3", gltf.accBuffers[attribs.TEXCOORD_3], 2);
        if (attribs.hasOwnProperty("TEXCOORD_4")) tgeom.setAttribute("attrTexCoord4", gltf.accBuffers[attribs.TEXCOORD_4], 2);

        if (attribs.hasOwnProperty("WEIGHTS_0"))
        {
            tgeom.setAttribute("attrWeights", gltf.accBuffers[attribs.WEIGHTS_0], 4);
        }
        if (attribs.hasOwnProperty("JOINTS_0"))
        {
            if (!gltf.accBuffers[attribs.JOINTS_0])console.log("no !gltf.accBuffers[attribs.JOINTS_0]");
            tgeom.setAttribute("attrJoints", gltf.accBuffers[attribs.JOINTS_0], 4);
        }

        if (attribs.hasOwnProperty("POSITION")) gltf.accBuffersDelete.push(attribs.POSITION);
        if (attribs.hasOwnProperty("NORMAL")) gltf.accBuffersDelete.push(attribs.NORMAL);
        if (attribs.hasOwnProperty("TEXCOORD_0")) gltf.accBuffersDelete.push(attribs.TEXCOORD_0);
        if (attribs.hasOwnProperty("TANGENT")) gltf.accBuffersDelete.push(attribs.TANGENT);
        if (attribs.hasOwnProperty("COLOR_0"))gltf.accBuffersDelete.push(attribs.COLOR_0);
        if (attribs.hasOwnProperty("COLOR_0"))gltf.accBuffersDelete.push(attribs.COLOR_0);
        if (attribs.hasOwnProperty("COLOR_1"))gltf.accBuffersDelete.push(attribs.COLOR_1);
        if (attribs.hasOwnProperty("COLOR_2"))gltf.accBuffersDelete.push(attribs.COLOR_2);
        if (attribs.hasOwnProperty("COLOR_3"))gltf.accBuffersDelete.push(attribs.COLOR_3);

        if (attribs.hasOwnProperty("TEXCOORD_1")) gltf.accBuffersDelete.push(attribs.TEXCOORD_1);
        if (attribs.hasOwnProperty("TEXCOORD_2")) gltf.accBuffersDelete.push(attribs.TEXCOORD_2);
        if (attribs.hasOwnProperty("TEXCOORD_3")) gltf.accBuffersDelete.push(attribs.TEXCOORD_3);
        if (attribs.hasOwnProperty("TEXCOORD_4")) gltf.accBuffersDelete.push(attribs.TEXCOORD_4);

        if (setGeom !== false) if (tgeom && tgeom.verticesIndices) this.setGeom(tgeom);
    }

    setGeom(geom)
    {
        if (inNormFormat.get() == "X-ZY")
        {
            for (let i = 0; i < geom.vertexNormals.length; i += 3)
            {
                let t = geom.vertexNormals[i + 2];
                geom.vertexNormals[i + 2] = geom.vertexNormals[i + 1];
                geom.vertexNormals[i + 1] = -t;
            }
        }

        if (inVertFormat.get() == "XZ-Y")
        {
            for (let i = 0; i < geom.vertices.length; i += 3)
            {
                let t = geom.vertices[i + 2];
                geom.vertices[i + 2] = -geom.vertices[i + 1];
                geom.vertices[i + 1] = t;
            }
        }

        if (this.primitive == this.TRIANGLES)
        {
            if (inCalcNormals.get() == "Force Smooth" || inCalcNormals.get() == false) geom.calculateNormals();
            else if (!geom.vertexNormals.length && inCalcNormals.get() == "Auto") geom.calculateNormals({ "smooth": false });

            if ((!geom.biTangents || geom.biTangents.length == 0) && geom.tangents)
            {
                const bitan = vec3.create();
                const tan = vec3.create();

                const tangents = geom.tangents;
                geom.tangents = new Float32Array(tangents.length / 4 * 3);
                geom.biTangents = new Float32Array(tangents.length / 4 * 3);

                for (let i = 0; i < tangents.length; i += 4)
                {
                    const idx = i / 4 * 3;

                    vec3.cross(
                        bitan,
                        [geom.vertexNormals[idx], geom.vertexNormals[idx + 1], geom.vertexNormals[idx + 2]],
                        [tangents[i], tangents[i + 1], tangents[i + 2]]
                    );

                    vec3.div(bitan, bitan, [tangents[i + 3], tangents[i + 3], tangents[i + 3]]);
                    vec3.normalize(bitan, bitan);

                    geom.biTangents[idx + 0] = bitan[0];
                    geom.biTangents[idx + 1] = bitan[1];
                    geom.biTangents[idx + 2] = bitan[2];

                    geom.tangents[idx + 0] = tangents[i + 0];
                    geom.tangents[idx + 1] = tangents[i + 1];
                    geom.tangents[idx + 2] = tangents[i + 2];
                }
            }

            if (geom.tangents.length === 0 || inCalcNormals.get() != "Never")
            {
                // console.log("[gltf ]no tangents... calculating tangents...");
                geom.calcTangentsBitangents();
            }
        }

        this.geom = geom;

        this.bounds = geom.getBounds();
    }

    render(cgl, ignoreMaterial, skinRenderer)
    {
        if (!this.mesh && this.geom && this.geom.verticesIndices)
        {
            let g = this.geom;
            if (this.geom.vertices.length / 3 > 64000)
            {
                g = this.geom.copy();
                g.unIndex(false, true);
            }

            let glprim;

            if (cgl.gl)
            {
                if (this.primitive == this.TRIANGLES)glprim = cgl.gl.TRIANGLES;
                else if (this.primitive == this.LINES)glprim = cgl.gl.LINES;
                else if (this.primitive == this.LINE_STRIP)glprim = cgl.gl.LINE_STRIP;
                else if (this.primitive == this.POINTS)glprim = cgl.gl.POINTS;
                else
                {
                    op.logWarn("unknown primitive type", this);
                }
            }

            this.mesh = op.patch.cg.createMesh(g, { "glPrimitive": glprim });
        }

        if (this.mesh)
        {
            // update morphTargets
            if (this.geom && this.geom.morphTargets.length && !this.morphTargetsRenderMod)
            {
                this.mesh.addVertexNumbers = true;
                this.morphTargetsRenderMod = new GltfTargetsRenderer(this);
            }

            let useMat = !ignoreMaterial && this.material != -1 && gltf.shaders[this.material];
            if (skinRenderer)useMat = false;

            if (useMat) cgl.pushShader(gltf.shaders[this.material]);

            const currentShader = cgl.getShader() || {};
            const uniDiff = currentShader.uniformColorDiffuse;

            const uniPbrMetalness = currentShader.uniformPbrMetalness;
            const uniPbrRoughness = currentShader.uniformPbrRoughness;

            // if (gltf.shaders[this.material] && !inUseMatProps.get())
            // {
            //     gltf.shaders[this.material]=null;
            // }

            if (!gltf.shaders[this.material] && inUseMatProps.get())
            {
                if (uniDiff && this._matDiffuseColor)
                {
                    this._matDiffuseColorOrig = [uniDiff.getValue()[0], uniDiff.getValue()[1], uniDiff.getValue()[2], uniDiff.getValue()[3]];
                    uniDiff.setValue(this._matDiffuseColor);
                }

                if (uniPbrMetalness)
                    if (this._matPbrMetalness != null)
                    {
                        this._matPbrMetalnessOrig = uniPbrMetalness.getValue();
                        uniPbrMetalness.setValue(this._matPbrMetalness);
                    }
                    else
                        uniPbrMetalness.setValue(0);

                if (uniPbrRoughness)
                    if (this._matPbrRoughness != null)
                    {
                        this._matPbrRoughnessOrig = uniPbrRoughness.getValue();
                        uniPbrRoughness.setValue(this._matPbrRoughness);
                    }
                    else
                    {
                        uniPbrRoughness.setValue(0);
                    }
            }

            if (this.morphTargetsRenderMod) this.morphTargetsRenderMod.renderStart(cgl, 0);
            if (this.mesh)
            {
                // console.log(this.mesh)
                // this.mesh.lastMaterial=0;
                this.mesh.render(cgl.getShader(), ignoreMaterial);
            }
            if (this.morphTargetsRenderMod) this.morphTargetsRenderMod.renderFinish(cgl);

            if (inUseMatProps.get())
            {
                if (uniDiff && this._matDiffuseColor) uniDiff.setValue(this._matDiffuseColorOrig);
                if (uniPbrMetalness && this._matPbrMetalnessOrig != undefined) uniPbrMetalness.setValue(this._matPbrMetalnessOrig);
                if (uniPbrRoughness && this._matPbrRoughnessOrig != undefined) uniPbrRoughness.setValue(this._matPbrRoughnessOrig);
            }

            if (useMat) cgl.popShader();
        }
    }
};
const gltfMeshGroup = class
{
    constructor(gltf, m)
    {
        this.bounds = new CABLES.CG.BoundingBox();
        this.meshes = [];
        this.name = m.name;
        const prims = m.primitives;

        for (let i = 0; i < prims.length; i++)
        {
            const mesh = new gltfMesh(this.name, prims[i], gltf,
                (mesh) =>
                {
                    mesh.extras = m.extras;
                    this.bounds.apply(mesh.bounds);
                });

            mesh.submeshIndex = i;
            this.meshes.push(mesh);
        }
    }

    render(cgl, ignoreMat, skinRenderer, _time, weights)
    {
        for (let i = 0; i < this.meshes.length; i++)
        {
            const useMat = gltf.shaders[this.meshes[i].material];

            if (!ignoreMat && useMat) cgl.pushShader(gltf.shaders[this.meshes[i].material]);
            // console.log(gltf.shaders[this.meshes[i].material],this.meshes[i].material)
            if (skinRenderer)skinRenderer.renderStart(cgl, _time);
            if (weights) this.meshes[i].weights = weights;
            this.meshes[i].render(cgl, ignoreMat, skinRenderer, _time);
            if (skinRenderer)skinRenderer.renderFinish(cgl);
            if (!ignoreMat && useMat) cgl.popShader();
        }
    }
};
const gltfNode = class
{
    constructor(node, gltf)
    {
        this.isChild = node.isChild || false;
        this.name = node.name;
        if (node.hasOwnProperty("camera")) this.camera = node.camera;
        this.hidden = false;
        this.mat = mat4.create();
        this._animActions = {};
        this.animWeights = [];
        this._animMat = mat4.create();
        this._tempMat = mat4.create();
        this._tempQuat = quat.create();
        this._tempRotmat = mat4.create();
        this.mesh = null;
        this.children = [];
        this._node = node;
        this._gltf = gltf;
        this.absMat = mat4.create();
        this.addTranslate = null;
        this._tempAnimScale = null;
        this.addMulMat = null;
        this.updateMatrix();
        this.skinRenderer = null;
        this.copies = [];
    }

    get skin()
    {
        if (this._node.hasOwnProperty("skin")) return this._node.skin;
        else return -1;
    }

    copy()
    {
        this.isCopy = true;
        const n = new gltfNode(this._node, this._gltf);
        n.copyOf = this;

        n._animActions = this._animActions;
        n.children = this.children;
        if (this.skin) n.skinRenderer = new GltfSkin(this);

        this.updateMatrix();
        return n;
    }

    hasSkin()
    {
        if (this._node.hasOwnProperty("skin")) return this._gltf.json.skins[this._node.skin].name || "unknown";
        return false;
    }

    initSkin()
    {
        if (this.skin > -1)
        {
            this.skinRenderer = new GltfSkin(this);
        }
    }

    updateMatrix()
    {
        mat4.identity(this.mat);
        if (this._node.translation) mat4.translate(this.mat, this.mat, this._node.translation);

        if (this._node.rotation)
        {
            const rotmat = mat4.create();
            this._rot = this._node.rotation;

            mat4.fromQuat(rotmat, this._node.rotation);
            mat4.mul(this.mat, this.mat, rotmat);
        }

        if (this._node.scale)
        {
            this._scale = this._node.scale;
            mat4.scale(this.mat, this.mat, this._scale);
        }

        if (this._node.hasOwnProperty("mesh"))
        {
            this.mesh = this._gltf.meshes[this._node.mesh];
            if (this.isCopy)
            {
                // console.log(this.mesh);
            }
        }

        if (this._node.children)
        {
            for (let i = 0; i < this._node.children.length; i++)
            {
                this._gltf.json.nodes[i].isChild = true;
                if (this._gltf.nodes[this._node.children[i]]) this._gltf.nodes[this._node.children[i]].isChild = true;
                this.children.push(this._node.children[i]);
            }
        }
    }

    unHide()
    {
        this.hidden = false;
        for (let i = 0; i < this.children.length; i++)
            if (this.children[i].unHide) this.children[i].unHide();
    }

    calcBounds(gltf, mat, bounds)
    {
        const localMat = mat4.create();

        if (mat) mat4.copy(localMat, mat);
        if (this.mat) mat4.mul(localMat, localMat, this.mat);

        if (this.mesh)
        {
            const bb = this.mesh.bounds.copy();
            bb.mulMat4(localMat);
            bounds.apply(bb);

            if (bounds.changed)
            {
                boundingPoints.push(
                    bb._min[0] || 0, bb._min[1] || 0, bb._min[2] || 0,
                    bb._max[0] || 0, bb._max[1] || 0, bb._max[2] || 0);
            }
        }

        for (let i = 0; i < this.children.length; i++)
        {
            if (gltf.nodes[this.children[i]] && gltf.nodes[this.children[i]].calcBounds)
            {
                const b = gltf.nodes[this.children[i]].calcBounds(gltf, localMat, bounds);

                bounds.apply(b);
            }
        }

        if (bounds.changed) return bounds;
        else return null;
    }

    setAnimAction(name)
    {
        // console.log("setAnimAction:", name);
        if (!name) return;

        this._currentAnimaction = name;

        if (name && !this._animActions[name])
        {
            // console.log("no action found:", name,this._animActions);
            return null;
        }

        // else console.log("YES action found:", name);
        // console.log(this._animActions);

        for (let path in this._animActions[name])
        {
            if (path == "translation") this._animTrans = this._animActions[name][path];
            else if (path == "rotation") this._animRot = this._animActions[name][path];
            else if (path == "scale") this._animScale = this._animActions[name][path];
            else if (path == "weights") this.animWeights = this._animActions[name][path];
            else console.log("[gltfNode] unknown anim path", path, this._animActions[name][path]);
        }
    }

    setAnim(path, name, anims)
    {
        if (!path || !name || !anims) return;

        // console.log("setanim", this._node.name, path, name, anims);

        this._animActions[name] = this._animActions[name] || {};

        // console.log(this._animActions);
        // debugger;

        // for (let i = 0; i < this.copies.length; i++) this.copies[i]._animActions = this._animActions;

        if (this._animActions[name][path]) op.log("[gltfNode] animation action path already exists", name, path, this._animActions[name][path]);

        this._animActions[name][path] = anims;

        if (path == "translation") this._animTrans = anims;
        else if (path == "rotation") this._animRot = anims;
        else if (path == "scale") this._animScale = anims;
        else if (path == "weights")
        {
            // console.log("weights",name,path,anims)
            this.animWeights = this._animActions[name][path];
            // console.log(this.animWeights);
        }
        else console.warn("unknown anim path", path, anims);
    }

    modelMatLocal()
    {
        return this._animMat || this.mat;
    }

    modelMatAbs()
    {
        return this.absMat;
    }

    transform(cgl, _time)
    {
        if (!_time && _time != 0)_time = time;

        this._lastTimeTrans = _time;

        // console.log(this._rot)

        gltfTransforms++;

        if (!this._animTrans && !this._animRot && !this._animScale)
        {
            mat4.mul(cgl.mMatrix, cgl.mMatrix, this.mat);
            this._animMat = null;
        }
        else
        {
            this._animMat = this._animMat || mat4.create();
            mat4.identity(this._animMat);

            const playAnims = true;

            if (playAnims && this._animTrans)
            {
                mat4.translate(this._animMat, this._animMat, [
                    this._animTrans[0].getValue(_time),
                    this._animTrans[1].getValue(_time),
                    this._animTrans[2].getValue(_time)]);
            }
            else
            if (this._node.translation) mat4.translate(this._animMat, this._animMat, this._node.translation);

            if (playAnims && this._animRot)
            {
                if (this._animRot[0].defaultEasing == CABLES.EASING_LINEAR) CABLES.Anim.slerpQuaternion(_time, this._tempQuat, this._animRot[0], this._animRot[1], this._animRot[2], this._animRot[3]);
                else if (this._animRot[0].defaultEasing == CABLES.EASING_ABSOLUTE)
                {
                    this._tempQuat[0] = this._animRot[0].getValue(_time);
                    this._tempQuat[1] = this._animRot[1].getValue(_time);
                    this._tempQuat[2] = this._animRot[2].getValue(_time);
                    this._tempQuat[3] = this._animRot[3].getValue(_time);
                }
                else if (this._animRot[0].defaultEasing == CABLES.EASING_CUBICSPLINE)
                {
                    CABLES.Anim.slerpQuaternion(_time, this._tempQuat, this._animRot[0], this._animRot[1], this._animRot[2], this._animRot[3]);
                }

                mat4.fromQuat(this._tempMat, this._tempQuat);
                mat4.mul(this._animMat, this._animMat, this._tempMat);
            }
            else if (this._rot)
            {
                mat4.fromQuat(this._tempRotmat, this._rot);
                mat4.mul(this._animMat, this._animMat, this._tempRotmat);
            }

            if (playAnims && this._animScale)
            {
                if (!this._tempAnimScale) this._tempAnimScale = [1, 1, 1];
                this._tempAnimScale[0] = this._animScale[0].getValue(_time);
                this._tempAnimScale[1] = this._animScale[1].getValue(_time);
                this._tempAnimScale[2] = this._animScale[2].getValue(_time);
                mat4.scale(this._animMat, this._animMat, this._tempAnimScale);
            }
            else if (this._scale) mat4.scale(this._animMat, this._animMat, this._scale);

            mat4.mul(cgl.mMatrix, cgl.mMatrix, this._animMat);
        }

        if (this.animWeights)
        {
            this.weights = this.weights || [];

            let str = "";
            for (let i = 0; i < this.animWeights.length; i++)
            {
                this.weights[i] = this.animWeights[i].getValue(_time);
                str += this.weights[i] + "/";
            }

            // console.log(str);
            // this.mesh.weights=this.animWeights.get(_time);
            // console.log(this.animWeights);
        }

        if (this.addTranslate) mat4.translate(cgl.mMatrix, cgl.mMatrix, this.addTranslate);

        if (this.addMulMat) mat4.mul(cgl.mMatrix, cgl.mMatrix, this.addMulMat);

        mat4.copy(this.absMat, cgl.mMatrix);
    }

    render(cgl, dontTransform, dontDrawMesh, ignoreMaterial, ignoreChilds, drawHidden, _time)
    {
        if (!dontTransform) cgl.pushModelMatrix();

        if (_time === undefined) _time = gltf.time;

        if (!dontTransform || this.skinRenderer) this.transform(cgl, _time);

        if (this.hidden && !drawHidden)
        {
        }
        else
        {
            if (this.skinRenderer)
            {
                this.skinRenderer.time = _time;
                if (!dontDrawMesh)
                    this.mesh.render(cgl, ignoreMaterial, this.skinRenderer, _time, this.weights);
            }
            else
            {
                if (this.mesh && !dontDrawMesh)
                    this.mesh.render(cgl, ignoreMaterial, null, _time, this.weights);
            }
        }

        if (!ignoreChilds && !this.hidden)
            for (let i = 0; i < this.children.length; i++)
                if (gltf.nodes[this.children[i]])
                    gltf.nodes[this.children[i]].render(cgl, dontTransform, dontDrawMesh, ignoreMaterial, ignoreChilds, drawHidden, _time);

        if (!dontTransform)cgl.popModelMatrix();
    }
};
let tab = null;

function closeTab()
{
    if (tab)gui.mainTabs.closeTab(tab.id);
    tab = null;
}

function formatVec(arr)
{
    const nums = [];
    for (let i = 0; i < arr.length; i++)
    {
        nums.push(Math.round(arr[i] * 1000) / 1000);
    }

    return nums.join(",");
}

function printNode(html, node, level)
{
    if (!gltf) return;

    html += "<tr class=\"row\">";

    let ident = "";
    let identSpace = "";

    for (let i = 1; i < level; i++)
    {
        identSpace += "&nbsp;&nbsp;&nbsp;";
        let identClass = "identBg";
        if (i == 1)identClass = "identBgLevel0";
        ident += "<td class=\"ident " + identClass + "\" ><div style=\"\"></div></td>";
    }
    let id = CABLES.uuid();
    html += ident;
    html += "<td colspan=\"" + (21 - level) + "\">";

    if (node.mesh && node.mesh.meshes.length)html += "<span class=\"icon icon-cube\"></span>&nbsp;";
    else html += "<span class=\"icon icon-box-select\"></span> &nbsp;";

    html += node.name + "</td><td></td>";

    if (node.mesh)
    {
        html += "<td>";
        for (let i = 0; i < node.mesh.meshes.length; i++)
        {
            if (i > 0)html += ", ";
            html += node.mesh.meshes[i].name;
        }

        html += "</td>";

        html += "<td>";
        html += node.hasSkin() || "-";
        html += "</td>";

        html += "<td>";
        let countMats = 0;
        for (let i = 0; i < node.mesh.meshes.length; i++)
        {
            if (countMats > 0)html += ", ";
            if (gltf.json.materials && node.mesh.meshes[i].hasOwnProperty("material"))
            {
                if (gltf.json.materials[node.mesh.meshes[i].material])
                {
                    html += gltf.json.materials[node.mesh.meshes[i].material].name;
                    countMats++;
                }
            }
        }
        if (countMats == 0)html += "none";
        html += "</td>";
    }
    else
    {
        html += "<td>-</td><td>-</td><td>-</td>";
    }

    html += "<td>";

    if (node._node.translation || node._node.rotation || node._node.scale)
    {
        let info = "";

        if (node._node.translation)info += "Translate: `" + formatVec(node._node.translation) + "` || ";
        if (node._node.rotation)info += "Rotation: `" + formatVec(node._node.rotation) + "` || ";
        if (node._node.scale)info += "Scale: `" + formatVec(node._node.scale) + "` || ";

        html += "<span class=\"icon icon-gizmo info\" data-info=\"" + info + "\"></span> &nbsp;";
    }

    if (node._animRot || node._animScale || node._animTrans)
    {
        let info = "Animated: ";
        if (node._animRot) info += "Rot ";
        if (node._animScale) info += "Scale ";
        if (node._animTrans) info += "Trans ";

        html += "<span class=\"icon icon-clock info\" data-info=\"" + info + "\"></span>&nbsp;";
    }

    if (!node._node.translation && !node._node.rotation && !node._node.scale && !node._animRot && !node._animScale && !node._animTrans) html += "-";

    html += "</td>";

    html += "<td>";
    let hideclass = "";
    if (node.hidden)hideclass = "node-hidden";

    // html+='';
    html += "<a onclick=\"gui.corePatch().getOpById('" + op.id + "').exposeNode('" + node.name + "','transform')\" class=\"treebutton\">Transform</a>";
    html += " <a onclick=\"gui.corePatch().getOpById('" + op.id + "').exposeNode('" + node.name + "','hierarchy')\" class=\"treebutton\">Hierarchy</a>";
    html += " <a onclick=\"gui.corePatch().getOpById('" + op.id + "').exposeNode('" + node.name + "')\" class=\"treebutton\">Node</a>";

    if (node.hasSkin())
        html += " <a onclick=\"gui.corePatch().getOpById('" + op.id + "').exposeNode('" + node.name + "',false,{skin:true});\" class=\"treebutton\">Skin</a>";

    html += "</td><td>";
    html += "&nbsp;<span class=\"icon iconhover icon-eye " + hideclass + "\" onclick=\"gui.corePatch().getOpById('" + op.id + "').toggleNodeVisibility('" + node.name + "');this.classList.toggle('node-hidden');\"></span>";
    html += "</td>";

    html += "</tr>";

    if (node.children)
    {
        for (let i = 0; i < node.children.length; i++)
            html = printNode(html, gltf.nodes[node.children[i]], level + 1);
    }

    return html;
}

function printMaterial(mat, idx)
{
    let html = "<tr>";
    html += " <td>" + idx + "</td>";
    html += " <td>" + mat.name + "</td>";

    html += " <td>";

    const info = JSON.stringify(mat, null, 4).replaceAll("\"", "").replaceAll("\n", "<br/>");

    html += "<span class=\"icon icon-info\" onclick=\"new CABLES.UI.ModalDialog({ 'html': '<pre>" + info + "</pre>', 'title': '" + mat.name + "' });\"></span>&nbsp;";

    if (mat.pbrMetallicRoughness && mat.pbrMetallicRoughness.baseColorFactor)
    {
        let rgb = "";
        rgb += "" + Math.round(mat.pbrMetallicRoughness.baseColorFactor[0] * 255);
        rgb += "," + Math.round(mat.pbrMetallicRoughness.baseColorFactor[1] * 255);
        rgb += "," + Math.round(mat.pbrMetallicRoughness.baseColorFactor[2] * 255);

        html += "<div style=\"width:15px;height:15px;background-color:rgb(" + rgb + ");display:inline-block\">&nbsp;</a>";
    }
    html += " <td style=\"\">" + (gltf.shaders[idx] ? "-" : "<a onclick=\"gui.corePatch().getOpById('" + op.id + "').assignMaterial('" + mat.name + "')\" class=\"treebutton\">Assign</a>") + "<td>";
    html += "<td>";

    html += "</tr>";
    return html;
}

function printInfo()
{
    if (!gltf) return;

    const startTime = performance.now();
    const sizes = {};
    let html = "<div style=\"overflow:scroll;width:100%;height:100%\">";

    html += "File: <a href=\"" + CABLES.platform.getCablesUrl() + "/asset/patches/?filename=" + inFile.get() + "\" target=\"_blank\">" + CABLES.basename(inFile.get()) + "</a><br/>";

    html += "Generator:" + gltf.json.asset.generator;

    let numNodes = 0;
    if (gltf.json.nodes)numNodes = gltf.json.nodes.length;
    html += "<div id=\"groupNodes\">Nodes (" + numNodes + ")</div>";

    html += "<table id=\"sectionNodes\" class=\"table treetable\">";

    html += "<tr>";
    html += " <th colspan=\"21\">Name</th>";
    html += " <th>Mesh</th>";
    html += " <th>Skin</th>";
    html += " <th>Material</th>";
    html += " <th>Transform</th>";
    html += " <th>Expose</th>";
    html += " <th></th>";
    html += "</tr>";

    for (let i = 0; i < gltf.nodes.length; i++)
    {
        if (!gltf.nodes[i].isChild)
            html = printNode(html, gltf.nodes[i], 1);
    }
    html += "</table>";

    // / //////////////////

    let numMaterials = 0;
    if (gltf.json.materials)numMaterials = gltf.json.materials.length;
    html += "<div id=\"groupMaterials\">Materials (" + numMaterials + ")</div>";

    if (!gltf.json.materials || gltf.json.materials.length == 0)
    {
    }
    else
    {
        html += "<table id=\"materialtable\"  class=\"table treetable\">";
        html += "<tr>";
        html += " <th>Index</th>";
        html += " <th>Name</th>";
        html += " <th>Color</th>";
        html += " <th>Function</th>";
        html += " <th></th>";
        html += "</tr>";
        for (let i = 0; i < gltf.json.materials.length; i++)
        {
            html += printMaterial(gltf.json.materials[i], i);
        }
        html += "</table>";
    }

    // / ///////////////////////

    html += "<div id=\"groupMeshes\">Meshes (" + gltf.json.meshes.length + ")</div>";

    html += "<table id=\"meshestable\"  class=\"table treetable\">";
    html += "<tr>";
    html += " <th>Name</th>";
    html += " <th>Node</th>";
    html += " <th>Material</th>";
    html += " <th>Vertices</th>";
    html += " <th>Attributes</th>";
    html += "</tr>";

    let sizeBufferViews = [];
    sizes.meshes = 0;
    sizes.meshTargets = 0;

    for (let i = 0; i < gltf.json.meshes.length; i++)
    {
        html += "<tr>";
        html += "<td>" + gltf.json.meshes[i].name + "</td>";

        html += "<td>";
        let count = 0;
        let nodename = "";
        for (let j = 0; j < gltf.json.nodes.length; j++)
        {
            if (gltf.json.nodes[j].mesh == i)
            {
                count++;
                if (count == 1)
                {
                    nodename = gltf.json.nodes[j].name;
                }
            }
        }
        if (count > 1) html += (count) + " nodes (" + nodename + " ...)";
        else html += nodename;
        html += "</td>";

        // -------

        html += "<td>";
        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)
        {
            if (gltf.json.meshes[i].primitives[j].hasOwnProperty("material"))
            {
                if (gltf.json.materials[gltf.json.meshes[i]])
                {
                    html += gltf.json.materials[gltf.json.meshes[i].primitives[j].material].name + " ";
                }
            }
            else html += "None";
        }
        html += "</td>";

        html += "<td>";
        let numVerts = 0;
        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)
        {
            if (gltf.json.meshes[i].primitives[j].attributes.POSITION != undefined)
            {
                let v = parseInt(gltf.json.accessors[gltf.json.meshes[i].primitives[j].attributes.POSITION].count);
                numVerts += v;
                html += "" + v + "<br/>";
            }
            else html += "-<br/>";
        }

        if (gltf.json.meshes[i].primitives.length > 1)
            html += "=" + numVerts;
        html += "</td>";

        html += "<td>";
        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)
        {
            html += Object.keys(gltf.json.meshes[i].primitives[j].attributes);
            html += " <a onclick=\"gui.corePatch().getOpById('" + op.id + "').exposeGeom('" + gltf.json.meshes[i].name + "'," + j + ")\" class=\"treebutton\">Geometry</a>";
            html += "<br/>";

            if (gltf.json.meshes[i].primitives[j].targets)
            {
                html += gltf.json.meshes[i].primitives[j].targets.length + " targets<br/>";

                if (gltf.json.meshes[i].extras && gltf.json.meshes[i].extras.targetNames)
                    html += "Targetnames:<br/>" + gltf.json.meshes[i].extras.targetNames.join("<br/>");

                html += "<br/>";
            }
        }

        html += "</td>";
        html += "</tr>";

        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)
        {
            const accessor = gltf.json.accessors[gltf.json.meshes[i].primitives[j].indices];
            if (accessor)
            {
                let bufView = accessor.bufferView;

                if (sizeBufferViews.indexOf(bufView) == -1)
                {
                    sizeBufferViews.push(bufView);
                    if (gltf.json.bufferViews[bufView])sizes.meshes += gltf.json.bufferViews[bufView].byteLength;
                }
            }

            for (let k in gltf.json.meshes[i].primitives[j].attributes)
            {
                const attr = gltf.json.meshes[i].primitives[j].attributes[k];
                const bufView2 = gltf.json.accessors[attr].bufferView;

                if (sizeBufferViews.indexOf(bufView2) == -1)
                {
                    sizeBufferViews.push(bufView2);
                    if (gltf.json.bufferViews[bufView2])sizes.meshes += gltf.json.bufferViews[bufView2].byteLength;
                }
            }

            if (gltf.json.meshes[i].primitives[j].targets)
                for (let k = 0; k < gltf.json.meshes[i].primitives[j].targets.length; k++)
                {
                    for (let l in gltf.json.meshes[i].primitives[j].targets[k])
                    {
                        const accessorIdx = gltf.json.meshes[i].primitives[j].targets[k][l];
                        const accessor = gltf.json.accessors[accessorIdx];
                        const bufView2 = accessor.bufferView;
                        console.log("accessor", accessor);
                        if (sizeBufferViews.indexOf(bufView2) == -1)
                            if (gltf.json.bufferViews[bufView2])
                            {
                                sizeBufferViews.push(bufView2);
                                sizes.meshTargets += gltf.json.bufferViews[bufView2].byteLength;
                            }
                    }
                }
        }
    }
    html += "</table>";

    // / //////////////////////////////////

    let numSamplers = 0;
    let numAnims = 0;
    let numKeyframes = 0;

    if (gltf.json.animations)
    {
        numAnims = gltf.json.animations.length;
        for (let i = 0; i < gltf.json.animations.length; i++)
        {
            numSamplers += gltf.json.animations[i].samplers.length;
        }
    }

    html += "<div id=\"groupAnims\">Animations (" + numAnims + "/" + numSamplers + ")</div>";

    if (gltf.json.animations)
    {
        html += "<table id=\"sectionAnim\" class=\"table treetable\">";
        html += "<tr>";
        html += "  <th>Name</th>";
        html += "  <th>Target node</th>";
        html += "  <th>Path</th>";
        html += "  <th>Interpolation</th>";
        html += "  <th>Keys</th>";
        html += "</tr>";


        sizes.animations = 0;

        for (let i = 0; i < gltf.json.animations.length; i++)
        {
            for (let j = 0; j < gltf.json.animations[i].samplers.length; j++)
            {
                let bufView = gltf.json.accessors[gltf.json.animations[i].samplers[j].input].bufferView;
                if (sizeBufferViews.indexOf(bufView) == -1)
                {
                    sizeBufferViews.push(bufView);
                    sizes.animations += gltf.json.bufferViews[bufView].byteLength;
                }

                bufView = gltf.json.accessors[gltf.json.animations[i].samplers[j].output].bufferView;
                if (sizeBufferViews.indexOf(bufView) == -1)
                {
                    sizeBufferViews.push(bufView);
                    sizes.animations += gltf.json.bufferViews[bufView].byteLength;
                }
            }

            for (let j = 0; j < gltf.json.animations[i].channels.length; j++)
            {
                html += "<tr>";
                html += "  <td> Anim " + i + ": " + gltf.json.animations[i].name + "</td>";

                html += "  <td>" + gltf.nodes[gltf.json.animations[i].channels[j].target.node].name + "</td>";
                html += "  <td>";
                html += gltf.json.animations[i].channels[j].target.path + " ";
                html += "  </td>";

                const smplidx = gltf.json.animations[i].channels[j].sampler;
                const smplr = gltf.json.animations[i].samplers[smplidx];

                html += "  <td>" + smplr.interpolation + "</td>";

                html += "  <td>" + gltf.json.accessors[smplr.output].count;
                numKeyframes += gltf.json.accessors[smplr.output].count;

                // html += "&nbsp;&nbsp;<a onclick=\"gui.corePatch().getOpById('" + op.id + "').showAnim('" + i + "','" + j + "')\" class=\"icon icon-search\"></a>";

                html += "</td>";

                html += "</tr>";
            }
        }

        html += "<tr>";
        html += "  <td></td>";
        html += "  <td></td>";
        html += "  <td></td>";
        html += "  <td></td>";
        html += "  <td>" + numKeyframes + " total</td>";
        html += "</tr>";
        html += "</table>";
    }
    else
    {

    }

    // / ///////////////////

    let numImages = 0;
    if (gltf.json.images)numImages = gltf.json.images.length;
    html += "<div id=\"groupImages\">Images (" + numImages + ")</div>";

    if (gltf.json.images)
    {
        html += "<table id=\"sectionImages\" class=\"table treetable\">";

        html += "<tr>";
        html += "  <th>name</th>";
        html += "  <th>type</th>";
        html += "  <th>func</th>";
        html += "</tr>";

        sizes.images = 0;

        for (let i = 0; i < gltf.json.images.length; i++)
        {
            if (gltf.json.images[i].hasOwnProperty("bufferView"))
            {
                // if (sizeBufferViews.indexOf(gltf.json.images[i].hasOwnProperty("bufferView")) == -1)console.log("image bufferview already there?!");
                // else
                sizes.images += gltf.json.bufferViews[gltf.json.images[i].bufferView].byteLength;
            }
            else console.log("image has no bufferview?!");

            html += "<tr>";
            html += "<td>" + gltf.json.images[i].name + "</td>";
            html += "<td>" + gltf.json.images[i].mimeType + "</td>";
            html += "<td>";

            let name = gltf.json.images[i].name;
            if (name === undefined)name = gltf.json.images[i].bufferView;

            html += "<a onclick=\"gui.corePatch().getOpById('" + op.id + "').exposeTexture('" + name + "')\" class=\"treebutton\">Expose</a>";
            html += "</td>";

            html += "<tr>";
        }
        html += "</table>";
    }

    // / ///////////////////////

    let numCameras = 0;
    if (gltf.json.cameras)numCameras = gltf.json.cameras.length;
    html += "<div id=\"groupCameras\">Cameras (" + numCameras + ")</div>";

    if (gltf.json.cameras)
    {
        html += "<table id=\"sectionCameras\" class=\"table treetable\">";

        html += "<tr>";
        html += "  <th>name</th>";
        html += "  <th>type</th>";
        html += "  <th>info</th>";
        html += "</tr>";

        for (let i = 0; i < gltf.json.cameras.length; i++)
        {
            html += "<tr>";
            html += "<td>" + gltf.json.cameras[i].name + "</td>";
            html += "<td>" + gltf.json.cameras[i].type + "</td>";
            html += "<td>";

            if (gltf.json.cameras[i].perspective)
            {
                html += "yfov: " + Math.round(gltf.json.cameras[i].perspective.yfov * 100) / 100;
                html += ", ";
                html += "zfar: " + Math.round(gltf.json.cameras[i].perspective.zfar * 100) / 100;
                html += ", ";
                html += "znear: " + Math.round(gltf.json.cameras[i].perspective.znear * 100) / 100;
            }
            html += "</td>";

            html += "<tr>";
        }
        html += "</table>";
    }

    // / ////////////////////////////////////

    let numSkins = 0;
    if (gltf.json.skins)numSkins = gltf.json.skins.length;
    html += "<div id=\"groupSkins\">Skins (" + numSkins + ")</div>";

    if (gltf.json.skins)
    {
        // html += "<h3>Skins (" + gltf.json.skins.length + ")</h3>";
        html += "<table id=\"sectionSkins\" class=\"table treetable\">";

        html += "<tr>";
        html += "  <th>name</th>";
        html += "  <th></th>";
        html += "  <th>total joints</th>";
        html += "</tr>";

        for (let i = 0; i < gltf.json.skins.length; i++)
        {
            html += "<tr>";
            html += "<td>" + gltf.json.skins[i].name + "</td>";
            html += "<td>" + "</td>";
            html += "<td>" + gltf.json.skins[i].joints.length + "</td>";
            html += "<td>";
            html += "</td>";
            html += "<tr>";
        }
        html += "</table>";
    }

    // / ////////////////////////////////////

    if (gltf.timing)
    {
        html += "<div id=\"groupTiming\">Debug Loading Timing </div>";

        html += "<table id=\"sectionTiming\" class=\"table treetable\">";

        html += "<tr>";
        html += "  <th>task</th>";
        html += "  <th>time used</th>";
        html += "</tr>";

        let lt = 0;
        for (let i = 0; i < gltf.timing.length - 1; i++)
        {
            html += "<tr>";
            html += "  <td>" + gltf.timing[i][0] + "</td>";
            html += "  <td>" + (gltf.timing[i + 1][1] - gltf.timing[i][1]) + " ms</td>";
            html += "</tr>";
            // lt = gltf.timing[i][1];
        }
        html += "</table>";
    }

    // / //////////////////////////

    let sizeBin = 0;
    if (gltf.json.buffers)
        sizeBin = gltf.json.buffers[0].byteLength;

    html += "<div id=\"groupBinary\">File Size Allocation (" + Math.round(sizeBin / 1024) + "k )</div>";

    html += "<table id=\"sectionBinary\" class=\"table treetable\">";
    html += "<tr>";
    html += "  <th>name</th>";
    html += "  <th>size</th>";
    html += "  <th>%</th>";
    html += "</tr>";
    let sizeUnknown = sizeBin;
    for (let i in sizes)
    {
        // html+=i+':'+Math.round(sizes[i]/1024);
        html += "<tr>";
        html += "<td>" + i + "</td>";
        html += "<td>" + readableSize(sizes[i]) + " </td>";
        html += "<td>" + Math.round(sizes[i] / sizeBin * 100) + "% </td>";
        html += "<tr>";
        sizeUnknown -= sizes[i];
    }

    if (sizeUnknown != 0)
    {
        html += "<tr>";
        html += "<td>unknown</td>";
        html += "<td>" + readableSize(sizeUnknown) + " </td>";
        html += "<td>" + Math.round(sizeUnknown / sizeBin * 100) + "% </td>";
        html += "<tr>";
    }

    html += "</table>";
    html += "</div>";

    tab = new CABLES.UI.Tab("GLTF " + CABLES.basename(inFile.get()), { "icon": "cube", "infotext": "tab_gltf", "padding": true, "singleton": true });
    gui.mainTabs.addTab(tab, true);

    tab.addEventListener("close", closeTab);
    tab.html(html);

    CABLES.UI.Collapsable.setup(ele.byId("groupNodes"), ele.byId("sectionNodes"), false);
    CABLES.UI.Collapsable.setup(ele.byId("groupMaterials"), ele.byId("materialtable"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupAnims"), ele.byId("sectionAnim"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupMeshes"), ele.byId("meshestable"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupCameras"), ele.byId("sectionCameras"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupImages"), ele.byId("sectionImages"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupSkins"), ele.byId("sectionSkins"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupBinary"), ele.byId("sectionBinary"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupTiming"), ele.byId("sectionTiming"), true);

    gui.maintabPanel.show(true);
}

function readableSize(n)
{
    if (n > 1024) return Math.round(n / 1024) + " kb";
    if (n > 1024 * 500) return Math.round(n / 1024) + " mb";
    else return n + " bytes";
}
const GltfSkin = class
{
    constructor(node)
    {
        this._mod = null;
        this._node = node;
        this._lastTime = 0;
        this._matArr = [];
        this._m = mat4.create();
        this._invBindMatrix = mat4.create();
        this.identity = true;
    }

    renderFinish(cgl)
    {
        cgl.popModelMatrix();
        this._mod.unbind();
    }

    renderStart(cgl, time)
    {
        if (!this._mod)
        {
            this._mod = new CGL.ShaderModifier(cgl, op.name + this._node.name);

            this._mod.addModule({
                "priority": -2,
                "name": "MODULE_VERTEX_POSITION",
                "srcHeadVert": attachments.skin_head_vert || "",
                "srcBodyVert": attachments.skin_vert || ""
            });

            this._mod.addUniformVert("m4[]", "MOD_boneMats", []);// bohnenmatze
            const tr = vec3.create();
        }

        const skinIdx = this._node.skin;
        const arrLength = gltf.json.skins[skinIdx].joints.length * 16;

        // if (this._lastTime != time || !time)
        {
            // this._lastTime=inTime.get();
            if (this._matArr.length != arrLength) this._matArr.length = arrLength;

            for (let i = 0; i < gltf.json.skins[skinIdx].joints.length; i++)
            {
                const i16 = i * 16;
                const jointIdx = gltf.json.skins[skinIdx].joints[i];
                const nodeJoint = gltf.nodes[jointIdx];

                for (let j = 0; j < 16; j++)
                    this._invBindMatrix[j] = gltf.accBuffers[gltf.json.skins[skinIdx].inverseBindMatrices][i16 + j];

                mat4.mul(this._m, nodeJoint.modelMatAbs(), this._invBindMatrix);

                for (let j = 0; j < this._m.length; j++) this._matArr[i16 + j] = this._m[j];
            }

            this._mod.setUniformValue("MOD_boneMats", this._matArr);
            this._lastTime = time;
        }

        this._mod.define("SKIN_NUM_BONES", gltf.json.skins[skinIdx].joints.length);
        this._mod.bind();

        // draw mesh...
        cgl.pushModelMatrix();
        if (this.identity)mat4.identity(cgl.mMatrix);
    }
};
const GltfTargetsRenderer = class
{
    constructor(mesh)
    {
        this.mesh = mesh;
        this.tex = null;
        this.numRowsPerTarget = 0;

        this.makeTex(mesh.geom);
    }

    renderFinish(cgl)
    {
        cgl.popModelMatrix();
        this._mod.unbind();
    }

    renderStart(cgl, time)
    {
        if (!this._mod)
        {
            this._mod = new CGL.ShaderModifier(cgl, "gltftarget");

            this._mod.addModule({
                "priority": -2,
                "name": "MODULE_VERTEX_POSITION",
                "srcHeadVert": attachments.targets_head_vert || "",
                "srcBodyVert": attachments.targets_vert || ""
            });

            this._mod.addUniformVert("4f", "MOD_targetTexInfo", [0, 0, 0, 0]);
            this._mod.addUniformVert("t", "MOD_targetTex", 1);
            this._mod.addUniformVert("f[]", "MOD_weights", []);

            const tr = vec3.create();
        }

        this._mod.pushTexture("MOD_targetTex", this.tex);
        if (this.tex && this.mesh.weights)
        {
            this._mod.setUniformValue("MOD_weights", this.mesh.weights);
            this._mod.setUniformValue("MOD_targetTexInfo", [this.tex.width, this.tex.height, this.numRowsPerTarget, this.mesh.weights.length]);

            this._mod.define("MOD_NUM_WEIGHTS", Math.max(1, this.mesh.weights.length));
        }
        else
        {
            this._mod.define("MOD_NUM_WEIGHTS", 1);
        }
        this._mod.bind();

        // draw mesh...
        cgl.pushModelMatrix();
        if (this.identity)mat4.identity(cgl.mMatrix);
    }

    makeTex(geom)
    {
        if (!geom.morphTargets || !geom.morphTargets.length) return;

        let w = geom.morphTargets[0].vertices.length / 3;
        let h = 0;
        this.numRowsPerTarget = 0;

        if (geom.morphTargets[0].vertices && geom.morphTargets[0].vertices.length) this.numRowsPerTarget++;
        if (geom.morphTargets[0].vertexNormals && geom.morphTargets[0].vertexNormals.length) this.numRowsPerTarget++;
        if (geom.morphTargets[0].tangents && geom.morphTargets[0].tangents.length) this.numRowsPerTarget++;
        if (geom.morphTargets[0].bitangents && geom.morphTargets[0].bitangents.length) this.numRowsPerTarget++;

        h = geom.morphTargets.length * this.numRowsPerTarget;

        // console.log("this.numRowsPerTarget", this.numRowsPerTarget);

        const pixels = new Float32Array(w * h * 4);
        let row = 0;

        for (let i = 0; i < geom.morphTargets.length; i++)
        {
            if (geom.morphTargets[i].vertices && geom.morphTargets[i].vertices.length)
            {
                for (let j = 0; j < geom.morphTargets[i].vertices.length; j += 3)
                {
                    pixels[((row * w) + (j / 3)) * 4 + 0] = geom.morphTargets[i].vertices[j + 0];
                    pixels[((row * w) + (j / 3)) * 4 + 1] = geom.morphTargets[i].vertices[j + 1];
                    pixels[((row * w) + (j / 3)) * 4 + 2] = geom.morphTargets[i].vertices[j + 2];
                    pixels[((row * w) + (j / 3)) * 4 + 3] = 1;
                }
                row++;
            }

            if (geom.morphTargets[i].vertexNormals && geom.morphTargets[i].vertexNormals.length)
            {
                for (let j = 0; j < geom.morphTargets[i].vertexNormals.length; j += 3)
                {
                    pixels[(row * w + j / 3) * 4 + 0] = geom.morphTargets[i].vertexNormals[j + 0];
                    pixels[(row * w + j / 3) * 4 + 1] = geom.morphTargets[i].vertexNormals[j + 1];
                    pixels[(row * w + j / 3) * 4 + 2] = geom.morphTargets[i].vertexNormals[j + 2];
                    pixels[(row * w + j / 3) * 4 + 3] = 1;
                }

                row++;
            }

            if (geom.morphTargets[i].tangents && geom.morphTargets[i].tangents.length)
            {
                for (let j = 0; j < geom.morphTargets[i].tangents.length; j += 3)
                {
                    pixels[(row * w + j / 3) * 4 + 0] = geom.morphTargets[i].tangents[j + 0];
                    pixels[(row * w + j / 3) * 4 + 1] = geom.morphTargets[i].tangents[j + 1];
                    pixels[(row * w + j / 3) * 4 + 2] = geom.morphTargets[i].tangents[j + 2];
                    pixels[(row * w + j / 3) * 4 + 3] = 1;
                }
                row++;
            }

            if (geom.morphTargets[i].bitangents && geom.morphTargets[i].bitangents.length)
            {
                for (let j = 0; j < geom.morphTargets[i].bitangents.length; j += 3)
                {
                    pixels[(row * w + j / 3) * 4 + 0] = geom.morphTargets[i].bitangents[j + 0];
                    pixels[(row * w + j / 3) * 4 + 1] = geom.morphTargets[i].bitangents[j + 1];
                    pixels[(row * w + j / 3) * 4 + 2] = geom.morphTargets[i].bitangents[j + 2];
                    pixels[(row * w + j / 3) * 4 + 3] = 1;
                }
                row++;
            }
        }

        this.tex = new CGL.Texture(cgl, { "isFloatingPointTexture": true, "name": "targetsTexture" });

        this.tex.initFromData(pixels, w, h, CGL.Texture.FILTER_LINEAR, CGL.Texture.WRAP_REPEAT);

        // console.log("morphTargets generated texture", w, h);
    }
};
// https://raw.githubusercontent.com/KhronosGroup/glTF/master/specification/2.0/figures/gltfOverview-2.0.0b.png

const
    inExec = op.inTrigger("Render"),
    dataPort = op.inString("data"),
    inFile = op.inUrl("glb File", [".glb"]),
    inRender = op.inBool("Draw", true),
    inCamera = op.inDropDown("Camera", ["None"], "None"),
    inAnimation = op.inString("Animation", ""),
    inShow = op.inTriggerButton("Show Structure"),
    inCenter = op.inSwitch("Center", ["None", "XYZ", "XZ"], "XYZ"),
    inRescale = op.inBool("Rescale", true),
    inRescaleSize = op.inFloat("Rescale Size", 2.5),

    inTime = op.inFloat("Time"),
    inTimeLine = op.inBool("Sync to timeline", false),
    inLoop = op.inBool("Loop", true),

    inNormFormat = op.inSwitch("Normals Format", ["XYZ", "X-ZY"], "XYZ"),
    inVertFormat = op.inSwitch("Vertices Format", ["XYZ", "XZ-Y"], "XYZ"),
    inCalcNormals = op.inSwitch("Calc Normals", ["Auto", "Force Smooth", "Never"], "Auto"),

    inMaterials = op.inObject("Materials"),
    inHideNodes = op.inArray("Hide Nodes"),
    inUseMatProps = op.inBool("Use Material Properties", false),

    inActive = op.inBool("Active", true),

    nextBefore = op.outTrigger("Render Before"),
    next = op.outTrigger("Next"),
    outGenerator = op.outString("Generator"),

    outVersion = op.outNumber("GLTF Version"),
    outExtensions = op.outArray("GLTF Extensions Used"),
    outAnimLength = op.outNumber("Anim Length", 0),
    outAnimTime = op.outNumber("Anim Time", 0),
    outJson = op.outObject("Json"),
    outAnims = op.outArray("Anims"),
    outPoints = op.outArray("BoundingPoints"),
    outBounds = op.outObject("Bounds"),
    outAnimFinished = op.outTrigger("Finished"),
    outLoading = op.outBool("Loading");

op.setPortGroup("Timing", [inTime, inTimeLine, inLoop]);

let cgl = op.patch.cg || op.patch.cgl;
let gltfLoadingErrorMesh = null;
let gltfLoadingError = false;
let gltfTransforms = 0;
let finishedLoading = false;
let cam = null;
let boundingPoints = [];
let gltf = null;
let maxTime = 0;
let time = 0;
let needsMatUpdate = true;
let timedLoader = null;
let loadingId = null;
let data = null;
const scale = vec3.create();
let lastTime = 0;
let doCenter = false;
const boundsCenter = vec3.create();

inFile.onChange =
    inVertFormat.onChange =
    inCalcNormals.onChange =
    inNormFormat.onChange = reloadSoon;

inShow.onTriggered = printInfo;
dataPort.onChange = loadData;
inHideNodes.onChange = hideNodesFromData;
inAnimation.onChange = updateAnimation;
inCenter.onChange = updateCenter;
op.toWorkPortsNeedToBeLinked(inExec);

dataPort.setUiAttribs({ "hideParam": true, "hidePort": true });
op.setPortGroup("Transform", [inRescale, inRescaleSize, inCenter]);

function updateCamera()
{
    const arr = ["None"];
    if (gltf)
    {
        for (let i = 0; i < gltf.nodes.length; i++)
        {
            if (gltf.nodes[i].camera >= 0)
            {
                arr.push(gltf.nodes[i].name);
            }
        }
    }
    inCamera.uiAttribs.values = arr;
}

function updateCenter()
{
    doCenter = inCenter.get() != "None";

    if (gltf && gltf.bounds)
    {
        boundsCenter.set(gltf.bounds.center);
        boundsCenter[0] = -boundsCenter[0];
        boundsCenter[1] = -boundsCenter[1];
        boundsCenter[2] = -boundsCenter[2];
        if (inCenter.get() == "XZ") boundsCenter[1] = -gltf.bounds.minY;
    }
}

inRescale.onChange = function ()
{
    inRescaleSize.setUiAttribs({ "greyout": !inRescale.get() });
};

inMaterials.onChange = function ()
{
    needsMatUpdate = true;
};

op.onDelete = function ()
{
    closeTab();
};

inTimeLine.onChange = function ()
{
    inTime.setUiAttribs({ "greyout": inTimeLine.get() });
};

inCamera.onChange = setCam;

function setCam()
{
    cam = null;
    if (!gltf) return;

    for (let i = 0; i < gltf.nodes.length; i++)
    {
        if (gltf.nodes[i].name == inCamera.get())cam = new gltfCamera(gltf, gltf.nodes[i]);
    }
}

inExec.onTriggered = function ()
{
    cgl = op.patch.cg || op.patch.cgl;

    if (!finishedLoading) return;
    if (!inActive.get()) return;

    if (gltfLoadingError)
    {
        if (!gltfLoadingErrorMesh) gltfLoadingErrorMesh = CGL.MESHES.getSimpleCube(cgl, "ErrorCube");
        gltfLoadingErrorMesh.render(cgl.getShader());
    }

    gltfTransforms = 0;
    if (inTimeLine.get()) time = op.patch.timer.getTime();
    else time = Math.max(0, inTime.get());

    if (inLoop.get())
    {
        time %= maxTime;
        if (time < lastTime) outAnimFinished.trigger();
    }
    else
    {
        if (maxTime > 0 && time >= maxTime) outAnimFinished.trigger();
    }

    lastTime = time;

    cgl.pushModelMatrix();

    outAnimTime.set(time || 0);

    if (finishedLoading && gltf && gltf.bounds)
    {
        if (inRescale.get())
        {
            let sc = inRescaleSize.get() / gltf.bounds.maxAxis;
            gltf.scale = sc;
            vec3.set(scale, sc, sc, sc);
            mat4.scale(cgl.mMatrix, cgl.mMatrix, scale);
        }
        if (doCenter)
        {
            mat4.translate(cgl.mMatrix, cgl.mMatrix, boundsCenter);
        }
    }

    let oldScene = cgl.frameStore.currentScene || null;
    cgl.frameStore.currentScene = gltf;

    nextBefore.trigger();

    if (finishedLoading)
    {
        if (needsMatUpdate) updateMaterials();

        if (cam) cam.start(time);

        if (gltf)
        {
            gltf.time = time;

            if (gltf.bounds && cgl.shouldDrawHelpers(op))
            {
                if (op.isCurrentUiOp()) cgl.pushShader(CABLES.GL_MARKER.getSelectedShader(cgl));
                else cgl.pushShader(CABLES.GL_MARKER.getDefaultShader(cgl));

                gltf.bounds.render(cgl, null, op);
                cgl.popShader();
            }

            if (inRender.get())
            {
                for (let i = 0; i < gltf.nodes.length; i++)
                    if (!gltf.nodes[i].isChild)
                        gltf.nodes[i].render(cgl);
            }
            else
            {
                for (let i = 0; i < gltf.nodes.length; i++)
                    if (!gltf.nodes[i].isChild)
                        gltf.nodes[i].render(cgl, false, true);
            }
        }
    }

    next.trigger();
    cgl.frameStore.currentScene = oldScene;

    cgl.popModelMatrix();

    if (cam)cam.end();
};

function finishLoading()
{
    if (!gltf)
    {
        finishedLoading = true;
        gltfLoadingError = true;
        cgl.patch.loading.finished(loadingId);

        op.setUiError("nogltf", "GLTF File not found");
        return;
    }

    op.setUiError("nogltf", null);

    if (gltf.loadingMeshes > 0)
    {
        // op.log("waiting for async meshes...");
        setTimeout(finishLoading, 100);
        return;
    }

    gltf.timing.push(["finishLoading()", Math.round((performance.now() - gltf.startTime))]);

    needsMatUpdate = true;
    // op.refreshParams();
    outAnimLength.set(maxTime);

    gltf.bounds = new CABLES.CG.BoundingBox();
    // gltf.bounds.applyPos(0, 0, 0);

    // if (!gltf)op.setUiError("urlerror", "could not load gltf:<br/>\"" + inFile.get() + "\"", 2);
    // else op.setUiError("urlerror", null);

    gltf.timing.push(["start calc bounds", Math.round((performance.now() - gltf.startTime))]);

    for (let i = 0; i < gltf.nodes.length; i++)
    {
        const node = gltf.nodes[i];
        node.updateMatrix();
        if (!node.isChild) node.calcBounds(gltf, null, gltf.bounds);
    }

    if (gltf.bounds)outBounds.set(gltf.bounds);

    gltf.timing.push(["calced bounds", Math.round((performance.now() - gltf.startTime))]);

    hideNodesFromData();

    gltf.timing.push(["hideNodesFromData", Math.round((performance.now() - gltf.startTime))]);

    if (tab)printInfo();

    gltf.timing.push(["printinfo", Math.round((performance.now() - gltf.startTime))]);

    updateCamera();
    setCam();
    outPoints.set(boundingPoints);

    if (gltf)
    {
        if (inFile.get() && !inFile.get().startsWith("data:"))
        {
            op.setUiAttrib({ "extendTitle": CABLES.basename(inFile.get()) });
        }

        gltf.loaded = Date.now();
        // if (gltf.bounds)outBounds.set(gltf.bounds);
    }

    if (gltf)
    {
        for (let i = 0; i < gltf.nodes.length; i++)
        {
            if (!gltf.nodes[i].isChild)
            {
                gltf.nodes[i].render(cgl, false, true, true, false, true, 0);
            }
        }

        for (let i = 0; i < gltf.nodes.length; i++)
        {
            const node = gltf.nodes[i];
            node.children = uniqueArray(node.children); // stupid fix why are there too many children ?!
        }
    }

    updateCenter();
    updateAnimation();

    outLoading.set(false);

    cgl.patch.loading.finished(loadingId);
    loadingId = null;

    // if (gltf.chunks.length > 1) gltf.chunks[1] = null;
    // if (gltf.chunks.length > 2) gltf.chunks[2] = null;

    // op.setUiAttrib({ "accBuffersDelete": CABLES.basename(inFile.get()) });

    if (gltf.accBuffersDelete)
    {
        for (let i = 0; i < gltf.accBuffersDelete.length; i++)
        {
            gltf.accBuffers[gltf.accBuffersDelete[i]] = null;
        }
    }

    // setTimeout(() =>
    // {
    //     for (let i = 0; i < gltf.nodes.length; i++)
    //     {
    //     // console.log(gltf.nodes[i]);

    //         if (gltf.nodes[i].mesh && gltf.nodes[i].mesh.meshes)
    //         {
    //         // console.log(gltf.nodes[i].mesh.meshes.length);
    //             for (let j = 0; j < gltf.nodes[i].mesh.meshes.length; j++)
    //             {
    //                 console.log(gltf.nodes[i].mesh.meshes[j]);

    //                 // for (let k = 0; k < gltf.nodes[i].mesh.meshes.length; k++)
    //                 {
    //                     if (gltf.nodes[i].mesh.meshes[j].mesh)
    //                     {
    //                         gltf.nodes[i].mesh.meshes[j].mesh.freeMem();
    //                         // console.log(gltf.nodes[i].mesh.meshes[j].mesh);
    //                         // for (let l = 0; l < gltf.nodes[i].mesh.meshes[j].mesh._attributes.length; l++)
    //                         //     gltf.nodes[i].mesh.meshes[j].mesh._attributes[l] = null;
    //                     }
    //                 }

    //                 gltf.nodes[i].mesh.meshes[j].geom.clear();
    //                 console.log("clear!");
    //             }
    //         }
    //     }
    // }, 1000);

    if (!(gltf.json.images && gltf.json.images.length)) gltf.chunks = null;

    finishedLoading = true;
}

function loadBin(addCacheBuster)
{
    if (!inActive.get()) return;

    if (!loadingId)loadingId = cgl.patch.loading.start("gltfScene", inFile.get(), op);

    let fileToLoad = inFile.get();

    if (!fileToLoad || fileToLoad == "null") return;
    let url = op.patch.getFilePath(String(inFile.get()));
    if (!url) return;
    if (inFile.get() && !inFile.get().startsWith("data:"))
    {
        if (addCacheBuster === true)url += "?rnd=" + CABLES.generateUUID();
    }
    needsMatUpdate = true;
    outLoading.set(true);
    fetch(url)
        .then((res) => { return res.arrayBuffer(); })
        .then((arrayBuffer) =>
        {
            if (inFile.get() != fileToLoad)
            {
                cgl.patch.loading.finished(loadingId);
                loadingId = null;
                return;
            }

            boundingPoints = [];
            maxTime = 0;
            gltf = parseGltf(arrayBuffer);
            arrayBuffer = null;
            finishLoading();
        });
    closeTab();

    const oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";

    cgl.patch.loading.addAssetLoadingTask(() =>
    {

    });
}

// op.onFileChanged = function (fn)
// {
//     gltf.accBuffersDelete[i];
//     if (fn && fn.length > 3 && inFile.get() && inFile.get().indexOf(fn) > -1) reloadSoon(true);
// };

op.onFileChanged = function (fn)
{
    if (inFile.get() && inFile.get().indexOf(fn) > -1)
    {
        reloadSoon(true);
    }
};

inActive.onChange = () =>
{
    if (inActive.get()) reloadSoon();

    if (!inActive.get())
    {
        gltf = null;
    }
};

function reloadSoon(nocache)
{
    clearTimeout(timedLoader);
    timedLoader = setTimeout(function () { loadBin(nocache); }, 30);
}

function updateMaterials()
{
    if (!gltf) return;

    gltf.shaders = {};

    if (inMaterials.links.length == 1 && inMaterials.get())
    {
        // just accept a associative object with s
        needsMatUpdate = true;
        const op = inMaterials.links[0].portOut.op;

        const portShader = op.getPort("Shader");
        const portName = op.getPort("Material Name");

        if (!portShader && !portName)
        {
            const inMats = inMaterials.get();
            for (let matname in inMats)
            {
                if (inMats[matname] && gltf.json.materials)
                    for (let i = 0; i < gltf.json.materials.length; i++)
                    {
                        if (gltf.json.materials[i].name == matname)
                        {
                            if (gltf.shaders[i])
                            {
                                op.warn("double material assignment:", name);
                            }
                            gltf.shaders[i] = inMats[matname];
                        }
                    }
            }
        }
    }

    if (inMaterials.get())
    {
        for (let j = 0; j < inMaterials.links.length; j++)
        {
            const op = inMaterials.links[j].portOut.op;
            const portShader = op.getPort("Shader");
            const portName = op.getPort("Material Name");

            if (portShader && portName && portShader.get())
            {
                const name = portName.get();
                if (gltf.json.materials)
                    for (let i = 0; i < gltf.json.materials.length; i++)
                        if (gltf.json.materials[i].name == name)
                        {
                            if (gltf.shaders[i])
                            {
                                op.warn("double material assignment:", name);
                            }
                            gltf.shaders[i] = portShader.get();
                        }
            }
        }
    }
    needsMatUpdate = false;
    if (tab)printInfo();
}

function hideNodesFromArray()
{
    const hideArr = inHideNodes.get();

    if (!gltf || !data || !data.hiddenNodes) return;
    if (!hideArr)
    {
        return;
    }

    for (let i = 0; i < hideArr.length; i++)
    {
        const n = gltf.getNode(hideArr[i]);
        if (n)n.hidden = true;
    }
}

function hideNodesFromData()
{
    if (!data)loadData();
    if (!gltf) return;

    gltf.unHideAll();

    if (data && data.hiddenNodes)
    {
        for (const i in data.hiddenNodes)
        {
            const n = gltf.getNode(i);
            if (n) n.hidden = true;
            else op.verbose("node to be hidden not found", i, n);
        }
    }
    hideNodesFromArray();
}

function loadData()
{
    data = dataPort.get();

    if (!data || data === "")data = {};
    else data = JSON.parse(data);

    if (gltf)hideNodesFromData();

    return data;
}

function saveData()
{
    dataPort.set(JSON.stringify(data));
}

function updateAnimation()
{
    if (gltf && gltf.nodes)
    {
        for (let i = 0; i < gltf.nodes.length; i++)
        {
            gltf.nodes[i].setAnimAction(inAnimation.get());
        }
    }
}

function findParents(nodes, childNodeIndex)
{
    for (let i = 0; i < gltf.nodes.length; i++)
    {
        if (gltf.nodes[i].children.indexOf(childNodeIndex) >= 0)
        {
            nodes.push(gltf.nodes[i]);
            if (gltf.nodes[i].isChild) findParents(nodes, i);
        }
    }
}

op.exposeTexture = function (name)
{
    const newop = gui.corePatch().addOp("Ops.Gl.GLTF.GltfTexture");
    newop.getPort("Name").set(name);
    setNewOpPosition(newop, 1);
    op.patch.link(op, next.name, newop, "Render");
    gui.patchView.testCollision(newop);
    gui.patchView.centerSelectOp(newop.id, true);
};

op.exposeGeom = function (name, idx)
{
    const newop = gui.corePatch().addOp("Ops.Gl.GLTF.GltfGeometry");
    newop.getPort("Name").set(name);
    newop.getPort("Submesh").set(idx);
    setNewOpPosition(newop, 1);
    op.patch.link(op, next.name, newop, "Update");
    gui.patchView.testCollision(newop);
    gui.patchView.centerSelectOp(newop.id, true);
};

function setNewOpPosition(newOp, num)
{
    num = num || 1;

    newOp.setUiAttrib(
        {
            "subPatch": op.uiAttribs.subPatch,
            "translate": { "x": op.uiAttribs.translate.x, "y": op.uiAttribs.translate.y + num * CABLES.GLUI.glUiConfig.newOpDistanceY }
        });
}

op.exposeNode = function (name, type, options)
{
    let tree = type == "hierarchy";
    if (tree)
    {
        let ops = [];

        for (let i = 0; i < gltf.nodes.length; i++)
        {
            if (gltf.nodes[i].name == name)
            {
                let arrHierarchy = [];
                const node = gltf.nodes[i];
                findParents(arrHierarchy, i);

                arrHierarchy = arrHierarchy.reverse();
                arrHierarchy.push(node, node);

                let prevPort = next.name;
                let prevOp = op;
                for (let j = 0; j < arrHierarchy.length; j++)
                {
                    const newop = gui.corePatch().addOp("Ops.Gl.GLTF.GltfNode_v2");
                    newop.getPort("Node Name").set(arrHierarchy[j].name);
                    op.patch.link(prevOp, prevPort, newop, "Render");
                    setNewOpPosition(newop, j);

                    if (j == arrHierarchy.length - 1)
                    {
                        newop.getPort("Transformation").set(false);
                    }
                    else
                    {
                        newop.getPort("Draw Mesh").set(false);
                        newop.getPort("Draw Childs").set(false);
                    }

                    prevPort = "Next";
                    prevOp = newop;
                    ops.push(newop);
                    gui.patchView.testCollision(newop);
                }
            }
        }

        for (let i = 0; i < ops.length; i++)
        {
            ops[i].selectChilds();
        }
    }
    else
    {
        let newopname = "Ops.Gl.GLTF.GltfNode_v2";
        if (options && options.skin)newopname = "Ops.Gl.GLTF.GltfSkin";
        if (type == "transform")newopname = "Ops.Gl.GLTF.GltfNodeTransform_v2";

        gui.serverOps.loadOpLibs(newopname, () =>
        {
            let newop = gui.corePatch().addOp(newopname);

            newop.getPort("Node Name").set(name);
            setNewOpPosition(newop);
            op.patch.link(op, next.name, newop, "Render");
            gui.patchView.testCollision(newop);
            gui.patchView.centerSelectOp(newop.id, true);
        });
    }
    gui.closeModal();
};

op.assignMaterial = function (name)
{
    const newop = gui.corePatch().addOp("Ops.Gl.GLTF.GltfSetMaterial");
    newop.getPort("Material Name").set(name);
    op.patch.link(op, inMaterials.name, newop, "Material");
    setNewOpPosition(newop);
    gui.patchView.testCollision(newop);
    gui.patchView.centerSelectOp(newop.id, true);

    gui.closeModal();
};

op.toggleNodeVisibility = function (name)
{
    const n = gltf.getNode(name);
    n.hidden = !n.hidden;
    data.hiddenNodes = data.hiddenNodes || {};

    if (n)
        if (n.hidden)data.hiddenNodes[name] = true;
        else delete data.hiddenNodes[name];

    saveData();
};

function uniqueArray(arr)
{
    const u = {}, a = [];
    for (let i = 0, l = arr.length; i < l; ++i)
    {
        if (!u.hasOwnProperty(arr[i]))
        {
            a.push(arr[i]);
            u[arr[i]] = 1;
        }
    }
    return a;
}


};

Ops.Gl.GLTF.GltfScene_v4.prototype = new CABLES.Op();
CABLES.OPS["c9cbb226-46f7-4ca6-8dab-a9d0bdca4331"]={f:Ops.Gl.GLTF.GltfScene_v4,objName:"Ops.Gl.GLTF.GltfScene_v4"};




// **************************************************************
// 
// Ops.Gl.GLTF.GltfSetMaterial
// 
// **************************************************************

Ops.Gl.GLTF.GltfSetMaterial = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inShader = op.inObject("Shader", null, "shader"),
    inName = op.inString("Material Name", "none"),
    outMat = op.outObject("Material");

inName.onChange =
inShader.onChange = function ()
{
    op.setUiAttrib({ "extendTitle": inName.get() });
    outMat.setRef(inShader.get() || op.patch.cgl.getDefaultShader());
};


};

Ops.Gl.GLTF.GltfSetMaterial.prototype = new CABLES.Op();
CABLES.OPS["baf968ea-e4df-4fca-9cda-e6ddd38a4200"]={f:Ops.Gl.GLTF.GltfSetMaterial,objName:"Ops.Gl.GLTF.GltfSetMaterial"};




// **************************************************************
// 
// Ops.Ui.SubPatchInput
// 
// **************************************************************

Ops.Ui.SubPatchInput = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
op.innerInput = true;

const goto = op.inTriggerButton("Goto SubPatchOp");
goto.setUiAttribs({ "hidePort": true });
goto.onTriggered = () =>
{
    const parent = op.patch.getSubPatchOuterOp(op.uiAttribs.subPatch);
    gui.patchView.centerSelectOp(parent.id);
};


};

Ops.Ui.SubPatchInput.prototype = new CABLES.Op();
CABLES.OPS["c4e4e933-136e-479e-8de8-0b35b75d9217"]={f:Ops.Ui.SubPatchInput,objName:"Ops.Ui.SubPatchInput"};




// **************************************************************
// 
// Ops.Ui.SubPatchOutput
// 
// **************************************************************

Ops.Ui.SubPatchOutput = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
op.innerOutput = true;


};

Ops.Ui.SubPatchOutput.prototype = new CABLES.Op();
CABLES.OPS["02d45073-7936-4830-81ad-59a162febf1f"]={f:Ops.Ui.SubPatchOutput,objName:"Ops.Ui.SubPatchOutput"};




// **************************************************************
// 
// Ops.Gl.Texture_v2
// 
// **************************************************************

Ops.Gl.Texture_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    filename = op.inUrl("File", [".jpg", ".png", ".webp", ".jpeg", ".avif"]),
    tfilter = op.inSwitch("Filter", ["nearest", "linear", "mipmap"]),
    wrap = op.inValueSelect("Wrap", ["repeat", "mirrored repeat", "clamp to edge"], "clamp to edge"),
    aniso = op.inSwitch("Anisotropic", ["0", "1", "2", "4", "8", "16"], "0"),
    dataFrmt = op.inSwitch("Data Format", ["R", "RG", "RGB", "RGBA", "SRGBA"], "RGBA"),
    flip = op.inValueBool("Flip", false),
    unpackAlpha = op.inValueBool("Pre Multiplied Alpha", false),
    active = op.inValueBool("Active", true),
    inFreeMemory = op.inBool("Save Memory", true),
    textureOut = op.outTexture("Texture"),
    addCacheBust = op.inBool("Add Cachebuster", false),
    inReload = op.inTriggerButton("Reload"),
    width = op.outNumber("Width"),
    height = op.outNumber("Height"),
    ratio = op.outNumber("Aspect Ratio"),
    loaded = op.outBoolNum("Loaded", 0),
    loading = op.outBoolNum("Loading", 0);

const cgl = op.patch.cgl;

op.toWorkPortsNeedToBeLinked(textureOut);
op.setPortGroup("Size", [width, height]);

let loadedFilename = null;
let loadingId = null;
let tex = null;
let cgl_filter = CGL.Texture.FILTER_MIPMAP;
let cgl_wrap = CGL.Texture.WRAP_REPEAT;
let cgl_aniso = 0;
let timedLoader = 0;

unpackAlpha.setUiAttribs({ "hidePort": true });
unpackAlpha.onChange =
    filename.onChange =
    dataFrmt.onChange =
    addCacheBust.onChange =
    flip.onChange = reloadSoon;
aniso.onChange = tfilter.onChange = onFilterChange;
wrap.onChange = onWrapChange;

tfilter.set("mipmap");
wrap.set("repeat");

textureOut.set(CGL.Texture.getEmptyTexture(cgl));

inReload.onTriggered = reloadSoon;

active.onChange = function ()
{
    if (active.get())
    {
        if (loadedFilename != filename.get() || !tex) reloadSoon();
        else textureOut.set(tex);
    }
    else
    {
        textureOut.set(CGL.Texture.getEmptyTexture(cgl));
        width.set(CGL.Texture.getEmptyTexture(cgl).width);
        height.set(CGL.Texture.getEmptyTexture(cgl).height);
        if (tex)tex.delete();
        op.setUiAttrib({ "extendTitle": "" });
        tex = null;
    }
};

const setTempTexture = function ()
{
    const t = CGL.Texture.getTempTexture(cgl);
    textureOut.set(t);
};

function reloadSoon(nocache)
{
    clearTimeout(timedLoader);
    timedLoader = setTimeout(function ()
    {
        realReload(nocache);
    }, 1);
}

function getPixelFormat()
{
    if (dataFrmt.get() == "R") return CGL.Texture.PFORMATSTR_R8UB;
    if (dataFrmt.get() == "RG") return CGL.Texture.PFORMATSTR_RG8UB;
    if (dataFrmt.get() == "RGB") return CGL.Texture.PFORMATSTR_RGB8UB;
    if (dataFrmt.get() == "SRGBA") return CGL.Texture.PFORMATSTR_SRGBA8;

    return CGL.Texture.PFORMATSTR_RGBA8UB;
}

function realReload(nocache)
{
    op.checkMainloopExists();
    if (!active.get()) return;
    if (loadingId)loadingId = cgl.patch.loading.finished(loadingId);

    loadingId = cgl.patch.loading.start(op.objName, filename.get(), op);

    let url = op.patch.getFilePath(String(filename.get()));

    if (addCacheBust.get() || nocache === true) url = CABLES.cacheBust(url);

    if (String(filename.get()).indexOf("data:") == 0) url = filename.get();

    let needsRefresh = false;
    loadedFilename = filename.get();

    if ((filename.get() && filename.get().length > 1))
    {
        loaded.set(false);
        loading.set(true);

        const fileToLoad = filename.get();

        op.setUiAttrib({ "extendTitle": CABLES.basename(url) });
        if (needsRefresh) op.refreshParams();

        cgl.patch.loading.addAssetLoadingTask(() =>
        {
            op.setUiError("urlerror", null);
            CGL.Texture.load(cgl, url, function (err, newTex)
            {
                cgl.checkFrameStarted("texture inittexture");

                if (filename.get() != fileToLoad)
                {
                    loadingId = cgl.patch.loading.finished(loadingId);
                    return;
                }

                if (tex)tex.delete();

                if (err)
                {
                    const t = CGL.Texture.getErrorTexture(cgl);
                    textureOut.setRef(t);

                    op.setUiError("urlerror", "could not load texture: \"" + filename.get() + "\"", 2);
                    loadingId = cgl.patch.loading.finished(loadingId);
                    return;
                }

                // textureOut.setRef(newTex);

                width.set(newTex.width);
                height.set(newTex.height);
                ratio.set(newTex.width / newTex.height);

                // if (!newTex.isPowerOfTwo()) op.setUiError("npot", "Texture dimensions not power of two! - Texture filtering will not work in WebGL 1.", 0);
                // else op.setUiError("npot", null);

                tex = newTex;
                // textureOut.set(null);
                textureOut.setRef(tex);

                loading.set(false);
                loaded.set(true);

                if (inFreeMemory.get()) tex.image = null;

                if (loadingId)
                {
                    loadingId = cgl.patch.loading.finished(loadingId);
                }
                op.checkMainloopExists();
            }, {
                "anisotropic": cgl_aniso,
                "wrap": cgl_wrap,
                "flip": flip.get(),
                "unpackAlpha": unpackAlpha.get(),
                "pixelFormat": getPixelFormat(),
                "filter": cgl_filter
            });

            op.checkMainloopExists();
        });
    }
    else
    {
        setTempTexture();
        loadingId = cgl.patch.loading.finished(loadingId);
    }
}

function onFilterChange()
{
    if (tfilter.get() == "nearest") cgl_filter = CGL.Texture.FILTER_NEAREST;
    else if (tfilter.get() == "linear") cgl_filter = CGL.Texture.FILTER_LINEAR;
    else if (tfilter.get() == "mipmap") cgl_filter = CGL.Texture.FILTER_MIPMAP;
    else if (tfilter.get() == "Anisotropic") cgl_filter = CGL.Texture.FILTER_ANISOTROPIC;
    aniso.setUiAttribs({ "greyout": cgl_filter != CGL.Texture.FILTER_MIPMAP });

    cgl_aniso = parseFloat(aniso.get());

    reloadSoon();
}

function onWrapChange()
{
    if (wrap.get() == "repeat") cgl_wrap = CGL.Texture.WRAP_REPEAT;
    if (wrap.get() == "mirrored repeat") cgl_wrap = CGL.Texture.WRAP_MIRRORED_REPEAT;
    if (wrap.get() == "clamp to edge") cgl_wrap = CGL.Texture.WRAP_CLAMP_TO_EDGE;

    reloadSoon();
}

op.onFileChanged = function (fn)
{
    if (filename.get() && filename.get().indexOf(fn) > -1)
    {
        textureOut.set(CGL.Texture.getEmptyTexture(op.patch.cgl));
        textureOut.set(CGL.Texture.getTempTexture(cgl));
        realReload(true);
    }
};


};

Ops.Gl.Texture_v2.prototype = new CABLES.Op();
CABLES.OPS["790f3702-9833-464e-8e37-6f0f813f7e16"]={f:Ops.Gl.Texture_v2,objName:"Ops.Gl.Texture_v2"};




// **************************************************************
// 
// Ops.Gl.Matrix.Scale
// 
// **************************************************************

Ops.Gl.Matrix.Scale = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    scale = op.inValueFloat("scale", 1.0),
    scaleX = op.inValueFloat("x", 1),
    scaleY = op.inValueFloat("y", 1),
    scaleZ = op.inValueFloat("z", 1),
    trigger = op.outTrigger("trigger");

op.setPortGroup("Axis", [scaleX, scaleY, scaleZ]);

const vScale = vec3.create();

scaleX.onChange =
    scaleY.onChange =
    scaleZ.onChange =
    scale.onChange = scaleChanged;

scaleChanged();

render.onTriggered = function ()
{
    const cgl = op.patch.cg || op.patch.cgl;
    cgl.pushModelMatrix();
    mat4.scale(cgl.mMatrix, cgl.mMatrix, vScale);
    trigger.trigger();
    cgl.popModelMatrix();
};

function scaleChanged()
{
    const s = scale.get();
    vec3.set(vScale, s * scaleX.get(), s * scaleY.get(), s * scaleZ.get());
}


};

Ops.Gl.Matrix.Scale.prototype = new CABLES.Op();
CABLES.OPS["50e7f565-0cdb-47ca-912b-87c04e2f00e3"]={f:Ops.Gl.Matrix.Scale,objName:"Ops.Gl.Matrix.Scale"};




// **************************************************************
// 
// Ops.Anim.LFO_v2
// 
// **************************************************************

Ops.Anim.LFO_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    time = op.inValue("Time"),
    speed = op.inFloat("Frequency", 1),
    type = op.inValueSelect("Type", ["sine", "triangle", "ramp up", "ramp down", "square"], "sine"),
    phase = op.inValue("Phase", 0),
    rangeMin = op.inValue("Range Min", -1),
    rangeMax = op.inValue("Range Max", 1),
    result = op.outNumber("Result");

let v = 0;
type.onChange = updateType;

updateType();

const PI2 = Math.PI / 2;

function updateType()
{
    if (type.get() == "sine") time.onChange = sine;
    if (type.get() == "ramp up") time.onChange = rampUp;
    if (type.get() == "ramp down") time.onChange = rampDown;
    if (type.get() == "square") time.onChange = square;
    if (type.get() == "triangle") time.onChange = triangle;
}

function updateTime()
{
    return (time.get() * speed.get()) + phase.get();
}

function square()
{
    let t = updateTime() + 0.5;
    v = t % 2.0;
    if (v <= 1.0)v = -1;
    else v = 1;
    v = CABLES.map(v, -1, 1, rangeMin.get(), rangeMax.get());
    result.set(v);
}

function rampUp()
{
    let t = (updateTime() + 1);
    t *= 0.5;
    v = t % 1.0;
    v -= 0.5;
    v *= 2.0;
    v = CABLES.map(v, -1, 1, rangeMin.get(), rangeMax.get());
    result.set(v);
}

function rampDown()
{
    let t = updateTime();
    v = t % 1.0;
    v -= 0.5;
    v *= -2.0;
    v = CABLES.map(v, -1, 1, rangeMin.get(), rangeMax.get());
    result.set(v);
}

function triangle()
{
    let t = updateTime();
    v = t % 2.0;
    if (v > 1) v = 2.0 - v;
    v -= 0.5;
    v *= 2.0;
    v = CABLES.map(v, -1, 1, rangeMin.get(), rangeMax.get());
    result.set(v);
}

function sine()
{
    let t = updateTime() * Math.PI - (PI2);
    v = Math.sin((t));
    v = CABLES.map(v, -1, 1, rangeMin.get(), rangeMax.get());
    result.set(v);
}


};

Ops.Anim.LFO_v2.prototype = new CABLES.Op();
CABLES.OPS["621f3334-f428-4310-b0da-66eb8259df33"]={f:Ops.Anim.LFO_v2,objName:"Ops.Anim.LFO_v2"};




// **************************************************************
// 
// Ops.Anim.Timer_v2
// 
// **************************************************************

Ops.Anim.Timer_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inSpeed = op.inValue("Speed", 1),
    playPause = op.inValueBool("Play", true),
    reset = op.inTriggerButton("Reset"),
    inSyncTimeline = op.inValueBool("Sync to timeline", false),
    outTime = op.outNumber("Time");

op.setPortGroup("Controls", [playPause, reset, inSpeed]);

const timer = new CABLES.Timer();
let lastTime = null;
let time = 0;
let syncTimeline = false;

playPause.onChange = setState;
setState();

function setState()
{
    if (playPause.get())
    {
        timer.play();
        op.patch.addOnAnimFrame(op);
    }
    else
    {
        timer.pause();
        op.patch.removeOnAnimFrame(op);
    }
}

reset.onTriggered = doReset;

function doReset()
{
    time = 0;
    lastTime = null;
    timer.setTime(0);
    outTime.set(0);
}

inSyncTimeline.onChange = function ()
{
    syncTimeline = inSyncTimeline.get();
    playPause.setUiAttribs({ "greyout": syncTimeline });
    reset.setUiAttribs({ "greyout": syncTimeline });
};

op.onAnimFrame = function (tt, frameNum, deltaMs)
{
    if (timer.isPlaying())
    {
        if (CABLES.overwriteTime !== undefined)
        {
            outTime.set(CABLES.overwriteTime * inSpeed.get());
        }
        else

        if (syncTimeline)
        {
            outTime.set(tt * inSpeed.get());
        }
        else
        {
            timer.update();

            const timerVal = timer.get();

            if (lastTime === null)
            {
                lastTime = timerVal;
                return;
            }

            const t = Math.abs(timerVal - lastTime);
            lastTime = timerVal;

            time += t * inSpeed.get();
            if (time != time)time = 0;
            outTime.set(time);
        }
    }
};


};

Ops.Anim.Timer_v2.prototype = new CABLES.Op();
CABLES.OPS["aac7f721-208f-411a-adb3-79adae2e471a"]={f:Ops.Anim.Timer_v2,objName:"Ops.Anim.Timer_v2"};




// **************************************************************
// 
// Ops.Gl.ImageCompose.Gradient_v2
// 
// **************************************************************

Ops.Gl.ImageCompose.Gradient_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"gradient_frag":"IN vec2 texCoord;\nUNI float amount;\nUNI float pos;\nUNI float width;\n\nUNI vec3 colA;\nUNI vec3 colB;\nUNI vec3 colC;\nUNI sampler2D tex;\n\n{{CGL.BLENDMODES3}}\n\n\n\n\nvec3 lin2srgb( vec3 cl )\n{\n\tcl = clamp( cl, 0.0, 1.0 );\n\tvec3 c_lo = 12.92 * cl;\n\tvec3 c_hi = 1.055 * pow(cl,vec3(0.41666,0.41666,0.41666)) - 0.055;\n\treturn vec3( (cl.r<0.0031308) ? c_lo.r : c_hi.r,\n                (cl.g<0.0031308) ? c_lo.g : c_hi.g,\n                (cl.b<0.0031308) ? c_lo.b : c_hi.b );\n}\n\nvec3 oklab_mix( vec3 colA, vec3 colB, float h )\n{\n    // https://www.shadertoy.com/view/ttcyRS\n    // https://bottosson.github.io/posts/oklab\n    const mat3 kCONEtoLMS = mat3(\n         0.4121656120,  0.2118591070,  0.0883097947,\n         0.5362752080,  0.6807189584,  0.2818474174,\n         0.0514575653,  0.1074065790,  0.6302613616);\n    const mat3 kLMStoCONE = mat3(\n         4.0767245293, -1.2681437731, -0.0041119885,\n        -3.3072168827,  2.6093323231, -0.7034763098,\n         0.2307590544, -0.3411344290,  1.7068625689);\n\n    // rgb to cone (arg of pow can't be negative)\n    vec3 lmsA = pow( kCONEtoLMS*colA, vec3(1.0/3.0) );\n    vec3 lmsB = pow( kCONEtoLMS*colB, vec3(1.0/3.0) );\n    // lerp\n    vec3 lms = mix( lmsA, lmsB, h );\n    // gain in the middle (no oaklab anymore, but looks better?)\n    #ifdef OKLABGAIN\n  lms *= 1.0+0.2*h*(1.0-h);\n  #endif\n    // cone to rgb\n    return kLMStoCONE*(lms*lms*lms);\n}\n\n\nvoid main()\n{\n    vec4 base=texture(tex,texCoord);\n    vec4 col;\n    float ax=texCoord.x;\n\n    #ifdef GRAD_Y\n        ax=texCoord.y;\n    #endif\n    #ifdef GRAD_XY\n        ax=(texCoord.x+texCoord.y)/2.0;\n    #endif\n    #ifdef GRAD_RADIAL\n        ax=distance(texCoord,vec2(0.5,0.5))*2.0;\n    #endif\n\n    ax=((ax-0.5)*width)+0.5;\nax=clamp(ax,0.0,1.0);\n\n    #ifndef GRAD_SMOOTHSTEP\n        if(ax<=pos) col = vec4(MIXER(colA, colB, ax*1.0/pos),1.0);\n        else col = vec4(MIXER(colB, colC, min(1.0,(ax-pos)*1.0/(1.0-pos))),1.0);\n    #endif\n\n    #ifdef GRAD_SMOOTHSTEP\n        if(ax<=pos) col = vec4(MIXER(colA, colB, smoothstep(0.0,1.0,ax*1.0/pos)),1.0);\n        else col = vec4(MIXER(colB, colC, smoothstep(0.0,1.0,min(1.0,(ax-pos)*1.0/(1.0-pos)))),1.0);\n    #endif\n\n    #ifdef SRGB\n        col.rgb=lin2srgb(col.rgb);\n    #endif\n\n    outColor=cgl_blendPixel(base,col,amount);\n}",};
const
    render = op.inTrigger("Render"),
    blendMode = CGL.TextureEffect.AddBlendSelect(op, "Blend Mode", "normal"),
    maskAlpha = CGL.TextureEffect.AddBlendAlphaMask(op),
    amount = op.inValueSlider("Amount", 1),
    width = op.inValue("Width", 1),
    gType = op.inSwitch("Type", ["X", "Y", "XY", "Radial"], "X"),
    pos1 = op.inValueSlider("Pos", 0.5),
    smoothStep = op.inValueBool("Smoothstep", true),
    inSrgb = op.inValueBool("sRGB", false),
    inColSpace = op.inSwitch("color space", ["RGB", "Oklab", "OklabG"], "RGB"),

    r = op.inValueSlider("r", Math.random()),
    g = op.inValueSlider("g", Math.random()),
    b = op.inValueSlider("b", Math.random()),

    r2 = op.inValueSlider("r2", Math.random()),
    g2 = op.inValueSlider("g2", Math.random()),
    b2 = op.inValueSlider("b2", Math.random()),

    r3 = op.inValueSlider("r3", Math.random()),
    g3 = op.inValueSlider("g3", Math.random()),
    b3 = op.inValueSlider("b3", Math.random()),

    randomize = op.inTriggerButton("Randomize"),
    next = op.outTrigger("Next");

r.setUiAttribs({ "colorPick": true });
r2.setUiAttribs({ "colorPick": true });
r3.setUiAttribs({ "colorPick": true });

op.setPortGroup("Blending", [blendMode, amount]);
op.setPortGroup("Color A", [r, g, b]);
op.setPortGroup("Color B", [r2, g2, b2]);
op.setPortGroup("Color C", [r3, g3, b3]);

const cgl = op.patch.cgl;
const shader = new CGL.Shader(cgl, "gradient");

shader.setSource(shader.getDefaultVertexShader(), attachments.gradient_frag);
const amountUniform = new CGL.Uniform(shader, "f", "amount", amount);
const uniPos = new CGL.Uniform(shader, "f", "pos", pos1);
const uniWidth = new CGL.Uniform(shader, "f", "width", width);
const textureUniform = new CGL.Uniform(shader, "t", "tex", 0);
let r3uniform, r2uniform, runiform;

r2.onChange = g2.onChange = b2.onChange = updateCol2;
r3.onChange = g3.onChange = b3.onChange = updateCol3;
r.onChange = g.onChange = b.onChange = updateCol;

r2.onLinkChanged = g2.onLinkChanged = b2.onLinkChanged =
r3.onLinkChanged = g3.onLinkChanged = b3.onLinkChanged =
r.onLinkChanged = g.onLinkChanged = b.onLinkChanged = updateUi;

updateCol();
updateCol2();
updateCol3();
updateDefines();

inSrgb.onChange =
inColSpace.onChange =
smoothStep.onChange =
    gType.onChange = updateDefines;

function updateUi()
{
    randomize.setUiAttribs({ "greyout": r2.isLinked() || g2.isLinked() || b2.isLinked() || r3.isLinked() || g3.isLinked() || b3.isLinked() || r.isLinked() || g.isLinked() || b.isLinked() });
}

function updateDefines()
{
    // shader.toggleDefine("OKLABGAIN", inoklabGain.get());
    shader.toggleDefine("SRGB", inSrgb.get());

    shader.define("MIXER", (inColSpace.get() + "").indexOf("Oklab") > -1 ? "oklab_mix" : "mix");
    shader.toggleDefine("OKLABGAIN", (inColSpace.get() + "").indexOf("OklabG") > -1);

    shader.toggleDefine("GRAD_SMOOTHSTEP", smoothStep.get());
    shader.toggleDefine("GRAD_X", gType.get() == "X");
    shader.toggleDefine("GRAD_XY", gType.get() == "XY");
    shader.toggleDefine("GRAD_Y", gType.get() == "Y");
    shader.toggleDefine("GRAD_RADIAL", gType.get() == "Radial");
}

CGL.TextureEffect.setupBlending(op, shader, blendMode, amount, maskAlpha);

randomize.onTriggered = function ()
{
    r.set(Math.random());
    g.set(Math.random());
    b.set(Math.random());

    r2.set(Math.random());
    g2.set(Math.random());
    b2.set(Math.random());

    r3.set(Math.random());
    g3.set(Math.random());
    b3.set(Math.random());

    op.refreshParams();
};

function updateCol()
{
    const colA = [r.get(), g.get(), b.get()];
    if (!runiform) runiform = new CGL.Uniform(shader, "3f", "colA", colA);
    else runiform.setValue(colA);
}

function updateCol2()
{
    const colB = [r2.get(), g2.get(), b2.get()];
    if (!r2uniform) r2uniform = new CGL.Uniform(shader, "3f", "colB", colB);
    else r2uniform.setValue(colB);
}

function updateCol3()
{
    const colC = [r3.get(), g3.get(), b3.get()];
    if (!r3uniform) r3uniform = new CGL.Uniform(shader, "3f", "colC", colC);
    else r3uniform.setValue(colC);
}

render.onTriggered = function ()
{
    if (!CGL.TextureEffect.checkOpInEffect(op)) return;

    cgl.pushShader(shader);
    cgl.currentTextureEffect.bind();
    cgl.setTexture(0, cgl.currentTextureEffect.getCurrentSourceTexture().tex);
    cgl.currentTextureEffect.finish();
    cgl.popShader();

    next.trigger();
};


};

Ops.Gl.ImageCompose.Gradient_v2.prototype = new CABLES.Op();
CABLES.OPS["c8a9408a-75e5-481f-99a7-6aa7ca88bebc"]={f:Ops.Gl.ImageCompose.Gradient_v2,objName:"Ops.Gl.ImageCompose.Gradient_v2"};




// **************************************************************
// 
// Ops.Gl.ImageCompose.ImageCompose_v4
// 
// **************************************************************

Ops.Gl.ImageCompose.ImageCompose_v4 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"imgcomp_frag":"IN vec2 texCoord;\nUNI vec4 bgColor;\nUNI sampler2D tex;\n#ifdef USE_UVTEX\nUNI sampler2D UVTex;\n#endif\n\nvoid main()\n{\n\n    #ifndef USE_TEX\n        outColor=bgColor;\n    #endif\n    #ifdef USE_TEX\n        #ifndef USE_UVTEX\n        outColor=texture(tex,texCoord);\n        #else\n        outColor=texture(tex,texture(UVTex,texCoord).xy);\n        #endif\n    #endif\n\n\n\n}\n",};
const
    cgl = op.patch.cgl,
    render = op.inTrigger("Render"),
    inTex = op.inTexture("Base Texture"),
    inUVTex = op.inTexture("UV Texture"),
    inSize = op.inSwitch("Size", ["Auto", "Canvas", "Manual"], "Auto"),
    width = op.inValueInt("Width", 640),
    height = op.inValueInt("Height", 480),
    inFilter = op.inSwitch("Filter", ["nearest", "linear", "mipmap"], "linear"),
    inWrap = op.inValueSelect("Wrap", ["clamp to edge", "repeat", "mirrored repeat"], "repeat"),
    aniso = op.inSwitch("Anisotropic", ["0", "1", "2", "4", "8", "16"], "0"),

    inPixelFormat = op.inDropDown("Pixel Format", CGL.Texture.PIXELFORMATS, CGL.Texture.PFORMATSTR_RGBA8UB),

    r = op.inValueSlider("R", 0),
    g = op.inValueSlider("G", 0),
    b = op.inValueSlider("B", 0),
    a = op.inValueSlider("A", 0),

    trigger = op.outTrigger("Next"),
    texOut = op.outTexture("texture_out", CGL.Texture.getEmptyTexture(cgl)),
    outRatio = op.outNumber("Aspect Ratio"),
    outWidth = op.outNumber("Texture Width"),
    outHeight = op.outNumber("Texture Height");

op.setPortGroup("Texture Size", [inSize, width, height]);
op.setPortGroup("Texture Parameters", [inWrap, aniso, inFilter, inPixelFormat]);

r.setUiAttribs({ "colorPick": true });
op.setPortGroup("Color", [r, g, b, a]);

op.toWorkPortsNeedToBeLinked(render);

const prevViewPort = [0, 0, 0, 0];
let effect = null;
let tex = null;
let reInitEffect = true;
let isFloatTex = false;
let copyShader = null;
let copyShaderTexUni = null;
let copyShaderUVTexUni = null;
let copyShaderRGBAUni = null;

inWrap.onChange =
inFilter.onChange =
aniso.onChange =
inPixelFormat.onChange = reInitLater;

inTex.onLinkChanged =
inSize.onChange =
inUVTex.onChange = updateUi;

render.onTriggered =
    op.preRender = doRender;

updateUi();

function initEffect()
{
    if (effect)effect.delete();
    if (tex)tex.delete();
    tex = null;
    effect = new CGL.TextureEffect(cgl, { "isFloatingPointTexture": CGL.Texture.isPixelFormatFloat(inPixelFormat.get()), "name": op.name });

    const cgl_aniso = Math.min(cgl.maxAnisotropic, parseFloat(aniso.get()));

    tex = new CGL.Texture(cgl,
        {
            "anisotropic": cgl_aniso,
            "name": "image_compose_v2_" + op.id,
            "pixelFormat": inPixelFormat.get(),
            "filter": getFilter(),
            "wrap": getWrap(),
            "width": getWidth(),
            "height": getHeight()
        });

    effect.setSourceTexture(tex);

    outWidth.set(getWidth());
    outHeight.set(getHeight());
    outRatio.set(getWidth() / getHeight());

    texOut.set(CGL.Texture.getEmptyTexture(cgl));

    reInitEffect = false;
    updateUi();
}

function getFilter()
{
    if (inFilter.get() == "nearest") return CGL.Texture.FILTER_NEAREST;
    else if (inFilter.get() == "linear") return CGL.Texture.FILTER_LINEAR;
    else if (inFilter.get() == "mipmap") return CGL.Texture.FILTER_MIPMAP;
}

function getWrap()
{
    if (inWrap.get() == "repeat") return CGL.Texture.WRAP_REPEAT;
    else if (inWrap.get() == "mirrored repeat") return CGL.Texture.WRAP_MIRRORED_REPEAT;
    else if (inWrap.get() == "clamp to edge") return CGL.Texture.WRAP_CLAMP_TO_EDGE;
}

function getWidth()
{
    let x = 0;
    if (inTex.get() && inSize.get() == "Auto") x = inTex.get().width;
    else if (inSize.get() == "Auto" || inSize.get() == "Canvas") x = cgl.canvasWidth;
    else if (inSize.get() == "ViewPort") x = cgl.getViewPort()[2];
    else x = Math.ceil(width.get());
    return op.patch.cgl.checkTextureSize(x);
}

function getHeight()
{
    let x = 0;

    if (inTex.get() && inSize.get() == "Auto") x = inTex.get().height;
    else if (inSize.get() == "Auto" || inSize.get() == "Canvas") x = cgl.canvasHeight;
    else if (inSize.get() == "ViewPort") x = cgl.getViewPort()[3];
    else x = Math.ceil(height.get());
    return op.patch.cgl.checkTextureSize(x);
}

function reInitLater()
{
    reInitEffect = true;
}

function updateResolution()
{
    if ((
        getWidth() != tex.width ||
        getHeight() != tex.height ||
        // tex.anisotropic != parseFloat(aniso.get()) ||
        // tex.isFloatingPoint() != CGL.Texture.isPixelFormatFloat(inPixelFormat.get()) ||
        tex.pixelFormat != inPixelFormat.get() ||
        tex.filter != getFilter() ||
        tex.wrap != getWrap()
    ) && (getWidth() !== 0 && getHeight() !== 0))
    {
        initEffect();
        effect.setSourceTexture(tex);
        texOut.set(CGL.Texture.getEmptyTexture(cgl));
        texOut.set(tex);
        updateResolutionInfo();
        checkTypes();
    }
}

function updateResolutionInfo()
{
    let info = null;

    if (inSize.get() == "Manual")
    {
        info = null;
    }
    else if (inSize.get() == "Auto")
    {
        if (inTex.get()) info = "Input Texture";
        else info = "Canvas Size";

        info += ": " + getWidth() + " x " + getHeight();
    }

    let changed = false;
    changed = inSize.uiAttribs.info != info;
    inSize.setUiAttribs({ "info": info });
    if (changed)op.refreshParams();
}

function updateDefines()
{
    if (copyShader)copyShader.toggleDefine("USE_TEX", inTex.isLinked());
    if (copyShader)copyShader.toggleDefine("USE_UVTEX", inUVTex.isLinked());
}

function updateUi()
{
    aniso.setUiAttribs({ "greyout": getFilter() != CGL.Texture.FILTER_MIPMAP });

    r.setUiAttribs({ "greyout": inTex.isLinked() });
    b.setUiAttribs({ "greyout": inTex.isLinked() });
    g.setUiAttribs({ "greyout": inTex.isLinked() });
    a.setUiAttribs({ "greyout": inTex.isLinked() });

    width.setUiAttribs({ "greyout": inSize.get() != "Manual" });
    height.setUiAttribs({ "greyout": inSize.get() != "Manual" });

    // width.setUiAttribs({ "hideParam": inSize.get() != "Manual" });
    // height.setUiAttribs({ "hideParam": inSize.get() != "Manual" });

    if (tex)
        if (CGL.Texture.isPixelFormatFloat(inPixelFormat.get()) && getFilter() == CGL.Texture.FILTER_MIPMAP) op.setUiError("fpmipmap", "Don't use mipmap and 32bit at the same time, many systems do not support this.");
        else op.setUiError("fpmipmap", null);

    updateResolutionInfo();
    updateDefines();
    checkTypes();
}

function checkTypes()
{
    if (tex)
        if (inTex.isLinked() && inTex.get() && (tex.isFloatingPoint() != inTex.get().isFloatingPoint()))
            op.setUiError("textypediff", "Warning: Mixing floating point and non floating point texture can result in data/precision loss", 1);
        else
            op.setUiError("textypediff", null);
}

op.preRender = () =>
{
    doRender();
};

function copyTexture()
{
    if (!copyShader)
    {
        copyShader = new CGL.Shader(cgl, "copytextureshader");
        copyShader.setSource(copyShader.getDefaultVertexShader(), attachments.imgcomp_frag);
        copyShaderTexUni = new CGL.Uniform(copyShader, "t", "tex", 0);
        copyShaderUVTexUni = new CGL.Uniform(copyShader, "t", "UVTex", 1);
        copyShaderRGBAUni = new CGL.Uniform(copyShader, "4f", "bgColor", r, g, b, a);
        updateDefines();
    }

    cgl.pushShader(copyShader);
    cgl.currentTextureEffect.bind();

    if (inTex.get()) cgl.setTexture(0, inTex.get().tex);
    if (inUVTex.get()) cgl.setTexture(1, inUVTex.get().tex);

    cgl.currentTextureEffect.finish();
    cgl.popShader();
}

function doRender()
{
    if (!effect || reInitEffect) initEffect();

    cgl.pushBlend(false);

    updateResolution();

    const oldEffect = cgl.currentTextureEffect;
    cgl.currentTextureEffect = effect;
    cgl.currentTextureEffect.imgCompVer = 3;
    cgl.currentTextureEffect.width = width.get();
    cgl.currentTextureEffect.height = height.get();
    effect.setSourceTexture(tex);

    effect.startEffect(inTex.get() || CGL.Texture.getEmptyTexture(cgl, isFloatTex), true);
    copyTexture();

    trigger.trigger();

    cgl.pushViewPort(0, 0, width.get(), height.get());

    effect.endEffect();
    texOut.setRef(effect.getCurrentSourceTexture());

    cgl.popViewPort();

    cgl.popBlend();
    cgl.currentTextureEffect = oldEffect;
}


};

Ops.Gl.ImageCompose.ImageCompose_v4.prototype = new CABLES.Op();
CABLES.OPS["17212e2b-d692-464c-8f8d-2d511dd3410a"]={f:Ops.Gl.ImageCompose.ImageCompose_v4,objName:"Ops.Gl.ImageCompose.ImageCompose_v4"};




// **************************************************************
// 
// Ops.Anim.Bang
// 
// **************************************************************

Ops.Anim.Bang = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inUpdate = op.inTrigger("update"),
    inBang = op.inTriggerButton("Bang"),
    inDuration = op.inValue("Duration", 0.1),
    invert = op.inBool("Invert", false),
    outTrigger = op.outTrigger("Trigger Out"),
    outValue = op.outNumber("Value");

const anim = new CABLES.Anim();
let startTime = CABLES.now();
op.toWorkPortsNeedToBeLinked(inUpdate);

let needsReset = false;

inBang.onTriggered = function ()
{
    needsReset = true;
};

inUpdate.onTriggered = function ()
{
    if (needsReset)
    {
        startTime = CABLES.now();
        anim.clear();
        anim.setValue(0, 1);
        anim.setValue(inDuration.get(), 0);
        needsReset = false;
    }

    const elapsed = (CABLES.now() - startTime) / 1000;
    if (elapsed <= inDuration.get())
    {
        const v = anim.getValue(elapsed);
        if (invert.get()) outValue.set(1.0 - v);
        else outValue.set(v);
    }
    else
    {
        if (invert.get())
        {
            outValue.set(1.0);
        }
        else
        {
            outValue.set(0);
        }
    }

    outTrigger.trigger();
};


};

Ops.Anim.Bang.prototype = new CABLES.Op();
CABLES.OPS["92ca45a7-5b4b-4238-956e-23d79bdc659f"]={f:Ops.Anim.Bang,objName:"Ops.Anim.Bang"};




// **************************************************************
// 
// Ops.Array.ArrayGetString
// 
// **************************************************************

Ops.Array.ArrayGetString = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    array = op.inArray("array"),
    index = op.inValueInt("index"),
    result = op.outString("result");

array.ignoreValueSerialize = true;

index.onChange = update;

array.onChange = function ()
{
    update();
};

function update()
{
    const arr = array.get();
    if (arr) result.set(arr[index.get()]);
}


};

Ops.Array.ArrayGetString.prototype = new CABLES.Op();
CABLES.OPS["be8f16c0-0c8a-48a2-a92b-45dbf88c76c1"]={f:Ops.Array.ArrayGetString,objName:"Ops.Array.ArrayGetString"};




// **************************************************************
// 
// Ops.Array.StringToArray_v2
// 
// **************************************************************

Ops.Array.StringToArray_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const text = op.inStringEditor("text", "1,2,3"),
    separator = op.inString("separator", ","),
    toNumber = op.inValueBool("Numbers", true),
    trim = op.inValueBool("Trim", true),
    splitNewLines = op.inBool("Split Lines", false),
    arr = op.outArray("array"),
    parsed = op.outTrigger("Parsed"),
    len = op.outNumber("length");

text.setUiAttribs({ "ignoreBigPort": true });

text.onChange = separator.onChange = toNumber.onChange = trim.onChange = parse;

splitNewLines.onChange = () =>
{
    separator.setUiAttribs({ "greyout": splitNewLines.get() });
    parse();
};

parse();

function parse()
{
    if (!text.get())
    {
        arr.set(null);
        arr.set([]);
        len.set(0);
        return;
    }

    let textInput = text.get();
    if (trim.get() && textInput)
    {
        textInput = textInput.replace(/^\s+|\s+$/g, "");
        textInput = textInput.trim();
    }

    let r;
    let sep = separator.get();
    if (separator.get() === "\\n") sep = "\n";
    if (splitNewLines.get()) r = textInput.split("\n");
    else r = textInput.split(sep);

    if (r[r.length - 1] === "") r.length -= 1;

    len.set(r.length);

    if (trim.get())
    {
        for (let i = 0; i < r.length; i++)
        {
            r[i] = r[i].replace(/^\s+|\s+$/g, "");
            r[i] = r[i].trim();
        }
    }

    op.setUiError("notnum", null);
    if (toNumber.get())
    {
        let hasStrings = false;
        for (let i = 0; i < r.length; i++)
        {
            r[i] = Number(r[i]);
            if (!CABLES.UTILS.isNumeric(r[i]))
            {
                hasStrings = true;
            }
        }
        if (hasStrings)
        {
            op.setUiError("notnum", "Parse Error / Not all values numerical!", 1);
        }
    }

    arr.setRef(r);
    parsed.trigger();
}


};

Ops.Array.StringToArray_v2.prototype = new CABLES.Op();
CABLES.OPS["c974de41-4ce4-4432-b94d-724741109c71"]={f:Ops.Array.StringToArray_v2,objName:"Ops.Array.StringToArray_v2"};




// **************************************************************
// 
// Ops.Array.RandomNumbersArray_v4
// 
// **************************************************************

Ops.Array.RandomNumbersArray_v4 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    numValues = op.inValueInt("Num Values", 100),
    inModeSwitch = op.inSwitch("Mode", ["A", "AB", "ABC", "ABCD"], "A"),
    inSeed = op.inValueFloat("Random Seed ", 0),
    inInteger = op.inBool("Integer", false),
    inClosed = op.inValueBool("Last == First"),
    outValues = op.outArray("Array Out"),
    outTotalPoints = op.outNumber("Chunks Amount"),
    outArrayLength = op.outNumber("Array length");

const letters = ["A", "B", "C", "D"];
const arr = [];

const inArray = letters.map(function (value)
{
    return {
        "min": op.inValueFloat("Min " + value, -1),
        "max": op.inValueFloat("Max " + value, 1),
    };
});

for (let i = 0; i < inArray.length; i += 1)
{
    const portObj = inArray[i];
    const keys = Object.keys(portObj);

    op.setPortGroup("Value Range " + letters[i], keys.map(function (key) { return portObj[key]; }));

    if (i > 0) keys.forEach(function (key) { portObj[key].setUiAttribs({ "greyout": true }); });
}

inModeSwitch.onChange = function ()
{
    const mode = inModeSwitch.get();
    const modes = inModeSwitch.uiAttribs.values;

    outValues.setUiAttribs({ "stride": inModeSwitch.get().length });

    const index = modes.indexOf(mode);

    inArray.forEach(function (portObj, i)
    {
        const keys = Object.keys(portObj);
        keys.forEach(function (key, j)
        {
            if (i <= index) portObj[key].setUiAttribs({ "greyout": false });
            else portObj[key].setUiAttribs({ "greyout": true });
        });
    });
    init();
};

outValues.ignoreValueSerialize = true;

inClosed.onChange =
    numValues.onChange =
    inSeed.onChange =
    inInteger.onChange = init;

const minMaxArray = [];

init();

function init()
{
    const mode = inModeSwitch.get();
    const modes = inModeSwitch.uiAttribs.values;
    const index = modes.indexOf(mode);

    const n = Math.floor(Math.abs(numValues.get()));
    Math.randomSeed = inSeed.get();

    op.setUiAttrib({ "extendTitle": n + "*" + mode.length });

    const dimension = index + 1;
    const length = n * dimension;

    arr.length = length;
    const tupleLength = length / dimension;
    const isInteger = inInteger.get();

    // optimization: we only need to fetch the max min for each component once
    for (let i = 0; i < dimension; i += 1)
    {
        const portObj = inArray[i];
        const max = portObj.max.get();
        const min = portObj.min.get();
        minMaxArray[i] = [min, max];
    }

    for (let j = 0; j < tupleLength; j += 1)
    {
        for (let k = 0; k < dimension; k += 1)
        {
            const min = minMaxArray[k][0];
            const max = minMaxArray[k][1];
            const index = j * dimension + k;

            if (isInteger) arr[index] = Math.floor(Math.seededRandom() * ((max + 1) - min) + min);
            else arr[index] = Math.seededRandom() * (max - min) + min;
        }
    }

    if (inClosed.get() && arr.length > dimension)
    {
        for (let i = 0; i < dimension; i++)
            arr[arr.length - 3 + i] = arr[i];
    }

    outValues.setRef(arr);
    outTotalPoints.set(arr.length / dimension);
    outArrayLength.set(arr.length);
}

// assign change handler
inArray.forEach(function (obj)
{
    Object.keys(obj).forEach(function (key)
    {
        const x = obj[key];
        x.onChange = init;
    });
});


};

Ops.Array.RandomNumbersArray_v4.prototype = new CABLES.Op();
CABLES.OPS["8a9fa2c6-c229-49a9-9dc8-247001539217"]={f:Ops.Array.RandomNumbersArray_v4,objName:"Ops.Array.RandomNumbersArray_v4"};




// **************************************************************
// 
// Ops.Math.Compare.GreaterThan
// 
// **************************************************************

Ops.Math.Compare.GreaterThan = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    number1 = op.inValueFloat("number1"),
    number2 = op.inValueFloat("number2"),
    result = op.outBoolNum("result");

op.setUiAttribs({ "mathTitle": true });

number1.onChange = number2.onChange = exec;

function exec()
{
    result.set(number1.get() > number2.get());
}


};

Ops.Math.Compare.GreaterThan.prototype = new CABLES.Op();
CABLES.OPS["b250d606-f7f8-44d3-b099-c29efff2608a"]={f:Ops.Math.Compare.GreaterThan,objName:"Ops.Math.Compare.GreaterThan"};




// **************************************************************
// 
// Ops.Patch.P4Zknbo.InteractiveRectangle_v2
// 
// **************************************************************

Ops.Patch.P4Zknbo.InteractiveRectangle_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("Trigger in"),
    trigger = op.outTrigger("Trigger out"),
    width = op.inValue("Width", 1),
    height = op.inValue("Height", 1),
    inId = op.inString("ID"),
    classPort = op.inString("Class"),
    pivotX = op.inValueSelect("Pivot x", ["center", "left", "right"]),
    pivotY = op.inValueSelect("Pivot y", ["center", "top", "bottom"]),
    axis = op.inValueSelect("Axis", ["xy", "xz"]),
    isInteractive = op.inValueBool("Is Interactive", true),
    renderRect = op.inValueBool("Render Rectangle", true),
    divVisible = op.inValueBool("Show Boundings", true),
    cursorPort = op.inValueSelect("Cursor", ["auto", "crosshair", "pointer", "Hand", "move", "n-resize", "ne-resize", "e-resize", "se-resize", "s-resize", "sw-resize", "w-resize", "nw-resize", "text", "wait", "help", "none"], "pointer"),
    active = op.inValueBool("Render", true);

const geomOut = op.outObject("geometry");
geomOut.ignoreValueSerialize = true;

const
    mouseOver = op.outBoolNum("Pointer Hover", false),
    mouseDown = op.outBoolNum("Pointer Down", false),
    outX = op.outNumber("Pointer X"),
    outY = op.outNumber("Pointer Y"),
    outTop = op.outNumber("Top"),
    outLeft = op.outNumber("Left"),
    outRight = op.outNumber("Right"),
    outBottom = op.outNumber("Bottom"),
    mouseClick = op.outTrigger("Left Click");

const elementPort = op.outObject("Dom Element");

active.setUiAttribs({ "title": "Active" });

const cgl = op.patch.cgl;
axis.set("xy");
pivotX.set("center");
pivotY.set("center");

const geom = new CGL.Geometry(op.name);
let mesh = null;
let div = null;
const m = mat4.create();
const trans = mat4.create();
const pos = vec3.create();
const divAlign = vec3.create();
const divAlignSize = vec3.create();

axis.onChange = rebuild;
pivotX.onChange = rebuild;
pivotY.onChange = rebuild;
width.onChange = rebuild;
height.onChange = rebuild;
cursorPort.onChange = updateCursor;
rebuild();

const modelMatrix = mat4.create();
const identViewMatrix = mat4.create();
const zeroVec3 = vec3.create();

render.onTriggered = function ()
{
    if (!div)
    {
        setUpDiv();
        addListeners();
        updateDivVisibility();
        updateIsInteractive();
    }
    updateDivSize();

    if (active.get() && renderRect.get() && mesh) mesh.render(cgl.getShader());

    trigger.trigger();
};

function rebuild()
{
    let w = width.get();
    let h = height.get();
    let x = 0;
    let y = 0;

    if (typeof w == "string")w = parseFloat(w);
    if (typeof h == "string")h = parseFloat(h);

    if (pivotX.get() == "center")
    {
        x = 0;
        divAlign[0] = -w / 2;
    }
    if (pivotX.get() == "right")
    {
        x = -w / 2;
    }
    if (pivotX.get() == "left")
    {
        x = w / 2;
    }

    if (pivotY.get() == "center")
    {
        y = 0;
        divAlign[1] = -h / 2;
    }
    if (pivotY.get() == "top") y = -h / 2;
    if (pivotY.get() == "bottom") y = +h / 2;

    const verts = [];
    const tc = [];
    const norms = [];
    const indices = [];

    const numRows = 1;
    const numColumns = 1;

    const stepColumn = w / numColumns;
    const stepRow = h / numRows;

    let c, r;

    for (r = 0; r <= numRows; r++)
    {
        for (c = 0; c <= numColumns; c++)
        {
            verts.push(c * stepColumn - width.get() / 2 + x);
            if (axis.get() == "xz") verts.push(0.0);
            verts.push(r * stepRow - height.get() / 2 + y);
            if (axis.get() == "xy") verts.push(0.0);

            tc.push(c / numColumns);
            tc.push(1.0 - r / numRows);

            if (axis.get() == "xz")
            {
                norms.push(0);
                norms.push(1);
                norms.push(0);
            }

            if (axis.get() == "xy")
            {
                norms.push(0);
                norms.push(0);
                norms.push(-1);
            }
        }
    }

    for (c = 0; c < numColumns; c++)
    {
        for (r = 0; r < numRows; r++)
        {
            const ind = c + (numColumns + 1) * r;
            const v1 = ind;
            const v2 = ind + 1;
            const v3 = ind + numColumns + 1;
            const v4 = ind + 1 + numColumns + 1;

            indices.push(v1);
            indices.push(v3);
            indices.push(v2);

            indices.push(v2);
            indices.push(v3);
            indices.push(v4);
        }
    }

    geom.clear();
    geom.vertices = verts;
    geom.texCoords = tc;
    geom.verticesIndices = indices;
    geom.vertexNormals = norms;

    if (!mesh) mesh = new CGL.Mesh(cgl, geom);
    else mesh.setGeom(geom);

    geomOut.set(null);
    geomOut.set(geom);
}

let divX = 0;
let divY = 0;
let divWidth = 0;
let divHeight = 0;

const mMatrix = mat4.create();
divVisible.onChange = updateDivVisibility;
inId.onChange = updateId;
classPort.onChange = updateClassNames;

function updateDivVisibility()
{
    if (div)
    {
        if (divVisible.get()) div.style.border = "1px solid red";
        else div.style.border = "none";
    }
}

function updateCursor()
{
    if (div)
    {
        div.style.cursor = cursorPort.get();
    }
}

function updateId()
{
    if (div)
    {
        div.setAttribute("id", inId.get());
    }
}

function updateDivSize()
{
    // var vp=cgl.getViewPort();

    mat4.multiply(mMatrix, cgl.vMatrix, cgl.mMatrix);
    vec3.transformMat4(pos, divAlign, mMatrix);
    vec3.transformMat4(trans, pos, cgl.pMatrix);

    const top = cgl.canvas.styleMarginTop || 0;
    const left = cgl.canvas.styleMarginLeft || 0;

    const x1 = (trans[0] * cgl.canvasWidth / 2) + cgl.canvasWidth / 2 + left;
    const y1 = (trans[1] * cgl.canvasHeight / 2) + cgl.canvasHeight / 2 + top;

    divAlignSize[0] = divAlign[0] + width.get();
    divAlignSize[1] = divAlign[1];

    vec3.transformMat4(pos, divAlignSize, mMatrix);
    vec3.transformMat4(trans, pos, cgl.pMatrix);

    const x2 = ((trans[0] * cgl.canvasWidth / 2) + cgl.canvasWidth / 2) + left;
    const y2 = ((trans[1] * cgl.canvasHeight / 2) + cgl.canvasHeight / 2 + top);

    divAlignSize[0] = divAlign[0];
    divAlignSize[1] = divAlign[1] + height.get();

    vec3.transformMat4(pos, divAlignSize, mMatrix);
    vec3.transformMat4(trans, pos, cgl.pMatrix);

    const x3 = ((trans[0] * cgl.canvasWidth / 2) + cgl.canvasWidth / 2) + left;
    const y3 = ((trans[1] * cgl.canvasHeight / 2) + cgl.canvasHeight / 2 + top);

    divAlignSize[0] = divAlign[0] + width.get();
    divAlignSize[1] = divAlign[1] + height.get();

    vec3.transformMat4(pos, divAlignSize, mMatrix);
    vec3.transformMat4(trans, pos, cgl.pMatrix);

    const x4 = ((trans[0] * cgl.canvasWidth / 2) + cgl.canvasWidth / 2) + left;
    const y4 = ((trans[1] * cgl.canvasHeight / 2) + cgl.canvasHeight / 2 + top);

    divX = Math.min(x1, x2, x3, x4);
    divY = Math.min(cgl.canvasHeight - y1, cgl.canvasHeight - y2, cgl.canvasHeight - y3, cgl.canvasHeight - y4);

    const xb = Math.max(x1, x2, x3, x4);
    const yb = Math.max(cgl.canvasHeight - y1, cgl.canvasHeight - y2, cgl.canvasHeight - y3, cgl.canvasHeight - y4);

    outTop.set(divY);
    outLeft.set(divX);
    outRight.set(xb);
    outBottom.set(yb);

    divWidth = Math.abs(xb - divX);
    divHeight = Math.abs(yb - divY);

    divX /= op.patch.cgl.pixelDensity;
    divY /= op.patch.cgl.pixelDensity;
    divWidth /= op.patch.cgl.pixelDensity;
    divHeight /= op.patch.cgl.pixelDensity;

    // div.style.left=divX+'px';
    // div.style.top=divY+'px';
    // div.style.width=divWidth+'px';
    // div.style.height=divHeight+'px';

    const divXpx = divX + "px";
    const divYpx = divY + "px";
    const divWidthPx = divWidth + "px";
    const divHeightPx = divHeight + "px";
    if (divXpx != div.style.left) div.style.left = divXpx;
    if (divYpx != div.style.top) div.style.top = divYpx;
    if (div.style.width != divWidthPx) div.style.width = divWidthPx;
    if (div.style.height != divHeightPx) div.style.height = divHeightPx;
}

function updateClassNames()
{
    if (div)
    {
        div.className = classPort.get();
    }
}

op.onDelete = function ()
{
    if (div)div.remove();
};

function setUpDiv()
{
    if (!div)
    {
        div = document.createElement("div");
        div.dataset.op = op.id;
        div.oncontextmenu = function (e)
        {
            e.preventDefault();
        };

        div.style.padding = "0px";
        div.style.position = "absolute";
        div.style["box-sizing"] = "border-box";
        div.style.border = "1px solid red";
        // div.style['border-left']="1px solid blue";
        // div.style['border-top']="1px solid green";
        div.style["z-index"] = "500";

        div.style["-webkit-user-select"] = "none";
        div.style["user-select"] = "none";
        div.style["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)";
        div.style["-webkit-touch-callout"] = "none";

        const canvas = op.patch.cgl.canvas.parentElement;
        canvas.appendChild(div);
        updateCursor();
        updateIsInteractive();
        updateId();
        updateClassNames();
    }
    updateDivSize();
    elementPort.set(div);
}

let listenerElement = null;

function onMouseMove(e)
{
    const offsetX = -width.get() / 2;
    const offsetY = -height.get() / 2;

    outX.set(Math.max(0.0, Math.min(1.0, e.offsetX / divWidth)));
    outY.set(Math.max(0.0, Math.min(1.0, 1.0 - e.offsetY / divHeight)));
}

function onMouseLeave(e)
{
    mouseDown.set(false);
    mouseOver.set(false);
}

function onMouseEnter(e)
{
    mouseOver.set(true);
}

function onMouseDown(e)
{
    mouseDown.set(true);
}

function onMouseUp(e)
{
    mouseDown.set(false);
}

function onmouseclick(e)
{
    mouseClick.trigger();
}

function onTouchMove(e)
{
    const targetEle = document.elementFromPoint(e.targetTouches[0].pageX, e.targetTouches[0].pageY);

    if (targetEle == div)
    {
        mouseOver.set(true);
        if (e.touches && e.touches.length > 0)
        {
            const rect = div.getBoundingClientRect(); // e.target
            const x = e.targetTouches[0].pageX - rect.left;
            const y = e.targetTouches[0].pageY - rect.top;

            const touch = e.touches[0];

            outX.set(Math.max(0.0, Math.min(1.0, x / divWidth)));
            outY.set(Math.max(0.0, Math.min(1.0, 1.0 - y / divHeight)));

            onMouseMove(touch);
        }
    }
    else
    {
        mouseOver.set(false);
    }
}

active.onChange = updateActiveRender;
function updateActiveRender()
{
    if (active.get())
    {
        addListeners();
        if (div) div.style.display = "block";
    }
    else
    {
        removeListeners();
        if (div) div.style.display = "none";
    }
}

isInteractive.onChange = updateIsInteractive;
function updateIsInteractive()
{
    if (isInteractive.get())
    {
        addListeners();
        if (div)div.style["pointer-events"] = "initial";
    }
    else
    {
        removeListeners();
        mouseDown.set(false);
        mouseOver.set(false);
        if (div)div.style["pointer-events"] = "none";
    }
}

function removeListeners()
{
    if (listenerElement)
    {
        document.removeEventListener("touchmove", onTouchMove);
        listenerElement.removeEventListener("touchend", onMouseUp);
        listenerElement.removeEventListener("touchstart", onMouseDown);

        listenerElement.removeEventListener("click", onmouseclick);
        listenerElement.removeEventListener("mousemove", onMouseMove);
        listenerElement.removeEventListener("mouseleave", onMouseLeave);
        listenerElement.removeEventListener("mousedown", onMouseDown);
        listenerElement.removeEventListener("mouseup", onMouseUp);
        listenerElement.removeEventListener("mouseenter", onMouseEnter);
        // listenerElement.removeEventListener('contextmenu', onClickRight);
        listenerElement = null;
    }
}

function addListeners()
{
    if (listenerElement)removeListeners();

    listenerElement = div;

    if (listenerElement)
    {
        document.addEventListener("touchmove", onTouchMove);
        listenerElement.addEventListener("touchend", onMouseUp);
        listenerElement.addEventListener("touchstart", onMouseDown);

        listenerElement.addEventListener("click", onmouseclick);
        listenerElement.addEventListener("mousemove", onMouseMove);
        listenerElement.addEventListener("mouseleave", onMouseLeave);
        listenerElement.addEventListener("mousedown", onMouseDown);
        listenerElement.addEventListener("mouseup", onMouseUp);
        listenerElement.addEventListener("mouseenter", onMouseEnter);
        // listenerElement.addEventListener('contextmenu', onClickRight);
    }
}


};

Ops.Patch.P4Zknbo.InteractiveRectangle_v2.prototype = new CABLES.Op();
CABLES.OPS["0e42dbb3-a8c2-4321-89ca-d545645dce5b"]={f:Ops.Patch.P4Zknbo.InteractiveRectangle_v2,objName:"Ops.Patch.P4Zknbo.InteractiveRectangle_v2"};




// **************************************************************
// 
// Ops.Math.Incrementor
// 
// **************************************************************

Ops.Math.Incrementor = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    increment = op.inTriggerButton("Increment"),
    decrement = op.inTriggerButton("Decrement"),
    inLimit = op.inBool("Limit", false),
    inLength = op.inValueInt("Length"),
    inMode = op.inSwitch("Mode", ["Rewind", "Stop at Max"], "Rewind"),
    inDefault = op.inValueInt("Default", 0),
    reset = op.inTriggerButton("Reset"),
    outChanged = op.outTrigger("Changed"),
    value = op.outNumber("Value"),
    outRestarted = op.outTrigger("Restarted");

const MODE_REWIND = 0;
const MODE_STOP = 1;
value.ignoreValueSerialize = true;
inLength.set(10);
let val = 0;
let mode = MODE_REWIND;
value.set(0);

inLength.onTriggered = reset;
inDefault.onChange = doReset;
reset.onTriggered = doReset;
inLimit.onChange = updateUi;

updateUi();

inMode.onChange = () =>
{
    if (inMode.get() == "Rewind")
    {
        mode = MODE_REWIND;
    }
    if (inMode.get() == "Stop at Max")
    {
        mode = MODE_STOP;
    }
};

function updateUi()
{
    inLength.setUiAttribs({ "greyout": !inLimit.get() });
    inMode.setUiAttribs({ "greyout": !inLimit.get() });
}

function doReset()
{
    value.set(null);
    val = inDefault.get();
    value.set(val);
    outRestarted.trigger();
}

decrement.onTriggered = function ()
{
    val--;
    if (inLimit.get())
    {
        if (mode == MODE_REWIND && val < 0)val = inLength.get() - 1;
        if (mode == MODE_STOP && val < 0)val = 0;
    }
    value.set(val);

    outChanged.trigger();
};

increment.onTriggered = function ()
{
    val++;
    if (inLimit.get())
    {
        if (mode == MODE_REWIND && val >= inLength.get())
        {
            val = 0;
            outRestarted.trigger();
        }
        if (mode == MODE_STOP && val >= inLength.get())val = inLength.get() - 1;
    }

    value.set(val);

    outChanged.trigger();
};


};

Ops.Math.Incrementor.prototype = new CABLES.Op();
CABLES.OPS["45cc0011-ada8-4423-8f5b-39a3810b8389"]={f:Ops.Math.Incrementor,objName:"Ops.Math.Incrementor"};




// **************************************************************
// 
// Ops.Math.MathExpression
// 
// **************************************************************

Ops.Math.MathExpression = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const inA = op.inFloat("A", 0);
const inB = op.inFloat("B", 1);
const inC = op.inFloat("C", 2);
const inD = op.inFloat("D", 3);
op.setPortGroup("Parameters", [inA, inB, inC, inD]);
const inExpression = op.inString("Expression", "a*(b+c+d)");
op.setPortGroup("Expression", [inExpression]);
const outResult = op.outNumber("Result");
const outExpressionIsValid = op.outBool("Expression Valid");

let currentFunction = inExpression.get();
let functionValid = false;

const createFunction = () =>
{
    try
    {
        currentFunction = new Function("m", "a", "b", "c", "d", `with(m) { return ${inExpression.get()} }`);
        functionValid = true;
        evaluateFunction();
        outExpressionIsValid.set(functionValid);
    }
    catch (e)
    {
        functionValid = false;
        outExpressionIsValid.set(functionValid);
        if (e instanceof ReferenceError || e instanceof SyntaxError) return;
    }
};

const evaluateFunction = () =>
{
    if (functionValid)
    {
        outResult.set(currentFunction(Math, inA.get(), inB.get(), inC.get(), inD.get()));
        if (!inExpression.get()) outResult.set(0);
    }

    outExpressionIsValid.set(functionValid);
};


inA.onChange = inB.onChange = inC.onChange = inD.onChange = evaluateFunction;
inExpression.onChange = createFunction;
createFunction();


};

Ops.Math.MathExpression.prototype = new CABLES.Op();
CABLES.OPS["d2343a1e-64ea-45b2-99ed-46e167bbdcd3"]={f:Ops.Math.MathExpression,objName:"Ops.Math.MathExpression"};




// **************************************************************
// 
// Ops.Math.Modulo
// 
// **************************************************************

Ops.Math.Modulo = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    number1 = op.inValueFloat("number1", 1),
    number2 = op.inValueFloat("number2", 2),
    pingpong = op.inValueBool("pingpong"),
    result = op.outNumber("result");

let calculateFunction = calculateModule;

number1.onChange =
number2.onChange = exec;

pingpong.onChange = updatePingPong;

exec();

function exec()
{
    let n2 = number2.get();
    let n1 = number1.get();

    result.set(calculateFunction(n1, n2));
}

function calculateModule(n1, n2)
{
    let re = ((n1 % n2) + n2) % n2;
    if (re != re) re = 0;
    return re;
}

function calculatePingPong(i, n)
{
    let cycle = 2 * n;
    i %= cycle;
    if (i >= n) return cycle - i;
    else return i;
}

function updatePingPong()
{
    if (pingpong.get()) calculateFunction = calculatePingPong;
    else calculateFunction = calculateModule;
}


};

Ops.Math.Modulo.prototype = new CABLES.Op();
CABLES.OPS["ebc13b25-3705-4265-8f06-5f985b6a7bb1"]={f:Ops.Math.Modulo,objName:"Ops.Math.Modulo"};




// **************************************************************
// 
// Ops.Boolean.IfFalseThen
// 
// **************************************************************

Ops.Boolean.IfFalseThen = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger("Exe"),
    boolean = op.inValueBool("Boolean", false),
    triggerThen = op.outTrigger("then"),
    triggerElse = op.outTrigger("else");

boolean.onChange = execBool;
exe.onTriggered = exec;

function execBool()
{
    if (exe.isLinked()) return;
    exec();
}

function exec()
{
    if (!boolean.get()) triggerThen.trigger();
    else triggerElse.trigger();
}


};

Ops.Boolean.IfFalseThen.prototype = new CABLES.Op();
CABLES.OPS["91cf65f1-94ac-423f-a536-af71eed08440"]={f:Ops.Boolean.IfFalseThen,objName:"Ops.Boolean.IfFalseThen"};




// **************************************************************
// 
// Ops.Boolean.MonoFlop
// 
// **************************************************************

Ops.Boolean.MonoFlop = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    trigger = op.inTriggerButton("Trigger"),
    duration = op.inValue("Duration", 1),
    valueTrue = op.inValue("Value True", 1),
    valueFalse = op.inValue("Value False", 0),
    resetButton = op.inTriggerButton("Reset"),
    outAct = op.outTrigger("Activated"),
    outEnded = op.outTrigger("Ended"),
    result = op.outBoolNum("Result", false);

let lastTimeout = -1;

resetButton.onTriggered = function ()
{
    result.set(valueFalse.get());

    clearTimeout(lastTimeout);
};

trigger.onTriggered = function ()
{
    if (result.get() == valueFalse.get())outAct.trigger();
    result.set(valueTrue.get());

    clearTimeout(lastTimeout);
    lastTimeout = setTimeout(function ()
    {
        result.set(valueFalse.get());
        outEnded.trigger();
    }, duration.get() * 1000);
};


};

Ops.Boolean.MonoFlop.prototype = new CABLES.Op();
CABLES.OPS["3a4b0a78-4172-41c7-8248-95cb0856ecc8"]={f:Ops.Boolean.MonoFlop,objName:"Ops.Boolean.MonoFlop"};




// **************************************************************
// 
// Ops.Gl.Meshes.Torus_v3
// 
// **************************************************************

Ops.Gl.Meshes.Torus_v3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    sides = op.inValue("sides", 32),
    rings = op.inValue("rings", 32),
    innerRadius = op.inValue("innerRadius", 0.25),
    outerRadius = op.inValue("outerRadius", 0.5),
    indraw = op.inBool("Draw", true),
    trigger = op.outTrigger("trigger"),
    geomOut = op.outObject("geometry");

indraw.setUiAttribs({ "title": "Render mesh" });

const UP = vec3.fromValues(0, 1, 0), RIGHT = vec3.fromValues(1, 0, 0);
let tmpNormal = vec3.create(), tmpVec = vec3.create();

geomOut.ignoreValueSerialize = true;

let cgl = op.patch.cg || op.patch.cgl;
let mesh = null;
let geom = null;
let j = 0, i = 0, idx = 0;
let needsUpdate = true;

rings.onChange =
sides.onChange =
innerRadius.onChange =
outerRadius.onChange = function ()
{
    needsUpdate = true;
};

render.onTriggered = function ()
{
    if (needsUpdate) updateMesh();
    if (indraw.get() && mesh !== null) mesh.render(cgl.getShader());

    trigger.trigger();
};

function updateMesh()
{
    let nrings = Math.round(rings.get()) + 1;
    let nsides = Math.round(sides.get()) + 1;
    if (nrings < 3)nrings = 3;
    if (nsides < 3)nsides = 3;
    let r = innerRadius.get();
    let r2 = outerRadius.get();
    generateTorus(r, r2, nrings, nsides);
    needsUpdate = false;
}

function circleTable(n, flip)
{
    let i;

    /* Table size, the sign of n flips the circle direction */
    let size = Math.abs(n);

    /* Determine the angle between samples */
    let angle = 2 * Math.PI / (n - 1);
    if (flip) angle = -angle;

    /* Allocate memory for n samples, plus duplicate of first entry at the end */
    let sint = [];
    let cost = [];

    sint[0] = 0;
    cost[0] = 1;

    /* Compute cos and sin around the circle */
    for (i = 1; i < size - 1; i++)
    {
        sint[i] = Math.sin(angle * i);
        cost[i] = Math.cos(angle * i);
    }

    sint[size - 1] = 0;
    cost[size - 1] = 1;

    return { "cost": cost, "sint": sint };
}

function generateTorus(iradius, oradius, nRings, nSides)
{
    let table1 = circleTable(nRings, false);
    let table2 = circleTable(nSides, true);
    let t;

    geom = new CGL.Geometry("torus");
    let tangents = [];
    let biTangents = [];
    let vertexNormals = [];
    let tc = [];

    for (j = 0; j < nRings; j++)
    {
        for (i = 0; i < nSides; i++)
        {
            let offset = 3 * (j * nSides + i);
            let offset2 = 2 * (j * nSides + i);

            geom.vertices[offset] = table1.cost[j] * (oradius + table2.cost[i] * iradius);
            geom.vertices[offset + 1] = table1.sint[j] * (oradius + table2.cost[i] * iradius);
            geom.vertices[offset + 2] = table2.sint[i] * iradius;

            vertexNormals[offset] = tmpNormal[0] = table1.cost[j] * table2.cost[i];
            vertexNormals[offset + 1] = tmpNormal[1] = table1.sint[j] * table2.cost[i];
            vertexNormals[offset + 2] = tmpNormal[2] = table2.sint[i];

            if (Math.abs(tmpNormal[1]) == 1) t = RIGHT;
            else t = UP;

            vec3.cross(tmpVec, tmpNormal, t);
            vec3.normalize(tmpVec, tmpVec);
            tangents[offset] = tmpVec[0];
            tangents[offset + 1] = tmpVec[1];
            tangents[offset + 2] = tmpVec[2];
            vec3.cross(tmpVec, tmpVec, tmpNormal);
            biTangents[offset] = tmpVec[0];
            biTangents[offset + 1] = tmpVec[1];
            biTangents[offset + 2] = tmpVec[2];

            tc[offset2] = j / (nRings - 1);
            tc[offset2 + 1] = i / (nSides - 1);
        }
    }

    for (j = 0, idx = 0; j < nRings - 1; j++)
    {
        for (i = 0; i < nSides - 1; i++)
        {
            let offset = j * nSides + i;
            geom.verticesIndices[idx++] = offset;
            geom.verticesIndices[idx++] = offset + 1;
            geom.verticesIndices[idx++] = offset + nSides;

            geom.verticesIndices[idx++] = offset + 1;
            geom.verticesIndices[idx++] = offset + nSides + 1;
            geom.verticesIndices[idx++] = offset + nSides;
        }
    }

    if (geom.biTangents.length == biTangents.length)geom.biTangents.set(biTangents);
    else geom.biTangents = new Float32Array(biTangents);

    if (geom.tangents.length == tangents.length)geom.tangents.set(tangents);
    else geom.tangents = new Float32Array(tangents);

    if (geom.vertexNormals.length == vertexNormals.length)geom.vertexNormals.set(vertexNormals);
    else geom.vertexNormals = new Float32Array(vertexNormals);

    geom.setTexCoords(tc);

    geomOut.setRef(geom);

    if (!mesh) mesh = op.patch.cg.createMesh(geom, { "opId": op.id });
    // if (!mesh)mesh = new CGL.Mesh(cgl, geom);
    else mesh.setGeom(geom);
}


};

Ops.Gl.Meshes.Torus_v3.prototype = new CABLES.Op();
CABLES.OPS["bfe60760-6cf6-43d0-96da-b4848c2b146a"]={f:Ops.Gl.Meshes.Torus_v3,objName:"Ops.Gl.Meshes.Torus_v3"};




// **************************************************************
// 
// Ops.Math.MapRange
// 
// **************************************************************

Ops.Math.MapRange = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    v = op.inValueFloat("value", 0),
    old_min = op.inValueFloat("old min", 0),
    old_max = op.inValueFloat("old max", 1),
    new_min = op.inValueFloat("new min", 0),
    new_max = op.inValueFloat("new max", 1),
    easing = op.inValueSelect("Easing", ["Linear", "Smoothstep", "Smootherstep"], "Linear"),
    inClamp = op.inBool("Clamp", true),
    result = op.outNumber("result", 0);

op.setPortGroup("Input Range", [old_min, old_max]);
op.setPortGroup("Output Range", [new_min, new_max]);

let doClamp = true;
let ease = 0;
let r = 0;

v.onChange =
    old_min.onChange =
    old_max.onChange =
    new_min.onChange =
    new_max.onChange = exec;

exec();

inClamp.onChange =
() =>
{
    doClamp = inClamp.get();
    exec();
};

easing.onChange = function ()
{
    if (easing.get() == "Smoothstep") ease = 1;
    else if (easing.get() == "Smootherstep") ease = 2;
    else ease = 0;
};

function exec()
{
    const nMin = new_min.get();
    const nMax = new_max.get();
    const oMin = old_min.get();
    const oMax = old_max.get();
    let x = v.get();

    if (doClamp)
    {
        if (x >= Math.max(oMax, oMin))
        {
            result.set(nMax);
            return;
        }
        else
        if (x <= Math.min(oMax, oMin))
        {
            result.set(nMin);
            return;
        }
    }

    let reverseInput = false;
    const oldMin = Math.min(oMin, oMax);
    const oldMax = Math.max(oMin, oMax);
    if (oldMin != oMin) reverseInput = true;

    let reverseOutput = false;
    const newMin = Math.min(nMin, nMax);
    const newMax = Math.max(nMin, nMax);
    if (newMin != nMin) reverseOutput = true;

    let portion = 0;

    if (reverseInput) portion = (oldMax - x) * (newMax - newMin) / (oldMax - oldMin);
    else portion = (x - oldMin) * (newMax - newMin) / (oldMax - oldMin);

    if (reverseOutput) r = newMax - portion;
    else r = portion + newMin;

    if (ease === 0)
    {
        result.set(r);
    }
    else
    if (ease == 1)
    {
        x = Math.max(0, Math.min(1, (r - nMin) / (nMax - nMin)));
        result.set(nMin + x * x * (3 - 2 * x) * (nMax - nMin)); // smoothstep
    }
    else
    if (ease == 2)
    {
        x = Math.max(0, Math.min(1, (r - nMin) / (nMax - nMin)));
        result.set(nMin + x * x * x * (x * (x * 6 - 15) + 10) * (nMax - nMin)); // smootherstep
    }
}


};

Ops.Math.MapRange.prototype = new CABLES.Op();
CABLES.OPS["2617b407-60a0-4ff6-b4a7-18136cfa7817"]={f:Ops.Math.MapRange,objName:"Ops.Math.MapRange"};




// **************************************************************
// 
// Ops.Anim.LFO_v3
// 
// **************************************************************

Ops.Anim.LFO_v3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    time = op.inValue("Time"),
    speed = op.inFloat("Frequency", 1),
    type = op.inValueSelect("Type", ["sine", "triangle", "ramp up", "ramp down", "square"], "sine"),
    phase = op.inValue("Phase", 0),
    rangeMin = op.inValue("Range Min", -1),
    rangeMax = op.inValue("Range Max", 1),
    result = op.outNumber("Result");

let v = 0;
type.onChange = updateType;

updateType();

const PI2 = Math.PI / 2;

function updateType()
{
    if (type.get() == "sine") time.onChange = sine;
    if (type.get() == "ramp up") time.onChange = rampUp;
    if (type.get() == "ramp down") time.onChange = rampDown;
    if (type.get() == "square") time.onChange = square;
    if (type.get() == "triangle") time.onChange = triangle;
}

function updateTime()
{
    return (time.get() * speed.get()) + phase.get();
}

function square()
{
    let t = updateTime() + 0.5;
    v = t % 2.0;
    if (v <= 1.0)v = -1;
    else v = 1;
    v = CABLES.map(v, -1, 1, rangeMin.get(), rangeMax.get());
    result.set(v);
}

function rampUp()
{
    let t = (updateTime() + 1);
    v = t % 1.0;
    v -= 0.5;
    v *= 2.0;
    v = CABLES.map(v, -1, 1, rangeMin.get(), rangeMax.get());
    result.set(v);
}

function rampDown()
{
    let t = updateTime();
    v = t % 1.0;
    v -= 0.5;
    v *= -2.0;
    v = CABLES.map(v, -1, 1, rangeMin.get(), rangeMax.get());
    result.set(v);
}

function triangle()
{
    let t = updateTime();
    v = t % 2.0;
    if (v > 1) v = 2.0 - v;
    v -= 0.5;
    v *= 2.0;
    v = CABLES.map(v, -1, 1, rangeMin.get(), rangeMax.get());
    result.set(v);
}

function sine()
{
    let t = updateTime() * Math.PI - (PI2);
    v = Math.sin((t));
    v = CABLES.map(v, -1, 1, rangeMin.get(), rangeMax.get());
    result.set(v);
}


};

Ops.Anim.LFO_v3.prototype = new CABLES.Op();
CABLES.OPS["5bdbe26b-dea3-4266-850c-1b66ed29936e"]={f:Ops.Anim.LFO_v3,objName:"Ops.Anim.LFO_v3"};




// **************************************************************
// 
// Ops.Gl.ShaderEffects.AreaRotate_v2
// 
// **************************************************************

Ops.Gl.ShaderEffects.AreaRotate_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"area_rotate_vert":"\n\nvec4 MOD_scaler(vec4 pos,mat4 modelMatrix)\n{\n    vec3 forcePos=vec3(MOD_x,MOD_y,MOD_z);\n    vec3 vecToOrigin=(modelMatrix*pos).xyz-forcePos;\n    float dist=abs(length(vecToOrigin));\n    float distAlpha = (MOD_size - dist) ;\n\n    if(MOD_smooth) distAlpha=smoothstep(0.0,MOD_size,distAlpha);\n\n    // pos.xyz*=(1.0+(distAlpha*MOD_strength));\n\n    mat3 rotation = mat3(\n        vec3( cos(MOD_strength*distAlpha),  sin(MOD_strength*distAlpha),  0.0),\n        vec3(-sin(MOD_strength*distAlpha),  cos(MOD_strength*distAlpha),  0.0),\n        vec3(        0.0,         0.0,  1.0)\n    );\n    pos =vec4(rotation * pos.xyz, 1.0);\n\n\n    return pos;\n}\n",};
const
    render = op.inTrigger("render"),
    inSize = op.inValue("Size", 1),
    inStrength = op.inValue("Strength", 1),
    inSmooth = op.inValueBool("Smooth", true),
    x = op.inValue("x"),
    y = op.inValue("y"),
    z = op.inValue("z"),
    next = op.outTrigger("trigger");

const cgl = op.patch.cgl;
const srcBodyVert = ""
    .endl() + "pos=MOD_scaler(pos,mMatrix);"
    .endl();

const mod = new CGL.ShaderModifier(cgl, op.name, { "opId": op.id });

mod.addModule({
    "priority": 2,
    "title": "vert" + op.name,
    "name": "MODULE_VERTEX_POSITION",
    "srcHeadVert": attachments.area_rotate_vert,
    "srcBodyVert": srcBodyVert
});

mod.addUniform("f", "MOD_x", x);
mod.addUniform("f", "MOD_y", y);
mod.addUniform("f", "MOD_z", z);

mod.addUniform("f", "MOD_size", inSize);
mod.addUniform("f", "MOD_strength", inStrength);
mod.addUniform("b", "MOD_smooth", inSmooth);


render.onTriggered = function ()
{
    if (!cgl.getShader())
    {
        next.trigger();
        return;
    }

    if (op.isCurrentUiOp()) gui.setTransformGizmo({ "posX": x, "posY": y, "posZ": z });

    mod.bind();
    next.trigger();
    mod.unbind();
};


};

Ops.Gl.ShaderEffects.AreaRotate_v2.prototype = new CABLES.Op();
CABLES.OPS["ebfd3f0c-7a58-44d3-aba0-72d91fafd7ae"]={f:Ops.Gl.ShaderEffects.AreaRotate_v2,objName:"Ops.Gl.ShaderEffects.AreaRotate_v2"};




// **************************************************************
// 
// Ops.Math.Ease
// 
// **************************************************************

Ops.Math.Ease = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inVal = op.inValue("Value"),
    inMin = op.inValue("Min", 0),
    inMax = op.inValue("Max", 1),
    result = op.outNumber("Result"),
    anim = new CABLES.Anim();

anim.createPort(op, "Easing", updateAnimEasing);
anim.setValue(0, 0);
anim.setValue(1, 1);

op.onLoaded = inMin.onChange = inMax.onChange = updateMinMax;

function updateMinMax()
{
    anim.keys[0].time = anim.keys[0].value = Math.min(inMin.get(), inMax.get());
    anim.keys[1].time = anim.keys[1].value = Math.max(inMin.get(), inMax.get());
}

function updateAnimEasing()
{
    anim.keys[0].setEasing(anim.defaultEasing);
}

inVal.onChange = function ()
{
    const r = anim.getValue(inVal.get());
    result.set(r);
};


};

Ops.Math.Ease.prototype = new CABLES.Op();
CABLES.OPS["8f6e4a08-33e6-408f-ac4a-198bd03b417b"]={f:Ops.Math.Ease,objName:"Ops.Math.Ease"};




// **************************************************************
// 
// Ops.Gl.Meshes.Line
// 
// **************************************************************

Ops.Gl.Meshes.Line = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("Render"),
    x1 = op.inValue("X 1"),
    y1 = op.inValue("Y 1"),
    z1 = op.inValue("Z 1"),
    x2 = op.inValue("X 2", 1),
    y2 = op.inValue("Y 2", 1),
    z2 = op.inValue("Z 2", 1),
    next = op.outTrigger("Next"),
    outArr = op.outArray("Array");

const cgl = op.patch.cgl;
const arr = [0, 0, 0, 0, 0, 0];
const geom = new CGL.Geometry("simplespline");
geom.vertices = [x1.get(), y1.get(), z1.get(), x2.get(), y2.get(), x2.get()];
const mesh = new CGL.Mesh(cgl, geom, { "glPrimitive": cgl.gl.LINES });

let changed = true;

x1.onChange = function () { arr[0] = geom.vertices[0] = x1.get(); changed = true; };
y1.onChange = function () { arr[1] = geom.vertices[1] = y1.get(); changed = true; };
z1.onChange = function () { arr[2] = geom.vertices[2] = z1.get(); changed = true; };

x2.onChange = function () { arr[3] = geom.vertices[3] = x2.get(); changed = true; };
y2.onChange = function () { arr[4] = geom.vertices[4] = y2.get(); changed = true; };
z2.onChange = function () { arr[5] = geom.vertices[5] = z2.get(); changed = true; };

render.onTriggered = function ()
{
    if (changed)
    {
        mesh.updateVertices(geom);
        outArr.setRef(arr);
        changed = false;
    }

    let shader = cgl.getShader();
    mesh.render(shader);

    next.trigger();
};


};

Ops.Gl.Meshes.Line.prototype = new CABLES.Op();
CABLES.OPS["c6a0d570-a0ac-4655-b17d-74d0870b0799"]={f:Ops.Gl.Meshes.Line,objName:"Ops.Gl.Meshes.Line"};




// **************************************************************
// 
// Ops.Patch.P4Zknbo.BasicSlider_v3
// 
// **************************************************************

Ops.Patch.P4Zknbo.BasicSlider_v3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_blls2amps=op.inTrigger(\"blls2amps\");\nport_blls2amps.setUiAttribs({title:\"Trigger in\",});\n\nconst port_btagbs7z2=op.inString(\"btagbs7z2\",\"\");\nport_btagbs7z2.setUiAttribs({title:\"Class\",});\n\nconst port_lj06d561p=op.inFloat(\"lj06d561p\",0);\nport_lj06d561p.setUiAttribs({title:\"Show Boundings\",display:\"bool\",});\n\nconst port_nti406vwi=op.outNumber(\"nti406vwi\");\nport_nti406vwi.setUiAttribs({title:\"Result\",});\n\nconst port_gjvx0zyv5=op.outNumber(\"gjvx0zyv5\");\nport_gjvx0zyv5.setUiAttribs({title:\"value\",});\n\nconst port_h2l1ydpiy=op.outNumber(\"h2l1ydpiy\");\nport_h2l1ydpiy.setUiAttribs({title:\"Hover\",});\nport_h2l1ydpiy.setUiAttribs({\"values\":[\"\"]});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_blls2amps = addedOps[i].outTrigger(\"innerOut_blls2amps\");\ninnerOut_blls2amps.setUiAttribs({title:\"Trigger in\"});\nport_blls2amps.onTriggered = () => { innerOut_blls2amps.trigger(); };\n\nconst innerOut_btagbs7z2 = addedOps[i].outString(\"innerOut_btagbs7z2\");\ninnerOut_btagbs7z2.set(port_btagbs7z2.get() );\ninnerOut_btagbs7z2.setUiAttribs({title:\"Class\"});\nport_btagbs7z2.on(\"change\", (a,v) => { innerOut_btagbs7z2.set(a); });\n\nconst innerOut_lj06d561p = addedOps[i].outNumber(\"innerOut_lj06d561p\");\ninnerOut_lj06d561p.set(port_lj06d561p.get() );\ninnerOut_lj06d561p.setUiAttribs({title:\"Show Boundings\"});\nport_lj06d561p.on(\"change\", (a,v) => { innerOut_lj06d561p.set(a); });\n\n    }\nif(addedOps[i].innerOutput)\n{\nconst innerIn_nti406vwi = addedOps[i].inFloat(\"innerIn_nti406vwi\");\ninnerIn_nti406vwi.setUiAttribs({title:\"Result\"});\ninnerIn_nti406vwi.on(\"change\", (a,v) => { port_nti406vwi.set(a); });\n\nconst innerIn_gjvx0zyv5 = addedOps[i].inFloat(\"innerIn_gjvx0zyv5\");\ninnerIn_gjvx0zyv5.setUiAttribs({title:\"value\"});\ninnerIn_gjvx0zyv5.on(\"change\", (a,v) => { port_gjvx0zyv5.set(a); });\n\nconst innerIn_h2l1ydpiy = addedOps[i].inFloat(\"innerIn_h2l1ydpiy\");\ninnerIn_h2l1ydpiy.setUiAttribs({title:\"Hover\"});\ninnerIn_h2l1ydpiy.on(\"change\", (a,v) => { port_h2l1ydpiy.set(a); });\n\n}\n}\n};\n","subpatch_json":"{\"ops\":[{\"id\":\"uk3um0kyc\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"r\",\"value\":0.179},{\"name\":\"g\",\"value\":1},{\"name\":\"b\",\"value\":0.692},{\"name\":\"colorizeTexture\",\"value\":0},{\"name\":\"Vertex Colors\",\"value\":0},{\"name\":\"Alpha Mask Source index\",\"value\":0},{\"name\":\"Alpha Mask Source\",\"value\":\"Luminance\"},{\"name\":\"Opacity TexCoords Transform\",\"value\":0},{\"name\":\"Discard Transparent Pixels\",\"value\":0},{\"name\":\"diffuseRepeatX\",\"value\":1},{\"name\":\"diffuseRepeatY\",\"value\":1},{\"name\":\"Tex Offset X\",\"value\":0},{\"name\":\"Tex Offset Y\",\"value\":0},{\"name\":\"Crop TexCoords\",\"value\":0},{\"name\":\"billboard\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"pv9fy1u1s\",\"objOut\":\"uk3um0kyc\"}]}],\"objName\":\"Ops.Gl.Shader.BasicMaterial_v3\"},{\"id\":\"vwwgjlizf\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"posY\",\"value\":0.005},{\"name\":\"posZ\",\"value\":0},{\"name\":\"scale\",\"value\":0.7},{\"name\":\"rotX\",\"value\":0},{\"name\":\"rotY\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Exec\",\"portOut\":\"trigger\",\"objIn\":\"ns66cci5h\",\"objOut\":\"vwwgjlizf\"}]}],\"objName\":\"Ops.Gl.Matrix.Transform\"},{\"id\":\"b9fhb990j\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Separate inc/dec\",\"value\":0},{\"name\":\"Inc factor\",\"value\":2,\"title\":\"Inc/Dec factor\"},{\"name\":\"Dec factor\",\"value\":4}],\"portsOut\":[{\"name\":\"Next\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"Next\",\"objIn\":\"vwwgjlizf\",\"objOut\":\"b9fhb990j\"},{\"portIn\":\"exe\",\"portOut\":\"Next\",\"objIn\":\"xnap82xfe\",\"objOut\":\"b9fhb990j\"}]},{\"name\":\"Result\",\"links\":[{\"portIn\":\"innerIn_nti406vwi\",\"portOut\":\"Result\",\"objIn\":\"ak207xc99\",\"objOut\":\"b9fhb990j\"},{\"portIn\":\"number1\",\"portOut\":\"Result\",\"objIn\":\"kdn6btjb3\",\"objOut\":\"b9fhb990j\"},{\"portIn\":\"posX\",\"portOut\":\"Result\",\"objIn\":\"vwwgjlizf\",\"objOut\":\"b9fhb990j\"}]}],\"objName\":\"Ops.Anim.Smooth\"},{\"id\":\"v8j7nipl3\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"innerOut_blls2amps\",\"title\":\"Trigger in\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"innerOut_blls2amps\",\"objIn\":\"om399w808\",\"objOut\":\"v8j7nipl3\"}]},{\"name\":\"innerOut_btagbs7z2\",\"title\":\"Class\",\"links\":[{\"portIn\":\"String In\",\"portOut\":\"innerOut_btagbs7z2\",\"objIn\":\"6tpfx1h1e\",\"objOut\":\"v8j7nipl3\"},{\"portIn\":\"ID\",\"portOut\":\"innerOut_btagbs7z2\",\"objIn\":\"c2lnrba6b\",\"objOut\":\"v8j7nipl3\"}]},{\"name\":\"innerOut_lj06d561p\",\"title\":\"Show Boundings\",\"links\":[{\"portIn\":\"Render Rectangle\",\"portOut\":\"innerOut_lj06d561p\",\"objIn\":\"c2lnrba6b\",\"objOut\":\"v8j7nipl3\"}]}],\"objName\":\"Ops.Ui.SubPatchInput\"},{\"id\":\"ak207xc99\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"innerIn_nti406vwi\",\"title\":\"Result\"},{\"name\":\"innerIn_gjvx0zyv5\",\"title\":\"value\"},{\"name\":\"innerIn_h2l1ydpiy\",\"title\":\"Hover\"}],\"objName\":\"Ops.Ui.SubPatchOutput\"},{\"id\":\"sp5jwe5ep\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"number2\",\"value\":0.5}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"result\",\"objIn\":\"b9fhb990j\",\"objOut\":\"sp5jwe5ep\"}]}],\"objName\":\"Ops.Math.Subtract\"},{\"id\":\"xnap82xfe\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"easing index\",\"value\":0},{\"name\":\"easing\",\"value\":\"linear\"},{\"name\":\"duration\",\"value\":0.25},{\"name\":\"Direction index\",\"value\":0},{\"name\":\"Direction\",\"value\":\"Both\"},{\"name\":\"value false\",\"value\":0.6},{\"name\":\"value true\",\"value\":1}],\"portsOut\":[{\"name\":\"value\",\"links\":[{\"portIn\":\"a\",\"portOut\":\"value\",\"objIn\":\"uk3um0kyc\",\"objOut\":\"xnap82xfe\"},{\"portIn\":\"innerIn_gjvx0zyv5\",\"portOut\":\"value\",\"objIn\":\"ak207xc99\",\"objOut\":\"xnap82xfe\"}]},{\"name\":\"finished\",\"value\":1}],\"objName\":\"Ops.Anim.BoolAnim\"},{\"id\":\"kdn6btjb3\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"number2\",\"value\":5}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"rotZ\",\"portOut\":\"result\",\"objIn\":\"vwwgjlizf\",\"objOut\":\"kdn6btjb3\"}]}],\"objName\":\"Ops.Math.Multiply\"},{\"id\":\"ipgrn686s\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"x\",\"value\":-0.32},{\"name\":\"y\",\"value\":0.92},{\"name\":\"z\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Trigger in\",\"portOut\":\"trigger\",\"objIn\":\"c2lnrba6b\",\"objOut\":\"ipgrn686s\"}]}],\"objName\":\"Ops.Gl.Matrix.Translate\"},{\"id\":\"pv9fy1u1s\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"render\",\"title\":\"Trigger\"},{\"name\":\"Render Mesh\",\"value\":1,\"title\":\"Render\"},{\"name\":\"width\",\"value\":0.02},{\"name\":\"height\",\"value\":0.07},{\"name\":\"pivot x index\",\"value\":1},{\"name\":\"pivot x\",\"value\":\"center\"},{\"name\":\"pivot y index\",\"value\":1},{\"name\":\"pivot y\",\"value\":\"center\"},{\"name\":\"axis index\",\"value\":0},{\"name\":\"axis\",\"value\":\"xy\"},{\"name\":\"Flip TexCoord X\",\"value\":0},{\"name\":\"Flip TexCoord Y\",\"value\":1},{\"name\":\"num columns\",\"value\":1},{\"name\":\"num rows\",\"value\":1}],\"objName\":\"Ops.Gl.Meshes.Rectangle_v4\"},{\"id\":\"ns66cci5h\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"Next\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"Next\",\"objIn\":\"uk3um0kyc\",\"objOut\":\"ns66cci5h\"}]}],\"objName\":\"Ops.Gl.Matrix.Billboard\"},{\"id\":\"om399w808\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"x\",\"value\":1.73},{\"name\":\"y\",\"value\":1},{\"name\":\"z\",\"value\":1}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"ipgrn686s\",\"objOut\":\"om399w808\"}]}],\"objName\":\"Ops.Gl.Matrix.ScaleXYZViewMatrix\"},{\"id\":\"ixcr22c6p\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_position\"}],\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"sp21nyh4q\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Title\",\"value\":\"ext/int position\"}],\"objName\":\"Ops.Ui.Area\"},{\"id\":\"6tpfx1h1e\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"When False index\",\"value\":1},{\"name\":\"When False\",\"value\":\"custom\"},{\"name\":\"Custom Value\",\"value\":\"position\"}],\"portsOut\":[{\"name\":\"String Out\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"String Out\",\"objIn\":\"k5cx9t2w0\",\"objOut\":\"6tpfx1h1e\"},{\"portIn\":\"Key\",\"portOut\":\"String Out\",\"objIn\":\"nzy2b7ut8\",\"objOut\":\"6tpfx1h1e\"}]}],\"objName\":\"Ops.String.GateString\"},{\"id\":\"k5cx9t2w0\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_mouseIsChangingParamID\"}],\"objName\":\"Ops.Vars.VarSetString_v2\"},{\"id\":\"ipyawra4a\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_normValue\"}],\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"baridp3mz\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ext_injectedState\"}],\"portsOut\":[{\"name\":\"Value\",\"links\":[{\"portIn\":\"Object In\",\"portOut\":\"Value\",\"objIn\":\"l84gnznq4\",\"objOut\":\"baridp3mz\"}]}],\"objName\":\"Ops.Vars.VarGetObject_v2\"},{\"id\":\"nzy2b7ut8\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Number\",\"portOut\":\"Result\",\"objIn\":\"f2to9w0p5\",\"objOut\":\"nzy2b7ut8\"},{\"portIn\":\"Numbers_1\",\"portOut\":\"Result\",\"objIn\":\"typa3qfai\",\"objOut\":\"nzy2b7ut8\"}]},{\"name\":\"Found\",\"value\":1}],\"objName\":\"Ops.Json.ObjectGetNumber_v2\"},{\"id\":\"u4ssrgqtd\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"result\",\"objIn\":\"qc7y3s0cx\",\"objOut\":\"u4ssrgqtd\"},{\"portIn\":\"Boolean\",\"portOut\":\"result\",\"objIn\":\"q1fyo45tl\",\"objOut\":\"u4ssrgqtd\"},{\"portIn\":\"Pass Through\",\"portOut\":\"result\",\"objIn\":\"6tpfx1h1e\",\"objOut\":\"u4ssrgqtd\"}]}],\"objName\":\"Ops.Ui.Routing.RouteNumber\"},{\"id\":\"qc7y3s0cx\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_leftButtonSlider\"}],\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"typa3qfai\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Numbers\",\"multiPortNum\":2},{\"name\":\"Numbers_2\",\"value\":0,\"title\":\"add port\"}],\"portsOut\":[{\"name\":\"Number\",\"links\":[{\"portIn\":\"number1\",\"portOut\":\"Number\",\"objIn\":\"sp5jwe5ep\",\"objOut\":\"typa3qfai\"},{\"portIn\":\"Value\",\"portOut\":\"Number\",\"objIn\":\"ixcr22c6p\",\"objOut\":\"typa3qfai\"}]},{\"name\":\"Num Values\",\"value\":2}],\"objName\":\"Ops.Number.SwitchNumberMultiPort\"},{\"id\":\"l84gnznq4\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"When False index\",\"value\":0},{\"name\":\"When False\",\"value\":\"keep last object\"},{\"name\":\"Only Valid Objects\",\"value\":0}],\"portsOut\":[{\"name\":\"Object Out\",\"links\":[{\"portIn\":\"Data\",\"portOut\":\"Object Out\",\"objIn\":\"nzy2b7ut8\",\"objOut\":\"l84gnznq4\"}]}],\"objName\":\"Ops.Json.GateObject\"},{\"id\":\"q1fyo45tl\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Pass Through\",\"portOut\":\"Result\",\"objIn\":\"l84gnznq4\",\"objOut\":\"q1fyo45tl\"},{\"portIn\":\"Index\",\"portOut\":\"Result\",\"objIn\":\"typa3qfai\",\"objOut\":\"q1fyo45tl\"}]}],\"objName\":\"Ops.Boolean.Not\"},{\"id\":\"c2lnrba6b\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Width\",\"value\":1.04},{\"name\":\"Height\",\"value\":0.24},{\"name\":\"Class\",\"value\":\"slider_track\"},{\"name\":\"Pivot x index\",\"value\":0},{\"name\":\"Pivot x\",\"value\":\"center\"},{\"name\":\"Pivot y index\",\"value\":2},{\"name\":\"Pivot y\",\"value\":\"bottom\"},{\"name\":\"Axis index\",\"value\":0},{\"name\":\"Axis\",\"value\":\"xy\"},{\"name\":\"Is Interactive\",\"value\":1},{\"name\":\"Show Boundings\",\"value\":0},{\"name\":\"Cursor index\",\"value\":5},{\"name\":\"Cursor\",\"value\":\"n-resize\"},{\"name\":\"Render\",\"value\":1,\"title\":\"Active\"}],\"portsOut\":[{\"name\":\"Trigger out\",\"links\":[{\"portIn\":\"Update\",\"portOut\":\"Trigger out\",\"objIn\":\"b9fhb990j\",\"objOut\":\"c2lnrba6b\"}]},{\"name\":\"Pointer Hover\",\"links\":[{\"portIn\":\"bool\",\"portOut\":\"Pointer Hover\",\"objIn\":\"xnap82xfe\",\"objOut\":\"c2lnrba6b\"},{\"portIn\":\"jqg7l6f5m\",\"portOut\":\"Pointer Hover\",\"objIn\":\"4lgk8235o\",\"objOut\":\"c2lnrba6b\"},{\"portIn\":\"innerIn_h2l1ydpiy\",\"portOut\":\"Pointer Hover\",\"objIn\":\"ak207xc99\",\"objOut\":\"c2lnrba6b\"}]},{\"name\":\"Pointer Down\",\"links\":[{\"portIn\":\"value\",\"portOut\":\"Pointer Down\",\"objIn\":\"u4ssrgqtd\",\"objOut\":\"c2lnrba6b\"},{\"portIn\":\"Pass Through\",\"portOut\":\"Pointer Down\",\"objIn\":\"iaaozqt73\",\"objOut\":\"c2lnrba6b\"}]},{\"name\":\"Pointer X\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"Pointer X\",\"objIn\":\"t24b96xwy\",\"objOut\":\"c2lnrba6b\"},{\"portIn\":\"Numbers_0\",\"portOut\":\"Pointer X\",\"objIn\":\"typa3qfai\",\"objOut\":\"c2lnrba6b\"},{\"portIn\":\"Value In\",\"portOut\":\"Pointer X\",\"objIn\":\"iaaozqt73\",\"objOut\":\"c2lnrba6b\"}]},{\"name\":\"Pointer Y\",\"value\":0.0475698468205169},{\"name\":\"Top\",\"value\":27.819621562957764},{\"name\":\"Left\",\"value\":366.9763829112053},{\"name\":\"Right\",\"value\":1028.1485039144754},{\"name\":\"Bottom\",\"value\":116.01506531238556}],\"objName\":\"Ops.Patch.P4Zknbo.InteractiveRectangle_v22\"},{\"id\":\"5ybabstd4\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Title\",\"value\":\"glassy\"}],\"objName\":\"Ops.Ui.Area\"},{\"id\":\"t24b96xwy\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"ui_normValueOnHover\"}],\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"4lgk8235o\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2,\"subPatchVer\":2},\"portsIn\":[{\"name\":\"jqg7l6f5m\",\"title\":\"Boolean\"},{\"name\":\"patchId\",\"value\":\"ww64iitoy\"}],\"objName\":\"Ops.Patch.P4Zknbo.DisengageFlag\"},{\"id\":\"f2to9w0p5\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{},\"objName\":\"Ops.Ui.VizNumberBar\"},{\"id\":\"iaaozqt73\",\"uiAttribs\":{\"subPatch\":\"e65ics21e\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"When False index\",\"value\":0},{\"name\":\"When False\",\"value\":\"keep last number\"},{\"name\":\"Custom Value\",\"value\":0}],\"portsOut\":[{\"name\":\"Value Out\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"Value Out\",\"objIn\":\"ipyawra4a\",\"objOut\":\"iaaozqt73\"}]}],\"objName\":\"Ops.Number.GateNumber\"}]}",};
const port_blls2amps=op.inTrigger("blls2amps");
port_blls2amps.setUiAttribs({title:"Trigger in",});

const port_btagbs7z2=op.inString("btagbs7z2","");
port_btagbs7z2.setUiAttribs({title:"Class",});

const port_lj06d561p=op.inFloat("lj06d561p",0);
port_lj06d561p.setUiAttribs({title:"Show Boundings",display:"bool",});

const port_nti406vwi=op.outNumber("nti406vwi");
port_nti406vwi.setUiAttribs({title:"Result",});

const port_gjvx0zyv5=op.outNumber("gjvx0zyv5");
port_gjvx0zyv5.setUiAttribs({title:"value",});

const port_h2l1ydpiy=op.outNumber("h2l1ydpiy");
port_h2l1ydpiy.setUiAttribs({title:"Hover",});
port_h2l1ydpiy.setUiAttribs({"values":[""]});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_blls2amps = addedOps[i].outTrigger("innerOut_blls2amps");
innerOut_blls2amps.setUiAttribs({title:"Trigger in"});
port_blls2amps.onTriggered = () => { innerOut_blls2amps.trigger(); };

const innerOut_btagbs7z2 = addedOps[i].outString("innerOut_btagbs7z2");
innerOut_btagbs7z2.set(port_btagbs7z2.get() );
innerOut_btagbs7z2.setUiAttribs({title:"Class"});
port_btagbs7z2.on("change", (a,v) => { innerOut_btagbs7z2.set(a); });

const innerOut_lj06d561p = addedOps[i].outNumber("innerOut_lj06d561p");
innerOut_lj06d561p.set(port_lj06d561p.get() );
innerOut_lj06d561p.setUiAttribs({title:"Show Boundings"});
port_lj06d561p.on("change", (a,v) => { innerOut_lj06d561p.set(a); });

    }
if(addedOps[i].innerOutput)
{
const innerIn_nti406vwi = addedOps[i].inFloat("innerIn_nti406vwi");
innerIn_nti406vwi.setUiAttribs({title:"Result"});
innerIn_nti406vwi.on("change", (a,v) => { port_nti406vwi.set(a); });

const innerIn_gjvx0zyv5 = addedOps[i].inFloat("innerIn_gjvx0zyv5");
innerIn_gjvx0zyv5.setUiAttribs({title:"value"});
innerIn_gjvx0zyv5.on("change", (a,v) => { port_gjvx0zyv5.set(a); });

const innerIn_h2l1ydpiy = addedOps[i].inFloat("innerIn_h2l1ydpiy");
innerIn_h2l1ydpiy.setUiAttribs({title:"Hover"});
innerIn_h2l1ydpiy.on("change", (a,v) => { port_h2l1ydpiy.set(a); });

}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}


};

Ops.Patch.P4Zknbo.BasicSlider_v3.prototype = new CABLES.Op();
CABLES.OPS["3ce2ea3c-8e3e-4b77-965d-de9b6f3ffa56"]={f:Ops.Patch.P4Zknbo.BasicSlider_v3,objName:"Ops.Patch.P4Zknbo.BasicSlider_v3"};




// **************************************************************
// 
// Ops.Math.Round
// 
// **************************************************************

Ops.Math.Round = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    number1 = op.inValueFloat("number"),
    decPlaces = op.inInt("Decimal Places", 0),
    result = op.outNumber("result");

let decm = 0;

number1.onChange = exec;
decPlaces.onChange = updateDecm;

updateDecm();

function updateDecm()
{
    decm = Math.pow(10, decPlaces.get());
    exec();
}

function exec()
{
    result.set(Math.round(number1.get() * decm) / decm);
}


};

Ops.Math.Round.prototype = new CABLES.Op();
CABLES.OPS["1a1ef636-6d02-42ba-ae1e-627b917d0d2b"]={f:Ops.Math.Round,objName:"Ops.Math.Round"};




// **************************************************************
// 
// Ops.Gl.Matrix.Billboard
// 
// **************************************************************

Ops.Gl.Matrix.Billboard = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const exec = op.inTrigger("Exec");
const next = op.outTrigger("Next");

const cgl = op.patch.cgl;

let mm = mat4.create();
let mv = mat4.create();
let m = mat4.create();
let mempty = mat4.create();

exec.onTriggered = function ()
{
    mat4.invert(mm, cgl.mMatrix);
    mat4.invert(mv, cgl.vMatrix);

    mat4.mul(mm, mm, mv);

    mm[12] = 0;
    mm[13] = 0;
    mm[14] = 0;

    cgl.pushModelMatrix();
    cgl.pushViewMatrix();
    mat4.mul(cgl.mMatrix, cgl.mMatrix, mm);
    next.trigger();
    cgl.popViewMatrix();
    cgl.popModelMatrix();
};


};

Ops.Gl.Matrix.Billboard.prototype = new CABLES.Op();
CABLES.OPS["d41e676e-d8a7-4a1e-8abf-f1bddfc982d5"]={f:Ops.Gl.Matrix.Billboard,objName:"Ops.Gl.Matrix.Billboard"};




// **************************************************************
// 
// Ops.Patch.P4Zknbo.InteractiveRectangle_v22
// 
// **************************************************************

Ops.Patch.P4Zknbo.InteractiveRectangle_v22 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("Trigger in"),
    trigger = op.outTrigger("Trigger out"),
    width = op.inValue("Width", 1),
    height = op.inValue("Height", 1),
    inId = op.inString("ID"),
    classPort = op.inString("Class"),
    pivotX = op.inValueSelect("Pivot x", ["center", "left", "right"]),
    pivotY = op.inValueSelect("Pivot y", ["center", "top", "bottom"]),
    axis = op.inValueSelect("Axis", ["xy", "xz"]),
    isInteractive = op.inValueBool("Is Interactive", true),
    renderRect = op.inValueBool("Render Rectangle", true),
    divVisible = op.inValueBool("Show Boundings", true),
    cursorPort = op.inValueSelect("Cursor", ["auto", "crosshair", "pointer", "Hand", "move", "n-resize", "ne-resize", "e-resize", "se-resize", "s-resize", "sw-resize", "w-resize", "nw-resize", "text", "wait", "help", "none"], "pointer"),
    active = op.inValueBool("Render", true);

const geomOut = op.outObject("geometry");
geomOut.ignoreValueSerialize = true;

const
    mouseOver = op.outBoolNum("Pointer Hover", false),
    mouseDown = op.outBoolNum("Pointer Down", false),
    outX = op.outNumber("Pointer X"),
    outY = op.outNumber("Pointer Y"),
    outTop = op.outNumber("Top"),
    outLeft = op.outNumber("Left"),
    outRight = op.outNumber("Right"),
    outBottom = op.outNumber("Bottom"),
    mouseClick = op.outTrigger("Left Click");

const elementPort = op.outObject("Dom Element");

active.setUiAttribs({ "title": "Active" });

const cgl = op.patch.cgl;
axis.set("xy");
pivotX.set("center");
pivotY.set("center");

const geom = new CGL.Geometry(op.name);
let mesh = null;
let div = null;
const m = mat4.create();
const trans = mat4.create();
const pos = vec3.create();
const divAlign = vec3.create();
const divAlignSize = vec3.create();

axis.onChange = rebuild;
pivotX.onChange = rebuild;
pivotY.onChange = rebuild;
width.onChange = rebuild;
height.onChange = rebuild;
cursorPort.onChange = updateCursor;
rebuild();

const modelMatrix = mat4.create();
const identViewMatrix = mat4.create();
const zeroVec3 = vec3.create();

render.onTriggered = function ()
{
    if (!div)
    {
        setUpDiv();
        addListeners();
        updateDivVisibility();
        updateIsInteractive();
    }
    updateDivSize();

    if (active.get() && renderRect.get() && mesh) mesh.render(cgl.getShader());

    trigger.trigger();
};

function rebuild()
{
    let w = width.get();
    let h = height.get();
    let x = 0;
    let y = 0;

    if (typeof w == "string")w = parseFloat(w);
    if (typeof h == "string")h = parseFloat(h);

    if (pivotX.get() == "center")
    {
        x = 0;
        divAlign[0] = -w / 2;
    }
    if (pivotX.get() == "right")
    {
        x = -w / 2;
    }
    if (pivotX.get() == "left")
    {
        x = w / 2;
    }

    if (pivotY.get() == "center")
    {
        y = 0;
        divAlign[1] = -h / 2;
    }
    if (pivotY.get() == "top") y = -h / 2;
    if (pivotY.get() == "bottom") y = +h / 2;

    const verts = [];
    const tc = [];
    const norms = [];
    const indices = [];

    const numRows = 1;
    const numColumns = 1;

    const stepColumn = w / numColumns;
    const stepRow = h / numRows;

    let c, r;

    for (r = 0; r <= numRows; r++)
    {
        for (c = 0; c <= numColumns; c++)
        {
            verts.push(c * stepColumn - width.get() / 2 + x);
            if (axis.get() == "xz") verts.push(0.0);
            verts.push(r * stepRow - height.get() / 2 + y);
            if (axis.get() == "xy") verts.push(0.0);

            tc.push(c / numColumns);
            tc.push(1.0 - r / numRows);

            if (axis.get() == "xz")
            {
                norms.push(0);
                norms.push(1);
                norms.push(0);
            }

            if (axis.get() == "xy")
            {
                norms.push(0);
                norms.push(0);
                norms.push(-1);
            }
        }
    }

    for (c = 0; c < numColumns; c++)
    {
        for (r = 0; r < numRows; r++)
        {
            const ind = c + (numColumns + 1) * r;
            const v1 = ind;
            const v2 = ind + 1;
            const v3 = ind + numColumns + 1;
            const v4 = ind + 1 + numColumns + 1;

            indices.push(v1);
            indices.push(v3);
            indices.push(v2);

            indices.push(v2);
            indices.push(v3);
            indices.push(v4);
        }
    }

    geom.clear();
    geom.vertices = verts;
    geom.texCoords = tc;
    geom.verticesIndices = indices;
    geom.vertexNormals = norms;

    if (!mesh) mesh = new CGL.Mesh(cgl, geom);
    else mesh.setGeom(geom);

    geomOut.set(null);
    geomOut.set(geom);
}

let divX = 0;
let divY = 0;
let divWidth = 0;
let divHeight = 0;

const mMatrix = mat4.create();
divVisible.onChange = updateDivVisibility;
inId.onChange = updateId;
classPort.onChange = updateClassNames;

function updateDivVisibility()
{
    if (div)
    {
        if (divVisible.get()) div.style.border = "1px solid red";
        else div.style.border = "none";
    }
}

function updateCursor()
{
    if (div)
    {
        div.style.cursor = cursorPort.get();
    }
}

function updateId()
{
    if (div)
    {
        div.setAttribute("id", inId.get());
    }
}

function updateDivSize()
{
    // var vp=cgl.getViewPort();

    mat4.multiply(mMatrix, cgl.vMatrix, cgl.mMatrix);
    vec3.transformMat4(pos, divAlign, mMatrix);
    vec3.transformMat4(trans, pos, cgl.pMatrix);

    const top = cgl.canvas.styleMarginTop || 0;
    const left = cgl.canvas.styleMarginLeft || 0;

    const x1 = (trans[0] * cgl.canvasWidth / 2) + cgl.canvasWidth / 2 + left;
    const y1 = (trans[1] * cgl.canvasHeight / 2) + cgl.canvasHeight / 2 + top;

    divAlignSize[0] = divAlign[0] + width.get();
    divAlignSize[1] = divAlign[1];

    vec3.transformMat4(pos, divAlignSize, mMatrix);
    vec3.transformMat4(trans, pos, cgl.pMatrix);

    const x2 = ((trans[0] * cgl.canvasWidth / 2) + cgl.canvasWidth / 2) + left;
    const y2 = ((trans[1] * cgl.canvasHeight / 2) + cgl.canvasHeight / 2 + top);

    divAlignSize[0] = divAlign[0];
    divAlignSize[1] = divAlign[1] + height.get();

    vec3.transformMat4(pos, divAlignSize, mMatrix);
    vec3.transformMat4(trans, pos, cgl.pMatrix);

    const x3 = ((trans[0] * cgl.canvasWidth / 2) + cgl.canvasWidth / 2) + left;
    const y3 = ((trans[1] * cgl.canvasHeight / 2) + cgl.canvasHeight / 2 + top);

    divAlignSize[0] = divAlign[0] + width.get();
    divAlignSize[1] = divAlign[1] + height.get();

    vec3.transformMat4(pos, divAlignSize, mMatrix);
    vec3.transformMat4(trans, pos, cgl.pMatrix);

    const x4 = ((trans[0] * cgl.canvasWidth / 2) + cgl.canvasWidth / 2) + left;
    const y4 = ((trans[1] * cgl.canvasHeight / 2) + cgl.canvasHeight / 2 + top);

    divX = Math.min(x1, x2, x3, x4);
    divY = Math.min(cgl.canvasHeight - y1, cgl.canvasHeight - y2, cgl.canvasHeight - y3, cgl.canvasHeight - y4);

    const xb = Math.max(x1, x2, x3, x4);
    const yb = Math.max(cgl.canvasHeight - y1, cgl.canvasHeight - y2, cgl.canvasHeight - y3, cgl.canvasHeight - y4);

    outTop.set(divY);
    outLeft.set(divX);
    outRight.set(xb);
    outBottom.set(yb);

    divWidth = Math.abs(xb - divX);
    divHeight = Math.abs(yb - divY);

    divX /= op.patch.cgl.pixelDensity;
    divY /= op.patch.cgl.pixelDensity;
    divWidth /= op.patch.cgl.pixelDensity;
    divHeight /= op.patch.cgl.pixelDensity;

    // div.style.left=divX+'px';
    // div.style.top=divY+'px';
    // div.style.width=divWidth+'px';
    // div.style.height=divHeight+'px';

    const divXpx = divX + "px";
    const divYpx = divY + "px";
    const divWidthPx = divWidth + "px";
    const divHeightPx = divHeight + "px";
    if (divXpx != div.style.left) div.style.left = divXpx;
    if (divYpx != div.style.top) div.style.top = divYpx;
    if (div.style.width != divWidthPx) div.style.width = divWidthPx;
    if (div.style.height != divHeightPx) div.style.height = divHeightPx;
}

function updateClassNames()
{
    if (div)
    {
        div.className = classPort.get();
    }
}

op.onDelete = function ()
{
    if (div)div.remove();
};

function setUpDiv()
{
    if (!div)
    {
        div = document.createElement("div");
        div.dataset.op = op.id;
        div.oncontextmenu = function (e)
        {
            e.preventDefault();
        };

        div.style.padding = "0px";
        div.style.position = "absolute";
        div.style["box-sizing"] = "border-box";
        div.style.border = "1px solid red";
        // div.style['border-left']="1px solid blue";
        // div.style['border-top']="1px solid green";
        div.style["z-index"] = "500";

        div.style["-webkit-user-select"] = "none";
        div.style["user-select"] = "none";
        div.style["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)";
        div.style["-webkit-touch-callout"] = "none";

        const canvas = op.patch.cgl.canvas.parentElement;
        canvas.appendChild(div);
        updateCursor();
        updateIsInteractive();
        updateId();
        updateClassNames();
    }
    updateDivSize();
    elementPort.set(div);
}

let listenerElement = null;

function onMouseMove(e)
{
    const offsetX = -width.get() / 2;
    const offsetY = -height.get() / 2;

    outX.set(Math.max(0.0, Math.min(1.0, e.offsetX / divWidth)));
    outY.set(Math.max(0.0, Math.min(1.0, 1.0 - e.offsetY / divHeight)));
}

function onMouseLeave(e)
{
    mouseDown.set(false);
    mouseOver.set(false);
}

function onMouseEnter(e)
{
    mouseOver.set(true);
}

function onMouseDown(e)
{
    mouseDown.set(true);
}

function onMouseUp(e)
{
    mouseDown.set(false);
}

function onmouseclick(e)
{
    mouseClick.trigger();
}

function onTouchMove(e)
{
    const targetEle = document.elementFromPoint(e.targetTouches[0].pageX, e.targetTouches[0].pageY);

    if (targetEle == div)
    {
        mouseOver.set(true);
        if (e.touches && e.touches.length > 0)
        {
            const rect = div.getBoundingClientRect(); // e.target
            const x = e.targetTouches[0].pageX - rect.left;
            const y = e.targetTouches[0].pageY - rect.top;

            const touch = e.touches[0];

            outX.set(Math.max(0.0, Math.min(1.0, x / divWidth)));
            outY.set(Math.max(0.0, Math.min(1.0, 1.0 - y / divHeight)));

            onMouseMove(touch);
        }
    }
    else
    {
        mouseOver.set(false);
    }
}

active.onChange = updateActiveRender;
function updateActiveRender()
{
    if (active.get())
    {
        addListeners();
        if (div) div.style.display = "block";
    }
    else
    {
        removeListeners();
        if (div) div.style.display = "none";
    }
}

isInteractive.onChange = updateIsInteractive;
function updateIsInteractive()
{
    if (isInteractive.get())
    {
        addListeners();
        if (div)div.style["pointer-events"] = "initial";
    }
    else
    {
        removeListeners();
        mouseDown.set(false);
        mouseOver.set(false);
        if (div)div.style["pointer-events"] = "none";
    }
}

function removeListeners()
{
    if (listenerElement)
    {
        document.removeEventListener("touchmove", onTouchMove);
        listenerElement.removeEventListener("touchend", onMouseUp);
        listenerElement.removeEventListener("touchstart", onMouseDown);

        listenerElement.removeEventListener("click", onmouseclick);
        listenerElement.removeEventListener("mousemove", onMouseMove);
        listenerElement.removeEventListener("mouseleave", onMouseLeave);
        listenerElement.removeEventListener("mousedown", onMouseDown);
        listenerElement.removeEventListener("mouseup", onMouseUp);
        listenerElement.removeEventListener("mouseenter", onMouseEnter);
        // listenerElement.removeEventListener('contextmenu', onClickRight);
        listenerElement = null;
    }
}

function addListeners()
{
    if (listenerElement)removeListeners();

    listenerElement = div;

    if (listenerElement)
    {
        document.addEventListener("touchmove", onTouchMove);
        listenerElement.addEventListener("touchend", onMouseUp);
        listenerElement.addEventListener("touchstart", onMouseDown);

        listenerElement.addEventListener("click", onmouseclick);
        listenerElement.addEventListener("mousemove", onMouseMove);
        listenerElement.addEventListener("mouseleave", onMouseLeave);
        listenerElement.addEventListener("mousedown", onMouseDown);
        listenerElement.addEventListener("mouseup", onMouseUp);
        listenerElement.addEventListener("mouseenter", onMouseEnter);
        // listenerElement.addEventListener('contextmenu', onClickRight);
    }
}


};

Ops.Patch.P4Zknbo.InteractiveRectangle_v22.prototype = new CABLES.Op();
CABLES.OPS["e7b5e668-7bb2-4224-9c2f-46015ba41497"]={f:Ops.Patch.P4Zknbo.InteractiveRectangle_v22,objName:"Ops.Patch.P4Zknbo.InteractiveRectangle_v22"};




// **************************************************************
// 
// Ops.Patch.P4Zknbo.DisengageFlag
// 
// **************************************************************

Ops.Patch.P4Zknbo.DisengageFlag = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_jqg7l6f5m=op.inFloat(\"jqg7l6f5m\",0);\nport_jqg7l6f5m.setUiAttribs({title:\"Boolean\",display:\"bool\",});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_jqg7l6f5m = addedOps[i].outNumber(\"innerOut_jqg7l6f5m\");\ninnerOut_jqg7l6f5m.set(port_jqg7l6f5m.get() );\ninnerOut_jqg7l6f5m.setUiAttribs({title:\"Boolean\"});\nport_jqg7l6f5m.on(\"change\", (a,v) => { innerOut_jqg7l6f5m.set(a); });\n\n    }\nif(addedOps[i].innerOutput)\n{\n}\n}\n};\n","subpatch_json":"{\"ops\":[{\"id\":\"tjwrh5u95\",\"uiAttribs\":{\"subPatch\":\"ynlymowkj\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"__sliderLeave\"}],\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"dlvka8p7u\",\"uiAttribs\":{\"subPatch\":\"ynlymowkj\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"Result\",\"objIn\":\"tjwrh5u95\",\"objOut\":\"dlvka8p7u\"}]}],\"objName\":\"Ops.Boolean.Not\"},{\"id\":\"eck8hvwot\",\"uiAttribs\":{\"subPatch\":\"ynlymowkj\"},\"storage\":{},\"portsOut\":[{\"name\":\"innerOut_jqg7l6f5m\",\"title\":\"Boolean\",\"links\":[{\"portIn\":\"Boolean\",\"portOut\":\"innerOut_jqg7l6f5m\",\"objIn\":\"dlvka8p7u\",\"objOut\":\"eck8hvwot\"}]}],\"objName\":\"Ops.Ui.SubPatchInput\"},{\"id\":\"7mxc7zyyb\",\"uiAttribs\":{\"subPatch\":\"ynlymowkj\"},\"storage\":{},\"objName\":\"Ops.Ui.SubPatchOutput\"}]}",};
const port_jqg7l6f5m=op.inFloat("jqg7l6f5m",0);
port_jqg7l6f5m.setUiAttribs({title:"Boolean",display:"bool",});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_jqg7l6f5m = addedOps[i].outNumber("innerOut_jqg7l6f5m");
innerOut_jqg7l6f5m.set(port_jqg7l6f5m.get() );
innerOut_jqg7l6f5m.setUiAttribs({title:"Boolean"});
port_jqg7l6f5m.on("change", (a,v) => { innerOut_jqg7l6f5m.set(a); });

    }
if(addedOps[i].innerOutput)
{
}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}


};

Ops.Patch.P4Zknbo.DisengageFlag.prototype = new CABLES.Op();
CABLES.OPS["d3d25a0e-a7e1-43f1-a005-8b7062db8e3a"]={f:Ops.Patch.P4Zknbo.DisengageFlag,objName:"Ops.Patch.P4Zknbo.DisengageFlag"};




// **************************************************************
// 
// Ops.Gl.Meshes.Circle_v3
// 
// **************************************************************

Ops.Gl.Meshes.Circle_v3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    radius = op.inValue("radius", 0.5),
    innerRadius = op.inValueSlider("innerRadius", 0),
    segments = op.inValueInt("segments", 40),
    percent = op.inValueSlider("percent", 1),
    steps = op.inValue("steps", 0),
    invertSteps = op.inValueBool("invertSteps", false),
    mapping = op.inSwitch("mapping", ["flat", "round"]),
    drawSpline = op.inValueBool("Spline", false),
    inDraw = op.inValueBool("Draw", true),
    trigger = op.outTrigger("trigger"),
    geomOut = op.outObject("geometry", null, "geometry");

op.setPortGroup("Size", [radius, innerRadius]);
op.setPortGroup("Display", [percent, steps, invertSteps]);
op.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose", CABLES.OP_PORT_TYPE_FUNCTION);

inDraw.setUiAttribs({ "title": "Render mesh" });

mapping.set("flat");

mapping.onChange =
    segments.onChange =
    radius.onChange =
    innerRadius.onChange =
    percent.onChange =
    steps.onChange =
    invertSteps.onChange =
    drawSpline.onChange = calcLater;

geomOut.ignoreValueSerialize = true;
const cgl = op.patch.cgl;

let geom = new CGL.Geometry("circle");
let mesh = null;
const lastSegs = -1;

let oldPrim = 0;
let shader = null;
let needsCalc = true;

render.onTriggered = renderMesh;

op.preRender = () =>
{
    renderMesh();
};

render.onLinkChanged = function ()
{
    if (!render.isLinked()) geomOut.set(null);
    else geomOut.setRef(geom);
};

function renderMesh()
{
    if (!op.patch.cg) return;
    if (needsCalc)calc();

    if (!CGL.TextureEffect.checkOpNotInTextureEffect(op)) return;

    shader = op.patch.cg.getShader();
    if (!shader) return;
    oldPrim = shader.glPrimitive;

    if (drawSpline.get()) shader.glPrimitive = cgl.gl.LINE_STRIP;

    if (inDraw.get() && mesh)mesh.render(shader);
    trigger.trigger();

    shader.glPrimitive = oldPrim;
}

function calc()
{
    const segs = Math.max(3, Math.floor(segments.get()));

    geom.clear();

    const faces = [];
    const texCoords = [];
    const vertexNormals = [];
    const tangents = [];
    const biTangents = [];

    let i = 0, degInRad = 0;
    let oldPosX = 0, oldPosY = 0;
    let oldPosXTexCoord = 0, oldPosYTexCoord = 0;

    let oldPosXIn = 0, oldPosYIn = 0;
    let oldPosXTexCoordIn = 0, oldPosYTexCoordIn = 0;

    let posxTexCoordIn = 0, posyTexCoordIn = 0;
    let posxTexCoord = 0, posyTexCoord = 0;
    let posx = 0, posy = 0;

    const perc = Math.max(0.0, percent.get());
    const verts = [];

    if (drawSpline.get())
    {
        let lastX = 0;
        let lastY = 0;
        const tc = [];
        for (i = 0; i <= segs * perc; i++)
        {
            degInRad = (360 / segs) * i * CGL.DEG2RAD;
            posx = Math.cos(degInRad) * radius.get();
            posy = Math.sin(degInRad) * radius.get();

            posyTexCoord = 0.5;

            if (i > 0)
            {
                verts.push(lastX);
                verts.push(lastY);
                verts.push(0);
                posxTexCoord = 1.0 - (i - 1) / segs;

                tc.push(posxTexCoord, posyTexCoord);
            }
            verts.push(posx);
            verts.push(posy);
            verts.push(0);

            lastX = posx;
            lastY = posy;
        }
        geom.setPointVertices(verts);
    }
    else
    if (innerRadius.get() <= 0)
    {
        for (i = 0; i <= segs * perc; i++)
        {
            degInRad = (360 / segs) * i * CGL.DEG2RAD;
            posx = Math.cos(degInRad) * radius.get();
            posy = Math.sin(degInRad) * radius.get();

            if (mapping.get() == "flat")
            {
                posxTexCoord = (Math.cos(degInRad) + 1.0) / 2;
                posyTexCoord = 1.0 - (Math.sin(degInRad) + 1.0) / 2;
                posxTexCoordIn = 0.5;
                posyTexCoordIn = 0.5;
            }
            else if (mapping.get() == "round")
            {
                posxTexCoord = 1.0 - i / segs;
                posyTexCoord = 0;
                posxTexCoordIn = posxTexCoord;
                posyTexCoordIn = 1;
            }

            faces.push(
                [0, 0, 0],
                [oldPosX, oldPosY, 0],
                [posx, posy, 0]
            );

            texCoords.push(
                posxTexCoordIn, posyTexCoordIn, oldPosXTexCoord, oldPosYTexCoord, posxTexCoord, posyTexCoord
            );
            vertexNormals.push(0, 0, 1, 0, 0, 1, 0, 0, 1);
            tangents.push(1, 0, 0, 1, 0, 0, 1, 0, 0);
            biTangents.push(0, -1, 0, 0, -1, 0, 0, -1, 0);

            oldPosXTexCoord = posxTexCoord;
            oldPosYTexCoord = posyTexCoord;

            oldPosX = posx;
            oldPosY = posy;
        }

        geom = CGL.Geometry.buildFromFaces(faces, "circle");
        geom.vertexNormals = vertexNormals;
        geom.tangents = tangents;
        geom.biTangents = biTangents;
        geom.texCoords = texCoords;
    }
    else
    {
        let count = 0;
        const numSteps = segs * perc;
        const pos = 0;

        for (i = 0; i <= numSteps; i++)
        {
            count++;

            degInRad = (360 / segs) * i * CGL.DEG2RAD;
            posx = Math.cos(degInRad) * radius.get();
            posy = Math.sin(degInRad) * radius.get();

            const posxIn = Math.cos(degInRad) * innerRadius.get() * radius.get();
            const posyIn = Math.sin(degInRad) * innerRadius.get() * radius.get();

            if (mapping.get() == "round")
            {
                posxTexCoord = 1.0 - i / segs;
                posyTexCoord = 0;
                posxTexCoordIn = posxTexCoord;
                posyTexCoordIn = 1;
            }

            if (steps.get() === 0.0 ||
                (count % parseInt(steps.get(), 10) === 0 && !invertSteps.get()) ||
                (count % parseInt(steps.get(), 10) !== 0 && invertSteps.get()))
            {
                faces.push(
                    [posxIn, posyIn, 0],
                    [oldPosX, oldPosY, 0],
                    [posx, posy, 0]
                );

                faces.push(
                    [oldPosXIn, oldPosYIn, 0],
                    [oldPosX, oldPosY, 0],
                    [posxIn, posyIn, 0]
                );

                texCoords.push(
                    posxTexCoord, 0, oldPosXTexCoord, 0, posxTexCoordIn, 1, posxTexCoord, 1, oldPosXTexCoord, 0, oldPosXTexCoordIn, 1);

                vertexNormals.push(
                    0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
                );
                tangents.push(
                    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0
                );
                biTangents.push(
                    0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1
                );
            }

            oldPosXTexCoordIn = posxTexCoordIn;
            oldPosYTexCoordIn = posyTexCoordIn;

            oldPosXTexCoord = posxTexCoord;
            oldPosYTexCoord = posyTexCoord;

            oldPosX = posx;
            oldPosY = posy;

            oldPosXIn = posxIn;
            oldPosYIn = posyIn;
        }

        geom = CGL.Geometry.buildFromFaces(faces, "circle");
        geom.vertexNormals = vertexNormals;
        geom.tangents = tangents;
        geom.biTangents = biTangents;

        if (mapping.get() == "flat") geom.mapTexCoords2d();
        else geom.texCoords = texCoords;
    }

    geomOut.setRef(geom);

    if (geom.vertices.length == 0) return;
    if (mesh) mesh.dispose();
    mesh = null;
    if (op.patch.cg)
        mesh = op.patch.cg.createMesh(geom, { "opId": op.id });
    needsCalc = false;
}

function calcLater()
{
    needsCalc = true;
}

op.onDelete = function ()
{
    if (mesh)mesh.dispose();
};


};

Ops.Gl.Meshes.Circle_v3.prototype = new CABLES.Op();
CABLES.OPS["ae07830b-91c3-4cbe-a7d6-d3b737392c16"]={f:Ops.Gl.Meshes.Circle_v3,objName:"Ops.Gl.Meshes.Circle_v3"};




// **************************************************************
// 
// Ops.Number.Number
// 
// **************************************************************

Ops.Number.Number = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    v = op.inValueFloat("value"),
    result = op.outNumber("result");

v.onChange = exec;

function exec()
{
    result.set(Number(v.get()));
}


};

Ops.Number.Number.prototype = new CABLES.Op();
CABLES.OPS["8fb2bb5d-665a-4d0a-8079-12710ae453be"]={f:Ops.Number.Number,objName:"Ops.Number.Number"};




// **************************************************************
// 
// Ops.Boolean.Or
// 
// **************************************************************

Ops.Boolean.Or = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    bool0 = op.inValueBool("bool 1"),
    bool1 = op.inValueBool("bool 2"),
    bool2 = op.inValueBool("bool 3"),
    bool3 = op.inValueBool("bool 4"),
    bool4 = op.inValueBool("bool 5"),
    bool5 = op.inValueBool("bool 6"),
    bool6 = op.inValueBool("bool 7"),
    bool7 = op.inValueBool("bool 8"),
    bool8 = op.inValueBool("bool 9"),
    bool9 = op.inValueBool("bool 10"),
    result = op.outBoolNum("result");

bool0.onChange =
    bool1.onChange =
    bool2.onChange =
    bool3.onChange =
    bool4.onChange =
    bool5.onChange =
    bool6.onChange =
    bool7.onChange =
    bool8.onChange =
    bool9.onChange = exec;

function exec()
{
    result.set(bool0.get() || bool1.get() || bool2.get() || bool3.get() || bool4.get() || bool5.get() || bool6.get() || bool7.get() || bool8.get() || bool9.get());
}


};

Ops.Boolean.Or.prototype = new CABLES.Op();
CABLES.OPS["b3b36238-4592-4e11-afe3-8361c4fd6be5"]={f:Ops.Boolean.Or,objName:"Ops.Boolean.Or"};




// **************************************************************
// 
// Ops.Trigger.TriggerOnce
// 
// **************************************************************

Ops.Trigger.TriggerOnce = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTriggerButton("Exec"),
    reset = op.inTriggerButton("Reset"),
    next = op.outTrigger("Next"),
    outTriggered = op.outBoolNum("Was Triggered");

let triggered = false;

op.toWorkPortsNeedToBeLinked(exe);

reset.onTriggered = function ()
{
    triggered = false;
    outTriggered.set(triggered);
};

exe.onTriggered = function ()
{
    if (triggered) return;

    triggered = true;
    next.trigger();
    outTriggered.set(triggered);
};


};

Ops.Trigger.TriggerOnce.prototype = new CABLES.Op();
CABLES.OPS["cf3544e4-e392-432b-89fd-fcfb5c974388"]={f:Ops.Trigger.TriggerOnce,objName:"Ops.Trigger.TriggerOnce"};




// **************************************************************
// 
// Ops.Patch.P4Zknbo.InteractiveRectangle_v23
// 
// **************************************************************

Ops.Patch.P4Zknbo.InteractiveRectangle_v23 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("Trigger in"),
    trigger = op.outTrigger("Trigger out"),
    width = op.inValue("Width", 1),
    height = op.inValue("Height", 1),
    inId = op.inString("ID"),
    classPort = op.inString("Class"),
    pivotX = op.inValueSelect("Pivot x", ["center", "left", "right"]),
    pivotY = op.inValueSelect("Pivot y", ["center", "top", "bottom"]),
    axis = op.inValueSelect("Axis", ["xy", "xz"]),
    isInteractive = op.inValueBool("Is Interactive", true),
    renderRect = op.inValueBool("Render Rectangle", true),
    divVisible = op.inValueBool("Show Boundings", true),
    cursorPort = op.inValueSelect("Cursor", ["auto", "crosshair", "pointer", "Hand", "move", "n-resize", "ne-resize", "e-resize", "se-resize", "s-resize", "sw-resize", "w-resize", "nw-resize", "text", "wait", "help", "none"], "pointer"),
    active = op.inValueBool("Render", true);

const geomOut = op.outObject("geometry");
geomOut.ignoreValueSerialize = true;

const
    mouseOver = op.outBoolNum("Pointer Hover", false),
    mouseDown = op.outBoolNum("Pointer Down", false),
    outX = op.outNumber("Pointer X"),
    outY = op.outNumber("Pointer Y"),
    outTop = op.outNumber("Top"),
    outLeft = op.outNumber("Left"),
    outRight = op.outNumber("Right"),
    outBottom = op.outNumber("Bottom"),
    mouseClick = op.outTrigger("Left Click");

const elementPort = op.outObject("Dom Element");

active.setUiAttribs({ "title": "Active" });

const cgl = op.patch.cgl;
axis.set("xy");
pivotX.set("center");
pivotY.set("center");

const geom = new CGL.Geometry(op.name);
let mesh = null;
let div = null;
const m = mat4.create();
const trans = mat4.create();
const pos = vec3.create();
const divAlign = vec3.create();
const divAlignSize = vec3.create();

axis.onChange = rebuild;
pivotX.onChange = rebuild;
pivotY.onChange = rebuild;
width.onChange = rebuild;
height.onChange = rebuild;
cursorPort.onChange = updateCursor;
rebuild();

const modelMatrix = mat4.create();
const identViewMatrix = mat4.create();
const zeroVec3 = vec3.create();

render.onTriggered = function ()
{
    if (!div)
    {
        setUpDiv();
        addListeners();
        updateDivVisibility();
        updateIsInteractive();
    }
    updateDivSize();

    if (active.get() && renderRect.get() && mesh) mesh.render(cgl.getShader());

    trigger.trigger();
};

function rebuild()
{
    let w = width.get();
    let h = height.get();
    let x = 0;
    let y = 0;

    if (typeof w == "string")w = parseFloat(w);
    if (typeof h == "string")h = parseFloat(h);

    if (pivotX.get() == "center")
    {
        x = 0;
        divAlign[0] = -w / 2;
    }
    if (pivotX.get() == "right")
    {
        x = -w / 2;
    }
    if (pivotX.get() == "left")
    {
        x = w / 2;
    }

    if (pivotY.get() == "center")
    {
        y = 0;
        divAlign[1] = -h / 2;
    }
    if (pivotY.get() == "top") y = -h / 2;
    if (pivotY.get() == "bottom") y = +h / 2;

    const verts = [];
    const tc = [];
    const norms = [];
    const indices = [];

    const numRows = 1;
    const numColumns = 1;

    const stepColumn = w / numColumns;
    const stepRow = h / numRows;

    let c, r;

    for (r = 0; r <= numRows; r++)
    {
        for (c = 0; c <= numColumns; c++)
        {
            verts.push(c * stepColumn - width.get() / 2 + x);
            if (axis.get() == "xz") verts.push(0.0);
            verts.push(r * stepRow - height.get() / 2 + y);
            if (axis.get() == "xy") verts.push(0.0);

            tc.push(c / numColumns);
            tc.push(1.0 - r / numRows);

            if (axis.get() == "xz")
            {
                norms.push(0);
                norms.push(1);
                norms.push(0);
            }

            if (axis.get() == "xy")
            {
                norms.push(0);
                norms.push(0);
                norms.push(-1);
            }
        }
    }

    for (c = 0; c < numColumns; c++)
    {
        for (r = 0; r < numRows; r++)
        {
            const ind = c + (numColumns + 1) * r;
            const v1 = ind;
            const v2 = ind + 1;
            const v3 = ind + numColumns + 1;
            const v4 = ind + 1 + numColumns + 1;

            indices.push(v1);
            indices.push(v3);
            indices.push(v2);

            indices.push(v2);
            indices.push(v3);
            indices.push(v4);
        }
    }

    geom.clear();
    geom.vertices = verts;
    geom.texCoords = tc;
    geom.verticesIndices = indices;
    geom.vertexNormals = norms;

    if (!mesh) mesh = new CGL.Mesh(cgl, geom);
    else mesh.setGeom(geom);

    geomOut.set(null);
    geomOut.set(geom);
}

let divX = 0;
let divY = 0;
let divWidth = 0;
let divHeight = 0;

const mMatrix = mat4.create();
divVisible.onChange = updateDivVisibility;
inId.onChange = updateId;
classPort.onChange = updateClassNames;

function updateDivVisibility()
{
    if (div)
    {
        if (divVisible.get()) div.style.border = "1px solid red";
        else div.style.border = "none";
    }
}

function updateCursor()
{
    if (div)
    {
        div.style.cursor = cursorPort.get();
    }
}

function updateId()
{
    if (div)
    {
        div.setAttribute("id", inId.get());
    }
}

function updateDivSize()
{
    // var vp=cgl.getViewPort();

    mat4.multiply(mMatrix, cgl.vMatrix, cgl.mMatrix);
    vec3.transformMat4(pos, divAlign, mMatrix);
    vec3.transformMat4(trans, pos, cgl.pMatrix);

    const top = cgl.canvas.styleMarginTop || 0;
    const left = cgl.canvas.styleMarginLeft || 0;

    const x1 = (trans[0] * cgl.canvasWidth / 2) + cgl.canvasWidth / 2 + left;
    const y1 = (trans[1] * cgl.canvasHeight / 2) + cgl.canvasHeight / 2 + top;

    divAlignSize[0] = divAlign[0] + width.get();
    divAlignSize[1] = divAlign[1];

    vec3.transformMat4(pos, divAlignSize, mMatrix);
    vec3.transformMat4(trans, pos, cgl.pMatrix);

    const x2 = ((trans[0] * cgl.canvasWidth / 2) + cgl.canvasWidth / 2) + left;
    const y2 = ((trans[1] * cgl.canvasHeight / 2) + cgl.canvasHeight / 2 + top);

    divAlignSize[0] = divAlign[0];
    divAlignSize[1] = divAlign[1] + height.get();

    vec3.transformMat4(pos, divAlignSize, mMatrix);
    vec3.transformMat4(trans, pos, cgl.pMatrix);

    const x3 = ((trans[0] * cgl.canvasWidth / 2) + cgl.canvasWidth / 2) + left;
    const y3 = ((trans[1] * cgl.canvasHeight / 2) + cgl.canvasHeight / 2 + top);

    divAlignSize[0] = divAlign[0] + width.get();
    divAlignSize[1] = divAlign[1] + height.get();

    vec3.transformMat4(pos, divAlignSize, mMatrix);
    vec3.transformMat4(trans, pos, cgl.pMatrix);

    const x4 = ((trans[0] * cgl.canvasWidth / 2) + cgl.canvasWidth / 2) + left;
    const y4 = ((trans[1] * cgl.canvasHeight / 2) + cgl.canvasHeight / 2 + top);

    divX = Math.min(x1, x2, x3, x4);
    divY = Math.min(cgl.canvasHeight - y1, cgl.canvasHeight - y2, cgl.canvasHeight - y3, cgl.canvasHeight - y4);

    const xb = Math.max(x1, x2, x3, x4);
    const yb = Math.max(cgl.canvasHeight - y1, cgl.canvasHeight - y2, cgl.canvasHeight - y3, cgl.canvasHeight - y4);

    outTop.set(divY);
    outLeft.set(divX);
    outRight.set(xb);
    outBottom.set(yb);

    divWidth = Math.abs(xb - divX);
    divHeight = Math.abs(yb - divY);

    divX /= op.patch.cgl.pixelDensity;
    divY /= op.patch.cgl.pixelDensity;
    divWidth /= op.patch.cgl.pixelDensity;
    divHeight /= op.patch.cgl.pixelDensity;

    // div.style.left=divX+'px';
    // div.style.top=divY+'px';
    // div.style.width=divWidth+'px';
    // div.style.height=divHeight+'px';

    const divXpx = divX + "px";
    const divYpx = divY + "px";
    const divWidthPx = divWidth + "px";
    const divHeightPx = divHeight + "px";
    if (divXpx != div.style.left) div.style.left = divXpx;
    if (divYpx != div.style.top) div.style.top = divYpx;
    if (div.style.width != divWidthPx) div.style.width = divWidthPx;
    if (div.style.height != divHeightPx) div.style.height = divHeightPx;
}

function updateClassNames()
{
    if (div)
    {
        div.className = classPort.get();
    }
}

op.onDelete = function ()
{
    if (div)div.remove();
};

function setUpDiv()
{
    if (!div)
    {
        div = document.createElement("div");
        div.dataset.op = op.id;
        div.oncontextmenu = function (e)
        {
            e.preventDefault();
        };

        div.style.padding = "0px";
        div.style.position = "absolute";
        div.style["box-sizing"] = "border-box";
        div.style.border = "1px solid red";
        // div.style['border-left']="1px solid blue";
        // div.style['border-top']="1px solid green";
        div.style["z-index"] = "500";

        div.style["-webkit-user-select"] = "none";
        div.style["user-select"] = "none";
        div.style["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)";
        div.style["-webkit-touch-callout"] = "none";

        const canvas = op.patch.cgl.canvas.parentElement;
        canvas.appendChild(div);
        updateCursor();
        updateIsInteractive();
        updateId();
        updateClassNames();
    }
    updateDivSize();
    elementPort.set(div);
}

let listenerElement = null;

function onMouseMove(e)
{
    const offsetX = -width.get() / 2;
    const offsetY = -height.get() / 2;

    outX.set(Math.max(0.0, Math.min(1.0, e.offsetX / divWidth)));
    outY.set(Math.max(0.0, Math.min(1.0, 1.0 - e.offsetY / divHeight)));
}

function onMouseLeave(e)
{
    mouseDown.set(false);
    mouseOver.set(false);
}

function onMouseEnter(e)
{
    mouseOver.set(true);
}

function onMouseDown(e)
{
    mouseDown.set(true);
}

function onMouseUp(e)
{
    mouseDown.set(false);
}

function onmouseclick(e)
{
    mouseClick.trigger();
}

function onTouchMove(e)
{
    const targetEle = document.elementFromPoint(e.targetTouches[0].pageX, e.targetTouches[0].pageY);

    if (targetEle == div)
    {
        mouseOver.set(true);
        if (e.touches && e.touches.length > 0)
        {
            const rect = div.getBoundingClientRect(); // e.target
            const x = e.targetTouches[0].pageX - rect.left;
            const y = e.targetTouches[0].pageY - rect.top;

            const touch = e.touches[0];

            outX.set(Math.max(0.0, Math.min(1.0, x / divWidth)));
            outY.set(Math.max(0.0, Math.min(1.0, 1.0 - y / divHeight)));

            onMouseMove(touch);
        }
    }
    else
    {
        mouseOver.set(false);
    }
}

active.onChange = updateActiveRender;
function updateActiveRender()
{
    if (active.get())
    {
        addListeners();
        if (div) div.style.display = "block";
    }
    else
    {
        removeListeners();
        if (div) div.style.display = "none";
    }
}

isInteractive.onChange = updateIsInteractive;
function updateIsInteractive()
{
    if (isInteractive.get())
    {
        addListeners();
        if (div)div.style["pointer-events"] = "initial";
    }
    else
    {
        removeListeners();
        mouseDown.set(false);
        mouseOver.set(false);
        if (div)div.style["pointer-events"] = "none";
    }
}

function removeListeners()
{
    if (listenerElement)
    {
        document.removeEventListener("touchmove", onTouchMove);
        listenerElement.removeEventListener("touchend", onMouseUp);
        listenerElement.removeEventListener("touchstart", onMouseDown);

        listenerElement.removeEventListener("click", onmouseclick);
        listenerElement.removeEventListener("mousemove", onMouseMove);
        listenerElement.removeEventListener("mouseleave", onMouseLeave);
        listenerElement.removeEventListener("mousedown", onMouseDown);
        listenerElement.removeEventListener("mouseup", onMouseUp);
        listenerElement.removeEventListener("mouseenter", onMouseEnter);
        // listenerElement.removeEventListener('contextmenu', onClickRight);
        listenerElement = null;
    }
}

function addListeners()
{
    if (listenerElement)removeListeners();

    listenerElement = div;

    if (listenerElement)
    {
        document.addEventListener("touchmove", onTouchMove);
        listenerElement.addEventListener("touchend", onMouseUp);
        listenerElement.addEventListener("touchstart", onMouseDown);

        listenerElement.addEventListener("click", onmouseclick);
        listenerElement.addEventListener("mousemove", onMouseMove);
        listenerElement.addEventListener("mouseleave", onMouseLeave);
        listenerElement.addEventListener("mousedown", onMouseDown);
        listenerElement.addEventListener("mouseup", onMouseUp);
        listenerElement.addEventListener("mouseenter", onMouseEnter);
        // listenerElement.addEventListener('contextmenu', onClickRight);
    }
}


};

Ops.Patch.P4Zknbo.InteractiveRectangle_v23.prototype = new CABLES.Op();
CABLES.OPS["b470a61b-ca19-4ff7-b16f-a6dd0749e811"]={f:Ops.Patch.P4Zknbo.InteractiveRectangle_v23,objName:"Ops.Patch.P4Zknbo.InteractiveRectangle_v23"};




// **************************************************************
// 
// Ops.Vars.VarTriggerNumber
// 
// **************************************************************

Ops.Vars.VarTriggerNumber = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    trigger = op.inTriggerButton("Trigger"),
    val = op.inValueFloat("Value", 0),
    next = op.outTrigger("Next");

op.varName = op.inDropDown("Variable", [], "", true);

new CABLES.VarSetOpWrapper(op, "number", val, op.varName, trigger, next);


};

Ops.Vars.VarTriggerNumber.prototype = new CABLES.Op();
CABLES.OPS["2c29baf0-2af2-486d-9218-4299594ee9c1"]={f:Ops.Vars.VarTriggerNumber,objName:"Ops.Vars.VarTriggerNumber"};




// **************************************************************
// 
// Ops.Trigger.TriggerCounterLoop
// 
// **************************************************************

Ops.Trigger.TriggerCounterLoop = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const exe = op.inTriggerButton("trigger in"),
    reset = op.inTriggerButton("reset"),
    trigger = op.outTrigger("trigger out"),
    num = op.outNumber("current count"),

    inMinLoopValue = op.inValueInt("Loop min", 0.0),
    inMaxLoopValue = op.inValueInt("Loop max", 4.0);

let n = Math.floor(inMinLoopValue.get());

// increments with each trigger and loops
// depending on min and max loop values
// can also work with negative numbers
// if min is greater than max then it decrements
// instead of incrementing
exe.onTriggered = function ()
{
    let inMin = Math.floor(inMinLoopValue.get());
    let inMax = Math.floor(inMaxLoopValue.get());

    if (inMin < inMax)
    {
        if (n < inMin)
        {
            n = inMinLoopValue.get();
        }
        else if (n >= inMax)
        {
            n = inMinLoopValue.get();
        }
        else
        {
            n++;
        }
    }
    else if (inMin > inMax)
    {
        if (n < inMax)
        {
            n = inMin;
        }
        else if (n > inMin)
        {
            inMin;
        }
        else if (n <= inMax)
        {
            n = inMin;
        }
        else
        {
            n--;
        }
    }
    num.set(n);
    op.setUiAttrib({ "extendTitle": n });
    trigger.trigger();
};

reset.onTriggered = function ()
{
    let inMin = Math.floor(inMinLoopValue.get());
    let inMax = Math.floor(inMaxLoopValue.get());

    if (inMin < inMax)
    {
        n = inMin;
    }
    else if (inMax < inMin)
    {
        n = inMin;
    }
    else
    {
        n = 0;
    }
    op.setUiAttrib({ "extendTitle": n });
    num.set(n);
};


};

Ops.Trigger.TriggerCounterLoop.prototype = new CABLES.Op();
CABLES.OPS["d3356c53-e278-433f-af0b-d8327cd99a2d"]={f:Ops.Trigger.TriggerCounterLoop,objName:"Ops.Trigger.TriggerCounterLoop"};




// **************************************************************
// 
// Ops.Boolean.TriggerOnChangeBoolean
// 
// **************************************************************

Ops.Boolean.TriggerOnChangeBoolean = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inBool = op.inValueBool("Value"),
    outTrue = op.outTrigger("True"),
    outFalse = op.outTrigger("False");

inBool.onChange = function ()
{
    if (inBool.get()) outTrue.trigger();
    else outFalse.trigger();
};


};

Ops.Boolean.TriggerOnChangeBoolean.prototype = new CABLES.Op();
CABLES.OPS["dba19c07-e3c4-4971-a991-c9e6212ca1c8"]={f:Ops.Boolean.TriggerOnChangeBoolean,objName:"Ops.Boolean.TriggerOnChangeBoolean"};




// **************************************************************
// 
// Ops.Gl.InteractiveRectangle_v2
// 
// **************************************************************

Ops.Gl.InteractiveRectangle_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("Trigger in"),
    trigger = op.outTrigger("Trigger out"),
    width = op.inValue("Width", 1),
    height = op.inValue("Height", 1),
    inId = op.inString("ID"),
    classPort = op.inString("Class"),
    pivotX = op.inValueSelect("Pivot x", ["center", "left", "right"]),
    pivotY = op.inValueSelect("Pivot y", ["center", "top", "bottom"]),
    axis = op.inValueSelect("Axis", ["xy", "xz"]),
    isInteractive = op.inValueBool("Is Interactive", true),
    renderRect = op.inValueBool("Render Rectangle", true),
    divVisible = op.inValueBool("Show Boundings", true),
    cursorPort = op.inValueSelect("Cursor", ["auto", "crosshair", "pointer", "Hand", "move", "n-resize", "ne-resize", "e-resize", "se-resize", "s-resize", "sw-resize", "w-resize", "nw-resize", "text", "wait", "help", "none"], "pointer"),
    active = op.inValueBool("Render", true);

const geomOut = op.outObject("geometry");
geomOut.ignoreValueSerialize = true;

const
    mouseOver = op.outBoolNum("Pointer Hover", false),
    mouseDown = op.outBoolNum("Pointer Down", false),
    outX = op.outNumber("Pointer X"),
    outY = op.outNumber("Pointer Y"),
    outTop = op.outNumber("Top"),
    outLeft = op.outNumber("Left"),
    outRight = op.outNumber("Right"),
    outBottom = op.outNumber("Bottom"),
    mouseClick = op.outTrigger("Left Click");

const elementPort = op.outObject("Dom Element");

active.setUiAttribs({ "title": "Active" });

const cgl = op.patch.cgl;
axis.set("xy");
pivotX.set("center");
pivotY.set("center");

const geom = new CGL.Geometry(op.name);
let mesh = null;
let div = null;
const m = mat4.create();
const trans = mat4.create();
const pos = vec3.create();
const divAlign = vec3.create();
const divAlignSize = vec3.create();

axis.onChange = rebuild;
pivotX.onChange = rebuild;
pivotY.onChange = rebuild;
width.onChange = rebuild;
height.onChange = rebuild;
cursorPort.onChange = updateCursor;
rebuild();

const modelMatrix = mat4.create();
const identViewMatrix = mat4.create();
const zeroVec3 = vec3.create();

render.onTriggered = function ()
{
    if (!div)
    {
        setUpDiv();
        addListeners();
        updateDivVisibility();
        updateIsInteractive();
    }
    updateDivSize();

    if (active.get() && renderRect.get() && mesh) mesh.render(cgl.getShader());

    trigger.trigger();
};

function rebuild()
{
    let w = width.get();
    let h = height.get();
    let x = 0;
    let y = 0;

    if (typeof w == "string")w = parseFloat(w);
    if (typeof h == "string")h = parseFloat(h);

    if (pivotX.get() == "center")
    {
        x = 0;
        divAlign[0] = -w / 2;
    }
    if (pivotX.get() == "right")
    {
        x = -w / 2;
    }
    if (pivotX.get() == "left")
    {
        x = w / 2;
    }

    if (pivotY.get() == "center")
    {
        y = 0;
        divAlign[1] = -h / 2;
    }
    if (pivotY.get() == "top") y = -h / 2;
    if (pivotY.get() == "bottom") y = +h / 2;

    const verts = [];
    const tc = [];
    const norms = [];
    const indices = [];

    const numRows = 1;
    const numColumns = 1;

    const stepColumn = w / numColumns;
    const stepRow = h / numRows;

    let c, r;

    for (r = 0; r <= numRows; r++)
    {
        for (c = 0; c <= numColumns; c++)
        {
            verts.push(c * stepColumn - width.get() / 2 + x);
            if (axis.get() == "xz") verts.push(0.0);
            verts.push(r * stepRow - height.get() / 2 + y);
            if (axis.get() == "xy") verts.push(0.0);

            tc.push(c / numColumns);
            tc.push(1.0 - r / numRows);

            if (axis.get() == "xz")
            {
                norms.push(0);
                norms.push(1);
                norms.push(0);
            }

            if (axis.get() == "xy")
            {
                norms.push(0);
                norms.push(0);
                norms.push(-1);
            }
        }
    }

    for (c = 0; c < numColumns; c++)
    {
        for (r = 0; r < numRows; r++)
        {
            const ind = c + (numColumns + 1) * r;
            const v1 = ind;
            const v2 = ind + 1;
            const v3 = ind + numColumns + 1;
            const v4 = ind + 1 + numColumns + 1;

            indices.push(v1);
            indices.push(v3);
            indices.push(v2);

            indices.push(v2);
            indices.push(v3);
            indices.push(v4);
        }
    }

    geom.clear();
    geom.vertices = verts;
    geom.texCoords = tc;
    geom.verticesIndices = indices;
    geom.vertexNormals = norms;

    if (!mesh) mesh = new CGL.Mesh(cgl, geom);
    else mesh.setGeom(geom);

    geomOut.set(null);
    geomOut.set(geom);
}

let divX = 0;
let divY = 0;
let divWidth = 0;
let divHeight = 0;

const mMatrix = mat4.create();
divVisible.onChange = updateDivVisibility;
inId.onChange = updateId;
classPort.onChange = updateClassNames;

function updateDivVisibility()
{
    if (div)
    {
        if (divVisible.get()) div.style.border = "1px solid red";
        else div.style.border = "none";
    }
}

function updateCursor()
{
    if (div)
    {
        div.style.cursor = cursorPort.get();
    }
}

function updateId()
{
    if (div)
    {
        div.setAttribute("id", inId.get());
    }
}

function updateDivSize()
{
    // var vp=cgl.getViewPort();

    mat4.multiply(mMatrix, cgl.vMatrix, cgl.mMatrix);
    vec3.transformMat4(pos, divAlign, mMatrix);
    vec3.transformMat4(trans, pos, cgl.pMatrix);

    const top = cgl.canvas.styleMarginTop || 0;
    const left = cgl.canvas.styleMarginLeft || 0;

    const x1 = (trans[0] * cgl.canvasWidth / 2) + cgl.canvasWidth / 2 + left;
    const y1 = (trans[1] * cgl.canvasHeight / 2) + cgl.canvasHeight / 2 + top;

    divAlignSize[0] = divAlign[0] + width.get();
    divAlignSize[1] = divAlign[1];

    vec3.transformMat4(pos, divAlignSize, mMatrix);
    vec3.transformMat4(trans, pos, cgl.pMatrix);

    const x2 = ((trans[0] * cgl.canvasWidth / 2) + cgl.canvasWidth / 2) + left;
    const y2 = ((trans[1] * cgl.canvasHeight / 2) + cgl.canvasHeight / 2 + top);

    divAlignSize[0] = divAlign[0];
    divAlignSize[1] = divAlign[1] + height.get();

    vec3.transformMat4(pos, divAlignSize, mMatrix);
    vec3.transformMat4(trans, pos, cgl.pMatrix);

    const x3 = ((trans[0] * cgl.canvasWidth / 2) + cgl.canvasWidth / 2) + left;
    const y3 = ((trans[1] * cgl.canvasHeight / 2) + cgl.canvasHeight / 2 + top);

    divAlignSize[0] = divAlign[0] + width.get();
    divAlignSize[1] = divAlign[1] + height.get();

    vec3.transformMat4(pos, divAlignSize, mMatrix);
    vec3.transformMat4(trans, pos, cgl.pMatrix);

    const x4 = ((trans[0] * cgl.canvasWidth / 2) + cgl.canvasWidth / 2) + left;
    const y4 = ((trans[1] * cgl.canvasHeight / 2) + cgl.canvasHeight / 2 + top);

    divX = Math.min(x1, x2, x3, x4);
    divY = Math.min(cgl.canvasHeight - y1, cgl.canvasHeight - y2, cgl.canvasHeight - y3, cgl.canvasHeight - y4);

    const xb = Math.max(x1, x2, x3, x4);
    const yb = Math.max(cgl.canvasHeight - y1, cgl.canvasHeight - y2, cgl.canvasHeight - y3, cgl.canvasHeight - y4);

    outTop.set(divY);
    outLeft.set(divX);
    outRight.set(xb);
    outBottom.set(yb);

    divWidth = Math.abs(xb - divX);
    divHeight = Math.abs(yb - divY);

    divX /= op.patch.cgl.pixelDensity;
    divY /= op.patch.cgl.pixelDensity;
    divWidth /= op.patch.cgl.pixelDensity;
    divHeight /= op.patch.cgl.pixelDensity;

    // div.style.left=divX+'px';
    // div.style.top=divY+'px';
    // div.style.width=divWidth+'px';
    // div.style.height=divHeight+'px';

    const divXpx = divX + "px";
    const divYpx = divY + "px";
    const divWidthPx = divWidth + "px";
    const divHeightPx = divHeight + "px";
    if (divXpx != div.style.left) div.style.left = divXpx;
    if (divYpx != div.style.top) div.style.top = divYpx;
    if (div.style.width != divWidthPx) div.style.width = divWidthPx;
    if (div.style.height != divHeightPx) div.style.height = divHeightPx;
}

function updateClassNames()
{
    if (div)
    {
        div.className = classPort.get();
    }
}

op.onDelete = function ()
{
    if (div)div.remove();
};

function setUpDiv()
{
    if (!div)
    {
        div = document.createElement("div");
        div.dataset.op = op.id;
        div.oncontextmenu = function (e)
        {
            e.preventDefault();
        };

        div.style.padding = "0px";
        div.style.position = "absolute";
        div.style["box-sizing"] = "border-box";
        div.style.border = "1px solid red";
        // div.style['border-left']="1px solid blue";
        // div.style['border-top']="1px solid green";
        div.style["z-index"] = "500";

        div.style["-webkit-user-select"] = "none";
        div.style["user-select"] = "none";
        div.style["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)";
        div.style["-webkit-touch-callout"] = "none";

        const canvas = op.patch.cgl.canvas.parentElement;
        canvas.appendChild(div);
        updateCursor();
        updateIsInteractive();
        updateId();
        updateClassNames();
    }
    updateDivSize();
    elementPort.set(div);
}

let listenerElement = null;

function onMouseMove(e)
{
    const offsetX = -width.get() / 2;
    const offsetY = -height.get() / 2;

    outX.set(Math.max(0.0, Math.min(1.0, e.offsetX / divWidth)));
    outY.set(Math.max(0.0, Math.min(1.0, 1.0 - e.offsetY / divHeight)));
}

function onMouseLeave(e)
{
    mouseDown.set(false);
    mouseOver.set(false);
}

function onMouseEnter(e)
{
    mouseOver.set(true);
}

function onMouseDown(e)
{
    mouseDown.set(true);
}

function onMouseUp(e)
{
    mouseDown.set(false);
}

function onmouseclick(e)
{
    mouseClick.trigger();
}

function onTouchMove(e)
{
    const targetEle = document.elementFromPoint(e.targetTouches[0].pageX, e.targetTouches[0].pageY);

    if (targetEle == div)
    {
        mouseOver.set(true);
        if (e.touches && e.touches.length > 0)
        {
            const rect = div.getBoundingClientRect(); // e.target
            const x = e.targetTouches[0].pageX - rect.left;
            const y = e.targetTouches[0].pageY - rect.top;

            const touch = e.touches[0];

            outX.set(Math.max(0.0, Math.min(1.0, x / divWidth)));
            outY.set(Math.max(0.0, Math.min(1.0, 1.0 - y / divHeight)));

            onMouseMove(touch);
        }
    }
    else
    {
        mouseOver.set(false);
    }
}

active.onChange = updateActiveRender;
function updateActiveRender()
{
    if (active.get())
    {
        addListeners();
        if (div) div.style.display = "block";
    }
    else
    {
        removeListeners();
        if (div) div.style.display = "none";
    }
}

isInteractive.onChange = updateIsInteractive;
function updateIsInteractive()
{
    if (isInteractive.get())
    {
        addListeners();
        if (div)div.style["pointer-events"] = "initial";
    }
    else
    {
        removeListeners();
        mouseDown.set(false);
        mouseOver.set(false);
        if (div)div.style["pointer-events"] = "none";
    }
}

function removeListeners()
{
    if (listenerElement)
    {
        document.removeEventListener("touchmove", onTouchMove);
        listenerElement.removeEventListener("touchend", onMouseUp);
        listenerElement.removeEventListener("touchstart", onMouseDown);

        listenerElement.removeEventListener("click", onmouseclick);
        listenerElement.removeEventListener("mousemove", onMouseMove);
        listenerElement.removeEventListener("mouseleave", onMouseLeave);
        listenerElement.removeEventListener("mousedown", onMouseDown);
        listenerElement.removeEventListener("mouseup", onMouseUp);
        listenerElement.removeEventListener("mouseenter", onMouseEnter);
        // listenerElement.removeEventListener('contextmenu', onClickRight);
        listenerElement = null;
    }
}

function addListeners()
{
    if (listenerElement)removeListeners();

    listenerElement = div;

    if (listenerElement)
    {
        document.addEventListener("touchmove", onTouchMove);
        listenerElement.addEventListener("touchend", onMouseUp);
        listenerElement.addEventListener("touchstart", onMouseDown);

        listenerElement.addEventListener("click", onmouseclick);
        listenerElement.addEventListener("mousemove", onMouseMove);
        listenerElement.addEventListener("mouseleave", onMouseLeave);
        listenerElement.addEventListener("mousedown", onMouseDown);
        listenerElement.addEventListener("mouseup", onMouseUp);
        listenerElement.addEventListener("mouseenter", onMouseEnter);
        // listenerElement.addEventListener('contextmenu', onClickRight);
    }
}


};

Ops.Gl.InteractiveRectangle_v2.prototype = new CABLES.Op();
CABLES.OPS["334728ca-60a2-4a42-a059-d9b5f3fe4d32"]={f:Ops.Gl.InteractiveRectangle_v2,objName:"Ops.Gl.InteractiveRectangle_v2"};




// **************************************************************
// 
// Ops.String.NumberToString_v2
// 
// **************************************************************

Ops.String.NumberToString_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    val = op.inValue("Number"),
    decPlaces = op.inInt("Decimal Places", 4),
    result = op.outString("Result");

let doDec = false;
let decm = 1;
decPlaces.onChange = updateDecm;
val.onChange = update;
updateDecm();
update();

function updateDecm()
{
    doDec = decPlaces.get() < 100;
    decm = Math.pow(10, decPlaces.get());
    update();
}

function update()
{
    if (doDec)
        result.set(String(Math.round(val.get() * decm) / decm));
    else
        result.set(String(val.get() || 0));
}


};

Ops.String.NumberToString_v2.prototype = new CABLES.Op();
CABLES.OPS["5c6d375a-82db-4366-8013-93f56b4061a9"]={f:Ops.String.NumberToString_v2,objName:"Ops.String.NumberToString_v2"};




// **************************************************************
// 
// Ops.String.Concat_v2
// 
// **************************************************************

Ops.String.Concat_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    string1 = op.inString("string1", "ABC"),
    string2 = op.inString("string2", "XYZ"),
    newLine = op.inValueBool("New Line", false),
    active = op.inBool("Active", true),
    result = op.outString("result");

newLine.onChange =
    string2.onChange =
    string1.onChange =
    active.onChange = exec;

exec();

function exec()
{
    if (!active.get())
    {
        return result.set(string1.get());
    }
    let s1 = string1.get();
    let s2 = string2.get();
    if (!s1 && !s2)
    {
        result.set("");
        return;
    }
    if (!s1)s1 = "";
    if (!s2)s2 = "";

    let nl = "";
    if (s1 && s2 && newLine.get())nl = "\n";
    result.set(String(s1) + nl + String(s2));
}


};

Ops.String.Concat_v2.prototype = new CABLES.Op();
CABLES.OPS["a52722aa-0ca9-402c-a844-b7e98a6c6e60"]={f:Ops.String.Concat_v2,objName:"Ops.String.Concat_v2"};




// **************************************************************
// 
// Ops.Vars.VarGetString
// 
// **************************************************************

Ops.Vars.VarGetString = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
var val=op.outString("Value");
op.varName=op.inValueSelect("Variable",[],"",true);

new CABLES.VarGetOpWrapper(op,"string",op.varName,val);


};

Ops.Vars.VarGetString.prototype = new CABLES.Op();
CABLES.OPS["3ad08cfc-bce6-4175-9746-fef2817a3b12"]={f:Ops.Vars.VarGetString,objName:"Ops.Vars.VarGetString"};




// **************************************************************
// 
// Ops.Vars.VarGetTexture_v2
// 
// **************************************************************

Ops.Vars.VarGetTexture_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const val = op.outTexture("Value");
op.varName = op.inValueSelect("Variable", [], "", true);

new CABLES.VarGetOpWrapper(op, "object", op.varName, val);


};

Ops.Vars.VarGetTexture_v2.prototype = new CABLES.Op();
CABLES.OPS["5f8ce5fc-9787-45c9-9a83-0eebd2c6de15"]={f:Ops.Vars.VarGetTexture_v2,objName:"Ops.Vars.VarGetTexture_v2"};




// **************************************************************
// 
// Ops.Gl.Meshes.Triangle_v2
// 
// **************************************************************

Ops.Gl.Meshes.Triangle_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    trigger = op.outTrigger("trigger"),
    sizeW = op.inValueFloat("width", 1),
    sizeH = op.inValueFloat("height", 1),
    draw = op.inValueBool("Draw", true),
    geom = new CGL.Geometry("triangle"),
    geomOut = op.outObject("geometry");

geomOut.ignoreValueSerialize = true;

op.toWorkPortsNeedToBeLinked(render);
op.setPortGroup("Size", [sizeW, sizeH]);

const cgl = op.patch.cgl;
let mesh = null;
sizeW.onChange = sizeH.onChange = () => { mesh = null; };

render.onLinkChanged = () =>
{
    if (!render.isLinked()) geomOut.set(null);
    else create();
};

render.onTriggered = function ()
{
    if (!mesh)create();
    if (draw.get() && mesh)mesh.render(cgl.getShader());
    trigger.trigger();
};

function create()
{
    geom.vertices = [
        0.0, sizeH.get(), 0.0,
        -sizeW.get(), -sizeH.get(), 0.0,
        sizeW.get(), -sizeH.get(), 0.0
    ];

    geom.vertexNormals = [
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0
    ];
    geom.tangents = [
        1, 0, 0,
        1, 0, 0,
        1, 0, 0
    ];
    geom.biTangents = [
        0, 1, 0,
        0, 1, 0,
        0, 1, 0
    ];

    geom.texCoords = [
        0.5, 0.0,
        1.0, 1.0,
        0.0, 1.0,
    ];

    geom.verticesIndices = [
        0, 1, 2
    ];

    mesh = new CGL.Mesh(cgl, geom);
    geomOut.setRef(geom);
}


};

Ops.Gl.Meshes.Triangle_v2.prototype = new CABLES.Op();
CABLES.OPS["ef522d4a-9712-4063-8a99-c6b409f26456"]={f:Ops.Gl.Meshes.Triangle_v2,objName:"Ops.Gl.Meshes.Triangle_v2"};




// **************************************************************
// 
// Ops.Gl.ClearColor
// 
// **************************************************************

Ops.Gl.ClearColor = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    trigger = op.outTrigger("trigger"),
    r = op.inFloatSlider("r", 0.1),
    g = op.inFloatSlider("g", 0.1),
    b = op.inFloatSlider("b", 0.1),
    a = op.inFloatSlider("a", 1);

r.setUiAttribs({ "colorPick": true });

const cgl = op.patch.cgl;

render.onTriggered = function ()
{
    cgl.gl.clearColor(r.get(), g.get(), b.get(), a.get());
    cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);
    trigger.trigger();
};


};

Ops.Gl.ClearColor.prototype = new CABLES.Op();
CABLES.OPS["19b441eb-9f63-4f35-ba08-b87841517c4d"]={f:Ops.Gl.ClearColor,objName:"Ops.Gl.ClearColor"};




// **************************************************************
// 
// Ops.Trigger.TriggerSend
// 
// **************************************************************

Ops.Trigger.TriggerSend = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const trigger = op.inTriggerButton("Trigger");
op.varName = op.inValueSelect("Named Trigger", [], "", true);

op.varName.onChange = updateName;

trigger.onTriggered = doTrigger;

op.patch.addEventListener("namedTriggersChanged", updateVarNamesDropdown);

updateVarNamesDropdown();

function updateVarNamesDropdown()
{
    if (CABLES.UI)
    {
        let varnames = [];
        const vars = op.patch.namedTriggers;
        varnames.push("+ create new one");
        for (const i in vars) varnames.push(i);
        varnames = varnames.sort();
        op.varName.uiAttribs.values = varnames;
    }
}

function updateName()
{
    if (CABLES.UI)
    {
        if (op.varName.get() == "+ create new one")
        {
            new CABLES.UI.ModalDialog({
                "prompt": true,
                "title": "New Trigger",
                "text": "Enter a name for the new trigger",
                "promptValue": "",
                "promptOk": (str) =>
                {
                    op.varName.set(str);
                    op.patch.namedTriggers[str] = op.patch.namedTriggers[str] || [];
                    updateVarNamesDropdown();
                }
            });
            return;
        }

        op.refreshParams();
    }

    if (!op.patch.namedTriggers[op.varName.get()])
    {
        op.patch.namedTriggers[op.varName.get()] = op.patch.namedTriggers[op.varName.get()] || [];
        op.patch.emitEvent("namedTriggersChanged");
    }

    op.setTitle(">" + op.varName.get());

    op.refreshParams();
    op.patch.emitEvent("opTriggerNameChanged", op, op.varName.get());
}

function doTrigger()
{
    const arr = op.patch.namedTriggers[op.varName.get()];
    // fire an event even if noone is receiving this trigger
    // this way TriggerReceiveFilter can still handle it
    op.patch.emitEvent("namedTriggerSent", op.varName.get());

    if (!arr)
    {
        op.setUiError("unknowntrigger", "unknown trigger");
        return;
    }
    else op.setUiError("unknowntrigger", null);

    for (let i = 0; i < arr.length; i++)
    {
        arr[i]();
    }
}


};

Ops.Trigger.TriggerSend.prototype = new CABLES.Op();
CABLES.OPS["ce1eaf2b-943b-4dc0-ab5e-ee11b63c9ed0"]={f:Ops.Trigger.TriggerSend,objName:"Ops.Trigger.TriggerSend"};




// **************************************************************
// 
// Ops.Trigger.Repeat2d
// 
// **************************************************************

Ops.Trigger.Repeat2d = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger("exe"),
    numx = op.inValueInt("num x", 5),
    numy = op.inValueInt("num y", 5),
    mul = op.inValueFloat("mul", 1),
    center = op.inValueBool("center"),
    trigger = op.outTrigger("trigger"),
    outX = op.outNumber("x"),
    outY = op.outNumber("y"),
    idx = op.outNumber("index"),
    total = op.outNumber("total iterations");

exe.onTriggered = function ()
{
    let subX = 0;
    let subY = 0;
    const m = mul.get();
    const nx = numx.get();
    const ny = numy.get();

    if (center.get())
    {
        subX = ((nx - 1) * m) / 2.0;
        subY = ((ny - 1) * m) / 2.0;
    }

    for (let y = 0; y < ny; y++)
    {
        outY.set((y * m) - subY);
        for (let x = 0; x < nx; x++)
        {
            outX.set((x * m) - subX);
            idx.set(x + y * nx);
            trigger.trigger();
        }
    }
    total.set(numx.get() * numy.get());
};


};

Ops.Trigger.Repeat2d.prototype = new CABLES.Op();
CABLES.OPS["79934693-5887-4173-8b48-3e3a18fcf225"]={f:Ops.Trigger.Repeat2d,objName:"Ops.Trigger.Repeat2d"};




// **************************************************************
// 
// Ops.Math.Compare.Equals
// 
// **************************************************************

Ops.Math.Compare.Equals = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    number1 = op.inValue("number1", 1),
    number2 = op.inValue("number2", 1),
    result = op.outBoolNum("result");

number1.onChange =
    number2.onChange = exec;
exec();

function exec()
{
    result.set(number1.get() == number2.get());
}


};

Ops.Math.Compare.Equals.prototype = new CABLES.Op();
CABLES.OPS["4dd3cc55-eebc-4187-9d4e-2e053a956fab"]={f:Ops.Math.Compare.Equals,objName:"Ops.Math.Compare.Equals"};




// **************************************************************
// 
// Ops.Array.ArrayGetNumber
// 
// **************************************************************

Ops.Array.ArrayGetNumber = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    array = op.inArray("array"),
    index = op.inValueInt("index"),
    valueInvalid = op.inFloat("Value Invalid Index", 0),
    value = op.outNumber("value"),
    outValidIndex = op.outBoolNum("Valid Index", true);

array.ignoreValueSerialize = true;

index.onChange = array.onChange = update;

function update()
{
    if (array.get())
    {
        const input = array.get()[index.get()];
        if (isNaN(input))
        {
            value.set(valueInvalid.get());
            outValidIndex.set(false);
        }
        else
        {
            outValidIndex.set(true);
            value.set(parseFloat(input));
        }
    }
}


};

Ops.Array.ArrayGetNumber.prototype = new CABLES.Op();
CABLES.OPS["d1189078-70cf-437d-9a37-b2ebe89acdaf"]={f:Ops.Array.ArrayGetNumber,objName:"Ops.Array.ArrayGetNumber"};




// **************************************************************
// 
// Ops.Vars.VarGetArray_v2
// 
// **************************************************************

Ops.Vars.VarGetArray_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const val = op.outArray("Value");
op.varName = op.inValueSelect("Variable", [], "", true);

new CABLES.VarGetOpWrapper(op, "array", op.varName, val);


};

Ops.Vars.VarGetArray_v2.prototype = new CABLES.Op();
CABLES.OPS["afa79294-aa9c-43bc-a49a-cade000a1de5"]={f:Ops.Vars.VarGetArray_v2,objName:"Ops.Vars.VarGetArray_v2"};




// **************************************************************
// 
// Ops.Gl.Matrix.Camera
// 
// **************************************************************

Ops.Gl.Matrix.Camera = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const render = op.inTrigger("render");
const trigger = op.outTrigger("trigger");

/* Inputs */
// projection | prespective & ortogonal
const projectionMode = op.inValueSelect("projection mode", ["prespective", "ortogonal"], "prespective");
const zNear = op.inValue("frustum near", 0.01);
const zFar = op.inValue("frustum far", 5000.0);

const fov = op.inValue("fov", 45);
const autoAspect = op.inValueBool("Auto Aspect Ratio", true);
const aspect = op.inValue("Aspect Ratio", 1);

// look at camera
const eyeX = op.inValue("eye X", 0);
const eyeY = op.inValue("eye Y", 0);
const eyeZ = op.inValue("eye Z", 5);

const centerX = op.inValue("center X", 0);
const centerY = op.inValue("center Y", 0);
const centerZ = op.inValue("center Z", 0);

// camera transform and movements
const posX = op.inValue("truck", 0);
const posY = op.inValue("boom", 0);
const posZ = op.inValue("dolly", 0);

const rotX = op.inValue("tilt", 0);
const rotY = op.inValue("pan", 0);
const rotZ = op.inValue("roll", 0);

/* Outputs */
const outAsp = op.outNumber("Aspect");
const outArr = op.outArray("Look At Array");

/* logic */
const cgl = op.patch.cgl;

let asp = 0;

const vUp = vec3.create();
const vEye = vec3.create();
const vCenter = vec3.create();
const transMatrix = mat4.create();
mat4.identity(transMatrix);

const arr = [];

// Transform and move
const vPos = vec3.create();
const transMatrixMove = mat4.create();
mat4.identity(transMatrixMove);

let updateCameraMovementMatrix = true;

render.onTriggered = function ()
{
    if (cgl.frameStore.shadowPass) return trigger.trigger();

    // Aspect ration
    if (!autoAspect.get()) asp = aspect.get();
    else asp = cgl.getViewPort()[2] / cgl.getViewPort()[3];
    outAsp.set(asp);

    // translation (truck, boom, dolly)
    cgl.pushViewMatrix();

    if (updateCameraMovementMatrix)
    {
        mat4.identity(transMatrixMove);

        vec3.set(vPos, posX.get(), posY.get(), posZ.get());
        if (posX.get() !== 0.0 || posY.get() !== 0.0 || posZ.get() !== 0.0)
            mat4.translate(transMatrixMove, transMatrixMove, vPos);

        if (rotX.get() !== 0)
            mat4.rotateX(transMatrixMove, transMatrixMove, rotX.get() * CGL.DEG2RAD);
        if (rotY.get() !== 0)
            mat4.rotateY(transMatrixMove, transMatrixMove, rotY.get() * CGL.DEG2RAD);
        if (rotZ.get() !== 0)
            mat4.rotateZ(transMatrixMove, transMatrixMove, rotZ.get() * CGL.DEG2RAD);

        updateCameraMovementMatrix = false;
    }

    mat4.multiply(cgl.vMatrix, cgl.vMatrix, transMatrixMove);

    // projection (prespective / ortogonal)
    cgl.pushPMatrix();

    // look at
    cgl.pushViewMatrix();

    if (projectionMode.get() == "prespective")
    {
        mat4.perspective(
            cgl.pMatrix,
            fov.get() * 0.0174533,
            asp,
            zNear.get(),
            zFar.get()
        );
    }
    else if (projectionMode.get() == "ortogonal")
    {
        mat4.ortho(
            cgl.pMatrix,
            -1 * (fov.get() / 14),
            1 * (fov.get() / 14),
            -1 * (fov.get() / 14) / asp,
            1 * (fov.get() / 14) / asp,
            zNear.get(),
            zFar.get()
        );
    }

    arr[0] = eyeX.get();
    arr[1] = eyeY.get();
    arr[2] = eyeZ.get();

    arr[3] = centerX.get();
    arr[4] = centerY.get();
    arr[5] = centerZ.get();

    arr[6] = 0;
    arr[7] = 1;
    arr[8] = 0;

    outArr.setRef(arr);

    vec3.set(vUp, 0, 1, 0);
    vec3.set(vEye, eyeX.get(), eyeY.get(), eyeZ.get());
    vec3.set(vCenter, centerX.get(), centerY.get(), centerZ.get());

    mat4.lookAt(transMatrix, vEye, vCenter, vUp);

    mat4.multiply(cgl.vMatrix, cgl.vMatrix, transMatrix);

    trigger.trigger();

    cgl.popViewMatrix();
    cgl.popPMatrix();

    cgl.popViewMatrix();

    // GUI for dolly, boom and truck
    if (op.isCurrentUiOp())
        gui.setTransformGizmo({
            "posX": posX,
            "posY": posY,
            "posZ": posZ
        });
};

const updateUI = function ()
{
    if (!autoAspect.get())
    {
        aspect.setUiAttribs({ "greyout": false });
    }
    else
    {
        aspect.setUiAttribs({ "greyout": true });
    }
};

const cameraMovementChanged = function ()
{
    updateCameraMovementMatrix = true;
};

// listeners
posX.onChange = cameraMovementChanged;
posY.onChange = cameraMovementChanged;
posZ.onChange = cameraMovementChanged;

rotX.onChange = cameraMovementChanged;
rotY.onChange = cameraMovementChanged;
rotZ.onChange = cameraMovementChanged;

autoAspect.onChange = updateUI;
updateUI();


};

Ops.Gl.Matrix.Camera.prototype = new CABLES.Op();
CABLES.OPS["b24dbfdc-485c-49d2-92a1-7258efd9239a"]={f:Ops.Gl.Matrix.Camera,objName:"Ops.Gl.Matrix.Camera"};




// **************************************************************
// 
// Ops.Gl.Matrix.TransformView
// 
// **************************************************************

Ops.Gl.Matrix.TransformView = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    posX = op.inValueFloat("posX"),
    posY = op.inValueFloat("posY"),
    posZ = op.inValueFloat("posZ"),
    scale = op.inValueFloat("scale"),
    rotX = op.inValueFloat("rotX"),
    rotY = op.inValueFloat("rotY"),
    rotZ = op.inValueFloat("rotZ"),
    trigger = op.outTrigger("trigger");

op.setPortGroup("Position", [posX, posY, posZ]);
op.setPortGroup("Scale", [scale]);
op.setPortGroup("Rotation", [rotX, rotZ, rotY]);

const vPos = vec3.create();
const vScale = vec3.create();
const transMatrix = mat4.create();
mat4.identity(transMatrix);

let doScale = false;
let doTranslate = false;

let translationChanged = true;
let didScaleChanged = true;
let didRotChanged = true;

render.onTriggered = function ()
{
    const cg = op.patch.cgl;

    let updateMatrix = false;
    if (translationChanged)
    {
        updateTranslation();
        updateMatrix = true;
    }
    if (didScaleChanged)
    {
        updateScale();
        updateMatrix = true;
    }
    if (didRotChanged)
    {
        updateMatrix = true;
    }
    if (updateMatrix)doUpdateMatrix();

    cg.pushViewMatrix();
    mat4.multiply(cg.vMatrix, cg.vMatrix, transMatrix);

    trigger.trigger();
    cg.popViewMatrix();

    if (op.isCurrentUiOp())
        gui.setTransformGizmo(
            {
                "posX": posX,
                "posY": posY,
                "posZ": posZ,
            });
};

op.transform3d = function ()
{
    return {
        "pos": [posX, posY, posZ]
    };
};

function doUpdateMatrix()
{
    mat4.identity(transMatrix);
    if (doTranslate)mat4.translate(transMatrix, transMatrix, vPos);

    if (rotX.get() !== 0)mat4.rotateX(transMatrix, transMatrix, rotX.get() * CGL.DEG2RAD);
    if (rotY.get() !== 0)mat4.rotateY(transMatrix, transMatrix, rotY.get() * CGL.DEG2RAD);
    if (rotZ.get() !== 0)mat4.rotateZ(transMatrix, transMatrix, rotZ.get() * CGL.DEG2RAD);

    if (doScale)mat4.scale(transMatrix, transMatrix, vScale);
    rotChanged = false;
}

function updateTranslation()
{
    doTranslate = false;
    if (posX.get() !== 0.0 || posY.get() !== 0.0 || posZ.get() !== 0.0) doTranslate = true;
    vec3.set(vPos, posX.get(), posY.get(), posZ.get());
    translationChanged = false;
}

function updateScale()
{
    doScale = false;
    if (scale.get() !== 0.0)doScale = true;
    vec3.set(vScale, scale.get(), scale.get(), scale.get());
    scaleChanged = false;
}

function translateChanged()
{
    translationChanged = true;
}

function scaleChanged()
{
    didScaleChanged = true;
}

function rotChanged()
{
    didRotChanged = true;
}

rotX.onChange =
rotY.onChange =
rotZ.onChange = rotChanged;

scale.onChange = scaleChanged;

posX.onChange =
posY.onChange =
posZ.onChange = translateChanged;

rotX.set(0.0);
rotY.set(0.0);
rotZ.set(0.0);

scale.set(1.0);

posX.set(0.0);
posY.set(0.0);
posZ.set(0.0);

doUpdateMatrix();


};

Ops.Gl.Matrix.TransformView.prototype = new CABLES.Op();
CABLES.OPS["0b3e04f7-323e-4ac8-8a22-a21e2f36e0e9"]={f:Ops.Gl.Matrix.TransformView,objName:"Ops.Gl.Matrix.TransformView"};




// **************************************************************
// 
// Ops.Math.SmootherStep
// 
// **************************************************************

Ops.Math.SmootherStep = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    val = op.inValueFloat("val", 0),
    min = op.inValueFloat("min", 0),
    max = op.inValueFloat("max", 1),
    result = op.outNumber("result");

val.onChange = max.onChange = min.onChange = exec;
exec();

function exec()
{
    let x = Math.max(0, Math.min(1, (val.get() - min.get()) / (max.get() - min.get())));
    result.set(x * x * x * (x * (x * 6 - 15) + 10) * (max.get() - min.get())); // smootherstep
}


};

Ops.Math.SmootherStep.prototype = new CABLES.Op();
CABLES.OPS["c66da84f-ff2f-45de-b3c2-557bdf1cb946"]={f:Ops.Math.SmootherStep,objName:"Ops.Math.SmootherStep"};




// **************************************************************
// 
// Ops.String.StringCompose_v3
// 
// **************************************************************

Ops.String.StringCompose_v3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    format=op.inString('Format',"hello $a, $b $c und $d"),
    a=op.inString('String A','world'),
    b=op.inString('String B',1),
    c=op.inString('String C',2),
    d=op.inString('String D',3),
    e=op.inString('String E'),
    f=op.inString('String F'),
    result=op.outString("Result");

format.onChange=
    a.onChange=
    b.onChange=
    c.onChange=
    d.onChange=
    e.onChange=
    f.onChange=update;

update();

function update()
{
    var str=format.get()||'';
    if(typeof str!='string')
        str='';

    str = str.replace(/\$a/g, a.get());
    str = str.replace(/\$b/g, b.get());
    str = str.replace(/\$c/g, c.get());
    str = str.replace(/\$d/g, d.get());
    str = str.replace(/\$e/g, e.get());
    str = str.replace(/\$f/g, f.get());

    result.set(str);
}

};

Ops.String.StringCompose_v3.prototype = new CABLES.Op();
CABLES.OPS["6afea9f4-728d-4f3c-9e75-62ddc1448bf0"]={f:Ops.String.StringCompose_v3,objName:"Ops.String.StringCompose_v3"};




// **************************************************************
// 
// Ops.Gl.RenderToTexture_v3
// 
// **************************************************************

Ops.Gl.RenderToTexture_v3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    inSize = op.inSwitch("Size", ["Canvas", "Manual"], "Canvas"),
    width = op.inValueInt("texture width", 512),
    height = op.inValueInt("texture height", 512),
    aspect = op.inBool("Auto Aspect", true),
    tfilter = op.inSwitch("filter", ["nearest", "linear", "mipmap"], "linear"),
    twrap = op.inSwitch("Wrap", ["Clamp", "Repeat", "Mirror"], "Repeat"),
    msaa = op.inSwitch("MSAA", ["none", "2x", "4x", "8x"], "none"),
    trigger = op.outTrigger("trigger"),
    tex = op.outTexture("texture"),
    texDepth = op.outTexture("textureDepth"),
    inPixelFormat = op.inDropDown("Pixel Format", CGL.Texture.PIXELFORMATS, CGL.Texture.PFORMATSTR_RGBA8UB),
    depth = op.inValueBool("Depth", true),
    clear = op.inValueBool("Clear", true);

const cgl = op.patch.cgl;
let fb = null;
let reInitFb = true;

op.setPortGroup("Size", [inSize, width, height, aspect]);

inPixelFormat.onChange =
    depth.onChange =
    clear.onChange =
    tfilter.onChange =
    twrap.onChange =
    msaa.onChange = initFbLater;

inSize.onChange = updateUi;

render.onTriggered =
    op.preRender = doRender;

updateUi();

function updateUi()
{
    width.setUiAttribs({ "greyout": inSize.get() != "Manual" });
    height.setUiAttribs({ "greyout": inSize.get() != "Manual" });
    aspect.setUiAttribs({ "greyout": inSize.get() != "Manual" });
}

function initFbLater()
{
    reInitFb = true;
}

function doRender()
{
    CGL.TextureEffect.checkOpNotInTextureEffect(op);

    if (!fb || reInitFb)
    {
        if (fb) fb.delete();

        let selectedWrap = CGL.Texture.WRAP_REPEAT;
        if (twrap.get() == "Clamp") selectedWrap = CGL.Texture.WRAP_CLAMP_TO_EDGE;
        else if (twrap.get() == "Mirror") selectedWrap = CGL.Texture.WRAP_MIRRORED_REPEAT;

        let selectFilter = CGL.Texture.FILTER_NEAREST;
        if (tfilter.get() == "nearest") selectFilter = CGL.Texture.FILTER_NEAREST;
        else if (tfilter.get() == "linear") selectFilter = CGL.Texture.FILTER_LINEAR;
        else if (tfilter.get() == "mipmap") selectFilter = CGL.Texture.FILTER_MIPMAP;

        if (inPixelFormat.get().indexOf("loat") && tfilter.get() == "mipmap") op.setUiError("fpmipmap", "Can't use mipmap and float texture at the same time");
        else op.setUiError("fpmipmap", null);

        if (cgl.glVersion >= 2)
        {
            let ms = true;
            let msSamples = 4;

            if (msaa.get() == "none")
            {
                msSamples = 0;
                ms = false;
            }
            if (msaa.get() == "2x") msSamples = 2;
            if (msaa.get() == "4x") msSamples = 4;
            if (msaa.get() == "8x") msSamples = 8;

            fb = new CGL.Framebuffer2(cgl, 8, 8,
                {
                    "name": "render2texture " + op.id,
                    "pixelFormat": inPixelFormat.get(),
                    "multisampling": ms,
                    "multisamplingSamples": msSamples,
                    "wrap": selectedWrap,
                    "filter": selectFilter,
                    "depth": depth.get(),
                    "clear": clear.get()
                });
        }
        else
        {
            fb = new CGL.Framebuffer(cgl, 8, 8, { "isFloatingPointTexture": false, "clear": clear.get() });
        }

        if (fb && fb.valid)
        {
            texDepth.set(fb.getTextureDepth());
            reInitFb = false;
        }
        else
        {
            fb = null;
            reInitFb = true;
        }
    }

    let setAspect = aspect.get();

    if (inSize.get() == "Canvas")
    {
        setAspect = true;
        width.set(op.patch.cgl.checkTextureSize(cgl.canvasWidth));
        height.set(op.patch.cgl.checkTextureSize(cgl.canvasHeight));
    }

    if (fb.getWidth() != op.patch.cgl.checkTextureSize(width.get()) || fb.getHeight() != op.patch.cgl.checkTextureSize(height.get()))
    {
        fb.setSize(
            op.patch.cgl.checkTextureSize(width.get()),
            op.patch.cgl.checkTextureSize(height.get()));
    }

    fb.renderStart(cgl);

    cgl.pushViewPort(0, 0, width.get(), height.get());

    if (setAspect) mat4.perspective(cgl.pMatrix, 45, width.get() / height.get(), 0.1, 1000.0);

    trigger.trigger();
    fb.renderEnd(cgl);

    cgl.popViewPort();

    texDepth.setRef(fb.getTextureDepth());
    tex.setRef(fb.getTextureColor());
}

//


};

Ops.Gl.RenderToTexture_v3.prototype = new CABLES.Op();
CABLES.OPS["41eec5c7-c480-477a-be81-04c3efac8357"]={f:Ops.Gl.RenderToTexture_v3,objName:"Ops.Gl.RenderToTexture_v3"};




// **************************************************************
// 
// Ops.Gl.GLTF.GltfDracoCompression
// 
// **************************************************************

Ops.Gl.GLTF.GltfDracoCompression = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
class DracoDecoderClass
{
    constructor()
    {
        this.workerLimit = 4;
        this.workerPool = [];
        this.workerNextTaskID = 1;
        this.workerSourceURL = "";

        this.config = {
            "wasm": Uint8Array.from(atob(DracoDecoderWASM), (c) => { return c.charCodeAt(0); }),
            "wrapper": DracoWASMWrapperCode,
            "decoderSettings": {},
        };

        const dracoWorker = this._DracoWorker.toString();
        const workerCode = dracoWorker.substring(dracoWorker.indexOf("{") + 1, dracoWorker.lastIndexOf("}"));

        const jsContent = this.config.wrapper;
        const body = [
            "/* draco decoder */",
            jsContent,
            "",
            "/* worker */",
            workerCode
        ].join("\n");

        this.workerSourceURL = URL.createObjectURL(new Blob([body]));
    }

    _getWorker(taskID, taskCost)
    {
        if (this.workerPool.length < this.workerLimit)
        {
            const worker = new Worker(this.workerSourceURL);
            worker._callbacks = {};
            worker._taskCosts = {};
            worker._taskLoad = 0;
            worker.postMessage({ "type": "init", "decoderConfig": this.config });
            worker.onmessage = (e) =>
            {
                const message = e.data;

                switch (message.type)
                {
                case "done":
                    worker._callbacks[message.taskID].finishedCallback(message.geometry);
                    break;

                case "error":
                    worker._callbacks[message.taskID].errorCallback(message);
                    break;

                default:
                    op.error("THREE.DRACOLoader: Unexpected message, \"" + message.type + "\"");
                }
                this._releaseTask(worker, message.taskID);
            };
            this.workerPool.push(worker);
        }
        else
        {
            this.workerPool.sort(function (a, b)
            {
                return a._taskLoad > b._taskLoad ? -1 : 1;
            });
        }

        const worker = this.workerPool[this.workerPool.length - 1];
        worker._taskCosts[taskID] = taskCost;
        worker._taskLoad += taskCost;
        return worker;
    }

    decodeGeometry(buffer, finishedCallback, errorCallback = null)
    {
        const taskID = this.workerNextTaskID++;
        const taskCost = buffer.byteLength;

        const worker = this._getWorker(taskID, taskCost);
        worker._callbacks[taskID] = { finishedCallback, errorCallback };
        worker.postMessage({ "type": "decode", "taskID": taskID, buffer }, [buffer]);
    }

    _releaseTask(worker, taskID)
    {
        worker._taskLoad -= worker._taskCosts[taskID];
        delete worker._callbacks[taskID];
        delete worker._taskCosts[taskID];
    }

    _DracoWorker()
    {
        let pendingDecoder;

        onmessage = function (e)
        {
            const message = e.data;
            switch (message.type)
            {
            case "init":
                const decoderConfig = message.decoderConfig;
                const moduleConfig = decoderConfig.decoderSettings;
                pendingDecoder = new Promise(function (resolve)
                {
                    moduleConfig.onModuleLoaded = function (draco)
                    {
                        // Module is Promise-like. Wrap before resolving to avoid loop.
                        resolve({ "draco": draco });
                    };
                    moduleConfig.wasmBinary = decoderConfig.wasm;
                    DracoDecoderModule(moduleConfig); // eslint-disable-line no-undef
                });
                break;
            case "decode":
                pendingDecoder.then((module) =>
                {
                    const draco = module.draco;

                    const f = new draco.Decoder();
                    const dataBuff = new Int8Array(message.buffer);

                    const geometryType = f.GetEncodedGeometryType(dataBuff);
                    const buffer = new draco.DecoderBuffer();
                    buffer.Init(dataBuff, dataBuff.byteLength);

                    let outputGeometry = new draco.Mesh();
                    const status = f.DecodeBufferToMesh(buffer, outputGeometry);
                    const attribute = f.GetAttributeByUniqueId(outputGeometry, 1);
                    const geometry = dracoAttributes(draco, f, outputGeometry, geometryType, name);

                    this.postMessage({ "type": "done", "taskID": message.taskID, "geometry": geometry });

                    draco.destroy(f);
                    draco.destroy(buffer);
                });
                break;
            }
        };

        let dracoAttributes = function (draco, decoder, dracoGeometry, geometryType, name)
        {
            const attributeIDs = {
                "position": draco.POSITION,
                "normal": draco.NORMAL,
                "color": draco.COLOR,
                "uv": draco.TEX_COORD,
                "joints": draco.GENERIC,
                "weights": draco.GENERIC,
            };
            const attributeTypes = {
                "position": "Float32Array",
                "normal": "Float32Array",
                "color": "Float32Array",
                "weights": "Float32Array",
                "joints": "Uint8Array",
                "uv": "Float32Array"
            };

            const geometry = {
                "index": null,
                "attributes": []
            };

            let count = 0;
            for (const attributeName in attributeIDs)
            {
                const attributeType = attributeTypes[attributeName];
                let attributeID = decoder.GetAttributeId(dracoGeometry, attributeIDs[attributeName]);

                count++;
                if (attributeID != -1)
                {
                    let attribute = decoder.GetAttribute(dracoGeometry, attributeID);
                    geometry.attributes.push(decodeAttribute(draco, decoder, dracoGeometry, attributeName, attributeType, attribute));
                }
            }

            if (geometryType === draco.TRIANGULAR_MESH) geometry.index = decodeIndex(draco, decoder, dracoGeometry);
            else op.warn("unknown draco geometryType", geometryType);

            draco.destroy(dracoGeometry);
            return geometry;
        };

        let decodeIndex = function (draco, decoder, dracoGeometry)
        {
            const numFaces = dracoGeometry.num_faces();
            const numIndices = numFaces * 3;
            const byteLength = numIndices * 4;
            const ptr = draco._malloc(byteLength);

            decoder.GetTrianglesUInt32Array(dracoGeometry, byteLength, ptr);
            const index = new Uint32Array(draco.HEAPF32.buffer, ptr, numIndices).slice();

            draco._free(ptr);

            return {
                "array": index,
                "itemSize": 1
            };
        };

        let decodeAttribute = function (draco, decoder, dracoGeometry, attributeName, attributeType, attribute)
        {
            let bytesPerElement = 4;
            if (attributeType === "Float32Array") bytesPerElement = 4;
            else if (attributeType === "Uint8Array") bytesPerElement = 1;
            else op.warn("unknown attrtype bytesPerElement", attributeType);

            const numComponents = attribute.num_components();
            const numPoints = dracoGeometry.num_points();
            const numValues = numPoints * numComponents;
            const byteLength = numValues * bytesPerElement;
            const dataType = getDracoDataType(draco, attributeType);
            const ptr = draco._malloc(byteLength);
            let array = null;

            decoder.GetAttributeDataArrayForAllPoints(dracoGeometry, attribute, dataType, byteLength, ptr);

            if (attributeType === "Float32Array") array = new Float32Array(draco.HEAPF32.buffer, ptr, numValues).slice();
            else if (attributeType === "Uint8Array") array = new Uint8Array(draco.HEAPF32.buffer, ptr, numValues).slice();
            else op.warn("unknown attrtype", attributeType);

            draco._free(ptr);

            return {
                "name": attributeName,
                "array": array,
                "itemSize": numComponents
            };
        };

        let getDracoDataType = function (draco, attributeType)
        {
            switch (attributeType)
            {
            case "Float32Array": return draco.DT_FLOAT32;
            case "Int8Array": return draco.DT_INT8;
            case "Int16Array": return draco.DT_INT16;
            case "Int32Array": return draco.DT_INT32;
            case "Uint8Array": return draco.DT_UINT8;
            case "Uint16Array": return draco.DT_UINT16;
            case "Uint32Array": return draco.DT_UINT32;
            }
        };
    }
}

window.DracoDecoder = new DracoDecoderClass();


};

Ops.Gl.GLTF.GltfDracoCompression.prototype = new CABLES.Op();
CABLES.OPS["4ecdc2ef-a242-4548-ad74-13f617119a64"]={f:Ops.Gl.GLTF.GltfDracoCompression,objName:"Ops.Gl.GLTF.GltfDracoCompression"};




// **************************************************************
// 
// Ops.Vars.VarSetObject_v2
// 
// **************************************************************

Ops.Vars.VarSetObject_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const val = op.inObject("Value", null);
op.varName = op.inDropDown("Variable", [], "", true);

new CABLES.VarSetOpWrapper(op, "object", val, op.varName);


};

Ops.Vars.VarSetObject_v2.prototype = new CABLES.Op();
CABLES.OPS["c7608375-5b45-4bca-87ef-d0c5e970779a"]={f:Ops.Vars.VarSetObject_v2,objName:"Ops.Vars.VarSetObject_v2"};




// **************************************************************
// 
// Ops.Gl.Phong.LambertMaterial_v2
// 
// **************************************************************

Ops.Gl.Phong.LambertMaterial_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"lambert_frag":"{{MODULES_HEAD}}\n\n#define AMBIENT 0\n#define POINT 1\n#define DIRECTIONAL 2\n#define SPOT 3\n\nIN vec3 norm;\nIN vec4 modelPos;\n\n// UNI mat4 normalMatrix;\nIN mat3 normalMatrix; // when instancing...\n\nIN vec2 texCoord;\n\nIN vec3 mvNormal;\nIN vec3 mvTangent;\nIN vec3 mvBiTangent;\n\nUNI vec4 materialColor;//r,g,b,a;\n\nstruct Light {\n    vec3 position;\n    vec3 color;\n    // * SPOT LIGHT * //\n    #ifdef HAS_SPOT\n        vec3 conePointAt;\n        #define COSCONEANGLE x\n        #define COSCONEANGLEINNER y\n        #define SPOTEXPONENT z\n        vec3 spotProperties;\n    #endif\n\n    #define INTENSITY x\n    #define ATTENUATION y\n    #define FALLOFF z\n    #define RADIUS w\n    vec4 lightProperties;\n\n    int type;\n    int castLight;\n    #define CASTLIGHT x\n    #define TYPE y\n    ivec2 castLightType;\n};\n#ifdef HAS_TEXTURES\n    #ifdef HAS_TEXTURE_DIFFUSE\n        UNI sampler2D texDiffuse;\n    #endif\n#endif\n\nUNI Light lights[NUM_LIGHTS];\n\n// * UTILITY FUNCTIONS */\nfloat when_gt(float x, float y) { return max(sign(x - y), 0.0); } // comparator function\nfloat when_eq(float x, float y) { return 1. - abs(sign(x - y)); } // comparator function\nfloat when_neq(float x, float y) { return abs(sign(x - y)); } // comparator function\n\n\n// * LIGHT CALCULATIONS */\nfloat CalculateFalloff(float radius, float falloff, float distLight)\n{\n    float denom = distLight / radius + 1.0;\n    float attenuation = 1.0 / (denom*denom);\n    float t = (attenuation - 0.1) / (1.0 - 0.1);\n\n    t = t * (20.0 * (1. - falloff) * 20.0 * (1. - falloff));\n\n    return min(1.0,max(t, 0.0));\n}\n\nfloat Falloff2(vec3 lightDirection, float falloff) {\n    float distanceSquared = dot(lightDirection, lightDirection);\n    float factor = distanceSquared * falloff;\n    float smoothFactor = clamp(1. - factor * factor, 0., 1.);\n    float attenuation = smoothFactor * smoothFactor;\n\n    return attenuation * 1. / max(distanceSquared, 0.00001);\n}\n\n#ifdef HAS_SPOT\n    float CalculateSpotLightEffect(vec3 lightPosition, vec3 conePointAt, float cosConeAngle, float cosConeAngleInner, float spotExponent, vec3 lightDirection) {\n        vec3 spotLightDirection = normalize(lightPosition-conePointAt);\n        float spotAngle = dot(-lightDirection, spotLightDirection);\n        float epsilon = cosConeAngle - cosConeAngleInner;\n\n        float spotIntensity = clamp((spotAngle - cosConeAngle)/epsilon, 0.0, 1.0);\n        spotIntensity = pow(spotIntensity, max(0.01, spotExponent));\n\n        return max(0., spotIntensity);\n    }\n#endif\nvec3 CalculateDiffuseColor(vec3 lightDirection, vec3 normal, vec3 lightColor, vec3 materialColor, inout float lambert) {\n    lambert = clamp(dot(lightDirection, normal), 0., 1.);\n    vec3 diffuseColor = lambert * lightColor * materialColor;\n    return diffuseColor;\n}\n\n\n// MAIN\nvoid main()\n{\n    {{MODULE_BEGIN_FRAG}}\n\n    vec4 col=vec4(0.0);\n    vec3 normal = normalize(mat3(normalMatrix)*norm);\n\n    #ifdef DOUBLE_SIDED\n        if(!gl_FrontFacing) normal = normal*-1.0;\n    #endif\n\n    vec3 matColor = materialColor.rgb;\n\n    #ifdef HAS_TEXTURES\n        #ifdef HAS_TEXTURE_DIFFUSE\n            matColor = texture(texDiffuse, texCoord).rgb;\n            #ifdef COLORIZE_TEXTURE\n                matColor *= materialColor.rgb;\n            #endif\n        #endif\n    #endif\n\n    for(int l=0;l<NUM_LIGHTS;l++) {\n        if (lights[l].castLightType.TYPE == AMBIENT) {\n            col.rgb += lights[l].lightProperties.INTENSITY * lights[l].color;\n        } else {\n            if (lights[l].castLightType.CASTLIGHT == 0) continue;\n\n            vec3 lightModelDiff= lights[l].position - modelPos.xyz;\n            vec3 lightDirection = normalize(lightModelDiff);\n\n            if (lights[l].castLightType.TYPE == DIRECTIONAL) lightDirection = lights[l].position;\n\n            float lambert = 1.; // inout variable\n            vec3 diffuseColor = CalculateDiffuseColor(lightDirection, normal, lights[l].color, matColor, lambert);\n\n            if (lights[l].castLightType.TYPE != DIRECTIONAL) diffuseColor *= Falloff2(lightDirection, lights[l].lightProperties.FALLOFF);\n\n            #ifdef HAS_SPOT\n                if (lights[l].castLightType.TYPE == SPOT) diffuseColor *= CalculateSpotLightEffect(\n                    lights[l].position, lights[l].conePointAt, lights[l].spotProperties.COSCONEANGLE,\n                    lights[l].spotProperties.COSCONEANGLEINNER, lights[l].spotProperties.SPOTEXPONENT,\n                    lightDirection\n                );\n            #endif\n\n            diffuseColor *= lights[l].lightProperties.INTENSITY;\n            col.rgb += diffuseColor;\n        }\n    }\n\n\n    col.a = materialColor.a;\n\n    {{MODULE_COLOR}}\n\n\n    outColor = col;\n}\n","lambert_vert":"#define TEX_REPEAT_X x;\n#define TEX_REPEAT_Y y;\n#define TEX_OFFSET_X z;\n#define TEX_OFFSET_Y w;\n\nIN vec3 vPosition;\nIN vec3 attrVertNormal;\nIN vec2 attrTexCoord;\n\nIN vec3 attrTangent;\nIN vec3 attrBiTangent;\nIN float attrVertIndex;\n\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\n\nOUT vec3 norm;\nOUT mat4 mvMatrix;\nOUT mat3 normalMatrix;\nOUT vec4 modelPos;\nOUT vec2 texCoord;\n{{MODULES_HEAD}}\n\nmat3 transposeMat3(mat3 m)\n{\n    return mat3(\n        m[0][0], m[1][0], m[2][0],\n        m[0][1], m[1][1], m[2][1],\n        m[0][2], m[1][2], m[2][2]);\n}\n\nmat3 inverseMat3(mat3 m)\n{\n    float a00 = m[0][0], a01 = m[0][1], a02 = m[0][2];\n    float a10 = m[1][0], a11 = m[1][1], a12 = m[1][2];\n    float a20 = m[2][0], a21 = m[2][1], a22 = m[2][2];\n\n    float b01 = a22 * a11 - a12 * a21;\n    float b11 = -a22 * a10 + a12 * a20;\n    float b21 = a21 * a10 - a11 * a20;\n\n    float det = a00 * b01 + a01 * b11 + a02 * b21;\n\n    return mat3(b01, (-a22 * a01 + a02 * a21), (a12 * a01 - a02 * a11),\n        b11, (a22 * a00 - a02 * a20), (-a12 * a00 + a02 * a10),\n        b21, (-a21 * a00 + a01 * a20), (a11 * a00 - a01 * a10)) / det;\n}\n\nvoid main()\n{\n    vec4 pos = vec4( vPosition, 1. );\n    mat4 mMatrix=modelMatrix;\n    vec3 tangent=attrTangent,\n        bitangent=attrBiTangent;\n\n    texCoord=attrTexCoord;\n    texCoord.y = 1. - texCoord.y;\n\n    norm=attrVertNormal;\n\n    {{MODULE_VERTEX_POSITION}}\n\n    normalMatrix = transposeMat3(inverseMat3(mat3(mMatrix)));\n\n\n    // this needs only to be done when instancing....\n\n    mat4 modelViewMatrix=viewMatrix*mMatrix;\n    {{MODULE_VERTEX_MODELVIEW}}\n    mvMatrix=modelViewMatrix;\n\n\n    modelPos=mMatrix*pos;\n\n    gl_Position = projMatrix * modelViewMatrix * pos;\n}\n",};
const LIGHT_TYPES = { "ambient": 0, "point": 1, "directional": 2, "spot": 3 };
const
    execute = op.inTrigger("Execute"),
    r = op.inValueSlider("Diffuse R", Math.random()),
    g = op.inValueSlider("Diffuse G", Math.random()),
    b = op.inValueSlider("Diffuse B", Math.random()),
    a = op.inValueSlider("Diffuse A", 1.0);

r.setUiAttribs({ "colorPick": true });
op.setPortGroup("Diffuse Color", [r, g, b, a]);
const inToggleDoubleSided = op.inBool("Double Sided", false);
inToggleDoubleSided.setUiAttribs({ "hidePort": true });
inToggleDoubleSided.onChange = function ()
{
    shader.toggleDefine("DOUBLE_SIDED", inToggleDoubleSided.get());
};
op.setPortGroup("Material Properties", [inToggleDoubleSided]);

op.toWorkPortsNeedToBeLinked(execute);
op.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose", CABLES.OP_PORT_TYPE_FUNCTION);

const inDiffuseTexture = op.inTexture("Diffuse Texture");
let diffuseTextureUniform = null;
const textureTransformsUniform = null;
inDiffuseTexture.onChange = updateDiffuseTexture;

// TEXTURE TRANSFORMS
const inColorizeTexture = op.inBool("Colorize Texture", false);
inColorizeTexture.onChange = function ()
{
    shader.toggleDefine("COLORIZE_TEXTURE", inColorizeTexture.get());
};

op.setPortGroup("Texture", [
    inDiffuseTexture,
    inColorizeTexture
]);

let oldCount = 0;

const next = op.outTrigger("next");
const cgl = op.patch.cgl;
const shader = new CGL.Shader(cgl, "LambertMaterial");
shader.define("NUM_LIGHTS", "1");

const colUni = new CGL.Uniform(shader, "4f", "materialColor", r, g, b, a);

shader.uniformColorDiffuse = colUni;

const outShader = op.outObject("Shader");
outShader.set(shader);

const MAX_UNIFORM_FRAGMENTS = cgl.maxUniformsFrag;
const MAX_LIGHTS = MAX_UNIFORM_FRAGMENTS === 64 ? 6 : 16;
const iViewMatrix = mat4.create();

shader.setSource(attachments.lambert_vert, attachments.lambert_frag);

shader.define("MAX_LIGHTS", MAX_LIGHTS.toString());

let defaultUniform = null;
const lightUniforms = [];
const hasLight = {
    "directional": false,
    "spot": false,
    "ambient": false,
    "point": false,
};

const DEFAULT_LIGHTSTACK = [
    {
        "type": "point",
        "position": [0, 2, 1],
        "intensity": 1,
        "attenuation": 0,
        "falloff": 0.5,
        "radius": 80,
        "castLight": 1,
    }];

updateDiffuseTexture();

function updateDiffuseTexture()
{
    if (inDiffuseTexture.get())
    {
        if (!shader.hasDefine("HAS_TEXTURE_DIFFUSE"))
        {
            shader.define("HAS_TEXTURE_DIFFUSE");
            if (!diffuseTextureUniform) diffuseTextureUniform = new CGL.Uniform(shader, "t", "texDiffuse", 0);
        }
    }
    else
    {
        shader.removeUniform("texDiffuse");
        shader.removeDefine("HAS_TEXTURE_DIFFUSE");
        diffuseTextureUniform = null;
    }
}

function createDefaultUniform()
{
    defaultUniform = {
        "color": new CGL.Uniform(shader, "3f", "lights[0].color", [1, 1, 1]),
        "position": new CGL.Uniform(shader, "3f", "lights[0].position", [0, 11, 0]),

        // intensity, attenuation, falloff, radius
        "lightProperties": new CGL.Uniform(shader, "4f", "lights[0].lightProperties", [1, 1, 1, 1]),

        "conePointAt": new CGL.Uniform(shader, "3f", "lights[0].conePointAt", vec3.create()),
        "spotProperties": new CGL.Uniform(shader, "3f", "lights[0].spotProperties", [0, 0, 0, 0]),

        "castLightType": new CGL.Uniform(shader, "2i", "lights[0].castLightType", [0, 0])
    };
}

function setDefaultUniform(light)
{
    shader.define("NUM_LIGHTS", "1");
    shader.removeDefine("HAS_SPOT");

    defaultUniform.position.setValue(light.position);
    defaultUniform.color.setValue(light.color);

    defaultUniform.lightProperties.setValue([
        light.intensity,
        light.attenuation,
        light.falloff,
        light.radius,
    ]);

    defaultUniform.castLightType.setValue([
        1,
        LIGHT_TYPES[light.type]
    ]);
    defaultUniform.conePointAt.setValue(light.conePointAt);
    defaultUniform.spotProperties.setValue([
        light.cosConeAngle,
        light.cosConeAngleInner,
        light.spotExponent,
    ]);
}

function createUniforms(lightStack)
{
    for (let i = 0; i < lightUniforms.length; i += 1) lightUniforms[i] = null;

    hasLight.directional = false;
    hasLight.spot = false;
    hasLight.ambient = false;
    hasLight.point = false;

    for (let i = 0; i < lightStack.length; i += 1)
    {
        if (i === MAX_LIGHTS) return;
        lightUniforms[i] = null;

        const light = lightStack[i];
        const type = light.type;

        if (!hasLight[type]) hasLight[type] = true;

        if (!lightUniforms[i])
        {
            lightUniforms[i] = {
                "color": new CGL.Uniform(shader, "3f", "lights[" + i + "].color", [1, 1, 1]),
                "position": new CGL.Uniform(shader, "3f", "lights[" + i + "].position", [0, 11, 0]),
                // intensity, attenuation, falloff, radius
                "lightProperties": new CGL.Uniform(shader, "4f", "lights[" + i + "].lightProperties", [1, 1, 1, 1]),
                "conePointAt": new CGL.Uniform(shader, "3f", "lights[" + i + "].conePointAt", vec3.create()),
                "spotProperties": new CGL.Uniform(shader, "3f", "lights[" + i + "].spotProperties", [0, 0, 0, 0]),
                "castLightType": new CGL.Uniform(shader, "2i", "lights[" + i + "].castLightType", [0, 0])
            };
        }
    }

    for (let i = 0, keys = Object.keys(hasLight); i < keys.length; i += 1)
    {
        const key = keys[i];

        shader.toggleDefine("HAS_" + key.toUpperCase(), hasLight[key]);
    }
}

function setUniforms(lightStack)
{
    for (let i = 0; i < lightStack.length; i += 1)
    {
        const light = lightStack[i];
        light.isUsed = true; // this property is used to set UI warnings in the lights

        lightUniforms[i].position.setValue(light.position);
        lightUniforms[i].color.setValue(light.color);

        lightUniforms[i].lightProperties.setValue([
            light.intensity,
            light.attenuation,
            light.falloff,
            light.radius,
        ]);

        lightUniforms[i].conePointAt.setValue(light.conePointAt);
        lightUniforms[i].spotProperties.setValue([
            light.cosConeAngle,
            light.cosConeAngleInner,
            light.spotExponent,
        ]);

        lightUniforms[i].castLightType.setValue([
            Number(light.castLight),
            LIGHT_TYPES[light.type]
        ]);
    }
}

function compareLights(lightStack)
{
    if (lightStack.length !== oldCount)
    {
        createUniforms(lightStack);
        oldCount = lightStack.length;
        shader.define("NUM_LIGHTS", "" + Math.max(oldCount, 1));
        setUniforms(lightStack);
    }
    else
    {
        setUniforms(lightStack);
    }
}

function updateLights()
{
    if ((!cgl.frameStore.lightStack || !cgl.frameStore.lightStack.length))
    {
        // if no light in light stack, use default light & set count to -1
        // so when a new light gets added, the shader does recompile
        if (!defaultUniform) createDefaultUniform();

        mat4.invert(iViewMatrix, cgl.vMatrix);
        // set default light position to camera position
        DEFAULT_LIGHTSTACK[0].position = [iViewMatrix[12], iViewMatrix[13], iViewMatrix[14]];

        setDefaultUniform(DEFAULT_LIGHTSTACK[0]);
        oldCount = -1;
    }
    else
    {
        if (shader)
        {
            if (cgl.frameStore.lightStack)
            {
                if (cgl.frameStore.lightStack.length)
                {
                    defaultUniform = null;
                    compareLights(cgl.frameStore.lightStack);
                }
            }
        }
    }
}

execute.onTriggered = function ()
{
    if (!shader)
    {
        op.log("lambert has no shader...");
        return;
    }
    if (cgl.frameStore.lightStack)
    {
        if (cgl.frameStore.lightStack.length === 0) op.setUiError("deflight", "Default light is enabled. Please add lights to your patch to make this warning disappear.", 1);
        else op.setUiError("deflight", null);
    }
    cgl.pushShader(shader);
    shader.popTextures();
    updateLights();
    if (inDiffuseTexture.get()) shader.pushTexture(diffuseTextureUniform, inDiffuseTexture.get().tex);

    next.trigger();
    cgl.popShader();
};


};

Ops.Gl.Phong.LambertMaterial_v2.prototype = new CABLES.Op();
CABLES.OPS["d69316f1-bde9-4645-8280-c635a8982e0d"]={f:Ops.Gl.Phong.LambertMaterial_v2,objName:"Ops.Gl.Phong.LambertMaterial_v2"};




// **************************************************************
// 
// Ops.Math.OneMinus
// 
// **************************************************************

Ops.Math.OneMinus = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inValue = op.inValue("Value"),
    result = op.outNumber("Result");

inValue.onChange = update;
update();

function update()
{
    result.set(1 - inValue.get());
}


};

Ops.Math.OneMinus.prototype = new CABLES.Op();
CABLES.OPS["f34d019d-59ae-40d6-a55d-a7691bbc40e0"]={f:Ops.Math.OneMinus,objName:"Ops.Math.OneMinus"};




// **************************************************************
// 
// Ops.Gl.GLTF.GltfTransformNode
// 
// **************************************************************

Ops.Gl.GLTF.GltfTransformNode = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inExec = op.inTrigger("Render"),
    inNodeName = op.inString("Node Name"),
    inPosX = op.inFloat("Translate X", 0),
    inPosY = op.inFloat("Translate Y", 0),
    inPosZ = op.inFloat("Translate Z", 0),
    inRotX = op.inFloat("Rotation X", 0),
    inRotY = op.inFloat("Rotation Y", 0),
    inRotZ = op.inFloat("Rotation Z", 0),
    next = op.outTrigger("Next"),
    outFound = op.outBool("Found");

const cgl = op.patch.cgl;

let q = quat.create();
let mat = mat4.create();
let qmat = mat4.create();

let node = null;
let currentSceneLoaded = null;

inNodeName.onChange = function ()
{
    node = null;
    outFound.set(false);
    op.setUiAttrib({ "extendTitle": inNodeName.get() });
};

op.onDelete = function ()
{
    // todo restore orig values!
};

inExec.onTriggered = function ()
{
    if (!cgl.frameStore.currentScene) return;
    if (currentSceneLoaded != cgl.frameStore.currentScene.loaded) node = null;

    if (!node)
    {
        const name = inNodeName.get();

        if (!cgl.frameStore || !cgl.frameStore.currentScene || !cgl.frameStore.currentScene.nodes) return;

        currentSceneLoaded = cgl.frameStore.currentScene.loaded;

        for (let i = 0; i < cgl.frameStore.currentScene.nodes.length; i++)
        {
            if (cgl.frameStore.currentScene.nodes[i].name == name)
            {
                node = cgl.frameStore.currentScene.nodes[i];
                outFound.set(true);
            }
        }
    }

    if (node)
    {
        mat4.identity(mat);
        mat4.translate(mat, mat, [inPosX.get(), inPosY.get(), inPosZ.get()]);

        mat4.rotateX(mat, mat, inRotX.get());
        mat4.rotateY(mat, mat, inRotY.get());
        mat4.rotateZ(mat, mat, inRotZ.get());

        node.addMulMat = mat;
    }

    next.trigger();
};


};

Ops.Gl.GLTF.GltfTransformNode.prototype = new CABLES.Op();
CABLES.OPS["bccdb19d-6786-4656-90d7-e798346ea644"]={f:Ops.Gl.GLTF.GltfTransformNode,objName:"Ops.Gl.GLTF.GltfTransformNode"};




// **************************************************************
// 
// Ops.Array.GateArray_v2
// 
// **************************************************************

Ops.Array.GateArray_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    arrayIn = op.inArray("Array in"),
    passThrough = op.inValueBool("Pass Through", true),
    inIfNull = op.inSwitch("When False", ["keep last array", "null"], "keep last array"),
    arrayOut = op.outArray("Array Out");

let oldArr = null;

function copyArray(source)
{
    if (!source) return null;
    const dest = [];
    dest.length = source.length;
    for (let i = 0; i < source.length; i++)
        dest[i] = source[i];

    return dest;
}

inIfNull.onChange =
    arrayIn.onChange =
    passThrough.onChange =
    function ()
    {
        if (passThrough.get())
        {
            oldArr = copyArray(arrayIn.get());
            arrayOut.setRef(oldArr);
        }
        else
        {
            if (inIfNull.get() == "null") arrayOut.setRef(null);
        }
    };


};

Ops.Array.GateArray_v2.prototype = new CABLES.Op();
CABLES.OPS["e28a489c-46b6-4279-928c-6b0cbaaaae2a"]={f:Ops.Array.GateArray_v2,objName:"Ops.Array.GateArray_v2"};




// **************************************************************
// 
// Ops.Trigger.TriggerCounter
// 
// **************************************************************

Ops.Trigger.TriggerCounter = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTriggerButton("exe"),
    reset = op.inTriggerButton("reset"),
    trigger = op.outTrigger("trigger"),
    num = op.outNumber("timesTriggered");

op.toWorkPortsNeedToBeLinked(exe);

op.setUiAttrib({ "extendTitle": 0 });
let n = 0;

reset.onTriggered =
op.onLoaded =
    doReset;

exe.onTriggered = function ()
{
    n++;
    num.set(n);
    op.setUiAttrib({ "extendTitle": n });
    trigger.trigger();
};

function doReset()
{
    n = 0;
    op.setUiAttrib({ "extendTitle": n });
    num.set(n);
}


};

Ops.Trigger.TriggerCounter.prototype = new CABLES.Op();
CABLES.OPS["e640619f-235c-4543-bbf8-b358e0283180"]={f:Ops.Trigger.TriggerCounter,objName:"Ops.Trigger.TriggerCounter"};




// **************************************************************
// 
// Ops.Gl.Matrix.TranslateView
// 
// **************************************************************

Ops.Gl.Matrix.TranslateView = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render=op.inTrigger('render'),
    x=op.inValueFloat("x"),
    y=op.inValueFloat("y"),
    z=op.inValueFloat("z"),
    trigger=op.outTrigger('trigger');

const cgl=op.patch.cgl;
const vec=vec3.create();

render.onTriggered=function()
{
    vec3.set(vec, x.get(),y.get(),z.get());
    cgl.pushViewMatrix();
    mat4.translate(cgl.vMatrix,cgl.vMatrix, vec);
    trigger.trigger();
    cgl.popViewMatrix();
};


};

Ops.Gl.Matrix.TranslateView.prototype = new CABLES.Op();
CABLES.OPS["b15472e2-b895-4dde-95c3-239fa5e08afc"]={f:Ops.Gl.Matrix.TranslateView,objName:"Ops.Gl.Matrix.TranslateView"};




// **************************************************************
// 
// Ops.Gl.Meshes.HeightMap
// 
// **************************************************************

Ops.Gl.Meshes.HeightMap = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const render = op.inTrigger("render"),
    filename = op.inUrl("file"),
    extrude = op.inValueFloat("extrude", 1),
    mWidth = op.inValueFloat("width", 3),
    mHeight = op.inValueFloat("height", 3),
    nRows = op.inValueInt("rows", 20),
    nColumns = op.inValueInt("columns", 20),
    sliceTex = op.inValueBool("texCoords slice"),
    flat = op.inValueBool("flat"),
    trigger = op.outTrigger("trigger");

let outGeom = op.outObject("geometry");
outGeom.ignoreValueSerialize = true;

op.toWorkPortsNeedToBeLinked(render);

let geom = new CGL.Geometry(op.name);
let mesh = null;
let cgl = op.patch.cgl;
let image = new Image();

render.onTriggered = function ()
{
    if (!mesh)rebuildGeom();
    if (mesh) mesh.render(cgl.getShader());
    trigger.trigger();
};

extrude.onChange = mHeight.onChange = mWidth.onChange =
    nRows.onChange = nColumns.onChange = flat.onChange = () => { mesh = null; };

filename.onChange = reload;

function rebuildGeom()
{
    geom.clear();

    let verts = [];
    let tc = [];
    let indices = [];

    let width = image.width;
    let height = image.height;
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0);

    let meshWidth = mWidth.get();
    let meshHeight = mHeight.get();

    let count = 0;

    let vertStepX = meshWidth / width;
    let vertStepY = meshHeight / height;

    let numRows = parseFloat(nRows.get());
    let numColumns = parseFloat(nColumns.get());
    let rowStepX = numColumns ? width / numColumns : width;
    let rowStepY = numRows ? height / numRows : height;
    let heightMul = extrude.get() * 0.001;

    let stepRow = numRows ? meshWidth / numRows : meshWidth;
    let stepColumn = numColumns ? meshHeight / numColumns : meshHeight;

    let cycleTex = 0;
    let oldh = 0;

    for (var r = 0; r <= numRows; r++)
    {
        for (var c = 0; c <= numColumns; c++)
        {
            let h = ctx.getImageData(Math.round(c * rowStepX), Math.round(r * rowStepY), 1, 1).data[1] * heightMul;
            // verts.push( c*stepColumn    - meshWidth/2 );
            // verts.push( r*stepRow       - meshHeight/2 );
            verts.push(c * stepColumn);
            verts.push(r * stepRow);
            verts.push(h);

            if (sliceTex.get())
            {
                if (h != oldh)
                {
                    if (c % 2 == 0) tc.push(0.5);
                    else tc.push(1);

                    tc.push(1.0 - r / numRows);
                }
                else
                {
                    tc.push(1);
                    tc.push(0);
                }
                oldh = h;
            }
            else
            {
                tc.push(c / numColumns);
                tc.push(1.0 - r / numRows);
            }
        }
    }

    for (c = 0; c < numColumns; c++)
    {
        for (r = 0; r < numRows; r++)
        {
            let ind = c + (numColumns + 1) * r;
            let v1 = ind;
            let v2 = ind + 1;
            let v3 = ind + numColumns + 1;
            let v4 = ind + 1 + numColumns + 1;

            indices.push(v1);
            indices.push(v2);
            indices.push(v3);

            indices.push(v2);
            indices.push(v3);
            indices.push(v4);
        }
    }

    geom.vertices = verts;
    geom.texCoords = tc;
    geom.verticesIndices = indices;
    if (flat.get())geom.unIndex();
    geom.calculateNormals({ "forceZUp": true });

    if (!mesh) mesh = new CGL.Mesh(cgl, geom);
    mesh.setGeom(geom);
    outGeom.set(null);
    outGeom.set(geom);
}

function reload()
{
    image.crossOrigin = "";
    let url = op.patch.getFilePath(filename.get());

    let loadingId = op.patch.loading.start("heightmapImage", url, op);

    image.onabort = image.onerror = function (e)
    {
        op.patch.loading.finished(loadingId);
        op.log("error loading heightmap image...");
    };

    image.onload = function (e)
    {
        rebuildGeom();
        op.patch.loading.finished(loadingId);
    };
    image.src = url;
}


};

Ops.Gl.Meshes.HeightMap.prototype = new CABLES.Op();
CABLES.OPS["81264799-d92b-4b71-a3f1-ad1da8331e62"]={f:Ops.Gl.Meshes.HeightMap,objName:"Ops.Gl.Meshes.HeightMap"};




// **************************************************************
// 
// Ops.String.StringLength_v2
// 
// **************************************************************

Ops.String.StringLength_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inStr = op.inString("String"),
    result = op.outNumber("Result");

inStr.onChange = function ()
{
    if (!inStr.get()) result.set(0);
    else result.set(String(inStr.get()).length);
};


};

Ops.String.StringLength_v2.prototype = new CABLES.Op();
CABLES.OPS["aa47bb8b-d5d7-4175-b217-ab0157d3365d"]={f:Ops.String.StringLength_v2,objName:"Ops.String.StringLength_v2"};




// **************************************************************
// 
// Ops.Gl.Matrix.TransformMul
// 
// **************************************************************

Ops.Gl.Matrix.TransformMul = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const render=op.inTrigger("render");
const mul=op.inValueFloat("mul");
const trigger=op.outTrigger("trigger");

const cgl=op.patch.cgl;

render.onTriggered=function()
{
    var pos=[0,0,0];
    vec3.transformMat4(pos, [0,0,0], cgl.mMatrix);

    cgl.pushModelMatrix();
    vec3.mul(pos,pos,[mul.get(),mul.get(),mul.get()] );

    mat4.translate(cgl.mMatrix,cgl.mMatrix, pos );
    trigger.trigger();

    cgl.popModelMatrix();
};

};

Ops.Gl.Matrix.TransformMul.prototype = new CABLES.Op();
CABLES.OPS["2a83f565-7c5c-4cce-862f-d38481eb3726"]={f:Ops.Gl.Matrix.TransformMul,objName:"Ops.Gl.Matrix.TransformMul"};




// **************************************************************
// 
// Ops.Math.Max
// 
// **************************************************************

Ops.Math.Max = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    value = op.inValueFloat("value", 1),
    max = op.inValueFloat("Maximum", 1),
    result = op.outNumber("result");

max.onChange =
    value.onChange = exec;

exec();

function exec()
{
    let v = Math.max(value.get(), max.get());
    if (v == v) result.set(v);
}


};

Ops.Math.Max.prototype = new CABLES.Op();
CABLES.OPS["07f0be49-c226-4029-8039-3b620145dc2a"]={f:Ops.Math.Max,objName:"Ops.Math.Max"};




// **************************************************************
// 
// Ops.Gl.Meshes.LinesArray
// 
// **************************************************************

Ops.Gl.Meshes.LinesArray = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    width = op.inValueFloat("width", 10),
    height = op.inValueFloat("height", 1),
    doLog = op.inValueBool("Logarithmic", false),
    pivotX = op.inValueSelect("pivot x", ["center", "left", "right"], "center"),
    pivotY = op.inValueSelect("pivot y", ["center", "top", "bottom"], "center"),
    nColumns = op.inValueInt("num columns", 10),
    nRows = op.inValueInt("num rows", 10),
    axis = op.inValueSelect("axis", ["xy", "xz"], "xy"),
    trigger = op.outTrigger("trigger"),
    outPointArrays = op.outArray("Point Arrays");

const cgl = op.patch.cgl;
let meshes = [];

op.setPortGroup("Size", [width, height]);
op.setPortGroup("Alignment", [pivotX, pivotY]);

axis.onChange =
    pivotX.onChange =
    pivotY.onChange =
    width.onChange =
    height.onChange =
    nRows.onChange =
    nColumns.onChange =
    doLog.onChange = rebuildDelayed;

rebuild();

render.onTriggered = function ()
{
    for (let i = 0; i < meshes.length; i++) meshes[i].render(cgl.getShader());
    trigger.trigger();
};

let delayRebuild = 0;
function rebuildDelayed()
{
    clearTimeout(delayRebuild);
    delayRebuild = setTimeout(rebuild, 60);
}

function rebuild()
{
    let x = 0;
    let y = 0;

    if (pivotX.get() == "center") x = 0;
    if (pivotX.get() == "right") x = -width.get() / 2;
    if (pivotX.get() == "left") x = +width.get() / 2;

    if (pivotY.get() == "center") y = 0;
    if (pivotY.get() == "top") y = -height.get() / 2;
    if (pivotY.get() == "bottom") y = +height.get() / 2;

    let numRows = parseInt(nRows.get(), 10);
    let numColumns = parseInt(nColumns.get(), 10);

    let stepColumn = width.get() / numColumns;
    let stepRow = height.get() / numRows;

    let c, r;
    meshes.length = 0;

    let vx, vy, vz;
    let verts = [];
    let tc = [];
    let indices = [];
    let count = 0;

    function addMesh()
    {
        let geom = new CGL.Geometry(op.name);
        geom.vertices = verts;
        geom.texCoords = tc;
        geom.verticesIndices = indices;

        let mesh = new CGL.Mesh(cgl, geom, { "glPrimitive": cgl.gl.LINES });
        mesh.setGeom(geom);
        meshes.push(mesh);

        verts.length = 0;
        tc.length = 0;
        indices.length = 0;
        count = 0;
        lvx = null;
    }

    let min = Math.log(1 / numRows);
    let max = Math.log(1);
    // op.log(min,max);

    let lines = [];

    for (r = numRows; r >= 0; r--)
    {
        // op.log(r/numRows);
        var lvx = null, lvy = null, lvz = null;
        let ltx = null, lty = null;
        let log = 0;
        let doLoga = doLog.get();

        let linePoints = [];
        lines.push(linePoints);


        for (c = numColumns; c >= 0; c--)
        {
            vx = c * stepColumn - width.get() / 2 + x;
            if (doLoga)
                vy = (Math.log((r / numRows)) / min) * height.get() - height.get() / 2 + y;
            else
                vy = r * stepRow - height.get() / 2 + y;

            let tx = c / numColumns;
            let ty = 1.0 - r / numRows;
            if (doLoga) ty = (Math.log((r / numRows)) / min);

            vz = 0.0;

            if (axis.get() == "xz")
            {
                vz = vy;
                vy = 0.0;
            }
            if (axis.get() == "xy") vz = 0.0;

            if (lvx !== null)
            {
                verts.push(lvx);
                verts.push(lvy);
                verts.push(lvz);

                linePoints.push(lvx, lvy, lvz);

                verts.push(vx);
                verts.push(vy);
                verts.push(vz);

                tc.push(ltx);
                tc.push(lty);

                tc.push(tx);
                tc.push(ty);

                indices.push(count);
                count++;
                indices.push(count);
                count++;
            }

            if (count > 64000)
            {
                addMesh();
            }

            ltx = tx;
            lty = ty;

            lvx = vx;
            lvy = vy;
            lvz = vz;
        }
    }

    outPointArrays.set(lines);

    addMesh();

    // op.log(meshes.length,' meshes');
}


};

Ops.Gl.Meshes.LinesArray.prototype = new CABLES.Op();
CABLES.OPS["a75265c2-957b-4719-9d03-7bbf00ace364"]={f:Ops.Gl.Meshes.LinesArray,objName:"Ops.Gl.Meshes.LinesArray"};




// **************************************************************
// 
// Ops.Gl.Meshes.SplineMesh_v2
// 
// **************************************************************

Ops.Gl.Meshes.SplineMesh_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("Render"),
    inPoints = op.inArray("Points"),
    inHardEdges = op.inBool("Tesselate Edges", false),
    inRenderMesh = op.inBool("Render Mesh", true),
    next = op.outTrigger("Next");

const geom = new CGL.Geometry("splinemesh_2");
geom.vertices = [];
geom.clear();

let thePoints = [];
const cgl = op.patch.cgl;
let points = new Float32Array();
let points2 = new Float32Array();
let points3 = new Float32Array();
let doDraw = new Float32Array();
let splineIndex = null;

let pointsProgress = new Float32Array();
const pointsDoDraw = new Float32Array();
const arrEdges = [];

const verts = [0, 0, 0];

let mesh = new CGL.Mesh(cgl, geom);
mesh.addVertexNumbers = true;

let rebuildLater = true;

inHardEdges.onChange =
    inPoints.onChange = () => { rebuildLater = true; };

render.onTriggered = renderMesh;

let shader = null;

function renderMesh()
{
    if (rebuildLater)rebuild();
    if (mesh && inRenderMesh.get())
    {
        if (shader != cgl.getShader())
        {
            shader = cgl.getShader();
            if (!shader) return;
            if (shader.getName() != "splinemesh_material") op.setUiError("nosplinemat", "Splinemesh needs a SplineMeshMaterial!");
            else op.setUiError("nosplinemat");

            shader = cgl.getShader();
        }

        if (verts.length > 0) mesh.render(shader);
    }

    next.trigger();
}

function buildMesh()
{
    verts.length = 0;

    const max = 1;
    const min = -max;

    for (let i = 0; i < thePoints.length / 3; i++)
    {
        verts.push(
            max, min, 0, 0, min, 0, max, max, 0, 0, min, 0, 0, max, 0, max, max, 0
        );
    }
    geom.vertices = verts;

    // if(mesh)mesh.dispose();
    if (!mesh) mesh = new CGL.Mesh(cgl, geom);

    mesh.addVertexNumbers = true;
    mesh.setGeom(geom);
    mesh.addVertexNumbers = true;
}

function rebuild()
{
    const inpoints = inPoints.get();

    if (!inpoints || inpoints.length === 0)
    {
        mesh = null;
        return;
    }

    if (inpoints[0] && inpoints[0].length)
    {
        const arr = [];
        splineIndex = [];
        let count = 0;

        for (let i = 0; i < inpoints.length; i++)
        {
            for (let j = 0; j < inpoints[i].length / 3; j++)
            {
                splineIndex[(count - 3) / 3] = i;// (i) / inpoints.length;

                arr[count++] = inpoints[i][j * 3 + 0];
                arr[count++] = inpoints[i][j * 3 + 1];
                arr[count++] = inpoints[i][j * 3 + 2];
            }
        }
        thePoints = arr;
    }
    else
    {
        splineIndex = null;
        thePoints = inpoints;
    }

    if (inHardEdges.get()) thePoints = tessEdges(thePoints);

    buildMesh();

    const newLength = thePoints.length * 6;
    let count = 0;
    let lastIndex = 0;
    let drawable = 0;

    if (points.length != newLength)
    {
        points = new Float32Array(newLength);
        points2 = new Float32Array(newLength);
        points3 = new Float32Array(newLength);

        doDraw = new Float32Array(newLength / 3);
        pointsProgress = new Float32Array(newLength / 3);

        for (let i = 0; i < newLength / 3; i++) pointsProgress[i] = i / (newLength / 3);
    }

    for (let i = 0; i < thePoints.length / 3; i++)
    {
        if (splineIndex)
        {
            if (i > 1 && lastIndex != splineIndex[i]) drawable = 0.0;
            else drawable = 1.0;
            lastIndex = splineIndex[i];
        }
        else drawable = 1.0;

        for (let j = 0; j < 6; j++)
        {
            doDraw[count / 3] = drawable;

            for (let k = 0; k < 3; k++)
            {
                points[count] = thePoints[(Math.max(0, i - 1)) * 3 + k];
                points2[count] = thePoints[(i + 0) * 3 + k];
                points3[count] = thePoints[(i + 1) * 3 + k];
                count++;
            }
        }
    }

    mesh.setAttribute("spline", points, 3);
    mesh.setAttribute("spline2", points2, 3);
    mesh.setAttribute("spline3", points3, 3);
    mesh.setAttribute("splineDoDraw", doDraw, 1);
    mesh.setAttribute("splineProgress", pointsProgress, 1);

    rebuildLater = false;
}

function ip(a, b, p)
{
    return a + p * (b - a);
}

function tessEdges(oldArr)
{
    let count = 0;
    const step = 0.001;
    const oneMinusStep = 1 - step;
    const l = oldArr.length * 3 - 3;
    arrEdges.length = l;

    const tessSplineIndex = [];

    if (splineIndex) tessSplineIndex[0] = splineIndex[1];

    for (let i = 0; i < oldArr.length - 3; i += 3)
    {
        arrEdges[count++] = oldArr[i + 0];
        arrEdges[count++] = oldArr[i + 1];
        arrEdges[count++] = oldArr[i + 2];
        if (splineIndex) tessSplineIndex[count / 3] = splineIndex[i / 3];

        arrEdges[count++] = ip(oldArr[i + 0], oldArr[i + 3], step);
        arrEdges[count++] = ip(oldArr[i + 1], oldArr[i + 4], step);
        arrEdges[count++] = ip(oldArr[i + 2], oldArr[i + 5], step);
        if (splineIndex) tessSplineIndex[count / 3] = splineIndex[i / 3];

        arrEdges[count++] = ip(oldArr[i + 0], oldArr[i + 3], oneMinusStep);
        arrEdges[count++] = ip(oldArr[i + 1], oldArr[i + 4], oneMinusStep);
        arrEdges[count++] = ip(oldArr[i + 2], oldArr[i + 5], oneMinusStep);
        if (splineIndex) tessSplineIndex[count / 3] = splineIndex[i / 3];
    }

    if (splineIndex) splineIndex = tessSplineIndex;

    return arrEdges;
}


};

Ops.Gl.Meshes.SplineMesh_v2.prototype = new CABLES.Op();
CABLES.OPS["287abf6c-5501-4bc9-a627-70ec3c3766d2"]={f:Ops.Gl.Meshes.SplineMesh_v2,objName:"Ops.Gl.Meshes.SplineMesh_v2"};




// **************************************************************
// 
// Ops.Gl.Meshes.SplineMeshMaterial_v2
// 
// **************************************************************

Ops.Gl.Meshes.SplineMeshMaterial_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"splinemat_frag":"IN vec2 texCoord;\nIN float splineDoDrawFrag;\nUNI vec4 color;\nUNI sampler2D tex;\nUNI sampler2D texMask;\n\n{{MODULES_HEAD}}\n\nvoid main()\n{\n    vec4 col=color;\n\n    #ifdef USE_TEXTURE\n        #ifdef TEX_COLORIZE\n            col*=texture(tex,texCoord);\n        #endif\n        #ifndef TEX_COLORIZE\n            col=texture(tex,texCoord);\n        #endif\n    #endif\n\n    col.a=color.a;\n\n    #ifdef USE_TEXMASK\n        col.a*=texture(texMask,texCoord).r;\n        if(col.a==0.0) discard;\n    #endif\n\n    {{MODULE_COLOR}}\n\n    // if(splineDoDrawFrag==0.0) col.rgb=vec3(1.0,0.0,0.0);\n    if(splineDoDrawFrag==0.0) discard;\n\n    outColor = col;\n}","splinemat_vert":"{{MODULES_HEAD}}\n\nIN vec3 vPosition;\nIN float attrVertIndex;\nIN float splineProgress;\nIN vec3 spline,spline2,spline3;\nIN float splineDoDraw;\n\nOUT float splineDoDrawFrag;\nOUT vec2 texCoord;\nOUT vec3 norm;\nUNI mat4 projMatrix;\nUNI mat4 viewMatrix;\nUNI mat4 modelMatrix;\n\nUNI float width;\nUNI float texOffset;\nUNI float aspect;\n\n#define PI 3.1415926538\n\nvec2 rotate(vec2 v, float a)\n{\n\tfloat s = sin(a);\n\tfloat c = cos(a);\n\tmat2 m = mat2(c, -s, s, c);\n\treturn m * v;\n}\n\nvec2 fix( vec4 i )\n{\n    vec2 res = i.xy / i.w;\n    return res;\n}\n\nvoid main()\n{\n    texCoord=vPosition.xy;\n    texCoord.y=texCoord.y*0.5+0.5;\n    #ifdef TEX_MAP_FULL\n        texCoord.x=splineProgress;\n    #endif\n    texCoord.x+=texOffset;\n\n    mat4 mMatrix=modelMatrix;\n    mat4 mvMatrix=viewMatrix * mMatrix;\n\n    splineDoDrawFrag=splineDoDraw;\n\n    // vec4 pos=vec4((spline2+spline3+spline)/3.0*vPosition,1.0);\n    vec4 pos=vec4(spline2,1.0);\n\n    {{MODULE_VERTEX_POSITION}}\n\n    vec4 finalPosition  = projMatrix * mvMatrix * (vec4(spline2,1.0));\n    vec4 finalPosition2 = projMatrix * mvMatrix * (vec4(spline3,1.0));\n\n    vec2 screenPos =fix(projMatrix * mvMatrix * vec4(spline,1.0));\n    vec2 screenPos2=fix(projMatrix * mvMatrix * vec4(spline2,1.0));\n    vec2 screenPos3=fix(projMatrix * mvMatrix * vec4(spline3,1.0));\n\n    float wid=width/10.0;\n\n    #ifndef PERSPWIDTH\n        wid=width*finalPosition.w*0.0025;\n    #endif\n\n    vec2 dir1 = normalize( screenPos2 - screenPos );\n    vec2 dir2 = normalize( screenPos3 - screenPos2 );\n\n\tif( screenPos2 == screenPos ) dir1 = normalize( screenPos3 - screenPos2 );\n\n    vec2 normal = vec2( -dir1.y/aspect, dir1.x ) * 0.5 * wid;\n    vec2 normal2 = vec2( -dir2.y/aspect, dir2.x ) * 0.5 * wid;\n\n    vec4 offset = vec4( mix(normal,normal2,vPosition.x) * vPosition.y, 0.0, 1.0 );\n\n    finalPosition = mix(finalPosition,finalPosition2,vPosition.x);\n\tfinalPosition.xy += offset.xy;\n\n    gl_Position = finalPosition;\n}\n",};
const
    render = op.inTrigger("Render"),
    inWidth = op.inFloat("Width", 0.2),
    inPerspective = op.inBool("Width Perspective", true),
    inTexture = op.inTexture("Texture"),
    inTextureMask = op.inTexture("Texture Mask"),
    inTexMap = op.inSwitch("Mapping", ["Full", "Face"], "Full"),
    inTexColorize = op.inBool("Colorize Texture", false),
    inTexOffset = op.inFloat("Offset", 0),
    r = op.inValueSlider("r", Math.random()),
    g = op.inValueSlider("g", Math.random()),
    b = op.inValueSlider("b", Math.random()),
    a = op.inValueSlider("a", 1),
    trigger = op.outTrigger("Trigger"),
    shaderOut = op.outObject("Shader");

r.setUiAttribs({ "colorPick": true });
shaderOut.ignoreValueSerialize = true;

const cgl = op.patch.cgl;

op.toWorkPortsNeedToBeLinked(render);
op.setPortGroup("Color", [r, g, b, a]);
op.setPortGroup("Texture", [inTexture, inTexMap, inTexColorize]);

const shader = new CGL.Shader(cgl, "splinemesh_material", this);
shader.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG"]);
shader.setSource(attachments.splinemat_vert, attachments.splinemat_frag);
shaderOut.set(shader);

const uniTex = shader.addUniformFrag("t", "tex");
const uniTexMask = shader.addUniformFrag("t", "texMask");

let aspect = 1.7777;

shader.addUniformFrag("4f", "color", r, g, b, a);
shader.addUniformFrag("f", "width", inWidth);
shader.addUniformFrag("f", "texOffset", inTexOffset);
shader.addUniformFrag("f", "aspect", aspect);
shader.toggleDefine("PERSPWIDTH", inPerspective);
shader.toggleDefine("USE_TEXTURE", inTexture);
shader.toggleDefine("TEX_COLORIZE", inTexColorize);
shader.toggleDefine("USE_TEXMASK", inTextureMask);

inTexMap.on("change", updateMapping);

render.onTriggered = doRender;
updateMapping();

function doRender()
{
    if (!shader) return;

    const vp = op.patch.cgl.getViewPort();
    const newAspect = vp[2] / vp[3];
    if (newAspect != aspect)
    {
        aspect = newAspect;
        shader.addUniformFrag("f", "aspect", aspect);
    }

    cgl.pushShader(shader);
    shader.popTextures();

    if (uniTex && inTexture.get()) shader.pushTexture(uniTex, inTexture.get().tex);
    if (uniTexMask && inTextureMask.get()) shader.pushTexture(uniTexMask, inTextureMask.get().tex);

    trigger.trigger();

    cgl.popShader();
}

function updateMapping()
{
    shader.toggleDefine("TEX_MAP_FULL", inTexMap.get() === "Full");
}


};

Ops.Gl.Meshes.SplineMeshMaterial_v2.prototype = new CABLES.Op();
CABLES.OPS["5ff7c643-cbea-44cc-9f34-fb18a44bcfff"]={f:Ops.Gl.Meshes.SplineMeshMaterial_v2,objName:"Ops.Gl.Meshes.SplineMeshMaterial_v2"};




// **************************************************************
// 
// Ops.Boolean.BoolToNumber_v2
// 
// **************************************************************

Ops.Boolean.BoolToNumber_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    useValue1Port = op.inBool("Use Value 1", false),
    value0port = op.inFloat("Value 0", 0),
    value1port = op.inFloat("Value 1", 1),
    outValuePort = op.outNumber("Out Value", 0);

value0port.onChange =
    value1port.onChange =
    useValue1Port.onChange = setOutput;

function setOutput()
{
    const useValue1 = useValue1Port.get();

    if (useValue1)
    {
        outValuePort.set(value1port.get());
    }
    else
    {
        outValuePort.set(value0port.get());
    }
}


};

Ops.Boolean.BoolToNumber_v2.prototype = new CABLES.Op();
CABLES.OPS["400eea7d-5a68-4dda-a94d-2bb2ee7c2331"]={f:Ops.Boolean.BoolToNumber_v2,objName:"Ops.Boolean.BoolToNumber_v2"};




// **************************************************************
// 
// Ops.Gl.ImageCompose.FastBlur_v2
// 
// **************************************************************

Ops.Gl.ImageCompose.FastBlur_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"blur_frag":"\nUNI sampler2D tex;\n#ifdef USE_MASK\n    UNI sampler2D texMask;\n#endif\nUNI float amount;\nUNI float pass;\n\nIN vec2 texCoord;\n\nUNI float dirX;\nUNI float dirY;\nUNI float width;\nUNI float height;\n\nIN vec2 coord0;\nIN vec2 coord1;\nIN vec2 coord2;\nIN vec2 coord3;\nIN vec2 coord4;\nIN vec2 coord5;\nIN vec2 coord6;\n\n#ifdef HAS_MASK\n    UNI sampler2D imageMask;\n#endif\n\nvoid main()\n{\n    vec4 color = vec4(0.0);\n\n    #ifdef USE_MASK\n        #ifdef MASK_INVERT\n            if(texture(texMask,texCoord).r<0.5)\n            {\n                outColor= texture(tex, texCoord);\n                return;\n            }\n        #endif\n\n        #ifndef MASK_INVERT\n            if(texture(texMask,texCoord).r>0.5)\n            {\n                outColor= texture(tex, texCoord);\n                return;\n            }\n        #endif\n    #endif\n\n    color += texture(tex, coord0) * 0.06927096443792478;\n    color += texture(tex, coord1) * 0.1383328848652136;\n    color += texture(tex, coord2) * 0.21920904690397863;\n    color += texture(tex, coord3) * 0.14637421;\n    color += texture(tex, coord4) * 0.21920904690397863;\n    color += texture(tex, coord5) * 0.1383328848652136;\n    color += texture(tex, coord6) * 0.06927096443795711;\n\n    outColor= color;\n}","blur_vert":"\nIN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\nOUT vec2 texCoord;\nOUT vec3 norm;\nUNI mat4 projMatrix;\nUNI mat4 mvMatrix;\nUNI mat4 modelMatrix;\n\nUNI float pass;\nUNI float dirX;\nUNI float dirY;\nUNI float width;\nUNI float height;\n\nOUT vec2 coord0;\nOUT vec2 coord1;\nOUT vec2 coord2;\nOUT vec2 coord3;\nOUT vec2 coord4;\nOUT vec2 coord5;\nOUT vec2 coord6;\n\nvoid main()\n{\n    texCoord=attrTexCoord;\n    norm=attrVertNormal;\n    vec4 pos=vec4(vPosition,  1.0);\n    {{MODULE_VERTEX_POSITION}}\n\n    vec2 dir=vec2(dirX,dirY);\n    vec2 res=vec2( (1.) / width , (1.) / height )*dir;\n\n    coord3= attrTexCoord;\n\n    coord0= attrTexCoord + (-3.0368997744118595 * res);\n    coord1= attrTexCoord + (-2.089778445362373 * res);\n    coord2= attrTexCoord + (-1.2004366090034069 * res);\n    coord4= attrTexCoord + (1.2004366090034069 * res);\n    coord5= attrTexCoord + (2.089778445362373* res);\n    coord6= attrTexCoord + (3.0368997744118595 * res);\n\n    #ifdef CLAMP\n        coord0=clamp(coord0,0.0,1.0);\n        coord1=clamp(coord1,0.0,1.0);\n        coord2=clamp(coord2,0.0,1.0);\n        coord3=clamp(coord3,0.0,1.0);\n        coord4=clamp(coord4,0.0,1.0);\n        coord5=clamp(coord5,0.0,1.0);\n        coord6=clamp(coord6,0.0,1.0);\n    #endif\n\n    gl_Position = projMatrix * mvMatrix * pos;\n}\n",};
// http://dev.theomader.com/gaussian-kernel-calculator/
// http://rastergrid.com/blog/2010/09/efficient-gaussian-blur-with-linear-sampling/

const
    render = op.inTrigger("render"),
    trigger = op.outTrigger("trigger"),
    inPasses = op.inFloat("Passes", 3),
    clamp = op.inBool("Clamp", false),
    direction = op.inDropDown("direction", ["both", "vertical", "horizontal"], "both"),
    mask = op.inTexture("Mask"),
    maskInvert = op.inBool("Mask Invert", false);

const cgl = op.patch.cgl;
const shader = new CGL.Shader(cgl, "fastblur");

op.setPortGroup("Mask", [mask, maskInvert]);

shader.setSource(attachments.blur_vert, attachments.blur_frag);
const
    textureUniform = new CGL.Uniform(shader, "t", "tex", 0),
    uniDirX = new CGL.Uniform(shader, "f", "dirX", 0),
    uniDirY = new CGL.Uniform(shader, "f", "dirY", 0),
    uniWidth = new CGL.Uniform(shader, "f", "width", 0),
    uniHeight = new CGL.Uniform(shader, "f", "height", 0),
    uniPass = new CGL.Uniform(shader, "f", "pass", 0),
    uniAmount = new CGL.Uniform(shader, "f", "amount", inPasses.get()),
    textureAlpha = new CGL.Uniform(shader, "t", "texMask", 1);

inPasses.onChange = () => { uniAmount.setValue(inPasses.get()); };

let dir = 0;
direction.onChange = () =>
{
    if (direction.get() == "both") dir = 0;
    if (direction.get() == "horizontal") dir = 1;
    if (direction.get() == "vertical") dir = 2;
};

clamp.onChange = () => { shader.toggleDefine("CLAMP", clamp.get()); };

maskInvert.onChange =
    mask.onChange = updateDefines;
updateDefines();

function updateDefines()
{
    shader.toggleDefine("USE_MASK", mask.isLinked());
    shader.toggleDefine("MASK_INVERT", maskInvert.get());

    maskInvert.setUiAttribs({ "greyout": !mask.isLinked() });
}

render.onTriggered = function ()
{
    if (!CGL.TextureEffect.checkOpInEffect(op, 3)) return;

    uniWidth.setValue(cgl.currentTextureEffect.getCurrentSourceTexture().width);
    uniHeight.setValue(cgl.currentTextureEffect.getCurrentSourceTexture().height);
    const numPasses = inPasses.get();

    if (mask.get())cgl.setTexture(1, mask.get().tex);

    for (let i = 0; i < numPasses; i++)
    {
        cgl.pushShader(shader);

        uniPass.setValue(i / numPasses);

        // first pass
        if (dir === 0 || dir == 2)
        {
            cgl.currentTextureEffect.bind();
            cgl.setTexture(0, cgl.currentTextureEffect.getCurrentSourceTexture().tex);

            uniDirX.setValue(0.0);
            uniDirY.setValue(1.0 + (i * i));

            cgl.currentTextureEffect.finish();
        }

        // second pass
        if (dir === 0 || dir == 1)
        {
            cgl.currentTextureEffect.bind();
            cgl.setTexture(0, cgl.currentTextureEffect.getCurrentSourceTexture().tex);

            uniDirX.setValue(1.0 + (i * i));
            uniDirY.setValue(0.0);

            cgl.currentTextureEffect.finish();
        }

        cgl.popShader();
    }

    trigger.trigger();
};


};

Ops.Gl.ImageCompose.FastBlur_v2.prototype = new CABLES.Op();
CABLES.OPS["61ed277f-d096-43b2-9de8-dc87fb3a9169"]={f:Ops.Gl.ImageCompose.FastBlur_v2,objName:"Ops.Gl.ImageCompose.FastBlur_v2"};




// **************************************************************
// 
// Ops.Math.Ceil
// 
// **************************************************************

Ops.Math.Ceil = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const number1 = op.inValue("Number");
const result = op.outNumber("Result");

function exec()
{
    result.set(Math.ceil(number1.get()));
}

number1.onChange = exec;


};

Ops.Math.Ceil.prototype = new CABLES.Op();
CABLES.OPS["15ba7aa9-b1c3-4b20-b6bf-b52a3ba8c8c5"]={f:Ops.Math.Ceil,objName:"Ops.Math.Ceil"};




// **************************************************************
// 
// Ops.Graphics.GeometryMergeSimple
// 
// **************************************************************

Ops.Graphics.GeometryMergeSimple = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inGeom = op.inObject("Geometry"),
    inGeom2 = op.inObject("Geometry 2"),
    outGeom = op.outObject("Geometry Result");

op.toWorkPortsNeedToBeLinked(inGeom);

let geom = new CGL.Geometry(op.name);
outGeom.set(geom);

inGeom.onChange =
inGeom2.onChange =
function ()
{
    if (inGeom.get() || inGeom2.get())
    {
        geom = new CGL.Geometry(op.name);
        if (inGeom.get())
        {
            geom = inGeom.get().copy();
        }
        if (inGeom2.get())geom.merge(inGeom2.get());
        outGeom.set(null);
        outGeom.set(geom);
    }
};


};

Ops.Graphics.GeometryMergeSimple.prototype = new CABLES.Op();
CABLES.OPS["e9a6c398-b6f2-4c53-a7ea-47aa835c6938"]={f:Ops.Graphics.GeometryMergeSimple,objName:"Ops.Graphics.GeometryMergeSimple"};




// **************************************************************
// 
// Ops.Gl.ImageCompose.Waveform_v3
// 
// **************************************************************

Ops.Gl.ImageCompose.Waveform_v3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"wave_v2_frag":"IN vec2 texCoord;\nUNI sampler2D tex;\nUNI sampler2D tex1;\nUNI float amount;\n\nUNI float r;\nUNI float g;\nUNI float b;\n\nUNI float uAmp;\nUNI float uFreq;\nUNI float uWidth;\nUNI float uGlow;\nUNI float uWaveSelect;\nUNI bool uInvert;\nUNI bool uSolid;\n\nUNI float uOffSetX;\nUNI float uOffSetY;\nUNI float uRotate;\n\n{{CGL.BLENDMODES3}}\n\n#define PI 3.14159265359\n#define TAU (2.0*PI)\n\nfloat vmax(vec2 v)\n{\n\treturn max(v.x, v.y);\n}\n\nvoid pR(inout vec2 p, float a)\n{\n    float s = sin(a),c=cos(a); p *= mat2(c,s,-s,c);\n}\n\nfloat pMod1(inout float p, float size)\n{\n\tfloat halfsize = size * 0.5;\n\tfloat c = floor((p + halfsize) / size);\n\tp = mod(p + halfsize, size) - halfsize;\n\treturn c;\n}\n\nfloat pModMirror1(inout float p, float size)\n{\n\tfloat halfsize = size * 0.5;\n\tfloat c = floor((p + halfsize) / size);\n\tp = mod(p + halfsize,size) - halfsize;\n\tp *= mod(c, 2.0) * 2.0 - 1.0;\n\treturn c;\n}\n\nfloat fCapsule2D(vec2 p, float r, float c)\n{\n\treturn mix(abs(p.x) - r, length(vec2(p.x, abs(p.y) - c)) - r, step(c, abs(p.y)));\n}\n\nfloat SineWave(vec2 p, float amplitude, float frequency, float line_width, float line_glow, bool solid)\n{\n    float v = sin(p.x * frequency * PI);\n    v *= amplitude;\n\n    float d = 0.0;\n\n    if (solid == false)\n    {\n        d = abs(v * amplitude - p.y * 0.5);\n        d -= line_width;\n        return smoothstep(0.0, line_glow, d);\n    }\n    else\n    {\n        d = v * amplitude - p.y * 0.5;\n        d -= -line_width;\n        return smoothstep(0.0, line_glow, -d);\n    }\n}\n\nfloat SawWave(vec2 p, float amplitude, float frequency, float line_width, float line_glow, bool solid)\n{\n    float inverse_frequency = 2.0 / frequency;\n    vec2 p1 = p;\n    pMod1(p1.x, inverse_frequency);\n\n    float d1 = fCapsule2D(p1, 0.0, amplitude);\n    p.x += inverse_frequency * 0.5;\n    pMod1(p.x, inverse_frequency);\n    pR(p, atan(inverse_frequency, amplitude * 2.0));\n\n    float d = fCapsule2D(p, 0.0, 0.5 * length(vec2(inverse_frequency, 2.0 * amplitude)));\n\td = min(d, d1);\n    d -= line_width;\n\n    if(solid == false)\n    {\n        return smoothstep(0.0, line_glow, d);\n    }\n    else\n        return smoothstep(0.0, line_glow, min(d,p.x));\n}\n\nfloat TriangleWave(vec2 p, float amplitude, float frequency, float line_width, float line_glow, bool solid)\n{\n    float inverse_frequency = 1.0 / frequency;\n    p.x -= inverse_frequency;\n    pModMirror1(p.x, inverse_frequency);\n    pR(p, atan(inverse_frequency, amplitude * 2.0));\n\n    float d = fCapsule2D(p, 0.0, 0.5 * length(vec2(inverse_frequency, 2.0 * amplitude)));\n    d -= line_width;\n\n    if (solid == false)\n    {\n        return smoothstep(0.0, line_glow, d);\n    }\n    else\n        return smoothstep(0.0, line_glow, min(d,p.x));\n}\n\nfloat SquareWave(vec2 p, float amplitude, float frequency, float line_width, float line_glow, bool solid)\n{\n    float inverse_frequency = 0.5 / frequency;\n    vec2 p1 = p;\n    pMod1(p1.x, 2.0 * inverse_frequency);\n\n    float d1 = fCapsule2D(p1, 0.0, abs(amplitude));\n    p.x -= inverse_frequency * 0.5;\n    float cell = pMod1(p.x, inverse_frequency);\n\n    if(cell < 0.0) cell = -cell + 1.0;\n    if(int(cell * 0.5) % 2 == 1) p.y -= amplitude;\n        else p.y += amplitude;\n\n    float d = fCapsule2D(p.yx, 0.0, abs(inverse_frequency));\n    d = min(d, d1);\n    d -= line_width;\n\n    if (solid == false)\n    {\n        return smoothstep(0.0, line_glow, d);\n    }\n    else\n        return smoothstep(0.0, line_glow, p.y);\n}\n\nvoid main()\n{\n    vec4 rgb = vec4(r,g,b,1.0);\n\tvec2 uv = texCoord;\n\n    uv -= 0.5;\n    pR(uv.xy,uRotate * TAU);\n    uv += 0.5;\n\n    float wave = 0.0;\n    #ifdef SINE\n        wave = 1.0 - SineWave     (uv - vec2(uOffSetX,uOffSetY), uAmp,  uFreq , uWidth, uGlow, uSolid);\n    #endif\n    #ifdef SAWTOOTH\n        wave = 1.0 - SawWave      (uv - vec2(uOffSetX,uOffSetY), uAmp,  uFreq, uWidth, uGlow, uSolid);\n    #endif\n    #ifdef TRIANGLE\n        wave = 1.0 - TriangleWave (uv - vec2(uOffSetX,uOffSetY), uAmp,  uFreq, uWidth, uGlow, uSolid);\n    #endif\n    #ifdef SQUARE\n        wave = 1.0 - SquareWave   (uv - vec2(uOffSetX,uOffSetY), uAmp,  uFreq, uWidth, uGlow, uSolid);\n    #endif\n\n    #ifdef INVERT\n        wave = 1.0-wave;\n    #endif\n\n    vec4 col = vec4(r,g,b,1.0);\n\n    vec4 base=texture(tex,texCoord);\n\n    outColor=cgl_blendPixel(base,col,wave*amount);\n}\n",};
const
    render = op.inTrigger("render"),
    blendMode = CGL.TextureEffect.AddBlendSelect(op, "Blend Mode", "normal"),
    amount = op.inValueSlider("Amount", 1),
    maskAlpha = CGL.TextureEffect.AddBlendAlphaMask(op),
    waveSelect = op.inValueSelect("Waveform", ["Sine", "Sawtooth", "Triangle", "Square"], "Sine"),
    amplitude = op.inValueSlider("Amplitude", 0.5),
    frequency = op.inFloat("Frequency", 2.0),
    lineWidth = op.inValueSlider("Line Width", 0.1),
    lineGlow = op.inValueSlider("Line Glow", 0.1),
    invertCol = op.inValueBool("invert color", false),
    solidFill = op.inValueBool("Solid fill", false),
    offsetX = op.inValueSlider("Offset X", 0.0),
    offsetY = op.inValueSlider("Offset Y", 0.5),
    rotate = op.inValueSlider("Rotate", 0.0),
    r = op.inValueSlider("r", 1.0),
    g = op.inValueSlider("g", 1.0),
    b = op.inValueSlider("b", 1.0);

const trigger = op.outTrigger("trigger");

r.setUiAttribs({ "colorPick": true });

const cgl = op.patch.cgl;
const shader = new CGL.Shader(cgl, op.name, op);

shader.setSource(shader.getDefaultVertexShader(), attachments.wave_v2_frag);

const textureUniform = new CGL.Uniform(shader, "t", "tex", 0),
    amountUniform = new CGL.Uniform(shader, "f", "amount", amount),
    uniformR = new CGL.Uniform(shader, "f", "r", r),
    uniformG = new CGL.Uniform(shader, "f", "g", g),
    uniformB = new CGL.Uniform(shader, "f", "b", b),
    amplitudeUniform = new CGL.Uniform(shader, "f", "uAmp", amplitude),
    frequencyUniform = new CGL.Uniform(shader, "f", "uFreq", frequency),
    lineWidthUniform = new CGL.Uniform(shader, "f", "uWidth", lineWidth),
    lineGlowUniform = new CGL.Uniform(shader, "f", "uGlow", lineGlow),
    waveSelectUniform = new CGL.Uniform(shader, "f", "uWaveSelect", 1),
    invertUniform = new CGL.Uniform(shader, "b", "uInvert", invertCol),
    solidFillUniform = new CGL.Uniform(shader, "b", "uSolid", solidFill),
    offSetXUniform = new CGL.Uniform(shader, "f", "uOffSetX", offsetX),
    offSetYUniform = new CGL.Uniform(shader, "f", "uOffSetY", offsetY),
    rotateUniform = new CGL.Uniform(shader, "f", "uRotate", rotate);

waveSelect.onChange = invertCol.onChange = updateDefines;
updateDefines();

function updateDefines()
{
    shader.toggleDefine("SINE", waveSelect.get() == "Sine");
    shader.toggleDefine("SAWTOOTH", waveSelect.get() == "Sawtooth");
    shader.toggleDefine("TRIANGLE", waveSelect.get() == "Triangle");
    shader.toggleDefine("SQUARE", waveSelect.get() == "Square");
    shader.toggleDefine("INVERT", invertCol.get());
}

CGL.TextureEffect.setupBlending(op, shader, blendMode, amount, maskAlpha);

render.onTriggered = function ()
{
    if (!CGL.TextureEffect.checkOpInEffect(op, 3)) return;

    cgl.pushShader(shader);
    cgl.currentTextureEffect.bind();

    cgl.setTexture(0, cgl.currentTextureEffect.getCurrentSourceTexture().tex);

    cgl.currentTextureEffect.finish();
    cgl.popShader();

    trigger.trigger();
};


};

Ops.Gl.ImageCompose.Waveform_v3.prototype = new CABLES.Op();
CABLES.OPS["fce7d8bc-5a2e-49b8-8f55-8ab8784493d5"]={f:Ops.Gl.ImageCompose.Waveform_v3,objName:"Ops.Gl.ImageCompose.Waveform_v3"};




// **************************************************************
// 
// Ops.Math.SmoothStep_v2
// 
// **************************************************************

Ops.Math.SmoothStep_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    result = op.outNumber("result"),
    number = op.inValueFloat("number", 0),
    min = op.inValueFloat("min", 0),
    max = op.inValueFloat("max", 1);

number.onChange = max.onChange = min.onChange = exec;
exec();

function exec()
{
    let x = Math.max(0, Math.min(1, (number.get() - min.get()) / (max.get() - min.get())));
    result.set(x * x * (3 - 2) * (max.get() - min.get())); // smoothstep
}


};

Ops.Math.SmoothStep_v2.prototype = new CABLES.Op();
CABLES.OPS["b5c41eea-ac30-4ac7-9481-eefe42e8199c"]={f:Ops.Math.SmoothStep_v2,objName:"Ops.Math.SmoothStep_v2"};




// **************************************************************
// 
// Ops.Gl.ImageCompose.RotateTexture_v2
// 
// **************************************************************

Ops.Gl.ImageCompose.RotateTexture_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"rotate_frag":"IN vec2 texCoord;\nUNI sampler2D tex;\nUNI sampler2D multiplierTex;\nUNI float amount;\nUNI float resX;\nUNI float resY;\nUNI float rotate;\n\n{{CGL.BLENDMODES3}}\n\n#define PI 3.14159265\n#define TAU (2.0*PI)\n\nvoid pR(inout vec2 p, float a)\n{\n\tp = cos(a)*p + sin(a)*vec2(p.y, -p.x);\n}\n\nvoid main()\n{\n    float multiplier = 0.0;\n\n    #ifdef ROTATE_TEXTURE\n        multiplier = dot(vec3(0.2126,0.7152,0.0722), texture(multiplierTex,texCoord).rgb);\n    #endif\n\n    vec2 uv = texCoord;\n    vec2 res = vec2(resX,resY);\n    uv -= 0.5;\n    pR(uv.xy,(rotate + multiplier) * (TAU)  );\n    uv += 0.5;\n\n\n\n    vec4 col=texture(tex,uv);\n    vec4 base=texture(tex,texCoord);\n\n    #ifdef CLEAR\n        base.a=0.0;\n    #endif\n\n\n    #ifdef CROP_IMAGE\n    if(uv.x>1.0 ||uv.x<0.0  || uv.y>1.0 ||uv.y<0.0 )\n    {\n        base.a=0.0;\n        col.a=0.0;\n        // discard;\n        // return;\n    }\n    #endif\n\n    outColor=cgl_blendPixel(base,col,amount);\n}",};
const render = op.inTrigger("render"),
    multiplierTex = op.inTexture("Multiplier"),
    blendMode = CGL.TextureEffect.AddBlendSelect(op, "Blend Mode", "normal"),
    amount = op.inValueSlider("Amount", 1),
    inRotate = op.inValueSlider("Rotate", 0.125),
    crop = op.inValueBool("Crop", true),
    inClear = op.inBool("Clear", true),
    trigger = op.outTrigger("trigger");

const cgl = op.patch.cgl;
const shader = new CGL.Shader(cgl, op.name, op);

shader.setSource(shader.getDefaultVertexShader(), attachments.rotate_frag);

const
    textureUniform = new CGL.Uniform(shader, "t", "tex", 0),
    textureMultiplierUniform = new CGL.Uniform(shader, "t", "multiplierTex", 1),
    amountUniform = new CGL.Uniform(shader, "f", "amount", amount),
    rotateUniform = new CGL.Uniform(shader, "f", "rotate", inRotate);

CGL.TextureEffect.setupBlending(op, shader, blendMode, amount);

crop.onChange =
    multiplierTex.onChange = updateDefines;

updateDefines();

function updateDefines()
{
    shader.toggleDefine("CLEAR", inClear.get());
    shader.toggleDefine("CROP_IMAGE", crop.get());
    shader.toggleDefine("ROTATE_TEXTURE", multiplierTex.isLinked());
}

render.onTriggered = function ()
{
    if (!CGL.TextureEffect.checkOpInEffect(op, 3)) return;

    cgl.pushShader(shader);
    cgl.currentTextureEffect.bind();

    cgl.setTexture(0, cgl.currentTextureEffect.getCurrentSourceTexture().tex);

    if (multiplierTex.get()) cgl.setTexture(1, multiplierTex.get().tex);

    cgl.currentTextureEffect.finish();
    cgl.popShader();

    trigger.trigger();
};


};

Ops.Gl.ImageCompose.RotateTexture_v2.prototype = new CABLES.Op();
CABLES.OPS["20b8a2e6-2419-474b-98a4-71a5e3178631"]={f:Ops.Gl.ImageCompose.RotateTexture_v2,objName:"Ops.Gl.ImageCompose.RotateTexture_v2"};




// **************************************************************
// 
// Ops.Vars.VarSetTexture_v2
// 
// **************************************************************

Ops.Vars.VarSetTexture_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const val = op.inTexture("Value", null);
op.varName = op.inDropDown("Variable", [], "", true);

new CABLES.VarSetOpWrapper(op, "object", val, op.varName);


};

Ops.Vars.VarSetTexture_v2.prototype = new CABLES.Op();
CABLES.OPS["4fbfc71e-1429-439f-8591-ad35961252ed"]={f:Ops.Vars.VarSetTexture_v2,objName:"Ops.Vars.VarSetTexture_v2"};




// **************************************************************
// 
// Ops.Gl.ImageCompose.SkewStretchImage_v2
// 
// **************************************************************

Ops.Gl.ImageCompose.SkewStretchImage_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"invert_frag":"IN vec2 texCoord;\nUNI sampler2D tex;\nUNI float amount;\nUNI float stretchTopX;\nUNI float stretchBotX;\nUNI float stretchLeft;\nUNI float stretchRight;\n\n{{CGL.BLENDMODES3}}\n\nvoid main()\n{\n    vec4 col=vec4(1.0,0.0,0.0,1.0);\n\n    vec2 tc=texCoord;\n\n    #ifdef SMOOTHSTEP\n        tc.y=smoothstep(0.,1.,tc.y);\n        tc.x=smoothstep(0.,1.,tc.x);\n    #endif\n\n    vec2 tcnorm=texCoord;\n\n    tcnorm-=0.5;\n    tcnorm*=2.0;\n\n    tcnorm.x=mix(tcnorm.x*stretchBotX,tcnorm.x,tc.y);\n    tcnorm.x=mix(tcnorm.x*stretchTopX,tcnorm.x,1.0-tc.y);\n\n    tcnorm.y=mix(tcnorm.y*stretchLeft,tcnorm.y,tc.x);\n    tcnorm.y=mix(tcnorm.y*stretchRight,tcnorm.y,1.0-tc.x);\n\n    tc=tcnorm/2.0+0.5;\n\n    col=texture(tex,tc);\n\n    #ifdef CLAMP\n        if(tc.x<0.0 || tc.x>1.0 || tc.y<0.0 || tc.y>1.0) col=vec4(0.0,0.0,0.0,0.0);\n    #endif\n\n    vec4 base=texture(tex,texCoord);\n    base.a=0.0;\n\n    outColor=cgl_blendPixel(base,col,amount);\n}\n",};
const
    render = op.inTrigger("render"),
    blendMode = CGL.TextureEffect.AddBlendSelect(op, "Blend Mode", "normal"),
    amount = op.inValueSlider("Amount", 1),
    inClamp = op.inBool("Clamp", true),
    trigger = op.outTrigger("trigger");

const cgl = op.patch.cgl;
const shader = new CGL.Shader(cgl, "skewstrechimage");
shader.setSource(shader.getDefaultVertexShader(), attachments.invert_frag);

const textureUniform = new CGL.Uniform(shader, "t", "tex", 0);
const amountUniform = new CGL.Uniform(shader, "f", "amount", amount);

shader.addUniformFrag("f", "stretchTopX", op.inFloat("Stretch Top", 1));
shader.addUniformFrag("f", "stretchBotX", op.inFloat("Stretch Bottom", 1));
shader.addUniformFrag("f", "stretchLeft", op.inFloat("Stretch Left", 1));
shader.addUniformFrag("f", "stretchRight", op.inFloat("Stretch Right", 1));

CGL.TextureEffect.setupBlending(op, shader, blendMode, amount);

inClamp.onChange = updateDefines;

updateDefines();

function updateDefines()
{
    shader.toggleDefine("CLAMP", inClamp.get());
}

render.onTriggered = function ()
{
    if (!CGL.TextureEffect.checkOpInEffect(op, 3)) return;

    cgl.pushShader(shader);
    cgl.currentTextureEffect.bind();

    cgl.setTexture(0, cgl.currentTextureEffect.getCurrentSourceTexture().tex);

    cgl.currentTextureEffect.finish();
    cgl.popShader();

    trigger.trigger();
};


};

Ops.Gl.ImageCompose.SkewStretchImage_v2.prototype = new CABLES.Op();
CABLES.OPS["665bbc0c-2fd7-4683-a1df-e57d8f17da93"]={f:Ops.Gl.ImageCompose.SkewStretchImage_v2,objName:"Ops.Gl.ImageCompose.SkewStretchImage_v2"};




// **************************************************************
// 
// Ops.Gl.ImageCompose.Mix
// 
// **************************************************************

Ops.Gl.ImageCompose.Mix = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"mix_frag":"IN vec2 texCoord;\nUNI sampler2D tex;\nUNI sampler2D tex1;\nUNI sampler2D tex2;\nUNI float fade;\n\nvoid main()\n{\n    vec4 col=texture(tex,texCoord);\n    vec4 col1=texture(tex1,texCoord);\n    vec4 col2=texture(tex2,texCoord);\n\n    col=mix(col1,col2,fade);\n\n    outColor= col;\n}\n",};
const
    render = op.inTrigger("Render"),
    inTex2 = op.inTexture("Texture 1"),
    inFade = op.inFloatSlider("Fade", 0),
    inTex1 = op.inTexture("Texture 2"),
    trigger = op.outTrigger("trigger");

const cgl = op.patch.cgl;
const shader = new CGL.Shader(cgl, op.name, op);

shader.setSource(shader.getDefaultVertexShader(), attachments.mix_frag);
const
    texUni = new CGL.Uniform(shader, "t", "tex1", 0),
    tex1Uni = new CGL.Uniform(shader, "t", "tex1", 1),
    tex2Uni = new CGL.Uniform(shader, "t", "tex2", 2),
    uniFade = new CGL.Uniform(shader, "f", "fade", inFade);

inTex1.onLinkChanged =
inTex2.onLinkChanged =
    updateDefines;

updateDefines();

function updateDefines()
{
    // shader.toggleDefine("MOD_MASK", inTexMask.get());

    // shader.toggleDefine("MOD_OP_SUB_CX", inOp.get() === "c-x");
    // shader.toggleDefine("MOD_OP_SUB_XC", inOp.get() === "x-c");

    // shader.toggleDefine("MOD_OP_ADD", inOp.get() === "c+x");
    // shader.toggleDefine("MOD_OP_MUL", inOp.get() === "c*x");

    // shader.toggleDefine("MOD_OP_DIV_XC", inOp.get() === "x/c");
    // shader.toggleDefine("MOD_OP_DIV_CX", inOp.get() === "c/x");

    // shader.toggleDefine("MOD_OP_MODULO", inOp.get() === "c%x");
    // shader.toggleDefine("MOD_OP_DISTANCE", inOp.get() === "dist");
}

render.onTriggered = function ()
{
    if (!CGL.TextureEffect.checkOpInEffect(op)) return;

    cgl.pushShader(shader);
    cgl.currentTextureEffect.bind();

    cgl.setTexture(0, cgl.currentTextureEffect.getCurrentSourceTexture().tex);
    if (inTex1.get())cgl.setTexture(1, inTex1.get().tex);
    if (inTex2.get())cgl.setTexture(2, inTex2.get().tex);

    cgl.currentTextureEffect.finish();
    cgl.popShader();

    trigger.trigger();
};


};

Ops.Gl.ImageCompose.Mix.prototype = new CABLES.Op();
CABLES.OPS["dbd68d4d-60ff-427f-8a76-c931fb8bb59b"]={f:Ops.Gl.ImageCompose.Mix,objName:"Ops.Gl.ImageCompose.Mix"};




// **************************************************************
// 
// Ops.Gl.ImageCompose.Vignette_v3
// 
// **************************************************************

Ops.Gl.ImageCompose.Vignette_v3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"vignette_frag":"IN vec2 texCoord;\nUNI sampler2D tex;\nUNI float lensRadius1;\nUNI float aspect;\nUNI float amount;\nUNI float strength;\nUNI float sharp;\n\nUNI vec3 vcol;\n\n{{CGL.BLENDMODES3}}\n\nvoid main()\n{\n    vec4 base=texture(tex,texCoord);\n    vec4 vvcol=vec4(vcol,1.0);\n    vec4 col=texture(tex,texCoord);\n    vec2 tcPos=vec2(texCoord.x,(texCoord.y-0.5)*aspect+0.5);\n    float dist = distance(tcPos, vec2(0.5,0.5));\n    float am = (1.0-smoothstep( (lensRadius1+0.5), (lensRadius1*0.99+0.5)*sharp, dist));\n\n    col=mix(col,vvcol,am*strength);\n\n    #ifndef ALPHA\n        outColor=cgl_blendPixel(base,col,amount);\n    #endif\n\n    #ifdef ALPHA\n        outColor=vec4(base.rgb,base.a*(1.0-am*strength));\n    #endif\n}\n",};
const
    render = op.inTrigger("Render"),
    blendMode = CGL.TextureEffect.AddBlendSelect(op, "Blend Mode", "normal"),
    maskAlpha = CGL.TextureEffect.AddBlendAlphaMask(op),
    amount = op.inValueSlider("Amount", 1),
    trigger = op.outTrigger("Trigger"),
    strength = op.inValueSlider("Strength", 1),
    lensRadius1 = op.inValueSlider("Radius", 0.3),
    sharp = op.inValueSlider("Sharp", 0.25),
    aspect = op.inValue("Aspect", 1),
    r = op.inValueSlider("r", 0),
    g = op.inValueSlider("g", 0),
    b = op.inValueSlider("b", 0),
    alpha = op.inBool("Alpha", false);

r.setUiAttribs({ "colorPick": true });

const cgl = op.patch.cgl;
const shader = new CGL.Shader(cgl, "vignette");

shader.setSource(shader.getDefaultVertexShader(), attachments.vignette_frag);

const
    textureUniform = new CGL.Uniform(shader, "t", "tex", 0),
    amountUniform = new CGL.Uniform(shader, "f", "amount", amount),
    uniLensRadius1 = new CGL.Uniform(shader, "f", "lensRadius1", lensRadius1),
    uniaspect = new CGL.Uniform(shader, "f", "aspect", aspect),
    unistrength = new CGL.Uniform(shader, "f", "strength", strength),
    unisharp = new CGL.Uniform(shader, "f", "sharp", sharp),
    unir = new CGL.Uniform(shader, "3f", "vcol", r, g, b);

CGL.TextureEffect.setupBlending(op, shader, blendMode, amount, maskAlpha);

alpha.onChange = updateDefines;
updateDefines();

function updateDefines()
{
    shader.toggleDefine("ALPHA", alpha.get());

    r.setUiAttribs({ "greyout": alpha.get() });
    g.setUiAttribs({ "greyout": alpha.get() });
    b.setUiAttribs({ "greyout": alpha.get() });
}

render.onTriggered = function ()
{
    if (!CGL.TextureEffect.checkOpInEffect(op, 3)) return;

    cgl.pushShader(shader);
    cgl.currentTextureEffect.bind();

    cgl.setTexture(0, cgl.currentTextureEffect.getCurrentSourceTexture().tex);

    cgl.currentTextureEffect.finish();
    cgl.popShader();

    trigger.trigger();
};


};

Ops.Gl.ImageCompose.Vignette_v3.prototype = new CABLES.Op();
CABLES.OPS["588302cb-f5a7-4129-90d2-ba66212d69e5"]={f:Ops.Gl.ImageCompose.Vignette_v3,objName:"Ops.Gl.ImageCompose.Vignette_v3"};




// **************************************************************
// 
// Ops.Number.TriggerOnChangeNumber
// 
// **************************************************************

Ops.Number.TriggerOnChangeNumber = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inval = op.inFloat("Value"),
    next = op.outTrigger("Next"),
    number = op.outNumber("Number");

inval.onChange = function ()
{
    number.set(inval.get());
    next.trigger();
};


};

Ops.Number.TriggerOnChangeNumber.prototype = new CABLES.Op();
CABLES.OPS["f5c8c433-ce13-49c4-9a33-74e98f110ed0"]={f:Ops.Number.TriggerOnChangeNumber,objName:"Ops.Number.TriggerOnChangeNumber"};




// **************************************************************
// 
// Ops.Devices.Keyboard.KeyPressLearn
// 
// **************************************************************

Ops.Devices.Keyboard.KeyPressLearn = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const learnedKeyCode = op.inValueInt("key code");
const canvasOnly = op.inValueBool("canvas only", true);
const modKey = op.inValueSelect("Mod Key", ["none", "alt"], "none");
const inEnable = op.inValueBool("Enabled", true);
const preventDefault = op.inValueBool("Prevent Default");
const learn = op.inTriggerButton("learn");
const onPress = op.outTrigger("on press");
const onRelease = op.outTrigger("on release");
const outPressed = op.outBoolNum("Pressed", false);
const outKey = op.outString("Key");

const cgl = op.patch.cgl;
let learning = false;

modKey.onChange = learnedKeyCode.onChange = updateKeyName;

function onKeyDown(e)
{
    if (learning)
    {
        learnedKeyCode.set(e.keyCode);
        if (CABLES.UI)
        {
            op.refreshParams();
        }
        // op.log("Learned key code: " + learnedKeyCode.get());
        learning = false;
        removeListeners();
        addListener();

        if (CABLES.UI)gui.emitEvent("portValueEdited", op, learnedKeyCode, learnedKeyCode.get());
    }
    else
    {
        if (e.keyCode == learnedKeyCode.get())
        {
            if (modKey.get() == "alt")
            {
                if (e.altKey === true)
                {
                    onPress.trigger();
                    outPressed.set(true);
                    if (preventDefault.get())e.preventDefault();
                }
            }
            else
            {
                onPress.trigger();
                outPressed.set(true);
                if (preventDefault.get())e.preventDefault();
            }
        }
    }
}

function onKeyUp(e)
{
    if (e.keyCode == learnedKeyCode.get())
    {
        let doTrigger = true;
        if (modKey.get() == "alt" && e.altKey != true) doTrigger = false;

        if (doTrigger)
        {
            onRelease.trigger();
            outPressed.set(false);
        }
    }
}

op.onDelete = function ()
{
    cgl.canvas.removeEventListener("keyup", onKeyUp, false);
    cgl.canvas.removeEventListener("keydown", onKeyDown, false);
    document.removeEventListener("keyup", onKeyUp, false);
    document.removeEventListener("keydown", onKeyDown, false);
};

learn.onTriggered = function ()
{
    // op.log("Listening for key...");
    learning = true;
    addDocumentListener();

    setTimeout(function ()
    {
        learning = false;
        removeListeners();
        addListener();
    }, 3000);
};

function addListener()
{
    if (canvasOnly.get()) addCanvasListener();
    else addDocumentListener();
}

function removeListeners()
{
    document.removeEventListener("keydown", onKeyDown, false);
    document.removeEventListener("keyup", onKeyUp, false);
    cgl.canvas.removeEventListener("keydown", onKeyDown, false);
    cgl.canvas.removeEventListener("keyup", onKeyUp, false);
    outPressed.set(false);
}

function addCanvasListener()
{
    if (!CABLES.UTILS.isNumeric(cgl.canvas.getAttribute("tabindex"))) cgl.canvas.setAttribute("tabindex", 1);

    cgl.canvas.addEventListener("keydown", onKeyDown, false);
    cgl.canvas.addEventListener("keyup", onKeyUp, false);
}

function addDocumentListener()
{
    document.addEventListener("keydown", onKeyDown, false);
    document.addEventListener("keyup", onKeyUp, false);
}

inEnable.onChange = function ()
{
    if (!inEnable.get())
    {
        removeListeners();
    }
    else
    {
        addListener();
    }
};

canvasOnly.onChange = function ()
{
    removeListeners();
    addListener();
};

function updateKeyName()
{
    let keyName = CABLES.keyCodeToName(learnedKeyCode.get());
    const modKeyName = modKey.get();
    if (modKeyName && modKeyName !== "none")
    {
        keyName = modKeyName.charAt(0).toUpperCase() + modKeyName.slice(1) + "-" + keyName;
    }
    op.setUiAttribs({ "extendTitle": keyName });
    outKey.set(keyName);
}

addCanvasListener();


};

Ops.Devices.Keyboard.KeyPressLearn.prototype = new CABLES.Op();
CABLES.OPS["f069c0db-4051-4eae-989e-6ef7953787fd"]={f:Ops.Devices.Keyboard.KeyPressLearn,objName:"Ops.Devices.Keyboard.KeyPressLearn"};




// **************************************************************
// 
// Ops.Boolean.ToggleBool_v2
// 
// **************************************************************

Ops.Boolean.ToggleBool_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    trigger = op.inTriggerButton("trigger"),
    reset = op.inTriggerButton("reset"),
    inDefault = op.inBool("Default", false),
    next = op.outTrigger("Next"),
    outBool = op.outBoolNum("result");

let theBool = false;

op.onLoadedValueSet = () =>
{
    theBool = inDefault.get();
    outBool.set(inDefault.get());
    next.trigger();
};

trigger.onTriggered = function ()
{
    theBool = !theBool;
    outBool.set(theBool);
    next.trigger();
};

reset.onTriggered = function ()
{
    theBool = inDefault.get();
    outBool.set(theBool);
    next.trigger();
};


};

Ops.Boolean.ToggleBool_v2.prototype = new CABLES.Op();
CABLES.OPS["4313d9bb-96b6-43bc-9190-6068cfb2593c"]={f:Ops.Boolean.ToggleBool_v2,objName:"Ops.Boolean.ToggleBool_v2"};




// **************************************************************
// 
// Ops.Patch.P4Zknbo.Console_v2
// 
// **************************************************************

Ops.Patch.P4Zknbo.Console_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    visible = op.inValueBool("visible", true),
    inClear = op.inTriggerButton("Clear"),
    outEle = op.outObject("Element", null, "element");

let eleLog = null;
let canvas = op.patch.cgl.canvas.parentElement;

let oldLog = console.log;
let oldLogError = console.error;
let oldLogWarn = console.warn;

console.log = thelog;
console.error = thelog;
console.warn = thelog;

addElement();

op.onDelete = function ()
{
    removeElement();
    console.log = oldLog;
    console.error = oldLogError;
    console.warn = oldLogWarn;
};

visible.onChange = function ()
{
    if (visible.get()) eleLog.style.display = "block";
    else eleLog.style.display = "none";
};

function addElement()
{
    if (eleLog)removeElement();
    eleLog = document.createElement("div");
    eleLog.style.padding = "0px";
    eleLog.style.position = "absolute";
    eleLog.style.overflow = "scroll";
    if (CABLES.UI)
    {
        eleLog.style.width = "60%";
        eleLog.style.height = "50%";
    }
    else
    {
        eleLog.style.width = "50vw";
        eleLog.style.height = "50vh";
    }
    eleLog.style["background-color"] = "rgba(0,0,0,0.74)";
    eleLog.style["box-sizing"] = "border-box";
    eleLog.style.padding = "10px";
    eleLog.style["z-index"] = "9999";
    eleLog.style.color = "#1f1";

    canvas.appendChild(eleLog);
}

function removeElement()
{
    canvas.removeChild(eleLog);
    eleLog = null;
}

function thelog()
{
    if (!eleLog)addElement();
    oldLog.apply(console, arguments);

    try
    {
        let html = "<code style=\"display:block;overflow:hidden;margin-top:3px;border-bottom:1px solid #000;padding:3px;\">";
        for (let i = 0; i < arguments.length; i++)
        {
            if (typeof arguments[i] == "object") html += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + " ";
            else html += arguments[i] + " ";
        }
        eleLog.innerHTML += html + "</code>";
    }
    catch (e) {}
    eleLog.scrollTop = eleLog.scrollHeight;
}

inClear.onTriggered = () =>
{
    eleLog.innerHTML = "";
};


};

Ops.Patch.P4Zknbo.Console_v2.prototype = new CABLES.Op();
CABLES.OPS["d7be570f-250a-440b-8eaf-c443d7b33b76"]={f:Ops.Patch.P4Zknbo.Console_v2,objName:"Ops.Patch.P4Zknbo.Console_v2"};




// **************************************************************
// 
// Ops.String.ParseInt_v2
// 
// **************************************************************

Ops.String.ParseInt_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    str = op.inString("String", 5711),
    outNum = op.outNumber("Number");

str.onChange = function ()
{
    let num = parseInt(str.get());
    if (num != num) num = 0;
    outNum.set(num);
};


};

Ops.String.ParseInt_v2.prototype = new CABLES.Op();
CABLES.OPS["6d208424-daf2-4a2b-874f-daac406c1f66"]={f:Ops.String.ParseInt_v2,objName:"Ops.String.ParseInt_v2"};




// **************************************************************
// 
// Ops.String.StringReplace
// 
// **************************************************************

Ops.String.StringReplace = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inStr = op.inString("String"),
    inSearch = op.inString("Search For", "foo"),
    inRepl = op.inString("Replace", "bar"),
    inWhat = op.inSwitch("Replace What", ["All", "First"], "All"),
    outStr = op.outString("Result");

inRepl.onChange =
inStr.onChange =
inWhat.onChange =
inSearch.onChange = update;

function update()
{
    op.setUiError("exception", null);

    let str = "";
    try
    {
        if (inWhat.get() == "All") str = String(inStr.get()).replace(new RegExp(inSearch.get(), "g"), inRepl.get());
        else str = String(inStr.get()).replace(inSearch.get(), inRepl.get());
    }
    catch (e)
    {
        op.setUiError("exception", "exception " + e.message);
    }

    outStr.set(str);
}


};

Ops.String.StringReplace.prototype = new CABLES.Op();
CABLES.OPS["4a053e7a-6b00-4e71-bd51-90cdb190994c"]={f:Ops.String.StringReplace,objName:"Ops.String.StringReplace"};




// **************************************************************
// 
// Ops.Vars.VarSetArray_v2
// 
// **************************************************************

Ops.Vars.VarSetArray_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const val = op.inArray("Value", null);
op.varName = op.inDropDown("Variable", [], "", true);

new CABLES.VarSetOpWrapper(op, "array", val, op.varName);


};

Ops.Vars.VarSetArray_v2.prototype = new CABLES.Op();
CABLES.OPS["8088290f-45d4-4312-b4ca-184d34ca4667"]={f:Ops.Vars.VarSetArray_v2,objName:"Ops.Vars.VarSetArray_v2"};




// **************************************************************
// 
// Ops.Ui.VizArrayTable
// 
// **************************************************************

Ops.Ui.VizArrayTable = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inArr = op.inArray("Array"),
    inStride = op.inInt("Stride", 0),
    inOffset = op.inInt("Start Row", 0);

op.setUiAttrib({ "height": 200, "width": 400, "resizable": true, "vizLayerMaxZoom": 2500 });

function getCellValue(v)
{
    let str = "";

    if (typeof v == "string")
    {
        // if (CABLES.UTILS.isNumeric(v)) str = "\"" + v + "\"";
        // else str = v;
        str = "\"" + v + "\"";
    }
    else if (CABLES.UTILS.isNumeric(v)) str = String(Math.round(v * 10000) / 10000);
    else if (Array.isArray(v))
    {
        let preview = "...";
        if (v.length == 0) preview = "";
        str = "[" + preview + "] (" + v.length + ")";
    }
    else if (typeof v == "object")
    {
        try
        {
            str = JSON.stringify(v, true, 1);
        }
        catch (e)
        {
            str = "{???}";
        }
    }
    else if (v != v || v === undefined)
    {
        str += String(v);
    }
    else
    {
        str += String(v);
    }

    return str;
}

op.renderVizLayer = (ctx, layer) =>
{
    ctx.fillStyle = "#222";
    ctx.fillRect(layer.x, layer.y, layer.width, layer.height);

    ctx.save();
    ctx.scale(layer.scale, layer.scale);

    ctx.font = "normal 10px sourceCodePro";
    ctx.fillStyle = "#ccc";

    const arr = inArr.get() || [];
    let stride = inStride.get() || 1;

    if (inArr.get() === null) op.setUiAttrib({ "extendTitle": "null" });
    else if (inArr.get() === undefined) op.setUiAttrib({ "extendTitle": "undefined" });
    else op.setUiAttrib({ "extendTitle": "length: " + arr.length });

    if (inArr.links.length > 0 && inArr.links[0].getOtherPort(inArr))
        stride = inArr.links[0].getOtherPort(inArr).uiAttribs.stride || inStride.get() || 1;

    if (arr.length % stride != 0)op.setUiError("stride", "stride does not fit length of array. some values may not be shown", 1);
    else op.setUiError("stride", null);

    let lines = Math.floor(layer.height / layer.scale / 10 - 1);
    let padding = 4;
    let offset = inOffset.get() * stride;
    let columnsWidth = [];

    for (let i = 0; i < stride; i++)columnsWidth[i] = 0;

    for (let i = offset; i < offset + lines * stride; i += stride)
    {
        for (let s = 0; s < stride; s++)
        {
            const v = arr[i + s];

            columnsWidth[s] = Math.max(columnsWidth[s], getCellValue(v).length);
        }
    }

    let columsPos = [];
    let addUpPos = 30;
    for (let i = 0; i < stride; i++)
    {
        columsPos[i] = addUpPos;
        addUpPos += (columnsWidth[i] + 1) * 7;
    }

    for (let i = offset; i < offset + lines * stride; i += stride)
    {
        if (i < 0) continue;
        if (i + stride > arr.length) continue;

        ctx.fillStyle = "#666";

        const lineNum = (i) / stride;

        if (lineNum >= 0)
            ctx.fillText(lineNum,
                layer.x / layer.scale + padding,
                layer.y / layer.scale + 10 + (i - offset) / stride * 10 + padding);

        for (let s = 0; s < stride; s++)
        {
            const v = arr[i + s];
            let str = getCellValue(v);

            ctx.fillStyle = "#ccc";

            if (typeof v == "string")
            {
                str = v;
            }
            else if (CABLES.UTILS.isNumeric(v)) str = String(Math.round(v * 10000) / 10000);
            else if (Array.isArray(v))
            {
                str = JSON.stringify(v);
            }
            else if (typeof v == "object")
            {
                try
                {
                    str = JSON.stringify(v);
                }
                catch (e)
                {
                    str = "{object}";
                }
            }
            else if (v != v || v === undefined)
            {
                ctx.fillStyle = "#f00";
                str = "?";
            }

            ctx.fillText(str,
                layer.x / layer.scale + columsPos[s],
                layer.y / layer.scale + 10 + (i - offset) / stride * 10 + padding);
        }
    }

    if (inArr.get() === null) ctx.fillText("null", layer.x / layer.scale + 10, layer.y / layer.scale + 10 + padding);
    else if (inArr.get() === undefined) ctx.fillText("undefined", layer.x / layer.scale + 10, layer.y / layer.scale + 10 + padding);

    const gradHeight = 30;

    if (layer.scale <= 0) return;
    if (offset > 0)
    {
        const radGrad = ctx.createLinearGradient(0, layer.y / layer.scale + 5, 0, layer.y / layer.scale + gradHeight);
        radGrad.addColorStop(0, "#222");
        radGrad.addColorStop(1, "rgba(34,34,34,0.0)");
        ctx.fillStyle = radGrad;
        ctx.fillRect(layer.x / layer.scale, layer.y / layer.scale, 200000, gradHeight);
    }

    if (offset + lines * stride < arr.length)
    {
        const radGrad = ctx.createLinearGradient(0, layer.y / layer.scale + layer.height / layer.scale - gradHeight + 5, 0, layer.y / layer.scale + layer.height / layer.scale - gradHeight + gradHeight);
        radGrad.addColorStop(1, "#222");
        radGrad.addColorStop(0, "rgba(34,34,34,0.0)");
        ctx.fillStyle = radGrad;
        ctx.fillRect(layer.x / layer.scale, layer.y / layer.scale + layer.height / layer.scale - gradHeight, 200000, gradHeight);
    }

    ctx.restore();
};


};

Ops.Ui.VizArrayTable.prototype = new CABLES.Op();
CABLES.OPS["af2eeaaf-ff86-4bfb-9a27-42f05160a5d8"]={f:Ops.Ui.VizArrayTable,objName:"Ops.Ui.VizArrayTable"};




// **************************************************************
// 
// Ops.Devices.Mouse.MouseButtons
// 
// **************************************************************

Ops.Devices.Mouse.MouseButtons = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    mouseClickLeft = op.outTrigger("Click Left"),
    mouseClickRight = op.outTrigger("Click Right"),
    mouseDoubleClick = op.outTrigger("Double Click"),
    mouseDownLeft = op.outBoolNum("Button pressed Left", false),
    mouseDownMiddle = op.outBoolNum("Button pressed Middle", false),
    mouseDownRight = op.outBoolNum("Button pressed Right", false),
    triggerMouseDownLeft = op.outTrigger("Mouse Down Left"),
    triggerMouseDownMiddle = op.outTrigger("Mouse Down Middle"),
    triggerMouseDownRight = op.outTrigger("Mouse Down Right"),
    triggerMouseUpLeft = op.outTrigger("Mouse Up Left"),
    triggerMouseUpMiddle = op.outTrigger("Mouse Up Middle"),
    triggerMouseUpRight = op.outTrigger("Mouse Up Right"),
    area = op.inValueSelect("Area", ["Canvas", "Document"], "Canvas"),
    active = op.inValueBool("Active", true);

const cgl = op.patch.cgl;
let listenerElement = null;
area.onChange = updateListeners;
op.onDelete = removeListeners;
updateListeners();

function onMouseDown(e)
{
    if (e.which == 1)
    {
        mouseDownLeft.set(true);
        triggerMouseDownLeft.trigger();
    }
    else if (e.which == 2)
    {
        mouseDownMiddle.set(true);
        triggerMouseDownMiddle.trigger();
    }
    else if (e.which == 3)
    {
        mouseDownRight.set(true);
        triggerMouseDownRight.trigger();
    }
}

function onMouseUp(e)
{
    if (e.which == 1)
    {
        mouseDownLeft.set(false);
        triggerMouseUpLeft.trigger();
    }
    else if (e.which == 2)
    {
        mouseDownMiddle.set(false);
        triggerMouseUpMiddle.trigger();
    }
    else if (e.which == 3)
    {
        mouseDownRight.set(false);
        triggerMouseUpRight.trigger();
    }
}

function onClickRight(e)
{
    mouseClickRight.trigger();
    e.preventDefault();
}

function onDoubleClick(e)
{
    mouseDoubleClick.trigger();
}

function onmouseclick(e)
{
    mouseClickLeft.trigger();
}

function ontouchstart(event)
{
    if (event.touches && event.touches.length > 0)
    {
        event.touches[0].which = 1;
        onMouseDown(event.touches[0]);
    }
}

function ontouchend(event)
{
    onMouseUp({ "which": 1 });
}

function removeListeners()
{
    if (!listenerElement) return;
    listenerElement.removeEventListener("touchend", ontouchend);
    listenerElement.removeEventListener("touchcancel", ontouchend);
    listenerElement.removeEventListener("touchstart", ontouchstart);
    listenerElement.removeEventListener("dblclick", onDoubleClick);
    listenerElement.removeEventListener("click", onmouseclick);
    listenerElement.removeEventListener("mousedown", onMouseDown);
    listenerElement.removeEventListener("mouseup", onMouseUp);
    listenerElement.removeEventListener("contextmenu", onClickRight);
    listenerElement.removeEventListener("mouseleave", onMouseUp);
    listenerElement = null;
}

function addListeners()
{
    if (listenerElement)removeListeners();

    listenerElement = cgl.canvas;
    if (area.get() == "Document") listenerElement = document.body;

    listenerElement.addEventListener("touchend", ontouchend);
    listenerElement.addEventListener("touchcancel", ontouchend);
    listenerElement.addEventListener("touchstart", ontouchstart);
    listenerElement.addEventListener("dblclick", onDoubleClick);
    listenerElement.addEventListener("click", onmouseclick);
    listenerElement.addEventListener("mousedown", onMouseDown);
    listenerElement.addEventListener("mouseup", onMouseUp);
    listenerElement.addEventListener("contextmenu", onClickRight);
    listenerElement.addEventListener("mouseleave", onMouseUp);
}

op.onLoaded = updateListeners;

active.onChange = updateListeners;

function updateListeners()
{
    removeListeners();
    if (active.get()) addListeners();
}


};

Ops.Devices.Mouse.MouseButtons.prototype = new CABLES.Op();
CABLES.OPS["c7e5e545-c8a1-4fef-85c2-45422b947f0d"]={f:Ops.Devices.Mouse.MouseButtons,objName:"Ops.Devices.Mouse.MouseButtons"};




// **************************************************************
// 
// Ops.Gl.FontMSDF_v2
// 
// **************************************************************

Ops.Gl.FontMSDF_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
let defaultTexUrl = null;
let defaultDataUrl = null;

if (CABLES.UI)
{
    defaultTexUrl = "/assets/library/fonts_msdf/worksans-regular_int.png";
    defaultDataUrl = "/assets/library/fonts_msdf/worksans-regular_int.json";
}

const
    inUUID = op.inString("Font Name", CABLES.uuid()),
    urlData = op.inUrl("Font Data", [".json"], defaultDataUrl),
    urlTex = op.inUrl("Font Image", [".png"], defaultTexUrl),
    urlTex1 = op.inUrl("Font Image 1", [".png"]),
    urlTex2 = op.inUrl("Font Image 2", [".png"]),
    urlTex3 = op.inUrl("Font Image 3", [".png"]),
    outLoaded = op.outBool("Loaded"),
    outNumChars = op.outNumber("Total Chars"),
    outChars = op.outString("Chars"),
    cgl = op.patch.cgl;

let
    loadedData = false,
    loadedTex = false,
    loadingId = 0;

inUUID.onChange =
urlData.onChange =
    urlTex.onChange =
    urlTex1.onChange =
    urlTex2.onChange =
    urlTex3.onChange = loadLater;

const textures = [];

function updateLoaded()
{
    const l = loadedData && loadedTex;
    if (!outLoaded.get() && l) op.patch.emitEvent("FontLoadedMSDF");
    outLoaded.set(l);
}

op.onFileChanged = function (fn)
{
    if (
        (urlTex.get() && urlTex.get().indexOf(fn) > -1) ||
        (urlTex1.get() && urlTex1.get().indexOf(fn) > -1) ||
        (urlTex2.get() && urlTex2.get().indexOf(fn) > -1) ||
        (urlTex3.get() && urlTex3.get().indexOf(fn) > -1))
    {
        loadLater();
    }
};

function loadLater()
{
    cgl.addNextFrameOnceCallback(load);
}

let oldUUID = "";

function load()
{
    if (!urlData.get() || !urlTex.get()) return;

    textures.length = 0;
    op.patch.deleteVar("font_data_" + oldUUID);
    op.patch.deleteVar("font_tex_" + oldUUID);
    oldUUID = inUUID.get();

    const varNameData = "font_data_" + inUUID.get();
    const varNameTex = "font_tex_" + inUUID.get();

    op.patch.setVarValue(varNameData, {});
    op.patch.setVarValue(varNameTex, textures);

    op.patch.getVar(varNameData).type = "fontData";
    op.patch.getVar(varNameTex).type = "fontTexture";

    loadedData = loadedTex = false;
    updateLoaded();

    op.patch.loading.finished(loadingId);
    loadingId = op.patch.loading.start("jsonFile", "" + urlData.get(), op);

    op.setUiError("invaliddata", null);
    op.setUiError("jsonerr", null);
    op.setUiError("texurlerror", null);

    const urlDatastr = op.patch.getFilePath(String(urlData.get()));

    // load font data json
    cgl.patch.loading.addAssetLoadingTask(() =>
    {
        CABLES.ajax(urlDatastr, (err, _data, xhr) =>
        {
            if (err)
            {
                // op.logError(err);
                return;
            }
            try
            {
                let data = _data;
                if (typeof data === "string") data = JSON.parse(_data);
                if (!data.chars || !data.info || !data.info.face)
                {
                    op.setUiError("invaliddata", "data file is invalid");
                    return;
                }

                outNumChars.set(data.chars.length);
                let allChars = "";
                for (let i = 0; i < data.chars.length; i++)allChars += data.chars[i].char;
                outChars.set(allChars);

                op.setUiAttrib({ "extendTitle": data.info.face });
                op.patch.setVarValue(varNameData, null);
                op.patch.setVarValue(varNameData,
                    {
                        "name": CABLES.basename(urlData.get()),
                        "basename": inUUID.get(),
                        "data": data
                    });

                op.patch.loading.finished(loadingId);
                loadedData = true;
                updateLoaded();
            }
            catch (e)
            {
                op.patch.setVarValue(varNameData, null);
                op.patch.setVarValue(varNameTex, null);

                // op.logError(e);
                op.setUiError("jsonerr", "Problem while loading json:<br/>" + e);
                op.patch.loading.finished(loadingId);
                updateLoaded();
                outLoaded.set(false);
            }
        });
    });

    // load font texture

    for (let i = 0; i < 4; i++)
    {
        const num = i;

        let texPort = urlTex;
        if (i == 1)texPort = urlTex1;
        if (i == 2)texPort = urlTex2;
        if (i == 3)texPort = urlTex3;

        if (!texPort.get()) continue;

        const loadingIdTex = cgl.patch.loading.start(op.objName, texPort.get(), op);
        const urlTexstr = op.patch.getFilePath(String(texPort.get()));

        CGL.Texture.load(cgl, urlTexstr, function (err, tex)
        {
            if (err)
            {
                op.setUiError("texurlerror", "could not load texture");
                cgl.patch.loading.finished(loadingIdTex);
                loadedTex = false;
                return;
            }
            textures[num] = tex;
            op.patch.setVarValue(varNameTex, null);
            op.patch.setVarValue(varNameTex, textures);

            loadedTex = true;
            cgl.patch.loading.finished(loadingIdTex);
            updateLoaded();
        }, {
            "filter": CGL.Texture.FILTER_LINEAR,
            "flip": false
        });
    }
}


};

Ops.Gl.FontMSDF_v2.prototype = new CABLES.Op();
CABLES.OPS["6cbd5d67-25d5-4936-a2ad-3ee8ed478570"]={f:Ops.Gl.FontMSDF_v2,objName:"Ops.Gl.FontMSDF_v2"};




// **************************************************************
// 
// Ops.Ui.VizObject
// 
// **************************************************************

Ops.Ui.VizObject = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inObj = op.inObject("Object"),
    inConsole = op.inTriggerButton("console log"),
    inZoomText = op.inBool("ZoomText", false),
    inLineNums = op.inBool("Line Numbers", true),
    inFontSize = op.inFloat("Font Size", 10),
    inPos = op.inFloatSlider("Scroll", 0);

let lines = [];
inConsole.setUiAttribs({ "hidePort": true });

op.setUiAttrib({ "height": 200, "width": 400, "resizable": true, "vizLayerMaxZoom": 2500 });

inObj.onChange = () =>
{
    let obj = inObj.get();
    let str = "???";

    if (obj && obj.getInfo) obj = obj.getInfo();

    if (obj && obj.constructor && obj.constructor.name != "Object") op.setUiAttribs({ "extendTitle": obj.constructor.name });

    if (obj === undefined)str = "undefined";
    else if (obj == null)str = "null";
    else
        try
        {
            str = JSON.stringify(obj, false, 4);

            if (
                obj.hasOwnProperty("isTrusted") && Object.keys(obj).length == 1 ||
            (str == "{}" && obj && obj.constructor && obj.constructor.name != "Object"))
            {
                str = "could not stringify object: " + obj.constructor.name + "\n";

                const o = {};
                for (const i in obj)
                {
                    if (!obj[i]) continue;

                    if (obj[i].constructor)
                    {
                        if (obj[i].constructor.name == "Number" || obj[i].constructor.name == "String" || obj[i].constructor.name == "Boolean")
                            o[i] = obj[i];
                    }
                    else
                        o[i] = "{???}";
                }
                obj = o;
                str = JSON.stringify(obj, false, 4);
            }
        }
        catch (e)
        {
            str = "object can not be displayed as string", e.msg;
        }

    str = String(str);
    lines = str.split("\n");
};

inObj.onLinkChanged = () =>
{
    if (inObj.isLinked())
    {
        const p = inObj.links[0].getOtherPort(inObj);

        op.setUiAttrib({ "extendTitle": p.uiAttribs.objType });
    }
};

inConsole.onTriggered = () =>
{
    console.info(inObj.get());
};

op.renderVizLayer = (ctx, layer, viz) =>
{
    viz.clear(ctx, layer);

    ctx.save();
    ctx.scale(layer.scale, layer.scale);

    viz.renderText(ctx, layer, lines, {
        "zoomText": inZoomText.get(),
        "showLineNum": inLineNums.get(),
        "syntax": "js",
        "fontSize": inFontSize.get(),
        "scroll": inPos.get()
    });

    ctx.restore();
};

//


};

Ops.Ui.VizObject.prototype = new CABLES.Op();
CABLES.OPS["d09bc53e-9f52-4872-94c7-4ef777512222"]={f:Ops.Ui.VizObject,objName:"Ops.Ui.VizObject"};




// **************************************************************
// 
// Ops.Ui.VizTexture
// 
// **************************************************************

Ops.Ui.VizTexture = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"viztex_frag":"IN vec2 texCoord;\nUNI sampler2D tex;\nUNI samplerCube cubeMap;\nUNI float width;\nUNI float height;\nUNI float type;\nUNI float time;\n\nfloat LinearizeDepth(float d,float zNear,float zFar)\n{\n    float z_n = 2.0 * d - 1.0;\n    return 2.0 * zNear / (zFar + zNear - z_n * (zFar - zNear));\n}\n\nvoid main()\n{\n    vec4 col=vec4(vec3(0.),0.0);\n\n    vec4 colTex=texture(tex,texCoord);\n\n\n\n    if(type==1.0)\n    {\n        vec4 depth=vec4(0.);\n        vec2 localST=texCoord;\n        localST.y = 1. - localST.y;\n\n        localST.t = mod(localST.t*3.,1.);\n        localST.s = mod(localST.s*4.,1.);\n\n        #ifdef WEBGL2\n            #define texCube texture\n        #endif\n        #ifdef WEBGL1\n            #define texCube textureCube\n        #endif\n\n//         //Due to the way my depth-cubeMap is rendered, objects to the -x,y,z side is projected to the positive x,y,z side\n//         //Inside where top/bottom is to be drawn?\n        if (texCoord.s*4.> 1. && texCoord.s*4.<2.)\n        {\n            //Bottom (-y) quad\n            if (texCoord.t*3. < 1.)\n            {\n                vec3 dir=vec3(localST.s*2.-1.,-1.,-localST.t*2.+1.);//Due to the (arbitrary) way I choose as up in my depth-viewmatrix, i her emultiply the latter coordinate with -1\n                depth = texCube(cubeMap, dir);\n            }\n            //top (+y) quad\n            else if (texCoord.t*3. > 2.)\n            {\n                vec3 dir=vec3(localST.s*2.-1.,1.,localST.t*2.-1.);//Get lower y texture, which is projected to the +y part of my cubeMap\n                depth = texCube(cubeMap, dir);\n            }\n            else//Front (-z) quad\n            {\n                vec3 dir=vec3(localST.s*2.-1.,-localST.t*2.+1.,1.);\n                depth = texCube(cubeMap, dir);\n            }\n        }\n//         //If not, only these ranges should be drawn\n        else if (texCoord.t*3. > 1. && texCoord.t*3. < 2.)\n        {\n            if (texCoord.x*4. < 1.)//left (-x) quad\n            {\n                vec3 dir=vec3(-1.,-localST.t*2.+1.,localST.s*2.-1.);\n                depth = texCube(cubeMap, dir);\n            }\n            else if (texCoord.x*4. < 3.)//right (+x) quad (front was done above)\n            {\n                vec3 dir=vec3(1,-localST.t*2.+1.,-localST.s*2.+1.);\n                depth = texCube(cubeMap, dir);\n            }\n            else //back (+z) quad\n            {\n                vec3 dir=vec3(-localST.s*2.+1.,-localST.t*2.+1.,-1.);\n                depth = texCube(cubeMap, dir);\n            }\n        }\n        // colTex = vec4(vec3(depth),1.);\n        colTex = vec4(depth);\n    }\n\n    if(type==2.0)\n    {\n       float near = 0.1;\n       float far = 50.;\n       float depth = LinearizeDepth(colTex.r, near, far);\n       colTex.rgb = vec3(depth);\n    }\n\n\n\n\n    #ifdef ANIM_RANGE\n\n        if(colTex.r>1.0 || colTex.r<0.0)\n            colTex.r=mod(colTex.r,1.0)*0.5+(sin(colTex.r+mod(colTex.r*3.0,1.0)+time*5.0)*0.5+0.5)*0.5;\n        if(colTex.g>1.0 || colTex.g<0.0)\n            colTex.g=mod(colTex.g,1.0)*0.5+(sin(colTex.g+mod(colTex.g*3.0,1.0)+time*5.0)*0.5+0.5)*0.5;\n        if(colTex.b>1.0 || colTex.b<0.0)\n            colTex.b=mod(colTex.b,1.0)*0.5+(sin(colTex.b+mod(colTex.b*3.0,1.0)+time*5.0)*0.5+0.5)*0.5;\n\n    #endif\n\n\n    // #ifdef ANIM_RANGE\n    //     if(colTex.r>1.0 || colTex.r<0.0)\n    //     {\n    //         float r=mod( time+colTex.r,1.0)*0.5+0.5;\n    //         colTex.r=r;\n    //     }\n    //     if(colTex.g>1.0 || colTex.g<0.0)\n    //     {\n    //         float r=mod( time+colTex.g,1.0)*0.5+0.5;\n    //         colTex.g=r;\n    //     }\n    //     if(colTex.b>1.0 || colTex.b<0.0)\n    //     {\n    //         float r=mod( time+colTex.b,1.0)*0.5+0.5;\n    //         colTex.b=r;\n    //     }\n    // #endif\n\n    #ifdef MOD_RANGE\n        colTex.r=mod(colTex.r,1.0001);\n        colTex.g=mod(colTex.g,1.0001);\n        colTex.b=mod(colTex.b,1.0001);\n\n    #endif\n\n    #ifdef ALPHA_ONE\n        colTex.a=1.0;\n    #endif\n    #ifdef ALPHA_INV\n        colTex.a=1.0-colTex.a;\n    #endif\n\n    outColor = mix(col,colTex,colTex.a);\n}\n\n","viztex_vert":"IN vec3 vPosition;\nIN vec2 attrTexCoord;\nOUT vec2 texCoord;\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\n\nvoid main()\n{\n    texCoord=vec2(attrTexCoord.x,1.0-attrTexCoord.y);\n    vec4 pos = vec4( vPosition, 1. );\n    mat4 mvMatrix=viewMatrix * modelMatrix;\n    gl_Position = projMatrix * mvMatrix * pos;\n}",};
const
    inTex = op.inTexture("Texture In"),
    inShowInfo = op.inBool("Show Info", false),
    inVizRange = op.inSwitch("Visualize outside 0-1", ["Off", "Anim", "Modulo"], "Anim"),
    inAlpha = op.inSwitch("Alpha", ["A", "1", "1-A"], "A"),
    inPickColor = op.inBool("Show Color", false),
    inX = op.inFloatSlider("X", 0.5),
    inY = op.inFloatSlider("Y", 0.5),
    outTex = op.outTexture("Texture Out"),
    outInfo = op.outString("Info");

op.setUiAttrib({ "height": 150, "resizable": true });

const timer = new CABLES.Timer();
let shader = null;
let fb = null;
let pixelReader = null;
let colorString = "";

inAlpha.onChange =
    inVizRange.onChange = updateDefines;

inPickColor.onChange = updateUi;
updateUi();

if (CABLES.UI)
{
    timer.play();
    op.checkMainloopExists();
}

function updateUi()
{
    inX.setUiAttribs({ "greyout": !inPickColor.get() });
    inY.setUiAttribs({ "greyout": !inPickColor.get() });
}

inTex.onChange = () =>
{
    const t = inTex.get();

    outTex.setRef(t);

    let title = "";

    if (inTex.get() && inTex.isLinked()) title = inTex.links[0].getOtherPort(inTex).name;

    op.setUiAttrib({ "extendTitle": title });
};

function updateDefines()
{
    if (!shader) return;

    shader.toggleDefine("MOD_RANGE", inVizRange.get() == "Modulo");
    shader.toggleDefine("ANIM_RANGE", inVizRange.get() == "Anim");
    shader.toggleDefine("ALPHA_INV", inAlpha.get() == "1-A");
    shader.toggleDefine("ALPHA_ONE", inAlpha.get() == "1");
    op.checkMainloopExists();
}

op.renderVizLayerGl = (ctx, layer) =>
{
    if (!inTex.isLinked()) return;
    if (!layer.useGl) return;

    const port = inTex;
    const texSlot = 5;
    const texSlotCubemap = texSlot + 1;

    const perf = CABLES.UI.uiProfiler.start("previewlayer texture");
    const cgl = port.op.patch.cgl;

    if (!this._emptyCubemap) this._emptyCubemap = CGL.Texture.getEmptyCubemapTexture(cgl);
    port.op.patch.cgl.profileData.profileTexPreviews++;

    const portTex = port.get() || CGL.Texture.getEmptyTexture(cgl);

    if (!this._mesh)
    {
        const geom = new CGL.Geometry("vizTexture rect");
        geom.vertices = [1.0, 1.0, 0.0, -1.0, 1.0, 0.0, 1.0, -1.0, 0.0, -1.0, -1.0, 0.0];
        geom.texCoords = [
            1.0, 1.0,
            0.0, 1.0,
            1.0, 0.0,
            0.0, 0.0];
        geom.verticesIndices = [0, 1, 2, 3, 1, 2];
        this._mesh = new CGL.Mesh(cgl, geom);
    }
    if (!this._shader)
    {
        this._shader = new CGL.Shader(cgl, "glpreviewtex");
        this._shader.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG"]);
        this._shader.setSource(attachments.viztex_vert, attachments.viztex_frag);
        this._shaderTexUniform = new CGL.Uniform(this._shader, "t", "tex", texSlot);
        this._shaderTexCubemapUniform = new CGL.Uniform(this._shader, "tc", "cubeMap", texSlotCubemap);
        shader = this._shader;
        updateDefines();

        this._shaderTexUniformW = new CGL.Uniform(this._shader, "f", "width", portTex.width);
        this._shaderTexUniformH = new CGL.Uniform(this._shader, "f", "height", portTex.height);
        this._shaderTypeUniform = new CGL.Uniform(this._shader, "f", "type", 0);
        this._shaderTimeUniform = new CGL.Uniform(this._shader, "f", "time", 0);
    }

    cgl.pushPMatrix();
    const sizeTex = [portTex.width, portTex.height];
    const small = port.op.patch.cgl.canvasWidth > sizeTex[0] && port.op.patch.cgl.canvasHeight > sizeTex[1];

    if (small)
    {
        mat4.ortho(cgl.pMatrix, 0, port.op.patch.cgl.canvasWidth, port.op.patch.cgl.canvasHeight, 0, 0.001, 11);
    }
    else mat4.ortho(cgl.pMatrix, -1, 1, 1, -1, 0.001, 11);

    const oldTex = cgl.getTexture(texSlot);
    const oldTexCubemap = cgl.getTexture(texSlotCubemap);

    let texType = 0;
    if (portTex)
    {
        if (portTex.cubemap) texType = 1;
        if (portTex.textureType == CGL.Texture.TYPE_DEPTH) texType = 2;

        if (texType == 0 || texType == 2)
        {
            cgl.setTexture(texSlot, portTex.tex);
            cgl.setTexture(texSlotCubemap, this._emptyCubemap.cubemap, cgl.gl.TEXTURE_CUBE_MAP);
        }
        else if (texType == 1)
        {
            cgl.setTexture(texSlotCubemap, portTex.cubemap, cgl.gl.TEXTURE_CUBE_MAP);
        }

        timer.update();
        this._shaderTimeUniform.setValue(timer.get());

        this._shaderTypeUniform.setValue(texType);
        let s = [port.op.patch.cgl.canvasWidth, port.op.patch.cgl.canvasHeight];

        cgl.gl.clearColor(0, 0, 0, 0);
        cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);

        cgl.pushModelMatrix();
        if (small)
        {
            s = sizeTex;
            mat4.translate(cgl.mMatrix, cgl.mMatrix, [sizeTex[0] / 2, sizeTex[1] / 2, 0]);
            mat4.scale(cgl.mMatrix, cgl.mMatrix, [sizeTex[0] / 2, sizeTex[1] / 2, 0]);
        }
        this._mesh.render(this._shader);
        cgl.popModelMatrix();

        if (texType == 0) cgl.setTexture(texSlot, oldTex);
        if (texType == 1) cgl.setTexture(texSlotCubemap, oldTexCubemap);

        cgl.popPMatrix();
        cgl.resetViewPort();

        const sizeImg = [layer.width, layer.height];

        const stretch = false;
        // if (!stretch)
        // {
        if (portTex.width > portTex.height) sizeImg[1] = layer.width * sizeTex[1] / sizeTex[0];
        else
        {
            sizeImg[1] = layer.width * (sizeTex[1] / sizeTex[0]);

            if (sizeImg[1] > layer.height)
            {
                const r = layer.height / sizeImg[1];
                sizeImg[0] *= r;
                sizeImg[1] *= r;
            }
        }

        const scaledDown = sizeImg[0] > sizeTex[0] && sizeImg[1] > sizeTex[1];

        // ctx.imageSmoothingEnabled = !small || !scaledDown;
        ctx.imageSmoothingEnabled = true;

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(layer.x, layer.y - 10, 10, 10);
        ctx.fillStyle = "#000000";
        ctx.fillRect(layer.x, layer.y - 10, 5, 5);
        ctx.fillRect(layer.x + 5, layer.y - 10 + 5, 5, 5);

        let layerHeight = layer.height;
        let numX = (10 * layer.width / layerHeight);
        let stepY = (layerHeight / 10);
        let stepX = (layer.width / numX);
        for (let x = 0; x < numX; x++)
            for (let y = 0; y < 10; y++)
            {
                if ((x + y) % 2 == 0)ctx.fillStyle = "#333333";
                else ctx.fillStyle = "#393939";
                ctx.fillRect(layer.x + stepX * x, layer.y + stepY * y, stepX, stepY);
            }

        ctx.fillStyle = "#222";
        const borderLeft = (layer.width - sizeImg[0]) / 2;
        const borderTop = (layerHeight - sizeImg[1]) / 2;

        let imgPosX = layer.x + (layer.width - sizeImg[0]) / 2;
        let imgPosY = layer.y + (layerHeight - sizeImg[1]) / 2;
        let imgSizeW = sizeImg[0];
        let imgSizeH = sizeImg[1];

        if (layerHeight - sizeImg[1] < 0)
        {
            imgPosX = layer.x + (layer.width - sizeImg[0] * layerHeight / sizeImg[1]) / 2;
            imgPosY = layer.y;
            imgSizeW = sizeImg[0] * layerHeight / sizeImg[1];
            imgSizeH = layerHeight;
        }

        ctx.fillRect(layer.x, layer.y, imgPosX - layer.x, layerHeight);
        ctx.fillRect(layer.x + imgSizeW + imgPosX - layer.x, layer.y, imgSizeW, layerHeight);
        ctx.fillRect(layer.x, layer.y, layer.width, borderTop);
        ctx.fillRect(layer.x, layer.y + sizeImg[1] + borderTop, layer.width, borderTop);

        if (cgl.canvas && cgl.canvasWidth > 0 && cgl.canvasHeight > 0 && cgl.canvas.width > 0 && cgl.canvas.height > 0)
        {
            try
            {
                const bigPixels = imgSizeW / s[0] > 3 || imgSizeH / s[1] > 3;
                const veryBigPixels = imgSizeW / s[0] > 10 || imgSizeH / s[1] > 10;

                if (sizeTex[1] == 1)
                {
                    ctx.imageSmoothingEnabled = false;// workaround filtering problems
                    ctx.drawImage(cgl.canvas,
                        0,
                        0,
                        s[0],
                        s[1],
                        layer.x,
                        layer.y,
                        layer.width,
                        layerHeight);// workaround filtering problems
                    ctx.imageSmoothingEnabled = true;
                }
                else
                if (sizeTex[0] == 1)
                {
                    ctx.imageSmoothingEnabled = false;// workaround filtering problems
                    ctx.drawImage(cgl.canvas,
                        0,
                        0,
                        s[0],
                        s[1],
                        layer.x,
                        layer.y,
                        layer.width,
                        layerHeight);
                    ctx.imageSmoothingEnabled = true;
                }
                else
                if (sizeImg[0] != 0 && sizeImg[1] != 0 && layer.width != 0 && layerHeight != 0 && imgSizeW != 0 && imgSizeH != 0)
                {
                    ctx.imageSmoothingEnabled = !bigPixels;

                    ctx.drawImage(cgl.canvas,
                        0,
                        0,
                        s[0],
                        s[1],
                        imgPosX,
                        imgPosY,
                        imgSizeW,
                        imgSizeH);
                }

                if (veryBigPixels)
                {
                    const stepx = imgSizeW / s[0];
                    const stepy = imgSizeH / s[1];

                    ctx.imageSmoothingEnabled = true;
                    ctx.lineWidth = 1;
                    ctx.globalAlpha = 0.5;
                    ctx.beginPath();

                    for (let x = 0; x <= s[0]; x++)
                    {
                        ctx.moveTo(imgPosX + x * stepx, imgPosY);
                        ctx.lineTo(imgPosX + x * stepx, imgPosY + imgSizeH);
                    }

                    for (let y = 0; y <= s[1]; y++)
                    {
                        ctx.moveTo(imgPosX, imgPosY + y * stepy);
                        ctx.lineTo(imgPosX + imgSizeW, imgPosY + y * stepy);
                    }

                    ctx.strokeStyle = "#555";
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }
            catch (e)
            {
                console.error("canvas drawimage exception...", e);
            }
            // }
        }

        let info = "";

        if (inShowInfo.get())
        {
            if (port.get() && port.get().getInfoOneLine) info += port.get().getInfoOneLine() + "\n";

        // ctx.save();
        // ctx.scale(layer.scale, layer.scale);
        // ctx.font = "normal 10px sourceCodePro";
        // ctx.fillStyle = "#000";
        // ctx.fillText(info, layer.x / layer.scale + 5 + 0.5, (layer.y + layer.height) / layer.scale - 5 + 0.5);
        // ctx.fillStyle = "#aaa";
        // ctx.fillText(info, layer.x / layer.scale + 5, (layer.y + layer.height) / layer.scale - 5);
        // ctx.restore();
        }

        if (inPickColor.get())
        {
            info += colorString + "\n";

            // ctx.save();
            // ctx.scale(layer.scale, layer.scale);
            // ctx.font = "normal 10px sourceCodePro";
            // ctx.fillStyle = "#000";
            // ctx.fillText("RGBA " + colorString, layer.x / layer.scale + 10 + 0.5, layer.y / layer.scale + 10 + 0.5);
            // ctx.fillStyle = "#aaa";
            // ctx.fillText("RGBA " + colorString, layer.x / layer.scale + 10, layer.y / layer.scale + 10);

            // ctx.restore();

            const x = imgPosX + imgSizeW * inX.get();
            const y = imgPosY + imgSizeH * inY.get();

            ctx.fillStyle = "#000";
            ctx.fillRect(
                x - 1,
                y - 10,
                3,
                20);

            ctx.fillRect(
                x,
                y - 1,
                20,
                3);

            ctx.fillStyle = "#fff";
            ctx.fillRect(
                x - 1,
                y - 10,
                1,
                20);

            ctx.fillRect(
                x - 10,
                y - 1,
                20,
                1);
        }

        op.setUiAttrib({ "comment": info });
        outInfo.set(info);

        if (inPickColor.get())
        {
            const gl = cgl.gl;

            const realTexture = inTex.get();
            if (!realTexture)
            {
                colorString = "";
                return;
            }
            if (!fb) fb = gl.createFramebuffer();
            if (!pixelReader) pixelReader = new CGL.PixelReader();

            gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, realTexture.tex, 0);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);

            pixelReader.read(cgl, fb, realTexture.pixelFormat, inX.get() * realTexture.width, realTexture.height - inY.get() * realTexture.height, 1, 1, (pixel) =>
            {
                if (!CGL.Texture.isPixelFormatFloat(realTexture.pixelFormat))
                {
                    colorString = "Pixel Float: " + Math.floor(pixel[0] / 255 * 100) / 100;
                    if (!isNaN(pixel[1]))colorString += ", " + Math.floor(pixel[1] / 255 * 100) / 100;
                    if (!isNaN(pixel[2]))colorString += ", " + Math.floor(pixel[2] / 255 * 100) / 100;
                    if (!isNaN(pixel[3]))colorString += ", " + Math.floor(pixel[3] / 255 * 100) / 100;
                    colorString += "\n";

                    if (realTexture.pixelFormat.indexOf("ubyte") > 0)
                    {
                        colorString += "Pixel UByte: ";
                        colorString += Math.round(pixel[0]);
                        if (!isNaN(pixel[1]))colorString += ", " + Math.round(pixel[1]);
                        if (!isNaN(pixel[2]))colorString += ", " + Math.round(pixel[2]);
                        if (!isNaN(pixel[3]))colorString += ", " + Math.round(pixel[3]);

                        colorString += "\n";
                    }
                }
                else
                {
                    colorString = "Pixel Float: " + Math.round(pixel[0] * 100) / 100 + ", " + Math.round(pixel[1] * 100) / 100 + ", " + Math.round(pixel[2] * 100) / 100 + ", " + Math.round(pixel[3] * 100) / 100;
                    colorString += "\n";
                }
            });
        }
    }

    cgl.gl.clearColor(0, 0, 0, 0);
    cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);

    perf.finish();
};


};

Ops.Ui.VizTexture.prototype = new CABLES.Op();
CABLES.OPS["4ea2d7b0-ca74-45db-962b-4d1965ac20c0"]={f:Ops.Ui.VizTexture,objName:"Ops.Ui.VizTexture"};




// **************************************************************
// 
// Ops.Json.SwitchObjectMultiPort
// 
// **************************************************************

Ops.Json.SwitchObjectMultiPort = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inIndex = op.inInt("Index", 0),
    inObjs = op.inMultiPort("Objects", CABLES.OP_PORT_TYPE_OBJECT),
    outResult = op.outObject("Object"),
    outNum = op.outNumber("Num Values");

inIndex.onChange =
inObjs.onChange = () =>
{
    const valuePorts = inObjs.get();
    const idx = Math.ceil(Math.min(valuePorts.length - 1, Math.max(0, inIndex.get())));

    outResult.setRef(valuePorts[idx].get());
    outNum.set(valuePorts.length);
};


};

Ops.Json.SwitchObjectMultiPort.prototype = new CABLES.Op();
CABLES.OPS["a69533a0-86ed-4c36-b3c1-ff22152acce8"]={f:Ops.Json.SwitchObjectMultiPort,objName:"Ops.Json.SwitchObjectMultiPort"};




// **************************************************************
// 
// Ops.String.FilterValidString
// 
// **************************************************************

Ops.String.FilterValidString = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inStr = op.inString("String", ""),
    checkNull = op.inBool("Invalid if null", true),
    checkUndefined = op.inBool("Invalid if undefined", true),
    checkEmpty = op.inBool("Invalid if empty", true),
    checkZero = op.inBool("Invalid if 0", true),
    outStr = op.outString("Last Valid String"),
    result = op.outBoolNum("Is Valid");

inStr.onChange =
checkNull.onChange =
checkUndefined.onChange =
checkEmpty.onChange =
function ()
{
    const str = inStr.get();
    let r = true;

    if (r === false)r = false;
    if (r && checkZero.get() && (str === 0 || str === "0")) r = false;
    if (r && checkNull.get() && str === null) r = false;
    if (r && checkUndefined.get() && str === undefined) r = false;
    if (r && checkEmpty.get() && str === "") r = false;

    result.set(r);
    if (r)outStr.set(str);
};


};

Ops.String.FilterValidString.prototype = new CABLES.Op();
CABLES.OPS["a522235d-f220-46ea-bc26-13a5b20ec8c6"]={f:Ops.String.FilterValidString,objName:"Ops.String.FilterValidString"};




// **************************************************************
// 
// Ops.Trigger.SequenceMultiPort
// 
// **************************************************************

Ops.Trigger.SequenceMultiPort = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inTrigs = op.inMultiPort("Input", CABLES.OP_PORT_TYPE_FUNCTION),
    outTrigs = op.outMultiPort("Output", CABLES.OP_PORT_TYPE_FUNCTION);

// op.setUiAttrib({ "resizable": true, "resizableY": false, "stretchPorts": true });

inTrigs.onTriggered = (index) =>
{
    const ports = outTrigs.get();

    for (let i = 0; i < ports.length; i++)
    {
        ports[i].trigger();
    }
};


};

Ops.Trigger.SequenceMultiPort.prototype = new CABLES.Op();
CABLES.OPS["be066ff6-85e2-408a-9570-59fb7abff7b2"]={f:Ops.Trigger.SequenceMultiPort,objName:"Ops.Trigger.SequenceMultiPort"};




// **************************************************************
// 
// Ops.Trigger.NthTrigger_v2
// 
// **************************************************************

Ops.Trigger.NthTrigger_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
let DEFAULT_NTH = 5;

// inputs
let exePort = op.inTriggerButton("Execute");
let nthPort = op.inValue("Nth", DEFAULT_NTH);

// outputs
let triggerPort = op.outTrigger("Next");

let count = 0;
let nth = DEFAULT_NTH;

exePort.onTriggered = onExeTriggered;
nthPort.onChange = valueChanged;

function onExeTriggered()
{
    count++;
    if (count % nth === 0)
    {
        count = 0;
        triggerPort.trigger();
    }
}

function valueChanged()
{
    nth = nthPort.get();
    count = 0;
}


};

Ops.Trigger.NthTrigger_v2.prototype = new CABLES.Op();
CABLES.OPS["ea43c184-5842-4aa1-b298-5db4515cbed0"]={f:Ops.Trigger.NthTrigger_v2,objName:"Ops.Trigger.NthTrigger_v2"};




// **************************************************************
// 
// Ops.Ui.VizString
// 
// **************************************************************

Ops.Ui.VizString = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inStr = op.inStringEditor("String"),
    inZoomText = op.inBool("ZoomText", false),
    inLineNums = op.inBool("Line Numbers", true),
    inWhitespace = op.inBool("Whitespace", false),
    inWrap = op.inBool("Wrap lines", true),
    syntax = op.inValueSelect("Syntax", ["text", "glsl", "css", "html", "xml", "json", "javascript", "inline-css", "sql"], "text"),
    inFontSize = op.inFloat("Font Size", 10),
    inPos = op.inFloatSlider("Scroll", 0);

op.setUiAttrib({ "height": 200, "width": 400, "resizable": true, "vizLayerMaxZoom": 2500 });
inStr.ignoreValueSerialize = true;

let lines = [];

inStr.onLinkChanged = () =>
{
    if (!inStr.isLinked())
    {
        lines = [];
        inStr.set(null);
    }
};

inStr.onChange = () =>
{
    if (inStr.get()) lines = inStr.get().split("\n");
    else lines = [];
};

op.renderVizLayer = (ctx, layer, viz) =>
{
    viz.clear(ctx, layer);

    if (!inStr.get()) return;

    ctx.save();
    ctx.scale(layer.scale, layer.scale);

    viz.renderText(ctx, layer, lines, {
        "zoomText": inZoomText.get(),
        "showLineNum": inLineNums.get(),
        "fontSize": inFontSize.get(),
        "scroll": inPos.get(),
        "syntax": syntax.get(),
        "showWhitespace": inWhitespace.get(),
        "wrap": inWrap.get()
    });

    ctx.restore();
};


};

Ops.Ui.VizString.prototype = new CABLES.Op();
CABLES.OPS["b4c93fde-85c6-4c7e-9962-a6463a84838b"]={f:Ops.Ui.VizString,objName:"Ops.Ui.VizString"};




// **************************************************************
// 
// Ops.Gl.MainLoop
// 
// **************************************************************

Ops.Gl.MainLoop = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    fpsLimit = op.inValue("FPS Limit", 0),
    trigger = op.outTrigger("trigger"),
    width = op.outNumber("width"),
    height = op.outNumber("height"),
    reduceFocusFPS = op.inValueBool("Reduce FPS not focussed", false),
    reduceLoadingFPS = op.inValueBool("Reduce FPS loading"),
    clear = op.inValueBool("Clear", true),
    clearAlpha = op.inValueBool("ClearAlpha", true),
    fullscreen = op.inValueBool("Fullscreen Button", false),
    active = op.inValueBool("Active", true),
    hdpi = op.inValueBool("Hires Displays", false),
    inUnit = op.inSwitch("Pixel Unit", ["Display", "CSS"], "Display");

op.onAnimFrame = render;
hdpi.onChange = function ()
{
    if (hdpi.get()) op.patch.cgl.pixelDensity = window.devicePixelRatio;
    else op.patch.cgl.pixelDensity = 1;

    op.patch.cgl.updateSize();
    if (CABLES.UI) gui.setLayout();
};

active.onChange = function ()
{
    op.patch.removeOnAnimFrame(op);

    if (active.get())
    {
        op.setUiAttrib({ "extendTitle": "" });
        op.onAnimFrame = render;
        op.patch.addOnAnimFrame(op);
        op.log("adding again!");
    }
    else
    {
        op.setUiAttrib({ "extendTitle": "Inactive" });
    }
};

const cgl = op.patch.cgl;
let rframes = 0;
let rframeStart = 0;
let timeOutTest = null;
let addedListener = false;

if (!op.patch.cgl) op.uiAttr({ "error": "No webgl cgl context" });

const identTranslate = vec3.create();
vec3.set(identTranslate, 0, 0, 0);
const identTranslateView = vec3.create();
vec3.set(identTranslateView, 0, 0, -2);

fullscreen.onChange = updateFullscreenButton;
setTimeout(updateFullscreenButton, 100);
let fsElement = null;

let winhasFocus = true;
let winVisible = true;

window.addEventListener("blur", () => { winhasFocus = false; });
window.addEventListener("focus", () => { winhasFocus = true; });
document.addEventListener("visibilitychange", () => { winVisible = !document.hidden; });
testMultiMainloop();

cgl.mainloopOp = this;

inUnit.onChange = () =>
{
    width.set(0);
    height.set(0);
};

function getFpsLimit()
{
    if (reduceLoadingFPS.get() && op.patch.loading.getProgress() < 1.0) return 5;

    if (reduceFocusFPS.get())
    {
        if (!winVisible) return 10;
        if (!winhasFocus) return 30;
    }

    return fpsLimit.get();
}

function updateFullscreenButton()
{
    function onMouseEnter()
    {
        if (fsElement)fsElement.style.display = "block";
    }

    function onMouseLeave()
    {
        if (fsElement)fsElement.style.display = "none";
    }

    op.patch.cgl.canvas.addEventListener("mouseleave", onMouseLeave);
    op.patch.cgl.canvas.addEventListener("mouseenter", onMouseEnter);

    if (fullscreen.get())
    {
        if (!fsElement)
        {
            fsElement = document.createElement("div");

            const container = op.patch.cgl.canvas.parentElement;
            if (container)container.appendChild(fsElement);

            fsElement.addEventListener("mouseenter", onMouseEnter);
            fsElement.addEventListener("click", function (e)
            {
                if (CABLES.UI && !e.shiftKey) gui.cycleFullscreen();
                else cgl.fullScreen();
            });
        }

        fsElement.style.padding = "10px";
        fsElement.style.position = "absolute";
        fsElement.style.right = "5px";
        fsElement.style.top = "5px";
        fsElement.style.width = "20px";
        fsElement.style.height = "20px";
        fsElement.style.cursor = "pointer";
        fsElement.style["border-radius"] = "40px";
        fsElement.style.background = "#444";
        fsElement.style["z-index"] = "9999";
        fsElement.style.display = "none";
        fsElement.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 490 490\" style=\"width:20px;height:20px;\" xml:space=\"preserve\" width=\"512px\" height=\"512px\"><g><path d=\"M173.792,301.792L21.333,454.251v-80.917c0-5.891-4.776-10.667-10.667-10.667C4.776,362.667,0,367.442,0,373.333V480     c0,5.891,4.776,10.667,10.667,10.667h106.667c5.891,0,10.667-4.776,10.667-10.667s-4.776-10.667-10.667-10.667H36.416     l152.459-152.459c4.093-4.237,3.975-10.99-0.262-15.083C184.479,297.799,177.926,297.799,173.792,301.792z\" fill=\"#FFFFFF\"/><path d=\"M480,0H373.333c-5.891,0-10.667,4.776-10.667,10.667c0,5.891,4.776,10.667,10.667,10.667h80.917L301.792,173.792     c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262c0.089-0.086,0.176-0.173,0.262-0.262     L469.333,36.416v80.917c0,5.891,4.776,10.667,10.667,10.667s10.667-4.776,10.667-10.667V10.667C490.667,4.776,485.891,0,480,0z\" fill=\"#FFFFFF\"/><path d=\"M36.416,21.333h80.917c5.891,0,10.667-4.776,10.667-10.667C128,4.776,123.224,0,117.333,0H10.667     C4.776,0,0,4.776,0,10.667v106.667C0,123.224,4.776,128,10.667,128c5.891,0,10.667-4.776,10.667-10.667V36.416l152.459,152.459     c4.237,4.093,10.99,3.975,15.083-0.262c3.992-4.134,3.992-10.687,0-14.82L36.416,21.333z\" fill=\"#FFFFFF\"/><path d=\"M480,362.667c-5.891,0-10.667,4.776-10.667,10.667v80.917L316.875,301.792c-4.237-4.093-10.99-3.976-15.083,0.261     c-3.993,4.134-3.993,10.688,0,14.821l152.459,152.459h-80.917c-5.891,0-10.667,4.776-10.667,10.667s4.776,10.667,10.667,10.667     H480c5.891,0,10.667-4.776,10.667-10.667V373.333C490.667,367.442,485.891,362.667,480,362.667z\" fill=\"#FFFFFF\"/></g></svg>";
    }
    else
    {
        if (fsElement)
        {
            fsElement.style.display = "none";
            fsElement.remove();
            fsElement = null;
        }
    }
}

op.onDelete = function ()
{
    cgl.gl.clearColor(0, 0, 0, 0);
    cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);
};

function render(time)
{
    if (!active.get()) return;
    if (cgl.aborted || cgl.canvas.clientWidth === 0 || cgl.canvas.clientHeight === 0) return;

    op.patch.cg = cgl;

    if (hdpi.get())op.patch.cgl.pixelDensity = window.devicePixelRatio;

    const startTime = performance.now();

    op.patch.config.fpsLimit = getFpsLimit();

    if (cgl.canvasWidth == -1)
    {
        cgl.setCanvas(op.patch.config.glCanvasId);
        return;
    }

    if (cgl.canvasWidth != width.get() || cgl.canvasHeight != height.get())
    {
        let div = 1;
        if (inUnit.get() == "CSS")div = op.patch.cgl.pixelDensity;

        width.set(cgl.canvasWidth / div);
        height.set(cgl.canvasHeight / div);
    }

    if (CABLES.now() - rframeStart > 1000)
    {
        CGL.fpsReport = CGL.fpsReport || [];
        if (op.patch.loading.getProgress() >= 1.0 && rframeStart !== 0)CGL.fpsReport.push(rframes);
        rframes = 0;
        rframeStart = CABLES.now();
    }
    CGL.MESH.lastShader = null;
    CGL.MESH.lastMesh = null;

    cgl.renderStart(cgl, identTranslate, identTranslateView);

    if (clear.get())
    {
        cgl.gl.clearColor(0, 0, 0, 1);
        cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);
    }

    trigger.trigger();

    if (CGL.MESH.lastMesh)CGL.MESH.lastMesh.unBind();

    if (CGL.Texture.previewTexture)
    {
        if (!CGL.Texture.texturePreviewer) CGL.Texture.texturePreviewer = new CGL.Texture.texturePreview(cgl);
        CGL.Texture.texturePreviewer.render(CGL.Texture.previewTexture);
    }
    cgl.renderEnd(cgl);

    op.patch.cg = null;

    if (clearAlpha.get())
    {
        cgl.gl.clearColor(1, 1, 1, 1);
        cgl.gl.colorMask(false, false, false, true);
        cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT);
        cgl.gl.colorMask(true, true, true, true);
    }

    if (!cgl.frameStore.phong)cgl.frameStore.phong = {};
    rframes++;

    op.patch.cgl.profileData.profileMainloopMs = performance.now() - startTime;
}

function testMultiMainloop()
{
    clearTimeout(timeOutTest);
    timeOutTest = setTimeout(
        () =>
        {
            if (op.patch.getOpsByObjName(op.name).length > 1)
            {
                op.setUiError("multimainloop", "there should only be one mainloop op!");
                if (!addedListener)addedListener = op.patch.addEventListener("onOpDelete", testMultiMainloop);
            }
            else op.setUiError("multimainloop", null, 1);
        }, 500);
}


};

Ops.Gl.MainLoop.prototype = new CABLES.Op();
CABLES.OPS["b0472a1d-db16-4ba6-8787-f300fbdc77bb"]={f:Ops.Gl.MainLoop,objName:"Ops.Gl.MainLoop"};




// **************************************************************
// 
// Ops.Math.Accumulator
// 
// **************************************************************

Ops.Math.Accumulator = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger("Trigger in"),
    inAddNumber = op.inValueFloat("Add to number", 0.0),
    inMultiplier = op.inValueFloat("Multiplier to add number", 1.0),
    inSetNumber = op.inValueFloat("Default Value", 1.0),
    inSet = op.inTriggerButton("Set Default Value"),
    outNumber = op.outNumber("Current value");

let lastTime = performance.now();
let currentNumber = 0.0;
let firsttime = true;

inSet.onTriggered = resetNumber;

function resetNumber()
{
    currentNumber = inSetNumber.get();
    outNumber.set(currentNumber);
    firsttime = true;
}

exe.onTriggered = function ()
{
    if (!firsttime)
    {
        let diff = (performance.now() - lastTime) / 100;
        currentNumber += inAddNumber.get() * diff * inMultiplier.get();
        outNumber.set(currentNumber);
    }
    lastTime = performance.now();
    firsttime = false;
};


};

Ops.Math.Accumulator.prototype = new CABLES.Op();
CABLES.OPS["460574ca-dca2-4283-8c37-57a8c446a51f"]={f:Ops.Math.Accumulator,objName:"Ops.Math.Accumulator"};




// **************************************************************
// 
// Ops.Boolean.TriggerChangedFalse
// 
// **************************************************************

Ops.Boolean.TriggerChangedFalse = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
let val = op.inValueBool("Value", false);
let next = op.outTrigger("Next");

let oldVal = 0;

val.onChange = function ()
{
    let newVal = val.get();
    if (oldVal && !newVal)
    {
        oldVal = false;
        next.trigger();
    }
    else
    {
        oldVal = true;
    }
};


};

Ops.Boolean.TriggerChangedFalse.prototype = new CABLES.Op();
CABLES.OPS["6387bcb0-6091-4199-8ab7-f96ad4aa3c7d"]={f:Ops.Boolean.TriggerChangedFalse,objName:"Ops.Boolean.TriggerChangedFalse"};




// **************************************************************
// 
// Ops.Math.Compare.LessThan
// 
// **************************************************************

Ops.Math.Compare.LessThan = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const number1 = op.inValue("number1");
const number2 = op.inValue("number2");
const result = op.outBoolNum("result");

op.setUiAttribs({ "mathTitle": true });

number1.onChange = exec;
number2.onChange = exec;
exec();

function exec()
{
    result.set(number1.get() < number2.get());
}


};

Ops.Math.Compare.LessThan.prototype = new CABLES.Op();
CABLES.OPS["04fd113f-ade1-43fb-99fa-f8825f8814c0"]={f:Ops.Math.Compare.LessThan,objName:"Ops.Math.Compare.LessThan"};




// **************************************************************
// 
// Ops.String.StringContains_v2
// 
// **************************************************************

Ops.String.StringContains_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inStr = op.inString("String"),
    inValue = op.inString("SearchValue"),
    outFound = op.outBoolNum("Found", false),
    outIndex = op.outNumber("Index", -1);

inValue.onChange =
    inStr.onChange = exec;

exec();

function exec()
{
    if (inStr.get() && inValue.get() && inValue.get().length > 0)
    {
        const index = inStr.get().indexOf(inValue.get());
        outIndex.set(index);
        outFound.set(index > -1);
    }
    else
    {
        outIndex.set(-1);
        outFound.set(false);
    }
}


};

Ops.String.StringContains_v2.prototype = new CABLES.Op();
CABLES.OPS["2ca3e5d7-e6b4-46a7-8381-3fe1ad8b6879"]={f:Ops.String.StringContains_v2,objName:"Ops.String.StringContains_v2"};




// **************************************************************
// 
// Ops.Math.Delta
// 
// **************************************************************

Ops.Math.Delta = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    val = op.inValue("Value"),
    changeAlwaysPort = op.inValueBool("Change Always", false),
    inReset = op.inTrigger("Reset"),
    result = op.outNumber("Delta");

val.changeAlways = false;

let oldVal = 0;
let firstTime = true;

changeAlwaysPort.onChange = function ()
{
    val.changeAlways = changeAlwaysPort.get();
};

inReset.onTriggered = function ()
{
    firstTime = true;
};

val.onChange = function ()
{
    let change = oldVal - val.get();
    oldVal = val.get();
    if (firstTime)
    {
        firstTime = false;
        return;
    }
    result.set(change);
};


};

Ops.Math.Delta.prototype = new CABLES.Op();
CABLES.OPS["0f203337-e13c-47ec-a09f-b309212540b0"]={f:Ops.Math.Delta,objName:"Ops.Math.Delta"};




// **************************************************************
// 
// Ops.Math.Clamp
// 
// **************************************************************

Ops.Math.Clamp = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    val = op.inValueFloat("val", 0.5),
    min = op.inValueFloat("min", 0),
    max = op.inValueFloat("max", 1),
    ignore = op.inValueBool("ignore outside values"),
    result = op.outNumber("result");

val.onChange = min.onChange = max.onChange = clamp;

function clamp()
{
    if (ignore.get())
    {
        if (val.get() > max.get()) return;
        if (val.get() < min.get()) return;
    }
    result.set(Math.min(Math.max(val.get(), min.get()), max.get()));
}


};

Ops.Math.Clamp.prototype = new CABLES.Op();
CABLES.OPS["cda1a98e-5e16-40bd-9b18-a67e9eaad5a1"]={f:Ops.Math.Clamp,objName:"Ops.Math.Clamp"};




// **************************************************************
// 
// Ops.Math.FlipSign
// 
// **************************************************************

Ops.Math.FlipSign = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inval = op.inValueFloat("Value", 1),
    result = op.outNumber("Result");

inval.onChange = update;
update();

function update()
{
    result.set(inval.get() * -1);
}


};

Ops.Math.FlipSign.prototype = new CABLES.Op();
CABLES.OPS["f5c858a2-2654-4108-86fe-319efa70ecec"]={f:Ops.Math.FlipSign,objName:"Ops.Math.FlipSign"};




// **************************************************************
// 
// Ops.Ui.VizTrigger
// 
// **************************************************************

Ops.Ui.VizTrigger = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inTrigger = op.inTriggerButton("Trigger"),
    inReset = op.inTriggerButton("Reset"),
    outCount = op.outNumber("Count");

op.setUiAttrib({ "height": 100, "width": 130, "resizable": true });

let lastTime = 0;
let count = 0;

inReset.onTriggered = () =>
{
    count = 0;
    op.setUiAttrib({ "extendTitle": "_____" + String(count) });
    outCount.set(count);
};

inTrigger.onTriggered = () =>
{
    lastTime = performance.now();
    op.setUiAttrib({ "extendTitle": String(++count) });
    outCount.set(count);
};

op.renderVizLayer = (ctx, layer) =>
{
    ctx.fillStyle = "#222";
    ctx.fillRect(
        layer.x, layer.y,
        layer.width, layer.height);

    let radius = Math.min(layer.height, layer.width) / 2.4 * 0.8;
    let diff = performance.now() - lastTime;

    let v = CABLES.map(diff, 0, 100, 1, 0);

    ctx.globalAlpha = v + 0.3;
    ctx.fillStyle = "#ccc";

    let circle = new Path2D();

    const sizeAnim = v * 6;
    circle.arc(
        layer.x + layer.width / 2,
        layer.y + layer.height / 2,
        radius - (ctx.lineWidth / 2) + (sizeAnim * 2),
        0, 2 * Math.PI, false);
    ctx.fill(circle);

    ctx.globalAlpha = 1.0;
};


};

Ops.Ui.VizTrigger.prototype = new CABLES.Op();
CABLES.OPS["4533060f-3cd4-4572-ac78-dad0710a3f7a"]={f:Ops.Ui.VizTrigger,objName:"Ops.Ui.VizTrigger"};




// **************************************************************
// 
// Ops.String.SwitchStringMultiPort
// 
// **************************************************************

Ops.String.SwitchStringMultiPort = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inIndex = op.inInt("Index", 0),
    inStrs = op.inMultiPort("Strings", CABLES.OP_PORT_TYPE_STRING),
    outResult = op.outString("String"),
    outNum = op.outNumber("Num Values");

inIndex.onChange =
inStrs.onChange = () =>
{
    const valuePorts = inStrs.get();
    const idx = Math.ceil(Math.min(valuePorts.length - 1, Math.max(0, inIndex.get())));

    outResult.set(valuePorts[idx].get());
    outNum.set(valuePorts.length);
};


};

Ops.String.SwitchStringMultiPort.prototype = new CABLES.Op();
CABLES.OPS["cf8a883f-cf09-44a6-ba1c-7f9c1220b618"]={f:Ops.String.SwitchStringMultiPort,objName:"Ops.String.SwitchStringMultiPort"};




// **************************************************************
// 
// Ops.Net.WebSocket.WebSocketSend
// 
// **************************************************************

Ops.Net.WebSocket.WebSocketSend = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inConnection = op.inObject("Connection", null, "Websocket"),
    inObject = op.inObject("Object"),
    inSend = op.inTriggerButton("Send"),
    inStringify = op.inBool("Send String", true),
    outSent = op.outBoolNum("Sent");

let connection = null;

inConnection.onChange = function ()
{
    connection = inConnection.get();
};

inSend.onTriggered = function ()
{
    if (connection && inObject.get())
    {
        if (inStringify.get())connection.send(JSON.stringify(inObject.get()));
        else connection.send(inObject.get());

        outSent.set(true);
    }
    else
    {
        outSent.set(false);
    }
};


};

Ops.Net.WebSocket.WebSocketSend.prototype = new CABLES.Op();
CABLES.OPS["071149e8-5ac5-43dd-a052-e32dbd80cae2"]={f:Ops.Net.WebSocket.WebSocketSend,objName:"Ops.Net.WebSocket.WebSocketSend"};




// **************************************************************
// 
// Ops.String.StringEditor
// 
// **************************************************************

Ops.String.StringEditor = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    v = op.inStringEditor("value", ""),
    syntax = op.inValueSelect("Syntax", ["text", "glsl", "css", "html", "xml", "json", "javascript", "inline-css", "sql"], "text"),
    result = op.outString("Result");

syntax.onChange = updateSyntax;

function updateSyntax()
{
    let s = syntax.get();
    if (s == "javascript")s = "js";
    v.setUiAttribs({ "editorSyntax": s });
}

v.onChange = function ()
{
    result.set(v.get());
};


};

Ops.String.StringEditor.prototype = new CABLES.Op();
CABLES.OPS["6468b7c1-f63e-4db4-b809-4b203d27ead3"]={f:Ops.String.StringEditor,objName:"Ops.String.StringEditor"};




// **************************************************************
// 
// Ops.Json.ParseObject_v2
// 
// **************************************************************

Ops.Json.ParseObject_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    str = op.inStringEditor("JSON String", "{}", "json"),
    outObj = op.outObject("Result"),
    isValid = op.outBoolNum("Valid");

str.onChange = parse;
parse();

function parse()
{
    if (!str.get())
    {
        outObj.set(null);
        isValid.set(false);
        return;
    }
    try
    {
        const obj = JSON.parse(str.get());
        outObj.setRef(obj);
        isValid.set(true);
        op.setUiError("invalidjson", null);
    }
    catch (ex)
    {
        op.logWarn(ex);
        isValid.set(false);

        let outStr = "";
        const parts = ex.message.split(" ");
        for (let i = 0; i < parts.length - 1; i++)
        {
            const num = parseFloat(parts[i + 1]);
            if (num && parts[i] == "position")
            {
                const outStrA = str.get().substring(num - 15, num);
                const outStrB = str.get().substring(num, num + 1);
                const outStrC = str.get().substring(num + 1, num + 15);
                outStr = "<span style=\"font-family:monospace;background-color:black;\">" + outStrA + "<span style=\"font-weight:bold;background-color:red;\">" + outStrB + "</span>" + outStrC + " </span>";
            }
        }

        op.setUiError("invalidjson", "INVALID JSON<br/>can not parse string to object:<br/><b> " + ex.message + "</b><br/>" + outStr);
    }
}


};

Ops.Json.ParseObject_v2.prototype = new CABLES.Op();
CABLES.OPS["2ce8a4d3-37d3-4cdc-abd1-a560fbe841ee"]={f:Ops.Json.ParseObject_v2,objName:"Ops.Json.ParseObject_v2"};




// **************************************************************
// 
// Ops.Json.ObjectSetNumber_v2
// 
// **************************************************************

Ops.Json.ObjectSetNumber_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inObject = op.inObject("Object"),
    outObject = op.outObject("Result Object"),
    inKey = op.inString("Key"),
    inValue = op.inFloat("Number");

inObject.onChange =
    inValue.onChange = update;

inKey.setUiAttribs({ "stringTrim": true, "minLength": 1 });

function update()
{
    let obj = inObject.get();
    if (!obj)obj = {};

    const newObj = JSON.parse(JSON.stringify(obj));

    newObj[inKey.get()] = inValue.get();

    outObject.setRef(newObj);
}

inKey.onChange = () =>
{
    op.setUiAttrib({ "extendTitle": inKey.get() });
    update();
};


};

Ops.Json.ObjectSetNumber_v2.prototype = new CABLES.Op();
CABLES.OPS["20f7bcab-ed71-45d1-9fae-d89aacf3961b"]={f:Ops.Json.ObjectSetNumber_v2,objName:"Ops.Json.ObjectSetNumber_v2"};




// **************************************************************
// 
// Ops.Json.Object
// 
// **************************************************************

Ops.Json.Object = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    i = op.inObject("Object"),
    r = op.outObject("Result");

i.onChange = () =>
{
    r.setRef(i.get());
};


};

Ops.Json.Object.prototype = new CABLES.Op();
CABLES.OPS["d618f2e1-4e60-4ac4-91aa-218bab2a6742"]={f:Ops.Json.Object,objName:"Ops.Json.Object"};




// **************************************************************
// 
// Ops.Json.ObjectMerge
// 
// **************************************************************

Ops.Json.ObjectMerge = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inObj1 = op.inObject("Object 1"),
    inObj2 = op.inObject("Object 2"),
    outObj = op.outObject("Object Result");

function copy(src, dst)
{
    if (!src) return;

    for (const i in src)
    {
        dst[i] = src[i];
    }
}

inObj1.onChange =
inObj2.onChange = () =>
{
    const newObj = {};

    copy(inObj1.get(), newObj);
    copy(inObj2.get(), newObj);

    outObj.setRef(newObj);
};


};

Ops.Json.ObjectMerge.prototype = new CABLES.Op();
CABLES.OPS["0eb48a27-6fe8-4900-93d8-de68bde44ffb"]={f:Ops.Json.ObjectMerge,objName:"Ops.Json.ObjectMerge"};




// **************************************************************
// 
// Ops.Trigger.IsTriggered
// 
// **************************************************************

Ops.Trigger.IsTriggered = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exec = op.inTrigger("Trigger"),
    next = op.outTrigger("Next"),
    result = op.outBoolNum("Was Triggered", false);

let frameCount = 0;

op.onAnimFrame = function (tt)
{
    frameCount++;
    if (frameCount > 1) result.set(false);
};

exec.onTriggered = function ()
{
    frameCount = 0;
    result.set(true);
    next.trigger();
};


};

Ops.Trigger.IsTriggered.prototype = new CABLES.Op();
CABLES.OPS["7c96fee9-4c2f-45e1-a41b-096b06d286b8"]={f:Ops.Trigger.IsTriggered,objName:"Ops.Trigger.IsTriggered"};




// **************************************************************
// 
// Ops.Standalone.MouseButtonsWindow
// 
// **************************************************************

Ops.Standalone.MouseButtonsWindow = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    mouseClickLeft = op.outTrigger("Click Left"),
    mouseClickRight = op.outTrigger("Click Right"),
    mouseDoubleClick = op.outTrigger("Double Click"),
    mouseDownLeft = op.outBoolNum("Button pressed Left", false),
    mouseDownMiddle = op.outBoolNum("Button pressed Middle", false),
    mouseDownRight = op.outBoolNum("Button pressed Right", false),
    triggerMouseDownLeft = op.outTrigger("Mouse Down Left"),
    triggerMouseDownMiddle = op.outTrigger("Mouse Down Middle"),
    triggerMouseDownRight = op.outTrigger("Mouse Down Right"),
    triggerMouseUpLeft = op.outTrigger("Mouse Up Left"),
    triggerMouseUpMiddle = op.outTrigger("Mouse Up Middle"),
    triggerMouseUpRight = op.outTrigger("Mouse Up Right"),
    area = op.inValueSelect("Area", ["Canvas", "Document", "Window"], "Window"),
    active = op.inValueBool("Active", true);

const cgl = op.patch.cgl;
let listenerElement = null;
area.onChange = updateListeners;
op.onDelete = removeListeners;
updateListeners();

function onMouseDown(e)
{
    if (e.which == 1)
    {
        mouseDownLeft.set(true);
        triggerMouseDownLeft.trigger();
    }
    else if (e.which == 2)
    {
        mouseDownMiddle.set(true);
        triggerMouseDownMiddle.trigger();
    }
    else if (e.which == 3)
    {
        mouseDownRight.set(true);
        triggerMouseDownRight.trigger();
    }
}

function onMouseUp(e)
{
    if (e.which == 1)
    {
        mouseDownLeft.set(false);
        triggerMouseUpLeft.trigger();
    }
    else if (e.which == 2)
    {
        mouseDownMiddle.set(false);
        triggerMouseUpMiddle.trigger();
    }
    else if (e.which == 3)
    {
        mouseDownRight.set(false);
        triggerMouseUpRight.trigger();
    }
}

function onClickRight(e)
{
    mouseClickRight.trigger();
    e.preventDefault();
}

function onDoubleClick(e)
{
    mouseDoubleClick.trigger();
}

function onmouseclick(e)
{
    mouseClickLeft.trigger();
}

function ontouchstart(event)
{
    if (event.touches && event.touches.length > 0)
    {
        event.touches[0].which = 1;
        onMouseDown(event.touches[0]);
    }
}

function ontouchend(event)
{
    onMouseUp({ "which": 1 });
}

function removeListeners()
{
    if (!listenerElement) return;
    listenerElement.removeEventListener("touchend", ontouchend);
    listenerElement.removeEventListener("touchcancel", ontouchend);
    listenerElement.removeEventListener("touchstart", ontouchstart);
    listenerElement.removeEventListener("dblclick", onDoubleClick);
    listenerElement.removeEventListener("click", onmouseclick);
    listenerElement.removeEventListener("mousedown", onMouseDown);
    listenerElement.removeEventListener("mouseup", onMouseUp);
    listenerElement.removeEventListener("contextmenu", onClickRight);
    listenerElement.removeEventListener("mouseleave", onMouseUp);
    listenerElement = null;
}

function addListeners()
{
    if (listenerElement)removeListeners();

    listenerElement = cgl.canvas;
    if (area.get() == "Document") listenerElement = document.body;
    if (area.get() == "Window") listenerElement = globalThis.window;

    listenerElement.addEventListener("touchend", ontouchend);
    listenerElement.addEventListener("touchcancel", ontouchend);
    listenerElement.addEventListener("touchstart", ontouchstart);
    listenerElement.addEventListener("dblclick", onDoubleClick);
    listenerElement.addEventListener("click", onmouseclick);
    listenerElement.addEventListener("mousedown", onMouseDown);
    listenerElement.addEventListener("mouseup", onMouseUp);
    listenerElement.addEventListener("contextmenu", onClickRight);
    listenerElement.addEventListener("mouseleave", onMouseUp);
}

op.onLoaded = updateListeners;

active.onChange = updateListeners;

function updateListeners()
{
    removeListeners();
    if (active.get()) addListeners();
}


};

Ops.Standalone.MouseButtonsWindow.prototype = new CABLES.Op();
CABLES.OPS["cd56f931-c03b-4fb6-8070-871d3597e8a9"]={f:Ops.Standalone.MouseButtonsWindow,objName:"Ops.Standalone.MouseButtonsWindow"};




// **************************************************************
// 
// Ops.Json.ObjectGetObject_v2
// 
// **************************************************************

Ops.Json.ObjectGetObject_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    data = op.inObject("Object"),
    key = op.inString("Key"),
    result = op.outObject("Result");

result.ignoreValueSerialize = true;
data.ignoreValueSerialize = true;

op.setUiAttrib({ "extendTitlePort": key.name });
key.setUiAttribs({ "stringTrim": true });

key.onChange =
    data.onChange = update;

key.on("change", updateUi);
updateUi();
function updateUi()
{
    if (!key.get())op.setUiError("nokey", "Missing Key Value");
    else op.setUiError("nokey", null);
}

function update()
{
    if (data.get())
    {
        result.setRef(data.get()[key.get()]);
    }
    else
    {
        result.set(null);
    }
}


};

Ops.Json.ObjectGetObject_v2.prototype = new CABLES.Op();
CABLES.OPS["d1dfa305-89db-4ca1-b0ac-2d6321d76ae8"]={f:Ops.Json.ObjectGetObject_v2,objName:"Ops.Json.ObjectGetObject_v2"};




// **************************************************************
// 
// Ops.Boolean.TriggerChangedTrue
// 
// **************************************************************

Ops.Boolean.TriggerChangedTrue = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
let val = op.inValueBool("Value", false);
let next = op.outTrigger("Next");
let oldVal = 0;

val.onChange = function ()
{
    let newVal = val.get();
    if (!oldVal && newVal)
    {
        oldVal = true;
        next.trigger();
    }
    else
    {
        oldVal = false;
    }
};


};

Ops.Boolean.TriggerChangedTrue.prototype = new CABLES.Op();
CABLES.OPS["385197e1-8b34-4d1c-897f-d1386d99e3b3"]={f:Ops.Boolean.TriggerChangedTrue,objName:"Ops.Boolean.TriggerChangedTrue"};




// **************************************************************
// 
// Ops.Trigger.TriggerButton
// 
// **************************************************************

Ops.Trigger.TriggerButton = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inTrig = op.inTriggerButton("Trigger"),
    outTrig = op.outTrigger("Next");

inTrig.onTriggered = function ()
{
    outTrig.trigger();
};


};

Ops.Trigger.TriggerButton.prototype = new CABLES.Op();
CABLES.OPS["21630924-39e4-4df5-9965-b9136510d156"]={f:Ops.Trigger.TriggerButton,objName:"Ops.Trigger.TriggerButton"};




// **************************************************************
// 
// Ops.Json.FilterValidObject
// 
// **************************************************************

Ops.Json.FilterValidObject = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inObj = op.inObject("Object"),
    outObject = op.outObject("Last Valid Object"),
    outValid = op.outBool("Is Valid");

inObj.onChange =
    update;

function update()
{
    const obj = inObj.get();

    let r = true;

    if (!obj) r = false;

    if (r) outObject.setRef(obj);

    outValid.set(r);
}


};

Ops.Json.FilterValidObject.prototype = new CABLES.Op();
CABLES.OPS["a851cddb-74e5-41e7-ac75-709beae914fd"]={f:Ops.Json.FilterValidObject,objName:"Ops.Json.FilterValidObject"};




// **************************************************************
// 
// Ops.Boolean.And
// 
// **************************************************************

Ops.Boolean.And = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    bool0 = op.inValueBool("bool 1"),
    bool1 = op.inValueBool("bool 2"),
    result = op.outBoolNum("result");

bool0.onChange =
bool1.onChange = exec;

function exec()
{
    result.set(bool1.get() && bool0.get());
}


};

Ops.Boolean.And.prototype = new CABLES.Op();
CABLES.OPS["c26e6ce0-8047-44bb-9bc8-5a4f911ed8ad"]={f:Ops.Boolean.And,objName:"Ops.Boolean.And"};




// **************************************************************
// 
// Ops.Patch.P4Zknbo.ArrayOfSrvbValuesFromMap
// 
// **************************************************************

Ops.Patch.P4Zknbo.ArrayOfSrvbValuesFromMap = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
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


};

Ops.Patch.P4Zknbo.ArrayOfSrvbValuesFromMap.prototype = new CABLES.Op();
CABLES.OPS["8b905906-ea16-42d7-b77c-c5685e063a36"]={f:Ops.Patch.P4Zknbo.ArrayOfSrvbValuesFromMap,objName:"Ops.Patch.P4Zknbo.ArrayOfSrvbValuesFromMap"};




// **************************************************************
// 
// Ops.Devices.Mouse.Mouse_v3
// 
// **************************************************************

Ops.Devices.Mouse.Mouse_v3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inCoords = op.inSwitch("Coordinates", ["-1 to 1", "Pixel Display", "Pixel", "0 to 1"], "-1 to 1"),
    area = op.inValueSelect("Area", ["Canvas", "Document", "Parent Element", "Canvas Area"], "Canvas"),
    flipY = op.inValueBool("flip y", true),
    rightClickPrevDef = op.inBool("right click prevent default", true),
    touchscreen = op.inValueBool("Touch support", true),
    inPassive = op.inValueBool("Passive Events", false),
    active = op.inValueBool("Active", true),
    outMouseX = op.outNumber("x", 0),
    outMouseY = op.outNumber("y", 0),
    mouseClick = op.outTrigger("click"),
    mouseClickRight = op.outTrigger("click right"),
    mouseDown = op.outBoolNum("Button is down"),
    mouseOver = op.outBoolNum("Mouse is hovering"),
    outMovementX = op.outNumber("Movement X", 0),
    outMovementY = op.outNumber("Movement Y", 0);

const cgl = op.patch.cgl;
let normalize = 1;
let listenerElement = null;
let sizeElement = null;

inPassive.onChange =
area.onChange = addListeners;

inCoords.onChange = updateCoordNormalizing;
op.onDelete = removeListeners;

addListeners();

op.on("loadedValueSet", onStart);

function onStart()
{
    if (normalize == 0)
    {
        if (sizeElement.clientWidth === 0) setTimeout(onStart, 50);

        outMouseX.set(sizeElement.clientWidth / 2);
        outMouseY.set(sizeElement.clientHeight / 2);
    }
    else if (normalize == 1)
    {
        outMouseX.set(0);
        outMouseY.set(0);
    }
    else if (normalize == 2)
    {
        outMouseX.set(0.5);
        outMouseY.set(0.5);
    }
    else if (normalize == 3)
    {
        if (sizeElement.clientWidth === 0)
        {
            setTimeout(onStart, 50);
        }

        outMouseX.set(sizeElement.clientWidth / 2 / cgl.pixelDensity);
        outMouseY.set(sizeElement.clientHeight / 2 / cgl.pixelDensity);
    }
    else console.error("unknown normalize mouse", normalize);
}

function setValue(x, y)
{
    x = x || 0;
    y = y || 0;

    if (normalize == 0) // pixel
    {
        outMouseX.set(x);
        outMouseY.set(y);
    }
    else
    if (normalize == 3) // pixel css
    {
        outMouseX.set(x * cgl.pixelDensity);
        outMouseY.set(y * cgl.pixelDensity);
    }
    else
    {
        let w = sizeElement.clientWidth / cgl.pixelDensity;
        let h = sizeElement.clientHeight / cgl.pixelDensity;

        w = w || 1;
        h = h || 1;

        if (normalize == 1) // -1 to 1
        {
            let xx = (x / w * 2.0 - 1.0);
            let yy = (y / h * 2.0 - 1.0);
            xx = CABLES.clamp(xx, -1, 1);
            yy = CABLES.clamp(yy, -1, 1);

            outMouseX.set(xx);
            outMouseY.set(yy);
        }
        else if (normalize == 2) // 0 to 1
        {
            let xx = x / w;
            let yy = y / h;

            xx = CABLES.clamp(xx, 0, 1);
            yy = CABLES.clamp(yy, 0, 1);

            outMouseX.set(xx);
            outMouseY.set(yy);
        }
    }
}

function checkHovering(e)
{
    const r = sizeElement.getBoundingClientRect();

    return (
        e.clientX > r.left &&
        e.clientX < r.left + r.width &&
        e.clientY > r.top &&
        e.clientY < r.top + r.height
    );
}

touchscreen.onChange = function ()
{
    removeListeners();
    addListeners();
};

active.onChange = function ()
{
    if (listenerElement)removeListeners();
    if (active.get())addListeners();
};

function updateCoordNormalizing()
{
    if (inCoords.get() == "Pixel") normalize = 0;
    else if (inCoords.get() == "-1 to 1") normalize = 1;
    else if (inCoords.get() == "0 to 1") normalize = 2;
    else if (inCoords.get() == "Pixel Display") normalize = 3;
}

function onMouseEnter(e)
{
    mouseDown.set(false);
    mouseOver.set(checkHovering(e));
}

function onMouseDown(e)
{
    if (!checkHovering(e)) return;
    mouseDown.set(true);
}

function onMouseUp(e)
{
    mouseDown.set(false);
}

function onClickRight(e)
{
    if (!checkHovering(e)) return;
    mouseClickRight.trigger();
    if (rightClickPrevDef.get()) e.preventDefault();
}

function onmouseclick(e)
{
    if (!checkHovering(e)) return;
    mouseClick.trigger();
}

function onMouseLeave(e)
{
    mouseDown.set(false);
    mouseOver.set(checkHovering(e));
}

function setCoords(e)
{
    let x = e.clientX;
    let y = e.clientY;

    if (area.get() != "Document")
    {
        x = e.offsetX;
        y = e.offsetY;
    }
    if (area.get() === "Canvas Area")
    {
        const r = sizeElement.getBoundingClientRect();
        x = e.clientX - r.left;
        y = e.clientY - r.top;
    }

    if (flipY.get()) y = sizeElement.clientHeight - y;

    setValue(x / cgl.pixelDensity, y / cgl.pixelDensity);
}

function onmousemove(e)
{
    mouseOver.set(checkHovering(e));
    setCoords(e);

    outMovementX.set(e.movementX / cgl.pixelDensity);
    outMovementY.set(e.movementY / cgl.pixelDensity);
}

function ontouchmove(e)
{
    if (event.touches && event.touches.length > 0) setCoords(e.touches[0]);
}

function ontouchstart(event)
{
    mouseDown.set(true);

    if (event.touches && event.touches.length > 0) onMouseDown(event.touches[0]);
}

function ontouchend(event)
{
    mouseDown.set(false);
    onMouseUp();
}

function removeListeners()
{
    if (!listenerElement) return;
    listenerElement.removeEventListener("touchend", ontouchend);
    listenerElement.removeEventListener("touchstart", ontouchstart);
    listenerElement.removeEventListener("touchmove", ontouchmove);

    listenerElement.removeEventListener("click", onmouseclick);
    listenerElement.removeEventListener("mousemove", onmousemove);
    listenerElement.removeEventListener("mouseleave", onMouseLeave);
    listenerElement.removeEventListener("mousedown", onMouseDown);
    listenerElement.removeEventListener("mouseup", onMouseUp);
    listenerElement.removeEventListener("mouseenter", onMouseEnter);
    listenerElement.removeEventListener("contextmenu", onClickRight);
    listenerElement = null;
}

function addListeners()
{
    if (listenerElement || !active.get())removeListeners();
    if (!active.get()) return;

    listenerElement = sizeElement = cgl.canvas;
    if (area.get() == "Canvas Area")
    {
        sizeElement = cgl.canvas.parentElement;
        listenerElement = document.body;
    }
    if (area.get() == "Document") sizeElement = listenerElement = document.body;
    if (area.get() == "Parent Element") listenerElement = sizeElement = cgl.canvas.parentElement;

    let passive = false;
    if (inPassive.get())passive = { "passive": true };

    if (touchscreen.get())
    {
        listenerElement.addEventListener("touchend", ontouchend, passive);
        listenerElement.addEventListener("touchstart", ontouchstart, passive);
        listenerElement.addEventListener("touchmove", ontouchmove, passive);
    }

    listenerElement.addEventListener("mousemove", onmousemove, passive);
    listenerElement.addEventListener("mouseleave", onMouseLeave, passive);
    listenerElement.addEventListener("mousedown", onMouseDown, passive);
    listenerElement.addEventListener("mouseup", onMouseUp, passive);
    listenerElement.addEventListener("mouseenter", onMouseEnter, passive);
    listenerElement.addEventListener("contextmenu", onClickRight, passive);
    listenerElement.addEventListener("click", onmouseclick, passive);
}

//


};

Ops.Devices.Mouse.Mouse_v3.prototype = new CABLES.Op();
CABLES.OPS["6d1edbc0-088a-43d7-9156-918fb3d7f24b"]={f:Ops.Devices.Mouse.Mouse_v3,objName:"Ops.Devices.Mouse.Mouse_v3"};




// **************************************************************
// 
// Ops.Sidebar.SideBarSwitch
// 
// **************************************************************

Ops.Sidebar.SideBarSwitch = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const parentPort = op.inObject("link"),
    inArr = op.inArray("Names"),
    inStyle = op.inSwitch("Style", ["Tabs", "Switch"], "Switch"),
    labelPort = op.inString("Text", "Switch"),

    inInput = op.inInt("Input", 0),

    setDefaultValueButtonPort = op.inTriggerButton("Set Default"),
    inGreyOut = op.inBool("Grey Out", false),
    inDefault = op.inValue("Default", 0),

    siblingsPort = op.outObject("childs"),
    outIndex = op.outNumber("Index", -1),
    outStr = op.outString("String");

let elTabActive = null;
const el = document.createElement("div");
el.classList.add("sidebar__item");
el.dataset.op = op.id;
el.classList.add("cablesEle");
inDefault.setUiAttribs({ "greyout": true });

const label = document.createElement("div");
label.classList.add("sidebar__item-label");
const labelText = document.createTextNode(labelPort.get());
label.appendChild(labelText);
el.appendChild(label);

const switchGroup = document.createElement("div");
el.appendChild(switchGroup);

const greyOut = document.createElement("div");
greyOut.classList.add("sidebar__greyout");
el.appendChild(greyOut);
greyOut.style.display = "none";

parentPort.onChange = onParentChanged;
op.onDelete = onDelete;

op.toWorkNeedsParent("Ops.Sidebar.Sidebar");
op.setPortGroup("Default Item", [inDefault, setDefaultValueButtonPort]);
const tabEles = [];

inArr.onChange = rebuildHtml;
inStyle.onChange = updateStyle;
updateStyle();

labelPort.onChange = () =>
{
    label.innerHTML = labelPort.get();
};

inGreyOut.onChange = function ()
{
    greyOut.style.display = inGreyOut.get() ? "block" : "none";
};

function rebuildHtml()
{
    tabEles.length = 0;
    switchGroup.innerHTML = "";
    elTabActive = null;

    const arr = inArr.get();
    if (!arr) return;

    for (let i = 0; i < arr.length; i++)
    {
        const el = addTab(String(arr[i]));
        if (i == inDefault.get())setActiveTab(el);
    }
}

setDefaultValueButtonPort.onTriggered = () =>
{
    inDefault.set(outIndex.get());
    op.refreshParams();
};

function updateStyle()
{
    if (inStyle.get() == "Tabs")
    {
        el.classList.add("sidebar_tabs");
        switchGroup.classList.remove("sidebar_switchs");
        label.style.display = "none";
    }
    else
    {
        el.classList.remove("sidebar_tabs");
        switchGroup.classList.add("sidebar_switchs");
        label.style.display = "inline-block";
    }

    labelPort.setUiAttribs({ "greyout": inStyle.get() == "Tabs" });

    rebuildHtml();
}

function addTab(title)
{
    const tabEle = document.createElement("div");

    if (inStyle.get() == "Tabs") tabEle.classList.add("sidebar_tab");
    else tabEle.classList.add("sidebar_switch");

    tabEle.id = "tabEle" + tabEles.length;
    tabEle.innerHTML = title;
    tabEle.dataset.index = tabEles.length;
    tabEle.dataset.txt = title;

    tabEle.addEventListener("click", tabClicked);

    switchGroup.appendChild(tabEle);

    tabEles.push(tabEle);

    return tabEle;
}

inInput.onChange = () =>
{
    if (tabEles.length > inInput.get())
        tabClicked({ "target": tabEles[inInput.get()] });
    // setActiveTab(tabEles[inInput.get()]);
};

function setActiveTab(el)
{
    if (el)
    {
        elTabActive = el;
        outIndex.set(parseInt(el.dataset.index));
        outStr.set(el.dataset.txt);

        if (inStyle.get() == "Tabs") el.classList.add("sidebar_tab_active");
        else el.classList.add("sidebar_switch_active");
    }
}

function tabClicked(e)
{
    if (elTabActive)
        if (inStyle.get() == "Tabs") elTabActive.classList.remove("sidebar_tab_active");
        else elTabActive.classList.remove("sidebar_switch_active");
    setActiveTab(e.target);
}

function onParentChanged()
{
    siblingsPort.set(null);
    const parent = parentPort.get();
    if (parent && parent.parentElement)
    {
        parent.parentElement.appendChild(el);
        siblingsPort.set(parent);
    }
    else
    {
        if (el.parentElement)
            el.parentElement.removeChild(el);
    }
}

function showElement(el)
{
    if (!el) return;
    el.style.display = "block";
}

function hideElement(el)
{
    if (!el) return;
    el.style.display = "none";
}

function onDelete()
{
    removeElementFromDOM(el);
}

function removeElementFromDOM(el)
{
    if (el && el.parentNode && el.parentNode.removeChild)
    {
        el.parentNode.removeChild(el);
    }
}


};

Ops.Sidebar.SideBarSwitch.prototype = new CABLES.Op();
CABLES.OPS["ebc8c92c-5fa6-4598-a9c6-b8e12f22f7c2"]={f:Ops.Sidebar.SideBarSwitch,objName:"Ops.Sidebar.SideBarSwitch"};




// **************************************************************
// 
// Ops.Array.ArrayPushString
// 
// **************************************************************

Ops.Array.ArrayPushString = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inArr=op.inArray("Array"),
    inString=op.inString("String",""),
    result=op.outArray("Result");

const arr=[];

    inString.onChange=
    inArr.onChange=
    function()
    {
        const oldArr=inArr.get();
        result.set(null);
        if(!oldArr)return;

        arr.length=oldArr.length+1;
        for(let i=0;i<oldArr.length;i++)
        {
            arr[i]=oldArr[i];
        }

        arr[oldArr.length]=inString.get();

        result.set(arr);

    };


};

Ops.Array.ArrayPushString.prototype = new CABLES.Op();
CABLES.OPS["074034c9-9698-4984-897a-849bcb2b9b62"]={f:Ops.Array.ArrayPushString,objName:"Ops.Array.ArrayPushString"};




// **************************************************************
// 
// Ops.Array.EmptyArray
// 
// **************************************************************

Ops.Array.EmptyArray = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const result = op.outArray("Result", []);


};

Ops.Array.EmptyArray.prototype = new CABLES.Op();
CABLES.OPS["4b5d1e60-460d-41be-8de0-e70b75801b70"]={f:Ops.Array.EmptyArray,objName:"Ops.Array.EmptyArray"};




// **************************************************************
// 
// Ops.Html.TransformElement
// 
// **************************************************************

Ops.Html.TransformElement = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exec = op.inTrigger("Exec"),
    inEle = op.inObject("Element"),
    next = op.outTrigger("Next"),
    inScale = op.inFloat("Scale", 1),
    inOrtho = op.inBool("Orthogonal", false),
    inRotate = op.inFloat("Rotate", 0),
    inHideBehind = op.inBool("Hide out of view", false),
    inAlignVert = op.inSwitch("Align Vertical", ["Left", "Center", "Right"], "Left"),
    inAlignHor = op.inSwitch("Align Horizontal", ["Top", "Center", "Bottom"], "Top"),
    inActive = op.inBool("Active", true);

const cgl = op.patch.cgl;
let x = 0;
let y = 0;
let visible = 0;
const m = mat4.create();
const pos = vec3.create();
const trans = vec3.create();

let cachedTop = -1;
let cachedLeft = -1;
let currTransformStr = 0;

exec.onTriggered =
() =>
{
    if (!inActive.get()) return next.trigger();

    setProperties();
    next.trigger();
};

op.onDelete = removeProperties;

let oldEle = null;

inAlignHor.onChange =
    inAlignVert.onChange =
    inRotate.onChange =
    inScale.onChange = updateTransform;

function updateTransform()
{
    const ele = inEle.get();
    if (!ele)
    {
        oldEle = null;
        return;
    }

    let translateStr = "";
    if (inAlignVert.get() == "Left")translateStr = "0%";
    if (inAlignVert.get() == "Center")translateStr = "-50%";
    if (inAlignVert.get() == "Right")translateStr = "-100%";

    translateStr += ", ";
    if (inAlignHor.get() == "Top")translateStr += "0%";
    if (inAlignHor.get() == "Center")translateStr += "-50%";
    if (inAlignHor.get() == "Bottom")translateStr += "-100%";

    const str = "translate(" + translateStr + ") scale(" + inScale.get() + ") rotate(" + inRotate.get() + "deg)";

    // if (currTransformStr != str || oldEle != ele)
    if (ele.style.transform != str)
    {
        currTransformStr = str;
        ele.style.transform = str;
    }
}

inEle.onChange = function ()
{
    const ele = inEle.get();
    if (!ele)
    {
        removeProperties(oldEle);

        oldEle = null;
        return;
    }

    updateTransform();
    setProperties();
};

inEle.onLinkChanged = function ()
{
    cachedLeft = -1;
    cachedTop = -1;

    if (!inEle.isLinked())
    {
        if (oldEle)
        {
            removeProperties(oldEle);
        }
    }
    else
    {
        oldEle = inEle.get();
    }
    updateTransform();
};

function getScreenCoord()
{
    mat4.multiply(m, cgl.vMatrix, cgl.mMatrix);
    vec3.transformMat4(pos, [0, 0, 0], m);
    vec3.transformMat4(trans, pos, cgl.pMatrix);

    const vp = cgl.getViewPort();

    const w = cgl.canvasWidth / cgl.pixelDensity;
    const h = cgl.canvasHeight / cgl.pixelDensity;

    if (inOrtho.get())
    {
        x = ((w * 0.5 + trans[0] * w * 0.5 / 1));
        y = ((h * 0.5 - trans[1] * h * 0.5 / 1));
    }
    else
    {
        x = (w - (w * 0.5 - trans[0] * w * 0.5)); //  / trans[2]
        y = (h - (h * 0.5 + trans[1] * h * 0.5)); //  / trans[2]
    }

    visible = pos[2] < 0.0 && x > 0 && x < vp[2] && y > 0 && y < vp[3];
}

function setProperties()
{
    const ele = inEle.get();
    oldEle = ele;
    if (ele && ele.style)
    {
        getScreenCoord();
        const yy = cgl.canvas.offsetTop + y;

        const top = cgl.canvas.styleMarginTop || 0;

        if (yy + top != cachedTop)
        {
            ele.style.top = (yy + top) + "px";
            cachedTop = yy;
        }

        const left = cgl.canvas.styleMarginLeft || 0;

        if (x + left != cachedLeft)
        {
            ele.style.left = (x + left) + "px";
            cachedLeft = x;
        }

        if (inHideBehind.get())
        {
            if (visible)ele.style.display = "initial";
            else ele.style.display = "none";
        }
    }
}

function removeProperties(ele)
{
    cachedLeft = -1;
    cachedTop = -1;

    if (!ele) ele = inEle.get();
    if (ele && ele.style)
    {
        ele.style.top = "initial";
        ele.style.left = "initial";
        ele.style.transform = "initial";
    }
}

op.addEventListener("onEnabledChange", function (enabled)
{
    if (enabled) setProperties();
    else removeProperties();
});


};

Ops.Html.TransformElement.prototype = new CABLES.Op();
CABLES.OPS["caca0307-d460-47df-8674-b7d2601239ab"]={f:Ops.Html.TransformElement,objName:"Ops.Html.TransformElement"};




// **************************************************************
// 
// Ops.Standalone.SideBarStyle
// 
// **************************************************************

Ops.Standalone.SideBarStyle = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const parentPort = op.inObject("link"),
    inWidth = op.inInt("Width", 220),
    inBorderRadius = op.inFloat("Round Corners", 10),
    inColorSpecial = op.inString("Special Color", "#07f78c"),
    // inPositionX = op.inInt("Position X", 200),
    // inPositionY = op.inInt("Position Y", 200),
    siblingsPort = op.outObject("childs"),
    elemOut = op.outObject("Element");

inColorSpecial.onChange =
inBorderRadius.onChange =
inWidth.onChange = setStyle;
// inPositionY.onChange = setStyle;
// inPositionX.onChange = setStyle;

parentPort.onChange = onParentChanged;
op.onDelete = onDelete;

op.toWorkNeedsParent("Ops.Sidebar.Sidebar");

let sideBarEle = null;

function setStyle()
{
    if (!sideBarEle) return;


    sideBarEle.style.setProperty("--sidebar-width", inWidth.get() + "px");

    sideBarEle.style.setProperty("--sidebar-color", inColorSpecial.get());

    sideBarEle.style.setProperty("--sidebar-border-radius", Math.round(inBorderRadius.get()) + "px");

    // sideBarEle.style.setProperty( "top", inPositionY.get() + "px");
    //  sideBarEle.style.setProperty( "left", inPositionX.get() + "px");
    op.patch.emitEvent("sidebarStylesChanged");
}

function onParentChanged()
{
    siblingsPort.set(null);
    const parent = parentPort.get();
    if (parent && parent.parentElement)
    {
        siblingsPort.set(parent);
        sideBarEle = parent.parentElement.parentElement;
        elemOut.set(sideBarEle);
        setStyle();
    }
    else
    {
        sideBarEle = null;
    }
}

function showElement(el)
{
    if (!el) return;
    el.style.display = "block";
}

function hideElement(el)
{
    if (!el) return;
    el.style.display = "none";
}

function onDelete()
{
}


};

Ops.Standalone.SideBarStyle.prototype = new CABLES.Op();
CABLES.OPS["0c482c61-3781-4880-aef5-53a41530075b"]={f:Ops.Standalone.SideBarStyle,objName:"Ops.Standalone.SideBarStyle"};




// **************************************************************
// 
// Ops.Sidebar.SidebarText_v2
// 
// **************************************************************

Ops.Sidebar.SidebarText_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// inputs
const parentPort = op.inObject("link");
const labelPort = op.inString("Text", "Value");
const inId = op.inValueString("Id", "");

// outputs
const siblingsPort = op.outObject("childs");

// vars
const el = document.createElement("div");
el.dataset.op = op.id;
el.classList.add("cablesEle");
el.classList.add("sidebar__item");
el.classList.add("sidebar__text");
const label = document.createElement("div");
label.classList.add("sidebar__item-label");
const labelText = document.createElement("div");// document.createTextNode(labelPort.get());
label.appendChild(labelText);
el.appendChild(label);

// events
parentPort.onChange = onParentChanged;
labelPort.onChange = onLabelTextChanged;
inId.onChange = onIdChanged;
op.onDelete = onDelete;

op.toWorkNeedsParent("Ops.Sidebar.Sidebar");

// functions

function onIdChanged()
{
    el.id = inId.get();
}

function onLabelTextChanged()
{
    const labelText = labelPort.get();
    label.innerHTML = labelText;
}

function onParentChanged()
{
    siblingsPort.set(null);
    const parent = parentPort.get();
    if (parent && parent.parentElement)
    {
        parent.parentElement.appendChild(el);
        siblingsPort.set(parent);
    }
    else
    { // detach
        if (el.parentElement)
        {
            el.parentElement.removeChild(el);
        }
    }
}

function showElement(el)
{
    if (el)
    {
        el.style.display = "block";
    }
}

function hideElement(el)
{
    if (el)
    {
        el.style.display = "none";
    }
}

function onDelete()
{
    removeElementFromDOM(el);
}

function removeElementFromDOM(el)
{
    if (el && el.parentNode && el.parentNode.removeChild)
    {
        el.parentNode.removeChild(el);
    }
}


};

Ops.Sidebar.SidebarText_v2.prototype = new CABLES.Op();
CABLES.OPS["cc591cc3-ff23-4817-907c-e5be7d5c059d"]={f:Ops.Sidebar.SidebarText_v2,objName:"Ops.Sidebar.SidebarText_v2"};




// **************************************************************
// 
// Ops.Html.ElementCssShadow
// 
// **************************************************************

Ops.Html.ElementCssShadow = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inEle = op.inObject("Element"),
    inType = op.inSwitch("Type", ["drop filter", "box", "text"], "drop filter"),
    inProp1 = op.inFloat("X", 5),
    inProp2 = op.inFloat("Y", 3),
    inProp3 = op.inFloat("Blur", 10),
    r = op.inValueSlider("Color r", 0),
    g = op.inValueSlider("Color g", 0),
    b = op.inValueSlider("Color b", 0),
    a = op.inValueSlider("Color a", 1),
    outEle = op.outObject("HTML Element");

r.setUiAttribs({ "colorPick": true });

let ele = null;

inEle.onChange = inEle.onLinkChanged =
inType.onChange =
    r.onChange =
    g.onChange =
    b.onChange =
    a.onChange =
    inProp1.onChange =
    inProp2.onChange =
    inProp3.onChange = update;

function update()
{
    if (ele)
    {
        ele.style.removeProperty("filter");
        ele.style.removeProperty("text-shadow");
        ele.style.removeProperty("box-shadow");
    }
    ele = inEle.get();

    if (ele && ele.style)
    {
        const rgba = "rgba(" + Math.floor(r.get() * 255) + "," + Math.floor(g.get() * 255) + "," + Math.floor(b.get() * 255) + "," + Math.floor(a.get()) + ")";

        const str = inProp1.get() + "px " + inProp2.get() + "px " + inProp3.get() + "px " + rgba;

        if (inType.get() == "drop filter") ele.style.filter = "drop-shadow(" + str + ")";
        else ele.style[inType.get() + "-shadow"] = str;
    }
    else
    {
        setTimeout(update, 50);
    }

    if (outEle != inEle.get())
        outEle.setRef(inEle.get());
}


};

Ops.Html.ElementCssShadow.prototype = new CABLES.Op();
CABLES.OPS["d57433b7-7662-4ae3-8016-e09414705f77"]={f:Ops.Html.ElementCssShadow,objName:"Ops.Html.ElementCssShadow"};




// **************************************************************
// 
// Ops.Array.ArrayPack3Simple
// 
// **************************************************************

Ops.Array.ArrayPack3Simple = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inArr1 = op.inArray("Array 1"),
    inArr2 = op.inArray("Array 2"),
    inArr3 = op.inArray("Array 3"),

    outArr = op.outArray("Array out", 3),
    outNum = op.outNumber("Num Points"),
    outArrayLength = op.outNumber("Array length");

let showingError = false;

let arr = [];
let emptyArray = [];
let needsCalc = true;

inArr1.onChange = inArr2.onChange = inArr3.onChange = update;

function update()
{
    let array1 = inArr1.get();
    let array2 = inArr2.get();
    let array3 = inArr3.get();

    if (!array1 && !array2 && !array3)
    {
        outArr.set(null);
        outNum.set(0);
        return;
    }
    let arrlen = 0;

    if (!array1 || !array2 || !array3)
    {
        if (array1) arrlen = array1.length;
        else if (array2) arrlen = array2.length;
        else if (array3) arrlen = array3.length;

        if (emptyArray.length != arrlen)
            for (let i = 0; i < arrlen; i++) emptyArray[i] = 0;

        if (!array1)array1 = emptyArray;
        if (!array2)array2 = emptyArray;
        if (!array3)array3 = emptyArray;
    }

    if ((array1.length !== array2.length) || (array2.length !== array3.length))
    {
        //
        op.setUiError("arraylen", "Arrays do not have the same length !");
        return;
    }
    op.setUiError("arraylen", null);

    arr.length = array1.length;
    for (let i = 0; i < array1.length; i++)
    {
        arr[i * 3 + 0] = array1[i];
        arr[i * 3 + 1] = array2[i];
        arr[i * 3 + 2] = array3[i];
    }

    needsCalc = false;
    outArr.setRef(arr);
    outNum.set(arr.length / 3);
    outArrayLength.set(arr.length);
}


};

Ops.Array.ArrayPack3Simple.prototype = new CABLES.Op();
CABLES.OPS["9c48785b-4cac-472c-a70f-dbd3c240b782"]={f:Ops.Array.ArrayPack3Simple,objName:"Ops.Array.ArrayPack3Simple"};




// **************************************************************
// 
// Ops.Array.Array_v3
// 
// **************************************************************

Ops.Array.Array_v3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inLength = op.inValueInt("Array length", 10),
    modeSelect = op.inSwitch("Mode select", ["Number", "1,2,3,4", "0-1"], "Number"),
    inDefaultValue = op.inValueFloat("Default Value"),
    inReverse = op.inBool("Reverse", false),
    outArr = op.outArray("Array"),
    outArrayLength = op.outNumber("Array length out");

let arr = [];
let selectIndex = 0;
const MODE_NUMBER = 0;
const MODE_1_TO_4 = 1;
const MODE_0_TO_1 = 2;

modeSelect.onChange = onFilterChange;

inReverse.onChange =
    inDefaultValue.onChange =
    inLength.onChange = reset;

onFilterChange();
reset();

function onFilterChange()
{
    let selectedMode = modeSelect.get();
    if (selectedMode === "Number") selectIndex = MODE_NUMBER;
    else if (selectedMode === "1,2,3,4") selectIndex = MODE_1_TO_4;
    else if (selectedMode === "0-1") selectIndex = MODE_0_TO_1;

    inDefaultValue.setUiAttribs({ "greyout": selectIndex !== MODE_NUMBER });

    op.setUiAttrib({ "extendTitle": modeSelect.get() });

    reset();
}

function reset()
{
    arr.length = 0;

    let arrLength = inLength.get();
    let valueForArray = inDefaultValue.get();
    let i;

    // mode 0 - fill all array values with one number
    if (selectIndex === MODE_NUMBER)
    {
        for (i = 0; i < arrLength; i++)
        {
            arr[i] = valueForArray;
        }
    }
    // mode 1 Continuous number array - increments up to array length
    else if (selectIndex === MODE_1_TO_4)
    {
        for (i = 0; i < arrLength; i++)
        {
            arr[i] = i;
        }
    }
    // mode 2 Normalized array
    else if (selectIndex === MODE_0_TO_1)
    {
        for (i = 0; i < arrLength; i++)
        {
            arr[i] = i / (arrLength - 1);
        }
    }

    if (inReverse.get())arr = arr.reverse();

    outArr.setRef(arr);
    outArrayLength.set(arr.length);
}


};

Ops.Array.Array_v3.prototype = new CABLES.Op();
CABLES.OPS["e4d31a46-bf64-42a8-be34-4cbb2bbc2600"]={f:Ops.Array.Array_v3,objName:"Ops.Array.Array_v3"};




// **************************************************************
// 
// Ops.Array.ArrayLength_v2
// 
// **************************************************************

Ops.Array.ArrayLength_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    array = op.inArray("array"),
    outLength = op.outNumber("length");

outLength.ignoreValueSerialize = true;

function update()
{
    let l = 0;
    if (array.get()) l = array.get().length;
    outLength.set(l);
}

array.onChange = update;


};

Ops.Array.ArrayLength_v2.prototype = new CABLES.Op();
CABLES.OPS["6f665caa-96ed-45d8-8620-e34f0f8e062c"]={f:Ops.Array.ArrayLength_v2,objName:"Ops.Array.ArrayLength_v2"};




// **************************************************************
// 
// Ops.Array.ArrayGetArray
// 
// **************************************************************

Ops.Array.ArrayGetArray = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inArrays = op.inArray("Array of Arrays"),
    index = op.inValueInt("Index"),
    result = op.outArray("Result Array");

inArrays.onChange =
index.onChange = update;

function update()
{
    let theArray = inArrays.get();
    if (!theArray)
    {
        result.set(null);
        return;
    }

    let ind = Math.floor(index.get());
    if (ind < 0 || ind > theArray.length - 1)
    {
        result.set(null);
        op.log("index wrong");
        return;
    }

    result.set(null);
    result.set(theArray[ind]);
}


};

Ops.Array.ArrayGetArray.prototype = new CABLES.Op();
CABLES.OPS["b9d3f42b-3fbf-4522-9df2-a5c769a92d66"]={f:Ops.Array.ArrayGetArray,objName:"Ops.Array.ArrayGetArray"};




// **************************************************************
// 
// Ops.Array.ArrayMath
// 
// **************************************************************

Ops.Array.ArrayMath = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const inArray_0 = op.inArray("array 0"),
    NumberIn = op.inValueFloat("Number for math", 0.0),
    mathSelect = op.inSwitch("Math function", ["+", "-", "*", "/", "%", "min", "max"], "+"),
    outArray = op.outArray("Array result"),
    outArrayLength = op.outNumber("Array length");

op.toWorkPortsNeedToBeLinked(inArray_0);

let mathFunc;
let showingError = false;
let mathArray = [];

inArray_0.onChange = NumberIn.onChange = update;
mathSelect.onChange = onFilterChange;

onFilterChange();

inArray_0.onLinkChanged = () =>
{
    if (inArray_0) inArray_0.copyLinkedUiAttrib("stride", outArray);
};

function onFilterChange()
{
    let mathSelectValue = mathSelect.get();

    if (mathSelectValue === "+") mathFunc = function (a, b) { return a + b; };
    else if (mathSelectValue === "-") mathFunc = function (a, b) { return a - b; };
    else if (mathSelectValue === "*") mathFunc = function (a, b) { return a * b; };
    else if (mathSelectValue === "/") mathFunc = function (a, b) { return a / b; };
    else if (mathSelectValue === "%") mathFunc = function (a, b) { return a % b; };
    else if (mathSelectValue === "min") mathFunc = function (a, b) { return Math.min(a, b); };
    else if (mathSelectValue === "max") mathFunc = function (a, b) { return Math.max(a, b); };
    update();
    op.setUiAttrib({ "extendTitle": mathSelectValue });
}

function update()
{
    let array0 = inArray_0.get();

    mathArray.length = 0;

    if (!array0)
    {
        outArrayLength.set(0);
        outArray.set(null);
        return;
    }

    let num = NumberIn.get();
    mathArray.length = array0.length;

    let i = 0;

    for (i = 0; i < array0.length; i++)
    {
        mathArray[i] = mathFunc(array0[i], num);
    }

    outArray.setRef(mathArray);
    outArrayLength.set(mathArray.length);
}


};

Ops.Array.ArrayMath.prototype = new CABLES.Op();
CABLES.OPS["c7617717-3114-452f-9625-e4fefd841e88"]={f:Ops.Array.ArrayMath,objName:"Ops.Array.ArrayMath"};




// **************************************************************
// 
// Ops.Array.FilterValidArray
// 
// **************************************************************

Ops.Array.FilterValidArray = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inArr = op.inArray("Array"),
    inLength = op.inBool("Invalid when length is 0", true),

    outArray = op.outArray("Last Valid Array"),
    outValid = op.outBoolNum("Is Valid");

inLength.onChange =
inArr.onChange =
    update;

function update()
{
    const arr = inArr.get();

    let r = true;

    if (!arr || !arr.length) r = false;
    else if (inLength.get() && arr.length == 0) r = false;

    if (r) outArray.setRef(arr);

    outValid.set(r);
}


};

Ops.Array.FilterValidArray.prototype = new CABLES.Op();
CABLES.OPS["f2669593-eb06-48a6-b94c-4bc243747ee1"]={f:Ops.Array.FilterValidArray,objName:"Ops.Array.FilterValidArray"};




// **************************************************************
// 
// Ops.Ui.Routing.RouteArray
// 
// **************************************************************

Ops.Ui.Routing.RouteArray = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    v = op.inArray("Array In", ""),
    result = op.outArray("Array Out");

op.setUiAttribs({ "display": "reroute" });
v.onChange = exec;

v.onLinkChanged = () =>
{
    v.copyLinkedUiAttrib("stride", result);
};

function exec()
{
    result.setRef(v.get());
}


};

Ops.Ui.Routing.RouteArray.prototype = new CABLES.Op();
CABLES.OPS["4a560a77-dedf-4367-841b-1d9334403c41"]={f:Ops.Ui.Routing.RouteArray,objName:"Ops.Ui.Routing.RouteArray"};




// **************************************************************
// 
// Ops.Json.ObjectGetArray_v2
// 
// **************************************************************

Ops.Json.ObjectGetArray_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    data = op.inObject("data"),
    key = op.inString("key"),
    result = op.outArray("result"),
    arrLength = op.outNumber("Length");

result.ignoreValueSerialize = true;
data.ignoreValueSerialize = true;
op.setUiAttrib({ "extendTitlePort": key.name });
key.setUiAttribs({ "stringTrim": true });

data.onChange =
    key.onChange = update;

key.on("change", updateUi);
updateUi();
function updateUi()
{
    if (!key.get())op.setUiError("nokey", "Missing Key Value");
    else op.setUiError("nokey", null);
}

function update()
{
    result.set(null);
    const dat = data.get();
    const k = key.get();
    if (dat && (dat.hasOwnProperty(k) || dat[k]))
    {
        result.setRef(dat[k]);
        if (!result.get())
        {
            arrLength.set(0);
        }
        else
        {
            arrLength.set(result.get().length);
        }
    }
    else
    {
        arrLength.set(0);
    }
}


};

Ops.Json.ObjectGetArray_v2.prototype = new CABLES.Op();
CABLES.OPS["7c06a818-9c07-493a-8c4f-04eb2c7796f5"]={f:Ops.Json.ObjectGetArray_v2,objName:"Ops.Json.ObjectGetArray_v2"};




// **************************************************************
// 
// Ops.Html.CSS_v3
// 
// **************************************************************

Ops.Html.CSS_v3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    code = op.inStringEditor("css code"),
    nest = op.inString("Nesting Parent", ""),
    inActive = op.inBool("Active", true);

code.setUiAttribs(
    {
        "editorSyntax": "css",
        "ignoreBigPort": true
    });

let styleEle = null;
const eleId = "css_" + CABLES.uuid();

nest.onChange =
code.onChange = update;
update();

inActive.onChange = () =>
{
    if (!inActive.get())styleEle.remove();
    else addElement();
};

function getCssContent()
{
    let css = code.get();

    if (nest.get())
    {
        css = nest.get() + "\n{\n" + css + "\n}\n";
    }

    if (css)
    {
        let patchId = null;
        if (op.storage && op.storage.blueprint && op.storage.blueprint.patchId)
        {
            patchId = op.storage.blueprint.patchId;
        }
        css = css.replace(new RegExp("{{ASSETPATH}}", "g"), op.patch.getAssetPath(patchId));
    }
    return css;
}

function update()
{
    styleEle = op.patch.getDocument().getElementById(eleId);

    if (styleEle)
    {
        styleEle.textContent = getCssContent();
    }
    else
    {
        styleEle = op.patch.getDocument().createElement("style");
        styleEle.type = "text/css";
        styleEle.id = eleId;
        styleEle.textContent = attachments.css_spinner;
        styleEle.classList.add("cablesEle");
        addElement();
    }
}

function addElement()
{
    const head = op.patch.getDocument().getElementsByTagName("body")[0];
    head.appendChild(styleEle);
}

op.onDelete = function ()
{
    styleEle = op.patch.getDocument().getElementById(eleId);
    if (styleEle)styleEle.remove();
};


};

Ops.Html.CSS_v3.prototype = new CABLES.Op();
CABLES.OPS["aa44a0e9-b9fe-4eed-93a3-38e41a91b623"]={f:Ops.Html.CSS_v3,objName:"Ops.Html.CSS_v3"};




// **************************************************************
// 
// Ops.Sidebar.Sidebar
// 
// **************************************************************

Ops.Sidebar.Sidebar = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"style_css":" /*\n * SIDEBAR\n  http://danielstern.ca/range.css/#/\n  https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-progress-value\n */\n\n.sidebar-icon-undo\n{\n    width:10px;\n    height:10px;\n    background-image: url(\"data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='grey' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7v6h6'/%3E%3Cpath d='M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13'/%3E%3C/svg%3E\");\n    background-size: 19px;\n    background-repeat: no-repeat;\n    top: -19px;\n    margin-top: -7px;\n}\n\n.icon-chevron-down {\n    top: 2px;\n    right: 9px;\n}\n\n.iconsidebar-chevron-up,.sidebar__close-button {\n\tbackground-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tdXAiPjxwb2x5bGluZSBwb2ludHM9IjE4IDE1IDEyIDkgNiAxNSI+PC9wb2x5bGluZT48L3N2Zz4=);\n}\n\n.iconsidebar-minimizebutton {\n    background-position: 98% center;\n    background-repeat: no-repeat;\n}\n\n.sidebar-cables-right\n{\n    right: 15px;\n    left: initial !important;\n}\n\n.sidebar-cables *\n{\n    color: #BBBBBB !important;\n    font-family: Arial;\n}\n\n.sidebar-cables {\n    --sidebar-color: #07f78c;\n    --sidebar-width: 220px;\n    --sidebar-border-radius: 10px;\n    --sidebar-monospace-font-stack: \"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n    --sidebar-hover-transition-time: .2s;\n\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    border-radius: var(--sidebar-border-radius);\n    z-index: 100000;\n    width: var(--sidebar-width);\n    max-height: 100%;\n    box-sizing: border-box;\n    overflow-y: auto;\n    overflow-x: hidden;\n    font-size: 13px;\n    line-height: 1em; /* prevent emojis from breaking height of the title */\n}\n\n.sidebar-cables::selection {\n    background-color: var(--sidebar-color);\n    color: #EEEEEE;\n}\n\n.sidebar-cables::-webkit-scrollbar {\n    background-color: transparent;\n    --cables-scrollbar-width: 8px;\n    width: var(--cables-scrollbar-width);\n}\n\n.sidebar-cables::-webkit-scrollbar-track {\n    background-color: transparent;\n    width: var(--cables-scrollbar-width);\n}\n\n.sidebar-cables::-webkit-scrollbar-thumb {\n    background-color: #333333;\n    border-radius: 4px;\n    width: var(--cables-scrollbar-width);\n}\n\n.sidebar-cables--closed {\n    width: auto;\n}\n\n.sidebar__close-button {\n    background-color: #222;\n    /*-webkit-user-select: none;  */\n    /*-moz-user-select: none;     */\n    /*-ms-user-select: none;      */\n    /*user-select: none;          */\n    /*transition: background-color var(--sidebar-hover-transition-time);*/\n    /*color: #CCCCCC;*/\n    height: 2px;\n    /*border-bottom:20px solid #222;*/\n\n    /*box-sizing: border-box;*/\n    /*padding-top: 2px;*/\n    /*text-align: center;*/\n    /*cursor: pointer;*/\n    /*border-radius: 0 0 var(--sidebar-border-radius) var(--sidebar-border-radius);*/\n    /*opacity: 1.0;*/\n    /*transition: opacity 0.3s;*/\n    /*overflow: hidden;*/\n}\n\n.sidebar__close-button-icon {\n    display: inline-block;\n    /*opacity: 0;*/\n    width: 20px;\n    height: 20px;\n    /*position: relative;*/\n    /*top: -1px;*/\n\n\n}\n\n.sidebar--closed {\n    width: auto;\n    margin-right: 20px;\n}\n\n.sidebar--closed .sidebar__close-button {\n    margin-top: 8px;\n    margin-left: 8px;\n    padding:10px;\n\n    height: 25px;\n    width:25px;\n    border-radius: 50%;\n    cursor: pointer;\n    opacity: 0.3;\n    background-repeat: no-repeat;\n    background-position: center center;\n    transform:rotate(180deg);\n}\n\n.sidebar--closed .sidebar__group\n{\n    display:none;\n\n}\n.sidebar--closed .sidebar__close-button-icon {\n    background-position: 0px 0px;\n}\n\n.sidebar__close-button:hover {\n    background-color: #111111;\n    opacity: 1.0 !important;\n}\n\n/*\n * SIDEBAR ITEMS\n */\n\n.sidebar__items {\n    /* max-height: 1000px; */\n    /* transition: max-height 0.5;*/\n    background-color: #222;\n    padding-bottom: 20px;\n}\n\n.sidebar--closed .sidebar__items {\n    /* max-height: 0; */\n    height: 0;\n    display: none;\n    pointer-interactions: none;\n}\n\n.sidebar__item__right {\n    float: right;\n}\n\n/*\n * SIDEBAR GROUP\n */\n\n.sidebar__group {\n    /*background-color: #1A1A1A;*/\n    overflow: hidden;\n    box-sizing: border-box;\n    animate: height;\n    /*background-color: #151515;*/\n    /* max-height: 1000px; */\n    /* transition: max-height 0.5s; */\n--sidebar-group-header-height: 33px;\n}\n\n.sidebar__group-items\n{\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n\n.sidebar__group--closed {\n    /* max-height: 13px; */\n    height: var(--sidebar-group-header-height);\n}\n\n.sidebar__group-header {\n    box-sizing: border-box;\n    color: #EEEEEE;\n    background-color: #151515;\n    -webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n    user-select: none;          /* Likely future */\n\n    /*height: 100%;//var(--sidebar-group-header-height);*/\n\n    padding-top: 7px;\n    text-transform: uppercase;\n    letter-spacing: 0.08em;\n    cursor: pointer;\n    /*transition: background-color var(--sidebar-hover-transition-time);*/\n    position: relative;\n}\n\n.sidebar__group-header:hover {\n  background-color: #111111;\n}\n\n.sidebar__group-header-title {\n  /*float: left;*/\n  overflow: hidden;\n  padding: 0 15px;\n  padding-top:5px;\n  padding-bottom:10px;\n  font-weight:bold;\n}\n\n.sidebar__group-header-undo {\n    float: right;\n    overflow: hidden;\n    padding-right: 15px;\n    padding-top:5px;\n    font-weight:bold;\n  }\n\n.sidebar__group-header-icon {\n    width: 17px;\n    height: 14px;\n    background-repeat: no-repeat;\n    display: inline-block;\n    position: absolute;\n    background-size: cover;\n\n    /* icon open */\n    /* feather icon: chevron up */\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tdXAiPjxwb2x5bGluZSBwb2ludHM9IjE4IDE1IDEyIDkgNiAxNSI+PC9wb2x5bGluZT48L3N2Zz4=);\n    top: 4px;\n    right: 5px;\n    opacity: 0.0;\n    transition: opacity 0.3;\n}\n\n.sidebar__group-header:hover .sidebar__group-header-icon {\n    opacity: 1.0;\n}\n\n/* icon closed */\n.sidebar__group--closed .sidebar__group-header-icon {\n    /* feather icon: chevron down */\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiPjwvcG9seWxpbmU+PC9zdmc+);\n    top: 4px;\n    right: 5px;\n}\n\n/*\n * SIDEBAR ITEM\n */\n\n.sidebar__item\n{\n    box-sizing: border-box;\n    padding: 7px;\n    padding-left:15px;\n    padding-right:15px;\n\n    overflow: hidden;\n    position: relative;\n}\n\n.sidebar__item-label {\n    display: inline-block;\n    -webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n    user-select: none;          /* Likely future */\n    width: calc(50% - 7px);\n    margin-right: 7px;\n    margin-top: 2px;\n    text-overflow: ellipsis;\n    /* overflow: hidden; */\n}\n\n.sidebar__item-value-label {\n    font-family: var(--sidebar-monospace-font-stack);\n    display: inline-block;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    max-width: 60%;\n}\n\n.sidebar__item-value-label::selection {\n    background-color: var(--sidebar-color);\n    color: #EEEEEE;\n}\n\n.sidebar__item + .sidebar__item,\n.sidebar__item + .sidebar__group,\n.sidebar__group + .sidebar__item,\n.sidebar__group + .sidebar__group {\n    /*border-top: 1px solid #272727;*/\n}\n\n/*\n * SIDEBAR ITEM TOGGLE\n */\n\n/*.sidebar__toggle */\n.icon_toggle{\n    cursor: pointer;\n}\n\n.sidebar__toggle-input {\n    --sidebar-toggle-input-color: #CCCCCC;\n    --sidebar-toggle-input-color-hover: #EEEEEE;\n    --sidebar-toggle-input-border-size: 2px;\n    display: inline;\n    float: right;\n    box-sizing: border-box;\n    border-radius: 50%;\n    cursor: pointer;\n    --toggle-size: 11px;\n    margin-top: 2px;\n    background-color: transparent !important;\n    border: var(--sidebar-toggle-input-border-size) solid var(--sidebar-toggle-input-color);\n    width: var(--toggle-size);\n    height: var(--toggle-size);\n    transition: background-color var(--sidebar-hover-transition-time);\n    transition: border-color var(--sidebar-hover-transition-time);\n}\n.sidebar__toggle:hover .sidebar__toggle-input {\n    border-color: var(--sidebar-toggle-input-color-hover);\n}\n\n.sidebar__toggle .sidebar__item-value-label {\n    -webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n    user-select: none;          /* Likely future */\n    max-width: calc(50% - 12px);\n}\n.sidebar__toggle-input::after { clear: both; }\n\n.sidebar__toggle--active .icon_toggle\n{\n\n    background-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE1cHgiIHdpZHRoPSIzMHB4IiBmaWxsPSIjMDZmNzhiIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzA2Zjc4YiIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCBjMTIuNjUsMCwyMy0xMC4zNSwyMy0yM2wwLDBjMC0xMi42NS0xMC4zNS0yMy0yMy0yM0gzMHogTTcwLDY3Yy05LjM4OSwwLTE3LTcuNjEtMTctMTdzNy42MTEtMTcsMTctMTdzMTcsNy42MSwxNywxNyAgICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PC9nPjwvZz48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMweiBNNzAsNjdjLTkuMzg5LDAtMTctNy42MS0xNy0xN3M3LjYxMS0xNywxNy0xN3MxNyw3LjYxLDE3LDE3ICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48cGF0aCBmaWxsPSIjMDZmNzhiIiBzdHJva2U9IiMwNmY3OGIiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNyw1MGMwLDEyLjY1LDEwLjM1LDIzLDIzLDIzaDQwICAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMwQzE3LjM1LDI3LDcsMzcuMzUsNyw1MEw3LDUweiI+PC9wYXRoPjwvZz48Y2lyY2xlIGRpc3BsYXk9ImlubGluZSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwNmY3OGIiIHN0cm9rZT0iIzA2Zjc4YiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGN4PSI3MCIgY3k9IjUwIiByPSIxNyI+PC9jaXJjbGU+PC9nPjxnIGRpc3BsYXk9Im5vbmUiPjxwYXRoIGRpc3BsYXk9ImlubGluZSIgZD0iTTcwLDI1SDMwQzE2LjIxNSwyNSw1LDM2LjIxNSw1LDUwczExLjIxNSwyNSwyNSwyNWg0MGMxMy43ODUsMCwyNS0xMS4yMTUsMjUtMjVTODMuNzg1LDI1LDcwLDI1eiBNNzAsNzEgICBIMzBDMTguNDIxLDcxLDksNjEuNTc5LDksNTBzOS40MjEtMjEsMjEtMjFoNDBjMTEuNTc5LDAsMjEsOS40MjEsMjEsMjFTODEuNTc5LDcxLDcwLDcxeiBNNzAsMzFjLTEwLjQ3NywwLTE5LDguNTIzLTE5LDE5ICAgczguNTIzLDE5LDE5LDE5czE5LTguNTIzLDE5LTE5UzgwLjQ3NywzMSw3MCwzMXogTTcwLDY1Yy04LjI3MSwwLTE1LTYuNzI5LTE1LTE1czYuNzI5LTE1LDE1LTE1czE1LDYuNzI5LDE1LDE1Uzc4LjI3MSw2NSw3MCw2NXoiPjwvcGF0aD48L2c+PC9zdmc+);\n    opacity: 1;\n    transform: rotate(0deg);\n}\n\n\n.icon_toggle\n{\n    float: right;\n    width:40px;\n    height:18px;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE1cHgiIHdpZHRoPSIzMHB4IiBmaWxsPSIjYWFhYWFhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2FhYWFhYSIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCBjMTIuNjUsMCwyMy0xMC4zNSwyMy0yM2wwLDBjMC0xMi42NS0xMC4zNS0yMy0yMy0yM0gzMHogTTcwLDY3Yy05LjM4OSwwLTE3LTcuNjEtMTctMTdzNy42MTEtMTcsMTctMTdzMTcsNy42MSwxNywxNyAgICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PC9nPjwvZz48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMweiBNNzAsNjdjLTkuMzg5LDAtMTctNy42MS0xNy0xN3M3LjYxMS0xNywxNy0xN3MxNyw3LjYxLDE3LDE3ICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48cGF0aCBmaWxsPSIjYWFhYWFhIiBzdHJva2U9IiNhYWFhYWEiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNyw1MGMwLDEyLjY1LDEwLjM1LDIzLDIzLDIzaDQwICAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMwQzE3LjM1LDI3LDcsMzcuMzUsNyw1MEw3LDUweiI+PC9wYXRoPjwvZz48Y2lyY2xlIGRpc3BsYXk9ImlubGluZSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNhYWFhYWEiIHN0cm9rZT0iI2FhYWFhYSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGN4PSI3MCIgY3k9IjUwIiByPSIxNyI+PC9jaXJjbGU+PC9nPjxnIGRpc3BsYXk9Im5vbmUiPjxwYXRoIGRpc3BsYXk9ImlubGluZSIgZD0iTTcwLDI1SDMwQzE2LjIxNSwyNSw1LDM2LjIxNSw1LDUwczExLjIxNSwyNSwyNSwyNWg0MGMxMy43ODUsMCwyNS0xMS4yMTUsMjUtMjVTODMuNzg1LDI1LDcwLDI1eiBNNzAsNzEgICBIMzBDMTguNDIxLDcxLDksNjEuNTc5LDksNTBzOS40MjEtMjEsMjEtMjFoNDBjMTEuNTc5LDAsMjEsOS40MjEsMjEsMjFTODEuNTc5LDcxLDcwLDcxeiBNNzAsMzFjLTEwLjQ3NywwLTE5LDguNTIzLTE5LDE5ICAgczguNTIzLDE5LDE5LDE5czE5LTguNTIzLDE5LTE5UzgwLjQ3NywzMSw3MCwzMXogTTcwLDY1Yy04LjI3MSwwLTE1LTYuNzI5LTE1LTE1czYuNzI5LTE1LDE1LTE1czE1LDYuNzI5LDE1LDE1Uzc4LjI3MSw2NSw3MCw2NXoiPjwvcGF0aD48L2c+PC9zdmc+);\n    background-size: 50px 37px;\n    background-position: -6px -10px;\n    transform: rotate(180deg);\n    opacity: 0.4;\n}\n\n\n\n/*.sidebar__toggle--active .sidebar__toggle-input {*/\n/*    transition: background-color var(--sidebar-hover-transition-time);*/\n/*    background-color: var(--sidebar-toggle-input-color);*/\n/*}*/\n/*.sidebar__toggle--active .sidebar__toggle-input:hover*/\n/*{*/\n/*    background-color: var(--sidebar-toggle-input-color-hover);*/\n/*    border-color: var(--sidebar-toggle-input-color-hover);*/\n/*    transition: background-color var(--sidebar-hover-transition-time);*/\n/*    transition: border-color var(--sidebar-hover-transition-time);*/\n/*}*/\n\n/*\n * SIDEBAR ITEM BUTTON\n */\n\n.sidebar__button {}\n\n.sidebar__button-input:active\n{\n    background-color: #555 !important;\n}\n\n.sidebar__button-input {\n    -webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n    user-select: none;          /* Likely future */\n    min-height: 24px;\n    background-color: transparent;\n    color: #CCCCCC;\n    box-sizing: border-box;\n    padding-top: 3px;\n    text-align: center;\n    border-radius: 125px;\n    border:2px solid #555;\n    cursor: pointer;\n    padding-bottom: 3px;\n}\n\n.sidebar__button-input.plus, .sidebar__button-input.minus {\n    display: inline-block;\n    min-width: 20px;\n}\n\n.sidebar__button-input:hover {\n  background-color: #333;\n  border:2px solid var(--sidebar-color);\n}\n\n/*\n * VALUE DISPLAY (shows a value)\n */\n\n.sidebar__value-display {}\n\n/*\n * SLIDER\n */\n\n.sidebar__slider {\n    --sidebar-slider-input-height: 3px;\n}\n\n.sidebar__slider-input-wrapper {\n    width: 100%;\n\n    margin-top: 8px;\n    position: relative;\n}\n\n.sidebar__slider-input {\n    -webkit-appearance: none;\n    appearance: none;\n    margin: 0;\n    width: 100%;\n    height: var(--sidebar-slider-input-height);\n    background: #555;\n    cursor: pointer;\n    outline: 0;\n\n    -webkit-transition: .2s;\n    transition: background-color .2s;\n    border: none;\n}\n\n.sidebar__slider-input:focus, .sidebar__slider-input:hover {\n    border: none;\n}\n\n.sidebar__slider-input-active-track {\n    user-select: none;\n    position: absolute;\n    z-index: 11;\n    top: 0;\n    left: 0;\n    background-color: var(--sidebar-color);\n    pointer-events: none;\n    height: var(--sidebar-slider-input-height);\n    max-width: 100%;\n}\n\n/* Mouse-over effects */\n.sidebar__slider-input:hover {\n    /*background-color: #444444;*/\n}\n\n/*.sidebar__slider-input::-webkit-progress-value {*/\n/*    background-color: green;*/\n/*    color:green;*/\n\n/*    }*/\n\n/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */\n\n.sidebar__slider-input::-moz-range-thumb\n{\n    position: absolute;\n    height: 15px;\n    width: 15px;\n    z-index: 900 !important;\n    border-radius: 20px !important;\n    cursor: pointer;\n    background: var(--sidebar-color) !important;\n    user-select: none;\n\n}\n\n.sidebar__slider-input::-webkit-slider-thumb\n{\n    position: relative;\n    appearance: none;\n    -webkit-appearance: none;\n    user-select: none;\n    height: 15px;\n    width: 15px;\n    display: block;\n    z-index: 900 !important;\n    border: 0;\n    border-radius: 20px !important;\n    cursor: pointer;\n    background: #777 !important;\n}\n\n.sidebar__slider-input:hover ::-webkit-slider-thumb {\n    background-color: #EEEEEE !important;\n}\n\n/*.sidebar__slider-input::-moz-range-thumb {*/\n\n/*    width: 0 !important;*/\n/*    height: var(--sidebar-slider-input-height);*/\n/*    background: #EEEEEE;*/\n/*    cursor: pointer;*/\n/*    border-radius: 0 !important;*/\n/*    border: none;*/\n/*    outline: 0;*/\n/*    z-index: 100 !important;*/\n/*}*/\n\n.sidebar__slider-input::-moz-range-track {\n    background-color: transparent;\n    z-index: 11;\n}\n\n/*.sidebar__slider-input::-moz-range-thumb:hover {*/\n  /* background-color: #EEEEEE; */\n/*}*/\n\n\n/*.sidebar__slider-input-wrapper:hover .sidebar__slider-input-active-track {*/\n/*    background-color: #EEEEEE;*/\n/*}*/\n\n/*.sidebar__slider-input-wrapper:hover .sidebar__slider-input::-moz-range-thumb {*/\n/*    background-color: #fff !important;*/\n/*}*/\n\n/*.sidebar__slider-input-wrapper:hover .sidebar__slider-input::-webkit-slider-thumb {*/\n/*    background-color: #EEEEEE;*/\n/*}*/\n\n.sidebar__slider input[type=text],\n.sidebar__slider input[type=paddword]\n{\n    box-sizing: border-box;\n    /*background-color: #333333;*/\n    text-align: right;\n    color: #BBBBBB;\n    display: inline-block;\n    background-color: transparent !important;\n\n    width: 40%;\n    height: 18px;\n    outline: none;\n    border: none;\n    border-radius: 0;\n    padding: 0 0 0 4px !important;\n    margin: 0;\n}\n\n.sidebar__slider input[type=text]:active,\n.sidebar__slider input[type=text]:focus,\n.sidebar__slider input[type=text]:hover\n.sidebar__slider input[type=password]:active,\n.sidebar__slider input[type=password]:focus,\n.sidebar__slider input[type=password]:hover\n{\n\n    color: #EEEEEE;\n}\n\n/*\n * TEXT / DESCRIPTION\n */\n\n.sidebar__text .sidebar__item-label {\n    width: auto;\n    display: block;\n    max-height: none;\n    margin-right: 0;\n    line-height: 1.1em;\n}\n\n/*\n * SIDEBAR INPUT\n */\n.sidebar__text-input textarea,\n.sidebar__text-input input[type=date],\n.sidebar__text-input input[type=datetime-local],\n.sidebar__text-input input[type=text],\n.sidebar__text-input input[type=password] {\n    box-sizing: border-box;\n    background-color: #333333;\n    color: #BBBBBB;\n    display: inline-block;\n    width: 50%;\n    height: 18px;\n    outline: none;\n    border: none;\n    border-radius: 0;\n    border:1px solid #666;\n    padding: 0 0 0 4px !important;\n    margin: 0;\n    color-scheme: dark;\n}\n\n.sidebar__text-input textarea:focus::placeholder {\n  color: transparent;\n}\n\n.sidebar__color-picker .sidebar__item-label\n{\n    width:45%;\n}\n\n.sidebar__text-input textarea,\n.sidebar__text-input input[type=text]:active,\n.sidebar__text-input input[type=text]:focus,\n.sidebar__text-input input[type=text]:hover,\n.sidebar__text-input input[type=password]:active,\n.sidebar__text-input input[type=password]:focus,\n.sidebar__text-input input[type=password]:hover {\n    background-color: transparent;\n    color: #EEEEEE;\n}\n\n.sidebar__text-input textarea\n{\n    margin-top:10px;\n    height:60px;\n    width:100%;\n}\n\n/*\n * SIDEBAR SELECT\n */\n\n\n\n .sidebar__select {}\n .sidebar__select-select {\n    color: #BBBBBB;\n    /*-webkit-appearance: none;*/\n    /*-moz-appearance: none;*/\n    appearance: none;\n    /*box-sizing: border-box;*/\n    width: 50%;\n    /*height: 20px;*/\n    background-color: #333333;\n    /*background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiPjwvcG9seWxpbmU+PC9zdmc+);*/\n    background-repeat: no-repeat;\n    background-position: right center;\n    background-size: 16px 16px;\n    margin: 0;\n    /*padding: 0 2 2 6px;*/\n    border-radius: 5px;\n    border: 1px solid #777;\n    background-color: #444;\n    cursor: pointer;\n    outline: none;\n    padding-left: 5px;\n\n }\n\n.sidebar__select-select:hover,\n.sidebar__select-select:active,\n.sidebar__select-select:inactive {\n    background-color: #444444;\n    color: #EEEEEE;\n}\n\n/*.sidebar__select-select option*/\n/*{*/\n/*    background-color: #444444;*/\n/*    color: #bbb;*/\n/*}*/\n\n.sidebar__select-select option:checked\n{\n    background-color: #000;\n    color: #FFF;\n}\n\n\n/*\n * COLOR PICKER\n */\n\n\n .sidebar__color-picker input[type=text] {\n    box-sizing: border-box;\n    background-color: #333333;\n    color: #BBBBBB;\n    display: inline-block;\n    width: calc(50% - 21px); /* 50% minus space of picker circle */\n    height: 18px;\n    outline: none;\n    border: none;\n    border-radius: 0;\n    padding: 0 0 0 4px !important;\n    margin: 0;\n    margin-right: 7px;\n}\n\n.sidebar__color-picker input[type=text]:active,\n.sidebar__color-picker input[type=text]:focus,\n.sidebar__color-picker input[type=text]:hover {\n    background-color: #444444;\n    color: #EEEEEE;\n}\n\ndiv.sidebar__color-picker-color-input,\n.sidebar__color-picker input[type=color],\n.sidebar__palette-picker input[type=color] {\n    display: inline-block;\n    border-radius: 100%;\n    height: 14px;\n    width: 14px;\n\n    padding: 0;\n    border: none;\n    /*border:2px solid red;*/\n    border-color: transparent;\n    outline: none;\n    background: none;\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    cursor: pointer;\n    position: relative;\n    top: 3px;\n}\n.sidebar__color-picker input[type=color]:focus,\n.sidebar__palette-picker input[type=color]:focus {\n    outline: none;\n}\n.sidebar__color-picker input[type=color]::-moz-color-swatch,\n.sidebar__palette-picker input[type=color]::-moz-color-swatch {\n    border: none;\n}\n.sidebar__color-picker input[type=color]::-webkit-color-swatch-wrapper,\n.sidebar__palette-picker input[type=color]::-webkit-color-swatch-wrapper {\n    padding: 0;\n}\n.sidebar__color-picker input[type=color]::-webkit-color-swatch,\n.sidebar__palette-picker input[type=color]::-webkit-color-swatch {\n    border: none;\n    border-radius: 100%;\n}\n\n/*\n * Palette Picker\n */\n.sidebar__palette-picker .sidebar__palette-picker-color-input.first {\n    margin-left: 0;\n}\n.sidebar__palette-picker .sidebar__palette-picker-color-input.last {\n    margin-right: 0;\n}\n.sidebar__palette-picker .sidebar__palette-picker-color-input {\n    margin: 0 4px;\n}\n\n.sidebar__palette-picker .circlebutton {\n    width: 14px;\n    height: 14px;\n    border-radius: 1em;\n    display: inline-block;\n    top: 3px;\n    position: relative;\n}\n\n/*\n * Preset\n */\n.sidebar__item-presets-preset\n{\n    padding:4px;\n    cursor:pointer;\n    padding-left:8px;\n    padding-right:8px;\n    margin-right:4px;\n    background-color:#444;\n}\n\n.sidebar__item-presets-preset:hover\n{\n    background-color:#666;\n}\n\n.sidebar__greyout\n{\n    background: #222;\n    opacity: 0.8;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: 1000;\n    right: 0;\n    top: 0;\n}\n\n.sidebar_tabs\n{\n    background-color: #151515;\n    padding-bottom: 0px;\n}\n\n.sidebar_switchs\n{\n    float: right;\n}\n\n.sidebar_tab\n{\n    float:left;\n    background-color: #151515;\n    border-bottom:1px solid transparent;\n    padding-right:7px;\n    padding-left:7px;\n    padding-bottom: 5px;\n    padding-top: 5px;\n    cursor:pointer;\n}\n\n.sidebar_tab_active\n{\n    background-color: #272727;\n    color:white;\n}\n\n.sidebar_tab:hover\n{\n    border-bottom:1px solid #777;\n    color:white;\n}\n\n\n.sidebar_switch\n{\n    float:left;\n    background-color: #444;\n    padding-right:7px;\n    padding-left:7px;\n    padding-bottom: 5px;\n    padding-top: 5px;\n    cursor:pointer;\n}\n\n.sidebar_switch:last-child\n{\n    border-top-right-radius: 7px;\n    border-bottom-right-radius: 7px;\n}\n\n.sidebar_switch:first-child\n{\n    border-top-left-radius: 7px;\n    border-bottom-left-radius: 7px;\n}\n\n\n.sidebar_switch_active\n{\n    background-color: #999;\n    color:white;\n}\n\n.sidebar_switch:hover\n{\n    color:white;\n}\n\n",};
// vars
const CSS_ELEMENT_CLASS = "cables-sidebar-style"; /* class for the style element to be generated */
const CSS_ELEMENT_DYNAMIC_CLASS = "cables-sidebar-dynamic-style"; /* things which can be set via op-port, but not attached to the elements themselves, e.g. minimized opacity */
const SIDEBAR_CLASS = "sidebar-cables";
const SIDEBAR_ID = "sidebar" + CABLES.uuid();
const SIDEBAR_ITEMS_CLASS = "sidebar__items";
const SIDEBAR_OPEN_CLOSE_BTN_CLASS = "sidebar__close-button";

const BTN_TEXT_OPEN = ""; // 'Close';
const BTN_TEXT_CLOSED = ""; // 'Show Controls';

let openCloseBtn = null;
let openCloseBtnIcon = null;
let headerTitleText = null;

// inputs
const visiblePort = op.inValueBool("Visible", true);
const opacityPort = op.inValueSlider("Opacity", 1);
const defaultMinimizedPort = op.inValueBool("Default Minimized");
const minimizedOpacityPort = op.inValueSlider("Minimized Opacity", 0.5);
const undoButtonPort = op.inValueBool("Show undo button", false);
const inMinimize = op.inValueBool("Show Minimize", false);

const inTitle = op.inString("Title", "");
const side = op.inValueBool("Side");
const addCss = op.inValueBool("Default CSS", true);

let doc = op.patch.cgl.canvas.ownerDocument;

// outputs
const childrenPort = op.outObject("childs");
childrenPort.setUiAttribs({ "title": "Children" });

const isOpenOut = op.outBool("Opfened");
isOpenOut.setUiAttribs({ "title": "Opened" });

let sidebarEl = doc.querySelector("." + SIDEBAR_ID);
if (!sidebarEl) sidebarEl = initSidebarElement();

const sidebarItemsEl = sidebarEl.querySelector("." + SIDEBAR_ITEMS_CLASS);
childrenPort.set({
    "parentElement": sidebarItemsEl,
    "parentOp": op,
});
onDefaultMinimizedPortChanged();
initSidebarCss();
updateDynamicStyles();

addCss.onChange = () =>
{
    initSidebarCss();
    updateDynamicStyles();
};
visiblePort.onChange = onVisiblePortChange;
opacityPort.onChange = onOpacityPortChange;
defaultMinimizedPort.onChange = onDefaultMinimizedPortChanged;
minimizedOpacityPort.onChange = onMinimizedOpacityPortChanged;
undoButtonPort.onChange = onUndoButtonChange;
op.onDelete = onDelete;

function onMinimizedOpacityPortChanged()
{
    updateDynamicStyles();
}

inMinimize.onChange = updateMinimize;

function updateMinimize(header)
{
    if (!header || header.uiAttribs) header = doc.querySelector(".sidebar-cables .sidebar__group-header");
    if (!header) return;

    const undoButton = doc.querySelector(".sidebar-cables .sidebar__group-header .sidebar__group-header-undo");

    if (inMinimize.get())
    {
        header.classList.add("iconsidebar-chevron-up");
        header.classList.add("iconsidebar-minimizebutton");

        if (undoButton)undoButton.style.marginRight = "20px";
    }
    else
    {
        header.classList.remove("iconsidebar-chevron-up");
        header.classList.remove("iconsidebar-minimizebutton");

        if (undoButton)undoButton.style.marginRight = "initial";
    }
}

side.onChange = function ()
{
    if (!sidebarEl) return;
    if (side.get()) sidebarEl.classList.add("sidebar-cables-right");
    else sidebarEl.classList.remove("sidebar-cables-right");
};

function onUndoButtonChange()
{
    const header = doc.querySelector(".sidebar-cables .sidebar__group-header");
    if (header)
    {
        initUndoButton(header);
    }
}

function initUndoButton(header)
{
    if (header)
    {
        const undoButton = doc.querySelector(".sidebar-cables .sidebar__group-header .sidebar__group-header-undo");
        if (undoButton)
        {
            if (!undoButtonPort.get())
            {
                // header.removeChild(undoButton);
                undoButton.remove();
            }
        }
        else
        {
            if (undoButtonPort.get())
            {
                const headerUndo = doc.createElement("span");
                headerUndo.classList.add("sidebar__group-header-undo");
                headerUndo.classList.add("sidebar-icon-undo");

                headerUndo.addEventListener("click", function (event)
                {
                    event.stopPropagation();
                    const reloadables = doc.querySelectorAll(".sidebar-cables .sidebar__reloadable");
                    const doubleClickEvent = doc.createEvent("MouseEvents");
                    doubleClickEvent.initEvent("dblclick", true, true);
                    reloadables.forEach((reloadable) =>
                    {
                        reloadable.dispatchEvent(doubleClickEvent);
                    });
                });
                header.appendChild(headerUndo);
            }
        }
    }
    updateMinimize(header);
}

function onDefaultMinimizedPortChanged()
{
    if (!openCloseBtn) { return; }
    if (defaultMinimizedPort.get())
    {
        sidebarEl.classList.add("sidebar--closed");
        if (visiblePort.get()) isOpenOut.set(false);
    }
    else
    {
        sidebarEl.classList.remove("sidebar--closed");
        if (visiblePort.get()) isOpenOut.set(true);
    }
}

function onOpacityPortChange()
{
    const opacity = opacityPort.get();
    sidebarEl.style.opacity = opacity;
}

function onVisiblePortChange()
{
    if (!sidebarEl) return;
    if (visiblePort.get())
    {
        sidebarEl.style.display = "block";
        if (!sidebarEl.classList.contains("sidebar--closed")) isOpenOut.set(true);
    }
    else
    {
        sidebarEl.style.display = "none";
        isOpenOut.set(false);
    }
}

side.onChanged = function ()
{

};

/**
 * Some styles cannot be set directly inline, so a dynamic stylesheet is needed.
 * Here hover states can be set later on e.g.
 */
function updateDynamicStyles()
{
    const dynamicStyles = doc.querySelectorAll("." + CSS_ELEMENT_DYNAMIC_CLASS);
    if (dynamicStyles)
    {
        dynamicStyles.forEach(function (e)
        {
            e.parentNode.removeChild(e);
        });
    }

    if (!addCss.get()) return;

    const newDynamicStyle = doc.createElement("style");
    newDynamicStyle.classList.add("cablesEle");
    newDynamicStyle.classList.add(CSS_ELEMENT_DYNAMIC_CLASS);
    let cssText = ".sidebar--closed .sidebar__close-button { ";
    cssText += "opacity: " + minimizedOpacityPort.get();
    cssText += "}";
    const cssTextEl = doc.createTextNode(cssText);
    newDynamicStyle.appendChild(cssTextEl);
    doc.body.appendChild(newDynamicStyle);
}

function initSidebarElement()
{
    const element = doc.createElement("div");
    element.classList.add(SIDEBAR_CLASS);
    element.classList.add(SIDEBAR_ID);
    const canvasWrapper = op.patch.cgl.canvas.parentElement; /* maybe this is bad outside cables!? */

    // header...
    const headerGroup = doc.createElement("div");
    headerGroup.classList.add("sidebar__group");

    element.appendChild(headerGroup);
    const header = doc.createElement("div");
    header.classList.add("sidebar__group-header");

    element.appendChild(header);
    const headerTitle = doc.createElement("span");
    headerTitle.classList.add("sidebar__group-header-title");
    headerTitleText = doc.createElement("span");
    headerTitleText.classList.add("sidebar__group-header-title-text");
    headerTitleText.innerHTML = inTitle.get();
    headerTitle.appendChild(headerTitleText);
    header.appendChild(headerTitle);

    initUndoButton(header);
    updateMinimize(header);

    headerGroup.appendChild(header);
    element.appendChild(headerGroup);
    headerGroup.addEventListener("click", onOpenCloseBtnClick);

    if (!canvasWrapper)
    {
        op.warn("[sidebar] no canvas parentelement found...");
        return;
    }
    canvasWrapper.appendChild(element);
    const items = doc.createElement("div");
    items.classList.add(SIDEBAR_ITEMS_CLASS);
    element.appendChild(items);
    openCloseBtn = doc.createElement("div");
    openCloseBtn.classList.add(SIDEBAR_OPEN_CLOSE_BTN_CLASS);
    openCloseBtn.addEventListener("click", onOpenCloseBtnClick);
    element.appendChild(openCloseBtn);

    return element;
}

inTitle.onChange = function ()
{
    if (headerTitleText)headerTitleText.innerHTML = inTitle.get();
};

function setClosed(b)
{

}

function onOpenCloseBtnClick(ev)
{
    ev.stopPropagation();
    if (!sidebarEl) { op.logError("Sidebar could not be closed..."); return; }
    sidebarEl.classList.toggle("sidebar--closed");
    const btn = ev.target;
    let btnText = BTN_TEXT_OPEN;
    if (sidebarEl.classList.contains("sidebar--closed"))
    {
        btnText = BTN_TEXT_CLOSED;
        isOpenOut.set(false);
    }
    else
    {
        isOpenOut.set(true);
    }
}

function initSidebarCss()
{
    const cssElements = doc.querySelectorAll("." + CSS_ELEMENT_CLASS);
    // remove old script tag
    if (cssElements)
    {
        cssElements.forEach((e) =>
        {
            e.parentNode.removeChild(e);
        });
    }

    if (!addCss.get()) return;

    const newStyle = doc.createElement("style");

    newStyle.innerHTML = attachments.style_css;
    newStyle.classList.add(CSS_ELEMENT_CLASS);
    newStyle.classList.add("cablesEle");
    doc.body.appendChild(newStyle);
}

function onDelete()
{
    removeElementFromDOM(sidebarEl);
}

function removeElementFromDOM(el)
{
    if (el && el.parentNode && el.parentNode.removeChild) el.parentNode.removeChild(el);
}


};

Ops.Sidebar.Sidebar.prototype = new CABLES.Op();
CABLES.OPS["5a681c35-78ce-4cb3-9858-bc79c34c6819"]={f:Ops.Sidebar.Sidebar,objName:"Ops.Sidebar.Sidebar"};




// **************************************************************
// 
// Ops.String.StringToNumber
// 
// **************************************************************

Ops.String.StringToNumber = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    str = op.inString("String", 0),
    outNum = op.outNumber("Number"),
    outNaN = op.outBoolNum("Not a number", false);

str.onChange = function ()
{
    outNaN.set(false);
    let num = parseFloat(str.get());
    if (num != num)
    {
        num = 0;
        outNaN.set(true);
    }

    outNum.set(num);
};


};

Ops.String.StringToNumber.prototype = new CABLES.Op();
CABLES.OPS["fa36a56b-a64d-4269-9a9e-addc16493006"]={f:Ops.String.StringToNumber,objName:"Ops.String.StringToNumber"};




// **************************************************************
// 
// Ops.Boolean.BoolByTrigger
// 
// **************************************************************

Ops.Boolean.BoolByTrigger = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inTriggerTrue = op.inTriggerButton("True"),
    inTriggerFalse = op.inTriggerButton("false"),
    outResult = op.outBoolNum("Result");

inTriggerTrue.onTriggered = function ()
{
    outResult.set(true);
};

inTriggerFalse.onTriggered = function ()
{
    outResult.set(false);
};


};

Ops.Boolean.BoolByTrigger.prototype = new CABLES.Op();
CABLES.OPS["31f65abe-9d6c-4ba6-a291-ef2de41d2087"]={f:Ops.Boolean.BoolByTrigger,objName:"Ops.Boolean.BoolByTrigger"};




// **************************************************************
// 
// Ops.Array.PointArray.Array3AreaRemove
// 
// **************************************************************

Ops.Array.PointArray.Array3AreaRemove = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const cgl = op.patch.cgl;

const inTrigger = op.inTrigger("In Trigger");
const inArray = op.inArray("In Array", 3);
const inMode = op.inDropDown("Mode", [
    "Sphere",
    "Box",
    "Axis X",
    "Axis Y",
    "Axis Z",
    "Axis X Infinite",
    "Axis Y Infinite",
    "Axis Z Infinite"
], "Sphere");
const inSize = op.inFloat("Size", 0);
const inInvert = op.inBool("Invert", false);

op.setPortGroup("Settings", [inMode, inSize, inInvert]);
const inPosX = op.inFloat("X", 0);
const inPosY = op.inFloat("Y", 0);
const inPosZ = op.inFloat("Z", 0);

op.setPortGroup("Position", [inPosX, inPosY, inPosZ]);

const outTrigger = op.outTrigger("Out Trigger");
const outArray = op.outArray("Out Array");
const outLength = op.outNumber("Array Length");
const outX = op.outNumber("Out X");
const outY = op.outNumber("Out Y");
const outZ = op.outNumber("Out Z");

const transVec = vec3.create();

const tempVec = vec3.create();
const rootVec = vec3.fromValues(inPosX.get(), inPosY.get(), inPosZ.get());

let parametersChanged = true;
inArray.onChange = inMode.onChange = inSize.onChange = inInvert.onChange = inPosX.onChange = inPosY.onChange = inPosZ.onChange = () =>
{
    parametersChanged = true;
};

const DISCARD_FUNCS = {
    "Sphere": (inArr) =>
    {
        const newArr = [];
        const radiusSquared = inSize.get() * inSize.get();
        let CONDITION = (a, b) => { return a > b; };
        if (inInvert.get()) CONDITION = (a, b) => { return a < b; };

        for (let i = 0, len = inArr.length / 3; i < len; i += 1)
        {
            vec3.set(tempVec, inArr[i * 3 + 0], inArr[i * 3 + 1], inArr[i * 3 + 2]);
            const distSquared = vec3.squaredDistance(tempVec, rootVec);

            if (CONDITION(distSquared, radiusSquared))
            {
                newArr.push(inArr[i * 3 + 0], inArr[i * 3 + 1], inArr[i * 3 + 2]);
            }
        }

        return newArr;
    },
    "Box": (inArr) =>
    {
        const size = inSize.get();
        const newArr = [];
        for (let i = 0, len = inArr.length / 3; i < len; i += 1)
        {
            vec3.set(tempVec, inArr[i * 3 + 0], inArr[i * 3 + 1], inArr[i * 3 + 2]);

            if (
                Math.abs(tempVec[1] - rootVec[1]) > size
                || Math.abs(tempVec[0] - rootVec[0]) > size
                || Math.abs(tempVec[2] - rootVec[2]) > size
            )
            {
                if (!inInvert.get()) newArr.push(inArr[i * 3 + 0], inArr[i * 3 + 1], inArr[i * 3 + 2]);
            }
            else
            {
                if (inInvert.get()) newArr.push(inArr[i * 3 + 0], inArr[i * 3 + 1], inArr[i * 3 + 2]);
            }
        }

        return newArr;
    },
    "Axis X": (inArr) =>
    {
        const size = inSize.get();
        const newArr = [];
        for (let i = 0, len = inArr.length / 3; i < len; i += 1)
        {
            if (Math.abs(inArr[i * 3] - rootVec[0]) > size)
            {
                if (!inInvert.get()) newArr.push(inArr[i * 3 + 0], inArr[i * 3 + 1], inArr[i * 3 + 2]);
            }
            else
            {
                if (inInvert.get()) newArr.push(inArr[i * 3 + 0], inArr[i * 3 + 1], inArr[i * 3 + 2]);
            }
        }

        return newArr;
    },
    "Axis Y": (inArr) =>
    {
        const size = inSize.get();
        const newArr = [];
        for (let i = 0, len = inArr.length / 3; i < len; i += 1)
        {
            if (Math.abs(inArr[i * 3 + 1] - rootVec[1]) > size)
            {
                if (!inInvert.get()) newArr.push(inArr[i * 3 + 0], inArr[i * 3 + 1], inArr[i * 3 + 2]);
            }
            else
            {
                if (inInvert.get()) newArr.push(inArr[i * 3 + 0], inArr[i * 3 + 1], inArr[i * 3 + 2]);
            }
        }

        return newArr;
    },
    "Axis Z": (inArr) =>
    {
        const size = inSize.get();
        const newArr = [];
        for (let i = 0, len = inArr.length / 3; i < len; i += 1)
        {
            if (Math.abs(inArr[i * 3 + 2] - rootVec[2]) > size)
            {
                if (!inInvert.get()) newArr.push(inArr[i * 3 + 0], inArr[i * 3 + 1], inArr[i * 3 + 2]);
            }
            else
            {
                if (inInvert.get()) newArr.push(inArr[i * 3 + 0], inArr[i * 3 + 1], inArr[i * 3 + 2]);
            }
        }

        return newArr;
    },
    "Axis X Infinite": (inArr) =>
    {
        const size = inSize.get();
        const newArr = [];
        for (let i = 0, len = inArr.length / 3; i < len; i += 1)
        {
            if (inArr[i * 3] - rootVec[0] > size)
            {
                if (!inInvert.get()) newArr.push(inArr[i * 3 + 0], inArr[i * 3 + 1], inArr[i * 3 + 2]);
            }
            else
            {
                if (inInvert.get()) newArr.push(inArr[i * 3 + 0], inArr[i * 3 + 1], inArr[i * 3 + 2]);
            }
        }

        return newArr;
    },
    "Axis Y Infinite": (inArr) =>
    {
        const size = inSize.get();
        const newArr = [];
        for (let i = 0, len = inArr.length / 3; i < len; i += 1)
        {
            if (inArr[i * 3 + 1] - rootVec[1] > size)
            {
                if (!inInvert.get()) newArr.push(inArr[i * 3 + 0], inArr[i * 3 + 1], inArr[i * 3 + 2]);
            }
            else
            {
                if (inInvert.get()) newArr.push(inArr[i * 3 + 0], inArr[i * 3 + 1], inArr[i * 3 + 2]);
            }
        }

        return newArr;
    },
    "Axis Z Infinite": (inArr) =>
    {
        const size = inSize.get();
        const newArr = [];
        for (let i = 0, len = inArr.length / 3; i < len; i += 1)
        {
            if (inArr[i * 3 + 2] - rootVec[2] > size)
            {
                if (!inInvert.get()) newArr.push(inArr[i * 3 + 0], inArr[i * 3 + 1], inArr[i * 3 + 2]);
            }
            else
            {
                if (inInvert.get()) newArr.push(inArr[i * 3 + 0], inArr[i * 3 + 1], inArr[i * 3 + 2]);
            }
        }

        return newArr;
    },
};

inTrigger.onTriggered = () =>
{
    const inArr = inArray.get();
    drawHelpers();

    vec3.set(transVec, inPosX.get(), inPosY.get(), inPosZ.get());
    vec3.transformMat4(rootVec, transVec, cgl.mMatrix);

    if (!inArr)
    {
        outTrigger.trigger();
        outArray.set(null);
        return;
    }

    if (parametersChanged)
    {
        const newArr = DISCARD_FUNCS[inMode.get()](inArr);

        outArray.set(null);
        outArray.set(newArr);
        outLength.set(newArr.length);

        parametersChanged = false;
    }

    outX.set(rootVec[0]);
    outY.set(rootVec[1]);
    outZ.set(rootVec[2]);
    outTrigger.trigger();
};

const HELPER_FUNCS = {
    "Sphere": () => { return CABLES.GL_MARKER.drawSphere(op, inSize.get()); },
    "Box": () => { return CABLES.GL_MARKER.drawCube(op, inSize.get(), inSize.get(), inSize.get()); },
    "Axis X": () => { return CABLES.GL_MARKER.drawCube(op, inSize.get(), 2, 2); },
    "Axis Y": () => { return CABLES.GL_MARKER.drawCube(op, 2, inSize.get(), 2); },
    "Axis Z": () => { return CABLES.GL_MARKER.drawCube(op, 2, 2, inSize.get()); },
    "Axis X Infinite": () => { return CABLES.GL_MARKER.drawCube(op, inSize.get(), 2, 2); },
    "Axis Y Infinite": () => { return CABLES.GL_MARKER.drawCube(op, 2, inSize.get(), 2); },
    "Axis Z Infinite": () => { return CABLES.GL_MARKER.drawCube(op, 2, 2, inSize.get()); },
};

function drawHelpers()
{
    if (cgl.shouldDrawHelpers(op))
    {
        gui.setTransformGizmo({ "posX": inPosX, "posY": inPosY, "posZ": inPosZ });
        cgl.pushModelMatrix();
        mat4.translate(cgl.mMatrix, cgl.mMatrix, rootVec);
        HELPER_FUNCS[inMode.get()]();
        cgl.popModelMatrix();
    }
}


};

Ops.Array.PointArray.Array3AreaRemove.prototype = new CABLES.Op();
CABLES.OPS["db93f8c7-6bad-467e-b38f-333e84838d1d"]={f:Ops.Array.PointArray.Array3AreaRemove,objName:"Ops.Array.PointArray.Array3AreaRemove"};




// **************************************************************
// 
// Ops.Json.ObjectGetString
// 
// **************************************************************

Ops.Json.ObjectGetString = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    data = op.inObject("data"),
    key = op.inString("Key"),
    result = op.outString("Result");

result.ignoreValueSerialize = true;
data.ignoreValueSerialize = true;

op.setUiAttrib({ "extendTitlePort": key.name });
key.setUiAttribs({ "stringTrim": true });

key.onChange =
data.onChange = exec;

function exec()
{
    if (data.get())
    {
        const value = data.get()[key.get()];
        const isNull = value === undefined || value === null;

        if (isNull)
        {
            result.setRef(null);
        }
        else
        {
            result.set(String(value));
        }
    }
    else
    {
        result.setRef(null);
    }
}


};

Ops.Json.ObjectGetString.prototype = new CABLES.Op();
CABLES.OPS["7d86cd28-f7d8-44a1-a4da-466c4782aaec"]={f:Ops.Json.ObjectGetString,objName:"Ops.Json.ObjectGetString"};




// **************************************************************
// 
// Ops.String.StringEquals
// 
// **************************************************************

Ops.String.StringEquals = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    str1 = op.inString("String 1"),
    str2 = op.inString("String 2"),
    result = op.outBoolNum("Result");

str1.onChange =
str2.onChange =
    function ()
    {
        result.set(str1.get() == str2.get());
    };


};

Ops.String.StringEquals.prototype = new CABLES.Op();
CABLES.OPS["ef15195a-760b-4ac5-9630-322b0ba7b722"]={f:Ops.String.StringEquals,objName:"Ops.String.StringEquals"};




// **************************************************************
// 
// Ops.Patch.PxdLHGq.SidebarSlider_v3
// 
// **************************************************************

Ops.Patch.PxdLHGq.SidebarSlider_v3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// constants
const STEP_DEFAULT = 0.00001;

// inputs
const parentPort = op.inObject("link");
const labelPort = op.inString("Text", "Slider");
const minPort = op.inValue("Min", 0);
const maxPort = op.inValue("Max", 1);
const stepPort = op.inValue("Step", STEP_DEFAULT);
const labelSuffix = op.inString("Suffix", "");

const inGreyOut = op.inBool("Grey Out", false);
const inVisible = op.inBool("Visible", true);

const inputValuePort = op.inValue("Input", 0.5);
const setDefaultValueButtonPort = op.inTriggerButton("Set Default");
const reset = op.inTriggerButton("Reset");

let parent = null;

const defaultValuePort = op.inValue("Default", 0.5);
defaultValuePort.setUiAttribs({ "hidePort": true, "greyout": true });

// outputs
const siblingsPort = op.outObject("childs");
const valuePort = op.outNumber("Result", defaultValuePort.get());
const interactionPort = op.outObject("Interaction", {  });

op.toWorkNeedsParent("Ops.Sidebar.Sidebar");
op.setPortGroup("Range", [minPort, maxPort, stepPort]);
op.setPortGroup("Display", [inGreyOut, inVisible]);

// vars
const el = document.createElement("div");
el.addEventListener("dblclick", function ()
{
    valuePort.set(parseFloat(defaultValuePort.get()));
    inputValuePort.set(parseFloat(defaultValuePort.get()));
    setValueFieldValue(defaultValuePort.get());
    interactionPort.set( { "type": "dblclick", "value": parseFloat(defaultValuePort.get()) });
});

el.addEventListener("mouseenter", function ()
{
    interactionPort.set( { "type": "hover", "value": parseFloat(valuePort.get()), "paramId": "scapeOffset"});
});

el.addEventListener("mousedown", function ()
{
    interactionPort.set( { "type": "mousedown", "value": parseFloat(valuePort.get()), "paramId": "scapeOffset"});
});


el.addEventListener("mouseleave", function ()
{
    interactionPort.set( { "type": "leave", "value": parseFloat(valuePort.get()), "paramId": "disengage"});
})

el.dataset.op = op.id;
el.classList.add("cablesEle");

el.classList.add("sidebar__item");
el.classList.add("sidebar__slider");
el.classList.add("sidebar__reloadable");

op.patch.on("sidebarStylesChanged", () => { updateActiveTrack(); });

const label = document.createElement("div");
label.classList.add("sidebar__item-label");

const greyOut = document.createElement("div");
greyOut.classList.add("sidebar__greyout");
el.appendChild(greyOut);
greyOut.style.display = "none";

const labelText = document.createTextNode(labelPort.get());
label.appendChild(labelText);
el.appendChild(label);

const value = document.createElement("input");
value.value = defaultValuePort.get();
value.classList.add("sidebar__text-input-input");
value.setAttribute("type", "text");
value.oninput = onTextInputChanged;
el.appendChild(value);

const suffixEle = document.createElement("span");
// setValueFieldValue(defaultValuePort).get();
// value.setAttribute("type", "text");
// value.oninput = onTextInputChanged;

el.appendChild(suffixEle);

labelSuffix.onChange = () =>
{
    suffixEle.innerHTML = labelSuffix.get();
};

const inputWrapper = document.createElement("div");
inputWrapper.classList.add("sidebar__slider-input-wrapper");
el.appendChild(inputWrapper);

const activeTrack = document.createElement("div");
activeTrack.classList.add("sidebar__slider-input-active-track");
inputWrapper.appendChild(activeTrack);
const input = document.createElement("input");
input.classList.add("sidebar__slider-input");
input.setAttribute("min", minPort.get());
input.setAttribute("max", maxPort.get());
input.setAttribute("type", "range");
input.setAttribute("step", stepPort.get());
input.setAttribute("value", defaultValuePort.get());
input.style.display = "block"; /* needed because offsetWidth returns 0 otherwise */
inputWrapper.appendChild(input);

updateActiveTrack();
input.addEventListener("input", onSliderInput);

// events
parentPort.onChange = onParentChanged;
labelPort.onChange = onLabelTextChanged;
inputValuePort.onChange = onInputValuePortChanged;
defaultValuePort.onChange = onDefaultValueChanged;
setDefaultValueButtonPort.onTriggered = onSetDefaultValueButtonPress;
minPort.onChange = onMinPortChange;
maxPort.onChange = onMaxPortChange;
stepPort.onChange = stepPortChanged;
op.onDelete = onDelete;

// op.onLoadedValueSet=function()
op.onLoaded = op.onInit = function ()
{
    if (op.patch.config.sidebar)
    {
        op.patch.config.sidebar[labelPort.get()];
        valuePort.set(op.patch.config.sidebar[labelPort.get()]);
    }
    else
    {
        valuePort.set(parseFloat(defaultValuePort.get()));
        inputValuePort.set(parseFloat(defaultValuePort.get()));
        // onInputValuePortChanged();
    }
};

reset.onTriggered = function ()
{
    const newValue = parseFloat(defaultValuePort.get());
    valuePort.set(newValue);
    setValueFieldValue(newValue);
    setInputFieldValue(newValue);
    inputValuePort.set(newValue);
    updateActiveTrack();
};

inGreyOut.onChange = function ()
{
    greyOut.style.display = inGreyOut.get() ? "block" : "none";
};

inVisible.onChange = function ()
{
    el.style.display = inVisible.get() ? "block" : "none";
};

function onTextInputChanged(ev)
{
    let newValue = parseFloat(ev.target.value);
    if (isNaN(newValue)) newValue = 0;
    const min = minPort.get();
    const max = maxPort.get();
    if (newValue < min) { newValue = min; }
    else if (newValue > max) { newValue = max; }
    // setInputFieldValue(newValue);
    valuePort.set(newValue);
    updateActiveTrack();
    inputValuePort.set(newValue);
    op.refreshParams();
}

function onInputValuePortChanged()
{
    let newValue = parseFloat(inputValuePort.get());
    const minValue = minPort.get();
    const maxValue = maxPort.get();
    if (newValue > maxValue) { newValue = maxValue; }
    else if (newValue < minValue) { newValue = minValue; }
    // setValueFieldValue(newValue);
    setInputFieldValue(newValue);
    valuePort.set(newValue);
    updateActiveTrack();
}

function onSetDefaultValueButtonPress()
{
    let newValue = parseFloat(inputValuePort.get());
    const minValue = minPort.get();
    const maxValue = maxPort.get();
    if (newValue > maxValue) { newValue = maxValue; }
    else if (newValue < minValue) { newValue = minValue; }
    setValueFieldValue(newValue);
    setInputFieldValue(newValue);
    valuePort.set(newValue);
    defaultValuePort.set(newValue);
    op.refreshParams();

    updateActiveTrack();
}

function onSliderInput(ev)
{
    ev.preventDefault();
    ev.stopPropagation();
    setValueFieldValue(ev.target.value);
    const inputFloat = parseFloat(ev.target.value);
    valuePort.set(inputFloat);
    inputValuePort.set(inputFloat);
    op.refreshParams();

    updateActiveTrack();
    interactionPort.set( { "type": "input", "value": inputFloat, "paramId": "scapeOffset" });
    return false;
}

function stepPortChanged()
{
    const step = stepPort.get();
    input.setAttribute("step", step);
    updateActiveTrack();
}

function updateActiveTrack(val)
{
    let valueToUse = parseFloat(input.value);
    if (typeof val !== "undefined") valueToUse = val;
    let availableWidth = activeTrack.parentElement.getBoundingClientRect().width || 220;
    if (parent) availableWidth = parseInt(getComputedStyle(parent.parentElement).getPropertyValue("--sidebar-width")) - 20;

    const trackWidth = CABLES.map(
        valueToUse,
        parseFloat(input.min),
        parseFloat(input.max),
        0,
        availableWidth - 16 /* subtract slider thumb width */
    );
    activeTrack.style.width = trackWidth + "px";
}

function onMinPortChange()
{
    const min = minPort.get();
    input.setAttribute("min", min);
    updateActiveTrack();
}

function onMaxPortChange()
{
    const max = maxPort.get();
    input.setAttribute("max", max);
    updateActiveTrack();
}

function onDefaultValueChanged()
{
    const defaultValue = defaultValuePort.get();
    valuePort.set(parseFloat(defaultValue));
    onMinPortChange();
    onMaxPortChange();
    setInputFieldValue(defaultValue);
    setValueFieldValue(defaultValue);

    updateActiveTrack(defaultValue); // needs to be passed as argument, is this async?
}

function onLabelTextChanged()
{
    const labelText = labelPort.get();
    label.textContent = labelText;
    if (CABLES.UI) op.setUiAttrib({ "extendTitle": labelText });
}

function onParentChanged()
{
    siblingsPort.set(null);
    parent = parentPort.get();
    if (parent && parent.parentElement)
    {
        parent.parentElement.appendChild(el);
        siblingsPort.set(parent);
    }
    else if (el.parentElement) el.parentElement.removeChild(el);

    updateActiveTrack();
}

function setValueFieldValue(v)
{
    value.value = v;
}

function setInputFieldValue(v)
{
    input.value = v;
}

function showElement(el)
{
    if (el)el.style.display = "block";

}

function hideElement(el)
{
    if (el)el.style.display = "none";

}

function onDelete()
{
    removeElementFromDOM(el);

}

function removeElementFromDOM(el)
{
    if (el && el.parentNode && el.parentNode.removeChild) el.parentNode.removeChild(el);
}


};

Ops.Patch.PxdLHGq.SidebarSlider_v3.prototype = new CABLES.Op();
CABLES.OPS["22b0ba21-a0c3-45a0-b0bc-2db5d770582e"]={f:Ops.Patch.PxdLHGq.SidebarSlider_v3,objName:"Ops.Patch.PxdLHGq.SidebarSlider_v3"};




// **************************************************************
// 
// Ops.Array.ArrayChangedTrigger
// 
// **************************************************************

Ops.Array.ArrayChangedTrigger = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inArr = op.inArray("Array"),
    next = op.outTrigger("Changed Trigger"),
    outArr = op.outArray("New Array");

inArr.onChange = function ()
{
    outArr.setRef(inArr.get());
    next.trigger();
};


};

Ops.Array.ArrayChangedTrigger.prototype = new CABLES.Op();
CABLES.OPS["bb55860d-a186-4e39-9542-8d21185e7e12"]={f:Ops.Array.ArrayChangedTrigger,objName:"Ops.Array.ArrayChangedTrigger"};




// **************************************************************
// 
// Ops.Array.RotateArray
// 
// **************************************************************

Ops.Array.RotateArray = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const inArray = op.inArray("Array in");
const count = op.inValueInt("Rotate amount", 0);
const outArray = op.outArray("ArrayOut");

let newArr = [];
outArray.set(newArr);

count.onChange =
inArray.onChange = function ()
{
    let arr = inArray.get();
    if (!arr) return;

    let rotateIndex = -count.get();

    newArr = rotate(inArray.get(), rotateIndex, 0);
    outArray.set(null);
    outArray.set(newArr);
};

// https://gist.github.com/aubergene/7ecfe624199e68f60258
function rotate(array, n, guard)
{
    let head, tail;
    n = (n === null) || guard ? 1 : n;
    n %= array.length;
    tail = array.slice(n) || [];

    if (!tail || !tail.concat) return [];

    head = array.slice(0, n) || [];
    return tail.concat(head);
}


};

Ops.Array.RotateArray.prototype = new CABLES.Op();
CABLES.OPS["e435d07b-8545-4469-befb-868510adcb76"]={f:Ops.Array.RotateArray,objName:"Ops.Array.RotateArray"};




// **************************************************************
// 
// Ops.Json.ObjectSetString_v2
// 
// **************************************************************

Ops.Json.ObjectSetString_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inObject = op.inObject("Object"),
    outObject = op.outObject("Result Object"),
    inKey = op.inString("Key"),
    inValue = op.inString("Value");

inObject.onChange =
    inValue.onChange = update;

inKey.setUiAttribs({ "stringTrim": true, "minLength": 1 });

inKey.onChange = () =>
{
    op.setUiAttrib({ "extendTitle": inKey.get() });
    update();
};

function update()
{
    let obj = inObject.get();
    if (!obj) obj = {};

    const key = inKey.get();

    const newObj = JSON.parse(JSON.stringify(obj));

    if (key) newObj[key] = inValue.get();

    outObject.setRef(newObj);
}


};

Ops.Json.ObjectSetString_v2.prototype = new CABLES.Op();
CABLES.OPS["1ed8f375-c3d7-4662-88c7-1afbc3dc6129"]={f:Ops.Json.ObjectSetString_v2,objName:"Ops.Json.ObjectSetString_v2"};




// **************************************************************
// 
// Ops.Net.WebSocket.WebSocket_v2
// 
// **************************************************************

Ops.Net.WebSocket.WebSocket_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inUrl = op.inString("URL"),
    outResult = op.outObject("Result"),
    outValidJson = op.outBoolNum("Valid JSON"),
    outConnection = op.outObject("Connection", null, "Websocket"),
    outConnected = op.outBoolNum("Connected"),
    outReceived = op.outTrigger("Received Data"),
    outRaw = op.outString("Raw Data");

let connection = null;
let timeout = null;
let connectedTo = "";

inUrl.onChange = connect;
timeout = setTimeout(checkConnection, 2000);

inUrl.set();

let connecting = false;

function checkConnection()
{
    if (!outConnected.get() && !connecting)
    {
        // op.log("reconnect websocket...");
        connect();
    }

    timeout = setTimeout(checkConnection, 2000);
}

op.onDelete = function ()
{
    if (outConnected.get())connection.close();
    connecting = false;
    clearTimeout(timeout);
};

function connect()
{
    op.setUiError("connection", null);
    op.setUiError("jsonvalid", null);

    if (outConnected.get() && connectedTo == inUrl.get()) return;

    if (inUrl.get() && inUrl.get().indexOf("ws://") == -1 && inUrl.get().indexOf("wss://") == -1)
    {
        op.setUiError("wrongproto", "only valid protocols are ws:// or wss:// ");
        return;
    }
    else
        op.setUiError("wrongproto", null);

    if (!inUrl.get() || inUrl.get() === "")
    {
        op.logWarn("websocket: invalid url ");
        outConnected.set(false);
        return;
    }

    window.WebSocket = window.WebSocket || window.MozWebSocket;

    if (!window.WebSocket)
        return op.logError("Sorry, but your browser doesn't support WebSockets.");

    op.setUiError("websocket", null);

    try
    {
        connecting = true;
        if (connection !== null)connection.close();
        connection = new WebSocket(inUrl.get());
    }
    catch (e)
    {
        if (e && e.message)op.setUiError("websocket", e.message);
        op.logWarn("could not connect to", inUrl.get());
        connecting = false;
    }

    if (connection)
    {
        connection.onerror = function (e)
        {
            connecting = false;

            outConnected.set(false);
            outConnection.set(null);
            // op.setUiError("connection", "Error connecting to websocket server", 2);
        };

        connection.onclose = function (message)
        {
            connecting = false;
            outConnected.set(false);
            outConnection.set(null);
        };

        connection.onopen = function (message)
        {
            connecting = false;
            outConnected.set(true);
            connectedTo = inUrl.get();
            outConnection.set(connection);
        };

        connection.onmessage = function (message)
        {
            op.setUiError("jsonvalid", null);
            outRaw.set(message.data);
            try
            {
                const json = JSON.parse(message.data);
                // outResult.set(null);
                outResult.setRef(json);
                outValidJson.set(true);
            }
            catch (e)
            {
                op.log(e);
                op.log("This doesn't look like a valid JSON: ", message.data);
                op.setUiError("jsonvalid", "Received message was not valid JSON", 0);
                outValidJson.set(false);
            }
            outReceived.trigger();
        };
    }
}


};

Ops.Net.WebSocket.WebSocket_v2.prototype = new CABLES.Op();
CABLES.OPS["e747dc72-8214-41ca-9aae-9041f20dd6ac"]={f:Ops.Net.WebSocket.WebSocket_v2,objName:"Ops.Net.WebSocket.WebSocket_v2"};




// **************************************************************
// 
// Ops.Patch.PxdLHGq.CountEmptyStringElements
// 
// **************************************************************

Ops.Patch.PxdLHGq.CountEmptyStringElements = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exec = op.inTrigger("Trigger"),
    arr = op.inArray("Array"),
    result = op.outNumber("Result");

let count = 0;

exec.onTriggered = () => {
    if (!arr.get()) return;

    count = 0; // Reset count each time the trigger is executed

    for (let str of arr.get()) {
        if (str.length > 0) count++;
    }

    result.set(count);
};

};

Ops.Patch.PxdLHGq.CountEmptyStringElements.prototype = new CABLES.Op();
CABLES.OPS["7b72a958-c864-4ca1-a961-f7bf805df6b3"]={f:Ops.Patch.PxdLHGq.CountEmptyStringElements,objName:"Ops.Patch.PxdLHGq.CountEmptyStringElements"};




// **************************************************************
// 
// Ops.Ui.VizArrayGraph
// 
// **************************************************************

Ops.Ui.VizArrayGraph = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inArr = op.inArray("Array Numbers"),
    inCurve = op.inBool("Curve", false);

op.setUiAttrib({ "height": 100, "width": 200, "resizable": true });

const padding = 10;

op.renderVizLayer = (ctx, layer) =>
{
    ctx.fillStyle = "#222";
    ctx.fillRect(
        layer.x, layer.y,
        layer.width, layer.height);

    const arr = inArr.get();
    if (!arr) return;

    const colors = ["#d1838e", "#95d183", "#7AC4E0", "#9091D6", "#FFC395", "#F0D165", "#63A8E8", "#D183BF", "#CF5D9D", "#66C984", "#D66AA6", "#515151"];

    let stride = 1;

    if (inArr.links.length > 0 && inArr.links[0].getOtherPort(inArr))
        stride = inArr.links[0].getOtherPort(inArr).uiAttribs.stride || 1;

    let max = -Number.MAX_VALUE;
    let min = Number.MAX_VALUE;
    let num = arr.length;
    let mulX = layer.width / ((num - stride) / stride);

    for (let i = 0; i < arr.length; i++)
    {
        let v = arr[i];

        min = Math.min(v, min);
        max = Math.max(v, max);
    }

    const step = mulX / (stride);

    let off = 0;
    if (inCurve.get())off = mulX / 2;
    for (let i = -stride; i < arr.length; i += stride)
    {
        if (i / stride % 2 == 0) ctx.fillStyle = "#222";
        else ctx.fillStyle = "#333";

        ctx.fillRect(layer.x + i * step + off, layer.y, mulX, layer.height);
    }

    {
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#444";
        ctx.beginPath();
        let y = CABLES.map(0, min, max, layer.height - 3, 3) + layer.y;
        ctx.moveTo(layer.x, y);
        ctx.lineTo(layer.x + layer.width, y);
        ctx.stroke();
    }

    if (inCurve.get())
        for (let st = 0; st < stride; st++)
        {
            ctx.lineWidth = 2;
            ctx.strokeStyle = colors[st];

            ctx.beginPath();

            for (let i = st; i < arr.length; i += stride)
            {
                let y = arr[i];

                y = CABLES.map(y, min, max, layer.height - 3, 3);
                y += layer.y;
                if (i === st)ctx.moveTo(layer.x, y);
                else ctx.lineTo(layer.x + (i - st) / stride * mulX, y);
            }

            ctx.stroke();
        }

    if (!inCurve.get())
    {
        // if(stride!=1)ctx.globalAlpha = 0.6;

        for (let st = 0; st < stride; st++)
        {
            for (let i = st; i < arr.length; i += stride)
            {
                let y = arr[i];

                ctx.fillStyle = colors[st];

                y = CABLES.map(y, min, max, layer.height - 3, 3);
                const y0 = CABLES.map(0, min, max, layer.height - 3, 3);

                const ymin = Math.min(y, y0);
                const ymax = Math.max(y, y0);

                ctx.fillRect(layer.x + (i - st) / stride * mulX + st * step, layer.y + ymin, step, (ymax - ymin));
            }
        }

        // ctx.globalAlpha = 1.0;
    }
};


};

Ops.Ui.VizArrayGraph.prototype = new CABLES.Op();
CABLES.OPS["afc587e0-d2a9-455d-821e-325065740de1"]={f:Ops.Ui.VizArrayGraph,objName:"Ops.Ui.VizArrayGraph"};




// **************************************************************
// 
// Ops.Ui.VizArrayTable_v2
// 
// **************************************************************

Ops.Ui.VizArrayTable_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inArr = op.inArray("Array"),
    inStride = op.inInt("Stride", 0),
    inScroll = op.inFloatSlider("Scroll", 0);
    // inScroll.get()*arr.length;//inOffset = op.inInt("Start Row", 0);

op.setUiAttrib({ "height": 200, "width": 400, "resizable": true, "vizLayerMaxZoom": 2500 });

function getCellValue(v)
{
    let str = "";

    if (typeof v == "string")
    {
        // if (CABLES.UTILS.isNumeric(v)) str = "\"" + v + "\"";
        // else str = v;
        str = "\"" + v + "\"";
    }
    else if (CABLES.UTILS.isNumeric(v)) str = String(Math.round(v * 10000) / 10000);
    else if (Array.isArray(v))
    {
        let preview = "...";
        if (v.length == 0) preview = "";
        str = "[" + preview + "] (" + v.length + ")";
    }
    else if (typeof v == "object")
    {
        try
        {
            str = JSON.stringify(v, true, 1);
        }
        catch (e)
        {
            str = "{???}";
        }
    }
    else if (v != v || v === undefined)
    {
        str += String(v);
    }
    else
    {
        str += String(v);
    }

    return str;
}

op.renderVizLayer = (ctx, layer) =>
{
    ctx.fillStyle = "#222";
    ctx.fillRect(layer.x, layer.y, layer.width, layer.height);

    ctx.save();
    ctx.scale(layer.scale, layer.scale);

    ctx.font = "normal 10px sourceCodePro";
    ctx.fillStyle = "#ccc";

    const arr = inArr.get() || [];
    let stride = inStride.get() || 1;

    if (inArr.get() === null) op.setUiAttrib({ "extendTitle": "null" });
    else if (inArr.get() === undefined) op.setUiAttrib({ "extendTitle": "undefined" });
    else op.setUiAttrib({ "extendTitle": "length: " + arr.length });

    if (inArr.links.length > 0 && inArr.links[0].getOtherPort(inArr))
        stride = inArr.links[0].getOtherPort(inArr).uiAttribs.stride || inStride.get() || 1;

    if (arr.length % stride != 0)op.setUiError("stride", "stride does not fit length of array. some values may not be shown", 1);
    else op.setUiError("stride", null);

    let lines = Math.floor(layer.height / layer.scale / 10 - 1);
    let padding = 4;
    let offset = Math.floor((inScroll.get() * arr.length) / stride);

    offset = Math.max(0, offset);

    if (lines * stride > arr.length) offset = 0;
    else offset = Math.min(arr.length - (lines * stride), (offset) * stride);

    let columnsWidth = [];

    for (let i = 0; i < stride; i++)columnsWidth[i] = 0;

    for (let i = offset; i < offset + lines * stride; i += stride)
    {
        for (let s = 0; s < stride; s++)
        {
            const v = arr[i + s];

            columnsWidth[s] = Math.max(columnsWidth[s], getCellValue(v).length);
        }
    }

    let columsPos = [];
    let addUpPos = 30;
    for (let i = 0; i < stride; i++)
    {
        columsPos[i] = addUpPos;
        addUpPos += (columnsWidth[i] + 1) * 7;
    }

    for (let i = offset; i < offset + lines * stride; i += stride)
    {
        if (i < 0) continue;
        if (i + stride > arr.length) continue;

        ctx.fillStyle = "#666";

        const lineNum = (i) / stride;

        if (lineNum >= 0)
            ctx.fillText(lineNum,
                layer.x / layer.scale + padding,
                layer.y / layer.scale + 10 + (i - offset) / stride * 10 + padding);

        for (let s = 0; s < stride; s++)
        {
            const v = arr[i + s];
            let str = getCellValue(v);

            ctx.fillStyle = "#ccc";

            if (typeof v == "string")
            {
                str = v;
            }
            else if (CABLES.UTILS.isNumeric(v)) str = String(Math.round(v * 10000) / 10000);
            else if (Array.isArray(v))
            {
                str = JSON.stringify(v);
            }
            else if (typeof v == "object")
            {
                try
                {
                    str = JSON.stringify(v);
                }
                catch (e)
                {
                    str = "{object}";
                }
            }
            else if (v != v || v === undefined)
            {
                ctx.fillStyle = "#f00";
                str = "?";
            }

            ctx.fillText(str,
                layer.x / layer.scale + columsPos[s],
                layer.y / layer.scale + 10 + (i - offset) / stride * 10 + padding);
        }
    }

    if (inArr.get() === null) ctx.fillText("null", layer.x / layer.scale + 10, layer.y / layer.scale + 10 + padding);
    else if (inArr.get() === undefined) ctx.fillText("undefined", layer.x / layer.scale + 10, layer.y / layer.scale + 10 + padding);

    const gradHeight = 30;

    if (layer.scale <= 0) return;
    if (offset > 0)
    {
        const radGrad = ctx.createLinearGradient(0, layer.y / layer.scale + 5, 0, layer.y / layer.scale + gradHeight);
        radGrad.addColorStop(0, "#222");
        radGrad.addColorStop(1, "rgba(34,34,34,0.0)");
        ctx.fillStyle = radGrad;
        ctx.fillRect(layer.x / layer.scale, layer.y / layer.scale, 200000, gradHeight);
    }

    if (offset + lines * stride < arr.length)
    {
        const radGrad = ctx.createLinearGradient(0, layer.y / layer.scale + layer.height / layer.scale - gradHeight + 5, 0, layer.y / layer.scale + layer.height / layer.scale - gradHeight + gradHeight);
        radGrad.addColorStop(1, "#222");
        radGrad.addColorStop(0, "rgba(34,34,34,0.0)");
        ctx.fillStyle = radGrad;
        ctx.fillRect(layer.x / layer.scale, layer.y / layer.scale + layer.height / layer.scale - gradHeight, 200000, gradHeight);
    }

    // scroll bars
    if ((lines * stride) / arr.length < 1)
    {
        let h = layer.height - 20;
        let start = (offset) / arr.length;
        start *= h;

        ctx.fillStyle = "#000";
        ctx.fillRect((layer.x + layer.width - 15) / layer.scale, (layer.y + 10) / layer.scale, 5 / layer.scale, h / layer.scale);

        h *= (lines * stride) / arr.length;

        ctx.fillStyle = "#555";
        ctx.fillRect((layer.x + layer.width - 15) / layer.scale, (layer.y + 10 + start) / layer.scale, 5 / layer.scale, h / layer.scale);
    }

    ctx.restore();
};


};

Ops.Ui.VizArrayTable_v2.prototype = new CABLES.Op();
CABLES.OPS["6c3bf614-a734-4539-98cd-7a7d5bfc38c9"]={f:Ops.Ui.VizArrayTable_v2,objName:"Ops.Ui.VizArrayTable_v2"};




// **************************************************************
// 
// Ops.Patch.PxdLHGq.CountValidElementsInArray
// 
// **************************************************************

Ops.Patch.PxdLHGq.CountValidElementsInArray = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exec = op.inTrigger("Trigger"),
    arr = op.inArray("Array"),
    result = op.outNumber("Result");

let count = 0;

exec.onTriggered = () => {
    if (!arr.get()) return;

    count = 0; // Reset count each time the trigger is executed

    for (let arrEl of arr.get()) {
        if (arrEl.length > 0) count++;
    }

    result.set(count);
};

};

Ops.Patch.PxdLHGq.CountValidElementsInArray.prototype = new CABLES.Op();
CABLES.OPS["ff256324-41b0-43e6-acc0-526c4538b83b"]={f:Ops.Patch.PxdLHGq.CountValidElementsInArray,objName:"Ops.Patch.PxdLHGq.CountValidElementsInArray"};




// **************************************************************
// 
// Ops.Patch.PBktIwq.Button_NEL
// 
// **************************************************************

Ops.Patch.PBktIwq.Button_NEL = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// inputs
const parentPort = op.inObject("link");
const buttonTextPort = op.inString("Text", "Button");
const checksum = op.inValue("Checksum", 0);
const update = op.inTrigger("update");

const inGreyOut = op.inBool("Grey Out", false);
const inVisible = op.inBool("Visible", true);

// outputs
const siblingsPort = op.outObject("childs");
const buttonPressedPort = op.outTrigger("Pressed Trigger");


// vars
const colors = ["rgba(85,85,85,0.5)", "aquamarine"];

const el = document.createElement("div");
el.dataset.op = op.id;
el.classList.add("cablesEle");
el.classList.add("sidebar__item");
el.classList.add("sidebar--button");
el.style.display = "grid";
el.style.gridTemplateColumns = "0.25fr 1fr";
el.style.alignItems = "start";
el.style.alignContent = "stretch";
el.style.height = "75px";
el.style.paddingLeft = "5px";


// draw svg
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("viewBox", "0 0 100 100");
svg.setAttribute("width", "100%");
svg.setAttribute("height", "150%");
svg.style.gridColumn = "1 / 2";



const quadrants = [];


for (let i = 0; i < 4; i++) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", [ "0", "25", "50", "75" ][i]);
    rect.setAttribute("y", "0");

    rect.setAttribute("width", "20");
    rect.setAttribute("height", "20");
    rect.setAttribute("fill", colors[0]);
    rect.setAttribute("rx", "50"); // Round the corners with a radius of 10
    rect.setAttribute("ry", "50"); // Round the corners with a radius of 10
    rect.style.display = "block";
    quadrants.push(rect);
    svg.appendChild(rect);
}

svg.setAttribute("transform", "translate(-2.5, -17)")


function showQuadrant( index ) {
    if (index < 0 || index > quadrants.length) return;
    quadrants.forEach((quad, i) => {
        quad.style.fill = i <= index - 1 || index === 4 ? colors[1] : colors[0];
    });
}


updateSegments();

function updateSegments () {

el.appendChild( svg );
showQuadrant( Math.round( checksum.get() ) )

 }

 checksum.onChange = updateSegments;


update.onTriggered = updateSegments;

const button = document.createElement("div");
button.classList.add("sidebar__button-input");
button.style.gridColumn = "2 / 3";
el.appendChild(button);

const inputText = document.createTextNode(buttonTextPort.get());
button.appendChild(inputText);


button.addEventListener("click", onButtonClick);

op.toWorkNeedsParent("Ops.Sidebar.Sidebar");

// events
parentPort.onChange = onParentChanged;
buttonTextPort.onChange = onButtonTextChanged;
op.onDelete = onDelete;


const greyOut = document.createElement("div");
greyOut.classList.add("sidebar__greyout");
greyOut.style.gridColumn = "1 / 4";
el.appendChild(greyOut);
greyOut.style.display = "none";

inGreyOut.onChange = function ()
{
    greyOut.style.display = inGreyOut.get() ? "block" : "none";
};

inVisible.onChange = function ()
{
    el.style.display = inVisible.get() ? "grid" : "none";
};

function onButtonClick()
{
    buttonPressedPort.trigger();
}

function onButtonTextChanged()
{
    const buttonText = buttonTextPort.get();
    button.textContent = buttonText;
    if (CABLES.UI)
    {
        op.setUiAttrib({ "extendTitle": buttonText });
    }
}

function onParentChanged()
{
    siblingsPort.set(null);
    const parent = parentPort.get();
    if (parent && parent.parentElement)
    {
        parent.parentElement.appendChild(el);
        siblingsPort.set(parent);
    }
    else
    { // detach
        if (el.parentElement)
        {
            el.parentElement.removeChild(el);
        }
    }
}

function showElement(el)
{
    if (el)
    {
        el.style.display = "grid";
    }
}

function hideElement(el)
{
    if (el)
    {
        el.style.display = "none";
    }
}

function onDelete()
{
    removeElementFromDOM(el);
}

function removeElementFromDOM(el)
{
    if (el && el.parentNode && el.parentNode.removeChild)
    {
        el.parentNode.removeChild(el);
    }
}




};

Ops.Patch.PBktIwq.Button_NEL.prototype = new CABLES.Op();
CABLES.OPS["e40caa69-8d39-4da3-bf3e-2a7790b0b2f8"]={f:Ops.Patch.PBktIwq.Button_NEL,objName:"Ops.Patch.PBktIwq.Button_NEL"};



window.addEventListener('load', function(event) {
CABLES.jsLoaded=new Event('CABLES.jsLoaded');
document.dispatchEvent(CABLES.jsLoaded);
});
