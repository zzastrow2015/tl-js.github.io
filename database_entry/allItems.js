'use strict';

angular.module('databaseEntry.list', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/list', {
			templateUrl: 'allItems.html',
			controller: 'ListCtrl'
		});
	}])

	.controller('ListCtrl', ['$scope', '$location', '$http', 'DatabaseControlService', function ($scope, $location, $http, DatabaseControlService) {
		var apiUrl = "https://historicaldv.herokuapp.com/";

		//Make sure that the initial data is populated.
		DatabaseControlService.ensureDataPopulated().then(function () {
			$scope.items = DatabaseControlService.getItems();
		});

		$scope.goto = function (where) {
			$location.path("/" + where);
		};

	}]);