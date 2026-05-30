// About Page
import React from 'react';
import AboutUsImage from './assets/AboutUs.jpg';
import './About.css';

export default function About() {
    return (
        <div className="about-page">
            <h1 className="about-title">About Us</h1>
            <img className="about-us-image" src={ AboutUsImage } alt="About Us" />
            <h2 className="subheadings">Mission</h2>
            <h2 className="subheadings">Vision</h2>
        </div>
    );
}
