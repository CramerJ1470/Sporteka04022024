import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Footer from "../footer/Footer";

function HomePage({ teams, leagues, countries, cups }) {
  useEffect(() => {
    // Call any initialization logic here
  }, []);

  async function connectToWallet() {
    try {
      await connect();
    } catch (error) {
      console.error(error);
    }
  }

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });

        updateConnectButton(accounts[0]);
        console.log(accounts);
      } catch (error) {
        console.error(error);
      }
    } else {
      updateConnectButton(undefined, "Please install MetaMask");
    }
  }

  function updateConnectButton(account, errorMessage) {
    const connectButton = document.getElementById("connectButton");

    if (connectButton) {
      if (account === undefined) {
        connectButton.innerHTML = errorMessage || "Please connect a wallet";
      } else {
        connectButton.innerHTML = `Connected to ${account}`;
      }
    }
  }

  return (
    <div>
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
        <Link
          id="connectButton"
          className="button"
          onClick={connectToWallet}
        >
          Connect to Wallet
        </Link>
      </div>

      {/* Add the footer */}
      <Footer />
    </div>
  );
}

export default HomePage;

//??-------------NOTES-------------------------??//
// 1. Added an empty `useEffect` hook for any potential future initializing logic
// 2. Consolidated error handling for wallet connection attempts
// 3. Created a separate function `updateConnectButton` to handle updating the Connect to Wallet button
// 4. Improved variable names for better readability
// 5. Used `console.error` for error logging
// 6. Simplified the rendering logic for the Connect Wallet button

