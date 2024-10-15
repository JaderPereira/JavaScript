exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            nome do cliente: <input type="text" name="nome">
            <button>enviar</button>
        </form> 
    `)
}

exports.trataPOST = (req, res) => {
    res.send('Esse texto só irá aparecer se um post for feito')
}


