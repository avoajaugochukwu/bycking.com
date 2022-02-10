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

  function addToCart(item) {
    let newItem = {};

    if(!item.hasOwnProperty('quantity')) {
      newItem = {...item, quantity: 1}
    }

    const cartItem = cart.filter((product) => product.id === item.id);

    if (cartItem.length === 0) {
      setCart((prevItems) => [...prevItems, newItem]);
    } else {
      const newCart = cart.map(obj => {
        if (obj.id === item.id) {
          const newQuantity = obj.quantity + 1;
          const newPrice = newQuantity * item.price
          return {...obj, quantity: obj.quantity + 1, price: newPrice};
        }
        return obj;
      });
      setCart(newCart)
    }  
  }

  function removeFromCart(itemId) {
    setCart((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
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
