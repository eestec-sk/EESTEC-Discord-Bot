const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv/config');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.once('ready', () => {
    console.log("Online");
});

client.on('messageCreate', message => {
    if (message.content == "@echo") {
        message.reply(`Echo ${message.author}`);
    }

    if (message.content == "@help") {
        message.reply(`Hello ${message.author}. I am currently being worked on. Please stay put.`)
    }
})

client.login(process.env.TOKEN);