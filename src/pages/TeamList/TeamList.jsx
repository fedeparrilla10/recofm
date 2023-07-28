import teams from '../../data/teams.json';
import './TeamList.css';

const TeamList = () => {
  const allTeams = teams.map((team) => {
    const teamList = team.teams;
    return teamList.map((eachTeam) => {
      return (
        <article className="teamlist__container">
          <h2>{eachTeam.name}</h2>
          <img src={eachTeam.logo} alt={`Escudo de ${eachTeam.name}`} />
          <h3>{eachTeam.country}</h3>
          <h3>{eachTeam.division.name}</h3>
          <img src={eachTeam.division.img} />
          <p>{eachTeam.details}</p>
        </article>
      );
    });
  });

  return <section className="teamlist">{allTeams}</section>;
};

export default TeamList;
