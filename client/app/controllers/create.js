;(function() {
    var CreateCtrl = function($scope, $location, Todo) {
        $scope.todo = new Todo();

        $scope.createTodo = function() {
            $scope.todo.$save().then(function() {
                $location.path('/');
            });
        };
    };

    CreateCtrl.$inject = [ '$scope', '$location', 'Todo' ];

    angular.module('todo').controller('Create', CreateCtrl);
})();