import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import '../index.css';
import SmallIcons from './SmallIcons';
import HamburgerMenuIcon from './HamburgerMenuIcon';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import '../index.css';
import { clearCart, getTotals } from "../features/cartSlice";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const {cartTotalQuantity} = useSelector(state => state.cart)
  const [username, setUsername] = useState("");
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const dispatch = useDispatch();

  
  const handleClearCart = () => {
    dispatch(clearCart());
};

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      );

      
      const { status, user, role } = data;
      setUsername(user);
      if (!status) {
        removeCookie("token");
        navigate("/login");
      } 
    };
    verifyCookie();
  }, );

  const Logout = () => {
  
    removeCookie("token");
    localStorage.removeItem('role');
    handleClearCart();
    dispatch(getTotals());
    navigate("/signup");
  };

  

  return (
    <nav id="navbar" className="razmaknut_text  fixed top-0 left-0 w-full h-20 z-10" style={{ backgroundColor: '#f6efe7', opacity: '90%'} }>
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
            <SmallIcons cartTotalQuantity={cartTotalQuantity} onLogout={Logout}/>
            </div>

                {/* Full Menu - shown on big screen */}
            <div className="hidden md:flex   bottom-1 top-auto ">
            <ul className="flex space-x-10 text-sm">
                <li>
                    <Link to="/aboutUs" className="text-black hover:text-blue-300 " >ABOUT US</Link>
                </li>
                <li>
                    <Link to="/shop" className="text-black hover:text-blue-300">SHOP</Link>
                </li>
                <li>
                    <Link to="/visit" className="text-black hover:text-blue-300">VISIT</Link>
                </li>
                <li>
                    <Link to="/gallery" className="text-black hover:text-blue-300">GALLERY</Link>
                </li>
                <li>
                    <Link to="/contact" className="text-black hover:text-blue-300">CONTACT</Link>
                </li>
            </ul>
            </div>
        
        </div>

        {/* Small Icons - shown on big screens */}
        
        

        

        {/* smallIcons+HamburgerMenu-shown on small screens */}
        <div className="md:hidden flex items-center ">
          <SmallIcons cartTotalQuantity={cartTotalQuantity} onLogout={Logout}/>
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
                    <Link to="/aboutUs" className="text-black hover:text-blue-300">ABOUT US</Link>
                </li>
                <li>
                    <Link to="/shop" className="text-black hover:text-blue-300">SHOP</Link>
                </li>
                <li>
                    <Link to="/visit" className="text-black hover:text-blue-300">VISIT</Link>
                </li>
                <li>
                    <Link to="/gallery" className="text-black hover:text-blue-300">GALLERY</Link>
                </li>t
                <li>
                    <Link to="/contact" className="text-black hover:text-blue-300">CONTACT</Link>
                </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
