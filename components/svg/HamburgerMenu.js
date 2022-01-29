import React from "react";

const HamburgerMenu = ({ color = "#ffffff" }) => {
  return (
    <svg viewBox="0 0 100 80" width="60" height="60" fill={color}>
      <rect width="60" height="8"></rect>
      <rect y="20" width="60" height="8"></rect>
      <rect y="40" width="60" height="8"></rect>
    </svg>
  );
};

export default HamburgerMenu;
