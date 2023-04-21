import { useState } from 'react';
import './App.scss';
import Footer from '../Footer/Footer';
import Rating from '../Raiting/Rating';
import Thanks from '../Thanks/Thanks';

function App() {
  const [submit, setSubmit] = useState(false);
  const [rating, setRating] = useState<number | null>(null);

  return (
    <div className='App'>
      {submit ? <Thanks rating={rating} /> : <Rating setSubmit={setSubmit} setRating={setRating} rating={rating} />}
      <Footer />
    </div>
  );
}

export default App;
