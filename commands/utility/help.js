const Discord = require('discord.js');
const random = require('random');

module.exports = {
  name: 'help',
  description: 'List all of commands or info about a specific command.',
  aliases: ['commands'],
  usage: '[command name]',
  cooldown: 5,
  execute(message, args, config) {
    const { commands } = message.client;

    if (!args.length) {
      const embed = new Discord.MessageEmbed()
        .setColor(config.palette[random.int((min = 0), (max = config.palette.length - 1))])
        .setTitle('List of commands コマンド一覧')
        .setDescription(`\`${config.prefix}help [command name]\` for specific command.`)
        .addFields(
          { name: 'Info', value: 'info, bot_info, changelogs' },
          { name: 'Text', value: 'えらい, ほよ, にゃくざ, にゃんふく, ぽはよ, ぷぇっ, せいそ, よしよし' },
          { name: 'Fun', value: 'nyako_noise' },
          { name: 'Utility', value: 'help' },
        );

      return message.channel.send(embed);
    }

    const name = args[0].toLowerCase();
    const command = commands.get(name) || commands.find(cmd => cmd.aliases && cmd.aliases.includes(name));

    if (!command) {
      return message.reply({ content: 'that\'s not a valid command!', allowedMentions: { repliedUser: true}});
    }

    const embed = new Discord.MessageEmbed()
      .setColor(config.palette[random.int((min = 0), (max = config.palette.length - 1))])
      .setTitle(`${command.name}`);
    
    if (command.aliases) embed.addField('Aliases 別名', `${command.aliases.join(' ,')}`);
    if (command.description) embed.addField('Description　説明', `${command.description}`);
    if (command.usage) embed.addField('Usage　使い方', `${command.name} ${command.usage}`);
    if (command.cooldown) embed.addField('Cooldown　クールダウン', `${command.cooldown || config.cooldown} second(s)`);

    return message.channel.send(embed);
  },
};