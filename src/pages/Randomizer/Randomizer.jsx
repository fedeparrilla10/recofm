import CardList from '../../components/CardList/CardList';
import { motion } from 'framer-motion';
import './Randomizer.css';

const Randomizer = () => {
  return (
    <motion.section
      className="randomizer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <CardList />
    </motion.section>
  );
};

export default Randomizer;
