
const express = require('express');

const router = express.Router();
const pedido = require('../controllers/productoController');



router.get('/',(req,res)=>{
    res.send('Welcome bb');
});



router.get('/pedidos', pedido.getPedidos);
router.get('/pedido', pedido.getPedido);
router.get('/pedidoProduct', pedido.getPedidoProduct);
router.put('/modisypedido/:id', pedido.modifyPedido);


    





module.exports = router;
