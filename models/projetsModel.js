const mongoose = require('mongoose');

const ProjetsSchema = mongoose.Schema({
    uid: {
        type: String,
        required: true
    },
    nom_projet: {
        type: String
    },
    lien_projet: {
        type: String
    },
    description_projet: {
        type: String
    }
});

module.exports = mongoose.model('projets', ProjetsSchema);