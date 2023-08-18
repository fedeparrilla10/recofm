import { useIsMobile } from '../../constants/mediaqueries';
import './Card.css';

const Card = ({ title, content, image }) => {
  const isMobile = useIsMobile();

  return (
    <div className="card">
      {!isMobile && (
        <img
          className="card__img"
          src={image}
          alt={`Imagen representativa de ${title}`}
        />
      )}
      <h2 className="card__title">{title}</h2>
      {!isMobile && <p className="card__content">{content}</p>}
    </div>
  );
};

export default Card;
