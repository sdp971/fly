import Logo from '../components/Logo';
import styles from "./Homepage.module.css";


function Homepage() {
  return (
    <div>
      <Logo />
      <div className={styles.containerButton}>
        <button className={styles.bouton}>COMMENCER</button>
      </div>
    </div>
  );
}

export default Homepage;
