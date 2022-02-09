import React from "react";
import WhiteHeader from "../../../components/layout/WhiteHeader";
import BikeDescription from "./BikeDescription";
import Gallery from "./Gallery";
import OtherDetailsSection from "./OtherDetailsSection";
import Footer from '../../../components/layout/Footer';

const Details = (props) => {
  // Get bike for display
  const bike = props.bike[0];

  return (
    <div>
      <WhiteHeader bgColor='bg-white' textColor='text-gray-800' />
      <div className="flex">
        <Gallery bike={bike} />
        <OtherDetailsSection bike={bike} />
      </div>
        <BikeDescription bike={bike} />
        <Footer />
    </div>
  );
};

export default Details;
