import './Explication.css'
import image from '../assets/image.png' 
import { useEffect, useState } from 'react';


function Explication({ texte }) {
 const [showComponent, setShowComponent] = useState(false);

 useEffect(() => {
   setShowComponent(true);
 }, []);
  return (
    // <div className={`explaination-container ${showComponent ? 'fade-in':"" }`}>
    <div className={`explication-container ${showComponent ? 'show' : ''}`}>
      <img src={image} alt='' className='explication-image' />
      <p>{texte}</p>
    </div>
  );
}

export default Explication
