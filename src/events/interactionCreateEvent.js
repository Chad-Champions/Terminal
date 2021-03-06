export const name = 'interactionCreate';
export async function execute(interaction, client) {
    const command = client.commands.get(interaction.commandName);
    
    if(!interaction.isCommand()) {
        return;
    }

    if(!command) {
        return;
    }

    try {
        await command.execute(interaction);
    } 
    catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
};