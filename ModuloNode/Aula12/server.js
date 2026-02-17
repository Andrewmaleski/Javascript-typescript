require('dotenv').config();


//chamamos o express para usar ele para criar as rotas
const express = require('express');
const app = express();

//usado para connectar ao mongodb e tipar os dados e criar os chemas e models
const mongoose = require('mongoose');

//a conexão com o mongoDB retorna um promisse
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => console.log('conectou'))
    .catch(err => console.error('Erro ao acessar', err));

//usamos session para salvar as sessões do navegador
const session = require('express-session');

//Armazena os dados da sessão no MongoDB
const MongoStore = require('connect-mongo').default;

//Respostas rapidas como erro de usuario
const flash = require('connect-flash');

//chamamos o arquivo que contem as rotas do site
const routes = require('./routes');

//path que usamos para resolver caminhos
const path = require('path')

const csurf = require('csurf');
const helmet = require('helmet')
app.use(helmet());

//Permite ler dados enviados via formulário (req.body)
app.use(express.urlencoded({extended : true}));

//usamos para criar arquivos estaticos
app.use(express.static(path.resolve(__dirname,  'public')))

//Aqui criamos os dados da sessão, como secret que seria a assinatura da sessão
//Store onde salvamos a sessão
//resave, que salva algo no BD novamente caso mude alguma informação
//SaveUnitilized, cria a sessão somente quando algo for salvo nela
const sessionOptions = session({
    secret: process.env.SESSION_SECRET,
    store: MongoStore.create({
        mongoUrl: process.env.CONNECTIONSTRING
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

//Setando as views e o tipo delas
app.set('views', path.resolve(__dirname, 'src', 'views' ))
app.set('view engine', 'ejs');


app.use(csurf());
//Para usar middlewares
const {middlewareGlobal, csrfMiddleware } = require('./src/middlewares/middleware')
app.use(middlewareGlobal);
app.use(csrfMiddleware);


//aquii dizemos para o express usar o arquivo de rotas
app.use(routes);
app.listen(3000);
