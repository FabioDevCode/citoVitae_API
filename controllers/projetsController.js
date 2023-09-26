const projetsModel = require('../models/projetsModel');
const { clearObjAfterCreate } = require('../helpers/controllerHelpers');


const add = async(req, res) => {
    try {
        const objToCreate = {
            uid: req.user.uid
        };

        for(const [key, value] of Object.entries(req.body)) {
            if(value.length) {
                objToCreate[key] = value
            }
        };

        const projet = new projetsModel(objToCreate);
        const save_projet = await projet.save();
        if(!save_projet) {
            throw new Error('error');
        };

        res.status(201).json({
            msg: 'Projet créé !',
            projet: clearObjAfterCreate(save_projet)
        });
    } catch (err) {
        console.error('projetsController : ' + err);
        res.status(500).json({err});
    }
};

const erase = async(req, res) => {
    try {
        const objToErase = {
            uid: req.user.uid
        };

        for(const [key, value] of Object.entries(req.body)) {
            if(value.length) {
                objToErase[key] = value
            }
        };

        const erased_projet = await projetsModel.deleteOne(objToErase);
        if(!erased_projet) {
            throw new Error('error');
        };

        res.status(200).json({msg: 'Projet supprimé !'});
    } catch (err) {
        console.error('projetsController : ' + err);
        res.status(500).json({err});
    }
};


module.exports = {
    add,
    erase
}