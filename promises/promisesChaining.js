 // async // promise // chaining
 let fs = require("fs");

  console.log("Before");
let f1kapromise = fs.promises.readFile("./f1.txt");
// promises hell => isse resolve krne ke liye promisechaining aaya
 let thenkapromises = f1kapromise.then(function(data){
    console.log("content "+ data);
})
thenkapromises.then(function(){
    let f2kapromise = fs.promises.readFile("./f2.txt");
    return f2kapromise;
})
.then(function(data){
    console.log("content "+data);
})
.then(function(){
    let f3kapromise = fs.promises.readFile("./f3.txt");
    return f3kapromise;
})
.then(function(data){
    console.log("content "+ data);
})

console.log("After");