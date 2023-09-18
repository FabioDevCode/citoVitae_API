const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('./db/config.js');


// IMPORT ROUTES
const users_routes = require('./routes/usersRoutes');


// APP
const app = express();


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(helmet());


// Routes access
app.use('/api/user', users_routes);



module.exports = app;