const express = require('express');
const path = require('path');
const conectarBD = require('../config/db');
const loginCollection = require('../models/loginCollection');
const cors = require('cors');

// Crear servidor
const app = express();
const port = process.env.PORT || 7000;

// Conectar a la base de datos
conectarBD();
app.use(cors());
app.use(express.json());

// Configuración del motor de vistas y la ubicación de `views`
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views')); // Asegúrate de que esta sea la ruta correcta relativa a index.js

// Rutas para APIs
app.use('/api/clientes', require('../routes/rutasCliente'));
app.use('/api/productos', require('../routes/rutasProducto'));
app.use('/api/usuarios', require('../routes/rutasUsuario'));

// Middleware para decodificar URL y JSON
app.use(express.urlencoded({ extended: true }));

// Rutas
app.get('/', (req, res) => {
    res.render('init'); // Renderiza index.ejs desde la carpeta `views`
});

app.get('/logout', (req, res) => {
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register', { error: '', data: {} });
});

app.post('/register', async (req, res) => {
    const { nombres, apellidos, documento, email, telefono, direccion, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).render('register', { error: 'Passwords do not match', data: req.body });
    }

    try {
        const existingUser = await loginCollection.findOne({ email });
        if (existingUser) {
            return res.status(400).render('register', { error: 'Email already registered', data: req.body });
        }

        const newUser = new loginCollection(req.body);
        await newUser.save();
        res.redirect('/login');
    } catch (error) {
        res.status(500).render('register', { error: 'Server error. Try again.', data: req.body });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await loginCollection.findOne({ email });

        if (!user) {
            return res.status(400).render('login', { error: 'Incorrect email or password', data: { email } });
        }

        if (user.password !== password) {
            return res.status(400).render('login', { error: 'Incorrect password' });
        }

        res.render('init', { nombres: user.nombres });
    } catch (error) {
        res.status(500).render('login', { error: 'An error occurred. Please try again.' });
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`El servidor está conectado en http://localhost:${port}`);
});


