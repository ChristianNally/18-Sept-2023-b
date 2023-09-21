// benefits of arrow functions
// 1. no function keyword!!!
// 2. if only one argument, no need for parens
// 3. if only one line of code, no need for curly braces
// 4. if no curly braces, the line of code is implicitly returned
// 5. arrow funcs do not create `this`


// const doubleIt = x => x * 2;
// const doubleIt = function(x) { return x * 2; };


// const sayHello1 = function(name) {
//   console.log(`hello there ${name}`);
// };

const sayHello2 = (name, age) => `hello there ${name} and you are ${age} years old`;

const returnVal = sayHello2('elise');
console.log('returnVal', returnVal);
