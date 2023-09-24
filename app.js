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
const competences_routes = require('./routes/competencesRoutes');
const experiences_routes = require('./routes/experiencesRoutes');
const diplomes_routes = require('./routes/diplomesRoutes');



const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(helmet());


// ACCESS API
app.use('/api/user', users_routes);
app.use('/api/profil', auth, profil_routes);
app.use('/api/competence', auth, competences_routes);
app.use('/api/experience', auth, experiences_routes);
app.use('/api/diplome', auth, diplomes_routes);


module.exports = app;