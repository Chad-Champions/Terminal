import { SlashCommandBuilder } from '@discordjs/builders';

const ping = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong'),
    async execute(interaction) {
        interaction.reply({ content: 'Pong!' })
    },
};

export default ping;
