const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function add(a, b) {
    console.log(`${a} + ${b}`);
    return a + b
}

console.log('Reduce an array to its sum', numbers, ' = ', numbers.reduce(add, 0));

function toObject(obj, item) {
    console.log('\nBefore transform', obj);
    console.log(obj, item);
    const obj2 = {
        ...obj,
        [item[0]]: item[1]
    }

    console.log('Return', obj2, '\n');

    return obj2;
}

const simpleArray = [
    ['name', 'Thing'],
    ['type', 'new'],
    ['price', 2.99],
];

console.log('Convert array to object with reduce', simpleArray, ' to =>', simpleArray.reduce(toObject, {}));
