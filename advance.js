//Callbacks
//Pass in a function as an argument to another function

const greet = (name, age) => {
    console.log(name, age);
    alert(`Hello ${name}, ${age}`)
}
const bye = (name, age) => {
    console.log(name, age);
    alert(`Bye ${name}, ${age}`)
}

const userInput = (callback) => {
    let name = prompt("Please enter your name here:")
    let age = prompt("Please enter your age here:")
    callback(name, age);
}

// greet("Ash", 5)
// userInput(bye);

//Promises - an operation that hasn't been completed yet
//fullfiled, rejected, pending

let prom = new Promise((resolve,reject)=>{
    let x = 2+5;
    if(x==8){
        resolve("Success");
    }else{
        reject("Failed");
    }
})

//try-catch-finally
prom.then((message)=>{
    console.log(`Then block - Status is: ${message}`)
}).catch((message)=>{
    console.log(`Catch block - Status is: ${message}`)
    console.error(message)
}).then(()=>{
    console.log("Finally block - Runs regardless")
})

//Closures - data privacy
//outer function
let fullName = (fname) => {
    let intro = "My name is ";
    //inner function
    let lname = (sname) => {
        return `${intro} ${fname} ${sname}`;
    }
    return lname;//fullName returns the lname arrow function which then returns a string
}

let start = fullName("Ash");//the function lname as a string

console.log(start); // output: My name is Ash?
//actual output is the lname function

let last = start("Siva");

console.log(last)
