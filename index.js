// Command ideas: https://dankmemer.lol/commands, https://maki.gg/commands
// Credits to evobot for command handler
// const db = require('quick.db');
const Discord = require("discord.js");
const fs = require("fs");
const path = require("path");
require('dotenv').config()
const {
	DISCORD_TOKEN, PREFIX
} = process.env
const client = new Discord.Client({
	intents: ["GUILDS", "GUILD_MESSAGES"]
});
client.login(DISCORD_TOKEN);
client.commands = new Discord.Collection();
client.prefix = PREFIX;
const commandFiles = fs.readdirSync(path.join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
for(const file of commandFiles) {
	const command = require(path.join(__dirname, "commands", `${file}`));
	client.commands.set(command.name, command);
}
process.colors = {
	bestcolor: 0x2ecc71
};
client.on("ready", () => {
	console.log(`OMG OMG YESSSS`);
	client.user.setActivity(`Use me as you please 😏`, {
		type: "PLAYING"
	});
});
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
client.on("message", async(message) => {
	if(message.author.bot) return;
	if(!message.guild) return;
	const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
	if(!prefixRegex.test(message.content)) return;
	const [, matchedPrefix] = message.content.match(prefixRegex);
	const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName) || client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
	if(!command) return;
	try {
		command.execute(message, args, client);
	} catch(error) {
		console.error(error);
		message.reply(`The command has errored, Error: ${error}`).catch(console.error);
	}
});