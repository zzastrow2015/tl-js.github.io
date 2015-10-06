'use strict';

angular.module('tljs.about', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/about', {
			templateUrl: 'about/about.html',
			controller: 'AboutCtrl'
		});
	}])

	.controller('AboutCtrl', ['$scope', '$location', function ($scope, $location) {
		$scope.goal = "We want to create a better timeline";

		//This needs some work.
		$scope.detail = "a library that can be used to create interactive, time-organized data representations";
	}]);