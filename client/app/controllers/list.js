;(function() {
    var ListCtrl = function($scope, $location, Todo) {
        Todo.query().$promise.then(function(todos) {
            $scope.todos = todos;
        });

        $scope.changeStatus = function(todo) {
            todo.$update().then(function() {
                $location.path('/');
            });
        };

        $scope.deleteTodo = function(todo) {
            var index = $scope.todos.indexOf(todo);

            $scope.todos.splice(index, 1);

            todo.$delete().then(function() {
                $location.path('/');
            });
        };
    };

    ListCtrl.$inject = [ '$scope', '$location', 'Todo' ];

    angular.module('todo').controller('List', ListCtrl);
})();