import React from 'react';
import './Hero.css';

import hand_icon from '../assests/hand_icon.png';
import arrow_icon from '../assests/arrow.png';
import hero_image from '../assests/hero_image.png';

export default function Hero() {
  return (
    <div className="hero">

      <div className="hero-left">

        <h2>NEW ARRIVALS ONLY</h2>

        <div className="hero-hand-icon">
      
          <img src={hand_icon} alt="hand" />
        </div>
        <div className='hero-left'>
    <p>NEW</p>
        <p>collections</p>
        <p>for everyone</p>
</div>
        <div className="hero-latest-button">
       <button>latest collection</button>
          <img className="icon" src={arrow_icon} alt="arrow" />
        </div>

      </div>

      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>

    </div>
  );
}