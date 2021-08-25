'use strict'
const db = require('../database');

module.exports = function() {

    async function listPedidos(req) {
        let query = `SELECT  pe.CodPedido AS Codigo, u.username AS Usuario, pr.nombre AS Producto, pr.precio AS Precio
        FROM pedido pe, usuario u, producto pr
        WHERE pe.Fk_idUsuario=u.idUsuario AND pe.Fk_idProducto=pr.idProducto
        `;
        const data = await db.query(query)
        return data
    }
    async function listPedido(req) {
        let query = `SELECT  pe.CodPedido AS Codigo, u.username AS Usuario, pr.nombre AS Producto, pr.precio AS Precio
        FROM pedido pe, usuario u, producto pr
        WHERE pe.Fk_idUsuario=u.idUsuario AND pe.Fk_idProducto=pr.idProducto AND pe.CodPedido = "PED_2"
        `;
        const data = await db.query(query)
        return data
    }
    async function listPedidoProduct(req) {
        let query = `SELECT  pe.CodPedido AS Codigo, u.username AS Usuario, pr.nombre AS Producto, pr.precio AS Precio
        FROM pedido pe, usuario u, producto pr
        WHERE pe.Fk_idUsuario=u.idUsuario AND pe.Fk_idProducto=pr.idProducto AND pr.CodProducto = "TID_1"
        `;
        const data = await db.query(query)
        return data
    }
    async function modifyPedido(data, id, req,  res){
            
        var  Text= '';
        var  Time= '';
        var  Img= '';
        var  Fk_idUser= '';
    
        
    
        Text= data[0];
        Time= data[1];
        Img= data[2];
        Fk_idUser= data[3];
        console.log(Text, Time, Fk_idUser, Img, id);
        await db.query('UPDATE pedido SET Text= ?, Time= ?, Img= ?, Fk_idUser= ? WHERE idGallery = ?', [CodPedido, Fk_idUsuario, Fk_idProducto, id]);
    
       
    }
    
    
    
    
    
    
    module.exports = {
        listPedidos,
        listPedido,
        listPedidoProduct,
        modifyPedido,
     
    }

}



