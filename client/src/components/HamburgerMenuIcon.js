import React from 'react';

const HamburgerMenuIcon = ({ width = 24, height = 25, color = "black" }) => {
  const iconStyle = {
    width: `${width}px`,
    height: `${height}px`,
    color: color,
  };

  return (
    <svg
      style={iconStyle}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
};

export default HamburgerMenuIcon;
