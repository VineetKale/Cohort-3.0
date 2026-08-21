const express=require("express");
const app=express();
const jwt=require("jsonwebtoken");
const JWT_SECRET="vineetkale";
app.use(express.json())
const users=[];



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
        const token=jwt.sign({
            username:username
        },JWT_SECRET);
        res.json({
            token:token
        })
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
    const decodedInformation=jwt.verify(token,JWT_SECRET);
    const username=decodedInformation.username;
    let founduser=null;


    for(let i=0;i<users.length;i++){
        if(users[i].username==username){
            founduser=users[i];
        }
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
