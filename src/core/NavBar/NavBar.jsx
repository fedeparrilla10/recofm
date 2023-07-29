import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h2>RecoFM</h2>

      <ul className="navbar__list">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink>Contacto</NavLink>
        </li>
        <li>
          <NavLink>About Me</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
