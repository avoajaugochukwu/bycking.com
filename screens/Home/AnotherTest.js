import React, { useState, useEffect } from "react";
import Image from "next/image";

import styles from "./Home.module.scss";

const AnotherTest = ({ data }) => {
  const { first_slideshow } = data;

  const [sliderState, setSliderState] = useState({
    current: 1,
    afterCurrent: 0,
  });

  const [nextClicked, setNextClicked] = useState(false)
  const [previousClicked, setPreviousClicked] = useState(false)

  const length = first_slideshow.length;

  useEffect(() => {
    setTimeout(() => {
      // changeImage();
    }, 4000);
  });

  useEffect(() => {
    setTimeout(() => {
      setNextClicked(false);
      setPreviousClicked(false)
    }, 1000)
  }, [nextClicked, previousClicked, setNextClicked, setPreviousClicked])

  const changeImage = () => {
    const newCurrent =
      sliderState.current + 1 > length - 1 ? 0 : sliderState.current + 1;

    const newAfterCurrent = newCurrent - 1 < 0 ? length - 1 : newCurrent - 1;

    setSliderState({ current: newCurrent, afterCurrent: newAfterCurrent });
    setNextClicked(true)
    // console.log(sliderState)
  };

  const next = () => {
    changeImage();
  };

  const previous = () => {
    const newCurrent =
      sliderState.current - 1 < 0 ? length - 1 : sliderState.current - 1;

    const newAfterCurrent = newCurrent + 1 < 0 ? length - 1 : newCurrent + 1;

    setSliderState({ current: newCurrent, afterCurrent: newAfterCurrent });
    setPreviousClicked(true)
  };

  return (
    <>
      <section className="flex">
        <div className="w-full" style={{ height: "80vh" }}>
          <p onClick={previous}>Previous</p>
          <p onClick={next}>Next</p>
          <div className="items-center relative w-full h-full overflow-hidden">
            {first_slideshow.map((imageItem, index) => (
              <div key={index}>
                <div
                  key={index}
                  className={`${styles.backgroundSlider} 
              ${index === sliderState.current ? styles.bsActive : ""}
              ${index === sliderState.afterCurrent && nextClicked ? styles.bsNext : ""}
              ${index === sliderState.afterCurrent && previousClicked ? styles.bsPrevious : ""}
              `}
                  style={{
                    backgroundImage: `url(${imageItem.image})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <p>{imageItem.first_name}</p>
              </div>
            ))}
          </div>
        </div>

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

export default AnotherTest;
