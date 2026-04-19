// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const Header: React.FC = () => {
//     const [isHidden, setIsHidden] = useState(false);
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [lastScrollY, setLastScrollY] = useState(0);
    
//     // Get current path to determine active state
//     const location = useLocation();
//     const isActive = (path: string) => location.pathname === path;

//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;
            
//             // Show/Hide logic
//             if (currentScrollY > lastScrollY && currentScrollY > 50) {
//                 setIsHidden(true);
//             } else {
//                 setIsHidden(false);
//             }

//             // Background logic
//             if (currentScrollY > 50) {
//                 setIsScrolled(true);
//             } else {
//                 setIsScrolled(false);
//             }

//             setLastScrollY(currentScrollY);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [lastScrollY]);

//     return (
//         <header 
//             className={`
//                 fixed top-0 left-0 w-full px-6 md:px-12 lg:px-[10vw] py-8 md:py-10 
//                 flex justify-between items-center z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
//                 ${isHidden ? '-translate-y-full' : 'translate-y-0'}
//                 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-5' : 'bg-transparent'}
//             `}
//         >
//             <Link to="/" className="uppercase text-lg font-semibold text-inherit hover:text-inherit hover:opacity-50 no-underline">
//                 Minh Do
//             </Link>
            
//             <nav className="flex gap-8 md:gap-10">
//                 <Link 
//                     to="/" 
//                     className={`text-inherit hover:text-inherit text-sm font-medium uppercase tracking-widest hover:opacity-100 transition-opacity ${isActive('/') ? 'opacity-100' : 'opacity-50'}`}
//                 >
//                     Work
//                 </Link>
//                 <Link 
//                     to="/about" 
//                     className={`text-inherit hover:text-inherit text-sm font-medium uppercase tracking-widest hover:opacity-100 transition-opacity ${isActive('/about') ? 'opacity-100' : 'opacity-50'}`}
//                 >
//                     About
//                 </Link>
//                 <a 
//                     target="_blank"
//                     href="https://drive.google.com/file/d/1M0Tlwq7YOs0olPEkVoLKGfujj29akQY6/view?usp=sharing"
//                     className="text-inherit hover:text-inherit text-sm font-medium uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity"
//                 >
//                     Resume
//                 </a>
//             </nav>
//         </header>
//     );
// };

// export default Header;

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isWorkActive =
    location.pathname === '/' || location.pathname.startsWith('/work/');
  const isAboutActive = location.pathname === '/about';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <header
    className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
      isScrolled ? 'bg-white/78 backdrop-blur-xl' : 'bg-transparent'
    }`}
  >
    <div className="mx-auto flex w-full max-w-[1720px] items-center justify-between px-4 py-5 md:px-12 md:py-7 lg:px-[10vw]">
      <Link
        to="/"
        className="text-[13px] font-semibold uppercase tracking-[0.02em] text-black transition-opacity hover:opacity-60 md:text-[15px]"
      >
        Minh Do
      </Link>

      <nav className="flex items-center gap-5 md:gap-10">
        <Link
          to="/"
          className={`text-[11px] font-medium uppercase tracking-[0.16em] transition-opacity md:text-[12px] md:tracking-[0.18em] ${
            isWorkActive ? 'text-black opacity-100' : 'text-black/45 hover:text-black/75'
          }`}
        >
          Work
        </Link>

        <Link
          to="/about"
          className={`text-[11px] font-medium uppercase tracking-[0.16em] transition-opacity md:text-[12px] md:tracking-[0.18em] ${
            isAboutActive ? 'text-black opacity-100' : 'text-black/45 hover:text-black/75'
          }`}
        >
          About
        </Link>

        <a
          href="https://drive.google.com/file/d/1M0Tlwq7YOs0olPEkVoLKGfujj29akQY6/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="text-[11px] font-medium uppercase tracking-[0.16em] text-black/45 transition-opacity hover:text-black/75 md:text-[12px] md:tracking-[0.18em]"
        >
          Resume
        </a>
      </nav>
    </div>
  </header>
);
};

export default Header;