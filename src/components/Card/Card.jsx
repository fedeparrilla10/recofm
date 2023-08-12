import { useIsMobile } from '../../constants/mediaqueries';
import './Card.css';

const Card = ({ title, content }) => {
  const isMobile = useIsMobile();

  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
      {!isMobile && <p className="card__content">{content}</p>}
    </div>
  );
};

export default Card;
