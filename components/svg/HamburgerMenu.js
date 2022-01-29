import React from "react";

const HamburgerMenu = ({ color = '#ffffff' }) => {
  return (
    <div className="w-20 h-20 text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {/* <img src="/img/icons8-horizontal-separated-bars-representing-hamburger-menu-layout-50.png" alt="hamburger menu" /> */}
      <svg viewBox="0 0 100 80" width="60" height="60" fill={color}>
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>

        
        <rect y="90" width="100" height="20"></rect>
        
      </svg>
    </div>
  );
};

export default HamburgerMenu;
