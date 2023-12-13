/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/


function wait(n) {
    return new Promise((resolve) => {
        setTimeout(() => resolve("resolved"), n * 1000);
    });
}

wait(n).then(() => console.log("hello world"));

module.exports = wait;
