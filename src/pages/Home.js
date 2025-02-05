import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const products = [
        {
            id: 1,
            name: "Ferrari Jacket Black",
            price: "12999/-",
            img: "/components/products/ferrari-black.jpg"
        },
        {
            id: 2,
            name: "Ferrari Jacket Red",
            price: "12999/-",
            img: "/components/products/ferrari-red.jpg"
        },
        {
            id: 3,
            name: "Ferrari Jacket RBW",
            price: "12999/-",
            description: "That Ferrari jacket with the red and white color scheme is seriously stylish! The Ferrari logo on the back adds a touch of luxury and sportiness to the design. You'll feel like a racing champion rocking this jacket! 🏁🔴⚪\n",
            img: "/components/products/ferrari-multi.jpg"
        },
    ];
    return (
        <div className="app">
            {/* Hero Section */}
            <section id="home" className="hero">
                <h2 className="hero-title custom-font">Own the Street.</h2>
                <p className="hero-subtitle">stay drippy.</p>
                <button className="hero-btn"><a href={"#shop"}>Shop Now</a></button>
            </section>

            {/* Featured Products */}
            <section id="shop" className="featured-products">
                <h3 className="section-title custom-font">Featured Products</h3>
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
                    <a href="https://www.instagram.com/dripper.gallery/">Instagram</a>
                    <a href="mailto:support@dripper.pk">Email</a>
                </div>
            </footer>
        </div>
    );
};

export default Home;
