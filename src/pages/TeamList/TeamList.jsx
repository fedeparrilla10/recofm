import { useState, useContext } from 'react';
import Team from '../../components/Team/Team';
import Filter from '../../components/Filter/Filter';
import { ALL_SAVES } from '../../constants/filters';
import { TeamsContext } from '../../context/TeamsContext';
import { motion } from 'framer-motion';
import './TeamList.css';

const TeamList = () => {
  const [filter, setFilter] = useState(ALL_SAVES);
  const { teams } = useContext(TeamsContext);

  const filterTeams = teams
    .filter((team) => {
      return filter === '' || filter === ALL_SAVES
        ? team
        : team.difficulty === filter;
    })
    .map((team) => {
      return <Team key={team.id} team={team} />;
    });

  return (
    <>
      <motion.section
        className="teamlist"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        <Filter filter={filter} setFilter={setFilter} />
        <div className="teamlist__teams">{filterTeams}</div>
      </motion.section>
    </>
  );
};

export default TeamList;
