// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css'; // Import the specific landing page styles
import Footer from '../footer/Footer';


function LandingPage() {
  return (
    <div>
      <div className="landing-container">
        <h1 className="landing-title">Welcome to Sporteka</h1>
        <p className="landing-description">
          Discover the power of blockchain in the world of sports. Join Sporteka
          today and experience a new era of secure and transparent sports
          interactions.
        </p>
        <div className="landing-buttons">
          <Link to="/login" className="landing-button">
            Login
          </Link>
          <Link to="/register" className="landing-button">
            Register
          </Link>
        </div>
      </div>

      {/* Add the footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;