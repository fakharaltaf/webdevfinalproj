import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact"; // Import Contact page
import { Link } from "react-router-dom";

const App = () => {
  return (
      <Router>
        <div className="app">
          {/* Header */}
          <header className="header">
            <h1 className="logo">dripper.</h1>
            <nav className="nav">
              <ul className="nav-links">
                <li><Link to={`/`} className="Home">
                  Home
                </Link></li>
                <li><a href="/#shop">Shop</a></li>
                <li><Link to={`/about`} className="About">
                  About
                </Link></li>
                <li><Link to={`/contact`} className="Contact">
                  Contact
                </Link></li>
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
            <Route path="/about" element={<About />} /> {/* Define route for About page */}
            <Route path="/contact" element={<Contact />} /> {/* Define route for About page */}
          </Routes>
        </div>
      </Router>
  );
};

export default App;
