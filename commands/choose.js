module.exports = {
	name: "choose",
	topic: "utility",
	description: 'Have Jollybot choose smth for you',
	execute(message, args) {
		function getRandomInt(m) {
			return Math.floor(Math.random() * m);
		}
    if (!args.length) {
      message.reply("Nothing")
    } else if (args.length > 1) {
			const newarg = args.join(" ")
			const stuff = newarg.split(', ')
			number = getRandomInt(stuff.length)
			message.reply(stuff[number])
		} else {
			const stuff = args[0].split(',')
			number = getRandomInt(stuff.length)
			message.reply(stuff[number])
		}
	}
}