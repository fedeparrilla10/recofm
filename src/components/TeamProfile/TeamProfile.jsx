import TeamMainInfo from '../TeamMainInfo/TeamMainInfo';
import './TeamProfile.css';

const TeamProfile = ({ team }) => {
  return (
    <article className="profile">
      <h2 className="team__name">{team.name}</h2>

      <TeamMainInfo team={team} />

      <div className="profile__content">
        <div className="stadium">
          <h4 className="stadium__name">{team.stadium.name}</h4>
          <img
            className="stadium__img"
            src={team.stadium.img}
            alt={`Estadio de ${team.name}`}
          />
        </div>

        <div className="details">
          <div className="details__long">
            <p>{team.long_details}</p>
          </div>
        </div>

        <div className="first-team-details">
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
        </div>
      </div>
    </article>
  );
};

export default TeamProfile;
