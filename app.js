require('./db/config.js');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

// MIDDLEWARES
const auth = require('./middlewares/authMid');

// IMPORT ROUTES
const check_routes = require('./routes/checkRoutes');
const users_routes = require('./routes/usersRoutes');
const profil_routes = require('./routes/profilRoutes');
const competences_routes = require('./routes/competencesRoutes');
const experiences_routes = require('./routes/experiencesRoutes');
const diplomes_routes = require('./routes/diplomesRoutes');
const projets_routes = require('./routes/projetsRoutes');
const links_routes = require('./routes/linksRoutes');


const app = express();
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(morgan('dev'));
app.use(express.json());
app.use(helmet());


// ACCESS API
app.use('/api/check', check_routes);
app.use('/api/user', users_routes);
app.use('/api/profil', auth, profil_routes);
app.use('/api/competence', auth, competences_routes);
app.use('/api/experience', auth, experiences_routes);
app.use('/api/diplome', auth, diplomes_routes);
app.use('/api/projet', auth, projets_routes);
app.use('/api/link', auth, links_routes);


module.exports = app;