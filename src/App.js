// App.js
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./css/workshop-styles.css";
import Connectmetamask from "./components/Connectmetamask";
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
// Import your Navbar component

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
          {/* Include your Navbar component */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            {!isAuth ? (
              <>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/connectmetamask"
                  element={<Connectmetamask />}
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
          <Footer />
        </div>
      </LeaguesContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
