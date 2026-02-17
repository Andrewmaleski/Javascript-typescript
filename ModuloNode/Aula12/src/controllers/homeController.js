const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'Um tiutlo de teste',
    descricao: 'Uma descrição teste'
})
.then(dados => console.log(dados))
.catch(error => console.log(error));

exports.paginainicial = (req, res) =>{
      res.render('index');
}

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de post');
}