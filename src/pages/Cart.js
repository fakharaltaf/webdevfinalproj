import React, { useState, useEffect } from "react";

const CartPage = () => {
    const [cart, setCart] = useState([]);

    // Fetch cart items from localStorage on component mount
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    // Update cart in localStorage and state
    const updateCart = (updatedCart) => {
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // Handle quantity change
    const handleQuantityChange = (index, quantity) => {
        const updatedCart = [...cart];
        if (quantity < 1) return; // Prevent negative or zero quantity
        updatedCart[index].quantity = quantity;
        updateCart(updatedCart);
    };

    // Remove item from cart
    const handleRemove = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        updateCart(updatedCart);
    };

    // Calculate total price
    const calculateTotal = () => {
        return cart
            .reduce((total, item) => {
                const price = parseFloat(item.price.replace("/-", ""));
                return total + price * item.quantity;
            }, 0)
            .toFixed(2);
    };

    return (
        <div className="cart-page">
            <h1 className="custom-font small">Your Cart</h1>
            <div className="cart-container">
                {cart.length === 0 ? (
                    <div className="empty-cart">
                        <p>Your cart is empty!</p>
                    </div>
                ) : (
                    <>
                        <ul className="cart-list">
                            {cart.map((item, index) => (
                                <li key={index} className="cart-item">
                                    <div className="item-details">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="cart-item-img"
                                        />
                                        <div>
                                            <h3>{item.name}</h3>
                                            <p>{item.description}</p>
                                            <p>Price: {item.price}</p>
                                        </div>
                                    </div>
                                    <div className="item-actions">
                                        <label htmlFor={`quantity-${index}`}>
                                            Quantity:
                                        </label>
                                        <input
                                            type="number"
                                            id={`quantity-${index}`}
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) =>
                                                handleQuantityChange(
                                                    index,
                                                    Number(e.target.value)
                                                )
                                            }
                                            className="quantity-input"
                                        />
                                        <button
                                            className="remove-btn"
                                            onClick={() => handleRemove(index)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="cart-total">
                            <h3>Total: PKR {calculateTotal()}</h3>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartPage;
