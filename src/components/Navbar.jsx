// Navbar.jsx file
import React from 'react';
import { Link } from 'react-router-dom';
import CollabTechLogo from '../assets/CollabTechLogo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <section className="navbar-container">
                <div className="company-corner">
                    <img src={CollabTechLogo} alt="CollabTech Logo" className="logo-img" />
                    <div className="logo-link">
                        <Link to="/">Collaborative Tech LLC</Link>
                    </div>
                </div>
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </section>
        </nav>
    )
}

export default Navbar;