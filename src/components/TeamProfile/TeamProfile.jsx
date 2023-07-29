import './TeamProfile.css';

const TeamProfile = ({ team }) => {
  return (
    <article className="profile">
      <div className="profile__team">
        <h2 className="profile__team__name">{team.name}</h2>
        <img
          className="profile__team__logo"
          src={team.logo}
          alt={`Escudo de ${team.name}`}
        />
      </div>

      <div>
        <h4 className="profile__stadium__name">{team.stadium.name}</h4>
        <img
          className="profile__stadium__img"
          src={team.stadium.img}
          alt={`Escudo de ${team.name}`}
        />
      </div>

      <div>
        <img className="profile__kits__img" src={team.kits.home} alt="" />
        <img className="profile__kits__img" src={team.kits.away} alt="" />
        <img className="profile__kits__img" src={team.kits.third} alt="" />
      </div>
    </article>
  );
};

export default TeamProfile;
