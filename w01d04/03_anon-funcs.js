// naming things is hard

// const age = 42;
// console.log(age);
// age * 2;

// console.log(100);

const higherOrderFunction = function(callback) {
  callback('dean');
};

// const sayHello = function(name) {
//   console.log(`hello there ${name}`);
// };

// higherOrderFunction(sayHello);

// inline/anonymous functions
higherOrderFunction(function(name) {
  console.log(`hello there ${name}`);
});
