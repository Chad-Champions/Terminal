export const name = 'ready';
export const once = true;
export async function execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);
}
