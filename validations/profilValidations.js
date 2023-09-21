const update = (req, res, next) => {
    const keyArray = [
        'nom',
        'prenom',
        'date_naissance',
        'description',
        'email',
        'numero',
        'localisation',
        'titre'
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
    update
}