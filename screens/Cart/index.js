/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import WhiteHeader from "../../components/layout/WhiteHeader";

import { CartContext } from "../../store/context/CartContextProvider";
import CartList from "./CartList";

export default function CartScreen() {
  const cart = useContext(CartContext);

  return (
    <>
      <WhiteHeader bgColor="bg-white" textColor="text-gray-800" />
      {cart.cart.length === 0 ? (
        <h1>Shopping cart is empty</h1>
      ) : (
        <div className="flex mt-5 mx-auto w-5/6">
          <div className="w-4/6">
            <CartList cartList={cart.cart} />
          </div>
          <div className="bg-gray-400 w-2/6 h-screen"></div>
        </div>
      )}
    </>
  );
}
