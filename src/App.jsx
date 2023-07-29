import NavBar from './core/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home/Home';
import TeamList from './pages/TeamList/TeamList';
import TeamDetails from './pages/TeamDetails/TeamDetails';
import RandomTeam from './pages/RandomTeam/RandomTeam';
import Footer from './core/Footer/Footer';
import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const getTeams = await axios.get(
        'https://64c2cbb5eb7fd5d6ebd0564b.mockapi.io/teams'
      );
      setTeams(getTeams.data);
    };
    getData();
  }, []);

  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="teams" element={<TeamList teams={teams} />} />
        <Route path="team/:id" element={<TeamDetails teams={teams} />} />
        <Route path={'random_team'} element={<RandomTeam teams={teams} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
