const express = require('express');
const router = express.Router();
const productoController = require('../controller/productoController');


//rutas del crud
router.post('/', productoController.agregarProductos);
router.get('/', productoController.buscarProductos);
router.get('/:id', productoController.mostrarProducto);
//router.patch('/:id', productoController.modificarClientes); //metodo patch
router.put('/:id', productoController.actualizarProductos)
router.delete('/:id', productoController.eliminarProductos)

module.exports = router;