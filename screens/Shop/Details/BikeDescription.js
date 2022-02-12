import React from "react";
import Specifications from "./Specifications";

const BikeDescription = ({ bike }) => {
  return (
    <div className="w-full sm:w-3/5 mt-10 sm:mt-28 px-5 sm:px-0 sm:mx-auto">
      <h3 className="uppercase text-center font-black text-3xl">Description</h3>
      <div className="font-extralight text-sm">
        <p className="mt-8">
          The ever-popular {bike?.brand} range now includes the {bike?.name}{" "}
          bike with a sophisticated new frame. The entire {bike?.brand}
          range is equipped with Bosch ebike technology, and this model is no
          different. The Motus Tour Plus features the superior Active Line Plus
          motor - a first for {bike?.brand} Tour – as well as 400wh Bosch
          battery.
        </p>
        <p className="mt-8">
          The {bike?.name} is a hybrid electric bike, meaning it has a
          comfortable, upright riding position and everything required for city
          riding as well as light trails. This includes a pannier rack, ready to
          carry all your bits and bobs from work essentials for your commute or
          a luxury picnic and blanket for weekend adventures. Thankfully even a
          little miserable British weather won’t stop play with the {bike?.name}
          ’ ready-equipped lights and mudguards.
        </p>
        <p className="mt-8">
          A low-step frame means hopping on and off is a doddle, you’ll find a
          new way to ride on the {bike?.name}, a laid-back, pleasureable way.
          It’s about clearing your mind and letting your legs do the work (with
          a great deal of help from the motor, of course)!{" "}
        </p>
      </div>
    </div>
  );
};

export default BikeDescription;
