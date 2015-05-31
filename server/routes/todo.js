var todoCtrl = require('../middlewares/todo');

module.exports = function(app) {
    app.route('/rest/todos')
        .get(todoCtrl.query)
        .post(todoCtrl.create);

    app.route('/rest/todos/:id')
        .get(todoCtrl.get)
        .put(todoCtrl.update)
        .delete(todoCtrl.delete);
};
