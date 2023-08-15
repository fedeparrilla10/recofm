import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import {
  ALL_SAVES,
  FAST_SAVES,
  LONG_SAVES,
  LLM_SAVES,
} from '../../constants/filters';
import {
  ALL_SAVE_TITLE,
  FAST_SAVE_TITLE,
  LONG_SAVE_TITLE,
  LLM_SAVE_TITLE,
  ALL_SAVE_CONTENT,
  FAST_SAVE_CONTENT,
  LONG_SAVE_CONTENT,
  LLM_SAVE_CONTENT,
} from '../../constants/cards';
import willi1 from '../../assets/willi1.png';
import llm1 from '../../assets/llm1.png';
import arsenalutd from '../../assets/arsenalutd.jpg';
import pitch from '../../assets/pitch.jpg';
import './CardList.css';

const CardList = () => {
  return (
    <section className="cards">
      <Link to={`/random_team/${ALL_SAVES}`}>
        <Card title={ALL_SAVE_TITLE} content={ALL_SAVE_CONTENT} image={pitch} />
      </Link>
      <Link to={`/random_team/${FAST_SAVES}`}>
        <Card
          title={FAST_SAVE_TITLE}
          content={FAST_SAVE_CONTENT}
          image={arsenalutd}
        />
      </Link>
      <Link to={`/random_team/${LONG_SAVES}`}>
        <Card
          title={LONG_SAVE_TITLE}
          content={LONG_SAVE_CONTENT}
          image={willi1}
        />
      </Link>
      <Link to={`/random_team/${LLM_SAVES}`}>
        <Card title={LLM_SAVE_TITLE} content={LLM_SAVE_CONTENT} image={llm1} />
      </Link>
    </section>
  );
};

export default CardList;
