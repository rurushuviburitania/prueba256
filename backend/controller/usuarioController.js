const Usuario = require('../models/Usuario');

//funcion agregar usuarios
exports.agregarUsuario = async(req,res) => {
    try {
        let usuarios = new Usuario(req.body);
        await usuarios.save();
        res.json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un usuario');
    }
}

//funcion buscar usuarios
exports.buscarUsuarios = async(req,res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un usuario');
    }
}

//funcion para buscar un solo usuario
exports.mostrarUsuario = async(req,res) => {
    try {
        let usuarios = await Usuario.findById(req.params.id);
        if(!usuarios){
            res.status(404).send({msg:"Usuario no encontrado con ese ID"})
        }else{
            res.json(usuarios);
        }

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un usuario');
    }
}

//funcion modificar usuario metodo patch
exports.modificarUsuarios = async (req,res) =>{
    try {
        let usuarios = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!usuarios){
            res.status(404).send({msg:"Usuario no encontrado con ese ID"})
        }else{
            res.json(usuarios);
        }


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un usuario');
    }
}

//////////////

//metodo put
exports.actualizarUsuarios = async (req,res) =>{
    try {
        const usuarios = await Usuario.findOneAndUpdate({_id: req.params.id}, req.body, { new: true});
        if(!usuarios){
            res.status(404).send({msg:"Usuario no encontrado con ese ID"})
        }else{
            res.json(usuarios);
        }


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un usuario');
    }
}

//eliminar usuario
exports.eliminarUsuarios = async (req,res) =>{
    try {
        const usuarios = await Usuario.findById(req.params.id);
        if(!usuarios){
            res.status(404).send({msg:"Usuario no encontrado con ese ID"})
        }else{
            await Usuario.findOneAndDelete({_id: req.params.id});
            res.json({msg:"Usuario eliminado"});
        }


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar el usuario');
    }
}

