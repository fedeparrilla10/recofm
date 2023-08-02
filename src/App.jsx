import NavBar from './core/NavBar/NavBar';
import { TeamsContext } from './context/TeamsContext';
import { useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import TeamList from './pages/TeamList/TeamList';
import TeamDetails from './pages/TeamDetails/TeamDetails';
import RandomTeam from './pages/RandomTeam/RandomTeam';
// import Footer from './core/Footer/Footer';
import './App.css';

const App = () => {
  const { teams } = useContext(TeamsContext);
  const [team, setTeam] = useState('');

  const randomTeam = () => {
    const randomIndex = Math.floor(Math.random() * teams.length);
    setTeam(teams[randomIndex]);
  };

  const randomFastSave = () => {
    const fastTeam = teams.filter((team) => team.difficulty === 'fast');
    const randomIndex = Math.floor(Math.random() * fastTeam.length);
    setTeam(fastTeam[randomIndex]);
  };

  const randomLongSave = () => {};

  const randomBizarreSave = () => {};

  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="teams" element={<TeamList />} />
        <Route path="team/:id" element={<TeamDetails />} />
        <Route
          path="random_team/:type"
          element={
            <RandomTeam
              team={team}
              randomTeam={randomTeam}
              randomFastSave={randomFastSave}
            />
          }
        />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
