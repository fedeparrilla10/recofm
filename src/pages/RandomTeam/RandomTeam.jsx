import { useState, useEffect, useContext } from 'react';
import Button from '../../components/Button/Button';
import Team from '../../components/Team/Team';
import './RandomTeam.css';
import { TeamsContext } from '../../context/TeamsContext';

const RandomTeam = () => {
  const { teams } = useContext(TeamsContext);
  const [team, setTeam] = useState('');

  const randomTeam = () => {
    const randomIndex = Math.floor(Math.random() * teams.length);
    setTeam(teams[randomIndex]);
  };

  useEffect(() => {
    randomTeam();
  }, [teams]);

  return (
    <div>
      <Button onClick={randomTeam} name="Otro Equipo" />
      {team && <Team team={team} />}
    </div>
  );
};

export default RandomTeam;
