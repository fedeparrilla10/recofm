import Header from '../../core/Header/Header';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <main className="home">
      <Header />

      <div className="buttons">
        <Link to="random_team">
          <Button name="Randomizer" className="button button--big" />
        </Link>

        <Link to="teams">
          <Button name="Recomendaciones" className="button button--big" />
        </Link>
      </div>

      <div className="cards">
        <Card
          title="Partida Rápida"
          content="Para cualquiera que no tenga demasiado tiempo y busque simplemente avanzar rápido sin complicarse demasiado la vida"
        />
        <Card
          title="Partida Rápida"
          content="Para cualquiera que no tenga demasiado tiempo y busque simplemente avanzar rápido sin complicarse demasiado la vida"
        />
        <Card
          title="Partida Rápida"
          content="Para cualquiera que no tenga demasiado tiempo y busque simplemente avanzar rápido sin complicarse demasiado la vida"
        />
      </div>
    </main>
  );
};

export default Home;
