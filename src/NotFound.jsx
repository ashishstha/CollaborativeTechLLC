import React from 'react';
import './NotFound.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import MyButton from './components/MyButton';

export default function NotFound() {
    return (
        <div className="not-found-body-container">
            <section className="background-subsection">
                <p className="not-found-top-message">ERROR: PAGE NOT FOUND</p>
            <section className="title-section">
                 <h1 className="not-found-title">404</h1>
            </section>
            <div className='subsection'>
                <p className="not-found-message">The page you are looking for does not exist. Please check the URL or return to the homepage.</p>
                <MyButton to="/" className="return-to-homepage">Return to Homepage</MyButton>
            </div>
            </section>
        </div>
    );
}
