const mongoose = require('mongoose');

const ProfilSchema = mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true
    },
    titre: {
        type: String
    },
    nom: {
        type: String
    },
    prenom: {
        type: String
    },
    date_naissance: {
        type: Date
    },
    description: {
        type: String
    },
    email: {
        type: String
    },
    numero: {
        type: String
    },
    localisation: {
        type: String
    },
});

module.exports = mongoose.model('profil', ProfilSchema);