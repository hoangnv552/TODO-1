;(function() {
    var app = angular.module('todo', [
        'ngRoute',
        'ngResource'
    ]);

    app.config([ '$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            controller: 'List',
            templateUrl: 'app/views/list.html' // --> Ajax GET in 1st time

        }).when('/create', {
            controller: 'Create',
            templateUrl: 'app/views/create.html'
        }).when('/todo/:id', {
            controller: 'Detail',
            templateUrl: 'app/views/create.html',
            resolve: {
                // check data is isset before load page
                todo: function($route, Todo) {
                    var id = $route.current.params.id;

                    return Todo.get({
                        id: id
                    });
                }
            }
        }).otherwise({
            redirectTo: '/'
        });
    } ]).run(function() {

    });

    angular.element(window).ready(function() {
        angular.bootstrap(document.body, [ 'todo' ]);
    });
})();