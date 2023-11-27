// App.js
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./css/workshop-styles.css";

import Footer from "./components/footer/Footer";
import HomePage from "./components/homePage/HomePage";
import LandingPage from "./components/landingPage/LandingPage";
import Leagues from "./components/Leagues";
import Logout from "./components/Logout";
import Register from "./components/registerPage/Register";
import LoginPage from "./components/loginPage/Login";
import ProfilePage from "./components/profilePage/Profile";
import AuthContext from "./context/AuthContext";
import LeaguesContext from "./context/LeaguesContext";
import { getLeagues } from "./services";
import LeaderboardPage from "./components/leaderboard/LeaderboardPage";
import ConnectMetaMask from "./components/Connectmetamask";

// Import your Navbar component
//import Navbar from "./components/navbar/Navbar";

function App() {
  const [leagues, setLeagues] = useState([]);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("userData"));

  useEffect(() => {
    getLeagues(setLeagues);
  }, []);

  const updateLeagues = () => {
    getLeagues(setLeagues);
  };

  return (
    <AuthContext.Provider value={{ isAuth: isAuth, setIsAuth }}>
      <LeaguesContext.Provider
        value={{
          leagues: leagues,
          setLeagues,
          updateLeagues,
        }}
      >
        <div className="App">
          {/* Include your Navbar component, acting up so commenting it out for now */}
          {/* <Navbar /> */}

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            {!isAuth ? (
              <>
                <Route path="/login" element={<LoginPage />} />
                <Route path="leaderboard" element={<LeaderboardPage />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/connectmetamask"
                  element={<ConnectMetaMask />}
                />
              </>
            ) : (
              <>
                <Route
                  path="/landingpage"
                  element={<LandingPage leagues={leagues} />}
                />
                <Route path="/leagues" element={<Leagues leagues={leagues} />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route
                  path="/logout"
                  element={<Logout isAuth={isAuth} />}
                />
              </>
            )}
          </Routes>

          {/* Include your Footer component */}
          <Footer />
        </div>
      </LeaguesContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;