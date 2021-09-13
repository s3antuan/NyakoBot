const file = './voices/nyako_baka.mp3';

module.exports = {
  name: 'baka',
  description: 'Nyako says everyone is baka',
  args: false,
  execute(message, args, client) {
    return message.channel.send({ files: [file] });
  },
};