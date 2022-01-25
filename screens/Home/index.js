import React from "react";
// import AnotherTest from "./AnotherTest";
import FirstSlideShow from "./FirstSlideShow";

import Hero from "./Hero";
import SecondSlideShow from "./SecondSlideShow";
// import TestSlideShow from "./TestSlideShow";
// import TestSlideShowCarousel from "./TestSlideShowCarousel";


const HomeScreen = ({data}) => {
  
  return (
    <div className="">
      <div className="relative">
      <Hero />
      </div>
      <div className="relative">
      {/* <FirstSlideShow data={data} /> */}
      {/* <TestSlideShow data={data} /> */}
      <FirstSlideShow />
      <SecondSlideShow />
      
      {/* <TestSlideShowCarousel data={data} /> */}
      
      </div>
    </div>
  );
};

export default HomeScreen;
