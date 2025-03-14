const express = require('express');
const { connect } = require('./framework/connection');
const sync = require('./framework/sync');
const productController = require('./controller/product.controller');
const productRouter = require('./routes/product.route');
const {dataset} = require('./dataset/dataset');


const app = express();

const database = async () => {
    await connect();
    await sync();
    await dataset();
};

database();

// app.use('/', () => {
//     console.log('test');
//     res.status(200).send('OK');
// });

app.use(express.json());
app.use('/product', productRouter);

module.exports = app;