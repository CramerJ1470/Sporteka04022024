import React from "react";
// css
import "./App.css";
import "./components/registerPage/register.css";
import "./components/navbar/navbar.css";
import "./components/loginPage/login.css";
import "./components/footer/footer.css";
import "./css/workshop-styles.css";
//packages
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// components
import Connectmetamask from "./components/Connectmetamask";
import Footer from "./components/footer/Footer";
import HomePage from "./components/homePage/HomePage";

import Leagues from "./components/Leagues";
import Login from "./components/loginPage/Login";
import Logout from "./components/Logout";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/Profile";
import Register from "./components/registerPage/Register";
// context
import AuthContext from "./context/AuthContext";
import LeaguesContext from "./context/LeaguesContext";
import CupsContext from "./context/CupsContext";
// services

import { getLeagues } from "./services";
import { getCups } from "./services";

function App() {
	const [leagues, setLeagues] = useState([]);
	const [cups, setCups] = useState([]);
	const [isAuth, setIsAuth] = useState(localStorage.getItem("userData"));

	useEffect(() => {
		getLeagues(setLeagues);
	}, []);

	const updateLeagues = () => {
		getLeagues(setLeagues);
	};

	useEffect(() => {
		getCups(setCups);
	}, []);

	const updateCups = () => {
		getCups(setCups);
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
				<CupsContext.Provider
					value={{
						cups: cups,
						setCups,
						updateCups,
					}}
				>
					<div className="App">
						{/* <Navbar /> */}

						<Routes>
							<Route
								path="/"
								element={
									<HomePage leagues={leagues} cups={cups} />
								}
							/>
							<Route
								path="/home"
								element={
									<HomePage leagues={leagues} cups={cups} />
								}
							/>
							{!isAuth ? (
								<>
									<Route path="/login" element={<Login />} />
									<Route
										path="/register"
										element={<Register />}
									/>
									<Route
										path="/connectmetamask"
										element={<Connectmetamask />}
									/>
								</>
							) : (
								<>
									<Route path="/login" element={<Login />} />

									<Route
										path="/leagues"
										element={<Leagues leagues={leagues} />}
									/>

									<Route
										path="/profile"
										element={<Profile isAuth={isAuth} />}
									/>

									<Route
										path="/logout"
										element={<Logout isAuth={isAuth} />}
									/>
								</>
							)}
						</Routes>

						<Footer />
					</div>
				</CupsContext.Provider>
			</LeaguesContext.Provider>
		</AuthContext.Provider>
	);
}

export default App;
