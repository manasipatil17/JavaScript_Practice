console.log("====================MAP=======================");
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


let products = [
    {id:1, name:"pen", price:10},
    {id:2, name:"book", price:100},
    {id:3, name:"mouse", price:200},
]
let capital = products.map((product)=> product.name.toUpperCase());
console.log(capital);

let updatedProducts = products.map((product)=> ({
...product, name : product.name.toUpperCase()
}));
console.log(updatedProducts);

let discountProducts = products.map((product)=> ({
...product, name : product.name.toUpperCase(), discountPrice : product.price*0.9
}));
console.log(discountProducts);


console.log("====================FILTER=======================");4

let filteredProducts=products.filter((product)=> product.price>50);
console.log(filteredProducts);
