"use strict";
const myDog = {
    breed: 'labrador retriever',
    name: 'doggo',
    goForWalk: (distance) => {
        return true;
    }
};
const higherOrderFunc = (cb) => {
    cb('alice', 42);
};
higherOrderFunc((name, age) => { return 'hello'; });
