// OrderContext.js
import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = (orderId, orderDetails,totalPrice) => {
    console.log(totalPrice)
    setOrders([...orders, { orderId, orderDetails ,totalPrice}]);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
