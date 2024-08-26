function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({ message: 'Ocorreu um erro no servidor', error: err.message });
}

module.exports = errorHandler;
