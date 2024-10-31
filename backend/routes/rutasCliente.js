const express = require('express');
const router = express.Router();
const clienteController = require('../controller/clienteController');


//rutas del crud
router.post('/', clienteController.agregarClientes);
router.get('/', clienteController.buscarClientes);
router.get('/:id', clienteController.mostrarCliente);
//router.patch('/:id', clienteController.modificarClientes); //metodo patch
router.put('/:id', clienteController.actualizarClientes)
router.delete('/:id', clienteController.eliminarClientes)

module.exports = router;