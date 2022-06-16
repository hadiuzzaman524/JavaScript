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

// Loop in Js
var i=1; 
for(i; i<5; i++){
    console.log(i);
}
var j=5; 
while(j--){
    console.log(j);
}

var aProperty="Bangladesh"; 

for(var k in aProperty){
    console.log(k);
}

function sayHello(){
    console.log("Hey hadi, how are you??? ");
}

sayHello();

function add(a,  b){
    return a+b;
}

console.log(add(4,4));

// Arrow Function 

let printMyName= (name)=> {
    console.log(name);
}
printMyName("Md hadiuzzaman");

let printMyName2 =(name, age)=> console.log(name, age);

printMyName2("Jaman", 23);

function multiply(num1, num2){
    return num1*num2; 
}
console.log(multiply(2,3));

let multiply2 = (num1, num2) => num1*num2;
console.log(multiply2(3,3));

//2861966f8b-5995afed57-rdie9m Currency API

// Learn about Class
class Human{
    constructor(){
        this.gender= "Male";
    }
    printGender(){
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor(){
        super();
        this.name="Hadiuzzaman"
    }

     printInformation() {
        console.log(this.name);
    }
}
 const person= new Person();
 person.printInformation();
 person.printGender();

 // Next generation js syntax

 class University{
    department="CSE";

    myDepartment = ()=> console.log(this.department);
 }

 class EEE extends University{
    department= "EEE";
    myDepartment= ()=> console.log(this.department);
 }

 const eee= new EEE(); 
 eee.myDepartment();

 // Spred & rest operator
 //1. spred

 let arr=[1,2,3]; 
 let newar= [...arr, 4]; // ... copy all element form arr
 console.log(newar);

 const obj1={
    name: "Hadiuzzaman",
 }
 const obj2={
    ...obj1, 
    age: 23
 }

 console.log(obj2);

 //2. rest
// Not work
/*
 const myFunction= (...args)=>{ // ...args takes multiple argument
return args.myFunction(e => e === 1);
 }
*/
 //console.log(myFunction(2,3,4,5,1));

 // Destructing 
 const temp= [1,2,3]; 
 [temp1,, temp2]=temp; 
 console.log(temp1, temp2); 

 // refrencing
 const myname="hadi"; 
 const myname2=myname; 


 console.log(myname);

 // arrat mapping

 newtemp= temp.map((num) =>  num*2);
 console.log(temp); 
 console.log(newtemp);