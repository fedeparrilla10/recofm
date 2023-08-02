import { Link } from 'react-router-dom';
import Header from '../../core/Header/Header';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';

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
          content="Para aquellos que buscan una partida rápida, en la que asesinar el botón 'Continuar' sin tener que parar a pensar si poner once tareas defensivas porque vas último y te toca enfrentar al City de Haaland de visitante."
        />
        <Card
          title="Partida Larga"
          content="Para los que tienen tiempo para dedicarle al juego. Esta es, quizás, la forma más satisfactoria de jugar al Football Manager. Se requiere mucha paciencia. Incluye 'sleeping giants' y clubes con potencial sin aprovechar"
        />
        <Card
          title="Partida Bizarra"
          content="Para aquellos que supieron saltar del Rosenborg a Fiji Sub23, estas partidas rarísimas son para ustedes. Contienen ideas extrañas para poner en práctica. No se acepta gente con el estómago sensible."
        />
      </div>
    </main>
  );
};

export default Home;
