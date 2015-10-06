'use strict';

angular.module('tljs.blog', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/blog', {
			templateUrl: 'blog/blog.html',
			controller: 'BlogCtrl'
		})
	}])

	.controller('BlogCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {
		$http.get('_posts/posts.json').success(function (data) {
			$scope.posts = data;
		});

		$scope.goToBlog = function(id) {
			$location.path('/blog' + id);
		};
	}]);