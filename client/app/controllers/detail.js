;(function() {
    var DetailCtrl = function($scope, $routeParams, $location, todo) {
        $scope.todo = todo;

        $scope.createTodo = function() {
            $scope.todo.$update().then(function() {
                $location.path('/');
            });
        };
    };

    DetailCtrl.$inject = [ '$scope', '$routeParams', '$location', 'todo' ];

    angular.module('todo').controller('Detail', DetailCtrl);
})();