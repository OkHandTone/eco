const express = require('express');
const { connect } = require('./framework/connection');
const sync = require('./framework/sync');

const app = express();

const database = async () => {
    await connect();
    await sync();
};

database();

app.use('/', () => {
    console.log('test');
    res.status(200).send('OK');
});

module.exports = app;