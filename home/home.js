'use strict';

angular.module('tljs.home', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl: 'home/home.html',
			controller: 'HomeCtrl'
		});
	}])

	.controller('HomeCtrl', ['$scope', '$location', function ($scope, $location) {
		$scope.header = "This will be the landing page for tl.js";

		$scope.detail = "It is currently under construction.";

		$scope.redirect = function (toWhere) {
			switch (toWhere.toLowerCase()) {
				case "blog":
					$location.path("/blog");
					break;
				case "about":
					$location.path("/about");
					break;
			}
		};
	}]);