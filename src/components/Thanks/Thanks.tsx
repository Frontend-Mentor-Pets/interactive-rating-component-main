import { FC } from 'react';
import styles from './Thanks.module.scss';
import image from '../../assets/images/illustration-thank-you.svg';

type PropsType = {
  rating: number | null;
};

const Thanks: FC<PropsType> = ({ rating }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt='Illustration' />
      </div>
      <p className={styles.rating}>You selected {rating} out of 5</p>
      <h1 className={styles.title}> Thank you!</h1>
      <p className={styles.subtitle}>
        We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in
        touch
      </p>
    </div>
  );
};

export default Thanks;
