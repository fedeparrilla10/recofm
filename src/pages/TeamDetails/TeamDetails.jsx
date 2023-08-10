import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import TeamProfile from '../../components/TeamProfile/TeamProfile';
import './TeamDetails.css';
import { TeamsContext } from '../../context/TeamsContext';
import { motion } from 'framer-motion';

const TeamDetails = () => {
  const { teams } = useContext(TeamsContext);

  const { id } = useParams();
  const team = teams.find((team) => team.id === parseInt(id));

  if (team)
    return (
      <motion.section
        className="team-details"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        <TeamProfile team={team} />
      </motion.section>
    );
};

export default TeamDetails;
