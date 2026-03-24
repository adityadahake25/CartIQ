import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import logo from "../../assets/cart_h_logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navContainer">
        {/* Logo */}
        <Link to="/">
          <div className="logo">
            <img src={logo} className="logoImg" alt="logo" />
          </div>
        </Link>

        {/* Search */}
        <div className="searchContainer">
          <input
            type="text"
            className="searchBar"
            placeholder="Search for products, brand and more"
          />
        </div>

        {/* Icons */}
        <div className="iconGroup">
          <i className="fa-solid fa-cart-shopping cartIcon"></i>

          <i className="fa-solid fa-heart wishlistIcon"></i>

          <i className="fa-solid fa-user userIcon"></i>

          <div className="menuIcon" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="desktopLinks">
          <a href="#">
            <Link to="/">Home</Link>
          </a>
          <a href="#">Categories</a>

          <a href="#">
            <i className="fa-solid fa-cart-shopping"></i> Cart
          </a>

          <a href="#">
            <i className="fa-solid fa-heart"></i> Wishlist
          </a>

          <a href="#">
            <i className="fa-solid fa-user"></i> My Account
          </a>
        </div>
      </div>

      {/* Mobile Menu */}

      <div className={`mobileMenu ${menuOpen ? "showMenu" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Categories</a>
        <a href="#">Cart</a>
        <a href="#">Wishlist</a>
        <a href="#">My Account</a>
      </div>
    </nav>
  );
}

export default Navbar;
