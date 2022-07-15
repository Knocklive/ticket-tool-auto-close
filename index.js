const Discord = require('discord.js');

const config = require('./config.json');

const client = new Discord.Client({
    intents: [
        'GUILDS', 
        'GUILD_MESSAGES',
    ]
});


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
    try {
        if (message.author.bot) {
            for (let embed of message.embeds) {
                if (embed.description) {
                    if (embed.description.includes("Ticket Closed by")) {
                        message.channel.send("$transcript");
                    }
                }
            }
        } else return;
    } catch (error) {
        console.log(error);
    }
})


client.login(config.token);
