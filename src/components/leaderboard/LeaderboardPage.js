import React from "react";
import "./leaderboard.css";
import Navbar from "../navbar/Navbar";

const LeaderboardPage = () => {
  return (
    <div className="page">
      <Navbar />
      <header>
      <img
          className="left ph-backspace-light"
          alt="Ph backspace light"
          src="ph-backspace-light.svg"
        />
      <h1 className="leaderboard">LEADERBOARD / NEWS</h1>
      </header>
    <div className="classification">
    <div className="">Top sport traders</div>
        <div className="">Names</div>
        <div className="">no/clubs</div>
        <div className="">ROI</div>
    </div>
    <div className="profile">
        <div className="profile-name">James Karr</div>
    </div>
      <div className="icons">
        <div className="div">
          <div className="overlap">
            <img
              className="ion-football"
              alt="Ion football"
              src="ion_football.svg"
            />
            <label className="title">Clubs</label>
          </div>
          <img className="vector" alt="Vector" src="home.svg" />
          <label className="title">Home</label>
          <img
            className="carbon-user-profile"
            alt="Carbon user profile"
            src="carbon_user-profile.svg"
          />
          <label className="title">Players</label>
          <div className="overlap-group">
           
            <img
              className="mdi-chart-line"
              alt="Mdi chart line"
              src="mdi_chart-line.svg"
            />
             <label className="title">Trend</label>
          </div>
          <div className="overlap-2">
            
            <img
              className="mdi-alphabet-b-box"
              alt="Mdi alphabet b box"
              src="mdi_alphabet-b-box.svg"
            />
            <div className="title">Prediction</div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default LeaderboardPage;
