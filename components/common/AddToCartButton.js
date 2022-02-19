import React from "react";
import CartSVG from "../../components/svg/CartSVG";

const AddToCartButton = ({ type }) => {
  return (
    <>
      <div className="cursor-pointer w-full rounded-lg shadow">
        <a
          className={`px-20 inline-flex w-full rounded-lg items-center justify-center py-3 text-base font-medium text-white bg-gradient-to-r transform transition-colors duration-150 ${
            type === "black"
              ? "from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600"
              : "from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600"
          }`}
        >
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
