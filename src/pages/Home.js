import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const products = [
        { id: 1, name: "Folklore White Tea", price: "$10.99", img: "/components/products/folklore-white-tea.jpg" },
        { id: 2, name: "Invincible Graphic Tee", price: "$9.99", img: "/components/products/invincible-black-tee.jpg" },
        { id: 3, name: "Vagabond Jogger Pants", price: "$14.99", img: "/components/products/jogger-pants.jpg" },
    ];
    return (
        <div className="app">

            {/* Hero Section */}
            <section id="home" className="hero">
                <h2 className="hero-title custom-font">Own the Street.</h2>
                <p className="hero-subtitle">miyamoto mushashi</p>
                <button className="hero-btn"><a href={"#shop"}>Shop Now</a></button>
            </section>

            {/* Featured Products */}
            <section id="shop" className="featured-products">
                <h3 className="section-title">Featured Products</h3>
                <div className="product-grid">
                    {products.map((product) => (
                        <div className="product-card" key={product.id}>
                            <img src={product.img} alt={product.name} className="product-img" />
                            <div className="product-info">
                                <h4 className="product-title">{product.name}</h4>
                                <p className="product-price">{product.price}</p>
                                <Link to={`/product/${product.id}`} className="product-link">
                                View Product
                                </Link>
                            </div>
                        </div>
                    ))}
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

export default Home;
