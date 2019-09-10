module.exports = app => {
    app.get('/form_add_noticia', (req, res) => {
        app.app.controllers.adminController.form_add_noticia(app, req, res);
    });

    app.post('/noticias/salvar', (req, res) => {
        app.app.controllers.adminController.noticias_salvar(app, req, res);
    });
};

