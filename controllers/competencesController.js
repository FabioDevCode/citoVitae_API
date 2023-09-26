const competencesModel = require('../models/competencesModel');
const { clearObjAfterCreate } = require('../helpers/controllerHelpers');



const add = async(req, res) => {
    try {
        const { uid } = req.user;
        const { nom_competence } = req.body;

        const checkIfExist = await competencesModel.findOne({uid, nom_competence});
        if(checkIfExist) {
            return res.status(400).json({msg: 'Compétence déjà existante.'});
        };

        const competence = new competencesModel({uid, nom_competence});
        const save_competence = await competence.save();
        if(!save_competence) {
            throw new Error('error');
        };

        res.status(201).json({
            msg: 'Nouvelle compétence ajoutée !',
            competence: clearObjAfterCreate(save_competence)
        });
    } catch (err) {
        console.error('comptetencesController : ' + err);
        res.status(500).json({err});
    }
};

const erase = async(req, res) => {
    try {
        const { uid } = req.user;
        const { nom_competence } = req.body;

        const erased_competence = await competencesModel.deleteOne({uid, nom_competence});
        if(!erased_competence) {
            throw new Error('error');
        };

        res.status(200).json({msg: 'Compétence supprimée !'});
    } catch (err) {
        console.error('comptetencesController : ' + err);
        res.status(500).json({err});
    }
};

module.exports = {
    add,
    erase
}