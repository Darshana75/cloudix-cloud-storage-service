import React from "react";
import "./LoginPage.scss";
import cloudImage from "../assets/cloud-image.png"; 

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="info-panel">
        <h2>Your Digital Life.</h2>
        <h2>Secured.</h2> 
        <ul>
          <li>🚀 Get 2GB free on sign up</li>
          <li>🔒 AES-256 encrypted storage</li>
          <li>📁 Access anywhere, anytime</li>
        </ul>
        <img src={cloudImage} alt="Cloud devices" />
      </div>
      <div className="form-panel">
        <div className="tabs">
          <span className="active">Login</span>
          <span>Sign Up</span>
        </div>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#" className="forgot">Forgot password?</a>
        <button className="login-btn">Login</button>

        <div className="divider">or</div> 

        <button className="google-btn">
      <img src="/src/assets/google-logo.png" alt="Google" className="google-icon" /> Continue with Google </button>

      </div>
    </div>
  );
}   