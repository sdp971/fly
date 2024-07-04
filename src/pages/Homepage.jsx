import { useNavigate } from 'react-router-dom';
import FLY from './../assets/images/Logo_FLY_center.png'
import './Homepage.css';



function Homepage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/quiz")
    
  }
  return (
    <div>
      <div className='logoHomepage'>
        <img src={FLY} alt='Logo Femme Like You' className='FLYHP' />
      </div>

      <div className='containerButton'>
        <button className='bouton' onClick={handleClick}>COMMENCER</button>
      </div>
    </div>
  );
}

export default Homepage;
