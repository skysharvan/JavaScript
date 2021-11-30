let fs = require("fs");

console.log("before");

let f1kadata = fs.readFileSync("./f1.txt");
console.log(f1kadata+"");


console.log("after");