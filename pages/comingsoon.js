import React from "react";
import MobileHeader from "../components/layout/MobileHeader";
import DesktopHeader from "../components/layout/DesktopHeader";
import Footer from "../components/layout/Footer";

const comingsoon = () => {
  return (
    <>
      <DesktopHeader bgColor="bg-white" textColor="text-gray-800" />
      <MobileHeader color="cyan" />
      <div className="flex h-screen justify-center items-center">
        <h1 className="text-cyan-500 text-4xl font-bold">Coming Soon</h1>
      </div>
      <Footer />
    </>
  );
};

export default comingsoon;
