import React from 'react'
const CloseSign = ({ color= '#ffffff'}) => {
  return (
    <svg className="cursor-pointer" width="40" height="40" fill={color}>
      <line x1="1" y1="1"  x2="24" y2="24" stroke={color} strokeWidth="3" />
      <line x1="24" y1="1"  x2="1" y2="24" stroke={color} strokeWidth="3" />
    </svg>
  )
};

export default CloseSign;
