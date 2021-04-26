//importamos clase Router de express
const { Router } = require('express');
const controllers = require('../controllers');

//Leemos controllers/index.js
const router = Router();

//definimos rutas
router.get('/', (req,res) => res.send('Welcome'))

//insertar a un nuevo usuario
router.post('/users', controllers.createUser);

//leer todos los usuarios
router.get('/users', controllers.getAllUsers);

module.exports = router;

