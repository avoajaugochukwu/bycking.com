import React, { useContext } from "react";
import { CartContext } from "../../store/context/CartContextProvider";
export default function CartSVG({ fill, stroke, showItems, inHeader }) {
  const cart = useContext(CartContext);
  const cartLength = cart.cart?.reduce((a, b) => a + b.quantity, 0);

  return (
    <span className="relative flex">
      <svg
        with={`${inHeader ? '30' : '24' }`}
        height={`${inHeader ? '30' : '24' }`}
        viewBox={`0 0 ${inHeader ? '30 30' : '24 24' }`}
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
        className="flex-1"
      >
        <path
          d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
          stroke={stroke}
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {/* add check for cart length */}
      {showItems && cartLength > 0 && (
        <span className="absolute -right-2 -top-2 rounded-full bg-red-600 w-5 h-5 top right p-0 m-0 pt-[2px] text-white font-mono text-sm  leading-tight text-center">
          {cartLength}
        </span>
      )}
    </span>
  );
}

CartSVG.defaultProps = {
  fill: "none",
  stroke: "white",
  showItems: false,
  inHeader: false
};
