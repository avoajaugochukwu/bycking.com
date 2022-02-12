/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { CartContext } from "../../store/context/CartContextProvider";
import CartTag from "../../components/common/CartTag";
import Stars from "../../components/common/Stars";
import { currency } from "../../utils";
import Link from "next/link";

const CartList = ({ cartList }) => {
  const cart = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    cart.removeFromCart(productId);
  };

  return (
    <div className="mx-1 sm:mx-5">
      {cartList.map((bike) => (
        <div className="flex flex-col sm:flex-row border border-gray-100 p-2" key={bike.id}>
          <div className="w-full sm:w-3/5 flex">
            <div className="w-1/2 sm:w-1/3">
              <img src={bike.image1} alt={bike.name} className="w-60 my-3" />
            </div>
            {/* -------------------------------- */}
            <div className="w-1/2 sm:w-2/3 pl-8 sm:pl-4">
              <div>
                <p className="text-lg font-bold">{bike.name}</p>
                <p className="text-xs text-gray-500 mb-2"> By {bike.brand}</p>
                <span>
                  {bike.cartTag1 && <CartTag type={bike.cartTag1} />}{" "}
                </span>
                <span>{bike.cartTag2 && <CartTag type={bike.cartTag2} />}</span>
              </div>

              <div className="flex mt-2">
                <Stars number={bike.stars} type="" />
                <p className="text-xs font-extralight ml-1">
                  ({bike.starReviewNumber})
                </p>
              </div>
              <div className="flex">
                <img src={bike.logo} alt={bike.name} className="w-10 h-10" />
              </div>
            </div>
          </div>
          {/* -------------------------------- */}
          <div className="w-full sm:w-3/5 flex">
            <div className="w-1/2">
              <p className="text-sm text-cyan-500 font-bold mb-1 sm:mb-5">
                Quantity: {bike.quantity}
              </p>
              <p
                className="text-sm text-red-500 font-light cursor-pointer"
                onClick={() => handleRemoveFromCart(bike.id)}
              >
                Remove
              </p>
              <p className="text-sm text-cyan-500 font-light mt-1 sm:mt-2">
                <Link
                  href={`/shop/${encodeURIComponent(bike.url)}`}
                  passHref={true}
                >
                  {/* Share with a friend */}
                  View product
                </Link>
              </p>
            </div>
            {/* -------------------------------- */}
            <div className="w-1/2">
              <p className="font-bold text-cyan-500">{currency(bike.price)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
