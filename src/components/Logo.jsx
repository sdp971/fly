import { Link } from 'react-router-dom';
import FLY from "../assets/images/Logo_FLY.png";
import './Logo.css'

function Logo() {
  return (
    <div>
      <Link to="/">
      <img src={FLY} alt="Logo Femme Like You" className='FLY'/>
      </Link>
    </div>
  )
}

export default Logo;
