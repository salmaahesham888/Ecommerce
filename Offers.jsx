import React from 'react';
import exclusive_image from '../assests/exclusive_image.png';
import './Offers.css';
export default function Offers() {
  return (
    <div className='offers'>

      <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <h5>Only on best sellers products</h5>
        <button>Check now</button>
      </div>

      <div className='offers-right'>
        <img src={exclusive_image} alt="offer" />
      </div>

    </div>
  );
}
