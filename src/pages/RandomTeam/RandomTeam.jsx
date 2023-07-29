import { useState, useEffect } from 'react';
import Team from '../../components/Team/Team';
import './RandomTeam.css';

const RandomTeam = ({ teams }) => {
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
      <button onClick={randomTeam}>click</button>
      {team && <Team team={team} />}
    </div>
  );
};

export default RandomTeam;
