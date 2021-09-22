export const name = 'ready';
export const once = true;
export async function execute(client) {
    await client.application.fetch();
    client.user.setActivity('/help', { type: 'LISTENING' });
    console.log(`Bot is now online! Logged in as ${client.user.tag}.`);
};