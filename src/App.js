import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <Router>
        <div className="app">
          {/* Header */}
          <header className="header">
            <h1 className="logo">dripper.</h1>

            {/* Hamburger Menu */}
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </button>

            <nav className={`nav ${menuOpen ? "open" : ""}`}>
              <ul className="nav-links">
                <li><Link to={`/`} onClick={() => setMenuOpen(false)}>Home</Link></li>
                <li><Link to={`/shop`} onClick={() => setMenuOpen(false)}>Shop</Link></li>
                <li><Link to={`/about`} onClick={() => setMenuOpen(false)}>About</Link></li>
                <li><Link to={`/contact`} onClick={() => setMenuOpen(false)}>Contact</Link></li>
              </ul>
            </nav>

            <Link to={`/cart`} className="cart">
              🛒
            </Link>
          </header>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
