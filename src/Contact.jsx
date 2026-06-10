// Contact Page
import React, { useState } from 'react';
import ContactImage from './assets/workplaceCollaboration.webp';
import './Contact.css';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // todo: add multi-select to form so user can choose what services they are looking to recieve 
    const [selectedServices, setSelectedServices] = useState([]);
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // validating user info
        if (!name.trim() || !email.trim() || !message.trim()) {
            alert('Please fill in your name, email, and a message.');
            return;
        }

        // FINAL RECIPIENT: const recipient = "Collabtechllc@gmail.com";
        // KAKA IF YOU WANT TO TEST ON YOURSELF: const recipient = "ashishshr82@gmail.com";
        // REPLACE WITH COLLABTECH EMAIL ONCE FULLY SUCCESSFUL 
        const recipient = "rujulashr@gmail.com";
        const subject = `Inquiry from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

        // opening user's default email application and filling out with message from form
        window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="contact-page">
            <h1 className="contact-title">Contact Us</h1>
            <div className="contact-details">
                <p className="contact-detail-info"><b>Email: </b>Collabtechllc@gmail.com | <b>Phone Number: </b> (123) - 456 - 7890</p>
            </div> 
            <section className="contact-info">
                <img className="contact-img" src={ContactImage} alt="Contact Us" />
                <form className="input-box" onSubmit={handleSubmit}>
                    <input
                        className="name-field"
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        aria-label="Full name"
                    />
                    <input
                        className="email-field"
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-label="Email address"
                    />
                    <textarea
                        className="message-field"
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        aria-label="Message"
                    ></textarea>
                    <button type="submit" className="submit-button">Contact Us</button>
                </form> 
            </section>
        </div>
    );
}