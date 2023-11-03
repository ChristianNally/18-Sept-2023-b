import useCounter from "../hooks/useCounter";

const Counter = () => {
  // const [count, increment, decrement, clear, increaseByN] = useCounter(0);

  const {increaseByN, count, increment, clear, decrement} = useCounter(0);


  return (
    <div>
      <h2>Counter Component</h2>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => increaseByN(3)}>+3</button>
      <button onClick={() => increaseByN(5)}>+5</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
};

export default Counter;
