import {useEffect, useState} from 'react';
import axios from 'axios';

const DataFetching = () => {
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then((res) => { return res.json() })
  //     .then((todosArray) => {
  //       console.log(todosArray);
  //       setTodos(todosArray);
  //     });
  // }, []);

  useEffect(() => {
    axios.get('/todos')
      .then((response) => {
        console.log(response);
      });
  }, []);

  return (
    <div>
      <h2>Data Fetching!</h2>
      <h2>Num todos: {todos.length}</h2>
    </div>
  );
};

export default DataFetching;
