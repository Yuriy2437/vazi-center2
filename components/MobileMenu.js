'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from '../styles/MobileMenu.module.css';

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Проверка на клиенте
    if (typeof window !== 'undefined') {
      setShowMenuButton(!['/menu', '/'].includes(pathname));
    }
  }, [pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div>
      {showMenuButton && (
        <button className={styles.menuButton} onClick={toggleMenu}>
          Menu
        </button>
      )}
      {isMenuOpen && (
        <div className={`${styles.menuModal} ${isMenuOpen ? styles.show : ''}`}>
          <Link href='/about' onClick={closeMenu}>
            About Us
          </Link>
          <Link href='/english_club' onClick={closeMenu}>
            English Club
          </Link>
          <Link href='/lectorium' onClick={closeMenu}>
            Lectorium
          </Link>
          <Link href='/music_club' onClick={closeMenu}>
            Music Club
          </Link>
          <Link href='/psychology_club' onClick={closeMenu}>
            Psychology Club
          </Link>
          <Link href='/kids_club' onClick={closeMenu}>
            Kids Club
          </Link>
          <Link href='/feedback' onClick={closeMenu}>
            All Feedbacks
          </Link>
          <Link href='/' onClick={closeMenu}>
            Home
          </Link>
          <button className={styles.closeButton} onClick={closeMenu}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
