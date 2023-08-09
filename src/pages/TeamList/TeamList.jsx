import { useContext } from 'react';
import Team from '../../components/Team/Team';
import './TeamList.css';
import { TeamsContext } from '../../context/TeamsContext';
import { motion } from 'framer-motion';

const TeamList = () => {
  const { teams } = useContext(TeamsContext);

  const allTeams = teams.map((team) => {
    return <Team key={team.id} team={team} />;
  });

  return (
    <motion.section
      className="teamlist"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {allTeams}
    </motion.section>
  );
};

export default TeamList;
