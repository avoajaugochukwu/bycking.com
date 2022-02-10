import React from "react";
const CloseSign = ({ color }) => {
  const mainColor = color === "white" ? "#ffffff" : "#06B6D4";
  return (
    <svg
      className="cursor-pointer"
      width="40"
      height="40"
      fill={mainColor}
    >
      <line x1="1" y1="1" x2="24" y2="24" stroke={mainColor} strokeWidth="3" />
      <line x1="24" y1="1" x2="1" y2="24" stroke={mainColor} strokeWidth="3" />
    </svg>
  );
};

CloseSign.defaultProps = {
  color: "white",
};

export default CloseSign;
