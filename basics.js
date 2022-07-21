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