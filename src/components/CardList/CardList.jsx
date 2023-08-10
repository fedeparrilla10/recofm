import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import { FAST_SAVES, LONG_SAVES, LLM_SAVES } from '../../constants/filters';
import {
  FAST_SAVE_CONTENT,
  LONG_SAVE_CONTENT,
  LLM_SAVE_CONTENT,
} from '../../constants/cards';
import './CardList.css';

const CardList = () => {
  return (
    <section className="cards">
      <Link to={`random_team/${FAST_SAVES}`}>
        <Card title="Partida Rápida" content={FAST_SAVE_CONTENT} />
      </Link>
      <Link to={`random_team/${LONG_SAVES}`}>
        <Card title="Partida Larga" content={LONG_SAVE_CONTENT} />
      </Link>
      <Link to={`random_team/${LLM_SAVES}`}>
        <Card title="Partida MLB" content={LLM_SAVE_CONTENT} />
      </Link>
    </section>
  );
};

export default CardList;
