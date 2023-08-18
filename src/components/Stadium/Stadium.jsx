import './Stadium.css';

const Stadium = ({ team }) => {

  return (
    <div className="stadium">
      <h4 className="stadium__name">{team.stadium.name}</h4>
      <img
        className="stadium__img"
        src={team.stadium.img}
        alt={`Estadio de ${team.name}`}
      />
    </div>
  );
};

export default Stadium;
