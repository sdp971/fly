import { useNavigate, Link } from 'react-router-dom';
import FLY from './../assets/images/Logo_FLY_center.png'
import GIF from "../assets/images/beyonce.webp";

function Resultpage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/quiz")
     window.location.reload();

  }
  return (
    <div>
      <div className='logoResult'>
      <Link to ="/" refresh="true">
        <img src={FLY} alt='Logo Femme Like You' className='FLY-result' />
      </Link>
      </div>

      <div className='result-container'>
        <div className='result-text'>
          <img src={GIF} alt="Who run the world ? Girls" />
        </div>      
        <div className='container-restart'>
           <Link to ="/quiz" refresh="true">
          <button className='bouton' onClick={handleClick}>RECOMMENCER</button>
           </Link>
      </div>
      </div>
    </div>
  );
}

export default Resultpage;
