const fs=require("fs");
const express=require("express");
const app=express();

app.get("/files",function(req,res){
    const file=fs.readdirSync("../files");
    res.json(file);
})
app.get("/files/:fileName",function(req,res){
    const name=req.params.fileName;
    fs.readFile("../files/"+name,function(err,data){
        if(err){
            res.status(404).send("file not found")
        }
        else{
            res.send(data.toString());
        }
    })
})
app.listen(3000);