import React from 'react'

function Country({key,country}) {
  return (
    <div className="country">
				<div className="imagename">
					<div className="country-details" key={key}>
						{/* {country.name} */}
					</div>
				</div>
			</div>
  )
}

export default Country
