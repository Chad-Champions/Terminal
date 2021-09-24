import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

const avatar = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Generates a user\'s avatar')
        .addUserOption(option => option.setName('user').setDescription('Enter the name of a valid user').setRequired(true)),
    async execute(interaction) {
        const targetUser = interaction.options.getUser('user');
        const avatarEmbed = new MessageEmbed()
        .setColor('#05055e')
        .setTitle('Avatar')
        .setDescription(`${targetUser.username}`)
        .setImage(`${targetUser.displayAvatarURL({ size: 4096 })}`)
        .setFooter(`${interaction.client.user.username} | © ${new Date().getFullYear()}`, interaction.client.user.avatarURL()); 

        await interaction.reply({ embeds: [avatarEmbed] });
    }
};

export default avatar;