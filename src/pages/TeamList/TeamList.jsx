import { useState, useContext } from 'react';
import Team from '../../components/Team/Team';
import Filter from '../../components/Filter/Filter';
import { TeamsContext } from '../../context/TeamsContext';
import { motion } from 'framer-motion';
import './TeamList.css';

const TeamList = () => {
  const [filter, setFilter] = useState('');
  const { teams } = useContext(TeamsContext);

  const filterTeams = teams
    .filter((team) => {
      return filter === '' || filter === 'all'
        ? team
        : team.difficulty === filter;
    })
    .map((team) => {
      return <Team key={team.id} team={team} />;
    });

  return (
    <>
      <Filter filter={filter} setFilter={setFilter} />

      <motion.section
        className="teamlist"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        {filterTeams}
      </motion.section>
    </>
  );
};

export default TeamList;
