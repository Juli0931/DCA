const express = require('express');
const server = express();
const port = 8081;

server.use(express.static(__dirname + '/Public'));
server.listen(port, () => console.log("Servidor corriendo"));