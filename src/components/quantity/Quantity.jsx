import React from "react";
import { useCart } from "../../contexts/CartContext";
import './Quantity.scss'
export default function Quantity({ id }) {
  const { incrementQuantity, decrementQuantity, cartItems } = useCart();
  const handleIncrement = (id, e) => {
    e.preventDefault(); // Prevent form submission
    incrementQuantity(id);
  };
  
  const handleDecrement = (id, e) => {
    e.preventDefault(); // Prevent form submission
    decrementQuantity(id);
  };
  
  return (
    <div className="Quantity">
      <button onClick={(e) => handleDecrement(id, e)}> - </button>
      <p>{cartItems.find((item) => item.idMeal === id)?.quantity || 0}</p>
      <button onClick={(e) => handleIncrement(id, e)}> + </button>
    </div>
  );
}
