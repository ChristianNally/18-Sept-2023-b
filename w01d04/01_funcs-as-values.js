// function declaration
// function sayHello1() {
//   console.log('hello there');
// }

// function expression
// 2 + 2, true
const sayHello2 = function () {
  console.log('hello there');
};

// sayHello2();

// sayHello2.secretMessage = 'how is it going?';

// console.log(sayHello2.secretMessage);

// console.log(sayHello2.toString());

const a = 5;
const b = a;

const copy1 = sayHello2;
// const copy2 = sayHello2();

// copy1(); // sayHello2();
// console.log(copy1.toString());

const myFuncs = [];
myFuncs.push(sayHello2);
myFuncs.push(console.log);

console.log(myFuncs);

myFuncs[0]();
const func = myFuncs[0]
func();
