import React, { useState, useEffect } from 'react';

const LeaguesComponent = () => {
  // State to store data
  const [upcomingMatches, setUpcomingMatches] = useState([]);
  const [leagueStandings, setLeagueStandings] = useState([]);
  const [recentResults, setRecentResults] = useState([]);
  const [newsUpdates, setNewsUpdates] = useState([]);

  // Simulate data fetching with useEffect
  useEffect(() => {
    // Replace this with actual API calls to SportEka backend
    // For simplicity, let's simulate data fetching
    const fetchData = async () => {
      try {
        // Fetch upcoming matches data
        const upcomingMatchesData = await fetch('/api/upcoming-matches');
        const upcomingMatchesJson = await upcomingMatchesData.json();
        setUpcomingMatches(upcomingMatchesJson);

        // Fetch league standings data
        const leagueStandingsData = await fetch('/api/league-standings');
        const leagueStandingsJson = await leagueStandingsData.json();
        setLeagueStandings(leagueStandingsJson);

        // Fetch recent results data
        const recentResultsData = await fetch('/api/recent-results');
        const recentResultsJson = await recentResultsData.json();
        setRecentResults(recentResultsJson);

        // Fetch news and updates data
        const newsUpdatesData = await fetch('/api/news-updates');
        const newsUpdatesJson = await newsUpdatesData.json();
        setNewsUpdates(newsUpdatesJson);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="league-container">
      <h1>Premier League</h1>

      {/* Upcoming Matches */}
      <h2>Upcoming Matches</h2>
      <ul>
        {upcomingMatches.map((match, index) => (
          <li key={index}>{/* Display match details here */}</li>
        ))}
      </ul>

      {/* League Standings */}
      <h2>League Standings</h2>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Played</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Draws</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {leagueStandings.map((team, index) => (
            <tr key={index}>
              <td>{team.name}</td>
              <td>{team.played}</td>
              <td>{team.wins}</td>
              <td>{team.losses}</td>
              <td>{team.draws}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Recent Results */}
      <h2>Recent Results</h2>
      <ul>
        {recentResults.map((result, index) => (
          <li key={index}>{/* Display result details here */}</li>
        ))}
      </ul>

      {/* News and Updates */}
      <h2>News and Updates</h2>
      <ul>
        {newsUpdates.map((update, index) => (
          <li key={index}>{/* Display update details here */}</li>
        ))}
      </ul>
    </div>
  );
};

export default LeaguesComponent;
