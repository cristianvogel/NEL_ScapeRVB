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
