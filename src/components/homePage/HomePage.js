// HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import "./home.css"; // Import the specific homepage styles
import Footer from "../footer/Footer"; // Import the footer component

function HomePage() {
	return (
		<div>
			<div className="container">
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
					<Link className="button" >
						Connect to Wallet
					</Link>
				</div>
			</div>
			{/* Add the footer */}
			<Footer />
		</div>
	);
}

export default HomePage;
