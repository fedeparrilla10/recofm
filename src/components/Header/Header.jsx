import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__titles">
        <h1 className="header__title">
          <span className="r">R</span>ecoFM
        </h1>
        <h3 className="header__subtitle">
          Ayudándote a tomar decisiones{' '}
          <span className="header__subtitle--strong">realmente</span> difíciles
        </h3>
      </div>
    </header>
  );
};

export default Header;
