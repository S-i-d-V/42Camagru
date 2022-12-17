'use strict'

//Import Express
const express = require('express');
//Create Express app
const app = express();

//Import logic of index
const generateIndex = require('./pages/index-get.js');

//Listen to get method on rooth path
app.get('/', async(req, res) => {
    const indexHtml = await generateIndex();

    res.send(indexHtml);
});

app.use('/imgs', express.static('/Users/ugotheveny/Documents/42Camagru/api/imgs'));

app.use('/styles', express.static('/Users/ugotheveny/Documents/42Camagru/api/styles'));

app.use('/scripts', express.static('/Users/ugotheveny/Documents/42Camagru/api/scripts'));

//Start the server & listen to the port 6300 
app.listen(6300, () => {
    console.log('Server started at http://localhost:6300');
});
