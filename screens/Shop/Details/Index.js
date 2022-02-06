import React from "react";
import WhiteHeader from "../../../components/layout/WhiteHeader";
import Gallery from "./Gallery";
import OtherDetailsSection from "./OtherDetailsSection";

const Index = (props) => {
  const bike = props.bike[0];

  return (
    <div>
      <WhiteHeader />
      <div className="flex mt-20">
        <Gallery bike={bike} />
        <OtherDetailsSection bike={bike} />
      </div>
      <h1>I am laughing{bike?.name}</h1>
    </div>
  );
};

export default Index;
