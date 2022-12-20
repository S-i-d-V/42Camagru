'use strict'

const { readFile } = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(readFile);

module.exports = async() => {
    //Retrieve the HTML code
    const content = await readFileAsync('/Users/ugotheveny/Documents/42Camagru/frontend/login.html', { encoding: 'UTF-8' });

    return (content);
}