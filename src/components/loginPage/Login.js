import React from "react";
import { useState } from "react";
import { GoogleLogin } from "@leecheuk/react-google-login";
import Navbar from "../navbar/Navbar";

const LoginPage = () => {
	const [loginIdentifier, setLoginIdentifier] = useState(""); // Changed from 'username' to 'loginIdentifier'
	const [password, setPassword] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		console.log("Logging in with:", { loginIdentifier, password });
	};

	const handleGoogleLogin = (googleData) => {
		// Implement Google login logic here
		console.log("Google login data:", googleData);
	};

	const handleRegister = () => {
		console.log("Navigate to registration page or show registration form.");
	};

	return (
		<div>
			<Navbar />
			{/* LOGIN FORM */}
			<div>
				<form onSubmit={handleLogin}>
					<label>
						Username or Email: {/* Updated label */}
						<input
							type="text"
							value={loginIdentifier}
							onChange={(e) => setLoginIdentifier(e.target.value)}
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
					<button type="submit">Login</button>
				</form>
				<GoogleLogin
					clientId="YOUR_GOOGLE_CLIENT_ID"
					buttonText="Login with Google"
					onSuccess={handleGoogleLogin}
					onFailure={(err) =>
						console.log("Google login failed:", err)
					}
					cookiePolicy={"single_host_origin"}
				/>
				<p className="click-link">
					Don't have an account?{" "}
					<a
						href="/register"
						className="register-link"
						onClick={handleRegister}
					>
						Register
					</a>
				</p>
			</div>
		</div>
	);
};

export default LoginPage;



// ----------------------------- //
// !! NOTES ON LOGINPAGE.JS !! //

// Replace "YOUR_GOOGLE_CLIENT_ID" with the actual Client ID you obtained from the Google Cloud Console.

// In this example, I added a button for "Login with Google" (handleGoogleLogin function) to the login form. The GoogleLogin component is from the react-google-login package. It handles the OAuth flow for Google sign-in.

// Remember to handle the Google login logic appropriately in the handleGoogleLogin function. This might include sending the Google user data to your server for authentication or integrating with your existing login flow.