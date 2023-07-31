import './Card.css';

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
      <p className="card__content">{content}</p>
    </div>
  );
};

export default Card;
