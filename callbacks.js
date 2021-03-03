function message(str) {
    console.log(str);
}

function add(a, b) {
    return a + b;
}

function withMessageCallback(str, callback) {
    console.log('Do something');
    callback(str);
}

function withNumberCallback(number, callback) {
    console.log(1);
    console.log(callback(number, 1));
    console.log(callback(number, callback(number, 1)));
    console.log(callback(number, callback(number, callback(number, 1))));
}

withMessageCallback('Hello', message);
withNumberCallback(1, add);
