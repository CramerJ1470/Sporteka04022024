// RegisterPage.js
import React, { useState } from "react";
import "./register.css"; // Import the common styles
import { GoogleLogin } from "react-google-login";
import Navbar from "../navbar/Navbar";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("trader"); // Default to "Trader"
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password === confirmPassword) {
      console.log("Registering with:", { email, password, userType });
      // Reset password match error
      setPasswordMatchError(false);
    } else {
      // Set password match error
      setPasswordMatchError(true);
    }
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

          <label className="user-type">
            User Type:
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
          onFailure={(err) => console.log("Google registration failed:", err)}
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


// -------------------------------------//
// !!!!!!NOTES!!!!!!!! //

// Replace "YOUR_GOOGLE_CLIENT_ID" with the actual Client ID you obtained from the Google Cloud Console.

// Make sure to handle the Google registration logic appropriately in the handleGoogleRegister function. This might include sending the Google user data to your server for registration or integrating with your existing registration flow.
