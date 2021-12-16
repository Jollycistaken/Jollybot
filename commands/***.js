const Discord = require("discord.js");
const got = require('got');
module.exports = {
	name: "hentai",
	topic: "nsfw",
	description: 'Gets a random image from r/hentai',
	execute(message, args) {
    if (message.channel.nsfw) {
        const embed = new Discord.MessageEmbed();
	got('https://www.reddit.com/r/hentai/random/.json')
		.then(response => {
			const [list] = JSON.parse(response.body);
			const [post] = list.data.children;
			const Url = `https://reddit.com${post.data.permalink}`;
			const Image = post.data.url;
			const Title = post.data.title;
			const Upvotes = post.data.ups;
			const NumComments = post.data.num_comments;
      if (post.data.is_video === true) {
        embed.setTitle(`${Title}`);
			  embed.setURL(`${Url}`);
			  embed.setColor(process.colors.bestcolor);
			  embed.setFooter(`(Click the title to watch it)👍 ${Upvotes} 💬 ${NumComments}`);
      } else {
			  embed.setTitle(`${Title}`);
			  embed.setURL(`${Url}`);
			  embed.setColor(process.colors.bestcolor);
			  embed.setImage(Image);
			  embed.setFooter(`👍 ${Upvotes} 💬 ${NumComments}`);
      }
			message.channel.send({embeds: [embed]});
		}).catch(console.error);
    } else {
      message.channel.send("You can only use the command in a nsfw channel!");
    }
	}
}