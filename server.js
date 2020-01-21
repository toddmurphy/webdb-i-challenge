const express = require('express');
const accountsRouter = require('./api/accountsRouter');
const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.use('/api/accounts', accountsRouter);

server.get('/', (req, res) => {
  res.send(`<h2>DB crud project working</h2>`);
});

module.exports = server;
