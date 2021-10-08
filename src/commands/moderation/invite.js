import { Permissions } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

const invite = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Creates a server invite that expires within 24 hours'),
    async execute(interaction) {
        if(interaction.member.permissions.has(Permissions.FLAGS.CREATE_INSTANT_INVITE)) {
            await interaction.guild.invites.create(interaction.channelId).then(result => {
                interaction.reply({ content: `Invite created! Copy the link below and send it to someone!\n${result.url}`});
            });
        }
        else {
            return interaction.reply({ content: "Sorry, you don't have the required permissions to use this command." });
        }
    }
};

export default invite;