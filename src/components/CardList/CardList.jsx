import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import { FAST_SAVES, LONG_SAVES, LLM_SAVES } from '../../constants/filters';
import './CardList.css';

const CardList = () => {
  return (
    <section className="cards">
      <Link to={`random_team/${FAST_SAVES}`}>
        <Card
          title="Partida Rápida"
          content="Para aquellos que buscan una partida rápida, en la que asesinar el botón 'Continuar' sin tener que pararse a pensar si poner once tareas defensivas porque vas último y te toca enfrentar al City de Haaland de visitante."
        />
      </Link>
      <Link to={`random_team/${LONG_SAVES}`}>
        <Card
          title="Partida Larga"
          content="Para los que disponen de cierto tiempo libre para dedicarle al juego. Esta es, la forma más 'común' de jugar al Football Manager. Se requiere paciencia. Incluye 'sleeping giants' y clubes con potencial sin aprovechar."
        />
      </Link>
      <Link to={`random_team/${LLM_SAVES}`}>
        <Card
          title="Partida MLB"
          content="Para aquellos a los que les gusta jugar de la forma más realista posible. Hay que saber sufrir, pero no hay nada más gratificante que ganar la Champions League después de haber empezado en el barro de la cuarta división danesa."
        />
      </Link>
    </section>
  );
};

export default CardList;
