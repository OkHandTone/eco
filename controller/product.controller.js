const productModele = require('../models/product.model');

exports.create = async (req, res) => {
    const product = await productModele.create(req.body.product);
    res.status(201).json(product);
}

exports.getById = async (req, res) => {
    let id = req.params.id;
}