const random = require('random');
module.exports = {
  name: 'ぷぇっ',
  aliases: ['pue'],
  args: false,
  execute(message, args, client) {
    return message.channel.send('ぷぇっ'.repeat(random.int((min = 1), (max = 3))));
  },
};