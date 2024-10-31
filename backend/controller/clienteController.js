const Cliente = require('../models/Cliente');

//funcion agregar clientes
exports.agregarClientes = async(req,res) => {
    try {
        let clientes = new Cliente(req.body);
        await clientes.save();
        res.json(clientes);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un cliente');
    }
}

//funcion buscar clientes
exports.buscarClientes = async(req,res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un cliente');
    }
}

//funcion para buscar un solo cliente
exports.mostrarCliente = async(req,res) => {
    try {
        let clientes = await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(404).send({msg:"Cliente no encontrado con ese ID"})
        }else{
            res.json(clientes);
        }

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un cliente');
    }
}

//funcion modificar cliente metodo patch
exports.modificarClientes = async (req,res) =>{
    try {
        let clientes = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!clientes){
            res.status(404).send({msg:"Cliente no encontrado con ese ID"})
        }else{
            res.json(clientes);
        }


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un cliente');
    }
}

//////////////

//metodo put
exports.actualizarClientes = async (req,res) =>{
    try {
        const clientes = await Cliente.findOneAndUpdate({_id: req.params.id}, req.body, { new: true});
        if(!clientes){
            res.status(404).send({msg:"Cliente no encontrado con ese ID"})
        }else{
            res.json(clientes);
        }


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un cliente');
    }
}

//eliminar cliente
exports.eliminarClientes = async (req,res) =>{
    try {
        const clientes = await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(404).send({msg:"Cliente no encontrado con ese ID"})
        }else{
            await Cliente.findOneAndDelete({_id: req.params.id});
            res.json({msg:"Cliente eliminado"});
        }


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar el cliente');
    }
}

