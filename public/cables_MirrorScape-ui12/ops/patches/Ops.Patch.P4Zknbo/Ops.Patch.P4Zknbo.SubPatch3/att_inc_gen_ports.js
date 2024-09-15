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
