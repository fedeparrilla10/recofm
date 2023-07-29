import { useParams } from 'react-router-dom';
import Team from '../../components/Team/Team';
import './TeamDetails.css';

const TeamDetails = ({ teams }) => {
  const { id } = useParams();
  const team = teams.find((team) => team.id === parseInt(id));

  if (team)
    return (
      <>
        <Team team={team} />
      </>
    );
};

export default TeamDetails;
