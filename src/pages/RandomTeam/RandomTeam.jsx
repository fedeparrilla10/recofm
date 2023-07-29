import { useState, useEffect, useContext } from 'react';
import Button from '../../components/Button/Button';
import TeamProfile from '../../components/TeamProfile/TeamProfile';
import './RandomTeam.css';
import { TeamsContext } from '../../context/TeamsContext';

const RandomTeam = () => {
  const { teams } = useContext(TeamsContext);
  const [team, setTeam] = useState('');
  const [loading, setLoading] = useState(true);

  const randomTeam = () => {
    const randomIndex = Math.floor(Math.random() * teams.length);
    setTeam(teams[randomIndex]);
  };

  useEffect(() => {
    if (teams.length > 0) {
      setLoading(false);
      randomTeam();
    }
  }, [teams]);

  return (
    <section className="randomizer">
      {!loading && team && <TeamProfile team={team} />}
      {!loading && <Button onClick={randomTeam} name="Otro Equipo" />}
    </section>
  );
};

export default RandomTeam;
