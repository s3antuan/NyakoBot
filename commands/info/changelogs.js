const random = require('random');
const Discord = require('discord.js');
const { logs } = require('../../changelogs.json');

module.exports = {
  name: 'changelogs',
  aliases: ['changelog', 'change_log', 'change_logs'],
  description: 'change log of the bot',
  args: false,
  execute(message, args, client) {
    const embed = new Discord.MessageEmbed()
      .setColor(client.configs.palette[random.int((min = 0), (max = client.configs.palette.length - 1))])
      .setTitle('Changelogs');

    for (log of logs) {
      embed.addField(log['date'], log['log']);
    }
    
    return message.channel.send({ embeds: [embed] });
  },
};