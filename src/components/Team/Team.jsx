import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Team.css';

const Team = ({ team }) => {
  return (
    <article className="team__container">
      <div className="team__info">
        <h2 className="team__name">{team.name}</h2>
        <img
          className="team__logo"
          src={team.logo}
          alt={`Escudo de ${team.name}`}
        />
      </div>

      <Link to={`/recofm/team/${team.id}`}>
        <Button name="Detalles" className="button button--small" />
      </Link>
    </article>
  );
};

export default Team;
