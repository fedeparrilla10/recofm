import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <h2>RecoFM</h2>
      </NavLink>

      <ul className="navbar__list">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>

      <ul className="navbar__list">
        <li>
          <NavLink>
            <p>GitHub</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
