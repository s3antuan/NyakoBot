module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tag', {
        name: {
            type: DataTypes.STRING,
            unique: true,
        },
        description: DataTypes.TEXT,
        username: DataTypes.STRING,
        userid: DataTypes.STRING,
        guildid: DataTypes.STRING,
        usage: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        },
    });
};