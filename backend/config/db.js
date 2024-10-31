const mongoose = require('mongoose');
require('dotenv').config();

//conexion con mongo db
const conectarBD = () => {
    mongoose
    .connect(process.env.DB_MONGO)
    .then(() => console.log('Estamos conectados con MongoDB'))
    .catch((err) => console.error(err));
}

module.exports = conectarBD;