const mongoose = require('mongoose');

const ExperiencesSchema = mongoose.Schema({
    uid: {
        type: String,
        required: true
    },
    intitule_poste: {
        type: String
    },
    entreprise: {
        type: String
    },
    type_contrat: {
        type: String
    },
    date_debut: {
        type: Date
    },
    date_fin: {
        type: Date
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('experiences', ExperiencesSchema);