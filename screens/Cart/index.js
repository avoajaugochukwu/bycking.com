/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import WhiteHeader from "../../components/layout/WhiteHeader";

import { CartContext } from "../../store/context/CartContextProvider";
import { currency } from "../../utils";
export default function CartScreen() {
  const cart = useContext(CartContext);
  console.log(cart.cart);
  return (
    <>
      <WhiteHeader bgColor='bg-white' textColor='text-gray-800' />
      {cart.cart.length === 0 ? (
        <h1>Shopping cart is empty</h1>
      ) : (
        <>
          {cart.cart.map((bike) => (
            <div className="flex border border-gray-100" key={bike.id}>
              <div className="w-1/4">
                <img src={bike.image1} alt={bike.name} />
              </div>
              {/* -------------------------------- */}
              <div>
                <p className="text-2xl font-black">{bike.name}</p>
                <p className="text-xl">{bike.brand}</p>
              </div>
              {/* -------------------------------- */}
              <div>
                <p>Remove</p>
              </div>
              {/* -------------------------------- */}
              <div>
                <p>{currency(bike.price)}</p>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}
