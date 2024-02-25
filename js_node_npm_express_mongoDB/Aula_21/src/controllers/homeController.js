exports.renderIndex = (req, res) => {
    res.render('index');
}

exports.renderIndexPosted = (req, res) => {
    const data = {...req.body};
    console.log(data,"Sou um objeto vindo do body");
    res.render('index',data);
}
