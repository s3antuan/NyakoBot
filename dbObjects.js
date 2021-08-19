const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    logging: false,
    storage: 'database.sqlite',
});

const Tags = require('./models/Tags')(sequelize, Sequelize.DataTypes);

module.exports = { Tags };