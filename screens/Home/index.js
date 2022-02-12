import React from "react";
import DesktopHero from "./components/DesktopHero";
import FirstSlideShow from "./FirstSlideShow";

import MobileHero from "./MobileHero";
import HomeScreenStore from "./HomeScreenStore";
import SecondSlideShow from "./SecondSlideShow";

const HomeScreen = ({ data }) => {
  return (
    <div className="">
      <div className="relative">
        <DesktopHero />
        <MobileHero />
      </div>
      <div className="relative">
        <FirstSlideShow />
        <SecondSlideShow />
        <HomeScreenStore />
      </div>
    </div>
  );
};

export default HomeScreen;
