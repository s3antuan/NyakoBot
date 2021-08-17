module.exports = {
    name: 'えらい',
    aliases: ['erai'],
    usage: '[subject]',
    execute(message, args, client) {
        if (args.length) {
            return message.channel.send(`<@${message.author.id}>さん、${args[0]}頑張っててえらい！`);
        }
        return message.channel.send(`<@${message.author.id}>さん、えらい！えらい！`);
    },
};