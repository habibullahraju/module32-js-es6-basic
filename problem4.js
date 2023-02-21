// const array = [20, 15,22];
const person = [
    {name: 'raju', age: 20},
    {name: 'habib', age: 15},
    {name: 'jamil', age: 22}
]
const sum = person.reduce((currentValue, nextValue) => currentValue + nextValue.age,0)
console.log(sum); 

