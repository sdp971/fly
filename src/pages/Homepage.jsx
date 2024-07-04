import Logo from '../components/Logo';
import Question from '../components/Question';
import FLY from '../assets/images/Logo_FLY_center.png';
import Question2 from '../components/Question';

function Homepage() {
  return (
    <div>
      <div className='logoHomepage'>
        <img src={FLY} alt='Logo Femme Like You' className='FLYHP' />
      </div>

      <div className='containerButton'>
        <button className='bouton'>COMMENCER</button>
      </div>
    </div>
  );
}

export default Homepage;
