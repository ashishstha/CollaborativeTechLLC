// Contact Page
import React from 'react';
import ContactImage from './assets/workplaceCollaboration.webp';
import './Contact.css';

export default function Contact() {
    return (
        <div className="contact-page">
            <h1 className="contact-title">Contact Us</h1>
            <section className="contact-info">
                <img className="contact-img" src={ContactImage} alt="Contact Us" />
                <div className="input-box">
                    <input className="name-field" type="text" placeholder="Full Name"/>
                    <input className="email-field" type="email" placeholder="Email Address" />
                    <textarea className="message-field" placeholder="Your Message"></textarea>
                    <button className="submit-button">Send Message!</button>
                </div>
            </section>
        </div>
    )
}