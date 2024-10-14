const express = require('express')   //pegando o express q eu baixei
const app = express()                //variavel q vai portar o express
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }))
app.use(routes)


app.listen(3000, () => {
    console.log('acessar: http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})
