// About Page
import React from 'react';
import AboutUsImage from './assets/AboutUs.jpg';
import './About.css';

export default function About() {
    return (
        <div className="about-page">
            <section className="about-top-background">
                <h1 className="about-title">About Us</h1>
                <img className="about-us-image" src={ AboutUsImage } alt="About Us" />
            </section>
            <h2 className="subheadings">Mission</h2>
            <p className="about-description">At CollabTech LLC, our mission is to empower businesses by bridging the gap between complex technology and seamless user experiences. 
                We are dedicated to delivering comprehensive, full-stack digital solutions—combining robust back-end infrastructure with clean, intuitive front-end engineering. 
                Through a deeply collaborative approach, we treat our clients' visions as our own, building scalable, high-performance websites and applications that drive growth, 
                foster connection, and simplify the digital landscape.</p>
            <h2 className="subheadings">Vision</h2>
            <p className="about-description">Our vision is to become a premier global catalyst for digital transformation, recognized for redefining how businesses connect with 
                technology through collaborative engineering. We aspire to build an ecosystem where cutting-edge full-stack innovation is accessible to every organization, setting 
                new industry standards for seamless, high-performance web solutions. By continuously adapting to the evolving digital landscape, we aim to inspire trust, drive 
                sustainable growth for our partners, and shape a more interconnected, tech-driven tomorrow.</p>
        </div>
    );
}
