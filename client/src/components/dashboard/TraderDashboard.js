// TraderDashboard.js
import React, { useState } from "react";
import "./trader.css"; // Import your CSS file
import UserHistory from "./UserHistory";
import UserMenu from "./UserMenu";

const TraderDashboard = () => {
	

	// Dummy data for Trader Dashboard
	

	return (
		<div className="trader-dashboard">
			<div className="side-panel">
				<div className="profile">
					<img src="profile_pic.jpg" alt="Profile" />
				</div>
			<UserMenu/>
			</div>
			
		</div>
	);
};

export default TraderDashboard;
