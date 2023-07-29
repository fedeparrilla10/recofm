import Header from '../../core/Header/Header';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <main className="home__container">
      <Header />

      <div className="buttons">
        <Link to={'random_team'}>
          <Button name="Randomizer" />
        </Link>
        <Button name="Recomendaciones" />
      </div>
    </main>
  );
};

export default Home;
