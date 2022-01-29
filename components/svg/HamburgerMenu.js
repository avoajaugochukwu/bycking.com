import React from "react";

const HamburgerMenu = ({ color = "#ffffff" }) => {
  return (
    <svg className="cursor-pointer" viewBox="0 0 50 80"  fill={color}>
      <rect width="50" height="5"></rect>
      <rect y="15" width="50" height="5"></rect>
      <rect y="30" width="50" height="5"></rect>
    </svg>
  );
};

export default HamburgerMenu;
