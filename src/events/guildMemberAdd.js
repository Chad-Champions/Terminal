import config from '../../config.js';

export const name = 'guildMemberAdd';
export const on = 'true';
export async function execute(event, client) {
    const welcomeChannel = await client.channels.cache.get(config.welcomeChannel);
    const user = await client.users.fetch(event.user.id);

    welcomeChannel.send(`Hello ${user}! Welcome to ${event.guild}!`);
    user.createDM().then(message => {
        message.send(`Hello and welcome again to ${event.guild}! Feel free to reply with any questions!`);
    }).catch(err => {
        console.log(err);
    });   
};