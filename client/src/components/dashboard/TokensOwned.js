import React from "react";
import AdditionalTokens from "./AdditionalTokens";


var tokensOwned = [
	{
		team_logo: "https://cdn.sportmonks.com/images/soccer/teams/14/78.png",
		token_name: "TokenBHA",
		club_name: "Brighton & Hove Albion",
		amount_owned: 10230,
		current_price: 916.13,
	},
];

function TokensOwned() {
	return (
		<div>
			<thead className="mb2vh bgwhite">
				<tr>
					<th className="px240">
						<div className="d-flex align-items-center tacenter">
							<p style={{ width: 0 }}></p>
							<p style={{ width: 300, textAlign: "center" }}></p>
						</div>
					</th>

					<th className="px240">Token Name</th>
					<th scope="col" className="px240">
						Club Name
					</th>
					<th scope="col" className="px240">
						Ammount Owned
					</th>
					<th scope="col" className="px240">
						Estimated Value
					</th>
					<th scope="col" className="px240">
						{"option 1"}
					</th>
					<th scope="col" className="px240">
						{"Option 2"}
					</th>
				</tr>
			</thead>
			{tokensOwned.map((token) => {
				return <AdditionalTokens token={token} />;
			})}
			;
		</div>
	);
}

export default TokensOwned;
