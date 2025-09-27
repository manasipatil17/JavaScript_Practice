const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 50000,
    inStock: true,
    rating: 4.6,
  },
  {
    id: 2,
    name: "Mobile",
    category: "Electronics",
    price: 30000,
    inStock: true,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Headphones",
    category: "Electronics",
    price: 2000,
    inStock: false,
    rating: 4.1,
  },
  {
    id: 4,
    name: "Shoes",
    category: "Fashion",
    price: 2500,
    inStock: true,
    rating: 4.2,
  },
  {
    id: 5,
    name: "Watch",
    category: "Fashion",
    price: 7000,
    inStock: false,
    rating: 4.3,
  },
  {
    id: 6,
    name: "Book",
    category: "Stationery",
    price: 500,
    inStock: true,
    rating: 4.8,
  },
  {
    id: 7,
    name: "Pen",
    category: "Stationery",
    price: 100,
    inStock: true,
    rating: 4.0,
  },
  {
    id: 8,
    name: "Tablet",
    category: "Electronics",
    price: 15000,
    inStock: true,
    rating: 4.4,
  },
  {
    id: 9,
    name: "Bag",
    category: "Fashion",
    price: 3000,
    inStock: true,
    rating: 4.5,
  },
  {
    id: 10,
    name: "Printer",
    category: "Electronics",
    price: 12000,
    inStock: false,
    rating: 4.2,
  },
];

console.log("Size of products");
const size = products.length;
console.log(size);

console.log("Add new into existing");
const data = {
  id: 11,
  name: "ABC",
  category: "Electronics",
  price: 50000,
  inStock: true,
  rating: 4.5,
};

products.push(data); // new entry at last
console.log(products);

console.log("Remove Item");
products.pop(); // remove last element
console.log(products);

console.log("find");
const res = products.find((prd) => prd.rating === 3.5);
console.log(res);

console.log("Specific portion");
const slicedData = products.slice(3, 5); // start index include & end index exclude
console.log(slicedData);

console.log("every");
const isCorrect = products.every((prd) => prd.rating === 4.5);
console.log(isCorrect);


console.log("some");
const some = products.some((prd) => prd.rating === 4.5);
console.log(some);
