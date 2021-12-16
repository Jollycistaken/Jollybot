const db = require('quick.db');
var economy = new db.table('economy')
module.exports = {
	name: "balance",
	topic: "currency",
	description: 'See your balance',
	execute(message, args) {
    return message.channel.send(`You have ${economy.get(`${message.author.id}.balence`)} Jollybucks`);
	}
}