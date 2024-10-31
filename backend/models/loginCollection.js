const mongoose = require('mongoose');
//Connect to the database mongoose.connect('')
mongoose.connect('mongodb+srv://chaux:123456%2B%2D%2A%2F@cluster0.5iiox.mongodb.net/apiclientes')
.then(()=> {
    console.log('connected to the database')
})
.catch(() => {
    console.log('connection failed')
})

const loginSchema=new mongoose.Schema({
    nombres:{
        type:String,
        required:true
    },
    apellidos:{
        type:String,
        required:true
    },
    documento:{
        type:Number,
        required:true
    },
    email: {
        type: String,
        required: true
    },
    telefono:{
        type:Number,
        required:true
    },
    direccion:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const loginCollection = new mongoose.model('loginCollection',loginSchema)

module.exports = loginCollection