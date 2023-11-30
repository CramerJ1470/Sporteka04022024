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
import Countries from "./components/Countries";

import LeaderboardPage from "./components/leaderboard/LeaderboardPage";
import Leagues from "./components/Leagues";
import Login from "./components/loginPage/Login";
import Logout from "./components/Logout";
// import Navbar from "./components/navbar/Navbar";
import Players from "./components/Players";
import Profile from "./components/profilePage/Profile";
import Register from "./components/registerPage/Register";
import Teams from "./components/Teams";
import LandingPage from "./components/landingPage/landingPage";
import TraderDashboard from "./components/dashboard/TraderDashboard";
import ClubDashboard from "./components/clubDashboard/ClubDashboard";

// context
import AuthContext from "./context/AuthContext";
import LeaguesContext from "./context/LeaguesContext";
import CountriesContext from "./context/CountriesContext";
import CupsContext from "./context/CupsContext";
import TeamsContext from "./context/TeamsContext";
// services

import { getLeagues } from "./services";
import { getCups } from "./services";
import { getCountries } from "./services";
import { getTeams } from "./services";

function App() {
	const [leagues, setLeagues] = useState([]);
	const [countries, setCountries] = useState([]);
	const [cups, setCups] = useState([]);
	const [teams, setTeams] = useState([]);
	const [isAuth, setIsAuth] = useState(localStorage.getItem("userData"));

	useEffect(() => {
		getLeagues(setLeagues);
	}, []);

	const updateLeagues = () => {
		getLeagues(setLeagues);
	};

	useEffect(() => {
		getCountries(setCountries);
	}, []);

	const updateCountries = () => {
		getCountries(setCountries);
	};

	useEffect(() => {
		getCups(setCups);
	}, []);

	const updateCups = () => {
		getCups(setCups);
	};

	useEffect(() => {
		getTeams(setTeams);
	}, []);

	const updateTeams = () => {
		getTeams(setTeams);
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
				<CountriesContext.Provider
					value={{
						countries: countries,
						setCountries,
						updateCountries,
					}}
				>
					<CupsContext.Provider
						value={{
							cups: cups,
							setCups,
							updateCups,
						}}
					>
						<TeamsContext.Provider
							value={{
								teams: teams,
								setTeams,
								updateTeams,
							}}
						>
							<div className="App">
								{/* <Navbar /> */}

								<Routes>
									<Route
										path="/"
										element={
											<HomePage
												teams={teams}
												leagues={leagues}
												countries={countries}
												cups={cups}
											/>
										}
									/>
									<Route
										path="/leaderboard"
										element={<LeaderboardPage />}
									/>
									<Route
										path="/traderdashboard"
										element={<TraderDashboard />}
									/>
									<Route
										path="/home"
										element={
											<HomePage
												teams={teams}
												leagues={leagues}
												countries={countries}
												cups={cups}
											/>
										}
									/>

									{!isAuth ? (
										<>
											<Route
												path="/login"
												element={<Login />}
											/>
											<Route
												path="/register"
												element={<Register />}
											/>
											<Route
												path="/connectmetamask"
												element={<Connectmetamask />}
											/>
											<Route
												path="/countries"
												element={
													<Countries
														countries={countries}
													/>
												}
											/>
											<Route
												path="/leaderboard"
												element={<LeaderboardPage />}
											/>
											<Route
												path="/teams"
												element={
													<Teams teams={teams} />
												}
											/>
											<Route
												path="/landingpage"
												element={
													<LandingPage
														leagues={leagues}
														cups={cups}
														teams={teams}
													/>
												}
											/>
											<Route
												path="/profile"
												element={
													<Profile isAuth={isAuth} />
												}
											/>
											<Route
												path="/clubdashboard"
												element={
													<ClubDashboard
														teams={teams}
													/>
												}
											/>
											<Route
												path="/players"
												element={
													<Players teams={teams} />
												}
											/>
											<Route
												path="/traderdashboard"
												element={<TraderDashboard />}
											/>
										</>
									) : (
										<>
											<Route
												path="/register"
												element={<Register />}
											/>
											<Route
												path="/leagues"
												element={
													<Leagues
														leagues={leagues}
													/>
												}
											/>

											<Route
												path="/profile"
												element={
													<Profile isAuth={isAuth} />
												}
											/>
											<Route
												path="/countries"
												element={
													<Countries
														countries={countries}
													/>
												}
											/>

											<Route
												path="/logout"
												element={
													<Logout isAuth={isAuth} />
												}
											/>
										</>
									)}
								</Routes>

								<Footer />
							</div>
						</TeamsContext.Provider>
					</CupsContext.Provider>
				</CountriesContext.Provider>
			</LeaguesContext.Provider>
		</AuthContext.Provider>
	);
}

export default App;
