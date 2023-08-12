import React from 'react';

const AvatarIcon = () => {
  return (
    <span className="inline-block rounded-full border-black border-2">
      <svg className="h-5 w-5 text-black" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4" />
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
    </svg>
    </span>
  );
};

export default AvatarIcon;
