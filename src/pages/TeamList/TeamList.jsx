import teams from '../../data/teams.json';
import './TeamList.css';

const TeamList = ({ teams }) => {
  const allTeams = teams.map((eachTeam) => {
    return (
      <article key={eachTeam.id} className="teamlist__container">
        <div className="teamlist__info-container">
          <h2 className="teamlist__name">{eachTeam.name}</h2>
          <img
            className="teamlist__logo teamlist__logo--team"
            src={eachTeam.logo}
            alt={`Escudo de ${eachTeam.name}`}
          />
        </div>
        <p className="teamlist__details">{eachTeam.details}</p>
      </article>
    );
  });

  return <section className="teamlist">{allTeams}</section>;
};

export default TeamList;
