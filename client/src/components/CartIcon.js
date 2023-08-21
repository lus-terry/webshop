import React from 'react';

const CartIcon = ({ cartTotalQuantity }) => {
  return (
 
    <span className="relative">
        <svg className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
        </svg> 
        <span className="absolute top-1 right-0 flex items-center justify-center h-3.5 w-3.5 rounded-full bg-red-500 text-white pb-1 pl-0.5 "
            style={{ fontSize: '1rem', fontWeight: 100}}>
             {cartTotalQuantity}
        </span>
    </span>
  );
};

export default CartIcon;
