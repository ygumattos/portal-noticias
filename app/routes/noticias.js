module.exports = app => {
    app.get('/noticias', (req, res) => {
        app.app.controllers.noticiasController.Noticias(app, req, res);
    });

    app.get('/noticia', (req, res) => {
        app.app.controllers.noticiasController.Noticia(app, req, res);
    });
};

