const TeamId = Number(args[0]);

var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Accept', 'application/json');

var requestOptions = {
	mode: "cors",
	method: 'GET',
	headers: myHeaders,
    redirect: 'follow'
};
 
let url = `https://api.sportsdata.io/v4/soccer/scores/json/Standings/1/2023?key=${secrets.SPORTDATA_API_TOKEN}`;
const response = Functions.makeHttpRequest({
  url: url,
  params: requestOptions,
});

// Execute the API request (Promise)
const standingsResponse = await response;
if (standingsResponse.error) {
  console.error(standingsResponse.error);
  throw Error("Request failed");
}
 
let result = JSON.stringify(standingsResponse);
let data =   result.toString();
let ranksArray = [];
let allStandings = JSON.parse(data).data[0].Standings;
for (let x = 0; x < allStandings.length; x++) {
	if (Number(allStandings[x].TeamId) === TeamId ) {
		let Rank = {Games: allStandings[x].Games, Order: allStandings[x].Order};
		ranksArray.push(Rank);
		}
	}
	ranksArray.sort(function(a,b) { 
	return parseFloat(Number(b.Games)) - parseFloat(Number(a.Games))
	});
	rank = ranksArray[0].Order;
	return Functions.encodeUint256(rank);
