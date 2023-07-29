import './TeamProfile.css';

const TeamProfile = ({ team }) => {
  return (
    <article className="profile">
      <h2>{team.name}</h2>
      <img
        className="profile__logo"
        src={team.logo}
        alt={`Escudo de ${team.name}`}
      />
      <img
        className="profile__stadium-img"
        src={team.stadium.img}
        alt={`Escudo de ${team.name}`}
      />
    </article>
  );
};

export default TeamProfile;
