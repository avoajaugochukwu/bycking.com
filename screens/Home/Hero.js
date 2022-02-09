import React from "react";

import Header from "../../components/layout/Header";
import MobileHeader from "../../components/layout/MobileHeader";
import WhiteHeader from "../../components/layout/WhiteHeader";

const Hero = () => {
  return (
    <>
      <div className="relative w-full">
        <video
          autoPlay
          loop
          muted
          className="hidden sm:block video-tag z-0 relative w-full h-full"
        >
          <source src="/yeti.mp4" />
          Your browser does not support HTML5 video.
        </video>

        <div className="hidden sm:block video-overlay absolute left-0 top-0 z-10 w-full">
          
          <WhiteHeader />
          {/* <WhiteHeader bgColor='bg-white' textColor='text-gray-800' /> */}
          <div className="ml-4 mt:20 p-4 lg:ml-20 lg:mt-60 lg:p-0">
            <p className="text-4xl lg:text-7xl text-white uppercase">
              Let your bike and gear <br />
              reflect your personality
            </p>
          </div>
        </div>
        {/*  */}
        <div className="block sm:hidden">
          
          <div
            style={{
              backgroundImage:
                "url('/img/home_page/buy-online-home-storyteller.jpeg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundColor: "rgba(255,255,255, 0.5)",
              height: "100vh",
              width: "100vw",
            }}
          >
            <div className="w-full h-full bg-cyan-500/50">
            <MobileHeader />
            </div>
            
            {/* <Header /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
