import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assests/logo.png';
import cart_icon from '../assests/cart_icon.png';
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>

      <div className='nav-logo'>
        <img src={logo} alt="logo" />
        <p><b>shopper</b></p>
      </div>

      <ul className='nav-menu'>
        <li onClick={() => setMenu("shop")}>
          <Link to="/shop">Shop</Link>
        </li>

        <li onClick={() => setMenu("women")}>
          <Link to="/womens">Women</Link>
        </li>

        <li onClick={() => setMenu("men")}>
          <Link to="/mens">Men</Link>
        </li>

        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids</Link>
</li>
        
      </ul>

      <div className="nav-login-cart">
        <div className="nav-actions">

          <Link to="/login">
            <button>Login</button>
          </Link>

          <Link to="/cart">
            <img src={cart_icon} alt="cart" />
          </Link>
{/* <link to="/cart">
<button>add to cart</button>
</link> */}
        </div>
      </div>

    </div>
  );
}