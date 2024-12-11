'use client';

import { useState } from 'react';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import '../styles/MobileMenu.module.css';

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <button className='menu-button' onClick={toggleMenu}>
        Menu
      </button>
      <div className={`menu-modal ${isMenuOpen ? 'show' : ''}`}>
        <Link to='/about' onClick={closeMenu}>
          About Us
        </Link>
        <Link to='/english_club' onClick={closeMenu}>
          English Club
        </Link>
        <Link to='/lectorium' onClick={closeMenu}>
          Lectorium
        </Link>
        <Link to='/music_club' onClick={closeMenu}>
          Music Club
        </Link>
        <Link to='/psychology_club' onClick={closeMenu}>
          Psychology Club
        </Link>
        <Link to='/kids_club' onClick={closeMenu}>
          Kids Club
        </Link>
        <Link to='/feedback' onClick={closeMenu}>
          All Feedbacks
        </Link>
        <Link to='/' onClick={closeMenu}>
          Home
        </Link>
        <button
          onClick={closeMenu}
          style={{ marginTop: '20px', backgroundColor: 'red', color: 'white' }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
