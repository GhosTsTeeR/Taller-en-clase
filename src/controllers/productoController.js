'use strict'
const model = require('../models/productoModel');

async function getPedidos(req, res) {
    const getGallery = await model.listPedidos;
    res.status(200).json(getGallery);

}
async function getPedido(req, res) {
    const getGallery = await model.listPedido;
    res.status(200).json(getGallery);

}
async function getPedidoProduct(req, res) {
    const getGallery = await model.listPedidoProduct;
    res.status(200).json(getGallery);

}


async function modifyPedido(req, res) {
    const id= req.params.id;
    const data = [
        req.body.CodPedido,
        req.body.Fk_idUsuario,
        req.body.Fk_idProducto,
    ]
    await model.modifyPedido(data, id);
    res.status(200).json({
        succes:1,
        message: "Modificado con exito"
    });


}




module.exports = {
    getPedidos,
    getPedido,
    getPedidoProduct,
    modifyPedido,
 
}