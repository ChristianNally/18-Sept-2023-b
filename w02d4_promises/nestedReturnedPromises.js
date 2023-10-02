const promiseMakerLibrary = require('./promise-generator');

const returnPromise = promiseMakerLibrary.returnPromise;


const p = returnPromise('one', 1000);

p.then((data) => {
    console.log('data:', data);

    // case 1
    return undefined;
    
    // case 2
    return 42;

    // case 3a
    return returnPromise('two', 1000);

    // case 3b
    return Promise.all([]);
})
.then((param) => {
    console.log('second then', param);
})
.catch((err) => {
    console.log('err:', err);
});
