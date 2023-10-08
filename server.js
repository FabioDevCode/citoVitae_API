const http = require('http');
const app = require('./app');
require('dotenv').config();

const PORT_NUMBER = process.env?.PORT ? process.env.PORT : 1338;

app.set("port", PORT_NUMBER);

const server = http.createServer(app);

server.listen(PORT_NUMBER, () => {
    console.log(`SERVER RUN ON PORT : ${PORT_NUMBER}`);
});