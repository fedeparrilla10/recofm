import { Link } from 'react-router-dom';
import Header from '../../core/Header/Header';
import Button from '../../components/Button/Button';
import CardList from '../../components/CardList/CardList';
import { ALL_SAVES } from '../../constants/filters';

import './Home.css';

const Home = () => {
  return (
    <main className="home">
      <Header />

      <div className="buttons">
        <Link to={`random_team/${ALL_SAVES}`}>
          <Button name="Randomizer" className="button button--big" />
        </Link>

        <Link to="teams">
          <Button name="Recomendaciones" className="button button--big" />
        </Link>
      </div>

      <CardList />
    </main>
  );
};

export default Home;
