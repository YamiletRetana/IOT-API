const express = require('express');
const router = express.Router();
const model = require('../model/valores')();//modelo con referencia

const Valor = require('../model/valores');//constante que extrae el valor solicitado de valores

//req es lo que estamos solicitando al servidor y lo que nos estaria contestando
router.get('/', async (req, res ) => {
    const valores = await Valor.find();//extrae todos los valores que esten dentro de la BD
    console.log(valores);//imprimir los valores
    res.render('index.ejs', {
        valores
    });
//res.send('Hola IOT')
});

router.post('/add', async (req, res ) => {
    const valor = new Valor(req.body);
    await valor.save();
    res.redirect('/');//redirrecionar ruta
});

module.exports = router;