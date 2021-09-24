# Terminal ™

## About
A multipurpose Discord server bot created using the official JavaScript Discord API wrapper.

## Features
* Modular Command Handling 
* Modular Event Handling
* Heroku Hosting
* Server Welcome Messages: Sends a welcome message to the newly joined user's DM and the configured server welcome channel (if the welcome channel ID is set) 
* Reaction Roles: Uses the /react slash command to add roles to users based on their reaction to a message. Set up roles and corresponding emotes in the utils/roleReactions.js file. Reaction Roles only work in the configured reaction roles channel.
* Reddit Meme API Integration: Uses a custom [Reddit Meme API](https://github.com/Rafi-99/Meme-API) to fetch a random meme from a user specified subreddit. Covers most subreddits.

## Commands

### Fun
* <b>/avatar:</b> Displays a user's avatar.
* <b>/meme:</b> Fetches a Reddit meme from a subreddit of the user's choice.

### General
* <b>/bot info:</b> Displays general bot information.
* <b>/ping:</b> Displays the ping.
* <b>/server info:</b> Displays general server information.

### Server Moderation
* <b>/ban:</b> Bans a member from the server.
* <b>/kick:</b> Kicks a member from the server.
* <b>/react:</b> Sends a message containing reaction roles specified in <code>src/utils/roleReactions.js</code>.

## Installation and Usage (Local Machine):
* Clone the Repository and run <code>npm install</code> to install all dependencies.
* Configure your Environment Variables corresponding to all the fields in config.js. In VS Code, its in the launch.json file. If you do not want to do this you can directly replace each process.env field with your credentials.
* Run <code>npm start</code> to start the bot.

## Installation and Usage (Heroku):
* Fork this repo or create a new repo with the bots code (Forking is perferred as you can fetch updates from this main repo with a single click).
* Create a Heroku App and use github as the preferred deployment method.
* Add NodeJS as a buildpack in the app settings and configure all the credentials in config.js in the Config Vars section in your app settings. (KEY : name of credential, VALUE : value of credential)
* Click deploy in the deploy section and wait for the build to finish.
* In the app overview, switch off the "web" dyno and switch on the "worker" dyno.