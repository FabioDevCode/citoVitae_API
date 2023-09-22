const mongoose = require('mongoose');

const DiplomesSchema = mongoose.Schema({
    uid: {
        type: String,
        required: true
    },
    diplomes: {
        type: String
    },
    ecole: {
        type: String
    },
    niveau_etudes: {
        type: String
    },
    date_obtention: {
        type: Date
    },
});

module.exports = mongoose.model('diplomes', DiplomesSchema);