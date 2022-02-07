import React, { useState, useEffect } from "react";

const STOREKEYS = {
  CART: "cart",
};

export const CartContext = React.createContext({ cart: [] });

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cart = getLocalStorage(STOREKEYS.CART);
    if (cart) {
      setCart(cart);
    }
  }, []);

  useEffect(() => {
    setLocalStorage(STOREKEYS.CART, cart);
  }, [cart]);

  function addToCart(newItem) {
    setCart(prevItems => [...prevItems, newItem])
}

  return (
    <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>
  );
}

export default CartProvider;

const getLocalStorage = (storeKey) => {
  if (typeof window !== "undefined") {
    const getData = window.localStorage.getItem(`bycking_${storeKey}`)
      ? JSON.parse(window.localStorage.getItem(`bycking_${storeKey}`))
      : [];
    return getData;
  }
  return [];
};

const setLocalStorage = (storeKey, valueToStore) => {
  if (!storeKey) return;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(
      `bycking_${storeKey}`,
      JSON.stringify(valueToStore)
    );
    return;
  }
  return;
};
// const initialState = getLocalStorage();
// const cc = setLocalStorage(STOREKEYS.CART, ["Honey"] );
// getLocalStorage();
