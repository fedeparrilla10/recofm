import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import TeamProfile from '../../components/TeamProfile/TeamProfile';
import './RandomTeam.css';
import { TeamsContext } from '../../context/TeamsContext';
import {
  ALL_SAVES,
  FAST_SAVES,
  LONG_SAVES,
  BIZARRE_SAVES,
} from '../../constants/filters';

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
      type === BIZARRE_SAVES && randomTeam(BIZARRE_SAVES);
    }
  }, [teams]);

  return (
    <section className="randomizer">
      {!loading && team && <TeamProfile team={team} />}
      {!loading && (
        <Button
          onClick={() => {
            if (type === ALL_SAVES) {
              randomTeam();
            } else if (type === FAST_SAVES) {
              randomTeam(FAST_SAVES);
            }
          }}
          name="Otro Equipo"
          className="button button--medium"
        />
      )}
    </section>
  );
};

export default RandomTeam;
