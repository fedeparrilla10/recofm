import Team from '../../components/Team/Team';
import './TeamList.css';

const TeamList = ({ teams }) => {
  const allTeams = teams.map((team) => {
    return <Team key={team.id} team={team} />;
  });

  return <section className="teamlist">{allTeams}</section>;
};

export default TeamList;
