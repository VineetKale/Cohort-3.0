const express=require("express");
const app=express();

let counter=0;
function middleware(req,res,next){
    counter=counter+1;
    next();
}

app.get("/print",middleware,function(req,res){
    res.send("Welcome to my page");
})
app.get("/requests",middleware,function(req,res){
    res.json({
        msg:"Total requests sent to server: "+counter
    })
})
app.listen(3000);