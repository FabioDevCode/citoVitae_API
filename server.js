const http = require('http');
const app = require('./app');
const cors = require('cors');
require('dotenv').config();


const PORT_NUMBER = process.env?.PORT ? process.env.PORT : 1338;

app.use(cors());
app.set("port", PORT_NUMBER);

const server = http.createServer(app);

server.listen(PORT_NUMBER, () => {
    console.log(`SERVER RUN ON PORT : ${PORT_NUMBER}`);
});