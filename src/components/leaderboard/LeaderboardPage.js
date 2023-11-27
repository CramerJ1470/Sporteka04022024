import React from "react";
import "./leaderboard.css";
import {
  MdHome,
  MdSportsSoccer,
  MdBatchPrediction,
  MdTrendingUp,
} from "react-icons/md";
import {GiBabyfootPlayers} from "react-icons/gi";

const LeaderboardPage = () => {
  return (
    <div className="frame">
      <div className="div">
        <div className="overlap">
          <MdSportsSoccer className="icon" />
          <div className="text-wrapper">Clubs</div>
        </div>
        <div className="text-wrapper-2">Home</div>
        <MdHome className="icon" />
        <div className="text-wrapper-3">Players</div>
        <GiBabyfootPlayers className="icon" />
        <div className="overlap-group">
          <div className="text-wrapper-4">Trend</div>
          <MdTrendingUp className="icon" />
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-5">Prediction</div>
          <MdBatchPrediction className="icon" />
        </div>
        {/* 
          Note: You might need to replace the "vector.svg", "ph-backspace-light.svg", 
          and "NEWS.png" placeholders with their corresponding React icon components 
          if there are available icons for them in the React Icons library.
        */}
        {/* <IconComponentForVector className="vector" /> */}
        {/* <IconComponentForBackspaceLight className="icon" /> */}
        {/* <IconComponentForLeaderboardNews className="icon LEADERBOARD-NEWS" /> */}
        <div className="text-wrapper-6">Top Sport Traders</div>
        <div className="text-wrapper-7">Names</div>
        <div className="text-wrapper-8">No/Clubs</div>
        <div className="text-wrapper-9">ROI</div>
        <div className="ellipse" />
        <div className="text-wrapper-10">James Karr</div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
