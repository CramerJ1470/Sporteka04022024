// RegisterPage.js
import React, { useState } from "react";
import "./register.css"; // Import the common styles
import Footer from "../footer/Footer";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password === confirmPassword) {
      console.log("Registering with:", { username, email, password });
      // Reset password match error
      setPasswordMatchError(false);
    } else {
      // Set password match error
      setPasswordMatchError(true);
    }
  };

  return (
    <div>
      <div className="container">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
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
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <br />
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account?{" "}
          <a href="/login" className="login-link">
            Login
          </a>
        </p>
      </div>

      {/* Add the footer */}
      <Footer />
    </div>
  );
};

export default RegisterPage;
