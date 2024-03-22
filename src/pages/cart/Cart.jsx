import React, { useState, useEffect } from "react";
import { useCart } from "../../contexts/CartContext";
import { useOrder } from "../../contexts/OrderContext";
import Quantity from "../../components/quantity/Quantity";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from 'react-router-dom';
import './Cart.scss'

export default function Cart() {
  const { cartItems, updateCartItem, removeCartItem } = useCart();
  const { addOrder } = useOrder();
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  // Calculate total price whenever cartItems change
  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity * item.price;
    });
    setTotalPrice(total);
  }, [cartItems]);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeCartItem(id);
    } else {
      updateCartItem(id, newQuantity);
    }
  };

  const placeOrder = () => {
    const orderId = generateOrderId();
    // Add order details to the context
    addOrder(orderId, cartItems,totalPrice);
    // Log for now
    console.log("Placing order...");
    console.log("Order ID:", orderId);
    console.log("Order details:", cartItems);
    // Clear cart or any other action needed
    navigate('/orders');
  };

  // Function to generate unique order ID
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateOrderId() {
  let orderId = '';
  for (let i = 0; i < 10; i++) {
    orderId += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return orderId;
}

  return (
    <>
      <Navbar />
      <div className="cart">
        <div className="cart-items">
          <h2>Cart</h2>
            {cartItems.map((item) => (
              <div className="items" key={item.idMeal}>
                <h3>{item.strMeal}</h3>
                  <Quantity
                    id={item.idMeal}
                    quantity={item.quantity}
                    onChange={(newQuantity) =>
                      handleQuantityChange(item.idMeal, newQuantity)
                    }
                  />
              </div>
            ))}
        </div>
        <div className="cart-summary">
          <h2>Summary</h2>
          <ul className="price-detail-list">
            {cartItems.map((item) => (
              <li key={item.idMeal}>
                {item.strMeal}
                <div>
                  {item.quantity} * {item.price}
                </div>
              </li>
            ))}
          </ul>
          <div className="total-price-container">
          <p>Total Price: {totalPrice}</p>
          
          {cartItems.length>0 &&(<button className="place-order" onClick={placeOrder}>Place Order</button>)}
          </div>
        </div>
      </div>
    </>
  );
}
