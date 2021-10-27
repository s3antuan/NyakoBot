const random = require('random');
module.exports = {
  name: 'ぽはよ',
  aliases: ['pohayo'],
  args: false,
  execute(message, args, client) {
    const gm = ['ぽはよ', 'ぽあよ', 'おはにょん', 'おっはにょん', 'おはよ', 'ぽはにょ', 'ぽはにょん', 'ぽはちょ', 'ぽはよん', 'ぽきた！', 'うんち'];
    return message.channel.send(gm[random.int((min = 0), (max = gm.length - 1))]);
  },
};