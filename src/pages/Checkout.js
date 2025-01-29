import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Checkout = () => {
    const [cart, setCart] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        zip: "",
        paymentMethod: "credit-card",
    });

    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    // Calculate total price
    const calculateTotal = () => {
        return cart
            .reduce((total, item) => {
                const price = parseFloat(item.price.replace("/-", ""));
                return total + price * item.quantity;
            }, 0)
            .toFixed(2);
    };

    // Handle form input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Send order email using EmailJS
    const sendEmail = (orderDetails) => {
        const emailData = {
            name: formData.name,
            email: formData.email,
            address: formData.address,
            city: formData.city,
            zip: formData.zip,
            paymentMethod: formData.paymentMethod,
            orderDetails: orderDetails,
            total: `PKR ${calculateTotal()}`,
        };

        emailjs
            .send(
                "service_gcaxi2r",  // Replace with EmailJS Service ID
                "template_pgoe4zd",  // Replace with EmailJS Template ID
                emailData,
                "lpoCitbM1z3RkcjE3"  // Replace with EmailJS Public Key
            )
            .then(
                () => {
                    alert("Order placed successfully! Confirmation sent.");
                    localStorage.removeItem("cart");
                    navigate("/");
                },
                (error) => {
                    console.error("Email sending failed:", error);
                    alert("Failed to place order. Try again.");
                }
            );
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const orderDetails = cart
            .map(
                (item) =>
                    `Item: ${item.name}, Quantity: ${item.quantity}, Price: ${item.price}`
            )
            .join("\n");

        sendEmail(orderDetails);
    };

    return (
        <div className="checkout-page">
            <h1 className="custom-font">Checkout</h1>

            <div className="checkout-container">
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index} className="order-item">
                                <img src={item.img} alt={item.name} className="order-img" />
                                <div>
                                    <h4>{item.name}</h4>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: {item.price}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: PKR {calculateTotal()}</h3>
                </div>
                <div className="checkout-form">
                    <h2>Billing Details</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                        <label>Address:</label>
                        <input type="text" name="address" value={formData.address} onChange={handleChange} required />

                        <label>City:</label>
                        <input type="text" name="city" value={formData.city} onChange={handleChange} required />

                        <label>ZIP Code:</label>
                        <input type="text" name="zip" value={formData.zip} onChange={handleChange} required />

                        <label>Payment Method:</label>
                        <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
                            <option value="cod">Cash on Delivery</option>
                            <option value="jazz-cash">Jazz Cash</option>
                            <option value="bank-transfer">Bank Transfer</option>
                        </select>

                        <button type="submit" className="checkout-btn">Place Order</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
