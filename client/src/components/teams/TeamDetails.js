import React from "react";
import { Link, useParams } from "react-router-dom";
import Video from "./videoPlayer/Video";
import './videoPlayer/Video.css';

let team = {};
function TeamDetails({ teams, isAuth }) {
	console.log(teams);
	const { id } = useParams();
	console.log("Teamdetails id", id);
	teams.forEach((item) => {
		if (item.id === Number(id)) {
			team = item;
		}
	});
	console.log(team);
	if (team.country_id === 462) {
		team.country = "England";
	}
	console.log(team);

	const video = {
		url: team.url,
	};

	return (
		<>
			<div className="mid">
				<div id={team.id} className="playercard">
					<img src={team.image_path} alt="logo" />
					<h1>{team.name}</h1>
					<p>Token: {team.short_code} </p>
					<p>Country: {team.country}</p>
					<p>Founded: {team.founded}</p>
					
					
				</div>
				<div className="cent">
				<button className="button cent">
						Purchase {team.short_code} token
					</button>
					<Video video={video} />
					</div>
			</div>
			
					
		</>
	);
}

export default TeamDetails;
