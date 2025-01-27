import React from "react";
import "./App.css";

const App = () => {
  return (
      <div className="app">
        {/* Header */}
        <header className="header">
          <h1 className="logo">Dripper</h1>
          <nav className="nav">
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="cart">🛒</div>
        </header>

        {/* Hero Section */}
        <section id="home" className="hero">
          <h2 className="hero-title custom-font">Own the Street.</h2>
          <p className="hero-subtitle">Style that defines you</p>
          <button className="hero-btn">Shop Now</button>
        </section>

        {/* Featured Products */}
        <section id="shop" className="featured-products">
          <h3 className="section-title">Featured Products</h3>
          <div className="product-grid">
            <div className="product-card">
              <img src="/products/folklore-white-tea.jpg" alt="folklore-white-tea" className="product-img" />
              <div className="product-info">
                <h4 className="product-title">Folklore White Tea</h4>
                <p className="product-price">$10.99</p>
              </div>
            </div>
            <div className="product-card">
              <img src="/products/invincible-black-tee.jpg" alt="invincible-black-tee" className="product-img" />
              <div className="product-info">
                <h4 className="product-title">Invincible Graphic Tee</h4>
                <p className="product-price">$9.99</p>
              </div>
            </div>
            <div className="product-card">
              <img src="/products/jogger-pants.jpg" alt="vagabond jogger pants" className="product-img" />
              <div className="product-info">
                <h4 className="product-title">Vagabond Jogger Pants</h4>
                <p className="product-price">$14.99</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2025 Dripper. All rights reserved.</p>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
          </div>
        </footer>
      </div>
  );
};

export default App;