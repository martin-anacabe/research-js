// Microtask call stack queue have higher priority over call stack queue

function message(str) {
    console.log(str);
}

// Normal asyncronic message (event loop call stack queue)
setTimeout(() => message('First excecution'), 0);

// Asyncronic message with priority (event loop microtask call stack queue)
Promise.resolve('Second excution').then((result) => message(result));
