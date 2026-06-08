// Services page
import React from 'react';
import './Services.css';

export default function Services() {
    return (
        <div className="services-page">
            <h1 className="services-title">Our Services</h1>
            <p className="services-description">At Collaborative Tech LLC, we offer a wide range of services to meet your technology needs. We are dedicated to providing innovative solutions that drive business success.</p>
            <h2 className="services-subheading">Frontend Development</h2>
                <div className="services-description-container">
                    <p className="services-subheading-description">
                    Frontend development focuses on everything a user sees, clicks, and interacts with directly in their web browser. It bridges the gap between visual design and technical implementation to ensure a seamless user experience.
                    </p>
                    <ul className="services-inclusion-list">
                        <li className="service-inclusion-item">
                            <b>What it entails: </b>
                            Translating UI/UX wireframes into responsive web pages, building interactive elements (buttons, menus, forms), managing client-side state, and optimizing performance for speed across all devices (mobile, tablet, desktop).
                        </li>
                        <li className="service-inclusion-item">
                            <b>Key Technologies: </b>
                            HTML5, CSS3, JavaScript, TypeScript, and modern frameworks like React, Next.js, or Vue.
                        </li>
                    </ul>
                </div>
            <h2 className="services-subheading">Backend Development</h2>
                <div className="services-description-container">
                    <p className="services-subheading-description">
                    Backend development handles the "under-the-hood" logic that powers the website. It focuses on data management, security, and server operations to ensure the application runs reliably behind the scenes.
                    </p>
                    <ul className="services-inclusion-list">
                        <li className="service-inclusion-item">
                            <b>What it entails: </b>
                            Building and configuring servers, designing scalable database structures to store and retrieve data, developing secure Application Programming Interfaces (APIs), and managing user authentication, encryption, and server-side business logic.
                        </li>
                        <li className="service-inclusion-item">
                            <b>Key Technologies: </b>
                            Node.js, Python, Java, Express, databases (SQL like PostgreSQL, NoSQL like MongoDB), cloud hosting (AWS, Google Cloud), and API architectures (REST, GraphQL).
                        </li>
                    </ul>
                </div>
            <h2 className="services-subheading">Full-Stack Development</h2>                
                <div className="services-description-container">
                    <p className="services-subheading-description">
                    Full-stack development combines both frontend and backend expertise to build completely integrated web applications from scratch. This service provides a holistic approach to software creation, ensuring that the visual interface and the server architecture work together perfectly.
                    </p>
                    <ul className="services-inclusion-list">
                        <li className="service-inclusion-item">
                            <b>What it entails: </b>
                            Handling the entire lifecycle of a digital product—from designing the database schema and writing server logic to engineering the user interface and deploying the final application to the cloud. It offers businesses a streamlined, efficient development process with a single point of technical alignment.
                        </li>
                        <li className="service-inclusion-item">
                            <b>Key Technologies: </b>
                            Full JavaScript/TypeScript stacks (like the MERN stack: MongoDB, Express, React, Node.js), Next.js with serverless architectures, and comprehensive deployment pipelines.
                        </li>
                    </ul>
                </div>
        </div>
    );
}