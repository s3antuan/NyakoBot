const Discord = require('discord.js');
const random = require('random');

module.exports = {
    name: 'tag',
    description: 'Show a user-defined tag.',
    cooldown: 5,
    async execute(message, args, client) {
        const { Tags } = client.objects.get('Tags');

        // guild only
        if (message.guild === null) {
            return message.channel.send('Tag command can be only used within guilds(servers).');
        }

        // display detailed description
        if (!args.length) {
            const embed = new Discord.MessageEmbed()
            .setColor(client.configs.palette[random.int((min = 0), (max = client.configs.palette.length - 1))])
            .setTitle('Tag')
            .addFields(
                { name: 'tag <name>', value: 'Show the content of the tag named <name>.' },
                { name: 'tag create <name> <content>', value: 'Create the tag named <name> with the content <content>.' },
                { name: 'tag edit <name> <content>', value: 'Edit the tag named <name> with the new content <content>.' },
                { name: 'tag info <name>', value: 'Show the infomation of the tag named <name>.' },
                { name: 'tag delete <name>', value: 'Delete the tag named <name>.' },
                { name: 'tag list', value: 'List all the tag for this guild(server).' },
                { name: 'tag search <name>', value: 'Search for the tags including <name> in the name.' },
            );
            return message.channel.send({ embeds: [embed] });
        }

        // sub commands
        const firstArg = args.shift().toLowerCase();

        // create tag
        if (firstArg === 'create') {
            const name = args.shift();
            const content = args.join(/ +/);
            try {
                const tag = await Tags.create({
                    name: name,
                    content: content,
                    username: message.author.username,
                    userid: message.author.id,
                    guildid: message.guildId,
                });
                return message.reply({ content: `Tag \`${name}\` created.`, allowedMentions: { repliedUser: true}});
            }
            catch (error) {
                if (error.name === 'SequelizeUniqueConstraintError') {
                    return message.reply({ content: `The tag \`${name}\` already exists.`, allowedMentions: { repliedUser: true}});
                }
                return message.reply({ content: `Something went wrong with creating the tag \`${tag.name}\`.`, allowedMentions: { repliedUser: true}});
            }
        }

        // edit tag
        else if (firstArg === 'edit') {
            const name = args.shift();
            const content = args.join(/ +/);
            const affectedRows = await Tags.update({ content: content }, { where: { name: name } });
            if (affectedRows > 0) {
                return message.reply({ content: `The tag \`${name}\` was edited.`, allowedMentions: { repliedUser: true}});
            }
            return message.reply({ content: `Tag \`${name}\` not found.`, allowedMentions: { repliedUser: true}});
        }

        // show tag info
        else if (firstArg === 'info') {
            const name = args.shift();
            const tag = await Tags.findOne({ where: { name: name } });
            if (tag) {
                const embed = new Discord.MessageEmbed()
                .setColor(client.configs.palette[random.int((min = 0), (max = client.configs.palette.length - 1))])
                .setTitle(`${tag.name}`)
                .addFields(
                    { name: 'Creator', value: `${tag.username}` },
                    { name: 'Created at', value: `${tag.createdAt}` },
                    { name: 'Usage count', value: `${tag.usage}` },
                    { name: 'Content', value: `${tag.content}` },
                );
                return message.channel.send({ embeds: [embed] });
            }
            return message.reply({ content: `Tag \`${name}\` not found.`, allowedMentions: { repliedUser: true}});
        }

        // delete tag
        else if (firstArg === 'delete') {
            const name = args.shift();
            const tag = await Tags.findOne({ where: { name: name } });
            if (tag) {
                if (!(message.author.id === tag.userid || message.author.id === message.guild.ownerId)) {
                    return message.reply({ content: 'Only the tag creator or guild(server) owner can delete the tag.', allowedMentions: { repliedUser: true}});
                }
            }
            const rowCount = await Tags.destroy({ where: { name: name } });
            if (!rowCount) return message.reply({ content: `Tag \`${name}\` not found.`, allowedMentions: { repliedUser: true}});
            return message.reply({ content: `Tag \`${name}\` deleted.`, allowedMentions: { repliedUser: true}});
        }

        // list tags
        else if (firstArg === 'list') {
            const tagList = await Tags.findAll({ attributes: ['name'] });
            const embed = new Discord.MessageEmbed()
                .setColor(client.configs.palette[random.int((min = 0), (max = client.configs.palette.length - 1))])
                .setTitle('List of tags')
                .setDescription(tagList.map(t => t.name).join('\n'));
            return message.channel.send({ embeds: [embed] });
        }

        // search tag
        else if (firstArg === 'search') {
            return message.channel.send('‎wip');
        }

        // show tag
        else {
            const name = firstArg;
            const tag = await Tags.findOne({ where: { name: name } });
            if (tag) {
                tag.increment('usage');
                return message.channel.send(tag.get('content'));
            }
            return message.reply({ content: `Tag \`${name}\` not found.`, allowedMentions: { repliedUser: true}});
        }
    },
};