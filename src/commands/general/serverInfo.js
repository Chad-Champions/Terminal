import { MessageEmbed } from "discord.js";
import { SlashCommandBuilder, SlashCommandSubcommandBuilder } from "@discordjs/builders";

const serverInfo = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('General information about the current server')
        .addSubcommand(new SlashCommandSubcommandBuilder().setName('info').setDescription('General information about the current server')),
    async execute(interaction) {
        const serverOwner = await interaction.guild.fetchOwner();
        const serverInfoEmbed = new MessageEmbed()
        .setColor('#05055e')
        .setTitle('**Server Information**')
        .setDescription(`Some basic information about the current server: ${interaction.guild.name}`)
        .setThumbnail(interaction.guild.iconURL())
        .addFields(
            { name: '**Server Name**', value: interaction.guild.name, inline: true },
            { name: '**Server Owner**', value: `<@${serverOwner.id}>`, inline: true },
            { name: '**Server Creation**', value: `Date: ${interaction.guild.createdAt.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} \nTime: ${interaction.guild.createdAt.toLocaleTimeString('en-US', { timeZone: 'UTC', timeZoneName: 'short' })}`, inline: true },
            { name: '**Server Locale**', value: interaction.guild.preferredLocale, inline: true },
            { name: '**Member Count**', value: `${interaction.guild.memberCount}`, inline: true },
            { name: '**Role Count**', value: `${interaction.guild.roles.cache.size}`, inline: true },
            { name: '**Emote Count**', value: `${interaction.guild.emojis.cache.size}`, inline: true },
            { name: '**Boost Tier**', value: interaction.guild.premiumTier, inline: true },
            { name: '**Boost Count**', value: `${interaction.guild.premiumSubscriptionCount}`, inline: true }
        )
        .setFooter(`${interaction.client.user.username} | © 2022`, interaction.client.user.avatarURL()); 

        await interaction.reply({ embeds: [serverInfoEmbed], ephemeral: true });
    }
};

export default serverInfo;