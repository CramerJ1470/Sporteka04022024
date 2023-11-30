// ClubDashboard.js
import React from "react";
import "./club.css";

const ClubDashboard = () => {
	return (
		<div className="frame">
			<div className="div">
				<div className="overlap">
					<div className="text-wrapper">Manchester City Club</div>
					<img
						className="club-logo"
						alt="Club Logo"
						src="manchester-city-s-original-logo-is-free-to-download-8.png"
					/>
				</div>
				<img
					className="ph-backspace-light"
					alt="Ph backspace light"
					src="ph-backspace-light.svg"
				/>
				<div className="overlap-group">
					<div className="rectangle" />
					<div className="text-wrapper-2">off</div>
					<div className="rectangle-2" />
					<div className="text-wrapper-3">on</div>
				</div>
				<div className="text-wrapper-4">Online</div>
				<div className="div-wrapper">
					<div className="text-wrapper-5">Visit Club Dashboard</div>
				</div>
				<img
					className="stadium-icon"
					alt="Stadium Icon"
					src="emojione-v1-stadium.svg"
				/>
				<img
					className="wallet-icon"
					alt="Wallet Icon"
					src="solar-wallet-bold.svg"
				/>
				<div className="text-wrapper-6">Connect Club Wallet</div>
				<div className="text-wrapper-7">Account Page Settings</div>
				<div className="text-wrapper-8">Verification</div>
				<div className="help-support">Help & Support</div>
				<div className="term-conditions">Terms & Conditions</div>
				<img
					className="account-cog-icon"
					alt="Account Cog Icon"
					src="mdi-account-cog-outline.svg"
				/>
				<img
					className="domain-verification-icon"
					alt="Domain Verification Icon"
					src="material-symbols-domain-verification-outline.svg"
				/>
				<img
					className="support-icon"
					alt="Support Icon"
					src="flat-color-icons-support.svg"
				/>
				<img
					className="contract-icon"
					alt="Contract Icon"
					src="material-symbols-contract-outline.svg"
				/>
			</div>
		</div>
	);
};

export default ClubDashboard;
