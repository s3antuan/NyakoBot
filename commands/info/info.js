const random = require('random');
const Discord = require('discord.js');
const { palette } = require('../../config.json');

module.exports = {
  name: 'info',
  description: 'info of Nyako',
  args: false,
  execute(message, args) {
    const embed = new Discord.MessageEmbed()
      .setColor(palette[random.int((min = 0), (max = palette.length - 1))])
      .setTitle('招福にゃこ🍻🐾')
      .setURL('https://twitter.com/Nyako_Shofuku')
      .setDescription('はじめまして、宇宙１顔がいい招き猫80歳JKアイドル、招福にゃこです！好きなものは酒と金、よろしくお願いします！')
      .setThumbnail('https://pbs.twimg.com/profile_images/1383577417583718403/OxF5Noab_400x400.jpg')
      .addFields(
        { name: 'YouTube', value: 'https://www.youtube.com/channel/UCM1x5jQwA8v8yzSq_svSHQQ'},
        { name: 'Twitter', value: 'https://twitter.com/Nyako_Shofuku'},
        { name: 'Fanbox', value: 'https://www.fanbox.cc/@nyako'},
      );
    
    return message.channel.send(embed);
  },
};