import React from "react";

const HamburgerMenu = ({ color = "#ffffff" }) => {
  return (
    <svg className="cursor-pointer" width="40" height="40" fill={color}>
      <rect width="35" height="3"></rect>
      <rect y="10" width="35" height="3"></rect>
      <rect y="20" width="35" height="3"></rect>
    </svg>
  );
};

export default HamburgerMenu;
