exports.middlewareGlobal = (req, res, next ) => {
    res.send('Qualquer coisa')
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN'){
        return res.send('Bad CSRF.')
    }
}

exports.csrfMiddleware = (req, res, next) =>{
    res.locals.csrfToken = req.csrfToken();
    next();
}