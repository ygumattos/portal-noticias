const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
var expressValidator = require('express-validator');

//as pesquisas de pastas são feitas
//a parti do app.js pois é para onde esta indo a config
//do server
const app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consign()
        .include('app/routes')
        .then('config/dbConnection.js') //necessário incluir a extensão para especificar o arquivo que quero executar. 
        .then('app/models')
        .then('app/controllers')
        .into(app);

module.exports = app;