import React, { useState, useEffect } from "react";

import styles from "./Home.module.scss";
// import LeftButton from "./LeftButton"

const TestSlideShowCarousel = ({ data }) => {
  const { first_slideshow } = data;

  const slideLength = first_slideshow.length - 1;

  const [state, setState] = useState({
    previous: slideLength,
    current: 0,
    next: 1,
  });

  const [nextClicked, setNextClicked] = useState(false)
  const [previousClicked, setPreviousClicked] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setPreviousClicked(false)
      setNextClicked(false)
    }, 2000)
  }, [nextClicked, previousClicked])

  const nextSlide = () => {
    const { current } = state;
    const newCurrent = current + 1 === slideLength ? 0 : current + 1;
    const newNext = newCurrent + 1 === slideLength ? 0 : newCurrent + 1;
    const newPrevious = current;

    setState({
      current: newCurrent,
      next: newNext,
      previous: newPrevious,
    });

    // console.log(state.previous, state.current, state.next);
  };

  const prevSlide = () => {
    setPreviousClicked(true)
    const { current, next } = state;

    const newCurrent = current - 1 < 0 ? slideLength : current - 1;
    const newNext = next - 1 < 0 ? slideLength : next - 1;
    const newPrevious = newCurrent - 1 < 0 ? slideLength : newCurrent - 1;;
    
    setState({
      current: newCurrent,
      next: newNext,
      previous: newPrevious,
    });

    
  };

  // console.log(state.previous, state.current, state.next);

  return (
    <>
      <section className="flex">
        <div className="w-full" style={{ height: "80vh" }}>
          <p onClick={prevSlide} className="">
            Previous
          </p>
          <p onClick={nextSlide}>next</p>
          <div className="items-center relative w-full h-full overflow-hidden">
            {first_slideshow.map((image, index) => {
              {state.previous === index ? console.log("previous") : console.log(index)}
              {state.previous === index ? console.log("previous") : console.log(index)}
              {state.current === index ? console.log("current") : console.log(index)}
              {state.next === index ? console.log("next") : console.log(index)}
              
              
            })}
            {console.log('-----')}
            {first_slideshow.map((imageItem, index) => (
              
                <div
                  key={index}
                  className={`${styles.backgroundSlider} 
                    ${state.current > index ? "previous" : ""}
                    ${previousClicked &&  state.current > index ? "carousel-item-prev" : ""}
                    ${state.current === index ? "current" : ""}
                    ${state.current < index ? "next" : ""}
                    ${index === index ? index : index}
                  `}
                  style={{
                    backgroundImage: `url(${imageItem.image})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                // <p>{imageItem.first_name}</p>
              
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

export default TestSlideShowCarousel;
