'use strict';

angular.module('tljs.blog.detail', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/blog:id', {
			templateUrl: 'blog/detail/blog.detail.html',
			controller: 'BlogDetailCtrl'
		})
	}])

	.filter('filterById', function () {
		return function (input, id) {
			for (var i in input) {
				if (input[i].id == id) {
					return [input[i]];
				}
			}
			return [];
		}
	})

	.controller('BlogDetailCtrl', ['$scope', '$location', '$http', '$routeParams', function ($scope, $location, $http, $routeParams) {
		var posts = [
			{
				"id": 1,
				"title": "First Post",
				"date": "2015-09-23",
				"text": "This is the first post on the tl.js blog. This will be a place to suggest ideas and improve the site."
			}
		];

		for (var i in posts) {
			posts[i].date = moment(posts[i].date).format('DD MMM YYYY');
		}

		$scope.posts = posts;

		$scope.selectedPostId = $routeParams.id;


	}]);