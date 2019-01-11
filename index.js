module.exports=x=>x.trim().replace(/[^ \-a-zA-Z0-9]/g, "").replace(/([a-z])([A-Z])/g,(_, x,y)=>x+"-"+y.toLowerCase()).toLowerCase().replace(/\s+/g, "-");
