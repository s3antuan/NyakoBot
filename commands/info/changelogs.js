const random = require('random');
const Discord = require('discord.js');
const { palette } = require('../../config.json');
const { logs } = require('../../changelogs.json');

module.exports = {
  name: 'changelogs',
  aliases: ['changelog', 'change_log', 'change_logs'],
  description: 'change log of the bot',
  args: false,
  execute(message, args) {
    const embed = new Discord.MessageEmbed()
      .setColor(palette[random.int((min = 0), (max = palette.length - 1))])
      .setTitle('Changelogs');

    for (log of logs) {
      embed.addField(log['date'], log['log']);
    }
    
    return message.channel.send(embed);
  },
};