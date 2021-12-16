const Discord = require('discord.js');
const got = require('got');
module.exports = {
	name: "meme",
	topic: "meme",
	description: 'Gets a random meme',
	execute(message, args) {
    const embed = new Discord.MessageEmbed();
	got('https://www.reddit.com/r/memes/random/.json')
		.then(response => {
			const [list] = JSON.parse(response.body);
			const [post] = list.data.children;

			const permalink = post.data.permalink;
			const Url = `https://reddit.com${permalink}`;
			const Image = post.data.url;
			const Title = post.data.title;
			const Upvotes = post.data.ups;
			const NumComments = post.data.num_comments;

			embed.setTitle(`${Title}`);
			embed.setURL(`${Url}`);
			embed.setColor(process.colors.bestcolor);
			embed.setImage(Image);
			embed.setFooter(`👍 ${Upvotes} 💬 ${NumComments}`);

			message.channel.send({embeds: [embed]});
		}).catch(console.error);
	}
}