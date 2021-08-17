module.exports = {
  name: 'にゃんふく',
  aliases: ['nyanfuku'],
  args: false,
  execute(message, args, client) {
    return message.channel.send('にゃんふく！');
  },
};