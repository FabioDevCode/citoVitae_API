const mongoose = require('mongoose');

const LiensSchema = mongoose.Schema({
    uid: {
        type: String,
        required: true
    },
    type_lien: {
        type: String
    },
    url: {
        type: String
    }
});

module.exports = mongoose.model('liens', LiensSchema);