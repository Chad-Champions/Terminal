import { MessageEmbed } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";

const penis = {
    data: new SlashCommandBuilder()
        .setName('penis')
        .setDescription('Generates a random penis length')
        .addUserOption(option => option.setName('user').setDescription('Enter the name of a valid user').setRequired(false)),
    async execute(interaction) {
        const targetUser = interaction.options.getUser('user');
        const inches = Math.random() * 13;
        let shaftBuilder = '';
        for (let i = 0; i < inches; i++) {
            shaftBuilder = shaftBuilder.concat('=');
        }
        const finalSize = `8${shaftBuilder}D`;

        const penisEmbed = new MessageEmbed()
        .setColor('#05055e')
        .setTitle(`${targetUser ? `${targetUser.username}'s Penis` : 'Your Penis'}`)
        .setDescription(finalSize)
        .setFooter(`${interaction.client.user.username} | © ${new Date().getFullYear()}`, interaction.client.user.avatarURL());

        await interaction.reply({ embeds: [penisEmbed] });
    }

};

export default penis;