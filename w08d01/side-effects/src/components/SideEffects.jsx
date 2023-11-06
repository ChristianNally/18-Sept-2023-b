import {useEffect, useState} from 'react';

export const actions = {};

import {actions} from './SideEffects'; 

const SideEffects = () => {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState('alice');

  useEffect(() => {
    console.log('updating the document title');
    document.title = `the count is ${count}`;
  }, [count]);

  useEffect(() => {
    // make a mess
    const interval = setInterval(() => {
      console.log(`the count is ${count}`);
    }, 3000);

    // how we want to cleanup
    const cleanup = () => {
      console.log('cleaning up');
      clearInterval(interval);
    };

    return cleanup;
  }, [count]);

  return (
    <div>
      <h2>Side Effect Component</h2>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <div>
        <label>Username</label>
        {/* controlled input */}
        <input 
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
    </div>
  );
};

export default SideEffects;
