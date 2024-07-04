import './Explication.css'
import Button from "../components/Button"
import image from '../assets/image.png' 
import { useEffect, useState } from 'react';


function Explication({ texte, onclick }) {
 const [showComponent, setShowComponent] = useState(false);

 useEffect(() => {
   setShowComponent(true);
 }, []);

  return (
    // <div className={`explaination-container ${showComponent ? 'fade-in':"" }`}>
    <div className={`explication-container ${showComponent ? 'show' : ''}`}>
      <img src={image} alt='' className='explication-image' />
      <p>{texte}</p>
      <div className='btn-next'>
        <Button onclick={onclick}>SUIVANT</Button>
      </div>
    </div>
  );
}

export default Explication
