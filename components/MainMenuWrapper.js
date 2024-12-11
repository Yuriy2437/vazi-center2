'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import MainMenu from './MainMenu';
import MobileMenu from './MobileMenu';

// const MainMenuWrapper = () => {
//   const pathname = usePathname();
//   const showMenu = pathname !== '/' && pathname !== '/menu';

//   if (!showMenu) {
//     return null;
//   }

//   return <MainMenu />;
// };

// export default MainMenuWrapper;

const MainMenuWrapper = () => {
  const pathname = usePathname();
  const [showMainMenu, setShowMainMenu] = useState(true);

  const checkScreenWidth = () => {
    setShowMainMenu(window.innerWidth >= 800);
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  const showMenu = pathname !== '/' && pathname !== '/menu';

  if (!showMenu) {
    return null;
  }

  return showMainMenu ? <MainMenu /> : <MobileMenu />;
};

export default MainMenuWrapper;
