// task 1: 1000ms
// task 2: 2000ms
// task 3: 3000ms

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

const promiseOne = promiseGenerator('one');
const promiseTwo = promiseGenerator('two');
const promiseThree = promiseGenerator('three');

const promises = [promiseOne, promiseThree, promiseTwo];

Promise.all(promises)
  .then((resultsArr) => {
    console.log(resultsArr);

    const resultOne = resultsArr[0];
    const resultTwo = resultsArr[1];
    const resultThree = resultsArr[2];
  })
  .catch((err) => {})
  .finally(() => {})
