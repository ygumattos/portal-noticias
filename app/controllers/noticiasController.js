module.exports.Noticias = (app, req, res) => {
    var connection = app.config.dbConnection();
    var NoticiasDAO = new app.app.models.NoticiasDAO(connection);

    NoticiasDAO.getNoticias((error,result) => {
        res.render("noticias/noticias", {noticias : result});
     });
}

module.exports.Noticia = (app, req, res) => {
    var connection = app.config.dbConnection();
    var NoticiasDAO = new app.app.models.NoticiasDAO(connection);

    var id_noticia = req.query;

    NoticiasDAO.getNoticia(id_noticia, (error,result) => {
        res.render("noticias/noticia", {noticia : result});
    });
}