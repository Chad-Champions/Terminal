import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import fetch from 'node-fetch';

const meme = {
    data: new SlashCommandBuilder()
        .setName('meme')
        .setDescription('Generates a random Reddit meme')
        .addStringOption(option => option.setName('subreddit').setDescription('Enter the name of a valid Reddit subreddit').setRequired(true)),
    async execute(interaction) {
        const subredditChoice = interaction.options.getString('subreddit');

        const memeFetch = await fetch(`https://memes.rafi-codes.dev/api/reddit/${subredditChoice}`, {
            "method": 'GET',
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            'mode': 'cors'
        });

        const data = await memeFetch.json();

        if (memeFetch.ok) {
            const memeEmbed = new MessageEmbed()
            .setColor('#05055e')
            .setTitle(data.title)
            .setURL(data.url)
            .setImage(data.image)
            .addField(`r/${subredditChoice}`, `👍 ${data.score} 💬 ${data.comments}`, true)
            .setFooter(`${interaction.client.user.username} | © ${new Date().getFullYear()}`, interaction.client.user.avatarURL());

            return interaction.reply({ embeds: [memeEmbed] });
        }
        else {
            return interaction.reply({ content: 'Sorry, we failed to fetch the meme you are looking for. Please try again.' });
        }
    }
};

export default meme;