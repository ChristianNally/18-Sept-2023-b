// implement a function called sayHello that takes the name of the saluted entity and returns what would be said.
const sayHello = (name) => {
    const returnValue = `Hello, ${name}!`;
    return returnValue;
};

const sayGoodbye = (name) => {
    const returnValue = `Goodbye, ${name}!`;
    return returnValue;
};

// make the functions exportable
module.exports = {
    sayHello: sayHello,
    sayGoodbye: sayGoodbye
};
console.log('this is the end of the production code');
