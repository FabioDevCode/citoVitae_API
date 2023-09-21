const usersModel = require('../models/usersModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async(req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];

        if(!token) {
            return res.status(401).json({
                msg: 'Le token est manquant.'
            })
        };

        const verifiedToken = jwt.verify(token, process.env.KEY_TK);
        const { user_id, key_control } = verifiedToken;

        if(!user_id || !key_control) {
            return res.status(401).json({
                msg: 'Mauvais token'
            })
        }

        const checkUser = await usersModel.findOne(
            {
                _id: user_id,
                key_control: key_control
            },
            { _id: true, pseudo: true }
        );

        req.user = {
            uid: user_id,
            pseudo: checkUser.pseudo
        };

        next();
    } catch (err) {
        console.error('authMid error : ' + err);
        res.status(500).json({err});
    }
};