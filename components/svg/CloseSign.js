import React from 'react';

const CloseSign = ({ color= '#ffffff'}) => {
  return (
    <div className="h-10 w-10 ">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {/* <img src="/svg/cancel-close-svgrepo-com.svg" alt="close menu" /> */}
      <svg viewBox="0 0 50 50" className="border-2 border-green-100">
        <line x1="120" y1="0"  x2="120" y2="250" stroke="red" strokeWidth="20" fill="red" />
        <line x1="0" y1="120"  x2="250" y2="120" stroke="red" strokeWidth="20" fill="red" />
      </svg>
    </div>
  )
};

export default CloseSign;
