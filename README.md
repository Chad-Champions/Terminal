# Terminal ™

### About
A multipurpose Discord server bot created using the official JavaScript Discord API wrapper.

### Features
* Modular Command Handling 
* Modular Event Handling
* Server Welcome Messages: Sends a welcome message to the newly joined user's DM and the configured server welcome channel (if the welcome channel ID is set in config.js) 
* Reaction Roles: Uses the /react slash command to add roles to users based on their reaction to a message. Set up roles and corresponding emotes in the utils/roleReactions.js file. Reaction Roles only work in the configured reaction roles channel.

### Installation and Usage:
* Clone the Repository and run <code>npm install</code> to install all dependencies.
* Fill all the required fields in config.example.js with your own information and rename the file to config.js.
* Run <code>npm start</code> to start the bot.
