import './TeamLongDetails.css';

const TeamLongDetails = ({ team }) => {
  return (
    <div className="team-description">
      <div className="team-description__long">
        <p>{team.long_details}</p>
      </div>
    </div>
  );
};

export default TeamLongDetails;
