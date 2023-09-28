

const promise = new Promise((resolve, reject) => {
  // call resolve() when the promise fulfilled
  setTimeout(() => {
    resolve(42); // gets passed directly the the .then
  }, 1000);
  // call reject() when the promise fails
  reject('no file with that name'); // gets passed directly to the .catch
});

promise
  .then(() => {})
  .catch((err) => {})