const random = require('random');
const Discord = require('discord.js');

module.exports = {
  name: 'bot_info',
  aliases: ['botinfo'],
  description: 'info of the bot',
  args: false,
  execute(message, args, configs) {
    const embed = new Discord.MessageEmbed()
      .setColor(configs.palette[random.int((min = 0), (max = configs.palette.length - 1))])
      .setTitle('Bot Info')
      .setDescription('This is a fan-made bot about Shofuku Nyako.')
      .addFields(
        { name: 'Author', value: 'ginmokusei#7420'},
      );
    
    return message.channel.send(embed);
  },
};