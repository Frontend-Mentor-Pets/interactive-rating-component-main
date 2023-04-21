import { FC } from 'react';
import styles from './Rating.scss';
import star from '../../assets/images/icon-star.svg';

type PropsType = {
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
  setRating: React.Dispatch<React.SetStateAction<number | null>>;
};

const Rating: FC<PropsType> = ({ setSubmit }) => {
  return (
    <div>
      <img src={star} alt='Star' />
      <p>ow did we do? Please let us know how we did with your support request.</p>
      <p>All feedback is appreciated to help us improve our offering!</p>
      <p>1 2 3 4 5</p>
      <button>Submit</button>H
    </div>
  );
};

export default Rating;
