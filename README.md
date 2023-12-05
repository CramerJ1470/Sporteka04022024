# Discord SillyNFTier#5653 J.Cramer

# DIscord midnightnoet L.Miner

in file server\config\config.js:

typically mongodb Atlas Database 'Sporteka' is populated with 4 collections - sportekacoins, teamcoins, playercoins, and users

<!--
you can populate sportekacoins with server\config\databaseSportekaCoinsInfo.json
you can populate teamscoins with server\config\databaseTeamCoinsInfo.json
you can populate playercoins with server\config\databaseTeamCoinsInfo.json -->

Collections get populated depending on actions.

in file server\config\config.example.js rename file to server\config\config.js
then ....
change '<username>' to your mongodb username ie "Johnny" (no quotations) before the : then change '<password>' to your collection password
dbURL: "mongodb+srv://<username>:<password>@cluster1.nymha.mongodb.net/<collection>",

you will need to npm install in root (sporteka12032023) folder
you will need to cd into each directory (client, server) and npm install

Run sporteka12022023 using "npm start"

client side , and server side concurrently
