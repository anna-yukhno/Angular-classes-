(function() {
    angular.module('myApp')
    .controller('FooterController', function($scope, User) {
        $scope.user = User.name;


        function updateName(newName) {
            $scope.user = newName;
        }

        User.registerCallback(updateName);

        
    })
})();