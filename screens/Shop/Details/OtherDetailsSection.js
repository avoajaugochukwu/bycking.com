/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import AddToCartButton from "../../../components/common/AddToCartButton";
import InfoIconWithToolTip from "../../../components/common/InfoIconWithToolTip";
import { currency } from "../../../utils";

import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, cssTransition } from "react-toastify";

import { CartContext } from '../../../store/context/CartContextProvider'

const blackReturn = "/svg/black-return.svg";
const shipping = "/svg/black-shipping.svg";


const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut"
});

// https://animista.net/
// source animation inside style.css
const swirl = cssTransition({
  enter: "swirl-in-fwd",
  exit: "swirl-out-bck"
});


const OtherDetailsSection = ({ bike }) => {
  
  
  console.log(bike, 'bike')

  const cart = useContext(CartContext);

  function animateCss() {
    toast.dark("Item added to cart", {
      transition: bounce
    });
  }

  function animista() {
    toast.dark("Hey 👋, see how easy!", {
      transition: swirl
    });
  }

  const handleAddtoCart = (e) => {
    e.preventDefault();
    cart.addToCart(bike)
    animateCss()
  }

  // console.log(cart)
  // console.log(bike);

  if (!bike) {
    // Add skeleton
    return "Loading bike";
  }

  return (
    <div className="w-1/4  mt-6">
      <div className="flex gap-x-2">
        <img
          src="../svg/gold-star-svgrepo-com.svg"
          alt="gray-star"
          className="w-4 h-4"
        />
        <img
          src="../svg/gold-star-svgrepo-com.svg"
          alt="gray-star"
          className="w-4 h-4"
        />
        <img
          src="../svg/gold-star-svgrepo-com.svg"
          alt="gray-star"
          className="w-4 h-4"
        />
        <img
          src="../svg/gold-star-svgrepo-com.svg"
          alt="gray-star"
          className="w-4 h-4"
        />
        <img
          src="../svg/gray-star-svgrepo-com.svg"
          alt="gray-star"
          className="w-4 h-4"
        />
      </div>

      <h1 className="text-2xl font-black mt-2 mb-10">{bike?.name}</h1>

      <div className="mt-3 pb-5 border-b-2 border-t-gray-100">
        <span className="font-bold">Frame shape</span>
        <span className="ml-5 font-extralight">{bike?.frameShape}</span>
      </div>

      <div className="mt-5 pb-5 border-b-2 border-t-gray-100">
        <span className="font-bold">Weight</span>
        <span className="ml-5 font-extralight">{bike?.weight}</span>
      </div>

      <div className="mt-7 pb-5 ">
        <p className="font-bold text-2xl">{currency(bike?.price)}</p>
        <p className="font-extralight mt-2">
          Monthly from {currency(bike?.price / 24)}
        </p>
      </div>

      <div className="mt-6 pb-5 ">
        <span onClick={handleAddtoCart}>
          {/* <AddToCartButton type="black" /> */}
          <AddToCartButton />
        </span>
      </div>

      <div className="mt-5 pb-5 border-b-2 border-t-gray-100">
        <div className="flex">
          <img src={blackReturn} alt="return" />
          <p className="ml-4">Returning </p>
          <InfoIconWithToolTip message="Must be returned within 14 days of delivery for a refund. The return is not free of charge." />
        </div>
      </div>

      <div className="mt-5 pb-5 border-b-2 border-t-gray-100">
        <div className="flex">
          <img src={shipping} alt="return" />
          <p className="ml-4">Shipping</p>
          <InfoIconWithToolTip message="Check your shipping rates" />
        </div>
        <div className="ml-5 mt-3 font-extralight text-sm">
          <ul className="list-disc">
            <li>
              <p className="">US</p>
              <ul className="list-none ml-5">
                <li>
                  <p className="">Orders over $20: Free</p>
                </li>
                <li>
                  <p className="">Orders under $20: $4.99</p>
                </li>
              </ul>
            </li>
            <li>
              <p className="">Periphery Locations*</p>
              <ul className="list-none ml-5">
                <li>
                  <p className="">Bikes: $27.99</p>
                </li>
                <li>
                  <p className="">Parts &amp; Accessories: $9.99</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <ToastContainer transition={bounce} />
    </div>
  );
};

export default OtherDetailsSection;
