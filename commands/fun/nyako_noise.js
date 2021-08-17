const random = require('random');
const Discord = require('discord.js');
const { noises } = require('../../db.json');

module.exports = {
  name: 'nyako_noise',
  description: 'random twitter link of nyako noises',
  aliases: ['nyakonoise'],
  args: false,
  execute(message, args, client) {
    const noise = noises[random.int((min = 0), (max = noises.length - 1))];
    const embed = new Discord.MessageEmbed()
      .setColor(client.client.configs.palette[random.int((min = 0), (max = client.client.configs.palette.length - 1))])
      .setTitle(noise['title'])
      .setURL(noise['url']);

    return message.channel.send(embed);
  },
};