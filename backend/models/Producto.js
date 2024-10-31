const mongoose = require('mongoose');

const productoSchema = mongoose.Schema({

    nombre:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    codigo:{
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    laboratorio:{
        type: String,
        required: true
    },
    ingreso:{
        type: Date,
        default: Date.now
    },
    fechaVencimiento:{
        type: Date,
        required: true
    },
    ima:{
        type: String,
        required: true
    },

},{versionkey:false});

module.exports = mongoose.model('Producto', productoSchema);