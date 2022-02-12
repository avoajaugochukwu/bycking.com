import React from "react";

const Specifications = () => {
  return (
    <div className="w-full sm:w-3/5 mt-10 sm:mt-28 px-5 sm:px-0 sm:mx-auto mb-40 container">
      <h3 className="uppercase text-center font-black text-3xl mb-10">
        Specifications
      </h3>
      <div className="rounded overflow-hidden">
        {/* <!-- accordion-tab  --> */}
        <div
          className="group outline-none accordion-section border-b-2 border-b-gray-200 py-2"
          tabIndex="1"
        >
          <div className="group flex justify-between px-4 py-3 items-center text-gray-800 transition ease duration-500 cursor-pointer pr-10 relative">
            <div className="transition ease duration-500 font-semibold text-xl">
              Frameset
            </div>
            <div className="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
          <div className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500">
            <div className="flex justify-between border-b border-b-gray-200 pt-5 pb-3">
              <p className="w-1/3">Fork Type</p>
              <p className="w-2/3 font-extralight">
                Suntour SF18 XCE28 Disc Suspension Fork, 80mm Travel
              </p>
            </div>
            <div className="flex justify-between border-b border-b-gray-200 py-3">
              <p className="w-1/3">Frame Material</p>
              <p className="w-2/3 font-extralight">Aluminium 6061</p>
            </div>
            <div className="flex justify-between pt-3 pb-8">
              <p className="w-1/3">Total Bike Weight</p>
              <p className="w-2/3 font-extralight">14kg</p>
            </div>
          </div>
        </div>
        {/* <!-- accordion-tab --> */}
        {/* <!-- accordion-tab  --> */}
        <div
          className="group outline-none accordion-section border-b-2 border-b-gray-200 py-2"
          tabIndex="2"
        >
          <div className="group flex justify-between px-4 py-3 items-center text-gray-800 transition ease duration-500 cursor-pointer pr-10 relative">
            <div className="transition ease duration-500 font-semibold text-xl">
              Comfort
            </div>
            <div className="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
          <div className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500">
            <div className="flex justify-between border-b border-b-gray-200 pt-5 pb-3">
              <p className="w-1/3">Handlebar</p>
              <p className="w-2/3 font-extralight">
                Aluminium City Bar, 640mm Width, with XLC Logo, Black
              </p>
            </div>
            <div className="flex justify-between border-b border-b-gray-200 py-3">
              <p className="w-1/3">Saddle</p>
              <p className="w-2/3 font-extralight">
                Selle Royal Essenza Moderate, with Black Rail, Black
              </p>
            </div>
            <div className="flex justify-between border-b border-b-gray-200 py-3">
              <p className="w-1/3">Seatpost</p>
              <p className="w-2/3 font-extralight">
                Aluminium Micro Adjust, 27.2mm Dia, 350mm Long, with XLC Logo,
                Black
              </p>
            </div>
            <div className="flex justify-between pt-3 pb-8">
              <p className="w-1/3">Stem</p>
              <p className="w-2/3 font-extralight">
                Aluminium Ahead, 28.6mm Diameter, with XLC Logo, Black
              </p>
            </div>
          </div>
        </div>
        {/* <!-- accordion-tab --> */}
        {/* <!-- accordion-tab  --> */}
        <div
          className="group outline-none accordion-section border-b-2 border-b-gray-200 py-2"
          tabIndex="2"
        >
          <div className="group flex justify-between px-4 py-3 items-center text-gray-800 transition ease duration-500 cursor-pointer pr-10 relative">
            <div className="transition ease duration-500 font-semibold text-xl">
              Controls
            </div>
            <div className="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
          <div className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500">
            <div className="flex justify-between border-b border-b-gray-200 pt-5 pb-3">
              <p className="w-1/3">Brake Lever</p>
              <p className="w-2/3 font-extralight">Integrated With Shifter</p>
            </div>
            <div className="flex justify-between pt-3 pb-8">
              <p className="w-1/3">Number of Gears</p>
              <p className="w-2/3 font-extralight">21</p>
            </div>
          </div>
        </div>
        {/* <!-- accordion-tab --> */}
        {/* <!-- accordion-tab  --> */}
        <div
          className="group outline-none accordion-section border-b-2 border-b-gray-200 py-2"
          tabIndex="2"
        >
          <div className="group flex justify-between px-4 py-3 items-center text-gray-800 transition ease duration-500 cursor-pointer pr-10 relative">
            <div className="transition ease duration-500 font-semibold text-xl">
              Drivetrain
            </div>
            <div className="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
          <div className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500">
            <div className="flex justify-between border-b border-b-gray-200 pt-5 pb-3">
              <p className="w-1/3">Cassette</p>
              <p className="w-2/3 font-extralight">
                Shimano HG20 12-32t Cassette
              </p>
            </div>
            <div className="flex justify-between border-b border-b-gray-200 py-3">
              <p className="w-1/3">Chain</p>
              <p className="w-2/3 font-extralight">
                YBN S52, 7 speed, 1/2” x 3/32”
              </p>
            </div>
            <div className="flex justify-between border-b border-b-gray-200 py-3">
              <p className="w-1/3">Crankset</p>
              <p className="w-2/3 font-extralight">
                Shimano TY301 48/38/28t, 170mm, Black
              </p>
            </div>
            <div className="flex justify-between border-b border-b-gray-200 py-3">
              <p className="w-1/3">Front Shifter</p>
              <p className="w-2/3 font-extralight">Shimano 21 Speed EZ Fire</p>
            </div>
            <div className="flex justify-between border-b border-b-gray-200 py-3">
              <p className="w-1/3">Pedals</p>
              <p className="w-2/3 font-extralight">
                Raleigh ‘Anti Slip’, Resin, 9/16”, Black/Grey
              </p>
            </div>
            <div className="flex justify-between pt-3 pb-8">
              <p className="w-1/3">Rear Derailleur</p>
              <p className="w-2/3 font-extralight">
                Shimano Acera ARDM310, Direct Attachment
              </p>
            </div>
          </div>
        </div>
        {/* <!-- accordion-tab --> */}
        {/* <!-- accordion-tab  --> */}
        <div
          className="group outline-none accordion-section border-b-2 border-b-gray-200 py-2"
          tabIndex="2"
        >
          <div className="group flex justify-between px-4 py-3 items-center text-gray-800 transition ease duration-500 cursor-pointer pr-10 relative">
            <div className="transition ease duration-500 font-semibold text-xl">
              Wheels
            </div>
            <div className="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
          <div className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500">
            <div className="flex justify-between border-b border-b-gray-200 pt-5 pb-3">
              <p className="w-1/3">Tyres</p>
              <p className="w-2/3 font-extralight">
                WTB Nano Comp, 27.5 x 2.10, Black
              </p>
            </div>
            <div className="flex justify-between pt-3 pb-8">
              <p className="w-1/3">Wheel Set</p>
              <p className="w-2/3 font-extralight">
                650B Aluminium Doublewall Rim, 36h, Shimano Aluminium Hub with
                Q/R, Black
              </p>
            </div>
          </div>
        </div>
        {/* <!-- accordion-tab --> */}
      </div>
    </div>
  );
};

export default Specifications;
