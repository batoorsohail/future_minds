import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="nav-container">
        <h1>Future Minds</h1>
        <div className="menu">
          <FaBars className="menu-icon" onClick={toggleMenu} />
          <ul className={isOpen ? 'show' : 'hide'}>
            <li>
              <Link className="nav-ul-link" to="/">Home</Link>
            </li>
            <li>
              <Link className="nav-ul-link" to="/About">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
