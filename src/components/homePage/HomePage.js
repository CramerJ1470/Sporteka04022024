// HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function HomePage() {
  const connectToWallet = () => {
    // Add your wallet connection logic here
    console.log("Connecting to Wallet...");
  };

  return (

      <div>
        <span className="top">
          <div>
            <p className="centPage2 top kavoon">SportEka</p>
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

  
  );
}

export default HomePage;
