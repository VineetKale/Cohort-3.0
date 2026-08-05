setTimeout(function(){
    console.log("hi");
    setTimeout(function(){
        console.log("hello");
    },3000);
    setTimeout(function(){
        console.log("hey there");
    },5000);
}, 1000);
