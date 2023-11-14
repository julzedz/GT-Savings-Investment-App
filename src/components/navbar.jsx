import React from 'react';
import logo from '../assets/bank-leaf.png';

const CustomNavbar = () => (
  <>
    <div className="desktop-menu">
      <div className="logo-div">
        <img src={logo} alt="logo" />
        <span>GT SAVINGS BANK</span>
      </div>
      <ul className="menu">
        <li>Get Started</li>
        <li href="/banking">Banking & Borrowing</li>
        <li>Investment Services</li>
        <li>Support</li>
      </ul>
    </div>
  </>
);

export default CustomNavbar;
