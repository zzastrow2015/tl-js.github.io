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
			$scope.item = DatabaseControlService.getItemByIndex(itemId);
		});

		$scope.goto = function (where) {
			$location.path("/" + where);
		};

	}]);