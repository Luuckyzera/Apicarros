require('dotenv').config({path:'variaveis.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');



const routes = require('./Routers');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended : false}));


server.use('/api',routes);
//indicando ao server que usaramos o /api como 



server.listen(process.env.PORT, () =>{
    console.log(`Servidor rodando em : http://localhost:${process.env.PORT}`);
    // pegando a porta da variaveis.env
})



/*
    o cors serve para você conseguir acessar outras api´s
    mesmo estando em dominios diferentes.
    o body-parser é um modoulo capaz de converter um body de 
    requisição para varios formatos

*/

