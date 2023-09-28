// pending, fulfilled, rejected

const promiseGenerator = (promiseName, failing = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (failing) {
        return reject(promiseName);
      }
      resolve(promiseName);
    }, 1000);
  });
};

const myPromise = promiseGenerator('one', true);
console.log(myPromise);

// every .then returns a promise
myPromise
  .then((result) => {
    console.log(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log('bad stuff happened', err);
  })
  .then((result) => {
    console.log(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log('bad stuff happened', err);
  })


