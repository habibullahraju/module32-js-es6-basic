const person = {
    name: 'habibullah',
    age: 21,
    country: 'bangleadesh'
}

const {name,...c} = person;
console.log(c);