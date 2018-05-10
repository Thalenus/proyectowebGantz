/**
 * Created by Ro on 10/05/2018
 */

'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noticiasSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    cuerpo: {
        type: String,
        required: true
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    foto: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    tag: [{
        type: String
    }],
    comentarios: [{
        comentario: {
            type: String,
        }
    }]

});

module.exports = mongoose.model('noticias', noticiasSchema)