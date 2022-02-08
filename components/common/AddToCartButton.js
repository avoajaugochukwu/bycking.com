/* eslint-disable @next/next/no-img-element */
import React from "react";
import CartSVG from "../../components/svg/CartSVG";
// const whiteCart = '/svg/white-cart.svg';

const AddToCartButton = ({ type }) => {
  return (
    <>
      <div className="cursor-pointer inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-3">
        <a
          className={`px-20 inline-flex items-center justify-center  py-3 text-base font-medium text-white bg-gradient-to-r transform transition-colors duration-150 ${
            type === "black"
              ? "from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600"
              : "from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600"
          }`}
        >
          {/* <img src={whiteCart} alt="whiteCart" className="" /> */}
          <CartSVG fill="none" stroke="white" />
          <span className="mx-2">Add to cart</span>
        </a>
      </div>
    </>
  );
};

// AddToCartButton.defaultProps = {
//   type: "black",
// };

export default AddToCartButton;
