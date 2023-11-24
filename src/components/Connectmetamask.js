import React from "react";
import styles from "../css/page.module.css";

function LandingPage(leagues) {
	return (
		<div>
			<link rel="preconnect" href="https://fonts.googleapis.com"></link>
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossorigin
			></link>
			<link
				href="https://fonts.googleapis.com/css2?family=Kavoon&display=swap"
				rel="stylesheet"
			></link>

<span className="buttons">
				<button className="centText centPage1 kavoon narrow" onClick={"connect"}>
					Connect Wallet
				</button>
				<button className="centText centPage1 kavoon narrow" onClick={"register"}>
					Register
				</button>
				<button className="centText centPage1 kavoon narrow" onClick={"login"}>
					Login
				</button>
			</span>
		</div>
	);
}

export default LandingPage;
