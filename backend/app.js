'use strict'

//Import Express
const express = require('express');
const cors = require('cors');
//Import SHA512
const sha512 = require('js-sha512');

//Create Express app
const app = express();
//Json parser for body request
app.use(express.json());
//Enable all CORS request (need to only enable front)
app.use(cors());

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

//Start the server & listen to the port 6300 
app.listen(3000, () => {
    console.log('Backend server started at http://localhost:3000');
});
