import { SlashCommandBuilder } from '@discordjs/builders';
import Discord, { Permissions } from 'discord.js';
import roleReactions from '../../utils/roleReactions.js';
import config from '../../../config.js';

const react = {
    data: new SlashCommandBuilder()
        .setName('react')
        .setDescription('Lists all the roles that can be used as reactions.'),
        async execute(interaction) {
            if (!interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)){
                return interaction.reply({ content: "This command is for Admins only!" })
            }
            if(interaction.message.channel.id != config.reactionRolesChannel){
                return interaction.reply({ content: "This command can only be used in the configured Reaction Roles channel!" })
            }
            let embed = new Discord.MessageEmbed()
                .setColor('#05055e')
                .setTitle("Reaction event")
                .setDescription(`Choose the Emotes you want!`);
            const MessageEmbed = await interaction.channel.send({ embeds: [embed]});

            Object.keys(roleReactions).map(key => {
                MessageEmbed.react(key);
            })
            
            interaction.reply({ content: "Done Setting up roles!"});
        }  
}

export default react;