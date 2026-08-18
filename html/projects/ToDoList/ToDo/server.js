const express=require('express');
const app=express();

app.use(express.json());
app.use(express.static('public'));

let ToDo=[];

app.get('/todos',function(req,res){
  res.json(ToDo);
})

app.post('/todos',function(req,res){
  ToDo.push({title:req.body.title});
  res.json({message:'added'});
})

app.delete('/todos/first',function(req,res){
  ToDo.splice(0,1);
  res.json('deleted first');
})

app.delete('/todos/last',function(req,res){
  ToDo.pop();
  res.json('deleted last');
})

app.delete('/todos/:index',function(req,res){
  ToDo.splice(req.params.index,1);
  res.json('deleted');
})

app.listen(3000,function(){
  console.log('Server is running on http://localhost:3000');
})