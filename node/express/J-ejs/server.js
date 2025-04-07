require('dotenv').config()

const express = require('express')   //pegando o express q eu baixei
const app = express()                //variavel q vai portar o express
const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('conectei com a base de dados') //se tiver em duvida descomenta a linha
        app.emit('pronto')
    })
    .catch(e => console.log(e))

//Chamanado as bilbiotecas do session e flash. mongostore serve pra conectar as sessões feitas lá na base de dados
const session = require('express-session')
const MongoStore = require('connect-mongo') 
const flash = require('connect-flash')

//chamando o path pra não ter problema com o caminho dos arquivos, chamando o routes pra fazer o arquivo de rotas e o globalMiddleware pra fazer o middleware global
const path = require('path')
const routes = require('./routes')
const globalMiddleware = require('./src/middlewares/globalMiddleware')

//configurando a pasta publica e o bodyparser
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))

//configurando a sessão pra ser jogada lá na base de dados
const sessionOptions = session({
    secret: 'fkjoweojfojwe',
    store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,     //deixando o cookie salvo por 7 dias, em milissegundos
        httpOnly: true
    }
})

//falando pro servidor usar essas configurações
app.use(sessionOptions)
app.use(flash())

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
