import React from "react";

const BikeDescription = ({ bike }) => {
  return (
    <div className=" w-3/5 mt-28 mx-auto">
      <h3 className="uppercase text-center font-black text-3xl">Description</h3>
      <div className="font-extralight text-sm">
        <p className="mt-8">
          The ever-popular {bike?.brand} range now includes the {bike?.name}
          bike with a sophisticated new frame. The entire {bike?.brand}
          range is equipped with Bosch ebike technology, and this model is no
          different. The Motus Tour Plus features the superior Active Line Plus
          motor - a first for {bike?.brand} Tour – as well as 400wh Bosch battery.
        </p>
        <p className="mt-8">
          The {bike?.name} is a hybrid electric bike, meaning it has a
          comfortable, upright riding position and everything required for city
          riding as well as light trails. This includes a pannier rack, ready to
          carry all your bits and bobs from work essentials for your commute or
          a luxury picnic and blanket for weekend adventures. Thankfully even a
          little miserable British weather won’t stop play with the {bike?.name}’ 
          ready-equipped lights and mudguards.
        </p>
        <p className="mt-8">
          A low-step frame means hopping on and off is a doddle, you’ll find a
          new way to ride on the {bike?.name}, a laid-back, pleasureable way.
          It’s about clearing your mind and letting your legs do the work (with
          a great deal of help from the motor, of course)!{" "}
        </p>
      </div>


      {/* ---------------------------------------------------------------- */}
      <div className="container mx-auto">
      <div className="m-8 rounded overflow-hidden">
        {/* <!-- accordion-tab  --> */}
        <div className="group outline-none accordion-section" tabIndex="1">
          <div
            className="group bg-gray-900 flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer pr-10 relative"
          >
            <div className="group-focus:text-white transition ease duration-500">
              Title for Tab - 1
            </div>
            <div
              className="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2"
            >
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
          <div
            className="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500"
          >
            <p className="p-2 text-gray-400 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              repellat amet doloribus consequuntur eos similique provident
              tempora voluptates iure quia fuga dicta voluptatibus culpa
              mollitia recusandae delectus id suscipit labore?
            </p>
          </div>
        </div>
        {/* <!-- accordion-tab --> */}
        {/* <!-- accordion-tab  --> */}
        <div className="group outline-none accordion-section" tabIndex="2">
          <div
            className="group bg-gray-900 flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer pr-10 relative"
          >
            <div className="group-focus:text-white transition ease duration-500">
              Title for Tab - 2
            </div>
            <div
              className="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2"
            >
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
          <div
            className="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500"
          >
            <p className="p-2 text-gray-400 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              repellat amet doloribus consequuntur eos similique provident
              tempora voluptates iure quia fuga dicta voluptatibus culpa
              mollitia recusandae delectus id suscipit labore?
            </p>
          </div>
        </div>
        {/* <!-- accordion-tab --> */}
        {/* <!-- accordion-tab  --> */}
        <div className="group outline-none accordion-section" tabIndex="3">
          <div
            className="group bg-gray-900 flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer pr-10 relative"
          >
            <div className="group-focus:text-white transition ease duration-500">
              Title for Tab - 3
            </div>
            <div
              className="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2"
            >
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
          <div
            className="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500"
          >
            <p className="p-2 text-gray-400 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              repellat amet doloribus consequuntur eos similique provident
              tempora voluptates iure quia fuga dicta voluptatibus culpa
              mollitia recusandae delectus id suscipit labore?
            </p>
          </div>
        </div>
        {/* <!-- accordion-tab --> */}
      </div>
    </div>
    </div>
  );
};

export default BikeDescription;
