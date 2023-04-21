import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>Challenge by </span>
      <a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>
        Frontend Mentor
      </a>
      <span>. Coded by </span>
      <a href='https://github.com/Bumble-sakh'>Igor Asessorov</a>
      <span>.</span>
    </footer>
  );
};

export default Footer;
