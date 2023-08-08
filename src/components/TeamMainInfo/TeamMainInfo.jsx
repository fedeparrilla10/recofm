import './TeamMainInfo.css';

const TeamMainInfo = ({ team }) => {
  return (
    <div className="team-main-info">
      <img
        className="team__logo"
        src={team.logo}
        alt={`Escudo de ${team.name}`}
      />

      <div className="team__key">
        <ul className="team__key__list">
          {team.key_points.map((keyPoint, i) => {
            return <li key={i}>✔️ {keyPoint}</li>;
          })}
        </ul>
      </div>

      <img
        className="team__league"
        src={team.division.img}
        alt={`Liga de ${team.country}`}
      />
    </div>
  );
};

export default TeamMainInfo;
