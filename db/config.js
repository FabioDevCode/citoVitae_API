const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.set('debug', true);
mongoose.connect(process.env.DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connexion à MongoDB : Réussie');
})
.catch(() => {
    console.error('Connexion à MongoDB : Échec');
});