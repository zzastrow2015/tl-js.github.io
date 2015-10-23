'use strict';

angular.module('databaseEntry.view', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/view', {
			templateUrl: 'view.html',
			controller: 'ViewCtrl'
		});
	}])

	.controller('ViewCtrl', ['$scope', '$location', function ($scope, $location) {
		var classifications = [
			{
				"title": "Invention",
				"icon": "fa-lightbulb"
			}
		];

		$scope.classifications = classifications;

		$scope.goto = function (where) {
			$location.path('/' + where);
		};
	}]);