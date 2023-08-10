import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import TeamList from '../../pages/TeamList/TeamList';
import TeamDetails from '../../pages/TeamDetails/TeamDetails';
import RandomTeam from '../../pages/RandomTeam/RandomTeam';
import { AnimatePresence } from 'framer-motion';

const RoutesWithAnimation = ({ team, randomTeam }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />} />
        <Route path="teams" element={<TeamList />} />
        <Route path="team/:id" element={<TeamDetails />} />
        <Route
          path="random_team/:type"
          element={<RandomTeam team={team} randomTeam={randomTeam} />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesWithAnimation;
