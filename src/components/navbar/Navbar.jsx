import React from 'react';
import {Link } from 'react-router-dom';
import './Navbar.css'; 
import { useCart } from "../../contexts/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

const Navbar = () => {
  const { cartItems } = useCart();

  const links = [
    { path: '/cart', text: <><FaShoppingCart /> {cartItems.length}</> },
    { path: '/#', text: <IoSettings /> },
  ];
  return (
    <nav className={"navbar"}>
      <div className={'navbar-logo'}>VGTS</div>
      <div className={`navbar-links `}>
        {links.map((linkItem) => (
          <Link
            key={linkItem.path}
            to={linkItem.path}
            className=''
          >
            {linkItem.text}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
