import { useState, useEffect, useContext } from 'react';
import Button from '../../components/Button/Button';
import TeamProfile from '../../components/TeamProfile/TeamProfile';
import './RandomTeam.css';
import { TeamsContext } from '../../context/TeamsContext';

const RandomTeam = ({ team, randomTeam }) => {
  const { teams } = useContext(TeamsContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (teams.length > 0) {
      setLoading(false);
      randomTeam();
    }
  }, [teams]);

  return (
    <section className="randomizer">
      {!loading && team && <TeamProfile team={team} />}
      {!loading && (
        <Button
          onClick={randomTeam}
          name="Otro Equipo"
          className="button button--medium"
        />
      )}
    </section>
  );
};

export default RandomTeam;
