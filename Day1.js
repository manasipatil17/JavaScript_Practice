console.log("hello World");

// variable : 1) let - if value can be changed in future 2) const - if value is final

let myName = "Manasi";
let age = 21;
let isValid = true;
let fruits = ["apple", "guava", "banana"];
let a;  //undefined
let b=null; // not used mostly
let student ={
    id:101, name : "manasi"
}

let students = [
    {id:101, name : "manasi"},
    {id:102, name : "Ram"},
    {id:103, name : "manas"}
]

let grade = 'a';

console.log(typeof myName); // to check type of value
console.log(typeof age);
console.log(typeof isValid);
console.log(typeof fruits);
console.log(typeof a);
console.log(typeof b);
console.log(typeof student);
console.log(typeof students);
console.log(typeof grade);

console.log("--------------------------------------");


console.log( myName); // to print the values
console.log( age);
console.log(isValid);
console.log( fruits);
console.log( a);
console.log( b);
console.log( student);
console.log( students);
console.log( grade);

console.log("--------------------------------------------");

console.log("let vs const");

let a1=12;
 a1=2;  //let can be reassign but cannot be redeclare

const a2=12;
//a2=11;  //const cannot be redeclared and cannot be reassgin



