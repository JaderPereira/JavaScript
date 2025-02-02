require('dotenv').config()

const express = require('express')   //pegando o express q eu baixei
const app = express()                //variavel q vai portar o express
const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        //console.log('conectei com a base de dados') //se tiver em duvida descomenta a linha
        app.emit('pronto')
    })
    .catch(e => console.log(e))

const routes = require('./routes')
const path = require('path')
const globalMiddleware = require('./src/middlewares/globalMiddleware')


app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, 'public')))

//falando pro nosso servidor usar o views para renderizar um html
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(globalMiddleware)
app.use(routes)

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('acessar: http://localhost:3000')
        console.log('Servidor executando na porta 3000')
    })
})
