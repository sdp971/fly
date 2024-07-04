import './Explication.css';
import Button from '../components/Button';
import image from '../assets/image.png';
import { useEffect, useState } from 'react';
import { useScore } from '../context/UserProvider';

function Explication({ texte, onclick }) {
  const [showComponent, setShowComponent] = useState(false);

  const { showResultBtn } = useScore();

  useEffect(() => {
    setShowComponent(true);
    
  }, []);

  return (
    // <div className={`explaination-container ${showComponent ? 'fade-in':"" }`}>
    <div
      className={`main-explication-container ${showComponent ? 'show' : ''}`}
    >
      <div className='explication-container'>
        <img src={image} alt='' className='explication-image' />
        <p>{texte}</p>
      </div>
      <div className='btn-next'>
        <Button onclick={onclick} showResultBtn={showResultBtn}>
          {showResultBtn ? 'VOIR RESULTATS' : 'SUIVANT'}
        </Button>
      </div>
    </div>
  );
}

export default Explication;
