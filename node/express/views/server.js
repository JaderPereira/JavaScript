const express = require('express')   //pegando o express q eu baixei
const app = express()                //variavel q vai portar o express
const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({ extended: true }))

//falando pro nosso servidor usar o views para renderizar um html
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)


app.listen(3000, () => {
    console.log('acessar: http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})
