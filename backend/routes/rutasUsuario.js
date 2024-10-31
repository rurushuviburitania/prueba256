const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController');


//rutas del crud
router.post('/', usuarioController.agregarUsuario);
router.get('/', usuarioController.buscarUsuarios);
router.get('/:id', usuarioController.mostrarUsuario);
//router.patch('/:id', productoController.modificarClientes); //metodo patch
router.put('/:id', usuarioController.actualizarUsuarios)
router.delete('/:id', usuarioController.eliminarUsuarios)

module.exports = router;