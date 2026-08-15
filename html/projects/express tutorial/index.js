const express=require("express");
const app=express();

var users=[{
    name:"John",
    kidneys:[{
        healthy:false,
    }]
}]
app.use(express.json());
app.get("/",function(req,res){
    const johnkidneys=users[0].kidneys;
    const numofkidneys=johnkidneys.length;
    let numofhealthykidneys=0;
    for(let i=0;i<numofkidneys;i++){
        if(johnkidneys[i].healthy){
            numofhealthykidneys=numofhealthykidneys+1;
        }
    }
    const numofUnhealthykidneys=numofkidneys-numofhealthykidneys;
    res.json({
        numofkidneys,
        numofhealthykidneys,
        numofUnhealthykidneys
    })
})

app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"done!"
    })
})
app.listen(3000);