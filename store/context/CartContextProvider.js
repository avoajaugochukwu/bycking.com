import React from "react";

export const CartContext = React.createContext({ cart: [] });

// const state = getLocalStorage();

const getLocalStorage = () => {
  if (typeof window !== "undefined") {
    return {
      cart:
        window.localStorage.getItem("bycking") === null
          ? []
          : window.localStorage.getItem("bycking"),
    };
  }
  return {
    cart: []
  };
};

const setLocalStorage = () => {
  if (typeof window !== "undefined") {

    
    window.localStorage.setItem("bycking", JSON.stringify({cart: ['Honey']}))
    const a = window.localStorage.getItem("bycking")
    console.log('------------')
    console.log(a)
    console.log(JSON.parse(a))
    console.log('------------')
    
    return
  }
  return 
};
const initialState = getLocalStorage()
const cc = setLocalStorage()

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      throw new Error(`Invalid action`);
  }
}

const CartProvider = ({ children }) => {
  const [cart, dispatch] = React.useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
