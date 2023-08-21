import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import TeamProfile from '../../components/TeamProfile/TeamProfile';
import Button from '../../components/Button/Button';
import { useIsMobile } from '../../constants/mediaqueries';
import { TeamsContext } from '../../context/TeamsContext';
import { motion } from 'framer-motion';
import './TeamDetails.css';

const TeamDetails = () => {
  const isMobile = useIsMobile();
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

        <Link to="/teams">
          <Button
            name="Atrás"
            className={
              isMobile ? 'button button--small' : 'button button--medium'
            }
          />
        </Link>
      </motion.section>
    );
};

export default TeamDetails;
