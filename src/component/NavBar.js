import React from 'react';

import "./NavBar.css"
import Sidebar from './Sidebar/Sidebar';
import logo from './logo.webp'

function NavBar() {
  const date = new Date().toLocaleDateString();

  return (
    <div className="dashboard">
      <nav className="nav-header">
        <div className="logo">
           <img src={logo} alt="logo" /> 
          {/* <h1>Zcon</h1> */}
        </div>
        <div className="date">{date}</div>
        <div className="account">
          <div className="name">Piyush</div>
          <div className="settings">
            <i className="fas fa-cog"></i>
            <div>Account Settings</div>
          </div>
        </div>
      </nav>
      <div>
     <Sidebar/> 
      </div>
    </div>
  );
}

export default NavBar;
