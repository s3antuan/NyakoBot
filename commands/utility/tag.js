module.exports = {
    name: 'tag',
    description: 'Show a user-defined tag.',
    cooldown: 5,
    execute(message, args, client) {
        return message.channel.send('‎wip');
    },
};