const diplomesModel = require('../models/diplomesModel');
const dayjs = require('dayjs');


const add = async(req, res, next) => {
    try {
        const objToCreate = {
            uid: req.user.uid
        };

        for(const [key, value] of Object.entries(req.body)) {
            if(['date_obtention'].includes(key) && value.length) {
                objToCreate[key] = dayjs(value);
            } else if(value.length) {
                objToCreate[key] = value
            }
        }

        const diplome = new diplomesModel(objToCreate);
        const save_diplome = diplome.save();

        if(!save_diplome) {
            throw new Error('error');
        }

        res.status(201).json({msg: 'Diplôme ajouté !'});
    } catch (err) {
        console.error('diplomesController : ' + err);
        res.status(500).json({err});
    }
};

const erase = async(req, res, next) => {
    try {
        const objToErase = {
            uid: req.user.uid
        };

        for(const [key, value] of Object.entries(req.body)) {
            if(['date_obtention'].includes(key) && value.length) {
                objToErase[key] = dayjs(value);
            } else if(value.length) {
                objToErase[key] = value
            }
        }

        const erased_diplome = await diplomesModel.deleteOne(objToErase);

        if(!erased_diplome) {
            throw new Error('error');
        }

        res.status(200).json({msg: 'Diplôme supprimé !'});
    } catch (err) {
        console.error('diplomesController : ' + err);
        res.status(500).json({err});
    }
};

module.exports = {
    add,
    erase
}