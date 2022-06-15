const http = require('http');

// local modules
const router = require('./src/router');

const server = http.createServer(router);

server.listen(80);
