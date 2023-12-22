import React, { useState, useContext } from "react";
//import { Link } from "react-router-dom";
import "./register.css"; // Import the common styles
//import { GoogleLogin } from "@leecheuk/react-google-login";
import AuthContext from "../../context/AuthContext";

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

  localStorage.setItem("wallacc", undefined);

  const handleRegister = () => {
    let wallacc = localStorage.getItem("wallacc");
    console.log(`wallacc:`, wallacc);
    if (!localStorage.getItem("wallacc")) {
      document.getElementsByClassName("bluewhite")[0].style.display = "";
      document.getElementsByClassName("bluewhite")[0].innerText =
        "Please Connect Metamask";
    } else {
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
    }
  };

//   ADD GOOGLE REGISTRATION OPTION FOR LATER USE; NEED API CONNECT
//   const handleGoogleRegister = (googleData) => {
//     // Implement Google registration logic here
//     console.log("Google registration data:", googleData);
//   };

  async function connectToWallet() {
    try {
      await connect();
    } catch (error) {
      console.error(error);
    }
  }

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });

        updateConnectButton(accounts[0]);
        console.log(accounts);
      } catch (error) {
        console.error(error);
      }
    } else {
      updateConnectButton(undefined, "Please install MetaMask");
    }
  }

  function updateConnectButton(account, errorMessage) {
    const connectButton = document.getElementById("connectButton");

    if (connectButton) {
      if (account === undefined) {
        connectButton.innerHTML = errorMessage || "Please connect a wallet";
      } else {
        connectButton.innerHTML = `Connected`;
        localStorage.setItem("wallacc", account);
        document.getElementsByClassName("bluewhite")[0].style.display = "none";
      }
    }
  }

  return (
    <div>
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
          <p className="bluewhite">
            **To complete the registration process, it's necessary to link a wallet to receive Sporteka Coins for participation.**
          </p>

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
          <div className="btn-container">
            <button className="btn" type="submit">
              Register
            </button>
            <button
              id="connectButton"
              className="btn"
              onClick={connectToWallet}
            >
              Connect to Wallet
            </button>
          </div>
        </form>

	{/* GOOGLE REGISTRATION OPTION FOR LATER USE; NEED API CONNECT */}

        {/* <GoogleLogin
          className="btn"
          clientId="YOUR_GOOGLE_CLIENT_ID"
          buttonText="Register with Google"
          onSuccess={handleGoogleRegister}
          onFailure={(err) => console.log("Google registration failed:", err)}
          cookiePolicy={"single_host_origin"}
        /> */}
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
