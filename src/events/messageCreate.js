import config from '../../config.js';

export const name = 'messageCreate'
export const on = true;
export async function execute(message) {
    if(message.author.bot) return;
    
    if(config.linkFilter === 'ON' && (message.content.includes("http://") || message.content.includes('https://'))) {
        message.delete();
        message.channel.send('Please don\'t post links. Not very poggers bro.');        
    }
};