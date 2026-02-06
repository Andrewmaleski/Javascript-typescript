exports.middlewareGlobal = (req, res, next ) => {
    res.send('Qualquer coisa')
    next();
}