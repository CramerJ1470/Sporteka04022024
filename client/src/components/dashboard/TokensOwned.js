import React from "react";
import AdditionalTokens from "./AdditionalTokens";

const tokensOwned = [
   {
      team_logo: "https://cdn.sportmonks.com/images/soccer/teams/14/78.png",
      token_name: "BHA",
      club_name: "Brighton & Hove Albion",
      amount_owned: 10230,
      current_price: 916.13,
   },
];

const TokensOwned = () => {
   return (
      <div className="tokens-owned-container">
         <table className=" mb2vh bgwhite">
            <thead>
               <tr>
               <th className="px120"> </th>
                 <th className="px120">Token Name</th>
                 <th className="px120">Club Name</th>
                 <th className="px120">Amount Owned</th>
                  
                  <th className="px120">Estimated Value</th>
                   
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
