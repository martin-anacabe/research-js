function add(a, b) {
    return a + b;
}

// Normal curry function
const add1 = function(a) {
    return add(1, a);
}

const add10 = function(a) {
    return add(10, a);
}

console.log(`Curry Add: ${add1(10)}`);
console.log(`Curry Add: ${add10(10)}`);

// Arrow curry function
const addArrow = a => b => a + b;
const addArrow1 = addArrow(1);
const addArrow10 = addArrow(10);

console.log(`Curry Arrow Add: ${addArrow1(10)}`);
console.log(`Curry Arrow Add: ${addArrow10(10)}`);
