const random = require('random');
module.exports = {
  name: 'にゃくざ',
  aliases: ['nyakuza', '893', '2893'],
  args: false,
  execute(message, args, client) {
    const rp = ['ＮＯ　ＮＹＡＫＵＺＡ！', 'ＮＹＡＫＵＺＡ？　ＮＯ！　ＮＯ！', 'にゃくざじゃないよ！',　'にゃくざでなに？', '１１２８５をして'];
    return message.channel.send(rp[random.int((min = 0), (max = rp.length - 1))]);
  },
};