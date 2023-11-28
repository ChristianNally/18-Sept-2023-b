import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <h2>Navigation Bar</h2>

      <div>
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/products">Products </Link>
      </div>
    </div>
  );
};

export default NavBar;
