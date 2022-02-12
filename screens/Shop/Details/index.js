import React from "react";
import DesktopHeader from "../../../components/layout/DesktopHeader";
import MobileHeader from "../../../components/layout/MobileHeader";
import BikeDescription from "./BikeDescription";
import Gallery from "./Gallery";
import OtherDetailsSection from "./OtherDetailsSection";
import Footer from '../../../components/layout/Footer';
import Specifications from "./Specifications";

const Details = (props) => {
  // Get bike for display
  const bike = props.bike[0];

  return (
    <div>
      <DesktopHeader bgColor='bg-white' textColor='text-gray-800' />
      <MobileHeader color="cyan" />
      <div className="sm:flex">
        <Gallery bike={bike} />
        <OtherDetailsSection bike={bike} />
      </div>
        <BikeDescription bike={bike} />
        <Specifications />
        <Footer />
    </div>
  );
};

export default Details;
