(function() {
	angular
		.module('myApp', [])
		.controller('MainController', ['$scope', function($scope) {

			$scope.countPerPage = 5;
			$scope.offset = 0;
			$scope.pages= [];
			$scope.pagesNumb=1;

			$scope.newTaskName = '';
			$scope.taskList = angular.fromJson(window.localStorage.getItem('taskList')) || [];

			$scope.addTask = function() {
				if ($scope.newTaskName) {
					$scope.taskList.push({
						id: $scope.taskList.length,
						name: $scope.newTaskName,
						done: false
					});
					$scope.newTaskName = '';
				}
			};

			$scope.removeTask = function(taskId) {
				for (var i = 0; i < $scope.taskList.length; i++) {
					if ($scope.taskList[i].id === taskId) {
						if (confirm('Are you sure you want to expell student `' + $scope.taskList[i].name + '` ?')) {
							$scope.taskList.splice(i, 1);
						}
						break;
					}
				}
			};

			$scope.removeAll = function () {
				if(confirm('Are you sure that they are all fools?')){
					$scope.taskList.splice($scope.offset, 5);
				}
			};
			
			$scope.makeTasksDone = function (isDone) {
				for (var i = 0; i < $scope.taskList.length; i++) {
					$scope.taskList[i].done = isDone;
				}
			};

			$scope.changePages = function (fromPage) {
				$scope.offset = $scope.countPerPage * fromPage;
			};

		$scope.$watch('taskList', function(newVal, oldVal) {
			$scope.pages= [];
			$scope.pagesNumb= Math.ceil($scope.taskList.length / $scope.countPerPage);
			for (var i = 0; i < $scope.pagesNumb; i++) {
				$scope.pages.push({id:i+1});
			}
				if (newVal !== oldVal) {
					window.localStorage.setItem('taskList', angular.toJson($scope.taskList));
				}
			}, true);
		}]);


})();
