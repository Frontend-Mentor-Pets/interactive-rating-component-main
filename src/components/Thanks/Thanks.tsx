import { FC } from 'react';
import styles from './Thanks.module.scss';

type PropsType = {
  rating: number | null;
};

const Thanks: FC<PropsType> = ({ rating }) => {
  return (
    <div className={styles.thanks}>
      <p>You selected {rating} out of 5</p>
      <p> Thank you!</p>
      <p>
        We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in
        touch!
      </p>
    </div>
  );
};

export default Thanks;
