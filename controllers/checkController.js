const usersModel = require('../models/usersModel');

const pseudo = async(req, res) => {
    try {
        const { pseudo } = req.body;
        const user = await usersModel.findOne({pseudo});

        if(user) {
            return res.status(200).json({
                valid: false,
                msg: 'Ce pseudo est déjà utilisé.'
            })
        };

        res.status(200).json({
            valid: true,
            msg: 'Pseudo valide.'
        })
    } catch (err) {
        console.error('checkController : ' + err);
        res.status(500).json({err});
    }
};

const email = async(req, res) => {
    try {
        const { email } = req.body;
        const user = await usersModel.findOne({email});

        if(user) {
            return res.status(200).json({
                valid: false,
                msg: 'Cet email est déjà utilisé.'
            })
        };

        res.status(200).json({
            valid: true,
            msg: 'Email valide.'
        })
    } catch (err) {
        console.error('checkController : ' + err);
        res.status(500).json({err});
    }
};

module.exports = {
    pseudo,
    email
};