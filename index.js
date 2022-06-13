// This is single line comment 

/*
This is multi line comment
*/

// Variable 

/*
There are 4 type of veriable in js
1. number
2. string 
3. boolean
4. undefined
*/
var x= 'hadi'; 
var y= "jaman"; 

console.log(x+y);

let m=42; 
let n= 42.442; 
console.log(m+n); 
let z; 
console.log(typeof z);
let flag=true; 
console.log(typeof flag); 

// Operator 
/*
Like other programming language js have 
1. conditional
2. assignment
3. logical
4. arithmetic etc

There are 2 special operator in js
1. (condition) ? true: false // conditional operator
2. typeof var
*/

let num1=100; 
let num2=200; 
let big= num1>num2? num1: num2; 
console.log("Big number is: "+big);
console.log("Type of big: ", typeof big);

// Condition
let number=80; 
if(number>80){
    console.log("Pro");
}else if(number> 70 && number <=80){
    console.log("Good"); 
}
else{
    console.log("Bad");
}

// Switch case

let xx=24;

switch(xx){

    case 20: 
    console.log("Tweenty"); 
    break; 
    case 10: 
    console.log("Ten"); 
    break; 
    default: 
    console.log("Hello World");
}