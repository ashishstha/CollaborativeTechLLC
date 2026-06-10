// Home page
import React from 'react';
import './Home.css';
import { Card } from 'react-bootstrap';
import MyButton from './components/MyButton';
import CollabTechLogo from './assets/CollabTechLogo.png';
import FronendImage from './assets/FrontendSample.png';
import BackendImage from './assets/BackendSample.png';
import FullStackImage from './assets/FullStackSample.png';

export default function Home() {
    return (
        <div className="home-page">
            {/* top section of the homepage */}
            <section className="home-banner"> 
                <h1 className="home-title">Here to Bring Your Vision to Life!</h1>
                <img src={ CollabTechLogo } alt="CollabTech Logo Sample" className="banner-logo-image" />   
            </section>
            {/* bottom section of the homepage */}
            <h2 className="home-subheading">Our Services</h2>
            <section className="service-cards-container">
                <Card className="service-card">
                    <Card.Img className="card-image" src={FronendImage} alt="Frontend Development" />
                    <Card.Body className="service-card-body">
                        <Card.Title className="service-card-title">Frontend Development</Card.Title>
                        <MyButton to="/services" className="learn-more-button">Learn More</MyButton>
                    </Card.Body>
                </Card>
                <Card className="service-card">
                    <Card.Img className="card-image" src={BackendImage} alt="Backend Development" />
                    <Card.Body className="service-card-body">
                        <Card.Title className="service-card-title">Backend Development</Card.Title>
                        <MyButton to="/services" className="learn-more-button">Learn More</MyButton>
                    </Card.Body>
                </Card>
                <Card className="service-card">
                    <Card.Img className="card-image" src={FullStackImage} alt="Full-Stack Web Development" />
                    <Card.Body className="service-card-body">
                        <Card.Title className="service-card-title">Full-Stack Development</Card.Title>
                        <MyButton to="/services" className="learn-more-button">Learn More</MyButton>
                    </Card.Body>
                </Card>
            </section>
            <h2 className="home-subheading">Contact Us</h2>
            <section className="home-contact-container">
                <p className="contact-message">
                    Contact us today for a tailored quote based on your specific project requirements. Have questions? We're here to help!
                </p>
                <MyButton to="/contact" className="to-contact-page">Go to Contact Page</MyButton>
            </section>
        </div>
    );
}