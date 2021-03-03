const delay = (time) => new Promise(callback => setTimeout(callback, time));

const wait = async function (callback, time) {
    await delay(time);
    callback();
    console.log(`\nExcecute with ${time} ms\n`);
}

async function waitAllConcurrency() {
    const firstTime = 3000;
    const secondTime = 3000;
    await Promise.all([
        wait(() => console.log('Third'), firstTime),
        wait(() => console.log('Four'), secondTime)
    ])

    console.log(`\nComplete on at least ${firstTime < secondTime ? secondTime : firstTime} ms\n`);
}

async function waitAllSecuential() {
    const firstTime = 3000;
    const secondTime = 3000;

    await wait(() => console.log('Five'), firstTime);
    await wait(() => console.log('Six'), secondTime);

    console.log(`\nComplete on at least ${firstTime + secondTime} ms\n`);
}

// Parallel execution - ex 1
wait(() => console.log('First'), 1000);
wait(() => console.log('Second'), 1000);

// Parallel execution - ex 2
waitAllConcurrency();

// Secuential execution
waitAllSecuential();
