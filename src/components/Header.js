import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <h1 className="logo">
                <Link to="/" className="logo-link">
                    Dripper
                </Link>
            </h1>
            <nav className="nav">
                <ul className="nav-links">
                    <li>
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/shop" className="nav-link">
                            Shop
                        </Link>
                    </li>
                    <li>
                        <a href="#about" className="nav-link">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="nav-link">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="cart">
                <Link to="/cart" className="cart-link">
                    🛒
                </Link>
            </div>
        </header>
    );
};

export default Header;
