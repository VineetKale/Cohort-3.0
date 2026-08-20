arr=[1,2,3,4,5,6,7,8,9,10];
str=["vineet","raj","nitin","ankit","aryan"];


function check2(b){
    const ans=b.map(n=>n.toUpperCase());
    console.log(ans);
}
function check(a){
    const ans=a.filter(n=>n.startsWith("a"));
    console.log(ans);
}

function multiplyby2(n){
    const ans=arr.map(n=>n*2);
    console.log(ans);
}
function isOdd(n){
    const ans=arr.filter(n=>n%2==0);
    console.log(ans);
}
check2(str);
check(str);
multiplyby2(arr);
isOdd(arr);

