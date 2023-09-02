import React from 'react';

const CartIconSimple = ({ cartTotalQuantity }) => {
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
  
    </span>
  );
};

export default CartIconSimple;
