const file = './voices/nyako_oppai.mp3';

module.exports = {
  name: 'oppai',
  description: 'Nyako says oppai',
  args: false,
  execute(message, args, client) {
    return message.channel.send({ files: [file] });
  },
};