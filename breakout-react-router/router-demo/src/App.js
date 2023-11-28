import './App.css';

import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Product from './components/Product';

const App = () => {
  return (
    <div className="App">
      <h2>React Router Demo</h2>

      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="*" element={<h2>Four oh Four</h2>} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin" element={<h2>Admin Page</h2>} />
          <Route path="/products/:productId" element={<Product />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
};

export default App;
