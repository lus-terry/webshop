import React from 'react';
import FavouritesIcon from './FavouritesIcon';
import CartIcon from './CartIcon';
import AvatarIcon from './AvatarIcon';

const SmallIcons = () => {
  return (
    <div className="flex items-center space-x-1">
      <div className="w-8 h-8 flex items-center justify-center">
        <FavouritesIcon />
      </div>
      <div className="w-8 h-8 flex items-center justify-center">
        <CartIcon />
      </div>
      <div className="w-8 h-8 flex items-center justify-center">
        <AvatarIcon />
      </div>
    </div>
  );
};

export default SmallIcons;
