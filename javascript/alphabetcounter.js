const fs=require("fs");
function main(filename){
    fs.readFile(filename,"utf-8",function(err,data){
        let total=0;
        for(let i=0;i<data.length;i++){
            if(data.charCodeAt(i)>=65&&data.charCodeAt(i)<=90||data.charCodeAt(i)>=97&&data.charCodeAt(i)<=122){
                total++;
            }
            
        }
        console.log(total);
    })
}

main("a.txt");

