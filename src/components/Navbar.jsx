import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="nav-container">
        <h1 className="page-title">Future Minds</h1>
        <div className="menu">
          <FaBars className="menu-icon" onClick={toggleMenu} />
          <ul className={isOpen ? 'show open' : 'hide'}>
            <li className="close-icon">
              <RiCloseLine onClick={toggleMenu} />
            </li>
            <li>
              <Link className="nav-ul-link" to="/">Home</Link>
            </li>
            <li>
              <Link className="nav-ul-link" to="/about">About</Link>
            </li>
            <li>
              <Link className="nav-ul-link" to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
