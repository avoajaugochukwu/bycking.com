import React from "react";

const HamburgerMenu = ({ color }) => {
  const mainColor = color === "white" ? "#ffffff" : "#06B6D4";
  return (
    <svg
      className="cursor-pointer"
      width="40"
      height="40"
      fill={mainColor}
    >
      <rect width="25" height="3"></rect>
      <rect y="10" width="25" height="3"></rect>
      <rect y="20" width="25" height="3"></rect>
    </svg>
  );
};

HamburgerMenu.defaultProps = {
  color: "white",
}

export default HamburgerMenu;
