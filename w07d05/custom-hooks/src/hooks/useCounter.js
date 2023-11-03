import {useState} from 'react';

const useCounter = (initialValue = 100) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const clear = () => {
    setCount(0);
  };

  const increaseByN = (n) => {
    setCount(prev => prev + n);
  };

  // return [count, increment, decrement, clear, increaseByN];
  return {
    count,
    increment,
    decrement,
    clear,
    increaseByN
  };
};

export default useCounter;
