import useApplicationData from "../hooks/useApplicationData";

const ReducerPractice = () => {
  const {state, increment, decrement, addPhotoId} = useApplicationData();

  return (
    <div>
      <h2>ReducerPractice Component</h2>
      <h2>Count: {state.count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <button onClick={() => addPhotoId(10)}>Add photo #10</button>
      <button onClick={() => addPhotoId(42)}>Add photo #42</button>
    </div>
  );
};

export default ReducerPractice;
