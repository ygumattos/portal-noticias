module.exports = app => {
    app.get('/', (req, res) => {
        app.app.controllers.indexController.Index(app, req, res);
    });
};

