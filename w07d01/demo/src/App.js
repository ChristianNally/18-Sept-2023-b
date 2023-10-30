import './App.css';

import Header from './components/Header';

const App = () => {
  const theNumberIs = 4200;

  return (
    <div className="App">
      <h2>Inside the App component</h2>

      <Header myVar="good day" />
      <Header myVar="about us" />

      <Header kids="does this work???">
        <section>
          <article>
            <h2>Tweet container</h2>
          </article>
        </section>
      </Header>

      {/* <Button label="Login!" />
      <Button>Login!</Button> {props.children} */}
    </div>
  );
};

export default App; // module.exports = App
