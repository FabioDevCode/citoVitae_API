const usersModel = require('../models/usersModel');
const bcrypt = require('bcrypt/bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();


const signup = async(req, res, next) => {
    try {
        const {pseudo, email, password} = req.body;
        const hashedPwd = await bcrypt.hash(password, 12);

        const user = new usersModel({
            pseudo: pseudo,
            email: email,
            password: hashedPwd,
        });

        const save_user = await user.save();

        if(!save_user) {
            throw new Error('error');
        }

        res.status(201).json({msg: 'Nouvel utilisateur créé !'});
    } catch (err) {
        console.error(err);
        res.status(500).json({err});
    }
};

const login = async(req, res, next) => {
    try {
        const { pseudo } = req.body;

        const user = await usersModel.findOne({pseudo});

        if(!user) {
            return res.status(404).json({
                msg: 'Utilisateur introuvable.'
            })
        }

        console.log(user);

        const check_pwd = await bcrypt.compare(req.body.password, user.password);

        if(!check_pwd) {
            return res.status(403).json({
                msg: 'Mot de passe inccorect.'
            })
        }

        res.status(200).json({
            msg: 'Vous êtes connecté',
            token: jwt.sign(
                {
                    user_id: user._id,
                    key_control: process.env.KEY_CONTROL
                },
                process.env.KEY_TK,
                {
                    expiresIn: '4h'
                }
            )
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({err});
    }
};







module.exports = {
    signup,
    login
}