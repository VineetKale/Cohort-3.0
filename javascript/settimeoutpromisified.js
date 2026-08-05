function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration);
    });
}
setTimeoutPromisified(5000).then(callback=>{
    console.log("5 seconds have passed");
})
