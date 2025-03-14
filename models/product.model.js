const { DataTypes } = require('sequelize');
const { bdd } = require('../framework/connection');

Product = bdd.define('Product', {
    
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(7, 2),
        allowNull: false
    },
    stock: {
        type: DataTypes.MEDIUMINT,
        allowNull: true,
        defaultValue: 0
    },
    reference: {
        type: DataTypes.STRING(12),
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
    },
    picture: {
        type: DataTypes.STRING(2083),
        allowNull: true
    },

});

module.exports = Product;