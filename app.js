const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('./db/config.js');

// MIDDLEWARES
const auth = require('./middlewares/authMid');

// IMPORT ROUTES
const users_routes = require('./routes/usersRoutes');
const profil_routes = require('./routes/profilRoutes');


const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(helmet());


// ACCESS API
app.use('/api/user', users_routes);
app.use('/api/profil', auth, profil_routes);


module.exports = app;