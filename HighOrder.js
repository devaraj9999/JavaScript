const numbers = [1, 2, 3, 4, 5];

// map: transforms each element
const doubled = numbers.map(num => num * 2);

// filter: selects elements based on condition
const evens = numbers.filter(num => num % 2 === 0);

// reduce: accumulates values
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(evens);   // [2, 4]
console.log(sum);     // 15
