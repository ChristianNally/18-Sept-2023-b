"use strict";
// arguments, return value, name of the function
const sayHello = (name, age = 42) => {
    return `hello there ${name}`;
};
const returnVal1 = sayHello('alice');
const returnVal2 = sayHello('alice', 32);
const returningPromise = (num) => {
    return new Promise((resolve) => {
        resolve(num);
    });
};
returningPromise(100)
    .then((data) => { });
