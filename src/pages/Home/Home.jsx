import Button from '../../components/Button/Button';
import './Home.css';

const Home = () => {
  return (
    <div className="home__container">
      <header className="header">
        <div className="header__titles">
          <h1 className="header__title">RecoFM</h1>
          <h3 className="header__subtitle">
            Ayudándote a tomar decisiones{' '}
            <span className="header__subtitle--strong">realmente</span>{' '}
            difíciles
          </h3>
        </div>

        <div className="buttons">
          <Button name="Randomizer" />
          <Button name="Recomendaciones" />
        </div>
      </header>
    </div>
  );
};

export default Home;
