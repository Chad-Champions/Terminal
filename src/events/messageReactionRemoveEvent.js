import roleReactions from '../utils/roleReactions.js';
import config from '../../config.js';

export const name = "messageReactionRemove";
export const on = true;
export async function execute(reaction, user, client) {
    if(reaction.message.channel.id !== config.reactionRolesChannel) return;
    if(reaction.emoji.name in roleReactions) {
        const role = await reaction.message.guild.roles.cache.find(role => role.name === roleReactions[reaction.emoji.name]);
        if(role) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(role);
            const member = await client.users.fetch(user.id);
            member.createDM().then(message => {
                message.send(`You have removed the role: ${role.name}.`);
            }).catch(err => {
                console.error(err);
            });
        }
    }
};