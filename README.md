# Terminal ™

## About
A multipurpose Discord server bot created using the official JavaScript Discord API wrapper.

## Features
* Modular Command Handling 
* Modular Event Handling
* 24/7 Uptime through Heroku
* Server Welcome Messages: Sends a welcome message to the newly joined user's DM and the configured server welcome channel (if the welcome channel ID is set) 
* Reaction Roles: Uses the /react slash command to add roles to users based on their reaction to a message. Configure roles and corresponding emotes in the <code>utils/roleReactions.js file.</code> Reaction Roles only work in the configured Reaction Roles channel.
* Reddit Meme API Integration: Uses a custom [Reddit Meme API](https://github.com/Rafi-99/Meme-API) to fetch a random meme from a user specified subreddit. Covers most subreddits.

## Commands

### Fun
* <code>/avatar:</code> Displays a user's avatar.
* <code>/meme:</code> Fetches a Reddit meme from a subreddit of the user's choice.

### General
* <code>/bot info:</code> Displays general bot information.
* <code>/ping:</code> Displays the ping.
* <code>/server info:</code> Displays general server information.

### Server Moderation
* <code>/ban:</code> Bans a member from the server.
* <code>/kick:</code> Kicks a member from the server.
* <code>/react:</code> Sends a message containing reaction roles specified in <code>src/utils/roleReactions.js</code>.

## Installation and Usage

### Local Machine
* Clone the repository and run <code>npm install</code> to install all the dependencies.
* Configure your environment variables in <code>config.js</code>. In VS Code, you can set the environment variable values in your <code>launch.json</code> file. If you don't want to do that, you can hard code them in <code>config.js</code>.
* Run <code>npm start</code> to get the bot up and running!

### Heroku 
* Fork this repository or create a new repository with the bot's code (Forking is preferred as you can fetch updates from the main repository easily).
* Create a new Heroku App and use GitHub for deployment.
* In Settings, use the heroku/nodejs buildpack and configure all your environment variables.
* Visit the Deploy tab and configure yor app to use GitHub.
* In Overview, switch off the web dyno and switch on the worker dyno.