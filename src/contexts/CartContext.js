import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.idMeal === item.idMeal);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1, price: 120 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.idMeal !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const incrementQuantity = (id) => {
    console.log("incrmenting",id)
    const updatedCartItems = cartItems.map((item) => {
      if (item.idMeal === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const decrementQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.idMeal === id && item.quantity >= 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems.filter((item) => item.quantity !== 0));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
