const { bdd } = require('./connection');
const product = require('../models/product.model');
const Catergory = require('../models/category.model');

sync = async () => {
    product.belongsTo(Catergory);
    await bdd.sync({ force: true });
}

module.exports = sync;