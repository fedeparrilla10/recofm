import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import TeamProfile from '../../components/TeamProfile/TeamProfile';
import './RandomTeam.css';
import { TeamsContext } from '../../context/TeamsContext';

const RandomTeam = ({ team, randomTeam, randomFastSave }) => {
  const { teams } = useContext(TeamsContext);
  const [loading, setLoading] = useState(true);
  const { type } = useParams();

  useEffect(() => {
    if (teams.length > 0) {
      setLoading(false);
      type === 'all' && randomTeam();
      type === 'fast' && randomFastSave();
    }
  }, [teams]);

  return (
    <section className="randomizer">
      {!loading && team && <TeamProfile team={team} />}
      {!loading && (
        <Button
          onClick={() => {
            if (type === 'all') {
              randomTeam();
            } else if (type === 'fast') {
              randomFastSave();
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
