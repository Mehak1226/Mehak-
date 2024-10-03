import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';

export default function Layout() {
  return (
    <>
      <h1>My Portfolio</h1>
      <div className="navbar">
        <img src={logo} alt="Custom Logo" style={{ width: '50px', height: '50px' }} />
        
      <nav><Link to="/">Home</Link></nav>
      <nav> <Link to="/about">About</Link></nav>
      <nav><Link to="/Services">Services</Link></nav>
      <nav> <Link to="/project">Project</Link></nav>
      <nav> <Link to="/contact">Contact</Link></nav>
         <br/>
      <hr />
      </div>
    
    </>
    
  );
}

