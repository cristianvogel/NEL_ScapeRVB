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
