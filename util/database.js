require('dotenv').config();

const Sequelize = require('sequelize');

const DB_NAME = 'groupchatv1';
const DB_USERNAME = 'root';
const DB_PASSWORD = '180828';
const DB_HOST = 'localhost';

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    dialect: 'mysql',
    host: DB_HOST,
    logging: false //disables SQL logs on console
});

module.exports = sequelize;