exports.demoMidd = (req, res, next) => {
    console.log('sou um middleware funcional');
    next();
}
