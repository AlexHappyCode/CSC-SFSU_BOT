
#### :warning: Merge pull requests into the development branch :warning:

### Setup

1. [Intsall node.js](https://nodejs.org/en/download/), if you haven't already
2. cd into the directory that contains the package.json then run `npm install`

#### Environment Variables


3. Create .env.development in /secrets/ and add the following fields, the API token and client_id are found in the [discord developer portal](https://discord.com/developers/applications) and the guild_ID can be found by right clicking the server name in discord and clicking on copy id

```js
DISCORD_API_TOKEN="Your_token" 
DISCORD_GUILD_ID="Guild_id"
DISCORD_CLIENT_ID="Client_id"
```

### Make Bot Here

https://discord.com/developers/applications


### Link to invite to server

https://discord.com/api/oauth2/authorize?client\_id=<applicationid>&permissions=8&scope=bot%20applications.commands


### Running the bot

To run the program with  `npm start production` for production and `npm start dev` for development
