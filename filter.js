const arr = [12,34,5564,34,65,1,23,5,67,86,35,44];
const big = arr.filter(arr => arr < 10);
const middle = arr.filter(arr => arr > 100);

// console.log(middle);
const products = [
    {id:1, name: 'laptop', price: 24130, color: 'silver'},
    {id:1, name: 'mobile', price: 4130, color: 'silver'},
    {id:1, name: 'tablet', price: 34130, color: 'silver'},
    {id:1, name: 'keyboard', price: 4130, color: 'silver'},
];

const lowestPrice = products.filter(product => product.price < 5000);
const laptop = products.filter(product => product.name === 'laptop');
console.log(laptop);
// console.log(lowestPrice);