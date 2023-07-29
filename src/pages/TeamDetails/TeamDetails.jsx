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
      <section className="team-details">
        <TeamProfile team={team} />
      </section>
    );
};

export default TeamDetails;
