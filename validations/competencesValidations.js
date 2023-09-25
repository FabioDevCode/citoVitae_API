const { checKeyOnBody } = require('../helpers/validationsHelpers');


const add_and_erase = (req, res, next) => {
    const keyArray = [
        'nom_competence',
    ];

    if(!checKeyOnBody(keyArray, req.body)) {
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