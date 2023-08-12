import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import { FAST_SAVES, LONG_SAVES, LLM_SAVES } from '../../constants/filters';
import {
  FAST_SAVE_TITLE,
  LONG_SAVE_TITLE,
  LLM_SAVE_TITLE,
  FAST_SAVE_CONTENT,
  LONG_SAVE_CONTENT,
  LLM_SAVE_CONTENT,
} from '../../constants/cards';
import './CardList.css';

const CardList = () => {
  return (
    <section className="cards">
      <Link to={`random_team/${FAST_SAVES}`}>
        <Card title={FAST_SAVE_TITLE} content={FAST_SAVE_CONTENT} />
      </Link>
      <Link to={`random_team/${LONG_SAVES}`}>
        <Card title={LONG_SAVE_TITLE} content={LONG_SAVE_CONTENT} />
      </Link>
      <Link to={`random_team/${LLM_SAVES}`}>
        <Card title={LLM_SAVE_TITLE} content={LLM_SAVE_CONTENT} />
      </Link>
    </section>
  );
};

export default CardList;
