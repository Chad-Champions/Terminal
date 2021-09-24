import { SlashCommandBuilder } from '@discordjs/builders';

const ping = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Displays the ping'),
    async execute(interaction) {
        const message = await interaction.reply({ content: 'Pinging...', fetchReply: true });
        interaction.editReply(`Bot Latency: ${message.createdTimestamp - interaction.createdTimestamp}ms \nDiscord API Latency: ${interaction.client.ws.ping}ms`);
        await new Promise(r => setTimeout(r, 2500));
        interaction.deleteReply();
    }
};

export default ping;