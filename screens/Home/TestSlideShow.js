import React, { useState } from "react";
import LeftChevron from "../../components/svg/LeftChevron";
import RightChevron from "../../components/svg/RightChevron";
import styles from "./Home.module.scss";

const TestSlideShow = ({ data }) => {
  const { first_slideshow } = data;

  const [current, setCurrent] = useState(0);
  const length = first_slideshow.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      <section className="flex mb-40">
        <div
          className="w-full sm:mx-20 flex relative"
          style={{ height: "80vh" }}
        >
          <div onClick={prevSlide} className="w-20 bg-gray-400">
            <LeftChevron />
          </div>

          <div className="items-center relative w-full h-full overflow-hidden">
            <div className="">
              {first_slideshow.map((imageItem, index) => (
                <div key={index} className="">
                  <div
                    key={index}
                    className={`${styles.backgroundSlider} 
                  ${index === current ? styles.active : ""}
                  h-[50em]`}
                    style={{
                      backgroundImage: `url(${imageItem.image})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div className="absolute top-[30rem]">
                    <p className="text-9xl">
                      {first_slideshow[current]?.first_name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div onClick={nextSlide} className="w-20 bg-gray-400 cursor-pointer">
            <RightChevron />
          </div>
        </div>
        {/* ------------------------------------------- */}
        <div className="w-1/4 h-full pt-28 px-10">
          <div
            className="h-60 bg-gray-100 justify-items-center"
            style={{ display: "grid" }}
          >
            <div className="self-center">
              <h3 className="text-center text-6xl">RIP</h3>
              <p className="text-center font-bold">DOWN TO FUN</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestSlideShow;
