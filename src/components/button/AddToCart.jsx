import React from 'react'
import { useCart } from "../../contexts/CartContext";
import './AddToCart.scss'
export default function AddToCart({data}) {
    const { addToCart} = useCart();
    const handleAddToCart = (e, meal) => {
      e.preventDefault(); 
      addToCart(meal);
    };
  return (
    <button onClick={(e) => handleAddToCart(e, data)} className='AddToCartButton'>Add to Cart</button>
  )
}
