const experiencesModel = require('../models/experiencesModel');
const { clearObjAfterCreate } = require('../helpers/controllerHelpers');
const dayjs = require('dayjs');


const add = async(req, res) => {
    try {
        const objToCreate = {
            uid: req.user.uid
        };

        for(const [key, value] of Object.entries(req.body)) {
            if(['date_debut', 'date_fin'].includes(key) && value.length) {
                objToCreate[key] = dayjs(value);
            } else if(value.length) {
                objToCreate[key] = value
            }
        };

        const experience = new experiencesModel(objToCreate);
        const save_experience = await experience.save();
        if(!save_experience) {
            throw new Error('error');
        };

        res.status(201).json({
            msg: 'Expérience ajoutée !',
            experience: clearObjAfterCreate(save_experience)
        });
    } catch (err) {
        console.error('experiencesController : ' + err);
        res.status(500).json({err});
    }
};

const erase = async(req, res) => {
    try {
        const objToErase = {
            uid: req.user.uid
        };

        for(const [key, value] of Object.entries(req.body)) {
            if(['date_debut', 'date_fin'].includes(key) && value.length) {
                objToErase[key] = dayjs(value);
            } else if(value.length) {
                objToErase[key] = value
            }
        };

        const erased_experience = await experiencesModel.deleteOne(objToErase);
        if(!erased_experience) {
            throw new Error('error');
        };

        res.status(200).json({msg: 'Expérience supprimée !'});
    } catch (err) {
        console.error('experiencesController : ' + err);
        res.status(500).json({err});
    }
};


module.exports = {
    add,
    erase
}