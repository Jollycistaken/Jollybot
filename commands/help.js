const Discord = require("discord.js");
module.exports = {
	name: "help",
	topic: "utility",
	description: 'All of the retarded commands on this bot lol',
	execute(message, args) {
		let commands = [...message.client.commands.values()];
		if(!args.length) {
			let helpEmbed = new Discord.MessageEmbed()
			helpEmbed.setTitle('Help: ')
			helpEmbed.setDescription('All the commands on the bot.')
			helpEmbed.addField(`**>help animal**`, `Animal pictures/facts`, false)
			helpEmbed.addField(`**>help fun**`, `Fun commands on this bot`, false)
			helpEmbed.addField(`**>help game**`, `Game specific commands or games in the bot`, false)
			helpEmbed.addField(`**>help image**`, `Image generators/editors lol`, false)
			helpEmbed.addField(`**>help meme**`, `Meme sender/maker`, false)
			helpEmbed.addField(`**>help nsfw**`, `😏`, false)
			helpEmbed.addField(`**>help utility**`, `Useful commands for servers`, false)
			helpEmbed.setColor(process.colors.bestcolor)
			return message.channel.send({
				embeds: [helpEmbed]
			}).catch(console.error);
		} else if(args[0] === "animal") {
			commands.forEach((cmd) => {
				let helpEmbed = new Discord.MessageEmbed().setTitle('Animals: ').setDescription('Animal pictures/facts').setColor(process.colors.bestcolor)
				if(cmd.topic === "animal") {
					helpEmbed.addField(`**${message.client.prefix}${cmd.name} ${cmd.aliases ? ` ($ {
							cmd.aliases.join(', ')
						})
						` : ""}**`, `${cmd.description}`, false);
				}
				return message.channel.send({
					embeds: [helpEmbed]
				}).catch(console.error);
			})
		} else if(args[0] === "fun") {
			let helpEmbed = new Discord.MessageEmbed().setColor(process.colors.bestcolor).setTitle('Fun: ').setDescription('Fun commands on this bot')
			commands.forEach((cmd) => {
				if(cmd.topic === "animals") {
					helpEmbed.addField(`**${message.client.prefix}${cmd.name} ${cmd.aliases ? ` ($ {
							cmd.aliases.join(', ')
						})
						` : ""}**`, `${cmd.description}`, false);
				}
			})
			return message.channel.send({
				embeds: [helpEmbed]
			}).catch(console.error);
		} else if(args[0] === "game") {
			let helpEmbed = new Discord.MessageEmbed().setTitle('Games: ').setDescription('Game specific commands or games in the bot').setColor(process.colors.bestcolor)
			commands.forEach((cmd) => {
				if(cmd.topic === "game") {
					helpEmbed.addField(`**${message.client.prefix}${cmd.name} ${cmd.aliases ? ` ($ {
							cmd.aliases.join(', ')
						})
						` : ""}**`, `${cmd.description}`, false);
				}
			})
			return message.channel.send({
				embeds: [helpEmbed]
			}).catch(console.error);
		} else if(args[0] === "image") {
			let helpEmbed = new Discord.MessageEmbed().setTitle('Images: ').setDescription('Image generators/editors lol').setColor(process.colors.bestcolor)
			commands.forEach((cmd) => {
				if(cmd.topic === "image") {
					helpEmbed.addField(`**${message.client.prefix}${cmd.name} ${cmd.aliases ? ` ($ {
							cmd.aliases.join(', ')
						})
						` : ""}**`, `${cmd.description}`, false);
				}
			})
			return message.channel.send({
				embeds: [helpEmbed]
			}).catch(console.error);
		} else if(args[0] === "meme") {
			let helpEmbed = new Discord.MessageEmbed().setTitle('Memes: ').setDescription('Meme sender/maker').setColor(process.colors.bestcolor)
			commands.forEach((cmd) => {
				if(cmd.topic === "meme") {
					helpEmbed.addField(`**${message.client.prefix}${cmd.name} ${cmd.aliases ? ` ($ {
							cmd.aliases.join(', ')
						})
						` : ""}**`, `${cmd.description}`, false);
				}
			})
			return message.channel.send({
				embeds: [helpEmbed]
			}).catch(console.error);
		} else if(args[0] === "nsfw") {
			let helpEmbed = new Discord.MessageEmbed().setTitle('Nsfw: ').setDescription('😏').setColor(process.colors.bestcolor)
			commands.forEach((cmd) => {
				if(cmd.topic === "nsfw") {
					helpEmbed.addField(`**${message.client.prefix}${cmd.name} ${cmd.aliases ? ` ($ {
							cmd.aliases.join(', ')
						})
						` : ""}**`, `${cmd.description}`, false);
				}
			})
			return message.channel.send({
				embeds: [helpEmbed]
			}).catch(console.error);
		} else if(args[0] === "utility") {
			let helpEmbed = new Discord.MessageEmbed().setTitle('Utilities').setDescription('Useful commands for servers').setColor(process.colors.bestcolor)
			commands.forEach((cmd) => {
				if(cmd.topic === "utility") {
					helpEmbed.addField(`**${message.client.prefix}${cmd.name} ${cmd.aliases ? ` ($ {
							cmd.aliases.join(', ')
						})
						` : ""}**`, `${cmd.description}`, false);
				}
			})
			return message.channel.send({
				embeds: [helpEmbed]
			}).catch(console.error);
		}
	}
};