
//  useing reduce method 


const array = [7, 9, 17, 22];
const sum1 = arr.reduce((currentValue, nextValue) => currentValue + nextValue);
console.log(sum1);


// using for loop
let sum = 0;
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum += element;
    
    
}
console.log(sum);