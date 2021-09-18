import { Client, Collection } from "discord.js";
import fs from "fs";
import config from "./config.js";

const client = new Client({ intents: 32767 });
client.commands = new Collection();

const commands = fs.readdirSync("./src/commands"); 
const events = fs.readdirSync("./src/events").filter(file  => file.endsWith(".js")); 
const functions = fs.readdirSync("./src/functions").filter(file  => file.endsWith(".js")); 

(async () => {
    for(const file of functions) {
        const handler = (await import(`./src/functions/${file}`)).default;
        handler(client);
    }
    client.handleEvents(events, "./src/events");
    client.handleCommands(commands, "./src/commands")
    client.login(config.token);
    client.guilds.cache.forEach(guild => {
        guild.commands.set([])
        console.log(guild.name)
    });
})();
