const express = require('express');
const app = express();
app.use(express.urlencoded({extended : true}));

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome do Cliente: <input type="text" name="nome">
        <button> Enviar </button>
        </form>
        `);
});


// //Para pegar parametros de URL ou Query usamos /:nomeparametro? assim se torna opcional
// app.get('/testes/:idusuarios?/:parametro?', (req, res) =>{
//     console.log(req.params)
//     res.send(req.query)
// })


//mas na nova versão pode ser feito assim
app.get('/testes', (req, res) =>{
   res.send(req.query)
})

app.post('/', (req, res) =>{
    res.send('Recebi o Formulario')
})


app.listen(3000);
