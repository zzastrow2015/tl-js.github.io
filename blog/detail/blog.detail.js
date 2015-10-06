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
		$http.get('_posts/posts.json').success(function (data) {
			for (var i in data) {
				data[i].date = moment(data[i].date).format('DD MMM YYYY');
			}

			$scope.posts = data;
		});

		$scope.selectedPostId = $routeParams.id;


	}]);