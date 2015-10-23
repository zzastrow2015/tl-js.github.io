'use strict';

angular.module('databaseEntry.add', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/add', {
			templateUrl: 'addClassification.html',
			controller: 'AddCtrl'
		});
	}])

	.controller('AddCtrl', ['$scope', '$location', function ($scope, $location) {
		var classifications = [
			{
				"title": "Invention",
				"icon": "fa-lightbulb-o"
			},
			{
				"title": "Photos",
				"icon": "fa-photo"
			}
		];

		$scope.classifications = classifications;

		$scope.goto = function (where) {
			$location.path('/' + where);
		};

		$scope.fontAwesomeIcons = [
			'fa-lightbulb-o',
			'fa-photo'
		];
	}]);