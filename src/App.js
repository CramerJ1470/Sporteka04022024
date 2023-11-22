// css
import "./App.css";
import "./css/workshop-styles.css";
//packages
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// components
import Connectmetamask from "./components/Connectmetamask";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import Leagues from "./components/Leagues";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import Register from "./components/Register";
// context
import AuthContext from "./context/AuthContext";
import LeaguesContext from "./context/LeaguesContext";
// services

import { getLeagues } from "./services";


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
					{/* <Navigation
									characters={characters}
									movies={movies}
									carts={carts}
								/> */}
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />
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
								<Route
									path="/landingpage"
									element={<LandingPage leagues={leagues} />}
								/>
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
			</LeaguesContext.Provider>
		</AuthContext.Provider>
	);
}

export default App;
