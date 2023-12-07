// const getVenueByIdAPICall = `https://api.sportmonks.com/v3/football/venues/${venue.id}?api_token={{api_token}}&include=`;

var venueByIdData = {
	data: {
		id: 204,
		country_id: 462,
		city_id: 51663,
		name: "Emirates Stadium",
		address: "Queensland Road",
		zipcode: null,
		latitude: "51.5557297",
		longitude: "-0.1131827",
		capacity: 60272,
		image_path:
			"https://cdn.sportmonks.com/images/soccer/venues/12/204.png",
		city_name: "London",
		surface: "grass",
		national_team: false,
	},
};
module.exports = { venueByIdData };
