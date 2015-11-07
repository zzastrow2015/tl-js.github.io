'use strict';

angular.module('databaseEntry.detail', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/detail/:id', {
			templateUrl: 'detail.html',
			controller: 'DetailCtrl'
		});
	}])

	.controller('DetailCtrl', ['$scope', '$location', '$routeParams', 'DatabaseControlService', function ($scope, $location, $routeParams, DatabaseControlService) {
		var itemId = $routeParams.id;

		//Make sure that the initial data is populated.
		DatabaseControlService.ensureDataPopulated().then(function () {
			//			Thu Jan 01 2015 01:00:00 GMT-0600 (CST)
			$scope.item = DatabaseControlService.getItemByIndex(itemId-1);
			$scope.item.when = moment($scope.item.when)._d;
		});

		$scope.goto = function (where) {
			$location.path("/" + where);
		};

		$scope.updateItem = function (id) {
			debugger;
		};

		$scope.deleteItem = function (id) {
			debugger;
		};

	}]);