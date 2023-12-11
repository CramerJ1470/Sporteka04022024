import React, { useState } from "react";
import "./trader.css";
import UserHistory from "./UserHistory";
import { Link, NavLink, useNavigate } from "react-router-dom";

function UserMenu({ traderData }) {
	const [selectedSection, setSelectedSection] = useState("marketingInsights");

	return (
		<div>
			<span className="lefttoright">
				<div className="section-titles left">
					<h4 onClick={() => setSelectedSection("marketingInsights")}>
						Marketing Insights
					</h4>
					<h4 onClick={() => setSelectedSection("betPredictions")}>
						Bet Predictions
					</h4>
					<h4 onClick={() => setSelectedSection("notifications")}>
						Notifications
					</h4>
					<h4 onClick={() => setSelectedSection("earnings")}>
						Earnings
					</h4>
					{/* <h4 onClick={() => setSelectedSection("tradeHistory")}>
						Trade History
					</h4> */}
					<h4 onClick={() => setSelectedSection("depositWithdraw")}>
						Deposit/Withdraw
					</h4>
					<h4 onClick={() => setSelectedSection("helpSupport")}>
						Help/Support
					</h4>
				</div>

				<div className="dashboard-section">
					{selectedSection === "marketingInsights" && (
						<p>{traderData.marketingInsights}</p>
					)}
					{selectedSection === "betPredictions" && (
						<p>{traderData.betPredictions}</p>
					)}
					{selectedSection === "notifications" && (
						<ul>
							{traderData.notifications.map((notification) => (
								<li key={notification.id}>
									{notification.message}
								</li>
							))}
						</ul>
					)}
					{selectedSection === "earnings" && (
						<>
							<p>
								Total Earnings: $
								{traderData.earnings.totalEarnings}
							</p>
							<p>
								Monthly Earnings: $
								{traderData.earnings.monthlyEarnings}
							</p>
						</>
					)}
					{/* {selectedSection === "tradeHistory" && (
						<table> */}
							{/* <thead>
					<tr>
						<th className="marg5">Symbol</th>
						<th className="marg5">Type</th>
						<th className="marg5">Quantity</th>
						<th className="marg5" >Price</th>
						<th className="marg5">Date</th>
					</tr>
				</thead>
				<tbody>
					{traderData.tradeHistory.map((trade) => (
						<tr key={trade.id}>
							<td className="marg5" >{trade.symbol}</td>
							<td className="marg5" >{trade.type}</td>
							<td className="marg5">{trade.quantity}</td>
							<td className="marg5">${trade.price}</td>
							<td className="marg5">{trade.date}</td>
						</tr>
					))}
				// </tbody> */}
				{/* // 		</table>
				// 	)} */}
					{selectedSection === "depositWithdraw" && (
						<div>
							<p>
								Total Deposit: $
								{traderData.depositWithdraw.totalDeposit}
							</p>
							<p>
								Total Withdrawal: $
								{traderData.depositWithdraw.totalWithdrawal}
							</p>
							<p>
								Available Balance: $
								{traderData.depositWithdraw.availableBalance}
							</p>
						</div>
					)}
					{selectedSection === "helpSupport" && (
						<p>{traderData.helpSupport}</p>
					)}
				</div>
				<NavLink
						to="/teams"
						id="teamsbutton"
						className="teamsbutton"
					>
						Teams Page
					</NavLink>
			</span>
		</div>
	);
}

export default UserMenu;
