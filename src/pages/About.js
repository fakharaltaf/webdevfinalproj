// src/pages/About.js
import React from "react";

const About = () => {
    return (
        <div className="about-page">
            <header className="about-header">
                <h1>
                    <span className="custom-font">About Us </span>
                </h1>
            </header>
            <p>We redefine streetwear with style that speaks volumes. Our mission is to provide bold, high-quality apparel that empowers you to express your individuality. From edgy graphic tees to sleek hoodies and statement accessories, we curate pieces that blend comfort with cutting-edge fashion. Whether you're chasing trends or setting them, Dripper is here to help you make your mark.</p>

            <section className="about-mission">
                <h2 className="logo" >Our Mission</h2>
                <p>
                    At Dripper, we aim to deliver high-quality, trendy streetwear that
                    fits your style and budget. We're passionate about fashion and
                    committed to providing you with the best shopping experience.
                </p>
            </section>

            <section className="about-contact">
                <h2 className="logo">Get in Touch</h2>
                <p>
                    Have questions or want to collaborate? Feel free to reach out!
                </p>
                <ul className="contact-links">
                    <li>
                        <a href="mailto:support@dripper.pk">Email Us</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/dripper.gallery/" target="_blank" rel="noopener noreferrer">
                            Follow Us on Instagram
                        </a>
                    </li>

                </ul>
            </section>
        </div>
    );
};

export default About;
