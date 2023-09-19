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

    for(const [key, value] of Object.entries(req.body)) {
        if(!keyArray.includes(key)) {
            return res.status(400).json({
                error: 'VALIDATIONS',
                msg: 'Les données envoyées ne sont pas correctes.'
            });
        }

        if(!value.trim().length) {
            delete req.body[key];
        }
    };

    next();
};

module.exports = {
    update
}