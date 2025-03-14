const productModele = require('../models/product.model');
const Timer = require('../framework/timer');
const { where } = require('sequelize');
require('dotenv').config();

exports.create = async (req, res) => {
    const product = await productModele.create(req.body.product);
    res.status(201).json(product);
}

exports.getById = async (req, res) => {
    let id = req.params.id;
    let product = await productModele.getById(id);
    res.status(200).json(product);
}

exports.getPagination = async (req,res,next) => {
    let timer = new Timer();
    timer.start();
    let listProduct = await Product.findAll({
        where: {categoryId: 1},
        limit: parseInt(process.env.PAGINATION_LIMIT), 
        offset:(req.params.page-1)*parseInt(process.env.PAGINATION_LIMIT)});
    let time =timer.end();
    console.log("temps d'execution : " + time + "ms");
    res.status(200).json(listProduct);
}

// exports.getPagination2 = async (req,res,next) => {
//     let timer = new Timer();
//     timer.start();
//     let listProduct = await Product.findAll();
//     listProduct = listProduct.filter(product => product.categoryId === 1);
//     if(listProduct.length > 2500){
//         listProduct = listProduct.slice(0,2500);
//     }
//     let time =timer.end();
//     console.log("temps d'execution : " + time + "ms");
//     res.status(200).json(listProduct);
// }
