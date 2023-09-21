// callbacks => functions that you pass to another function to be invoked/called by that function
// higher order functions (HOF) => function that accepts another function as an argument OR a function that returns a function

const acceptsAnotherFunc = function(anotherFunc) {
  // console.log(anotherFunc.toString());
  // sayHello();
  anotherFunc('bob'); // sayHello('bob');
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

acceptsAnotherFunc(sayHello);
