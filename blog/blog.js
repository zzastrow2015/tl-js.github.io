'use strict';

angular.module('tljs.blog', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/blog', {
			templateUrl: 'blog/blog.html',
			controller: 'BlogCtrl'
		})
	}])

	.controller('BlogCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {
		$scope.posts = [
			{
				"id": 1,
				"title": "First Post",
				"date": "2015-09-23",
				"text": "This is the first post on the tl.js blog. This will be a place to suggest ideas and improve the site."
			}
		];

		$scope.goToBlog = function(id) {
			$location.path('/blog' + id);
		};
	}]);