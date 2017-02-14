(function() {
    angular
        .module('myApp')
        .controller('HeaderController', function($scope, User, helpers) {
            $scope.userName = User.name;
            $scope.callCounter = 0;

            function updateNameInScope(newName) {
                //console.log($scope.callCounter + ' - ' + newName);
                $scope.userName = newName;
                $scope.callCounter++;
                 if ($scope.callCounter ===5) {User.unRegisterCallback(updateNameInScope)}
            }

            User.registerCallback(updateNameInScope);

            var names = ['Пылып', 'Петро', 'Иннокентий', 'Береза', 'Василий', 'Name', 'Name1'];

            $scope.changeName = function() {
                User.nameChange(names[helpers.rand(0, names.length - 1)]);
            };


        });
})();