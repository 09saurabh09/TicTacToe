// config/database.js
var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, 'credentials.json');
var credentialObj = JSON.parse(fs.readFileSync(filePath, 'utf8'));

module.exports = {

    'url' : credentialObj.mongo.url

};