import React from "react";
// import AnotherTest from "./AnotherTest";
import FirstSlideShow from "./FirstSlideShow";

import Hero from "./Hero";
import HomeScreenStore from "./HomeScreenStore";
import PaymentMethods from "./PaymentMethods";
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
      <HomeScreenStore />
      <PaymentMethods />
      
      {/* <TestSlideShowCarousel data={data} /> */}
      
      </div>
    </div>
  );
};

export default HomeScreen;
