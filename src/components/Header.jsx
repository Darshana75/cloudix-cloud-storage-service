import React from "react";
import './Header.scss';
import logo from '../assets/cloud-logo.png';

export default function Header({ onNavigate }) {
  return (
    <header className="header">
      <div className="logo" onClick={() => onNavigate('login')}>
        <img src={logo} alt="Cloudix Logo" />
        Cloudix
      </div>
      <nav>
      <a href="#" onClick={() => onNavigate('about')}>About</a>
        <a href="#">Features</a>
        <a href="#" onClick={() => onNavigate('plans')}>Plans</a>
        <a href="#">Help</a>
        <button className="signup-btn">Sign Up</button>
      </nav>
    </header>
  );
}
