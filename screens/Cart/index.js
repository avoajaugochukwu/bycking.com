import React, { useContext } from "react";
import Link from "next/link";

import { CartContext } from "../../store/context/CartContextProvider";

import Footer from "../../components/layout/Footer";
import MobileHeader from "../../components/layout/MobileHeader";
import DesktopHeader from "../../components/layout/DesktopHeader";

import CartList from "./CartList";
import CheckoutSection from "./CheckoutSection";

export default function CartScreen() {
  const cart = useContext(CartContext);

  const totalAmount = cart.cart?.reduce((a, b) => a + b.price, 0);

  return (
    <>
      <DesktopHeader bgColor="bg-white" textColor="text-gray-800" />
      <MobileHeader color="cyan" />
      {cart.cart.length === 0 ? (
        <div className=" h-screen justify-center items-center">
          <div>
            <h1 className=" text-center text-cyan-500 mt-40  text-4xl font-bold">
              Shopping cart is empty
            </h1>
            <div className="text-center bg-cyan-500 hover:bg-cyan-600 text-white mt-8 w-40 mx-auto py-2 cursor-pointer">
              <Link href="/shop">Continue shopping</Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col-reverse w-full mt-0 mb-32 sm:mt-5 px-3 sm:flex-row sm:mx-auto sm:w-5/6">
          <div className="w-full sm:w-4/6">
            <CartList cartList={cart.cart} />
          </div>
          <div className="w-full sm:w-2/6 ">
            <CheckoutSection totalAmount={totalAmount} />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
