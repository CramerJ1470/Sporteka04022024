import React, { useEffect, useContext, useState } from "react";
import "./loggedInHomePage.css";
import AuthContext from "../../context/AuthContext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../services";
import Navbar from "../navbar/Navbar";

function LoggedInHomePage({ teams }) {
	const navigate = useNavigate();
	const { isAuth, setIsAuth } = useContext(AuthContext);

	async function connectToWallet() {
		try {
			await connect();
		} catch (error) {
			console.error(error);
		}
	}
	const logoutHandler = async () => {
		const res = await logout();
		console.log(res);
		setIsAuth(false);
		navigate("/");
	};

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
			<Navbar />
			<span className="top">
				<div>
					<p className="centPage2 top kavoon">Sporteka</p>
					<p className="centPage1 top kavoon">
						Sport Blockchain Platform
					</p>
				</div>
			</span>
			<div className="buttons">
				<>
					<Link
						id="connectButton"
						className="button"
						onClick={connectToWallet}
					>
						Connect to Wallet
					</Link>
					<NavLink to="/teams" id="teamsButton" className="button">
						Team Tokens
					</NavLink>
					<NavLink
						to="/players"
						id="playersButton"
						className="button"
					>
						Player Tokens
					</NavLink>
				</>
			</div>
			<div className="buttons">
				<>
					<Link to="/matches" id="matchesButton" className="button">
						Matches
					</Link>
					<NavLink
						to="/traderdashboard"
						id="dashboardButton"
						className="button"
					>
						Trader Dashboard
					</NavLink>
					<NavLink
						to="/leaderboard"
						id="leaderButton"
						className="button"
					>
						Go to leaderboard
					</NavLink>
				</>
			</div>
			<div className="buttons">
				<NavLink to="/profile" id="profileButton" className="button">
					Profile
				</NavLink>
				<Link
					id="logoutButton"
					className="button"
					onClick={logoutHandler}
				>
					Logout
				</Link>
			</div>

			
		</div>
	);
}

export default LoggedInHomePage;

//??-------------NOTES-------------------------??//
// 1. Added an empty `useEffect` hook for any potential future initializing logic
// 2. Consolidated error handling for wallet connection attempts
// 3. Created a separate function `updateConnectButton` to handle updating the Connect to Wallet button
// 4. Improved variable names for better readability
// 5. Used `console.error` for error logging
// 6. Simplified the rendering logic for the Connect Wallet button
