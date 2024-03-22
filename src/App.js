import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Orders from "./pages/orders/Orders";
import Details from "./pages/details/Details";
import { CartProvider } from "./contexts/CartContext";
import { OrderProvider } from "./contexts/OrderContext";

import Items from "./pages/items/Items";

function App() {
  return (
    <CartProvider>
      <OrderProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/items/:id" element={<Items />} />
          </Routes>
        </Router>
      </OrderProvider>
    </CartProvider>
  );
}

export default App;
