import React, { useState } from 'react';
import "tailwindcss/tailwind.css";
import '../index.css';
import AvatarIcon from './AvatarIcon';
import FavouritesIcon from './FavouritesIcon';
import CartIcon from './CartIcon';
import SmallIcons from './SmallIcons';
import HamburgerMenuIcon from './HamburgerMenuIcon';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav id="navbar" className="bg-efefef  p-1 fixed top-0 left-0 w-full h-20">
      <div className="flex items-center justify-between  mx-auto  px-10 relative">
        <Link to="/"  >
          <img
            className="h-20 pt-4 "
            src="https://res.cloudinary.com/dnqsbxztj/image/upload/v1691533047/InSylvis/logo_ixz1hi.png"
            alt="logo"
          />
        </Link>
        <div className='flex flex-col'>

            <div className="hidden md:flex ml-auto py-2">
            <SmallIcons/>
            </div>

                {/* Full Menu - shown on big screen */}
            <div className="hidden md:flex   bottom-1 top-auto ">
            <ul className="flex space-x-10 text-sm">
                <li>
                    <Link to="/" className="text-black hover:text-blue-300">ABOUT US</Link>
                </li>
                <li>
                    <Link to="/" className="text-black hover:text-blue-300">SHOP</Link>
                </li>
                <li>
                    <Link to="/" className="text-black hover:text-blue-300">VISIT</Link>
                </li>
                <li>
                    <Link to="/" className="text-black hover:text-blue-300">GALLERY</Link>
                </li>
                <li>
                    <Link to="/" className="text-black hover:text-blue-300">CONTACT</Link>
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
                    <Link to="/" className="text-black hover:text-blue-300">ABOUT US</Link>
                </li>
                <li>
                    <Link to="/" className="text-black hover:text-blue-300">SHOP</Link>
                </li>
                <li>
                    <Link to="/" className="text-black hover:text-blue-300">VISIT</Link>
                </li>
                <li>
                    <Link to="/" className="text-black hover:text-blue-300">GALLERY</Link>
                </li>t
                <li>
                    <Link to="/" className="text-black hover:text-blue-300">CONTACT</Link>
                </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
