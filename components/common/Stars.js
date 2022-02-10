/* eslint-disable @next/next/no-img-element */
import React from "react";

const Stars = ({ number, type }) => {
  const parsedNumber = parseInt(number);
  const goldArray = Array(parsedNumber)
    .fill(1)
    .map((x, y) => x + y);

  const numberOfGrayStars = 5 - parsedNumber;

  let grayArray = [];
  
  if (numberOfGrayStars > 0) {
    grayArray = Array(numberOfGrayStars)
      .fill(1)
      .map((x, y) => x + y);
  }

  const size = type === "shopDetails" ? "w-4 h-4" : "w-3 w-3";
  const gap = type === "shopDetails" ? "gap-x-2" : "gap-x-1/5"


  return (
    <div className={`flex ${gap}`}>
      {goldArray.map((_, index) => (
        <img
          key={index}
          src="../svg/gold-star-svgrepo-com.svg"
          alt="gray-star"
          className={size}
        />
      ))}
      {grayArray.map((_, index) => (
        <img
          key={index}
          src="../svg/gray-star-svgrepo-com.svg"
          alt="gray-star"
          className={size}
        />
      ))}
    </div>
  );
};

Stars.defaultProps = {
  number: 1,
  type: "shopDetails"
}

export default Stars;
