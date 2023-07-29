import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import TeamProfile from '../../components/TeamProfile/TeamProfile';
import './TeamDetails.css';
import { TeamsContext } from '../../context/TeamsContext';

const TeamDetails = () => {
  const { teams } = useContext(TeamsContext);

  const { id } = useParams();
  const team = teams.find((team) => team.id === parseInt(id));

  if (team)
    return (
      <>
        <TeamProfile team={team} />
      </>
    );
};

export default TeamDetails;
