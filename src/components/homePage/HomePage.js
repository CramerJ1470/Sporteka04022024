// HomePage.js
import React from 'react';
import './home.css'; // Import the specific homepage styles
import Footer from '../footer/Footer'; // Import the footer component

function HomePage() {
  return (
    <div>
      <div className="container">
        <span className="top">
          <div>
            <p className="centPage2 top kavoon">Sporteka</p>
            <p className="centPage1 top kavoon">Sport Blockchain Platform</p>
          </div>
        </span>
      </div>

      {/* Add the footer */}
      <Footer />
    </div>
  );
}

export default HomePage;