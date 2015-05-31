;(function() {
    var TodoFactory = function($resource) {
        var Todo = $resource('/rest/todos/:id', {
            id: '@_id'
        }, {
            update: {
                method: 'PUT'
            },
            delete: {
                method: 'DELETE'
            }
        });

        return Todo;
    };

    TodoFactory.$inject = [ '$resource' ];

    angular.module('todo').factory('Todo', TodoFactory);
})();