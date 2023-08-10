import './KeyList.css';

const KeyList = ({ team }) => {
  return (
    <div className="team__key">
      <ul className="team__key__list">
        {team.key_points.map((keyPoint, i) => {
          return <li key={i}>✔️ {keyPoint}</li>;
        })}
      </ul>
    </div>
  );
};

export default KeyList;
