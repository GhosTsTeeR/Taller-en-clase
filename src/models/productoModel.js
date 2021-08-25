'use strict'
const passport = require('passport');
const db = require('../database');
const helpers = require('../lib/helpers');

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
            
        var  CodPedido= '';
        var  Fk_idUsuario= '';
        var  Fk_idProducto= '';
    
        
    
        CodPedido= data[0];
        Fk_idUsuario= data[1];
        Fk_idProducto= data[2];
        await db.query('UPDATE pedido SET CodPedido= ?, Fk_idUsuario= ?, Fk_idProducto= ? WHERE idPedido = ?', [CodPedido, Fk_idUsuario, Fk_idProducto, id]);
    
       
    }
    
    
    
    
    
    
    module.exports = {
        listPedidos,
        listPedido,
        listPedidoProduct,
        modifyPedido,
     
    }

}





