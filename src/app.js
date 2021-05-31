const express = require('express');
const log = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const indexRoutes = require('./routers/index.js');

//escuchar servidor
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view egine', 'ejs');

//conexion a BD
mongoose.connect('mongodb+srv://yamilet:Q6nx9dszmrq0LFua@cluster0.gsdbh.mongodb.net/iot?retryWrites=true&w=majority').then(bd => console.log('BD se conecto')).catch(err => console.log(err));

//middleware es una funcion que se ejecuta siempre que se hace una peticon al servidor
app.use(log('dev'));//refrsh desde el navegador //morgan
app.use(bodyParser.urlencoded({extended: false}));

//rutas direccion url a donde estaria apuntando dicha funcion 
app.use('/', indexRoutes);

app.listen(app.get('port'), () =>{
    console.log('servidor funcionando en el puerto ', app.get('port'))
});