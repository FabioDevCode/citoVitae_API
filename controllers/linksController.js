const linksModel = require('../models/linksModel');


const add = async(req, res, next) => {
    try {
        const objToCreate = {
            uid: req.user.uid
        };

        for(const [key, value] of Object.entries(req.body)) {
            if(value.length) {
                objToCreate[key] = value
            }
        }

        const link = new linksModel(objToCreate);
        const save_link = await link.save();

        if(!save_link) {
            throw new Error('error');
        }

        res.status(201).json({msg: 'Lien ajouté !'});
    } catch (err) {
        console.error('projetsController : ' + err);
        res.status(500).json({err});
    }
};

const erase = async(req, res, next) => {
    try {
        const objToErase = {
            uid: req.user.uid
        };

        for(const [key, value] of Object.entries(req.body)) {
            if(value.length) {
                objToErase[key] = value
            }
        }

        const erased_link = await linksModel.deleteOne(objToErase);

        if(!erased_link) {
            throw new Error('error');
        }

        res.status(200).json({msg: 'Lien supprimé !'});
    } catch (err) {
        console.error('projetsController : ' + err);
        res.status(500).json({err});
    }
};


module.exports = {
    add,
    erase
}