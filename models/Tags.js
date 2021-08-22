module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tag', {
        name: {
            type: DataTypes.STRING,
            unique: true,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userid: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        guildid: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        usage: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        },
    });
};