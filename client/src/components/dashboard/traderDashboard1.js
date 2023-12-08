import React, { useEffect, useContext, useState } from "react";
import "./trader.css"; // Import your CSS file
import UserHistory from "./UserHistory";
import UserMenu from "./UserMenu";
import TokensOwned from "./TokensOwned";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import AuthContext from "../../context/AuthContext";

function traderDashboard1() {
	// const navigate = useNavigate();

	// const { isAuth, setIsAuth } = useContext(AuthContext);

	const traderData = {
		marketingInsights:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
			{
				id: 1,
				symbol: "AAPL",
				type: "Buy",
				quantity: 10,
				price: 150,
				date: "2023-01-15",
			},
			{
				id: 2,
				symbol: "GOOGL",
				type: "Sell",
				quantity: 5,
				price: 2500,
				date: "2023-02-01",
			},
			// Add more trade history entries as needed
		],
		depositWithdraw: {
			totalDeposit: 10000,
			totalWithdrawal: 3000,
			availableBalance: 7000,
		},
		helpSupport:
			"If you need assistance, please contact our support team at support@example.com.",
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
				connectButton.innerHTML =
					errorMessage || "Please connect a wallet";
			} else {
				connectButton.innerHTML = `Connected to ${account}`;
			}
		}
	}
	return (
		<div>
			<div className="header">
				<h2>Trader Dashboard</h2>
			</div>
			<span className="usermenu">
				<div className="tokensowned header padtop5">
					<h2>Tokens Owned</h2>
					<div className="padtop20">
						<TokensOwned />
					</div>
				</div>
				<div className="profile">
					<img src="profile_pic.jpg" alt="Profile" />
				</div>
				<div className="middle">
					<UserMenu traderData={traderData} />
				</div>
				<UserHistory traderData={traderData} />
				<Link
					id="connectButton"
					className="button"
					onClick={connectToWallet}
				>
					Connect to Wallet
				</Link>
			</span>
		</div>
	);
}

export default traderDashboard1;
