import './KeyPlayers.css';

const KeyPlayers = ({ team }) => {
  return (
    <div className="key-players">
      <div className="players">
        {team.key_players.map((player, i) => {
          return (
            <div className="player" key={i}>
              <p className="player__name">{player.name}</p>
              <img
                className="player__img"
                src={player.img}
                alt={`Foto de ${player.name}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KeyPlayers;
