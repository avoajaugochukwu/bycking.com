import Link from "next/link";
import React from "react";

const Summary = ({ cart }) => {
  console.log(cart, "cart");

  const totalAmount = cart?.reduce((a, b) => a + b.price, 0);

  // console.log(cart.cart)
  console.log(totalAmount, "totalAmount");

  return (
    <div className="w-2/5 px-10">
      <div className=" product-box-shadow p-3">
        <h3>Summary</h3>
        <div className="flex justify-between border-b border-b-cyan-500 mt-10 pb-1">
          <p>Original Price:</p>
          <p>${totalAmount}</p>
        </div>
        {/*  */}
        <div className="flex justify-between pt-2 pb-1 font-semibold text-xl">
          <p>Total:</p>
          <p>${totalAmount}</p>
        </div>
        {/*  */}
        <div className="text-xs text-gray-400 mt-5">
          <p>
            Bycking is required by law to collect applicable transaction taxes
            for purchases made in certain tax jurisdictions.
          </p>
          <p className="mt-2">
            By completing your purchase you agree to these{" "}
            <span className="text-cyan-500 font-semibold">
              Terms of Service.
            </span>
          </p>
        </div>
        {/*  */}
        <div className="px-8  py-3 bg-cyan-500 text-white mt-4 w-full text-center hover:bg-cyan-600 cursor-pointer">
          <Link href="/cart/checkout">Complete payment</Link>
        </div>
      </div>
    </div>
  );
};

export default Summary;
