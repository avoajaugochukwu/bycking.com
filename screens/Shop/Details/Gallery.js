/* eslint-disable @next/next/no-img-element */
import React from "react";
import Flickity from "react-flickity-component";

const Gallery = ({ bike }) => {
  const flickityOptions = {
    fullscreen: true,
    wrapAround: true,
    pageDots: false,
  };

  if (!bike) {
    // Add skeleton
    return "Loading bike";
  }

  return (
    <div className="w-full sm:w-3/4 sm:mt-14">
      <div>
        <Flickity options={flickityOptions} reloadOnUpdate>
          <div>
            <img src={bike?.image1} alt="showcase" className="px-10 sm:px-32" />
          </div>
          <div>
            <img src={bike?.image2} alt="showcase" className="px-10 sm:px-32" />
          </div>
          <div>
            <img src={bike?.image3} alt="showcase" className="px-10 sm:px-32" />
          </div>
        </Flickity>
      </div>
      {/* ----------------------------------------------- */}
      <div>
      <div className="flex justify-center">
        <img src={bike?.logo} alt={bike?.brand} className="w-20 h-10" />
        <div className="ml-4 mt-3 pl-4 border-l border-l-gray-300">
        <span className="font-normal">Wheel</span>
        <span className="ml-2 font-extralight">{bike?.wheel}</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Gallery;
