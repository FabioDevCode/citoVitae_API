const competencesModel = require('../models/competencesModel');


const add = async(req, res, next) => {
    try {
        const { uid } = req.user;
        const { nom_competence } = req.body;

        const competence = new competencesModel({uid, nom_competence});
        const save_competence = await competence.save();

        if(!save_competence) {
            throw new Error('error');
        }

        res.status(201).json({msg: 'Nouvelle compétence ajoutée !'});
    } catch (err) {
        console.error('comptetencesController : ' + err);
        res.status(500).json({err});
    }
};

const erase = async(req, res, next) => {
    try {
        const { uid } = req.user;
        const { nom_competence } = req.body;

        const erased_competence = await competencesModel.deleteOne({uid, nom_competence});

        if(!erased_competence) {
            throw new Error('error');
        }

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