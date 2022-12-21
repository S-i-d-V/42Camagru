'use strict'

const { readFile } = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(readFile);

module.exports = async() => {
    //Retrieve the HTML code
    const content = await readFileAsync('register.html', { encoding: 'UTF-8' });

    return (content);
}