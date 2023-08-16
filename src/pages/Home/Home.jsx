import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { motion } from 'framer-motion';
import fmbg from '../../assets/fmbg.png';
import './Home.css';

const Home = () => {
  return (
    <motion.main
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <Header />

      <div className="buttons">
        <Link to="randomizer">
          <Button name="Randomizer" className="button button--big" />
        </Link>

        <Link to="teams">
          <Button name="Recomendaciones" className="button button--big" />
        </Link>
      </div>
    </motion.main>
  );
};

export default Home;
