import TeamMainInfo from '../TeamMainInfo/TeamMainInfo';
import Stadium from '../Stadium/Stadium';
import Kits from '../Kits/Kits';
import KeyPlayers from '../KeyPlayers/KeyPlayers';
import './TeamProfile.css';

const TeamProfile = ({ team }) => {
  return (
    <article className="profile">
      <h2 className="team__name">{team.name}</h2>

      <TeamMainInfo team={team} />

      <div className="profile__content">
        <Stadium team={team} />

        <div className="details">
          <div className="details__long">
            <p>{team.long_details}</p>
          </div>
        </div>

        <div className="first-team-details">
          <Kits team={team} />
          <KeyPlayers team={team} />
        </div>
      </div>
    </article>
  );
};

export default TeamProfile;
