const http = require('http');

// local modules
const router = require('./src/router');

const PORT = process.env.PORT || 80;

const server = http.createServer(router);

server.listen(PORT);
