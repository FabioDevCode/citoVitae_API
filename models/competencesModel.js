const mongoose = require('mongoose');

const CompetenceSchema = mongoose.Schema({
    uid: {
        type: String,
        required: true
    },
    nom_competence: {
        type: String
    }
});

module.exports = mongoose.model('competences', CompetenceSchema);