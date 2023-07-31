import NavBar from './core/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import TeamList from './pages/TeamList/TeamList';
import TeamDetails from './pages/TeamDetails/TeamDetails';
import RandomTeam from './pages/RandomTeam/RandomTeam';
// import Footer from './core/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="teams" element={<TeamList />} />
        <Route path="team/:id" element={<TeamDetails />} />
        <Route path="random_team" element={<RandomTeam />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
