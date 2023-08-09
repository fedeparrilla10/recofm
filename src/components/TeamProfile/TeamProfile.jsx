import TeamMainInfo from '../TeamMainInfo/TeamMainInfo';
import Stadium from '../Stadium/Stadium';
import Kits from '../Kits/Kits';
import KeyPlayers from '../KeyPlayers/KeyPlayers';
import TeamLongDetails from '../TeamLongDetails/TeamLongDetails';
import './TeamProfile.css';

const TeamProfile = ({ team }) => {
  return (
    <article className="profile">
      <h2 className="profile__team-name">{team.name}</h2>
      <TeamMainInfo team={team} />

      <section className="profile__content">
        <Stadium team={team} />
        <TeamLongDetails team={team} />

        <section className="profile__first-team-details">
          <Kits team={team} />
          <KeyPlayers team={team} />
        </section>
      </section>
    </article>
  );
};

export default TeamProfile;
