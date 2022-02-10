/* eslint-disable @next/next/no-img-element */
import React from "react";
import Flickity from "react-flickity-component";

const SecondSlideShow = () => {

  const flickityOptions = {
    fullscreen: true,
    wrapAround: true,
    pageDots: false
  };
  return (
    <div className="flex flex-col-reverse sm:flex sm:flex-row bg-gray-100 mt-10 pb-7" >
      <div className="w-full sm:w-2/5 h-full pt-10 sm:pt-28">
        <div
          className="sm:h-60 h-30 sm:bg-white justify-items-center sm:mr-10"
          style={{ display: "grid" }}
        >
          <div className="self-center">
            <h3 className="text-center text-4xl sm:text-6xl">RACE</h3>
            <p className="text-center text-base sm:text-sm font-bold">UNBRIDLED SPEED</p>
          </div>
        </div>
      </div>
      <div className="sm:w-full my-0 sm:my-14 mx-1 sm:mx-20 md:mx-5">
        <Flickity options={flickityOptions} reloadOnUpdate>
          <div >
            <img
              src="/img/home_page/showcase/YetiCycles_160E_T1_Turq-removebg-preview.png"
              className="px-20"
              
              alt="showcase"
            />
            <div className="text-xl sm:text-3xl uppercase font-semibold text-center">
              <span className="">e-mtb for racing</span>
              <span className="text-neutral-400"> 160E</span>
            </div>
          </div>
          <div>
            <img
              src="/img/home_page/showcase/YetiCycles_SB115_T3_Turq_AXS-removebg-preview.png"
              className="px-20"
              alt="showcase"
            />
            <div className="text-xl sm:text-3xl uppercase font-semibold text-center">
              <span className="">deft on the downs</span>
              <span className="text-neutral-400"> SB115</span>
            </div>
          </div>
          <div>
            <img
              src="/img/home_page/showcase/YetiCycles_SB150_T1_Turq_CW-removebg-preview.png"
              className="px-20"
              alt="showcase"
            />
            <div className="text-xl sm:text-3xl uppercase font-semibold text-center">
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
