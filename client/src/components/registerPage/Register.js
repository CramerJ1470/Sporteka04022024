import React, { useState, useContext } from "react";
import "./register.css"; // Import the common styles
import { GoogleLogin } from "@leecheuk/react-google-login";
import AuthContext from "../../context/AuthContext";
import Navbar from "../navbar/Navbar";

import { register } from "../../services";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
	const [registered, setRegistered] = useState("false");
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	//   const [userName, setUserName] = useState(""); // New state for user name
	const [userType, setUserType] = useState("trader"); // Default to "Trader"
	const [passwordMatchError, setPasswordMatchError] = useState(false);

	const navigate = useNavigate();
	const handleRegister = (e) => {
		e.preventDefault();
		console.log(password, confirmPassword);

		// Check if passwords match
		if (password === confirmPassword) {
			console.log("Registering with:", {
				username,
				password,
				userType,
			});
			// Reset password match error
			setPasswordMatchError(false);
		} else {
			// Set password match error
			setPasswordMatchError(true);
		}
		localStorage.setItem("registered", true);
		register(username, password, userType);
		setRegistered(true);
		navigate("/registeredhomepage", { registered: registered });
	};

	const handleGoogleRegister = (googleData) => {
		// Implement Google registration logic here
		console.log("Google registration data:", googleData);
	};

	return (
		<div>
			<Navbar />
			{/* REGISTRATION FORM */}
			<div className="container">
				<form onSubmit={handleRegister}>
					{/* <label>
            User Name:
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <br /> */}
					<label>
						Email:
						<input
							type="email"
							value={username}
							onChange={(e) => setUserName(e.target.value)}
						/>
					</label>
					<br />
					<label>
						Password:
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
					<br />
					<label>
						Confirm Password:
						<input
							type="password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</label>
					{passwordMatchError && (
						<p style={{ color: "red" }}>Passwords do not match.</p>
					)}
					<h3 className="type">User Type:</h3>
					<label className="user-type">
						<div className="radio-buttons">
							<label>
								<input
									type="radio"
									value="trader"
									checked={userType === "trader"}
									onChange={() => setUserType("trader")}
								/>
								Trader
							</label>
							<label>
								<input
									type="radio"
									value="partner"
									checked={userType === "partner"}
									onChange={() => setUserType("partner")}
								/>
								Partner
							</label>
							<label>
								<input
									type="radio"
									value="club"
									checked={userType === "club"}
									onChange={() => setUserType("club")}
								/>
								Club
							</label>
						</div>
					</label>

					<br />
					<button className="btn" type="submit">
						Register
					</button>
				</form>
				<GoogleLogin
					className="btn"
					clientId="YOUR_GOOGLE_CLIENT_ID"
					buttonText="Register with Google"
					onSuccess={handleGoogleRegister}
					onFailure={(err) =>
						console.log("Google registration failed:", err)
					}
					cookiePolicy={"single_host_origin"}
				/>
				<p className="click-link">
					Already have an account?{" "}
					<a href="/login" className="login-link">
						Login
					</a>
				</p>
			</div>
		</div>
	);
};

export default RegisterPage;