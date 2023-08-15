import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import TeamProfile from '../../components/TeamProfile/TeamProfile';
import { Link } from 'react-router-dom';
import { TeamsContext } from '../../context/TeamsContext';
import {
  ALL_SAVES,
  FAST_SAVES,
  LONG_SAVES,
  LLM_SAVES,
} from '../../constants/filters';
import { motion } from 'framer-motion';
import './RandomTeam.css';

const RandomTeam = ({ team, randomTeam }) => {
  const { teams } = useContext(TeamsContext);
  const [loading, setLoading] = useState(true);
  const { type } = useParams();

  useEffect(() => {
    if (teams.length > 0) {
      setLoading(false);
      type === ALL_SAVES && randomTeam();
      type === FAST_SAVES && randomTeam(FAST_SAVES);
      type === LONG_SAVES && randomTeam(LONG_SAVES);
      type === LLM_SAVES && randomTeam(LLM_SAVES);
    }
  }, [teams]);

  return (
    <motion.section
      className="random-team"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      {!loading && team && <TeamProfile team={team} />}
      {!loading && (
        <div className="random-team__buttons">
          <Link to="/randomizer">
            <Button name="Atrás" className="button button--medium" />
          </Link>
          <Button
            onClick={() => {
              if (type === ALL_SAVES) {
                randomTeam();
              } else if (type === FAST_SAVES) {
                randomTeam(FAST_SAVES);
              } else if (type === LONG_SAVES) {
                randomTeam(LONG_SAVES);
              } else if (type === LLM_SAVES) {
                randomTeam(LLM_SAVES);
              }
            }}
            name="Otro Equipo"
            className="button button--medium"
          />
        </div>
      )}
    </motion.section>
  );
};

export default RandomTeam;
