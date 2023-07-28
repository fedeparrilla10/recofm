import './Team.css';

const Team = ({ team }) => {
  return (
    <article className="team__container">
      <div className="team__info-container">
        <h2 className="team__name">{team.name}</h2>
        <img
          className="team__logo team__logo--team"
          src={team.logo}
          alt={`Escudo de ${team.name}`}
        />
      </div>
      <p className="team__details">{team.details}</p>
    </article>
  );
};

export default Team;
