'use strict'

//Import Express
const express = require('express');
//Import SHA512
const sha512 = require('js-sha512');

//Create Express app
const app = express();
//Json parser for body request
app.use(express.json());

//Import logic of pages
const generateLogin = require('./pages/login-get.js');
const generateRegister = require('./pages/register-get.js');
const generateSendResetPass = require('./pages/sendResetPass-get.js');


//Listen to get method on rooth path
app.get('/', async(req, res) => {
    res.redirect('/register');
});

//Listen to get method on register path
app.get('/register', async(req, res) => {
    const html = await generateRegister();

    res.send(html);
});

app.post('/register', async(req, res) => {
    //Display request
    console.log('POST /register:', req.body);

    //Check if username is already taken
    if (req.body.username == "") {
        res.send("This username is already taken");
        return;
    }
    //Check if email is already used
    if (req.body.email == "") {
        res.send("This email is already used");
        return;
    }

    //Then, i hash the password
    req.body.password = sha512(req.body.password);

    //Then i can finally add my user to the DB

    //I send the success response
    res.send('Done');
});

//Listen to get method on login path
app.get('/login', async(req, res) => {
    const html = await generateLogin();

    res.send(html);
});

//Listen to get method on sendResetPath path
app.get('/sendResetPass', async(req, res) => {
    const html = await generateSendResetPass();

    res.send(html);
});

//Serve static content (Will be served by Nginx in the future);
app.use('/imgs', express.static('/Users/ugotheveny/Documents/42Camagru/api/imgs'));
app.use('/styles', express.static('/Users/ugotheveny/Documents/42Camagru/api/styles'));
app.use('/scripts', express.static('/Users/ugotheveny/Documents/42Camagru/api/scripts'));

//Start the server & listen to the port 6300 
app.listen(6300, () => {
    console.log('Server started at http://localhost:6300');
});
