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
app.put("/",function(req,res){
    if(atleastOneBadkidney()){
        for(let i=0;i<=users[0].kidneys.length;i++){
            users[0].kidneys[i].healthy=true;
        }
        res.json({});
    }
    else{
        res.status(411).json({
            msg:"all kidneys are healthy already."
        })
    }

})

app.delete("/",function(req,res){
    if(atleastOneBadkidney()){
        for(let i=0;i<=users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy==false){
                users[0].kidneys.splice(i,1);
            }
        }
            res.json({});
    }
    else{
        res.status(411).json({
            msg:"atleast one unhealthy kidney is required to delete."
        })
    }

})
function atleastOneBadkidney(){
    for(let i=0;i<users[0].kidneys.length;i++){
        const check=users[0].kidneys[i].healthy;
        if(check==false){
            return true;
        }

    }
}
app.listen(3000);