import { NavLink } from 'react-router-dom';
import githubIcon from '../../assets/github_icon.svg';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/recofm">
        <h2>
          <span className="r--navbar">R</span>ecoFM
        </h2>
      </NavLink>

      <ul className="navbar__list">
        <li>
          <NavLink to="/recofm">Home</NavLink>
        </li>
      </ul>

      <ul className="navbar__list">
        <li>
          <NavLink
            to="https://github.com/fedeparrilla10/recofm"
            target="_blank"
          >
            <img className="github" src={githubIcon} alt="Ícono de GitHub" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
