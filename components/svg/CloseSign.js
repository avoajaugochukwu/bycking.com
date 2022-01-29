import React from 'react';

const CloseSign = ({ color= '#ffffff'}) => {
  return (
    <svg className="cursor-pointer" width="40" height="40" fill={color}>
      <line x1="19" y1="0"  x2="19" y2="40" stroke={color} strokeWidth="3" />
      <line x1="0" y1="19"  x2="37" y2="19" stroke={color} strokeWidth="3" />
    </svg>
  )
};

export default CloseSign;
