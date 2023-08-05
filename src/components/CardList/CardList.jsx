import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import { FAST_SAVES, LONG_SAVES, BIZARRE_SAVES } from '../../constants/filters';
import './CardList.css';

const CardList = () => {
  return (
    <section className="cards">
      <Link to={`random_team/${FAST_SAVES}`}>
        <Card
          title="Partida Rápida"
          content="Para aquellos que buscan una partida rápida, en la que asesinar el botón 'Continuar' sin tener que parar a pensar si poner once tareas defensivas porque vas último y te toca enfrentar al City de Haaland de visitante."
        />
      </Link>
      <Link to={`random_team/${LONG_SAVES}`}>
        <Card
          title="Partida Larga"
          content="Para los que tienen tiempo para dedicarle al juego. Esta es, quizás, la forma más satisfactoria de jugar al Football Manager. Se requiere mucha paciencia. Incluye 'sleeping giants' y clubes con potencial sin aprovechar"
        />
      </Link>
      <Link>
        <Card
          title="Partida Bizarra"
          content="Para aquellos que supieron saltar del Rosenborg a Fiji Sub23, estas partidas rarísimas son para ustedes. Contienen ideas extrañas para poner en práctica. No se acepta gente con el estómago sensible."
        />
      </Link>
    </section>
  );
};

export default CardList;
