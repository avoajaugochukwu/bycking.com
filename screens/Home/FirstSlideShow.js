import React from "react";
import Flickity from "react-flickity-component";

const FirstSlideShow = () => {
  const flickityOptions = {
    fullscreen: true,
    wrapAround: true,
    pageDots: false
  };

  return (
    <div className="flex">
      <div className="w-full my-14 mx-40 sm:mx-20 md:mx-5">
        <Flickity options={flickityOptions} reloadOnUpdate>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/home_page/showcase/yeti-arc.jpeg"
              className="px-20"
              alt="showcase"
            />
            <div className="text-3xl uppercase font-semibold text-center">
              <span className="">Legendary DNA</span>
              <span className="text-neutral-400"> ARC</span>
            </div>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/home_page/showcase/YetiCycles_SB165_T3_Moss.jpeg"
              className="px-20"
              alt="showcase"
            />
            <div className="text-3xl uppercase font-semibold text-center">
              <span className="">At home outside the tape</span>
              <span className="text-neutral-400"> SB165</span>
            </div>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/home_page/showcase/YetiCycles_SB140LR_T5_Blanco.jpeg"
              className="px-20"
              alt="showcase"
            />
            <div className="text-3xl uppercase font-semibold text-center">
              <span className="">Down to fun</span>
              <span className="text-neutral-400"> SB140</span>
            </div>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/home_page/showcase/YetiCycles_SB130LR_T5_Watermelon_AXS_CW.jpeg"
              className="px-20"
              alt="showcase"
            />
            <div className="text-3xl uppercase font-semibold text-center">
              <span className="">One bike that rules</span>
              <span className="text-neutral-400"> SB130</span>
            </div>
          </div>
        </Flickity>
      </div>
      {/*  */}
      <div className="w-2/5 h-full pt-28">
        <div
          className="h-60 bg-gray-100 justify-items-center mr-10"
          style={{ display: "grid" }}
        >
          <div className="self-center">
            <h3 className="text-center text-6xl">RIP</h3>
            <p className="text-center font-bold">DOWN TO FUN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSlideShow;
