// Shop.js
import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
    // Mock product data (can be moved to a separate file for better organization)
    const products = [
        { id: 1, name: "Folklore White Tea", price: "5999/-", img: "/components/products/folklore-white-tea.jpg" },
        { id: 2, name: "Invincible Graphic Tee", price: "4999/-", img: "/components/products/invincible-black-tee.jpg" },
        { id: 3, name: "Vagabond Jogger Pants", price: "4500/-", img: "/components/products/jogger-pants.jpg" },
        { id: 4, name: "Meditation Black Tee", price: "3900/-", img: "/components/products/ongabonga.jpg" },
        { id: 5, name: "Samurai Soulmates White Tee", price: "7150/-", img: "/components/products/samurai-soulmates-white-tee.jpg" }
        // Add more products here
    ];

    return (
        <div className="shop-page">
            <header className="shop-header">
                <h1 className="custom-font">Shop All Products</h1>
                <p>Browse our exclusive collection and find your style.</p>
            </header>
            <section className="product-grid">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.img} alt={product.name} className="product-img" />
                        <div className="product-info">
                            <h4 className="product-title">{product.name}</h4>
                            <p className="product-price">{product.price}</p>
                            <Link to={`/product/${product.id}`} className="view-btn">
                                View Product
                            </Link>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Shop;
