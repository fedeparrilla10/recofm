import NavBar from './core/NavBar/NavBar';
import Home from './pages/Home/Home';
import Footer from './core/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
