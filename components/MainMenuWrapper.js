'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import MainMenu from './MainMenu';

const MobileMenu = dynamic(() => import('./MobileMenu'), { ssr: false });

const MainMenuWrapper = () => {
  const pathname = usePathname();
  const [showMainMenu, setShowMainMenu] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  const checkScreenWidth = () => {
    if (typeof window !== 'undefined') {
      setShowMainMenu(window.innerWidth >= 800);
    }
  };

  const showMenu = pathname !== '/' && pathname !== '/menu';

  if (!isMounted || !showMenu) {
    return null;
  }

  return showMainMenu ? <MainMenu /> : <MobileMenu />;
};

export default MainMenuWrapper;
