const { User } = require('../models');
const sequelize = require('../config/connection');

const userData = [
    {
        username: 'alex',
        email: 'alex@aol.com',
        password: 'rootroot'
    },
    {
        username: 'brad',
        email: 'brad@aol.com',
        password: 'rootroot'
    },
    {
        username: 'charlie',
        email: 'charles@aol.com',
        password: 'rootroot'
    }
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;