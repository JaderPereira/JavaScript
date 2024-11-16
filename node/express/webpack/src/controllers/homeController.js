exports.paginaInicial = (req, res) => {
    res.render('index')
}

exports.trataPOST = (req, res) => {
    res.send('Esse texto só irá aparecer se um post for feito')
}


