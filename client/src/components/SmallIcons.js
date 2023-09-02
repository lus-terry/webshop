import React from 'react';
import FavouritesIcon from './FavouritesIcon';
import CartIcon from './CartIcon';
import AvatarIcon from './AvatarIcon';
import { Link } from 'react-router-dom';


const SmallIcons = ({ cartTotalQuantity, onLogout  }) => {
  
  const Logout = () => {
    onLogout();
  };
  return (
    <div className="flex items-center justify-center space-x-1">
      <div className="w-8 h-8 flex items-center justify-center">
        <Link to="/favourites" ><FavouritesIcon /></Link>
      </div>
      <div className="w-8 h-8 flex items-center justify-center">
        <Link to="/cart" ><CartIcon cartTotalQuantity={cartTotalQuantity}/></Link>
      </div>
      {/**TODO: skuzit zas bez pt-1 nisu poravnati */}
      <div className="w-8 h-8 flex pt-1 justify-center">
        <button onClick={Logout}><AvatarIcon/></button>
      </div>
    </div>
  );
};

export default SmallIcons;
