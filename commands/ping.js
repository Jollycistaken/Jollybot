const Discord = require("discord.js");

module.exports = {
    name: "ping",
    topic: "utility",
    description: 'Shows the ping of the bot',
    execute(message, args) {
        return message.reply(`Latency is ${Date.now() - message.createdTimestamp}ms!`).catch(console.error);
    }
};
