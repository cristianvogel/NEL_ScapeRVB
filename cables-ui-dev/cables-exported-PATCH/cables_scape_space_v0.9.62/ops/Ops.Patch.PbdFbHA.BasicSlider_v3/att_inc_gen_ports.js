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
