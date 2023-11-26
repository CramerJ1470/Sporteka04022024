// RegisterPage.js
import React, { useState } from "react";
import "./register.css"; // Import the common styles
import Footer from "../footer/Footer";
import { GoogleLogin } from "react-google-login";

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

  const handleGoogleRegister = (googleData) => {
    // ?? Implement Google registration logic here ?? //
    console.log('Google registration data:', googleData);
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
          <button className="btn" type="submit">Register</button>
        </form>
        <GoogleLogin
          className="btn"
          clientId="YOUR_GOOGLE_CLIENT_ID"
          buttonText="Register with Google"
          onSuccess={handleGoogleRegister}
          onFailure={(err) => console.log('Google registration failed:', err)}
          cookiePolicy={'single_host_origin'}
        />
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



// -------------------------------------//
// !!!!!!NOTES!!!!!!!! //

// Replace "YOUR_GOOGLE_CLIENT_ID" with the actual Client ID you obtained from the Google Cloud Console.

// Make sure to handle the Google registration logic appropriately in the handleGoogleRegister function. This might include sending the Google user data to your server for registration or integrating with your existing registration flow.