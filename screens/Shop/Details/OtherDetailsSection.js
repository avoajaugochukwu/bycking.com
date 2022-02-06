/* eslint-disable @next/next/no-img-element */
import React from "react";

const OtherDetailsSection = ({ bike }) => {
  console.log(bike);
  if (!bike) {
    // Add skeleton
    return "Loading bike";
  }
  return (
    <div className="w-1/4">
      <div className="flex gap-x-2">
        <img
          src="../svg/gold-star-svgrepo-com.svg"
          alt="gray-star"
          className="w-4 h-4"
        />
        <img
          src="../svg/gold-star-svgrepo-com.svg"
          alt="gray-star"
          className="w-4 h-4"
        />
        <img
          src="../svg/gold-star-svgrepo-com.svg"
          alt="gray-star"
          className="w-4 h-4"
        />
        <img
          src="../svg/gold-star-svgrepo-com.svg"
          alt="gray-star"
          className="w-4 h-4"
        />
        <img
          src="../svg/gray-star-svgrepo-com.svg"
          alt="gray-star"
          className="w-4 h-4"
        />
      </div>

      <h1 className="text-2xl font-black mt-2 mb-14">{bike?.name}</h1>

      <div className="mt-5 pb-5 border-b-2 border-t-gray-100">
        <span className="font-bold">Frame shape</span>
        <span className="ml-5 font-extralight">{bike?.frameShape}</span>
      </div>

      <div className="mt-5 pb-5 border-b-2 border-t-gray-100">
        <span className="font-bold">Weight</span>
        <span className="ml-5 font-extralight">{bike?.weight}</span>
      </div>
    </div>
  );
};

export default OtherDetailsSection;
