# Terminal ™

### About
A multipurpose Discord server bot created using the official JavaScript Discord API wrapper.

### Features
* Modular Command Handling 
* Modular Event Handling
* Server Welcome Messages: Sends a welcome message to the newly joined user's DM and the configured server welcome channel (if the welcome channel ID is set) 
* Reaction Roles: Uses the /react slash command to add roles to users based on their reaction to a message. Set up roles and corresponding emotes in the utils/roleReactions.js file. Reaction Roles only work in the configured reaction roles channel.
* Reddit Meme API Integration: Uses a custom (Reddit Meme API)[https://github.com/Rafi-99/Meme-API] to fetch a random meme from a user specified subreddit. Covers most subreddits.

### Installation and Usage:
* Clone the Repository and run <code>npm install</code> to install all dependencies.
* Configure your Environment Variables corresponding to all the fields in config.js. In VS Code, its in the launch.json file. If you do not want to do this you can directly replace each process.env field with your credentials.
* Run <code>npm start</code> to start the bot.
