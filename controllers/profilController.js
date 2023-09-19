const dayjs = require('dayjs');
const profilModel = require('../models/profilModel');


const update = async(req, res, next) => {
    try {
        const { uid, pseudo } = req.user;
        const objToUpdate = {};

        for(const [key, value] of Object.entries(req.body)) {
            if(key == 'date_naissance' && value.length) {
                objToUpdate[key] = dayjs(value);
            } else {
                objToUpdate[key] = value
            }
        }

        const porfil_update = await profilModel.updateOne(
            { uid: uid },
            objToUpdate
        );

        if(!porfil_update) {
            throw new Error('error');
        }

        res.status(200).json({msg: 'Le profil a bien été mis à jour.'});
    } catch (err) {
        console.error('profilController : ' + err);
        res.status(500).json({err});
    }
}


module.exports = {
    update
}