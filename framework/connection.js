const Sequelize = require('sequelize');

let bdd = new Sequelize('pagination', 'martinleroy', '', {
    dialect: 'mysql',
    host: 'localhost',
});

let connect = async () => {
    try {
        await bdd.authenticate();
        console.log('Connection has been established successfully.');
    } catch (e) {
        console.error('Unable to connect to the database:', e);
    }
}

module.exports = {
    connect,
    bdd
}