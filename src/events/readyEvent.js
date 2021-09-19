export const name = 'ready';
export const once = true;
export async function execute(client) {
    console.log(`Bot is now online! Logged in as ${client.user.tag}`);
};