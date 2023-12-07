// requestCode = var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Accept", "application/json");
// myHeaders.append("Authorization", "{{api_token}}");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'manual'
// };

// var promise = Promise.race([
//   fetch('https://api.sportmonks.com/v3/football/teams/seasons/21646?api_token=sgGuKPrVaLCA9zrIGQtU8COYjU4h2GBw9NjHMgezGcKaOQuJfCtFoYJR59mg', requestOptions)
//     .then(response => response.text()),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error('Timeout')), 50000)
//   )
// ]);

// promise.then(result => console.log(result)),
// promise.catch(error => console.log(error));"
var sportmonksteams = 
{
    "data": [
        {
            "id": 78,
            "sport_id": 1,
            "country_id": 462,
            "venue_id": 480,
            "gender": "male",
            "name": "Brighton & Hove Albion",
            "short_code": "BHA",
            "image_path": "https://cdn.sportmonks.com/images/soccer/teams/14/78.png",
            "founded": 1901,
            "type": "domestic",
            "placeholder": false,
            "last_played_at": "2023-12-06 19:30:00"
        },
        {
            "id": 11,
            "sport_id": 1,
            "country_id": 462,
            "venue_id": 485,
            "gender": "male",
            "name": "Fulham",
            "short_code": "FUL",
            "image_path": "https://cdn.sportmonks.com/images/soccer/teams/11/11.png",
            "founded": 1879,
            "type": "domestic",
            "placeholder": false,
            "last_played_at": "2023-12-06 19:30:00"
        },
        {
            "id": 8,
            "sport_id": 1,
            "country_id": 462,
            "venue_id": 230,
            "gender": "male",
            "name": "Liverpool",
            "short_code": "LIV",
            "image_path": "https://cdn.sportmonks.com/images/soccer/teams/8/8.png",
            "founded": 1892,
            "type": "domestic",
            "placeholder": false,
            "last_played_at": "2023-12-06 19:30:00"
        },
        {
            "id": 19,
            "sport_id": 1,
            "country_id": 462,
            "venue_id": 204,
            "gender": "male",
            "name": "Arsenal",
            "short_code": "ARS",
            "image_path": "https://cdn.sportmonks.com/images/soccer/teams/19/19.png",
            "founded": 1886,
            "type": "domestic",
            "placeholder": false,
            "last_played_at": "2023-12-05 20:15:00"
        },
        {
            "id": 29,
            "sport_id": 1,
            "country_id": 462,
            "venue_id": 492,
            "gender": "male",
            "name": "Wolverhampton Wanderers",
            "short_code": "WOL",
            "image_path": "https://cdn.sportmonks.com/images/soccer/teams/29/29.png",
            "founded": 1877,
            "type": "domestic",
            "placeholder": false,
            "last_played_at": "2023-12-05 19:30:00"
        },
        {
            "id": 115,
            "sport_id": 1,
            "country_id": 462,
            "venue_id": 837,
            "gender": "male",
            "name": "Luton Town",
            "short_code": "LUT",
            "image_path": "https://cdn.sportmonks.com/images/soccer/teams/19/115.png",
            "founded": 1885,
            "type": "domestic",
            "placeholder": false,
            "last_played_at": "2023-12-05 20:15:00"
        },
        {
            "id": 51,
            "sport_id": 1,
            "country_id": 462,
            "venue_id": 201,
            "gender": "male",
            "name": "Crystal Palace",
            "short_code": "CRY",
            "image_path": "https://cdn.sportmonks.com/images/soccer/teams/19/51.png",
            "founded": 1905,
            "type": "domestic",
            "placeholder": false,
            "last_played_at": "2023-12-06 19:30:00"
        },
        {
            "id": 21,
            "sport_id": 1,
            "country_id": 462,
            "venue_id": 2,
            "gender": "male",
            "name": "Sheffield United",
            "short_code": "SHU",
            "image_path": "https://cdn.sportmonks.com/images/soccer/teams/21/21.png",
            "founded": 1889,
            "type": "domestic",
            "placeholder": false,
            "last_played_at": "2023-12-06 19:30:00"
        },
        {
            "id": 14,
            "sport_id": 1,
            "country_id": 462,
            "venue_id": 206,
            "gender": "male",
            "name": "Manchester United",
            "short_code": "MUN",
            "image_path": "https://cdn.sportmonks.com/images/soccer/teams/14/14.png",
            "founded": 1878,
            "type": "domestic",
            "placeholder": false,
            "last_played_at": "2023-12-06 20:15:00"
        },
        {
            "id": 236,
            "sport_id": 1,
            "country_id": 462,
            "venue_id": 338817,
            "gender": "male",
            "name": "Brentford",
            "short_code": "BRE",
            "image_path": "https://cdn.sportmonks.com/images/soccer/teams/12/236.png",
            "founded": 1889,
            "type": "domestic",
            "placeholder": false,
            "last_played_at": "2023-12-06 19:30:00"
        },
        {
            "id": 52,
            "sport_id": 1,
            "country_id": 462,
            "venue_id": 146,
            "gender": "male",
            "name": "AFC Bournemouth",
            "short_code": "BOU",
            "image_path": "https://cdn.sportmonks.com/images/soccer/teams/20/52.png",
            "founded": 1899,
            "type": "domestic",
            "placeholder": false,
            "last_played_at": "2023-12-06 19:30:00"
        },
        {
            "id": 20,
            "sport_id": 1,
            "country_id": 462,
            "venue_id": 449,
            "gender": "male",
            "name": "Newcastle United",
            "short_code": "NEW",
            "image_path": "https://cdn.sportmonks.com/images/soccer/teams/20/20.png",
            "founded": 1892,
            "type": "domestic",
            "placeholder": false,
            "last_played_at": "2023-12-02 20:00:00"
        },
        {
            "id": 63,
            "sport_id": 1,
            "country_id": 462,
            "venue_id": 542,
            "gender": "male",
            "name": "Nottingham Forest",
            "short_code": "NFO",
            "image_path": "https://cdn.sportmonks.com/images/soccer/teams/31/63.png",
            "founded": 1865,
            "type": "domestic",
            "placeholder": false,
            "last_played_at": "2023-12-06 19:30:00"
        },
        {
            "id": 13,
            "sport_id": 1,
            "country_id": 462,
            "venue_id": 12,
            "gender": "male",
            "name": "Everton",
            "short_code": "EVE",
            "image_path": "https://cdn.sportmonks.com/images/soccer/teams/13/13.png",
            "founded": 1878,
            "type": "domestic",
            "placeholder": false,
            "last_played_at": "2023-12-02 17:30:00"
        },
        {
            "id": 9,
            "sport_id": 1,
            "country_id": 462,
            "venue_id": 151,
            "gender": "male",
            "name": "Manchester City",
            "short_code": "MCI",
            "image_path": "https://cdn.sportmonks.com/images/soccer/teams/9/9.png",
            "founded": 1880,
            "type": "domestic",
            "placeholder": false,
            "last_played_at": "2023-12-06 20:15:00"
        },
        {
            "id": 1,
            "sport_id": 1,
            "country_id": 462,
            "venue_id": 214,
            "gender": "male",
            "name": "West Ham United",
            "short_code": "WHU",
            "image_path": "https://cdn.sportmonks.com/images/soccer/teams/1/1.png",
            "founded": 1895,
            "type": "domestic",
            "placeholder": false,
            "last_played_at": "2023-12-03 14:00:00"
        },
        {
            "id": 18,
            "sport_id": 1,
            "country_id": 462,
            "venue_id": 321614,
            "gender": "male",
            "name": "Chelsea",
            "short_code": "CHE",
            "image_path": "https://cdn.sportmonks.com/images/soccer/teams/18/18.png",
            "founded": 1905,
            "type": "domestic",
            "placeholder": false,
            "last_played_at": "2023-12-06 20:15:00"
        },
        {
            "id": 15,
            "sport_id": 1,
            "country_id": 462,
            "venue_id": 5,
            "gender": "male",
            "name": "Aston Villa",
            "short_code": "AVL",
            "image_path": "https://cdn.sportmonks.com/images/soccer/teams/15/15.png",
            "founded": 1874,
            "type": "domestic",
            "placeholder": false,
            "last_played_at": "2023-12-06 20:15:00"
        },
        {
            "id": 6,
            "sport_id": 1,
            "country_id": 462,
            "venue_id": 281313,
            "gender": "male",
            "name": "Tottenham Hotspur",
            "short_code": "TOT",
            "image_path": "https://cdn.sportmonks.com/images/soccer/teams/6/6.png",
            "founded": 1882,
            "type": "domestic",
            "placeholder": false,
            "last_played_at": "2023-12-03 16:30:00"
        },
        {
            "id": 27,
            "sport_id": 1,
            "country_id": 462,
            "venue_id": 200,
            "gender": "male",
            "name": "Burnley",
            "short_code": "BUR",
            "image_path": "https://cdn.sportmonks.com/images/soccer/teams/27/27.png",
            "founded": 1882,
            "type": "domestic",
            "placeholder": false,
            "last_played_at": "2023-12-05 19:30:00"
        }
    ],
};

module.exports = {sportmonksteams}