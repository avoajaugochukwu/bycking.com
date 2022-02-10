/* eslint-disable @next/next/no-img-element */
import React from "react";
import CartTag from "../../components/common/CartTag";
import Stars from "../../components/common/Stars";
import { currency } from "../../utils";

const CartList = ({ cartList }) => {
  return (
    <div className="mx-5">
      {cartList.map((bike) => (
        <div className="flex border border-gray-100 py-1" key={bike.id}>
          <div className="w-1/4">
            <img src={bike.image1} alt={bike.name} className="w-60 p-2 my-3" />
          </div>
          {/* -------------------------------- */}
          <div className="w-2/5 pl-4">
            <p className="text-lg font-bold">{bike.name}</p>
            <p className="text-xs text-gray-500 mb-2"> By {bike.brand}</p>
            <CartTag type="1" /> <CartTag type="2" />
            <div className="flex mt-2">
              <Stars number={bike.stars} type="" />
              <p className="text-xs font-extralight ml-1">({bike.starReviewNumber})</p>
            </div>
            
            <div className="flex">
              <img src={bike.logo} alt={bike.name} className="w-10 h-10"/>
            </div>
            
          </div>
          {/* -------------------------------- */}
          <div className="w-1/5">
            <p className="text-sm text-cyan-500 font-light">Remove</p>
            <p className="text-sm text-cyan-500 font-light">Share with a friend</p>
          </div>
          {/* -------------------------------- */}
          <div className="">
            <p className="font-bold text-cyan-500">{currency(bike.price)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
