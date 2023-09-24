const validations_helpers = require('../helpers/validationsHelpers');

const add_and_erase = (req, res, next) => {
    const keyArray = [
        'intitule_poste',
        'entreprise',
        'type_contrat',
        'date_debut',
        'date_fin',
        'description'
    ];

    if(!validations_helpers.checKeyOnBody(keyArray, req.body)) {
        return res.status(400).json({
            error: 'VALIDATIONS',
            msg: 'Les données envoyées ne sont pas correctes.'
        });
    }

    next();
};


module.exports = {
    add_and_erase
}