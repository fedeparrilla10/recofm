import { useMediaQuery } from 'react-responsive';
import './Card.css';

const Card = ({ title, content }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
      {!isMobile && <p className="card__content">{content}</p>}
    </div>
  );
};

export default Card;
