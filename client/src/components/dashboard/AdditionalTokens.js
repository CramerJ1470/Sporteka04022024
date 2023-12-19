import React from "react";

const AdditionalTokens = ({ token }) => {
   const { team_logo, token_name, club_name, amount_owned, current_price } = token;

   async function revalueToken() {
      alert("call contract Club.sol.revalue");
   }

   async function purchaseToken() {
      alert("call contract Club.sol.addClubToken");
   }

   return (
   
               <tr  className="mb2vh">
               
                  <td >
                     <div className="d-flex align-items-center tacenter">
                        <img
                           src={team_logo}
                           className="img-fluid rounded-3"
                           style={{   width: 360}}                           
                           alt="Team Logo"
                        />
                        <div className="d-flex align-items-center tacenter">
                           <p className="mb-0" style={{ width: 300, marginLeft: "20%" }}></p>
                        </div>
                     </div>
                  </td>
                  <td className="align-middle ">
                     <p className="mb-0" style={{ width: 100, fontWeight: 500 }}>
                        {token_name}
                     </p>
                  </td>
                
                  <td className="align-middle ">
                     <p className="mb-0" style={{ width: 100, fontWeight: 500 }}>
                        {club_name}
                     </p>
                  </td>
                  <td className="align-middle">
                     <p className="mb-0">{amount_owned}</p>
                  </td>
                  <td className="align-middle">
                     <p className="mb-0" style={{ fontWeight: 500 }}>
                        {current_price}
                     </p>

                  
                
                 
                     </td>
                     
                   <td>
                     <button onClick={revalueToken}>Revalue</button>
                        <button onClick={purchaseToken}>Add Token(s)</button>
                        </td>
                  
               </tr>
  
   );
};

export default AdditionalTokens;
