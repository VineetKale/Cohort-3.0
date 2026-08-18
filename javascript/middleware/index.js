const express=require("express");
const app=express();

function isOldEnoughMiddleWare(req,res,next){
    const age=req.query.age;
    if(age>=14){
        next();
    }
    else{
        res.json("You are not old enough");
    }
}

app.get("/ride1",isOldEnoughMiddleWare,function(req,res){
        res.json({
            msg:"you have completed your ride 1"
        })
    
})
app.get("/ride2",isOldEnoughMiddleWare,function(req,res){
        res.json({
            msg:"you have completed your ride 1"
        })
    
})
app.listen(3000);
