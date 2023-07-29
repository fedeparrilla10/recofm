import './TeamProfile.css';

const TeamProfile = ({ team }) => {
  return (
    <article className="profile">
      <div className="profile__main-info">
        <h2 className="team__name">{team.name}</h2>
        <img
          className="team__logo"
          src={team.logo}
          alt={`Escudo de ${team.name}`}
        />
      </div>

      <div className="stadium">
        <h4 className="stadium__name">{team.stadium.name}</h4>
        <img
          className="stadium__img"
          src={team.stadium.img}
          alt={`Escudo de ${team.name}`}
        />
      </div>

      <div className="kits">
        <img className="kit" src={team.kits.home} alt="Primera equipación" />
        <img className="kit" src={team.kits.away} alt="Segunda equipación" />
        {team.kits.third && (
          <img className="kit" src={team.kits.third} alt="Tercera equipación" />
        )}
      </div>
    </article>
  );
};

export default TeamProfile;
