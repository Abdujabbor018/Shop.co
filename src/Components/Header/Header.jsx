import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';
import './Header.css'
import HeaderPng from './hero-removebg-preview.png';

const Header = () => {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

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
              <li className="navbar-item"><Link to="/cart" className="navbar-link">Shop</Link></li>
              <li className="navbar-item"><Link to="#Products" className="navbar-link">On Sale</Link></li>
              <li className="navbar-item"><Link to="/new" className="navbar-link">New Arrivals</Link></li>
              <li className="navbar-item"><Link to="/brand" className="navbar-link">Brand</Link></li>
            </ul>

            <div className="navbar-items" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <input type="text" placeholder="Search for products" className="navbar-search" />

              <Link to="/cart" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {cartCount > 0 && (
                  <span style={{
                    position: 'absolute', top: '-8px', right: '-8px',
                    backgroundColor: 'black', color: 'white', borderRadius: '50%',
                    padding: '2px 6px', fontSize: '10px', fontWeight: 'bold'
                  }}>
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

          </div>
        </div>
      </div>

      {isHomePage && (
        <div className="header">
          <div className="container">
            <div className="header-container">
              <div className="header-texts">
                <h1 className="header-text">FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</h1>
                <p className="header-info">Browse through our diverse range of meticulously crafted garments...</p>
                <button className="header-btn"></button>
                <div className="header-cards">
                  <div className="header-card"><h4>200+</h4><p>International Brands</p></div>
                  <div className="header-card"><h4>2,000+</h4><p>High-Quality Products</p></div>
                  <div className="header-card"><h4>30,000+</h4><p>Happy Customers</p></div>
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