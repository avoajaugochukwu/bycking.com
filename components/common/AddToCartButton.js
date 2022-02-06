/* eslint-disable @next/next/no-img-element */
import React from 'react';
const whiteCart = '/svg/white-cart.svg';

const AddToCartButton = ({ type }) => {
  return (
    <>
      {type === 'black' ? (
        <div className="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-3">
          <a href="#" className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto">
            <img src={whiteCart} alt="whiteCart" className="" />
            <span className="mx-2">
              Get it on the App Store
            </span>
          </a>
        </div>
      ) : (
        <div className="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-3">
          <a href="#" className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600">
            <img src={whiteCart} alt="whiteCart" className="" />
            <span className="mx-2">
              Get it on the App Store
            </span>
          </a>
        </div>
      )}
    </>
  );
};

export default AddToCartButton;
