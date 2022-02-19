import React, { useContext } from "react";
import { CartContext } from "../../../store/context/CartContextProvider";

import Footer from "../../../components/layout/Footer";
import DesktopHeader from "../../../components/layout/DesktopHeader";
import MobileHeader from "../../../components/layout/MobileHeader";

import CheckoutSection from "./CheckoutSection";
import Summary from "./Summary";

const CheckoutScreen = () => {
  const cart = useContext(CartContext);

  return (
    <>
      <DesktopHeader bgColor="bg-white" textColor="text-gray-800" />
      <MobileHeader color="cyan" />
      <div className="flex flex-col w-full mt-0 mb-32 sm:mt-5 px-3 sm:flex-row sm:mx-auto sm:w-5/6">
        <CheckoutSection cart={cart.cart} />
        <Summary cart={cart.cart} />
      </div>
      <Footer />
    </>
  );
};

export default CheckoutScreen;
