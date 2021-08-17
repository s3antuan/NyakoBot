module.exports = {
  name: 'にゃんふく',
  aliases: ['nyanfuku'],
  args: false,
  execute(message, args, config) {
    return message.channel.send('にゃんふく！');
  },
};