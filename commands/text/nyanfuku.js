module.exports = {
  name: 'にゃんふく',
  aliases: ['nyanfuku'],
  args: false,
  execute(message, args) {
    return message.channel.send('にゃんふく！');
  },
};