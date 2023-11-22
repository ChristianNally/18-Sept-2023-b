// arguments, return value, name of the function

const sayHello = (name: string, age: number = 42): string => {
  return `hello there ${name}`;
};

const returnVal1 = sayHello('alice');
const returnVal2 = sayHello('alice', 32);

const returningPromise = (num: number): Promise<number> => {
  return new Promise((resolve) => {
    resolve(num);
  });
};

returningPromise(100)
  .then((data) => {});
