// TraderDashboard.js
import React, { useState } from "react";
import "./trader.css"; // Import your CSS file

const TraderDashboard = () => {
  const [selectedSection, setSelectedSection] = useState("marketingInsights");

  // Dummy data for Trader Dashboard
  const traderData = {
    marketingInsights: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    betPredictions: "Bet predictions content goes here.",
    notifications: [
      { id: 1, message: "New trade alert: Buy AAPL at $150" },
      { id: 2, message: "Earnings report for Q3 is available" },
      // Add more notifications as needed
    ],
    earnings: {
      totalEarnings: 5000,
      monthlyEarnings: 1500,
    },
    tradeHistory: [
      { id: 1, symbol: "AAPL", type: "Buy", quantity: 10, price: 150, date: "2023-01-15" },
      { id: 2, symbol: "GOOGL", type: "Sell", quantity: 5, price: 2500, date: "2023-02-01" },
      // Add more trade history entries as needed
    ],
    depositWithdraw: {
      totalDeposit: 10000,
      totalWithdrawal: 3000,
      availableBalance: 7000,
    },
    helpSupport: "If you need assistance, please contact our support team at support@example.com.",
  };

  return (
    <div className="trader-dashboard">
      <div className="side-panel">
        <div className="profile">
          <img src="profile_pic.jpg" alt="Profile" />
        </div>
        <div className="section-titles">
          <h4 onClick={() => setSelectedSection("marketingInsights")}>Marketing Insights</h4>
          <h4 onClick={() => setSelectedSection("betPredictions")}>Bet Predictions</h4>
          <h4 onClick={() => setSelectedSection("notifications")}>Notifications</h4>
          <h4 onClick={() => setSelectedSection("earnings")}>Earnings</h4>
          <h4 onClick={() => setSelectedSection("tradeHistory")}>Trade History</h4>
          <h4 onClick={() => setSelectedSection("depositWithdraw")}>Deposit/Withdraw</h4>
          <h4 onClick={() => setSelectedSection("helpSupport")}>Help/Support</h4>
        </div>
      </div>
      <div className="main-content">
        <div className="header">
          <h2>Trader Dashboard</h2>
        </div>
        <div className="dashboard-section">
          {selectedSection === "marketingInsights" && <p>{traderData.marketingInsights}</p>}
          {selectedSection === "betPredictions" && <p>{traderData.betPredictions}</p>}
          {selectedSection === "notifications" && (
            <ul>
              {traderData.notifications.map((notification) => (
                <li key={notification.id}>{notification.message}</li>
              ))}
            </ul>
          )}
          {selectedSection === "earnings" && (
            <div>
              <p>Total Earnings: ${traderData.earnings.totalEarnings}</p>
              <p>Monthly Earnings: ${traderData.earnings.monthlyEarnings}</p>
            </div>
          )}
          {selectedSection === "tradeHistory" && (
            <table>
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Type</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {traderData.tradeHistory.map((trade) => (
                  <tr key={trade.id}>
                    <td>{trade.symbol}</td>
                    <td>{trade.type}</td>
                    <td>{trade.quantity}</td>
                    <td>${trade.price}</td>
                    <td>{trade.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {selectedSection === "depositWithdraw" && (
            <div>
              <p>Total Deposit: ${traderData.depositWithdraw.totalDeposit}</p>
              <p>Total Withdrawal: ${traderData.depositWithdraw.totalWithdrawal}</p>
              <p>Available Balance: ${traderData.depositWithdraw.availableBalance}</p>
            </div>
          )}
          {selectedSection === "helpSupport" && <p>{traderData.helpSupport}</p>}
        </div>
      </div>
    </div>
  );
};

export default TraderDashboard;
