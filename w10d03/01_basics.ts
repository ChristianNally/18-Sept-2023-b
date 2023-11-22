let myNum: number | string | boolean = 5;

myNum = 42;
myNum = 'hello';
myNum = true;

const nums: (number | boolean)[] = [];

nums.push(42);
nums.push(true);
// nums.push('hello');

const myVar = nums.pop();
