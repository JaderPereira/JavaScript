exports.globalMiddleware = (req, res, next) => {
    if(req.body.cliente) {
        console.log()
        console.log('vi que voce postou', req.body.cliente)
        console.log()
    }
    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404')
    }
    next()
}
exports.csrfMiddleware = ((req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
  })