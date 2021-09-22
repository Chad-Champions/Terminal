import { MessageEmbed } from "discord.js";
import { SlashCommandBuilder, SlashCommandSubcommandBuilder } from "@discordjs/builders";

const botInfo = {
    data: new SlashCommandBuilder()
        .setName('bot')
        .setDescription('General bot information')
        .addSubcommand(new SlashCommandSubcommandBuilder().setName('info').setDescription('General bot information')),
    async execute(interaction) {
        const botInfoEmbed = new MessageEmbed()
        .setColor('#05055e')
        .setTitle('>_ **Terminal ™ Bot Information**')
        .setDescription('A multipurpose Discord server bot developed using ES6 JavaScript and open-source libraries. See below for available commands.')
        .setThumbnail(interaction.client.user.avatarURL())
        .addFields(
            { name: 'Fun', value: '/roast, /wholesome, /avatar, /meme', inline: true },
		    { name: 'General', value: '/ping, /bot info, /server info', inline: true },
		    { name: 'Moderation', value:  '/invite, /purge, /kick, /ban', inline: true },
            { name: 'Music', value: '/join, /leave, /play, /pause, /skip, /queue, /clear', inline: true }
        )
        .setFooter(`${interaction.client.application.owner.name} | Bot Developer`, interaction.client.application.owner.iconURL()); 

        await interaction.reply({ embeds: [botInfoEmbed], ephemeral: true});
    }
};

export default botInfo;