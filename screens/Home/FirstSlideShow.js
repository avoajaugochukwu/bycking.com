/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import Flickity from "react-flickity-component";

const FirstSlideShow = () => {
  const flickityOptions = {
    fullscreen: true,
    wrapAround: true,
    pageDots: false,
  };

  const sliderList = [
    {
      src:"/img/home_page/showcase/yeti-arc.jpeg",
      name:"Legendary DNA",
      styled_name:" ARC"
    },
    {
      src:"/img/home_page/showcase/YetiCycles_SB165_T3_Moss.jpeg",
      name:"At home outside the tape",
      styled_name:" SB165"
    },
    {
      src:"/img/home_page/showcase/YetiCycles_SB130LR_T5_Watermelon_AXS_CW.jpeg",
      name:"Down to fun",
      styled_name:" SB140"
    },
    {
      src:"/img/home_page/showcase/yeti-arc.jpeg",
      name:"One bike that rules",
      styled_name:" SB130"
    }
  ]

  return (
    <div className="flex flex-col-reverse sm:flex sm:flex-row">
      <div className="sm:w-full my-0 sm:my-14 mx-1 sm:mx-20 md:mx-5">
        <Flickity options={flickityOptions} reloadOnUpdate>
          <div>
            <img
              src="/img/home_page/showcase/yeti-arc.jpeg"
              className="px-20"
              alt="showcase"
            />
            <div className="text-xl sm:text-3xl uppercase font-semibold text-center">
              <span className="">Legendary DNA</span>
              <span className="text-neutral-400"> ARC</span>
            </div>
          </div>
          <div>
            <img
              src="/img/home_page/showcase/YetiCycles_SB165_T3_Moss.jpeg"
              className="px-20"
              alt="showcase"
            />
            <div className="text-xl sm:text-3xl uppercase font-semibold text-center">
              <span className="">At home outside the tape</span>
              <span className="text-neutral-400"> SB165</span>
            </div>
          </div>
          <div>
            <img
              src="/img/home_page/showcase/YetiCycles_SB140LR_T5_Blanco.jpeg"
              className="px-20"
              alt="showcase"
            />
            <div className="text-xl sm:text-3xl uppercase font-semibold text-center">
              <span className="">Down to fun</span>
              <span className="text-neutral-400"> SB140</span>
            </div>
          </div>
          <div>
            <img
              src="/img/home_page/showcase/YetiCycles_SB130LR_T5_Watermelon_AXS_CW.jpeg"
              className="px-20"
              alt="showcase"
            />
            <div className="text-xl sm:text-3xl uppercase font-semibold text-center">
              <span className="">One bike that rules</span>
              <span className="text-neutral-400"> SB130</span>
            </div>
          </div>
        </Flickity>
      </div>
      {/*  */}
      <div className="w-full sm:w-2/5 h-full pt-10 sm:pt-28">
        <div
          className="sm:h-60 h-30 sm:bg-gray-100 justify-items-center sm:mr-10"
          style={{ display: "grid" }}
        >
          <div className="self-center">
            <h3 className="text-center text-4xl sm:text-6xl">RIP</h3>
            <p className="text-center text-base sm:text-sm font-bold">
              DOWN TO FUN
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSlideShow;
