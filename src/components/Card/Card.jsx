import { useIsMobile } from '../../constants/mediaqueries';
import './Card.css';

const Card = ({ title, content, image, firstEx }) => {
  const isMobile = useIsMobile();

  return (
    <div className="card">
      <img
        className="card__img"
        src={image}
        alt={`Imagen representativa de una ${title}`}
      />
      <h2 className="card__title">{title}</h2>
      {!isMobile && <p className="card__content">{content}</p>}
    </div>
  );
};

export default Card;
