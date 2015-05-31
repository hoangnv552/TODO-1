var _ = require('lodash'),
    mongoose = require('mongoose');

var Todo = mongoose.model('Todo');

var self = module.exports;

var getTodoById = function(id) {
    return Todo.findById(id).exec();
};

self.query = function(req, res, next) {
    Todo.find().exec().then(function onResolve(todos) {
        return res.json(todos);
    }, function onError(err) {
        return res.status(500).json(err);
    });
};

self.create = function(req, res, next) {
    var todo = new Todo(req.body);

    todo.save(function(err) {
        if (err) {
            console.log(err);

            return res.status(500).json(err);
        }

        return res.json(todo);
    });
};

self.get = function(req, res, next) {
    getTodoById(req.params.id).then(function onResolve(todo) {
        return res.json(todo);
    }, function onError(err) {
        return res.status(500).json(err);
    });
};

self.update = function(req, res, next) {
    getTodoById(req.params.id).then(function onResolve(todo) {
        todo = _.assign(todo, req.body);

        todo.save(function() {
            return res.json(todo);
        });
    }, function onError(err) {
        return res.status(500).json(err);
    });
};

self.delete = function(req, res, next) {
    Todo.findByIdAndRemove(req.params.id).exec().then(function onResolve() {
        return res.json({
            result: true
        });
    }, function onError(err) {
        return res.status(500).json(err);
    });
};