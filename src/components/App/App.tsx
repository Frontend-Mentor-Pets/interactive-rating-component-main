import { useState } from 'react';
import styles from './App.module.scss';
import Footer from '../Footer';
import Rating from '../Rating';
import Thanks from '../Thanks';

function App() {
  const [submit, setSubmit] = useState(false);
  const [rating, setRating] = useState<number | null>(null);

  return (
    <div className={styles.app}>
      {submit ? (
        <Thanks rating={rating} />
      ) : (
        <Rating setSubmit={setSubmit} setRating={setRating} currentRating={rating} />
      )}
      <Footer />
    </div>
  );
}

export default App;
