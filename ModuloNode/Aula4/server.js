const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello Word!');
});


app.get('/contato', (req, res) =>{
    res.send('Obrigado por acessar minha pagina')
})

app.listen(3000);
