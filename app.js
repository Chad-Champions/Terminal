import { Client, Collection } from "discord.js";
import fs from "fs";
import config from "./config.js";

const client = new Client({ intents: 32767, partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
client.commands = new Collection();

const commands = fs.readdirSync("./src/commands"); 
const events = fs.readdirSync("./src/events").filter(file  => file.endsWith(".js")); 
const handlers = fs.readdirSync("./src/handlers").filter(file  => file.endsWith(".js")); 

(async () => {
    for(const handler of handlers) {
        const imports = (await import(`./src/handlers/${handler}`)).default;
        imports(client);
    }
    client.handleCommands(commands, "./src/commands");
    client.handleEvents(events, "./src/events");
    client.login(config.token);
})();