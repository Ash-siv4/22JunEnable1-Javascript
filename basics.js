//Console outputs
console.log("hello world");//print - informational
console.error("hi, i'm an error");//logs an error
console.info("information");//information
console.warn("warning");//warning, not an error 
console.group("hellos");//groups together multiple console outputs
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.groupEnd();

//Variables
//There specific ways to declare variables, which are:
//var x = 3;//DONT USE
let a = "abc"; //can be change after a value
console.log(typeof a,"type of a");
console.log(a,"a1");
a=123;
console.log(a,"a2");
let b;
console.log(b,"b1");
console.log(typeof b,"type of b1");
b=3;
console.log(b,"b2");
console.log(typeof b,"type of b2");
const y = 2;//const can't be changed, final variable
console.log(y);
//DataTypes
//number, bigint, string, boolean, null, undefined 
console.log(typeof(true));
//Operators
// +, -, *, /, %, **
//<, >, <=, >= 
//= - assignment
//== - check for value (1 == "1") -true
//=== - strict mode/equals
console.log(1 == "1");// ==true, !=false
console.log(1 === "1");//===false, !==true
//!=
//!==

//Iteration - 3 types of loops
//for loop, enhanced for-loop
//for(intitialisation;condition;iterator){ statements;}
for(let i=0; i<=10;i++){
    console.log(i);
}
//while loop
let i=15;
while(i>20){
    console.log("while loop");
}
//do-while loop
do{
    console.log("do while loop");
}while(i>20);

//Conditionals
//if statements
//if(condition){statement;}else if(condition2){statement2;}else{statement3;}
let temp = 12;
if(temp<20){
    console.log("ideal");
}else if(temp>=20 && temp<=27){
    console.log("room temp");
}else{
    console.log("too hot")
}
//truthy & falsey - all values have an inherent boolean value, defaults to truthy
//example of falsey
let g ;
if(g){
    console.log("not", g);
}
//example of truthy
let h =45;
if(h){
    console.log("not", h);
}
//Ternary statement
//ternary operator - ?
//syntax: condition ? valueIfTrue : valueIfFalse
let age = 10;
if(age>=50){
    console.log("50 or over");
}else{
    console.log("under 50");
}

let tern = age>=50 ? "50 or over" : "under 50";
console.log(tern, "ternary")

//Objects - defined as an unordered collection of related data (key:value pairs)
let personObj = {
    name: "ash",
    age: 123,
    job: "trainer"
}
console.log('person', personObj)
console.log(JSON.stringify(personObj));//method to take an object and convert it into a string

//JSON - JavaScript Object Notation
let myObj = `[{
    "userId" : 1,
    "name": "ash"
},
{
    "userId" : 2,
    "name": "JH"
}]`;

console.log('JSON', myObj)
const par = JSON.parse(myObj)//taking the string and parsing it into an object
console.log(par);
//Example of loading JSON DATA - don't worry about understanding this just yet
//GET request
fetch("text.json")
.then(response=>response.json())
.then(data => console.log("fetch",data));

//Arrays
const myArr = [1,"2",3,4,5,6,7];
const names = ["bob","mickey","eeyore","minnie"];
console.log(myArr)
console.log(names[2]) //without destructuring
names.push("jerry");
console.log(names);

//Destructuring
const [a1,a2,a3,a4,a5,a6,a7] = myArr;
console.log(a3,a4,a5);
const [name1, name2, ...rest] = names;
console.log(name2);//mickey
console.log("rest", rest);
//spread operator -> ...
const grades = [21,4,534,544,67,85,33,4,5,343,45,689,0,86,12]
const [,,px, ...others] = grades;
//spread operators only go at the end of destructuring
console.log(px);
console.log(others)


let myObj2 = {
    name: "chris",
    location:"TBC"
}

console.log(myObj2,"initial");
myObj2={...myObj2, ...{height:6}};
console.log(myObj2,"updated");
myObj2.name="ash"
console.log(myObj2);

//Functions - 3 ways to write functions

//function - global scope, be called before they're declared
myFun("normal function");
function myFun(y){
    console.log(y);
}

//function expression - has to be initialised before called
const myFun2 = function(x){
    console.log(x);
}
myFun2("function expression")

//arrow functions - more concise way of writing function expressions
const myFun3 = (z) => console.log(z);
const myFun4 = (t,u) => {
    let sum = t + u;
    console.log(t,"+",u,"=", sum) 
    console.log(t+"+"+u+"="+sum) //STRING CONCATENATION
};
myFun3("arrow function")

myFun4(3,4)
