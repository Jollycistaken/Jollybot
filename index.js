// Command ideas: https://dankmemer.lol/commands, https://maki.gg/commands
// Credits to evobot for command handler
const db = require('quick.db');
var economy = new db.table('economy')
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
function getRandomInt(m) {
	return Math.floor(Math.random() * m);
}
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
client.on("message", async(message) => {
	if(message.author.bot) return;
	if(!message.guild) return;
  console.log(economy.all())
  if (economy.get(`${message.author.id}.balence`) === null) {
    economy.add(`${message.author.id}.balence`, 0)
    console.log(economy.get(`${message.author.id}`))
  }
	const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
	if(!prefixRegex.test(message.content)) return;
	const [, matchedPrefix] = message.content.match(prefixRegex);
	const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName) || client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
	if(!command) return;
  const number = getRandomInt(150)
	try {
		command.execute(message, args, client);
    if (number === 99) {
      economy.add(`${message.author.id}.balence`, 10)
      return message.channel.send(`You got 10 Jollybucks because you are using this bot :)`);
    }
	} catch(error) {
		console.error(error);
		message.reply(`The command has errored, Error: ${error}`).catch(console.error);
	}
});