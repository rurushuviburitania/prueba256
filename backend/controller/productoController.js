const Producto = require('../models/Producto');

//funcion agregar productos
exports.agregarProductos = async(req,res) => {
    try {
        let productos = new Producto(req.body);
        await productos.save();
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un producto');
    }
}

//funcion buscar productos
exports.buscarProductos = async(req,res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un producto');
    }
}

//funcion para buscar un solo producto
exports.mostrarProducto = async(req,res) => {
    try {
        let productos = await Producto.findById(req.params.id);
        if(!productos){
            res.status(404).send({msg:"Producto no encontrado con ese ID"})
        }else{
            res.json(productos);
        }

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un producto');
    }
}

//funcion modificar producto metodo patch
exports.modificarProductos = async (req,res) =>{
    try {
        let productos = await Producto.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!productos){
            res.status(404).send({msg:"Producto no encontrado con ese ID"})
        }else{
            res.json(productos);
        }


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un producto');
    }
}

//////////////

//metodo put
exports.actualizarProductos = async (req,res) =>{
    try {
        const productos = await Producto.findOneAndUpdate({_id: req.params.id}, req.body, { new: true});
        if(!productos){
            res.status(404).send({msg:"Producto no encontrado con ese ID"})
        }else{
            res.json(productos);
        }


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un producto');
    }
}

//eliminar producto
exports.eliminarProductos = async (req,res) =>{
    try {
        const productos = await Producto.findById(req.params.id);
        if(!productos){
            res.status(404).send({msg:"Producto no encontrado con ese ID"})
        }else{
            await Producto.findOneAndDelete({_id: req.params.id});
            res.json({msg:"Producto eliminado"});
        }


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar el producto');
    }
}
