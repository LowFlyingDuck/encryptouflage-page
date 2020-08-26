const encryptouflage = require('encryptouflage');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.post('/crypt', (request, response) => {
  response.removeHeader('x-powered-by');
  if (request.query['type'])
    encryptouflage.encrypt({ instream: request, outstream: response, key: request.header('encryptouflage-key') });
  else
    response.end('ERROR: missing encryption parameter');
})

require('http').createServer(app).listen(80);