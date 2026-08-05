const fs=require("fs");

function PromisifiedReadFile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
        })
    })
}
async function solve(){
    const data=await PromisifiedReadFile();
    console.log(data);
    console.log("Reading file completed");
}
solve();
