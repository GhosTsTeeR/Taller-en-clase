'use strict'
const model = require('../models/userModel');

async function galleryUpDate(req, res) {

    const data = [
        req.body.Text,
        req.body.Time,
        req.body.Img,
        req.body.Fk_idUser,
    ]
    await model().galleryUpDate(data);
    res.status(200).json({
        succes:1,
        message: "agregado con exito"
    });


}
async function getGallery(req, res) {
    const getGallery = await model().getGallery();
    res.status(200).json(getGallery);

}
async function modifyGallery(req, res) {
    const id= req.params.id;
    const data = [
        req.body.Text,
        req.body.Time,
        req.body.Img,
        req.body.Fk_idUser,
    ]
    await model().modifiGallery(data, id);
    res.status(200).json({
        succes:1,
        message: "Modificado con exito"
    });


}
async function deleteGallery(req, res) {
    const id= req.params.id;
    await model().deleteGallery(id);
    res.status(200).json({
        succes:1,
        message: "Eliminado con exito"
    });


}




module.exports = {
    galleryUpDate,
    getGallery,
    modifyGallery,
    deleteGallery,
 
}