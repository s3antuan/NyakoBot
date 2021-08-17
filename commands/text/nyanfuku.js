module.exports = {
  name: 'にゃんふく',
  aliases: ['nyanfuku'],
  args: false,
  execute(message, args, configs) {
    return message.channel.send('にゃんふく！');
  },
};