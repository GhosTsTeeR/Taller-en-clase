'use strict'
const model = require('../models/productoModel');

async function getPedidos(req, res) {
    console.log("aqui estamos")
    const getPedidos = await model().listPedidos();
    res.status(200).json(getpedidos);

}


async function getPedido(req, res) {
    const getpedido = await model().listPedido();
    res.status(200).json(getpedido);

}
async function getPedidoProduct(req, res) {
    const getpedido = await model().listPedidoProduct();
    res.status(200).json(getpedido);

}


async function modifyPedido(req, res) {
    const id= req.params.id;
    const data = [
        req.body.CodPedido,
        req.body.Fk_idUsuario,
        req.body.Fk_idProducto,
    ]
    await model().modifyPedido(data, id);
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
