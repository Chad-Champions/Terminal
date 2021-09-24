import { Permissions } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

const ban = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bans a member from the current server')
        .addUserOption(option => option.setName('user').setDescription('Select a user to ban').setRequired(true)),
        async execute(interaction) {
            const user = interaction.options.getMember('user');

            if(!interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR) && !interaction.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
                return interaction.reply({ content: "You do not have BAN Permissions!", ephemeral: true });
            }

            else if(!user) {
                return interaction.reply({ content: "You can only ban members that still exist in the server!", ephemeral: true });
            }

            else if (user.id === interaction.member.id) {
                return interaction.reply({ content: "You cannot ban yourself!", ephemeral: true });
            }

            else if(!user.bannable){
                return interaction.reply({ content: "I cannot ban this user!", ephemeral: true });
            }

            else {
                await user.ban();
                return interaction.reply({ content: `${user} has been banned by ${interaction.member}` });
            }
        } 
};

export default ban;