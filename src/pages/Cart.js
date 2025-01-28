import React, { useState } from "react";

const Cart = () => {
    // Sample initial cart items (could be empty at first)
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Folklore White Tea", price: "$10.99" },
        { id: 2, name: "Invincible Graphic Tee", price: "$9.99" },
    ]);

    // Function to remove items from the cart
    const removeFromCart = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    return (
        <div className="cart-page">
            <h2>Your Cart</h2>
            {cartItems.length > 0 ? (
                <ul className="cart-list">
                    {cartItems.map((item) => (
                        <li key={item.id} className="cart-item">
                            <span>{item.name} - {item.price}</span>
                            <button
                                className="remove-btn"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
