import { useIsFullHD } from '../../constants/mediaqueries';
import './TeamLongDetails.css';

const TeamLongDetails = ({ team }) => {
  const isFullHD = useIsFullHD();

  return (
    <div className="team-description">
      <div className="team-description__long">
        {isFullHD ? <p>{team.long_details}</p> : <p>{team.details}</p>}
      </div>
    </div>
  );
};

export default TeamLongDetails;
