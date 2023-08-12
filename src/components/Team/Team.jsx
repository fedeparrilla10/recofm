import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import KeyList from '../KeyList/KeyList';
import {
  useIsDesktop,
  useIsMobileOrTablet,
} from '../../constants/mediaqueries';
import './Team.css';

const Team = ({ team }) => {
  const isDesktop = useIsDesktop();
  const isTabletOrMobile = useIsMobileOrTablet();

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

      {isDesktop && <p className="team__details">{team.details}</p>}

      {isTabletOrMobile && <KeyList team={team} />}

      <Link to={`../team/${team.id}`}>
        <Button name="Ver detalles" className="button button--medium" />
      </Link>
    </article>
  );
};

export default Team;
