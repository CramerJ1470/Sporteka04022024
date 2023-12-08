import React from "react";
import AdditionalTokens from "./AdditionalTokens";

const tokensOwned = [
   {
      team_logo: "https://cdn.sportmonks.com/images/soccer/teams/14/78.png",
      token_name: "TokenBHA",
      club_name: "Brighton & Hove Albion",
      amount_owned: 10230,
      current_price: 916.13,
   },
];

const TokensOwned = () => {
   return (
      <div>
         <table className="mb2vh bgwhite">
            <thead>
               <tr>
                  <th className="px240">
                     <div className="d-flex align-items-center tacenter">
                        <p style={{ width: 0 }}></p>
                        <p style={{ width: 300, textAlign: "center" }}></p>
                     </div>
                  </th>
                  <th className="px240">Token Name</th>
                  <th className="px240">Club Name</th>
                  <th className="px240">Amount Owned</th>
                  <th className="px240">Estimated Value</th>
                  <th className="px240">Option 1</th>
                  <th className="px240">Option 2</th>
               </tr>
            </thead>
            <tbody>
               {tokensOwned.map((token, index) => (
                  <AdditionalTokens key={index} token={token} />
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default TokensOwned;
