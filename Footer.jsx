import React from 'react'
import footer_logo from '../assests/logo_big.png'
import instgram_logo from '../assests/instagram_icon.png'
import whatsap_logo from '../assests/whatsapp_icon.png'

import pintrest_logo from '../assests/pintester_icon.png'
import './Footer.css';
export default function Footer() {
  return (
  <div className='footer'>
  
  <div className='footer_logo'>
    <img src={footer_logo} alt="footer logo" />
    <p>SHOPPER</p>
  </div>

  <div className='ss'>
    
    <ul className='footer-links'>
      <li>Company</li>
      <li>Products</li>
      <li>Offices</li>
      <li>About</li>
      <li>Contact</li>
    </ul>

    <div className="footer_social_icon">
      
      <div className='footer-icons-container'>
        <img src={instgram_logo} alt="instagram" />
      </div>

      <div className='footer-icons-container'>
        <img src={pintrest_logo} alt="pinterest" />
      </div>

      <div className='footer-icons-container'>
        <img src={whatsap_logo} alt="whatsapp" />
      </div>

    </div>

  </div>

</div>
  )
}
