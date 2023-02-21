const friends = ['habibullah', 'kalam', 'sajjad', 'asraful islam'];
const firstLetter = friends.map(friend => friend.length);
// console.log(firstLetter);
const products = [
    {id:1, name: 'laptop', price: 24130, color: 'silver'},
    {id:1, name: 'mobile', price: 4130, color: 'silver'},
    {id:1, name: 'tablet', price: 34130, color: 'silver'},
    {id:1, name: 'keyboard', price: 4130, color: 'silver'},
];
const productName = products.map(product => product.name);
const productPrice = products.map(p => p.price);
// console.log(productPrice);

const arr = [12,3445,645,75,753,785,355,444];
const multiplication = arr.map(arr => arr * 5);
// console.log(multiplication);