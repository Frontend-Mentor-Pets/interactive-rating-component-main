import { FC } from 'react';
import styles from './Rating.module.scss';
import star from '../../assets/images/icon-star.svg';

type PropsType = {
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
  setRating: React.Dispatch<React.SetStateAction<number | null>>;
  currentRating: number | null;
};

const Rating: FC<PropsType> = ({ setSubmit, setRating, currentRating }) => {
  const ratings = [1, 2, 3, 4, 5];

  const ratingHandler = (rating: number) => {
    setRating(rating);
  };

  const submitHandler = () => {
    setSubmit(true);
  };

  return (
    <div className={styles.card}>
      <div className={styles.star}>
        <img src={star} alt='Star' />
      </div>

      <h1 className={styles.title}>How did we do?</h1>
      <p className={styles.subtitle}>
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our
        offering!
      </p>
      <ul className={styles.list}>
        {ratings.map((rating) => {
          return (
            <li key={rating}>
              <button
                onClick={() => ratingHandler(rating)}
                className={`${styles.rating} ${rating === currentRating && styles['rating_active']}`}
              >
                {rating}
              </button>
            </li>
          );
        })}
      </ul>
      <button onClick={submitHandler} disabled={!currentRating} className={styles.submit}>
        Submit
      </button>
    </div>
  );
};

export default Rating;
