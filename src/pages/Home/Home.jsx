import Header from '../../core/Header/Header';
import Button from '../../components/Button/Button';
import './Home.css';

const Home = () => {
  return (
    <main className="home__container">
      <Header />

      <div className="buttons">
        <Button name="Randomizer" />
        <Button name="Recomendaciones" />
      </div>
    </main>
  );
};

export default Home;
