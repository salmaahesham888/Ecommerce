import React from "react";
import './Login.css';
export default function Login() {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        
        <h1>Log In</h1>

        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>

        <button>Continue</button>

      
      </div>
    </div>
  );
}