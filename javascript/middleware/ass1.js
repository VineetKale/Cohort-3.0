const express=require("express");
const app=express();

function infologmiddleware(req,res,next){
    console.log(req.method);
    console.log(req.url);
    console.log(Date());
    next();
}

app.get("/add/:a/:b",infologmiddleware,function(req,res){
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    res.json({
        ans:a+b
    })
})
app.listen(3000);
