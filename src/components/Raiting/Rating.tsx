import { FC } from 'react';
import styles from './Rating.module.scss';
import star from '../../assets/images/icon-star.svg';

type PropsType = {
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
  setRating: React.Dispatch<React.SetStateAction<number | null>>;
  rating: number | null;
};

const Rating: FC<PropsType> = ({ setSubmit, setRating, rating }) => {
  const onClickHandler = () => {
    setSubmit(true);
  };

  return (
    <div className={styles.rating}>
      <img src={star} alt='Star' />
      <p>How did we do? Please let us know how we did with your support request.</p>
      <p>All feedback is appreciated to help us improve our offering!</p>
      <ul className={styles.list}>
        <li>
          <button onClick={() => setRating(1)}>1</button>
        </li>
        <li>
          <button onClick={() => setRating(2)}>2</button>
        </li>
        <li>
          <button onClick={() => setRating(3)}>3</button>
        </li>
        <li>
          <button onClick={() => setRating(4)}>4</button>
        </li>
        <li>
          <button onClick={() => setRating(5)}>5</button>
        </li>
      </ul>
      <button onClick={onClickHandler} disabled={!rating}>
        Submit
      </button>
    </div>
  );
};

export default Rating;
