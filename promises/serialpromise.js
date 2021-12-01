 // async // promise // serially
 let fs = require("fs");

  console.log("Before");
let f1kapromise = fs.promises.readFile("./f1.txt");
// promises hell => isse resolve krne ke liye promisechaining aaya
f1kapromise.then(function(data){
    console.log("content"+data);
    let f2kapromise = fs.promises.readFile("./f2.txt");
    f2kapromise.then(function(data){
        console.log("content"+data);
        let f3kapromise = fs.promises.readFile("./f3.txt");
          f3kapromise.then(function(data){
              console.log("content"+data);
          });
    });
});

console.log("After");