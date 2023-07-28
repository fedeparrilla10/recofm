import NavBar from './core/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import TeamList from './pages/TeamList/TeamList';
import Footer from './core/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="teams" element={<TeamList />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
