import styles from './Footer.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Challenge by
      <a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>
        Frontend Mentor
      </a>
      . Coded by <a href='https://github.com/Bumble-sakh'>Igor Asessorov</a>.
    </footer>
  );
};

export default Footer;
