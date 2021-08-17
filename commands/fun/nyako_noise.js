const random = require('random');
const Discord = require('discord.js');
const { noises } = require('../../db.json');

module.exports = {
  name: 'nyako_noise',
  description: 'random twitter link of nyako noises',
  aliases: ['nyakonoise'],
  args: false,
  execute(message, args, config) {
    const noise = noises[random.int((min = 0), (max = noises.length - 1))];
    const embed = new Discord.MessageEmbed()
      .setColor(config.palette[random.int((min = 0), (max = config.palette.length - 1))])
      .setTitle(noise['title'])
      .setURL(noise['url']);

    return message.channel.send(embed);
  },
};