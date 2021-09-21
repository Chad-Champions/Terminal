import fs from 'fs';
import { welcomeImage } from 'discord-welcome-card';
import config from '../../config.js';

export const name = 'guildMemberAdd';
export const on = 'true';
export async function execute(event, client) {
    const welcomeChannel = await client.channels.cache.get(config.welcomeChannel);
    if(!welcomeChannel) return;
    const user = await client.users.fetch(event.user.id);

    user.createDM().then(message => {
        message.send(`Hello and welcome again to ${event.guild}! Feel free to reply with any questions!`);
    }).catch(err => {
        console.log(err);
    });

    const backgroundImage = fs.readFileSync('./public/assets/background.jpg');
    const image = await welcomeImage(event, {
        theme: 'code',
        text: {
            color: '#ffffff'
        },
        avatar: {
            outlineWidth: 2,
            outlineColor: '#eaeaea'
        },
        blur: 1,
        border: true,
        background: backgroundImage
    });
    
    welcomeChannel.send({
        content: `Hello ${user}! Welcome to ${event.guild}!`,
        files: [
            {
                attachment: image, 
                name: 'Welcome.jpg'
            }
        ]
    });
};