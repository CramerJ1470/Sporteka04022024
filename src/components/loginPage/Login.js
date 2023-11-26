import React from "react";
import { useState } from "react";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		console.log("Logging in with:", { username, password });
	};

	const handleRegister = () => {
		console.log("Navigate to registration page or show registration form.");
	};

	return (
		<div className="container">
			<h2>Login</h2>
			<form onSubmit={handleLogin}>
				<label>
					Username:
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
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
			<p>
				Don't have an account?{" "}
				<a href="/register" onClick={handleRegister}>
					Register
				</a>
			</p>
		</div>
	);
};

export default Login;
