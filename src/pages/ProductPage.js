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
            name: "Ferrari Jacket Black",
            price: "12999/-",
            description: "This Ferrari jacket is a bold statement piece that showcases the iconic Ferrari logo, symbolizing speed and luxury. The sleek design is complemented by high-quality materials, making it both stylish and comfortable. With its vibrant color and sporty look, this jacket is perfect for fans of the brand or anyone who wants to add a touch of racing-inspired flair to their wardrobe. Whether you're at a car show or just hanging out with friends, this jacket will definitely make you stand out!",
            img: "/components/products/ferrari-black-bed.jpg"
        },
        2: {
            name: "Ferrari Jacket Red",
            price: "12999/-",
            description: "This red Ferrari jacket is a showstopper! 🚗💨 The two Ferrari racing logos add a touch of speed and excitement to the design. The vibrant color and sleek style make it a standout piece for any racing enthusiast or fashion lover. You'll definitely turn heads and feel like you're part of the Ferrari team wearing this jacket!",
            img: "/components/products/ferrari-red-wall.jpg"
        },
        3: {
            name: "Ferrari Jacket Red-White-Black",
            price: "12999/-",
            description: "That Ferrari jacket with the red and white color scheme is seriously stylish! The Ferrari logo on the back adds a touch of luxury and sportiness to the design. You'll feel like a racing champion rocking this jacket! 🏁🔴⚪\n",
            img: "/components/products/ferrari-multi-wall.jpg"
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
            <div>
                <img src={product.img} alt={product.name} className="product-img-large" />
            </div>
            <div className="product-details">
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
