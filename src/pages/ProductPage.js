import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // State for quantity and popup
    const [quantity, setQuantity] = useState(1);
    const [popupVisible, setPopupVisible] = useState(false);

    // Mock product data
    const products = {
        1: {
            name: "Folklore White Tea",
            price: "5999/-",
            description: "A soothing white tea for every occasion.",
            img: "/components/products/folklore-white-tea.jpg"
        },
        2: {
            name: "Invincible Graphic Tee",
            price: "4999/-",
            description: "Stylish graphic tee for everyday wear.",
            img: "/components/products/invincible-black-tee.jpg"
        },
        3: {
            name: "Vagabond Jogger Pants",
            price: "4500/-",
            description: "Comfortable joggers for active lifestyles.",
            img: "/components/products/jogger-pants.jpg"
        },
        4: {
            name: "Meditation Black Tee",
            price: "3900/-",
            description: "Relax in style with this premium black tee.",
            img: "/components/products/ongabonga.jpg"
        },
        5: {
            name: "Samurai Soulmates White Tee",
            price: "7150/-",
            description: "A tribute to timeless bonds and elegance.",
            img: "/components/products/samurai-soulmates-white-tee.jpg"
        }
    };

    const product = products[id];

    // Handle invalid product IDs
    if (!product) {
        return <h2>Product not found!</h2>;
    }

    // Function to handle adding product to the cart
    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = [...cart, { ...product, quantity }];
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        // Show the popup for 3 seconds
        setPopupVisible(true);
        setTimeout(() => {
            setPopupVisible(false);
        }, 3000);
    };

    return (
        <div className="product-page">
            <button onClick={() => navigate(-1)} className="back-btn">Back</button>
            <div className="product-details">
                <img src={product.img} alt={product.name} className="product-img-large" />
                <div className="product-info">
                    <h2 className="product-title">{product.name}</h2>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">{product.price}</p>
                    <div className="quantity-section">
                        <label htmlFor="quantity">Quantity:</label>
                        <input
                            type="number"
                            id="quantity"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            className="quantity-input"
                        />
                    </div>
                    <button className="add-to-cart-btn" onClick={addToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
            {popupVisible && (
                <div className="popup">
                    {quantity} x {product.name} added to the cart!
                </div>
            )}
        </div>
    );
};

export default ProductPage;
