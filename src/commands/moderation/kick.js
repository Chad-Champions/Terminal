import { Permissions } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

const kick = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kicks a member from the current server')
        .addUserOption(option => option.setName('user').setDescription('Select a user to kick').setRequired(true)),
        async execute(interaction) {
            const user = interaction.options.getMember('user');

            if(!interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR) && !interaction.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) {
                return interaction.reply({ content: "You do not have KICK Permissions!", ephemeral: true });
            }

            else if(!user) {
                return interaction.reply({ content: "You can only kick members that still exist in the server!", ephemeral: true });
            }

            else if(user.id === interaction.member.id) {
                return interaction.reply({ content: "You can't kick yourself!", ephemeral: true });
            }

            else if(!user.kickable){
                return interaction.reply({ content: "I cannot kick this user!", ephemeral: true });
            }

            else {
                await user.kick();
                return interaction.reply({ content: `${user} has been kicked by ${interaction.member}` });
            }
        }
};

export default kick;