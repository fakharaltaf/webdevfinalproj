import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock product data
    const products = {
        1: { name: "Folklore White Tea", price: "$10.99", description: "A soothing white tea for every occasion.", img: "/components/products/folklore-white-tea.jpg" },
        2: { name: "Invincible Graphic Tee", price: "$9.99", description: "Stylish graphic tee for everyday wear.", img: "/components/products/invincible-black-tee.jpg" },
        3: { name: "Vagabond Jogger Pants", price: "$14.99", description: "Comfortable joggers for active lifestyles.", img: "/components/products/jogger-pants.jpg" },
    };

    const product = products[id];

    // Handle invalid product IDs
    if (!product) {
        return <h2>Product not found!</h2>;
    }

    return (
        <div className="product-page">
            <button onClick={() => navigate(-1)} className="back-btn">Back</button>
            <div className="product-details">
                <img src={product.img} alt={product.name} className="product-img-large" />
                <div className="product-info">
                    <h2 className="product-title">{product.name}</h2>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">{product.price}</p>
                    <button
                        className="add-to-cart-btn"
                        onClick={() => alert(`${product.name} added to cart!`)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
