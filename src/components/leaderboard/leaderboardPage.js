import React from "react";
import "./leaderboard.css";

const LeaderboardPage = () => {
  return (
    <div className="frame">
      <div className="div">
        <div className="overlap">
          <img className="ion-football" alt="Ion football" src="ion_football.svg" />
          <div className="text-wrapper">Clubs</div>
        </div>
        <img className="vector" src="home.svg" />
        <div className="text-wrapper-2">Home</div>
        <img className="carbon-user-profile" alt="Carbon user profile" src="carbon_user-profile.svg" />
        <div className="text-wrapper-3">players</div>
        <div className="overlap-group">
          <div className="text-wrapper-4">Trend</div>
          <img className="mdi-chart-line" alt="Mdi chart line" src="mdi_chart-line.svg" />
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-5">prediction</div>
          <img className="mdi-alphabet-b-box" alt="Mdi alphabet b box" src="mdi_alphabet-b-box.svg" />
        </div>
        <img className="vector" alt="Vector" src="home.svg" />
        <img className="ph-backspace-light" alt="Ph backspace light" src="ph-backspace-light.svg" />
        <img className="LEADERBOARD-NEWS" alt="Leaderboard NEWS" src="NEWS.png" />
        <div className="text-wrapper-6">Top sport traders</div>
        <div className="text-wrapper-7">Names</div>
        <div className="text-wrapper-8">no/clubs</div>
        <div className="text-wrapper-9">ROI</div>
        <div className="ellipse" />
        <div className="text-wrapper-10">James karr</div>
      </div>
    </div>
  );
};

export default LeaderboardPage;