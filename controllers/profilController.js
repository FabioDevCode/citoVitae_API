const dayjs = require('dayjs');
const profilModel = require('../models/profilModel');
const experiencesModel = require('../models/experiencesModel');
const competencesModel = require('../models/competencesModel');
const diplomesModel = require('../models/diplomesModel');
const projetsModel = require('../models/projetsModel');
const linksModel = require('../models/linksModel');


const update = async(req, res) => {
    try {
        const { uid } = req.user;
        const objToUpdate = {};

        for(const [key, value] of Object.entries(req.body)) {
            if(key == 'date_naissance' && value.length) {
                objToUpdate[key] = dayjs(value);
            } else if(value.length) {
                objToUpdate[key] = value
            }
        };

        const porfil_update = await profilModel.updateOne(
            { uid: uid },
            objToUpdate
        );

        if(!porfil_update) {
            throw new Error('error');
        };

        res.status(200).json({msg: 'Le profil a bien été mis à jour.'});
    } catch (err) {
        console.error('profilController : ' + err);
        res.status(500).json({err});
    }
};

const completed = async(req, res) => {
    try {
        const { uid } = req.user;

        const profil = await profilModel.findOne(
            { uid },
            { uid: 0, __v: 0 }
        );
        const competences = await competencesModel.find(
            { uid },
            { uid: 0, __v: 0 }
        );
        const experiences = await experiencesModel.find(
            { uid },
            { uid: 0, __v: 0 }
        )
        const diplomes = await diplomesModel.find(
            { uid },
            { uid: 0, __v: 0 }
        )
        const links = await linksModel.find(
            { uid },
            { uid: 0, __v: 0 }
        )
        const projets = await projetsModel.find(
            { uid },
            { uid: 0, __v: 0 }
        )

        res.status(200).json({
            data: {
                profil,
                experiences,
                diplomes,
                competences,
                projets,
                links
            }
        });
    } catch (err) {
        console.error('profilController : ' + err);
        res.status(500).json({err});
    }
};


module.exports = {
    update,
    completed
};