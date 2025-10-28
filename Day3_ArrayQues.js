//sample input data

const products = [
  {id: 1, name: "Laptop", category: "Electronics", price: 50000, inStock: true, rating: 4.5},
  {id: 2, name: "Mobile", category: "Electronics", price: 30000, inStock: true, rating: 4.7},
  {id: 3, name: "Headphones", category: "Electronics", price: 2000, inStock: false, rating: 4.1},
  {id: 4, name: "Shoes", category: "Fashion", price: 2500, inStock: true, rating: 4.2},
  {id: 5, name: "Watch", category: "Fashion", price: 7000, inStock: false, rating: 4.3},
  {id: 6, name: "Book", category: "Stationery", price: 500, inStock: true, rating: 4.8},
  {id: 7, name: "Pen", category: "Stationery", price: 100, inStock: true, rating: 4.0},
  {id: 8, name: "Tablet", category: "Electronics", price: 15000, inStock: true, rating: 4.4},
  {id: 9, name: "Bag", category: "Fashion", price: 3000, inStock: true, rating: 4.6},
  {id: 10, name: "Printer", category: "Electronics", price: 12000, inStock: false, rating: 4.2}
];

// 1. Get all product names in stock

const inStockNames = products.filter((p)=> p.inStock).map((p)=> p.name);
console.log(inStockNames);


// 2. List names of all products

const allNames = products.map((p) => p.name);
console.log(allNames);

// 3. Get products above 10,000

let priceFilter=products.filter((p)=> p.price>10000);
console.log(priceFilter);

// 4. Get names of products with rating ≥ 4.5
const highRated= products.filter((p)=> p.rating>=4.5).map((p)=>p.name);
console.log(highRated);


// 5. Get discounted prices (10% off on all products)
const discounted = products.map(p => ({ name: p.name, price: p.price * 0.9 }));
console.log(discounted);

// 6. List categories of in-stock products
const inStockCategories = products.filter(p => p.inStock===true).map(p => p.category);
console.log(inStockCategories);

// 7. Get products under 5000 with only name and price
const under5k = products.filter(p => p.price < 5000).map(p => ({ name: p.name, price: p.price }));
console.log(under5k);

// 8. Get products in Electronics category with rating ≥ 4.5
const topElectronics = products.filter((p) => p.category === "Electronics" && p.rating >= 4.5);
console.log(topElectronics);

// 9. Get uppercase product names
const upperNames = products.map(p => p.name.toUpperCase());
console.log(upperNames);

console.log("------------------------------------------------------------------------------");
let mixed = ["Hello", 42, true, null, { name: "John" }, [1, 2]];
console.log(mixed); // "John"

