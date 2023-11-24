// HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Footer from "../footer/Footer";

function HomePage() {
  const connectToWallet = () => {
    // Add your wallet connection logic here
    console.log("Connecting to Wallet...");
  };

  return (
    <div>
      <div className="container">
        <span className="top">
          <div>
            <p className="centPage2 top kavoon">Sporteka</p>
            <p className="centPage1 top kavoon">Sport Blockchain Platform</p>
          </div>
        </span>
        <div className="buttons">
          {/* Register button */}
          <Link to="/register" className="button">
            Register
          </Link>

          {/* Login button */}
          <Link to="/login" className="button">
            Login
          </Link>

          {/* Connect to Wallet button */}
          <Link className="button" onClick={connectToWallet}>
            Connect to Wallet
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
