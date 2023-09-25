const { checKeyOnBody, UrlValidator } = require('../helpers/validationsHelpers');


const add_and_erase = (req, res, next) => {
    const keyArray = [
        'type_lien',
        'url',
    ];

    if(!checKeyOnBody(keyArray, req.body)) {
        return res.status(400).json({
            error: 'VALIDATIONS',
            msg: 'Les données envoyées ne sont pas correctes.'
        });
    }

    if(!UrlValidator(req.body.url)) {
        return res.status(400).json({
            error: 'VALIDATIONS',
            msg: "Le format du lien n'est pas correct."
        });
    }

    next();
};


module.exports = {
    add_and_erase
}