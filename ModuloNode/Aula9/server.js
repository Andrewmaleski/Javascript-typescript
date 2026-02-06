
//chamamos o express para usar ele para criar as rotas
const express = require('express');
const app = express();

//chamamos o arquivo que contem as ortas do site
const routes = require('./routes');

//path que usamos para resolver caminhos
const path = require('path')

//usado para ler dados que vem no body da requisição
app.use(express.urlencoded({extended : true}));

//usamos para criar arquivos estaticos
app.use(express.static(path.resolve(__dirname,  'public')))

//Setando as views e o tipo delas
app.set('views', path.resolve(__dirname, 'src', 'views' ))
app.set('view engine', 'ejs');

//aquii dizemos para o express usar o arquivo de rotas
app.use(routes);
app.listen(3000);
