// Home page
import React from 'react';
import { Image } from 'react';
import './Home.css';

import CollabTechLogoExample from './assets/CollabTechLogoExample.png';

export default function Home() {
    return (
        <div className="home-page">
            <h1 className="home-title">Welcome to Collaborative Tech LLC</h1>
            <p>Your partner for modern digital solutions.</p>
        </div>
    );
}