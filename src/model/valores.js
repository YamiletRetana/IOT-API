const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Valor = new Schema({
    temperatura: String,
    humedad: String,
    distancia: String,
    fecha:{
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('valores', Valor);