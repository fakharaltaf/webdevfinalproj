// Shop.js
import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
    // Mock product data (can be moved to a separate file for better organization)
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
