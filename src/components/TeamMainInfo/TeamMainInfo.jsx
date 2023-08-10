import KeyList from '../KeyList/KeyList';
import './TeamMainInfo.css';

const TeamMainInfo = ({ team }) => {
  return (
    <div className="team-main-info">
      <img
        className="team__logo"
        src={team.logo}
        alt={`Escudo de ${team.name}`}
      />

      <KeyList team={team} />

      <img
        className="team__league"
        src={team.division.img}
        alt={`Liga de ${team.country}`}
      />
    </div>
  );
};

export default TeamMainInfo;
