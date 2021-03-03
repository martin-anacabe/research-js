
Promise.resolve(1)
.then((result) => {
    console.log(`I have received ${result}`);
    return 1 + result;
}).then((result) => {
    console.log(`I have received ${result}`);
    return 1 + result;
}).then((result) => {
    console.log(`I have received ${result}`);
    return 1 + result;
})
.then((result) => {
    console.log(`I have received ${result}`);
    return 1 + result;
});
