import React from "react";
import { Link } from "react-router-dom";
import "./home.css"; // Import the specific homepage styles
import Footer from "../footer/Footer"; // Import the footer component

function HomePage({teams,leagues,countries,cups}) {
	async function connectToWallet() {
		await connect();
	}

	//console.log("teams: ",teams);
	async function connect() {
		if (typeof window.ethereum !== "undefined") {
			try {
				await window.ethereum.request({
					method: "eth_requestAccounts",
				});
			} catch (error) {
				console.log(error);
			}
			const accounts = await window.ethereum.request({
				method: "eth_accounts",
			});
			// const accountName = window.getElementsByClass(
			// 	"mm-box mm-text multichain-account-picker__label mm-text--body-md mm-text--font-weight-bold mm-text--ellipsis mm-box--color-text-default"
			// )[0].innerText;
			if (accounts[0] === undefined ){
				document.getElementById(
					"connectButton"
				).innerHTML = "Please connect a wallet";
			}
			else {
			 document.getElementById(
				"connectButton"
			).innerHTML = `Connected  to ${accounts[0]}`;
			 }
			// console.log("accountName:", accountName);
			console.log(accounts);
		} else {
			document.getElementById("connectButton").innerHTML =
				"Please install MetaMask";
		}
	}

	return (
		<div>
			
				<span className="top">
					<div>
						<p className="centPage2 top kavoon">Sporteka</p>
						<p className="centPage1 top kavoon">
							Sport Blockchain Platform
						</p>
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