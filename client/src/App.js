import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import "./components/registerPage/register.css";
import "./components/navbar/navbar.css";
import "./components/loginPage/login.css";
import "./components/footer/footer.css";
import "./css/workshop-styles.css";
import AuthContext from "./context/AuthContext";
import CountriesContext from "./context/CountriesContext";
import TeamsContext from "./context/TeamsContext";
import StandingsContext from "./context/StandingsContext";
import PlayersContext from "./context/TeamsContext";
import {
getStandings,
	getSportmonksTeams,
	getSportmonksPlayers,
} from "./services";

import Connectmetamask from "./components/Connectmetamask";
import Footer from "./components/footer/Footer";
import HomePage from "./components/homePage/HomePage";
import Countries from "./components/Countries";
import LeaderboardPage from "./components/leaderboard/leaderboardPage";
import Login from "./components/loginPage/Login";
import Logout from "./components/Logout";
import Players from "./components/players/Players";
import Profile from "./components/profilePage/Profile";
import Register from "./components/registerPage/Register";
import Teams from "./components/teams/Teams";
import LandingPage from "./components/landingPage/landingPage";
import TraderDashboard1 from "./components/dashboard/traderDashboard1";
import ClubDashboard from "./components/clubDashboard/ClubDashboard";
import TeamDetails from "./components/teams/TeamDetails";
import RegisteredHomePage from "./components/registerHomePage/RegisteredHomePage";
import LoggedInHomePage from "./components/loggedInHomePage/LoggedInHomePage";
// import HomeButton from "./components/common/homeButton";


function App() {


	const [players, setPlayers] = useState([]);
	const [standings,setStandings] = useState([]);
	const [teams, setTeams] = useState([]);
	const [isAuth, setIsAuth] = useState(localStorage.getItem("userData"));

	useEffect(() => {
		getSportmonksPlayers(setPlayers);
		getStandings(setStandings);
		getSportmonksTeams(setTeams);
	}, []);
	const updatePlayers = () => getSportmonksPlayers(setPlayers);
	const updateStandings = () => getStandings(setStandings);
	const updateTeams = () => getSportmonksTeams(setTeams);

	return (
		<AuthContext.Provider value={{ isAuth: isAuth, setIsAuth }}>
					<StandingsContext.Provider
						value={{
							standings:standings,
							setStandings,
							updateStandings,
						}}
						>
						<PlayersContext.Provider
							value={{
								players: players,
								setPlayers,
								updatePlayers,
							}}
						>	
						<TeamsContext.Provider
						value={{
							teams: teams,
							setTeams,
							updateTeams
						}}
					>
							<div className="App">
								
								
								<Routes>
									<Route
										path="/"
										element={
											<HomePage
												teams={teams}
												standings = {standings}
												
											/>
										}
									/>
									<Route
										path="/registeredhomepage"
										element={
											<RegisteredHomePage
												isAuth={isAuth}
											/>
										}
									/>
									<Route
										path="/loggedinhomepage"
										element={
											<LoggedInHomePage isAuth={isAuth} />
										}
									/>

									<Route
										path="/traderdashboard"
										element={<TraderDashboard1 standings={standings}/>}
									/>
									<Route path="/login" element={<Login />} />

									<Route
										path="/home"
										element={
											<HomePage
												teams={teams}
												isAuth={isAuth}
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
												element={
													<Register isAuth={isAuth} />
												}
											/>
											<Route
												path="/connectmetamask"
												element={<Connectmetamask />}
											/>
											<Route
												path="/countries"
												element={
													<Countries
														
													/>
												}
											/>
											<Route
												path="/leaderboard"
												element={
													<LeaderboardPage
														isAuth={isAuth}
														teams={teams}
													/>
												}
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
												element={<TraderDashboard1 />}
											/>
											<Route
												path="/leaderboard"
												element={<LeaderboardPage />}
											/>
										</>
									) : (
										<>
											<Route
												path="/teamdetails/:id"
												element={
													<TeamDetails
													teams={teams}
														standings = {standings}
														
													/>
												}
											/>
											<Route
												path="/leaderboard"
												element={
													<LeaderboardPage
													standings={standings}
														isAuth={isAuth}
														teams={teams}
													/>
												}
											/>

											<Route
												path="/loggedinhomepage"
												element={
													<LoggedInHomePage
														isAuth={isAuth}
													/>
												}
											/>
											<Route
												path="/register"
												element={<Register />}
											/>
											<Route
												path="/teams"
												element={
													<Teams teams={teams} standings = {standings} />
												}
											/>
											<Route
												path="/landingpage"
												element={
													<LandingPage
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
													standings= {standings}
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
												element={<TraderDashboard1 standings={standings}/>}
											/>
											<Route
												path="/leaderboard"
												element={<LeaderboardPage standings={standings}/>}
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
						</PlayersContext.Provider>
						</StandingsContext.Provider>
				</AuthContext.Provider>
	);
}

export default App;
