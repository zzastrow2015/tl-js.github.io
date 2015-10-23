'use strict';

angular.module('databaseEntry.add', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/add', {
			templateUrl: 'addClassification.html',
			controller: 'AddCtrl'
		});
	}])

	.controller('AddCtrl', ['$scope', function ($scope) {

	}]);