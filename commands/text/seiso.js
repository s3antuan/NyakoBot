const random = require('random');
module.exports = {
    name: 'せいそ',
    aliases: ['seiso', '清楚'],
    args: false,
    execute(message, args, configs) {
        const msg = ['おしっこ', 'おしっこ💦'];
      return message.channel.send(msg[random.int((min = 0), (max = msg.length - 1))]);
    },
  };