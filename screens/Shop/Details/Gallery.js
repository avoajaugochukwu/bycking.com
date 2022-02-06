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
    <div className="w-3/4" style={{height: "600px"}}>
      <Flickity options={flickityOptions} reloadOnUpdate>
        <div>
          <img src={bike?.image1} alt="showcase" className="px-32" />
        </div>
        <div>
          <img src={bike?.image2} alt="showcase" className="px-32" />
        </div>
        <div>
          <img src={bike?.image3} alt="showcase" className="px-32" />
        </div>
      </Flickity>
    </div>
  );
};

export default Gallery;
