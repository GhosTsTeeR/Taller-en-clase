'use strict'
const model = require('../models/authModel');

async function signUp(req, res) {

    const data = [
        req.body.Usuario,
        req.body.Password,
        req.body.Email,
        req.body.Nombre,
        req.body.Mobile,
    ]
    await model().signUp(data);
    res.status(200).json({
        succes:1,
        message: "agregado con exito"
    });


}



module.exports = {
    signUp,
 
}