const express=require("express")
const app=express();

let requestcount=0;

function RequestIncreaser(req,res,next){
    requestcount=requestcount+1;
    console.log("Number of requests:"+requestcount);
    next();
}

app.get("/multiply/:a/:b",RequestIncreaser ,function(req,res){
    const a=req.params.a;
    const b=req.params.b;
    res.json({
        answer:a*b
    })
})
app.get("/add/:a/:b",RequestIncreaser ,function(req,res){
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    res.json({
        answer:a+b
    })
})
app.get("/subtract/:a/:b",RequestIncreaser ,function(req,res,next){
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    res.json({
        answer:a-b
    })
})
app.get("/divide/:a/:b",RequestIncreaser ,function(req,res){
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    res.json({
        answer:a/b
    })
})
app.listen(3000);