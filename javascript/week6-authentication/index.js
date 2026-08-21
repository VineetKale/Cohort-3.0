const express=require("express");
const app=express();

app.use(express.json())
const users=[];

function generateToken(){
    let options="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let token="";
    for(let i=0;i<32;i++){
        token+=options[Math.floor(Math.random()*options.length)];
    }
    return token;
}

app.post("/signup",function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    
    users.push({
        username:username,
        password:password
    })
    res.json({
        message:"You are signed in!"
    })
    console.log(users);
})

app.post("/signin",function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    const founduser=users.find(function(u){
        if(u.username==username&& u.password==password){
            return true;
        }
        else return false;
    })
    if(founduser){
        const token=generateToken();
        founduser.token=token;
        res.send({
            token
        })
        console.log(founduser);
    }
    else{
        res.status(403).send({
            message:"Invalid username or password"
        })
    }
    console.log(users);
})
app.get("/me",function(req,res){
    const token=req.headers.token;
    let founduser=null;
    for(let i=0;i<users.length;i++){
        if(users[i].token==token){
            founduser=users[i];
        }
        else founduser=false;
    }
    if(founduser){
        res.json({
            username:founduser.username,
            password:founduser.password
        })
    }
    else{
        res.json({
            msg:"Token not found"
        })
    }
})
app.listen(3000);
