console.log("====================MAP=======================");4
console.log("map iteration");

let numbers =[1,3,4,5,6,7];
numbers.map((num)=>{
console.log(num);
});

console.log("Map Transformation");

// let sqaure= numbers.map((num)=>{
//     console.log(num*2);
// });

let sqaure=numbers.map((num)=> num*2);
console.log(sqaure);

let student =['manasi', 'ram', 'om'];

let std=student.map((std)=> std.toUpperCase());
console.log(std);

console.log("====================FILTER=======================");4
