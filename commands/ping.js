module.exports = {
	name: "ping",
	topic: "utility",
	description: 'Shows the ping of the bot',
	execute(message, args) {
		return message.reply(`Ping is ${Date.now() - message.createdTimestamp}ms!`).catch(console.error);
	}
};