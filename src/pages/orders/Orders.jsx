import React from "react";
import { useOrder } from "../../contexts/OrderContext";
import "./Orders.scss";
export default function Orders() {
  const { orders } = useOrder();
  console.log(orders);
  return (
    <div className="orders">
      {orders.map((order) => (
        <div className="order-list" key={order.orderId}>
          <div className="order-list-header">
            <h3>Order ID: {order.orderId}</h3>
            <h5>Total price: {order.totalPrice}</h5>
          </div>
          <ul className="order-cart-items">
            {order.orderDetails.map((item) => (
              <li key={item.idMeal}>
                <div className="order-cart-items-header">
                  <div className="left">
                    {" "}
                    <img src={item.strMealThumb} alt={item.strMeal} />
                    <h5>{item.strMeal}</h5>
                    {" "}
                  </div>
                  <p className="right">
                    {" "}
                    {item.quantity} * {item.price} = {item.quantity * item.price}
                  </p>
                </div>
                {order.orderDetails.length > 1 && <hr />}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
