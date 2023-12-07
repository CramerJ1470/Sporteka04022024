const getLeagueByIdAPICall = `https://cdn.sportmonks.com/images/soccer/leagues/8/8.png`;

let leagueSchema = {
	data: {
		id: 8,
		sport_id: 1,
		country_id: 462,
		name: "Premier League",
		active: true,
		short_code: "UK PL",
		image_path: "https://cdn.sportmonks.com/images/soccer/leagues/8/8.png",
		type: "league",
		sub_type: "domestic",
		last_played_at: "2023-12-06 20:15:00",
		category: 1,
		has_jerseys: false,
		currentseason: {
			id: 21646,
			sport_id: 1,
			league_id: 8,
			tie_breaker_rule_id: 171,
			name: "2023/2024",
			finished: false,
			pending: false,
			is_current: true,
			starting_at: "2023-08-11",
			ending_at: "2024-05-19",
			standings_recalculated_at: "2023-12-06 22:17:04",
			games_in_current_week: true,
		},
	},
};
