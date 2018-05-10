/**
 * Created by Ro on 10/05/2018
 */

'use strict';

const express = require('express');
const UsuarioController = require('../controller/usuario');

const api = express.Router();

api.post('/login', UsuarioController.iniciarSesion);
api.put('/save', UsuarioController.guardarUsuario);

module.exports = api;