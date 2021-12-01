// async // with the help of promises
let fs = require("fs");

console.log("before");
let pendingpromise = fs.promises.readFile("./f1.txt");
console.log(pendingpromise);

pendingpromise.then(function(data){
    console.log("content" , data +"");
})

pendingpromise.catch(function(error){
    console.log(error);
})

console.log("after");
