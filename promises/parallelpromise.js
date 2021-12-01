// async // promise // parallely
let fs = require("fs");

console.log("Before");

let f1kapromise = fs.promises.readFile("./f1.txt");
let f2kapromise = fs.promises.readFile("./f2.txt");
let f3kapromise = fs.promises.readFile("./f3.txt");

f1kapromise.then(function(data){
    console.log("content" + data);
});
f1kapromise.catch(function(error){
    console.log(error);
});

f2kapromise.then(function(data){
    console.log("content"+data);
});
f2kapromise.catch(function(error){
    console.log(error);
});

f3kapromise.then(function(data){
    console.log("content"+data);
});
f3kapromise.catch(function(error){
    console.log(error);
})

console.log("After");