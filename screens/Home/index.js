import React from "react";
import FirstSlideShow from "./FirstSlideShow";

import Hero from "./Hero";
import HomeScreenStore from "./HomeScreenStore";
import PaymentMethods from "./PaymentMethods";
import SecondSlideShow from "./SecondSlideShow";

const HomeScreen = ({ data }) => {
  return (
    <div className="">
      <div className="relative">
        <Hero />
      </div>
      <div className="relative">
        <FirstSlideShow />
        <SecondSlideShow />
        <HomeScreenStore />
        <PaymentMethods />
      </div>
    </div>
  );
};

export default HomeScreen;
