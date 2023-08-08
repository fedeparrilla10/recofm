import './Kits.css';

const Kits = ({ team }) => {
  return (
    <div className="kits">
      <div className="kit">
        <h3>Local</h3>
        <img
          className="kit__img"
          src={team.kits.home}
          alt="Primera equipación"
        />
      </div>
      <div className="kit">
        <h3>Visitante</h3>
        <img
          className="kit__img"
          src={team.kits.away}
          alt="Segunda equipación"
        />
      </div>
      {team.kits.third && (
        <div className="kit">
          <h3>Alternativa</h3>
          <img
            className="kit__img"
            src={team.kits.third}
            alt="Tercera equipación"
          />
        </div>
      )}
    </div>
  );
};

export default Kits;
