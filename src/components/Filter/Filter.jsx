const Filter = ({ setFilter }) => {
  return (
    <div className="inputs">
      <div className="input">
        <input
          type="radio"
          name="saveType"
          id="all"
          value="all"
          onChange={(e) => setFilter(e.target.value)}
        />
        <label htmlFor="all">Todos</label>
      </div>
      <div className="input">
        <input
          type="radio"
          name="saveType"
          id="fast"
          value="fast"
          onChange={(e) => setFilter(e.target.value)}
        />
        <label htmlFor="fast">Partida Rápida</label>
      </div>
      <div className="input">
        <input
          type="radio"
          name="saveType"
          id="long"
          value="long"
          onChange={(e) => setFilter(e.target.value)}
        />
        <label htmlFor="long">Partida Larga</label>
      </div>
      <div className="input">
        <input
          type="radio"
          name="saveType"
          id="llm"
          value="mlb"
          onChange={(e) => setFilter(e.target.value)}
        />
        <label htmlFor="llm">Partida MLB</label>
      </div>
    </div>
  );
};

export default Filter;
