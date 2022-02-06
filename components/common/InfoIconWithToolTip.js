/* eslint-disable @next/next/no-img-element */
import React from 'react';
const svg = '/svg/gray-info-circle.svg'

const InfoIconWithToolTip = ({ message }) => {
  return (<div className="relative flex flex-col items-center group mt-1 ml-3">
    <img src={svg} alt="whiteCart" className="" />
    <div className="absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex">
      <span style={{width: '300px'}} className="cursor-pointer font-light relative w-full z-10 p-2 text-xs leading-relaxed text-gray-800 whitespace-no-wrap bg-white shadow-lg">
        {message}
      </span>
      <div className="w-3 h-3 -mt-2 rotate-45 z-10 bg-white shadow-lg"></div>
    </div>
  </div>);
};

export default InfoIconWithToolTip;
