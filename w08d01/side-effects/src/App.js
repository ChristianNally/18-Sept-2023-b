import './App.css';

// import SideEffects from './components/SideEffects';
import DataFetching from './components/DataFetching';

const App = () => {
  return (
    <div className="App">
      <h2>The useEffect Hook</h2>
      {/* <SideEffects /> */}
      <DataFetching />
    </div>
  );
};

export default App;
