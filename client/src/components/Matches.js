import React from 'react'

function Matches({matches}) {
  return (
    <div>
      <h2>Matches</h2>
      <div className="grid-container">
        {matches.map((match) => (
          <div key={match.id} className="grid-item">
            <Match match={match.match} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Matches
