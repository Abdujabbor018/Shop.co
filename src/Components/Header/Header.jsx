import React from 'react'
import './Header.css'
import HeaderPng from './hero-removebg-preview.png'
const Header = () => {
  return (
    <>
    <div className="navbar">
        <div className="container">
            <div className="navbar-container">
                <h1 className="logo">SHOP.CO</h1>
                <ul className="navbar-list">
                  <li className="navbar-item">
                    <a href="" className="navbar-link">Shop</a>
                  </li>
                  <li className="navbar-item">
                    <a href="" className="navbar-link">On Sale</a>
                  </li>
                  <li className="navbar-item">
                    <a href="" className="navbar-link">New Arriwals</a>
                  </li>
                  <li className="navbar-item">
                    <a href="" className="navbar-link">Brand</a>
                  </li>
                </ul>
                <ul className="navbar-items">
                  <input type="text" placeholder='search for products' className="navbar-search" />
                  <button className="basket-btn">

                  </button>
                </ul>
            </div>
        </div>
    </div>
    <div className="header">
      <div className="container">
        <div className="header-container">
          <div className="header-texts">
            <h1 className="header-text">FIND CLOTHES <br />
THAT MATCHES <br />
YOUR STYLE <br /></h1>
<p className="header-info">
  Browse through our diverse range of meticulously crafted garments, designed <br />
to bring out your individuality and cater to your sense of style.
</p>
<button className="header-btn">

</button>
<div className="header-cards">
<div className="header-card">
  <h4 className="header-card-number">200+</h4>
  <p className="header-card-info">International Brands</p>
</div>
<div className="header-card">
  <h4 className="header-card-number">2,000+</h4>
  <p className="header-card-info">High-Quality Products</p>
</div>
<div className="header-card">
  <h4 className="header-card-number">30,000+</h4>
  <p className="header-card-info">Happy Customers</p>
</div>
</div>
          </div>
          <img src={HeaderPng} alt="" className="header-img" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Header