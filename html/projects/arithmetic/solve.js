const express=require("express")
const app=express();

let requestcount=0;

function RequestIncreaser(){
    requestcount++;
    console.log("Request number: "+requestcount);
}

app.get("/multiply/:a/:b",function(req,res){
    RequestIncreaser();
    const a=req.params.a;
    const b=req.params.b;
    res.json({
        answer:a*b
    })
})
app.get("/add/:a/:b",function(req,res){
    RequestIncreaser();
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    res.json({
        answer:a+b
    })
})
app.get("/subtract/:a/:b",function(req,res,next){
    RequestIncreaser();
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    res.json({
        answer:a-b
    })
})
app.get("/divide/:a/:b",function(req,res){
    RequestIncreaser();
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    res.json({
        answer:a/b
    })
})
app.listen(3000);