exports.demoMidd = (req, res, next) => {
    console.log('estou passando no middleware');
    next();
}
