import FLY from "../assets/images/Logo_FLY_center.png";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div>
      <img src={FLY} alt="Logo Femme Like You" className={styles.FLY}/>
    </div>
  )
}

export default Logo;
