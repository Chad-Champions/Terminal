import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import fetch from 'node-fetch';

const meme = {
    data: new SlashCommandBuilder()
        .setName('meme')
        .setDescription('Generates a random Reddit meme')
        .addStringOption(option => option.setName('subreddit r/').setDescription('Enter the name of a valid Reddit subreddit').setRequired(true)),
    async execute(interaction) {
        const subredditChoice = interaction.options.getString('subreddit');

        fetch(`https://meme-api-node-js.herokuapp.com/api/${subredditChoice}`, {
            "method": 'GET',
            "headers": {
                'Accept': 'application/json'
            },
            'mode': 'cors'
        }).then(response => {
            response.json().then(result => {
                if(result.success) {
                    const memeEmbed = new MessageEmbed()
                    .setColor('#05055e')
                    .setTitle(result.data.title)
                    .setURL(result.data.url)
                    .setImage(result.data.image)
                    .setFooter(`${interaction.client.user.username} | © ${new Date().getFullYear()}`, interaction.client.user.avatarURL());

                    interaction.reply({ embeds: [memeEmbed] });
                }
                else {
                    return interaction.reply({ content: 'Sorry, we failed to fetch the meme you are looking for. Please try again.' });
                }
            });
        }).catch(err => console.log(err));
        
    }
};

export default meme;