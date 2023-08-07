import React, { useState } from 'react';
import "tailwindcss/tailwind.css";
import '../index.css';
import AvatarIcon from './AvatarIcon';
import FavouritesIcon from './FavouritesIcon';
import CartIcon from './CartIcon';
import SmallIcons from './SmallIcons';
import HamburgerMenuIcon from './HamburgerMenuIcon';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-blue-500 p-1 fixed top-0 left-0 w-full h-20">
      <div className="flex items-center justify-between h-full  mx-auto px-10 relative">

        <div className="text-white font-bold text-xl">Logo</div>

        <div className='flex flex-col'>

            <div className="hidden md:flex ml-auto py-2">
            <SmallIcons/>
            </div>

                {/* Full Menu - shown on big screen */}
            <div className="hidden md:flex   bottom-1 top-auto ">
            <ul className="flex space-x-4 text-sm">
                <li>
                <a href="#" className="text-white hover:text-blue-300">ABOUT US</a>
                </li>
                <li>
                <a href="#" className="text-white hover:text-blue-300">SHOP</a>
                </li>
                <li>
                <a href="#" className="text-white hover:text-blue-300">VISIT</a>
                </li>
                <li>
                <a href="#" className="text-white hover:text-blue-300">GALLERY</a>
                </li>
                <li>
                <a href="#" className="text-white hover:text-blue-300">CONTACT</a>
                </li>
            </ul>
            </div>
        
        </div>

        {/* Small Icons - shown on big screens */}
        
        

        

        {/* smallIcons+HamburgerMenu-shown on small screens */}
        <div className="md:hidden flex items-center ">
          <SmallIcons />
          <button
            className='px-2'
            onClick={toggleMenu}
            style={{
              display: 'inline-block',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <HamburgerMenuIcon />
          </button>
        </div>

    

        {/* Hamburger Menu - Mobile */}
        {showMenu && (
          <div className="md:hidden items-center absolute top-16 right-0 ">
            <ul className="flex flex-col space-y-2 text-sm bg-blue-500">
              <li>
                <a href="#" className="text-white hover:text-blue-300">ABOUT US</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-300">SHOP</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-300">VISIT</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-300">GALLERY</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-300">CONTACT</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
