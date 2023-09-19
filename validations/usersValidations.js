const EmailValidator = require('email-validator');


const signup = (req, res, next) => {
    const keyArray = [
        'pseudo',
        'email',
        'password',
        'password_bis'
    ];

    for(const [key, value] of Object.entries(req.body)) {
        if(!keyArray.includes(key)) {
            return res.status(400).json({
                error: 'VALIDATIONS',
                msg: 'Les données envoyées ne sont pas correctes.'
            });
        }
    };

    for(const key of keyArray) {
        if(!req.body.hasOwnProperty(key)) {
            return res.status(400).json({
                error: 'VALIDATIONS',
                msg: `La donnée suivante est manquantes : ${key}`
            });
        }
    }

    if(!EmailValidator.validate(req.body.email)) {
        return res.status(400).json({
            error: 'VALIDATIONS',
            msg: "Le format de l'email n'est pas correct."
        });
    }

    if(req.body.password != req.body.password_bis) {
        return res.status(400).json({
            error: 'VALIDATIONS',
            msg: `Les mots de passe ne sont pas identiques.`
        });
    }

    next();
};

const login = (req, res, next) => {
    const keyArray = [
        'pseudo',
        'password',
    ];

    for(const [key, value] of Object.entries(req.body)) {
        if(!keyArray.includes(key)) {
            return res.status(400).json({
                error: 'VALIDATIONS',
                msg: 'Les données envoyées ne sont pas correctes.'
            });
        }
    };

    for(const key of keyArray) {
        if(!req.body.hasOwnProperty(key)) {
            return res.status(400).json({
                error: 'VALIDATIONS',
                msg: `La donnée suivante est manquantes : ${key}`
            });
        }
    }

    next();
};


module.exports = {
    signup,
    login
}