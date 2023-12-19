import React, { useEffect, useContext, useState } from "react";

import "./trader.css";
import UserHistory from "./UserHistory";
import UserMenu from "./UserMenu";
import TokensOwned from "./TokensOwned";
import AuthContext from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";


function TraderDashboard1() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const traderData = {
    marketingInsights: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    betPredictions: "Bet predictions content goes here.",
    notifications: [
      { id: 1, message: "New trade alert: Buy AAPL at $150" },
      { id: 2, message: "Earnings report for Q3 is available" },
      // Add more notifications as needed
    ],
    earnings: {
      totalEarnings: 5000,
      monthlyEarnings: 1500,
    },
    tradeHistory: [
      { id: 1, symbol: "AAPL", type: "Buy", quantity: 10, price: 150, date: "2023-01-15" },
      { id: 2, symbol: "GOOGL", type: "Sell", quantity: 5, price: 2500, date: "2023-02-01" },
      // Add more trade history entries as needed
    ],
    depositWithdraw: {
      totalDeposit: 10000,
      totalWithdrawal: 3000,
      availableBalance: 7000,
    },
    helpSupport: "If you need assistance, please contact our support team at support@example.com.",
  };

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

  async function teamsButton () {
    console.log('team navigate');
        navigate("/teams");
  }

  async function playersButton () {
    navigate("/players");
  }

  return (
    <div>
      <div className="header">
     
      <h1>DASHBOARD</h1>
      <h2>Tokens Owned</h2>


      </div>
      <span className="usermenu">
        
        

         
        
        <div className="padtop20">
        
        <div className="tokensowned header padtop5">
        
            <TokensOwned />

          </div>
          
          </div>
         
        <div className="profile">
        
          <img src="profile_pic.jpg" alt="Profile" />
        </div>
        <div className="middle">
       
          <UserMenu traderData={traderData} />
        </div>
        <span className="sidebyside">
        <Link id="connectButton" className="button ball" onClick={connectToWallet}>
          Connect to Wallet
        </Link>
        <button id="teamsButton" className="button ball" onClick={teamsButton}>
         Teams Tokens
        </button>
        <button id="playersButton" className="button ball" onClick={playersButton}>
         Players Tokens
        </button>
        </span>
      </span>
    </div>
  );
}

export default TraderDashboard1;
