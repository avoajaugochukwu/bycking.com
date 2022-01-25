import React from "react";
import Flickity from "react-flickity-component";

const SecondSlideShow = () => {

  const flickityOptions = {
    fullscreen: true,
    wrapAround: true,
    pageDots: false
  };
  return (
    <div className="flex w-full h-96 mt-20 mb-56" >
      <div className="w-2/5 h-full pt-28">
        <div
          className="h-60 bg-gray-100 justify-items-center ml-10"
          style={{ display: "grid" }}
        >
          <div className="self-center">
            <h3 className="text-center text-6xl">RACE</h3>
            <p className="text-center font-bold">UNBRIDLED SPEED</p>
          </div>
        </div>
      </div>
      <div className="w-full mx-40 sm:mx-20 md:mx-5">
        <Flickity options={flickityOptions} reloadOnUpdate>
          <div >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/home_page/showcase/YetiCycles_160E_T1_Turq.jpeg"
              className="px-20"
              
              alt="showcase"
            />
            <div className="text-3xl uppercase font-semibold text-center">
              <span className="">e-mtb for racing</span>
              <span className="text-neutral-400"> 160E</span>
            </div>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/home_page/showcase/YetiCycles_SB115_T3_Turq_AXS.jpeg"
              className="px-20"
              alt="showcase"
            />
            <div className="text-3xl uppercase font-semibold text-center">
              <span className="">deft on the downs</span>
              <span className="text-neutral-400"> SB115</span>
            </div>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/home_page/showcase/YetiCycles_SB150_T1_Turq_CW.jpeg"
              className="px-20"
              alt="showcase"
            />
            <div className="text-3xl uppercase font-semibold text-center">
              <span className="">Unbridled speed</span>
              <span className="text-neutral-400"> SB150</span>
            </div>
          </div>
          
        </Flickity>
      </div>
    </div>
  );
};

export default SecondSlideShow;
