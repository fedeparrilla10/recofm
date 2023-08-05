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

  const randomTeam = (saveType = null) => {
    let filteredTeams = teams;

    if (saveType !== null) {
      filteredTeams = teams.filter((team) => team.difficulty === saveType);
    }

    const randomIndex = Math.floor(Math.random() * filteredTeams.length);
    setTeam(filteredTeams[randomIndex]);
  };

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
          element={<RandomTeam team={team} randomTeam={randomTeam} />}
        />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
