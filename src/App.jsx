import NavBar from './core/NavBar/NavBar';
import { TeamsContext } from './context/TeamsContext';
import { useContext, useState } from 'react';
import RoutesWithAnimation from './components/RoutesWithAnimation/RoutesWithAnimation';

// import Footer from './core/Footer/Footer';
import './App.css';

const App = () => {
  const { teams } = useContext(TeamsContext);
  const [team, setTeam] = useState('');

  const randomTeam = (saveType = null) => {
    let filteredTeams = teams;

    if (saveType !== null) {
      filteredTeams = teams.filter((team) => team.difficulty === saveType);
    }

    const randomIndex = Math.floor(Math.random() * filteredTeams.length);
    setTeam(filteredTeams[randomIndex]);
  };

  return (
    <div className="container">
      <NavBar />
      <RoutesWithAnimation team={team} randomTeam={randomTeam} />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
