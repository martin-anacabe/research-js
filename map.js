const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function power2(number) {
    return number * number
}

console.log(
    'Power2 of numbers with map',
    numbers,
    ' => ',
    numbers.map(number => power2(number))
);

function toObject(item) {
    return {
        [item[0]]: item[1]
    }
}

const simpleArray = [
    ['name', 'Thing'],
    ['type', 'new'],
    ['price', 2.99],
];

console.log(
    'Convert array to object with map',
    simpleArray,
    ' => ',
    simpleArray.map(item => toObject(item))
);
