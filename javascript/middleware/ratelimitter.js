const express=require("express");
const app=express();

let numofrequestsforuser={};
setInterval(()=>{
    numofrequestsforuser={};
},1000)

app.use(function(req,res,next){
    const userId=req.headers.userId;
    if(numofrequestsforuser[userId]){
        numofrequestsforuser[userId]=numofrequestsforuser[userId]+1;
        if(numofrequestsforuser[userId]>=5){
            res.status(404).send("no entry!");
        }
        else{
            next();
        }
        numofrequestsforuser[userId]=1;
        next();
    }
})