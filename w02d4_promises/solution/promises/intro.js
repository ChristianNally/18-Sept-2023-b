const promiseGenerator = require('./promise-generator');
const returnPromise = promiseGenerator.returnPromise;
const returnRejectedPromise = promiseGenerator.returnRejectedPromise;

const promise = returnPromise('first promise', 444);
console.log('promise:', promise);

console.log('first');

// Not the best way to do this
// setTimeout(()=>{
//   console.log('promise 6 seconds later:',promise);
// },6000);

//
// The RIGHT way to do this
//

promise
  .then((data) => {
    console.log('third');
    // const newData = 'another thing';
    // console.log("newData:",newData);
    console.log('data:', data);
    // return returnRejectedPromise('second promise', 222);
    return Promise.all(arrayPromises);
  })
  .then((data) => {
    console.log('it is alive!', data);
  })
  .catch((error) => {
    console.log('error:', error);
  });

console.log('second');
