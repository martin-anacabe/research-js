const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const isEven = number => number % 2 == 0;
const isOdd = number => !isEven(number)

// Filter return only the elements that satisfy a condition
console.log('Even numbers', numbers.filter(number => isEven(number)));
console.log('Odd numbers', numbers.filter(number => isOdd(number)));
