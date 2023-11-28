// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css'; // Import the specific landing page styles
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';


function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="landing-container">
        <h2 className="landing-title">Welcome to Sporteka</h2>
        <p className="landing-description">
          Discover the power of blockchain in the world of sports. Join Sporteka
          today and experience a new era of secure and transparent sports
          interactions.
        </p>
        <div className="landing-buttons">
          <Link to="/login" className="landing-button">
            Enter Here
          </Link>
        </div>
      </div>

      {/* Add the footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;