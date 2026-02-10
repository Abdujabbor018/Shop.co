import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';
import './Header.css'
import HeaderPng from './hero-removebg-preview.png';

const Header = () => {
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="navbar-container">

            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h1 className="logo">SHOP.CO</h1>
            </Link>

            <ul className="navbar-list">
              <li className="navbar-item">
                <Link to="/shop" className="navbar-link">Shop</Link>
              </li>
              <li className="navbar-item">
                <Link to="/sale" className="navbar-link">On Sale</Link>
              </li>
              <li className="navbar-item">
                <Link to="/new" className="navbar-link">New Arrivals</Link>
              </li>
              <li className="navbar-item">
                <Link to="/brand" className="navbar-link">Brand</Link>
              </li>
            </ul>

            <div className="navbar-items">
              <input
                type="text"
                placeholder="Search for products"
                className="navbar-search"
              />

              <Link to="/cart" className="basket-btn" style={{ position: 'relative' }}>
                🛒
                {cartCount > 0 && (
                  <span className="cart-count">{cartCount}</span>
                )}
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* FAQAT HOME PAGE DA */}
      {isHomePage && (
        <div className="header">
          <div className="container">
            <div className="header-container">

              <div className="header-texts">
                <h1 className="header-text">
                  FIND CLOTHES <br />
                  THAT MATCHES <br />
                  YOUR STYLE
                </h1>

                <p className="header-info">
                  Browse through our diverse range of meticulously crafted garments,
                  designed to bring out your individuality and cater to your sense of style.
                </p>

                <button className="header-btn">Shop Now</button>

                <div className="header-cards">
                  <div className="header-card">
                    <h4>200+</h4>
                    <p>International Brands</p>
                  </div>

                  <div className="header-card">
                    <h4>2,000+</h4>
                    <p>High-Quality Products</p>
                  </div>

                  <div className="header-card">
                    <h4>30,000+</h4>
                    <p>Happy Customers</p>
                  </div>
                </div>
              </div>

              <img src={HeaderPng} alt="hero" className="header-img" />

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
