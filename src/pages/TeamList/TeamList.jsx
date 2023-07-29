import { useContext } from 'react';
import Team from '../../components/Team/Team';
import './TeamList.css';
import { TeamsContext } from '../../context/TeamsContext';

const TeamList = () => {
  const { teams } = useContext(TeamsContext);

  const allTeams = teams.map((team) => {
    return <Team key={team.id} team={team} />;
  });

  return <section className="teamlist">{allTeams}</section>;
};

export default TeamList;
