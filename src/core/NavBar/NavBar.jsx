import { NavLink } from 'react-router-dom';
import githubIcon from '../../assets/github_icon.svg';
import ballIcon from '../../assets/ball.svg';
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
            <img className="github" src={githubIcon} alt="Ícono de GitHub" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
