const Discord = require('discord.js');

module.exports = {
  name: 'messageCreate',
  execute(message, client) {
    if (!message.content.startsWith(client.configs.prefix) || message.author.bot) return;

    const args = message.content.slice(client.configs.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    // command
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    if (command.args && !args.length) {
      return message.reply({ content: `you didn't provide any arguments!`, allowedMentions: { repliedUser: true}});
    }

    // cooldown
    const { cooldowns } = client;
  
    if (!cooldowns.has(command.name)) {
      cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || client.configs.cooldown) * 1000;

    if (timestamps.has(message.author.id)) {
      const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

      if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        return message.reply({ content: `please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`, allowedMentions: { repliedUser: true}});
      }
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    // execute
    try {
      command.execute(message, args, client);
    } catch (error) {
      console.error(error);
      message.reply({ content: 'there was an error trying to execute that command!', allowedMentions: { repliedUser: true}});
    }
  },
}