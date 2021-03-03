function callPromise(number) {
    return new Promise((resolve, reject)  => {
        console.log(`New promise with number: ${number}`);

        if (number < 10) {
            resolve(`Resolve => ${number}: This number is OK`)
        } else {
            reject(`Reject => ${number}: This number is too hight`)
        }
    });
}

callPromise(1)
    .then(result => console.log(result))
    .catch((error) => console.log(error));
callPromise(10)
    .then(result => console.log(result))
    .catch((error) => console.log(error));
