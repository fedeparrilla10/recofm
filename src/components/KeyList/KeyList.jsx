import './KeyList.css';

const KeyList = ({ team }) => {
  return (
    <div className="team__key-points">
      <ul className="team__key-points__list">
        {team.key_points.map((keyPoint, i) => {
          return <li key={i}>✔️ {keyPoint}</li>;
        })}
      </ul>
    </div>
  );
};

export default KeyList;
