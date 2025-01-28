// src/pages/Contact.js
import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you for reaching out! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="contact-page">
            <header className="contact-header custom-font">
                <h1>Contact Us</h1>
            </header>
            <p>We’d love to hear from you! Reach out to us with any questions or feedback.</p>

            <section className="contact-form-section">
                <h2>Send Us a Message</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />

                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Type your message here"
                        required
                    />

                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </section>

            <section className="contact-details">
                <h2>Contact Information</h2>
                <p>Email: <a href="mailto:support@dripper.com">support@dripper.com</a></p>
                <p>Instagram: <a href="https://www.instagram.com/dripper.gallery/">dripper.gallery</a></p>
                <p>Address: 123 Fashion Street, Style City, USA</p>
            </section>
        </div>
    );
};

export default Contact;
